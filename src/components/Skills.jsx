import { skills } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'
import ScrollStack, { ScrollStackItem } from './Effects/ScrollStack.jsx'

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

        <div className="skills-stack">
          <ScrollStack
            className="skills-stack-scroller"
            useWindowScroll
            itemDistance={100}
            itemScale={0.02}
            itemStackDistance={40}
            stackPosition="18%"
            scaleEndPosition="8%"
            baseScale={0.78}
            rotationAmount={0}
            blurAmount={0}
          >
          {skills.map((skill, index) => (
            <ScrollStackItem
              key={skill.ja}
              itemClassName={`skill-card skill-stack-card skill-card--${
                index + 1
              }`}
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
            </ScrollStackItem>
          ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  )
}
