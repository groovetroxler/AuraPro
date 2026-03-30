'use client'

import type { KeyboardEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { RootLocale } from './rootLandingContent'

const LANGUAGE_OPTIONS = [
  { locale: 'en', label: 'English', short: 'EN', href: '/' },
  { locale: 'pt', label: 'Portugues', short: 'PT', href: '/pt' },
] as const

interface LanguageSwitcherProps {
  currentLocale: RootLocale
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'Escape') {
      setOpen(false)
      event.currentTarget.blur()
    }
  }

  const activeOption =
    LANGUAGE_OPTIONS.find((option) => option.locale === currentLocale) ?? LANGUAGE_OPTIONS[0]

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        aria-label="Select language"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={handleTriggerKeyDown}
        className="inline-flex w-40 items-center justify-between rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-1.5 shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
      >
        <span
          aria-hidden="true"
          className="inline-flex h-6 w-6 items-center justify-center text-slate-600"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a15 15 0 0 1 0 18" />
            <path d="M12 3a15 15 0 0 0 0 18" />
          </svg>
        </span>
        <span className="inline-flex min-w-[84px] items-center gap-1.5">
          <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-slate-100 px-1 py-0.5 text-[9px] font-medium text-slate-700">
            {activeOption.short}
          </span>
          <span className="text-[11px] font-medium text-slate-700">{activeOption.label}</span>
        </span>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-3.5 w-3.5 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.116l3.71-3.886a.75.75 0 1 1 1.08 1.04l-4.25 4.455a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Language options"
          className="absolute right-0 z-20 mt-1.5 w-40 overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 p-1 shadow-[0_12px_24px_rgba(15,23,42,0.10)]"
        >
          {LANGUAGE_OPTIONS.map((option) => {
            const isActive = option.locale === currentLocale
            return (
              <Link
                key={option.locale}
                href={option.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 ${
                  isActive ? 'bg-slate-100/80 text-slate-900' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="inline-flex min-w-6 items-center justify-center rounded-md bg-slate-100 px-1 py-0.5 text-[9px] font-semibold text-slate-700">
                  {option.short}
                </span>
                <span className="flex-1">{option.label}</span>
                {isActive ? (
                  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 text-sky-700" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.08 7.14a1 1 0 0 1-1.42 0L3.29 8.924a1 1 0 1 1 1.42-1.408l4.21 4.246 6.37-6.427a1 1 0 0 1 1.414-.045Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : null}
              </Link>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
