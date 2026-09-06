import { useState } from 'react'

const INTEREST_ITEMS = [
  { label: 'FPS游戏', x: -128, y: -116 },
  { label: '音乐', x: 128, y: -116 },
  { label: '健身', x: -128, y: -22 },
  { label: '篮球', x: 128, y: -22 },
  { label: '烹饪', x: -128, y: 72 },
  { label: '摄影', x: 128, y: 72 },
]

export default function BubbleMenu({
  items = INTEREST_ITEMS,
  triggerLabel = '点击一下来了解我的兴趣',
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`bubble-menu-zone${open ? ' is-open' : ''}`}
      aria-live="polite"
    >
      <button
        type="button"
        className="bubble-menu__trigger"
        aria-expanded={open}
        aria-label={open ? '收起兴趣标签' : triggerLabel}
        onClick={() => setOpen((v) => !v)}
      >
        <span>点击一下</span>
        <span>来了解我的兴趣</span>
      </button>

      <ul className="bubble-menu__list" aria-hidden={!open}>
        {items.map((item, index) => (
          <li
            key={item.label}
            className="bubble-menu__item"
            style={{
              '--bx': `${item.x}px`,
              '--by': `${item.y}px`,
              '--in-d': `${0.1 + index * 0.07}s`,
              '--out-d': `${(items.length - index) * 0.03}s`,
            }}
          >
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
