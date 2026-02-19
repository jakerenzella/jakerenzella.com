import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dr Jake Renzella — Computer Science & AI Education at UNSW Sydney'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f5f0ea 0%, #e8e0d4 100%)',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: '#6b5c4c',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            UNSW Sydney
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#1a1612',
              textAlign: 'center',
              lineHeight: 1.15,
            }}
          >
            Dr Jake Renzella
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#4a4035',
              textAlign: 'center',
              lineHeight: 1.5,
              maxWidth: '900px',
            }}
          >
            Computer Science & AI Education · Pedagogical AI Research · Day of AI Australia
          </div>
          <div
            style={{
              marginTop: '16px',
              fontSize: 22,
              fontWeight: 600,
              color: '#f5f0ea',
              background: '#1a1612',
              padding: '14px 40px',
              borderRadius: '8px',
            }}
          >
            Visit jakerenzella.com →
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
