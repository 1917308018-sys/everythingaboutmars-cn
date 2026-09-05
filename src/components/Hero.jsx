import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__body shell">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span>日本語専攻 · 日语专业</span>
            <span className="eyebrow__rule" />
            <span>UNDERGRADUATE · 2026</span>
          </p>

          <h1 className="hero__title">
            <span className="hero__title-line">文化と技術の中で、</span>
            <span className="hero__title-line hero__title-line--accent">
              コミュニケーションの架け橋を
            </span>
            <span className="hero__title-line hero__title-line--accent hero__title-line--last">
              見つける。
            </span>
          </h1>

          <p className="hero__title-zh">
            在文化与技术之中，寻找沟通的桥梁。
          </p>

          <p className="hero__intro">{profile.greeting}</p>

          <div className="hero__actions">
            <a className="btn" href="#about">
              経歴を見る · 查看经历
            </a>
            <a className="text-link" href="#contact">
              はなす · 联系我
            </a>
          </div>
        </div>

        <aside className="vertical-text" aria-hidden="true">
          <span className="vertical-text__ja">言葉は、余白から生まれる。</span>
          <span className="vertical-text__zh">语言，生于余白。</span>
        </aside>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-label">SCROLL</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
