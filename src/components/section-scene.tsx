export function SectionScene({ variant }: { variant: 'orb' | 'cube' | 'rings' }) {
  return (
    <div className={`section-scene scene-${variant}`} aria-hidden="true">
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
