import { siReact, siTypescript } from 'simple-icons';

export function SectionScene({
  variant,
  decoration,
}: {
  variant: 'orb' | 'cube' | 'rings';
  decoration?: 'projects' | 'experience';
}) {
  return (
    <div
      className={`section-scene scene-${variant}${decoration ? ` scene-${decoration}` : ''}`}
      aria-hidden="true"
    >
      {decoration && (
        <>
          <div className="section-satellite satellite-space">
            {decoration === 'projects' ? (
              <div className="scene-spaceship">
                <svg viewBox="0 0 80 100" fill="none">
                  <path className="ship-wing" d="M28 48 9 76l21-5m22-23 19 28-21-5" />
                  <path className="ship-body" d="M40 8C24 26 24 49 30 75h20c6-26 6-49-10-67Z" />
                  <circle className="ship-window" cx="40" cy="39" r="8" />
                  <path className="ship-flame" d="m33 80 7 15 7-15" />
                  <path d="M40 8v14M30 69h20" />
                </svg>
              </div>
            ) : (
              <div className="scene-planet">
                <i />
                <span />
              </div>
            )}
          </div>
          <div
            className={`section-satellite satellite-logo ${decoration === 'projects' ? 'satellite-react' : 'satellite-ts'}`}
          >
            <div className="scene-logo-tile">
              <svg viewBox="0 0 24 24">
                <path d={(decoration === 'projects' ? siReact : siTypescript).path} />
              </svg>
            </div>
          </div>
        </>
      )}
      <div className="section-scene-grid" />
      <div className="section-geometry">
        {variant === 'cube' ? (
          <div className="ambient-prism">
            {['front', 'back', 'left', 'right', 'top', 'bottom'].map((side) => (
              <i key={side} className={`ambient-face ambient-${side}`} />
            ))}
          </div>
        ) : variant === 'orb' ? (
          <div className="ambient-sphere">
            {Array.from({ length: 7 }, (_, index) => (
              <i key={index} style={{ transform: `rotateY(${index * 25}deg)` }} />
            ))}
            <i className="ambient-equator" />
          </div>
        ) : (
          <div className="ambient-rings">
            <i />
            <i />
            <i />
          </div>
        )}
      </div>
      <span className="section-code">
        {variant === 'cube' ? 'TS' : variant === 'orb' ? '</>' : '{ }'}
      </span>
      <svg viewBox="0 0 1100 280" preserveAspectRatio="none">
        <path d="M0 170h60l45-45h100M1100 240h-60l-60-60h-70" />
        <circle cx="205" cy="125" r="3" />
        <circle cx="910" cy="180" r="3" />
      </svg>
    </div>
  );
}
