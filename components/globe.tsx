"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let phi = 0;
    let globe: any;
    const canvas = canvasRef.current;
    
    if (!canvas) return;

    // Direct check for WebGL support
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      console.error("WebGL not supported in this environment.");
      setError(true);
      return;
    }

    const dpr = window.devicePixelRatio || 1;

    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: 600 * dpr,
        height: 600 * dpr,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        scale: 1,
        mapSamples: 12000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        glowColor: [0.1, 0.1, 0.1],
        markerColor: [0.8, 0.5, 1],
        markers: [
          { location: [-23.5505, -46.6333], size: 0.07 },
          { location: [-25.8576, -48.5333], size: 0.05 },
          { location: [-5.7945, -35.211], size: 0.05 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.005;
        },
      });
    } catch (e) {
      console.error("Cobe init error:", e);
      setError(true);
    }

    return () => {
      if (globe) globe.destroy();
    };
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-[400px] text-white/20 font-mono text-xs uppercase tracking-widest border border-white/5 rounded-full">
        WebGL Environment Required
      </div>
    );
  }

  return (
    <div className="relative aspect-square w-full max-w-[600px] flex items-center justify-center pointer-events-none opacity-40">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: '1/1' }}
      />
    </div>
  );
}
