export default function SectionHead({ no, ja, zh, en, vertical, verticalZh }) {
  return (
    <div className="sec-head" data-reveal>
      <div>
        <p className="sec-head__kicker">
          <span>{no}</span>
          <span>{ja}</span>
          <span>—</span>
          <span>{en}</span>
        </p>
        <h2 className="sec-head__title">
          <span className="sec-head__title-ja">{ja}</span>
          <span className="sec-head__title-en">
            {zh} · {en}
          </span>
        </h2>
      </div>
      {vertical && (
        <div className="sec-head__vertical-group">
          <span className="sec-head__vertical">{vertical}</span>
          {verticalZh && <span className="sec-head__vertical-zh">{verticalZh}</span>}
        </div>
      )}
    </div>
  )
}
