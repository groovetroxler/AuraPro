'use client'
import React, { useState } from 'react'
import type { FaqBlock as FaqBlockType } from '../types/contracts'

interface Props { block: FaqBlockType }

export function FaqBlock({ block }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Perguntas Frequentes</h2>
      <div className="space-y-3">
        {block.items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full text-left px-5 py-4 font-medium text-gray-800 flex justify-between items-center hover:bg-gray-50"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {item.question}
              <span className="ml-4 text-xl" style={{ color: 'var(--color-primary)' }}>
                {open === i ? '−' : '+'}
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
