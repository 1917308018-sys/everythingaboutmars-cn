import { useEffect, useState } from 'react'
import { profile, navItems } from '../data/profile.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="回到首页">
          <span className="site-header__mark">{profile.nameZh}</span>
          <span className="site-header__sub">
            {profile.nameEn} — EverythingAboutMars.cn
          </span>
        </a>

        <nav className="site-nav" aria-label="主导航">
          {navItems.map((item) => (
            <a className="link-line" href={`#${item.id}`} key={item.id}>
              <span>{item.ja}</span>
              <em>
                {item.zh} · {item.en}
              </em>
            </a>
          ))}
        </nav>

        <a className="btn btn--small" href="#contact">
          はなす · 联系
        </a>
      </div>
    </header>
  )
}
