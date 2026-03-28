import React from 'react'
import type { CalloutBlock as CalloutBlockType } from '../types/contracts'

interface Props { block: CalloutBlockType }

const CALLOUT_STYLES: Record<CalloutBlockType['calloutType'], { border: string; bg: string; icon: string; text: string }> = {
  tip: { border: 'border-green-400', bg: 'bg-green-50', icon: '💡', text: 'text-green-800' },
  warning: { border: 'border-yellow-400', bg: 'bg-yellow-50', icon: '⚠️', text: 'text-yellow-800' },
  info: { border: 'border-blue-400', bg: 'bg-blue-50', icon: 'ℹ️', text: 'text-blue-800' },
  danger: { border: 'border-red-400', bg: 'bg-red-50', icon: '🚨', text: 'text-red-800' },
}

export function CalloutBlock({ block }: Props) {
  const style = CALLOUT_STYLES[block.calloutType]

  return (
    <div className={`max-w-3xl mx-auto px-6 py-3`}>
      <div className={`border-l-4 ${style.border} ${style.bg} rounded-r-lg p-4`}>
        {block.title && (
          <p className={`font-semibold ${style.text} mb-1`}>
            {style.icon} {block.title}
          </p>
        )}
        <p className={`${style.text} text-sm leading-relaxed`}>
          {!block.title && <span className="mr-1">{style.icon}</span>}
          {block.content}
        </p>
      </div>
    </div>
  )
}
