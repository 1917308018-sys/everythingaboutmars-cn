import { asset, profile, contacts, stats, education } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'
import BubbleMenu from './Effects/BubbleMenu.jsx'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="shell">
        <SectionHead
          no="01"
          ja="経歴"
          zh="经历"
          en="ABOUT"
          vertical="日本語を学ぶ、一人の記録。"
          verticalZh="日语学习者的一份记录。"
        />

        <div className="about__grid">
          <div className="about__left">
            <figure className="about__figure" data-reveal>
              <div className="frame about__portrait" aria-label="人物照片">
                {profile.photo ? (
                  <img
                    src={asset(profile.photo)}
                    alt={`${profile.nameZh} 的照片`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className="ph portrait-ph"
                    role="img"
                    aria-label="人物照片占位"
                  >
                    <span className="ph__char" aria-hidden="true">
                      学
                    </span>
                    <span className="ph__rule ph__rule--v" aria-hidden="true" />
                    <span className="ph__rule ph__rule--h" aria-hidden="true" />
                    <span className="ph__label">馬蘇 / PORTRAIT</span>
                  </div>
                )}
              </div>
              <figcaption className="about__figure-cap">
                <span>PHOTO — 本人照待替换</span>
                <span>GUANGDONG · 2026</span>
              </figcaption>
            </figure>

            <div className="about__interest-zone">
              <BubbleMenu />
            </div>
          </div>

          <div className="about__body">
            <p className="about__lead" data-reveal>
              {profile.nameZh} — {profile.role}
            </p>
            <h2 className="about__title" data-reveal data-reveal-delay="0.08">
              <span>从张家口到广州</span>
              <span className="about__title-accent">从英语到日语</span>
            </h2>
            <p className="about__text" data-reveal data-reveal-delay="0.16">
              {profile.about}
            </p>

            <div className="about__history">
              <p className="about__history-title" data-reveal>
                <span>経歴</span>
                <em>经历 · EXPERIENCE</em>
              </p>
              {education.map((entry, entryIndex) => (
                <div
                  className="about__history-item"
                  key={entry.school}
                  data-reveal
                  data-reveal-delay={String(entryIndex * 0.08)}
                >
                  <p className="about__history-period">{entry.period}</p>
                  <div className="about__history-main">
                    <h3 className="about__history-school">{entry.school}</h3>
                    <p className="about__history-role">{entry.role}</p>
                    <ul className="about__history-list">
                      {entry.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <dl className="about__info">
              <div className="about__info-row" data-reveal>
                <dt>出身地 / 家乡</dt>
                <dd>{profile.hometown}</dd>
              </div>
              <div className="about__info-row" data-reveal data-reveal-delay="0.04">
                <dt>档案</dt>
                <dd>{profile.basicInfo}</dd>
              </div>
              <div className="about__info-row" data-reveal data-reveal-delay="0.08">
                <dt>在学 / 学校</dt>
                <dd>
                  {profile.university}
                  <br />
                  <span className="about__info-note">{profile.department}</span>
                </dd>
              </div>
              <div className="about__info-row" data-reveal data-reveal-delay="0.12">
                <dt>電話 / 电话</dt>
                <dd>
                  <a className="link-line" href={`tel:${profile.phone}`}>
                    {profile.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="about__info-row" data-reveal data-reveal-delay="0.16">
                <dt>メール / 邮箱</dt>
                <dd>
                  <a className="link-line" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div className="about__info-row" data-reveal data-reveal-delay="0.2">
                <dt>SNS</dt>
                <dd className="about__sns">
                  {contacts.slice(1).map((contact) => (
                    <a className="link-line" href={contact.url} key={contact.label}>
                      {contact.handle}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>

            {/* 项目数据（来自简历） */}
            <ul className="about__stats">
              {stats.map((stat, statIndex) => (
                <li
                  className="about__stat"
                  key={stat.label}
                  data-reveal
                  data-reveal-delay={String(statIndex * 0.07)}
                >
                  <span className="about__stat-value">
                    {stat.value}
                    {stat.unit && <small>{stat.unit}</small>}
                  </span>
                  <span className="about__stat-label">{stat.label}</span>
                  <span className="about__stat-note">{stat.note}</span>
                </li>
              ))}
            </ul>

            <p className="about__hobbies" data-reveal>
              <span>趣味 / 爱好 · HOBBIES</span>
              {profile.hobbies.map((hobby, index) => (
                <span className="about__hobbies-item" key={hobby}>
                  {index > 0 && <i aria-hidden="true">/</i>}
                  {hobby}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
