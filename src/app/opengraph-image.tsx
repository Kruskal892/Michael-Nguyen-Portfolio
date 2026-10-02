import { ImageResponse } from 'next/og';
import { profile } from '@/data/portfolio';
export const alt = 'Nguyen Duc Anh Minh — Frontend Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#f7f6f2',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '70px',
        color: '#222824',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26 }}>
        <span>{profile.name}</span>
        <span style={{ color: '#265bcc' }}>{profile.title}</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 78,
          letterSpacing: '-4px',
          lineHeight: 1.1,
        }}
      >
        <span>{profile.headline[0]}</span>
        <span style={{ color: '#265bcc' }}>{profile.headline[1]}</span>
      </div>
      <div style={{ display: 'flex', fontSize: 25 }}>
        React / Next.js / TypeScript · Hanoi, Vietnam
      </div>
    </div>,
    size,
  );
}
