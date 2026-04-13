'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./components/Map'), { ssr: false });

export default function Home() {
  const [fires, setFires] = useState([]);
  const [minBrightness, setMinBrightness] = useState(0);

  useEffect(() => {
    fetch('/api/fires')
      .then(res => res.json())
      .then(data => setFires(data));
  }, []);

  const filtered = fires.filter(f => parseFloat(f.bright_ti4) >= minBrightness);

  return (
    <main>
      <div style={{ position: 'absolute', top: '1rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, background: 'white', padding: '0.75rem 1.25rem', borderRadius: '8px', fontSize: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '280px' }}>
        <span style={{ fontWeight: '500', fontSize: '18px' }}>California Wildfire Tracker</span>
        <span style={{ color: '#666' }}>{filtered.length} active fire detections</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', width: '100%' }}>
          <label style={{ color: '#666', whiteSpace: 'nowrap' }}>Min brightness:</label>
          <input
            type="range"
            min="300"
            max="400"
            value={minBrightness || 300}
            onChange={e => setMinBrightness(Number(e.target.value))}
            style={{ flex: 1 }}
          />
          <span style={{ minWidth: '35px' }}>{minBrightness || 300}K</span>
        </div>
      </div>
      <Map fires={filtered} />
    </main>
  );
}
