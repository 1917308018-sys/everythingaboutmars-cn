import { skills } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="shell">
        <SectionHead
          no="03"
          ja="力"
          zh="能力"
          en="STRENGTHS"
          vertical="ゆっくり、積み重ねる。"
          verticalZh="慢慢地，积累下去。"
        />

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <article
              className="skill-card"
              key={skill.ja}
              data-reveal
              data-reveal-delay={String(index * 0.09)}
            >
              <header className="skill-card__head">
                <span className="skill-card__no">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="skill-card__ja" aria-hidden="true">
                  {skill.ja}
                </span>
              </header>
              <h3 className="skill-card__title">{skill.title}</h3>
              <p className="skill-card__desc">{skill.desc}</p>
              <ul className="skill-card__points">
                {skill.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
