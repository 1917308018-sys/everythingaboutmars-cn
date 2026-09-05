import { profile, contacts } from '../data/profile.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__vertical" aria-hidden="true">
        <span data-reveal data-reveal-delay="0.12">
          お問い合わせは、いつでも。
        </span>
        <span className="contact__vertical-zh" data-reveal data-reveal-delay="0.2">
          欢迎随时联系。
        </span>
      </div>

      <div className="shell contact__body">
        <p className="eyebrow contact__eyebrow" data-reveal>
          <span>04</span>
          <span className="eyebrow__rule" />
          <span>CONTACT</span>
        </p>

        <h2 className="contact__title" data-reveal data-reveal-delay="0.08">
          一緒に、
          <br />
          何かをつくりませんか。
        </h2>

        <p
          className="contact__title-zh"
          data-reveal
          data-reveal-delay="0.16"
        >
          一起，做点什么吧。
        </p>

        <p className="contact__lead" data-reveal data-reveal-delay="0.24">
          关于模拟联合国、日语学习、AI 工具，或只是想打声招呼——都可以写信给我。
        </p>

        <a
          className="btn contact__btn"
          href={`mailto:${profile.email}`}
          data-reveal
          data-reveal-delay="0.32"
        >
          {profile.email}
        </a>

        <div className="contact__links" data-reveal data-reveal-delay="0.4">
          {contacts.map((contact) => (
            <a
              className="link-line"
              href={contact.url}
              key={contact.label}
            >
              <span>{contact.label}</span>
              <span>{contact.handle}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="contact__foot shell" data-reveal>
        <span>© 2026 {profile.nameZh}</span>
        <span>{profile.department}</span>
        <span>EverythingAboutMars.cn</span>
      </footer>
    </section>
  )
}
