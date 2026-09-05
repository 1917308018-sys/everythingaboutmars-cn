import { asset, projects } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="shell">
        <SectionHead
          no="02"
          ja="作品"
          zh="作品"
          en="WORKS"
          vertical="日々の練習と、ささやかな記録。"
          verticalZh="每天的练习与细微的记录。"
        />

        <div className="projects__list">
          {projects.map((project, index) => {
            const chars = ['模', '英', '日']
            return (
              <article
                className={`project${index % 2 === 1 ? ' project--right' : ''}`}
                key={project.no}
              >
                <a
                  className={`project__media frame project__media--${project.ratioClass}`}
                  href="#projects"
                  data-reveal
                >
                  {project.image ? (
                    <img
                      src={asset(project.image)}
                      alt={`${project.titleZh} 配图`}
                    />
                  ) : (
                    <div
                      className={`ph ${project.visual}`}
                      role="img"
                      aria-label={`${project.titleZh} 照片占位`}
                    >
                      <span className="ph__char" aria-hidden="true">
                        {chars[index]}
                      </span>
                      <span className="ph__meta" aria-hidden="true">
                        IMAGE PLACEHOLDER
                      </span>
                    </div>
                  )}
                </a>

                <div
                  className="project__info"
                  data-reveal
                  data-reveal-delay="0.12"
                >
                  <p className="project__no">
                    {project.no} / {project.year}
                  </p>
                  <h3 className="project__title">
                    <a className="link-line" href="#projects">
                      {project.title}
                    </a>
                    <span className="project__title-zh">{project.titleZh}</span>
                  </h3>
                  <p className="project__role">
                    <span className="project__role-ja">{project.category}</span>
                    <span>
                      {project.categoryZh} · {project.role}
                    </span>
                  </p>
                  <p className="project__desc">{project.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
