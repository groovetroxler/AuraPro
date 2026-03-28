/**
 * scripts/create-site.ts
 * Scaffold de criação de novo site — Fase 1B
 *
 * Uso: npx tsx scripts/create-site.ts
 *
 * Sequência:
 * 1. Coleta inputs interativos (siteKey, publicName, routePath, primaryColor)
 * 2. Valida inputs contra o registry existente
 * 3. Gera sites/<siteKey>/index.ts com config e páginas placeholder
 * 4. Atualiza sites/registry.ts com import e entrada
 * 5. Executa validação de contrato (build)
 * 6. Commit + push automático
 */

import * as fs from 'fs'
import * as path from 'path'
import * as readline from 'readline'
import { execSync } from 'child_process'

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

const ROOT = path.resolve(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const REGISTRY_PATH = path.join(SITES_DIR, 'registry.ts')

function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

function toExportName(siteKey: string): string {
  return `${kebabToCamel(siteKey)}Site`
}

function isValidHex(color: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(color)
}

function ask(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()))
  })
}

function getExistingSiteKeys(): string[] {
  const content = fs.readFileSync(REGISTRY_PATH, 'utf-8')
  const matches = content.match(/siteKey:\s*['"]([^'"]+)['"]/g) || []
  // Also parse from import paths as fallback
  const importMatches = content.match(/from\s+'\.\/([^']+)'/g) || []
  const fromImports = importMatches.map((m) => m.match(/from\s+'\.\/([^']+)'/)?.[1] || '')
  
  // Read actual directories in sites/
  const dirs = fs.readdirSync(SITES_DIR).filter((d) => {
    const fullPath = path.join(SITES_DIR, d)
    return fs.statSync(fullPath).isDirectory()
  })
  
  return dirs
}

function getExistingRoutePaths(): string[] {
  const content = fs.readFileSync(REGISTRY_PATH, 'utf-8')
  // Read all site index files to find routePaths
  const dirs = getExistingSiteKeys()
  const routePaths: string[] = []
  
  for (const dir of dirs) {
    const indexPath = path.join(SITES_DIR, dir, 'index.ts')
    if (fs.existsSync(indexPath)) {
      const siteContent = fs.readFileSync(indexPath, 'utf-8')
      const match = siteContent.match(/const\s+ROUTE_PATH\s*=\s*['"]([^'"]+)['"]/)
      if (match) routePaths.push(match[1])
    }
  }
  
  return routePaths
}

function readGitToken(): string | null {
  // Try _credentials.env in project root
  const credPath = path.join(ROOT, '_credentials.env')
  if (!fs.existsSync(credPath)) {
    // Try from /mnt/project
    const mntPath = '/mnt/project/_credentials.env'
    if (fs.existsSync(mntPath)) {
      const content = fs.readFileSync(mntPath, 'utf-8')
      const match = content.match(/GIT_TOKEN=(.+)/)
      return match ? match[1].trim() : null
    }
    return null
  }
  const content = fs.readFileSync(credPath, 'utf-8')
  const match = content.match(/GIT_TOKEN=(.+)/)
  return match ? match[1].trim() : null
}

function readGitRepoUrl(): string | null {
  const credPath = path.join(ROOT, '_credentials.env')
  const paths = [credPath, '/mnt/project/_credentials.env']
  
  for (const p of paths) {
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf-8')
      const match = content.match(/GIT_REPO_URL=(.+)/)
      return match ? match[1].trim() : null
    }
  }
  return null
}

// ─────────────────────────────────────────────
// PUBLISHER ID — valor global do projeto
// ─────────────────────────────────────────────

const ADSENSE_PUBLISHER_ID = 'ca-pub-7072076910984234'

// ─────────────────────────────────────────────
// GERAÇÃO DO ARQUIVO DE SITE
// ─────────────────────────────────────────────

function generateSiteFile(
  siteKey: string,
  publicName: string,
  routePath: string,
  primaryColor: string
): string {
  const exportName = toExportName(siteKey)
  const siteKeyUpper = siteKey.toUpperCase().replace(/-/g, '_')

  return `/**
 * sites/${siteKey}/index.ts
 * Gerado pelo scaffold — Fase 1B
 * Conteúdo placeholder — substituir por conteúdo real via Rotina 2
 */

import type { SiteEntry } from '../../core/types/contracts'

const SITE_KEY = '${siteKey}'
const ROUTE_PATH = '${routePath}'
import { resolveSiteBaseUrl } from '../../config/site-url'
const BASE_URL = resolveSiteBaseUrl(ROUTE_PATH)

export const ${exportName}: SiteEntry = {
  config: {
    siteKey: SITE_KEY,
    publicName: '${publicName}',
    routePath: ROUTE_PATH,
    locale: 'pt-BR',
    market: 'BR',
    status: 'active',
    theme: {
      brandName: '${publicName}',
      primaryColor: '${primaryColor}',
    },
    seo: {
      siteTitle: '${publicName}',
      defaultTitleTemplate: '%s | ${publicName}',
      defaultDescription: '/* PLACEHOLDER — substituir por descrição real do site */',
      baseUrl: BASE_URL,
    },
    analytics: {
      ga4MeasurementId: '',
      enabled: false,
    },
    monetization: {
      ads: {
        enabled: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'true',
        provider: 'adsense',
        publisherId: '${ADSENSE_PUBLISHER_ID}',
      },
      affiliates: {
        enabled: false,
        programs: [],
      },
    },
  },
  pages: [
    {
      id: '${siteKey}-home',
      siteKey: SITE_KEY,
      type: 'home',
      slug: 'home',
      title: 'Início',
      status: 'published',
      meta: {
        title: '${publicName} — Guia Completo',
        description: '/* PLACEHOLDER — substituir por descrição real da home */',
      },
      blocks: [
        {
          type: 'hero',
          heading: '${publicName}',
          subheading: '/* PLACEHOLDER — substituir por subtítulo real */',
          ctaLabel: 'Saiba mais',
          ctaHref: \`/\${ROUTE_PATH}/introducao\`,
        },
        {
          type: 'richText',
          html: '<p>/* PLACEHOLDER — substituir por conteúdo real da home */</p>',
        },
        {
          type: 'adSlot',
          slotId: '${routePath}-home-top',
          format: 'responsive',
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Introdução', href: \`/\${ROUTE_PATH}/introducao\` },
          ],
        },
        {
          type: 'cta',
          label: 'Começar a ler',
          href: \`/\${ROUTE_PATH}/introducao\`,
          variant: 'primary',
        },
      ],
    },
    {
      id: '${siteKey}-introducao',
      siteKey: SITE_KEY,
      type: 'article',
      slug: 'introducao',
      title: 'Introdução',
      status: 'published',
      meta: {
        title: 'Introdução — ${publicName}',
        description: '/* PLACEHOLDER — substituir por descrição real */',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Introdução',
          subheading: '/* PLACEHOLDER — substituir por subtítulo real */',
        },
        {
          type: 'articleContent',
          html: \`
            <h2>/* PLACEHOLDER */</h2>
            <p>Este conteúdo é placeholder e deve ser substituído por conteúdo real via Rotina 2 (ver CONTENT_GUIDE.md).</p>
          \`,
        },
        {
          type: 'adSlot',
          slotId: '${routePath}-introducao-mid',
          format: 'rectangle',
        },
        {
          type: 'cta',
          label: 'Voltar para a home',
          href: \`/\${ROUTE_PATH}\`,
          variant: 'secondary',
        },
      ],
    },
  ],
}
`
}

// ─────────────────────────────────────────────
// ATUALIZAÇÃO DO REGISTRY
// ─────────────────────────────────────────────

function updateRegistry(siteKey: string): void {
  const exportName = toExportName(siteKey)
  let content = fs.readFileSync(REGISTRY_PATH, 'utf-8')

  // 1. Adicionar import — após o último import de site (from './<dir>')
  const lastImportRegex = /^import\s+\{[^}]+\}\s+from\s+'\.\/[^']+'/gm
  let lastImportMatch: RegExpExecArray | null = null
  let match: RegExpExecArray | null

  while ((match = lastImportRegex.exec(content)) !== null) {
    lastImportMatch = match
  }

  if (!lastImportMatch) {
    throw new Error('Não foi possível localizar os imports de sites no registry.ts')
  }

  const importLine = `import { ${exportName} } from './${siteKey}'`
  const insertPos = lastImportMatch.index + lastImportMatch[0].length
  content = content.slice(0, insertPos) + '\n' + importLine + content.slice(insertPos)

  // 2. Adicionar entrada no ALL_ENTRIES
  // Encontrar '= [' após ALL_ENTRIES para pegar o array, não o tipo SiteEntry[]
  const allEntriesStart = content.indexOf('const ALL_ENTRIES')
  const arrayOpenStr = '= ['
  const arrayOpenPos = content.indexOf(arrayOpenStr, allEntriesStart)

  if (arrayOpenPos === -1) {
    throw new Error('Não foi possível localizar ALL_ENTRIES = [ no registry.ts')
  }

  const bracketStart = arrayOpenPos + arrayOpenStr.length - 1 // posição do '['

  // Encontrar o ']' correspondente
  let depth = 0
  let closingBracketPos = -1

  for (let i = bracketStart; i < content.length; i++) {
    if (content[i] === '[') depth++
    if (content[i] === ']') {
      depth--
      if (depth === 0) {
        closingBracketPos = i
        break
      }
    }
  }

  if (closingBracketPos === -1) {
    throw new Error('Não foi possível localizar o fechamento de ALL_ENTRIES no registry.ts')
  }

  // Inserir antes do ']'
  const beforeClose = content.slice(0, closingBracketPos).trimEnd()
  const afterClose = content.slice(closingBracketPos)
  const needsComma = !beforeClose.endsWith(',')

  content = beforeClose + (needsComma ? ',' : '') + '\n  ' + exportName + ',\n' + afterClose

  fs.writeFileSync(REGISTRY_PATH, content, 'utf-8')
}

// ─────────────────────────────────────────────
// EXECUÇÃO PRINCIPAL
// ─────────────────────────────────────────────

async function main() {
  console.log('\n🏗️  AuraPro — Scaffold de criação de site (Fase 1B)\n')

  try {
    // 1. Coletar inputs (CLI args ou interativo)
    const args = process.argv.slice(2)
    let siteKey: string, publicName: string, routePath: string, primaryColor: string

    if (args.length >= 4) {
      ;[siteKey, publicName, routePath, primaryColor] = args
      console.log(`  Inputs via CLI: ${siteKey}, ${publicName}, ${routePath}, ${primaryColor}`)
    } else {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      })
      siteKey = await ask(rl, 'siteKey (ex: saude-br): ')
      publicName = await ask(rl, 'publicName (ex: Saúde BR): ')
      routePath = await ask(rl, 'routePath (ex: saude): ')
      primaryColor = await ask(rl, 'primaryColor (ex: #16a34a): ')
      rl.close()
    }

    // 2. Validar inputs
    console.log('\n📋 Validando inputs...')

    if (!siteKey) throw new Error('siteKey não pode ser vazio')
    if (!publicName) throw new Error('publicName não pode ser vazio')
    if (!routePath) throw new Error('routePath não pode ser vazio')
    if (!primaryColor) throw new Error('primaryColor não pode ser vazio')
    if (!isValidHex(primaryColor)) throw new Error(`primaryColor inválido: "${primaryColor}". Use formato hex (#RRGGBB)`)

    const existingKeys = getExistingSiteKeys()
    if (existingKeys.includes(siteKey)) {
      throw new Error(`siteKey "${siteKey}" já existe no registry`)
    }

    const existingPaths = getExistingRoutePaths()
    if (existingPaths.includes(routePath)) {
      throw new Error(`routePath "${routePath}" já existe no registry`)
    }

    console.log('  ✅ Inputs válidos')

    // 3. Gerar arquivo do site
    console.log('\n📁 Gerando pacote do site...')

    const siteDir = path.join(SITES_DIR, siteKey)
    fs.mkdirSync(siteDir, { recursive: true })

    const siteContent = generateSiteFile(siteKey, publicName, routePath, primaryColor)
    fs.writeFileSync(path.join(siteDir, 'index.ts'), siteContent, 'utf-8')

    console.log(`  ✅ sites/${siteKey}/index.ts criado`)

    // 4. Atualizar registry
    console.log('\n📝 Atualizando registry...')
    updateRegistry(siteKey)
    console.log('  ✅ sites/registry.ts atualizado')

    // 5. Validar contrato (via build)
    console.log('\n🔨 Executando build para validar contratos...')
    try {
      execSync('npm run build', { cwd: ROOT, stdio: 'pipe' })
      console.log('  ✅ Build passou — contratos válidos')
    } catch (buildError: unknown) {
      console.error('\n❌ Build falhou! Revertendo alterações...')
      fs.rmSync(siteDir, { recursive: true, force: true })
      execSync('git checkout -- sites/registry.ts', { cwd: ROOT })

      const stdout = (buildError as { stdout?: Buffer })?.stdout?.toString() || ''
      const stderr = (buildError as { stderr?: Buffer })?.stderr?.toString() || ''
      throw new Error(`Build falhou.\n${stdout}\n${stderr}`)
    }

    // 6. Commit
    console.log('\n📦 Commitando...')
    execSync('git add -A', { cwd: ROOT })
    const commitMsg = `feat: criar site ${siteKey} via scaffold (Fase 1B)\n\n- siteKey: ${siteKey}\n- publicName: ${publicName}\n- routePath: ${routePath}\n- primaryColor: ${primaryColor}\n- Conteúdo placeholder — substituir via Rotina 2`
    execSync(`git commit -m "${commitMsg}"`, { cwd: ROOT })
    console.log('  ✅ Commit realizado')

    // 7. Push
    console.log('\n🚀 Fazendo push...')
    const gitToken = readGitToken()
    const repoUrl = readGitRepoUrl()

    if (gitToken && repoUrl) {
      const authedUrl = repoUrl.replace('https://', `https://x-access-token:${gitToken}@`)
      execSync(`git remote set-url origin "${authedUrl}"`, { cwd: ROOT })
      execSync('git push origin main', { cwd: ROOT, stdio: 'pipe' })
      console.log('  ✅ Push realizado — Vercel fará auto-deploy')
    } else {
      console.warn('  ⚠️  Token Git não encontrado. Faça push manualmente: git push origin main')
    }

    // 8. Resumo
    console.log('\n' + '═'.repeat(60))
    console.log('✅ Site criado com sucesso!')
    console.log('═'.repeat(60))
    console.log(`\n  siteKey:      ${siteKey}`)
    console.log(`  publicName:   ${publicName}`)
    console.log(`  routePath:    ${routePath}`)
    console.log(`  primaryColor: ${primaryColor}`)
    console.log(`\n  Arquivo:      sites/${siteKey}/index.ts`)
    console.log(`  URL:          <NEXT_PUBLIC_BASE_URL>/${routePath}`)
    console.log(`\n📋 Próximos passos:`)
    console.log(`  1. Aguardar auto-deploy no Vercel`)
    console.log(`  2. Verificar URL pública`)
    console.log(`  3. Criar propriedade GA4 e inserir ga4MeasurementId`)
    console.log(`  4. Substituir conteúdo placeholder via Rotina 2 (CONTENT_GUIDE.md)`)
    console.log('')

  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error(`\n❌ Erro: ${msg}\n`)
    process.exit(1)
  }
}

main()
