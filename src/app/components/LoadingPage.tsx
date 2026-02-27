'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './LoadingPage.module.css';

export default function LoadingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const piece1Ref = useRef<HTMLDivElement>(null);
  const piece2Ref = useRef<HTMLDivElement>(null);
  const piece3Ref = useRef<HTMLDivElement>(null);
  const piece4Ref = useRef<HTMLDivElement>(null);
  const piece5Ref = useRef<HTMLDivElement>(null);
  const piece6Ref = useRef<HTMLDivElement>(null);
  const piece7Ref = useRef<HTMLDivElement>(null);
  const piece8Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    
    const isMobileCheck = window.innerWidth <= 768;
    const tl = gsap.timeline({
      onComplete: () => setIsLoaded(true)
    });

    const pieces = [
      piece1Ref.current, 
      piece2Ref.current, 
      piece3Ref.current, 
      piece4Ref.current, 
      piece5Ref.current, 
      piece6Ref.current, 
      piece7Ref.current, 
      piece8Ref.current
    ];
    
    if (pieces.some(piece => !piece)) return;
    
    gsap.set([piece1Ref.current, piece3Ref.current, piece6Ref.current], { scale: 0, opacity: 0, x: 0, y: 0, rotation: -15 });
    gsap.set([piece2Ref.current, piece7Ref.current], { scale: 0, opacity: 0, x: 0, y: 0, rotation: 20 });
    gsap.set([piece4Ref.current, piece5Ref.current, piece8Ref.current], { scale: 0, opacity: 0, x: 0, y: 0, rotation: 10 });

    tl.to({}, { duration: 1.5 })
    .to([leftRef.current, rightRef.current], {
      scale: 1.3,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to(pieces, {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.6)'
    }, '<')
    .to(leftRef.current, {
      x: isMobileCheck ? 0 : '-8vw',
      y: isMobileCheck ? '-8vh' : 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '<')
    .to(rightRef.current, {
      x: isMobileCheck ? 0 : '8vw',
      y: isMobileCheck ? '8vh' : 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '<')
    .to(piece1Ref.current, {
      x: isMobileCheck ? 0 : '-15vw',
      y: isMobileCheck ? '-15vh' : 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '<')
    .to(piece2Ref.current, {
      x: isMobileCheck ? 0 : '-22.8vw',
      y: isMobileCheck ? '-22.8vh' : 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '<')
    .to(piece3Ref.current, {
      x: isMobileCheck ? 0 : '-15vw',
      y: isMobileCheck ? '-15vh' : 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '<')
    .to(piece6Ref.current, {
      x: isMobileCheck ? 0 : '-18vw',
      y: isMobileCheck ? '-18vh' : 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '<')
    .to(piece4Ref.current, {
      x: isMobileCheck ? 0 : '15vw',
      y: isMobileCheck ? '15vh' : 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '<')
    .to(piece5Ref.current, {
      x: isMobileCheck ? 0 : '15vw',
      y: isMobileCheck ? '15vh' : 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '<')
    .to(piece7Ref.current, {
      x: isMobileCheck ? 0 : '18vw',
      y: isMobileCheck ? '18vh' : 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '<')
    .to(piece8Ref.current, {
      x: isMobileCheck ? 0 : '12vw',
      y: isMobileCheck ? '12vh' : 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '<')
    .to({}, { duration: 0.3 })
    .to([leftRef.current, rightRef.current], {
      scale: 2.5,
      duration: 1,
      ease: 'power2.in'
    })
    .to(piece1Ref.current, {
      x: isMobileCheck ? '-35vw' : '-130vw',
      y: isMobileCheck ? '-130vh' : '-35vh',
      duration: 1.3,
      ease: 'power2.in'
    }, '<')
    .to(piece2Ref.current, {
      x: isMobileCheck ? '20vw' : '-130vw',
      y: isMobileCheck ? '-130vh' : '20vh',
      duration: 1.3,
      ease: 'power2.in'
    }, '<')
    .to(piece3Ref.current, {
      x: isMobileCheck ? '40vw' : '-130vw',
      y: isMobileCheck ? '-130vh' : '40vh',
      duration: 1.3,
      ease: 'power2.in'
    }, '<')
    .to(piece6Ref.current, {
      x: isMobileCheck ? '-10vw' : '-130vw',
      y: isMobileCheck ? '-130vh' : '-10vh',
      duration: 1.3,
      ease: 'power2.in'
    }, '<')
    .to(piece4Ref.current, {
      x: isMobileCheck ? '-25vw' : '130vw',
      y: isMobileCheck ? '130vh' : '-25vh',
      duration: 1.3,
      ease: 'power2.in'
    }, '<')
    .to(piece5Ref.current, {
      x: isMobileCheck ? '30vw' : '130vw',
      y: isMobileCheck ? '130vh' : '30vh',
      duration: 1.3,
      ease: 'power2.in'
    }, '<')
    .to(piece7Ref.current, {
      x: isMobileCheck ? '10vw' : '130vw',
      y: isMobileCheck ? '130vh' : '10vh',
      duration: 1.3,
      ease: 'power2.in'
    }, '<')
    .to(piece8Ref.current, {
      x: isMobileCheck ? '35vw' : '130vw',
      y: isMobileCheck ? '130vh' : '35vh',
      duration: 1.3,
      ease: 'power2.in'
    }, '<')
    .to(leftRef.current, {
      x: isMobileCheck ? 0 : '-100vw',
      y: isMobileCheck ? '-100vh' : 0,
      duration: 1,
      ease: 'power2.in'
    }, '<')
    .to(rightRef.current, {
      x: isMobileCheck ? 0 : '100vw',
      y: isMobileCheck ? '100vh' : 0,
      duration: 1,
      ease: 'power2.in'
    }, '<');

    return () => {
      tl.kill();
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div ref={containerRef} className={styles.loadingContainer}>
      <div ref={leftRef} className={`${styles.loadingImage} ${styles.loadingLeft}`}>
        <img src={isMobile ? "/back1.png" : "/b1.png"} alt="" />
      </div>
      <div ref={rightRef} className={`${styles.loadingImage} ${styles.loadingRight}`}>
        <img src={isMobile ? "/back2.png" : "/b2.png"} alt="" />
      </div>
      <div ref={piece1Ref} className={`${styles.piece} ${styles.piece1}`}>
        <img src="/pieceCoffee1.svg" alt="" />
      </div>
      <div ref={piece2Ref} className={`${styles.piece} ${styles.piece2}`}>
        <img src="/pieceCoffee2.svg" alt="" />
      </div>
      <div ref={piece3Ref} className={`${styles.piece} ${styles.piece3}`}>
        <img src="/pieceCoffee3.svg" alt="" />
      </div>
      <div ref={piece4Ref} className={`${styles.piece} ${styles.piece4}`}>
        <img src="/pieceCoffee4.svg" alt="" />
      </div>
      <div ref={piece5Ref} className={`${styles.piece} ${styles.piece5}`}>
        <img src="/pieceCoffee5.svg" alt="" />
      </div>
      <div ref={piece6Ref} className={`${styles.piece} ${styles.piece6}`}>
        <img src="/pieceCoffee1.svg" alt="" />
      </div>
      <div ref={piece7Ref} className={`${styles.piece} ${styles.piece7}`}>
        <img src="/pieceCoffee3.svg" alt="" />
      </div>
      <div ref={piece8Ref} className={`${styles.piece} ${styles.piece8}`}>
        <img src="/pieceCoffee2.svg" alt="" />
      </div>
    </div>
  );
}
