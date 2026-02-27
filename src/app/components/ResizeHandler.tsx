'use client';

import { useEffect } from 'react';

export default function ResizeHandler() {
  useEffect(() => {
    let isMobile = window.innerWidth <= 768;

    const handleResize = () => {
      const nowMobile = window.innerWidth <= 768;
      if (isMobile !== nowMobile) {
        window.location.reload();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
}
