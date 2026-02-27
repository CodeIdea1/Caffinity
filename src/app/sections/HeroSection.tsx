'use client';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cup1Ref = useRef<HTMLImageElement>(null);
  const cup2Ref = useRef<HTMLImageElement>(null);
  const cup3Ref = useRef<HTMLImageElement>(null);
  const cup4Ref = useRef<HTMLImageElement>(null);
  const sticker1Ref = useRef<HTMLImageElement>(null);
  const sticker2Ref = useRef<HTMLImageElement>(null);
  const sticker3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // Initial fade in animation from right
    gsap.set([cup1Ref.current, cup2Ref.current, cup3Ref.current, cup4Ref.current], {
      x: isMobile ? 0 : '100vw',
      y: isMobile ? '-100vh' : 0,
      rotation: 0
    });

    if (isMobile) {
      gsap.fromTo(cup2Ref.current,
        { y: '-100vh', rotation: 25 },
        { y: 0, rotation: -33, duration: 2.8, ease: 'power2.out', delay: 2.5 }
      );

      gsap.fromTo(cup3Ref.current,
        { y: '-100vh', rotation: -20 },
        { y: 0, rotation: 2, duration: 2.8, ease: 'power2.out', delay: 2.7 }
      );
    } else {
      gsap.fromTo(cup1Ref.current,
        { x: '100vw', y: -60, rotation: -25},
        { x: 0, y: 0, rotation: 0, duration: 2.8, ease: 'power2.out', delay: 2.5 }
      );

      gsap.fromTo(cup2Ref.current,
        { x: '100vw', y: 50, rotation: 20 },
        { x: 0, y: 0, rotation: 0, duration: 2.8, ease: 'power2.out', delay: 2.7 }
      );

      gsap.fromTo(cup3Ref.current,
        { x: '100vw', y: -40, rotation: -18 },
        { x: 0, y: 0, rotation: 0, duration: 2.8, ease: 'power2.out', delay: 2.9 }
      );

      gsap.fromTo(cup4Ref.current,
        { x: '100vw', y: 55, rotation: 22 },
        { x: 0, y: 0, rotation: 0, duration: 2.8, ease: 'power2.out', delay: 3.1 }
      );
    }



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: 1,
        pin: true,
      },
    });

    if (isMobile) {
      tl.fromTo(cup2Ref.current,
        { rotation: -33, scale: 1 },
        { rotation: -8, scale: 1.08 }, 0)
      .fromTo(cup3Ref.current,
        { rotation: 2 },
        { rotation: -2 }, 0)
      .to([sticker1Ref.current, sticker2Ref.current, sticker3Ref.current], {
        scale: 1,
      }, 0);
    } else {
      tl.fromTo(cup1Ref.current, 
        { y: 0, scale: 1 },
        { y: -3, scale: 0.99 }, 0)
      .fromTo(cup2Ref.current,
        { rotation: 0, scale: 1 },
        { rotation: 2, scale: 1.08 }, 0)
      .fromTo(cup3Ref.current,
        { rotation: 0 },
        { rotation: -2 }, 0)
      .fromTo(cup4Ref.current,
        { y: 0 },
        { y: 38 }, 0)
      .to([sticker1Ref.current, sticker2Ref.current, sticker3Ref.current], {
        scale: 1,
      }, 0);
    }

    gsap.fromTo(cup3Ref.current,
      { y: 0, x: 0, rotation: isMobile ? -2 : 0, scale: 1, marginBottom: 10 },
      { 
        y: isMobile ? '170vh' : '100vh',
        x: () => {
          if (!cup3Ref.current) return 0;
          const rect = cup3Ref.current.getBoundingClientRect();
          const currentCenter = rect.left + rect.width / 2;
          const screenCenter = window.innerWidth / 2;
          return screenCenter - currentCenter;
        },
        rotation: -6,
        scale: 1.2,
        marginTop: isMobile ? 200 : 0,
        scrollTrigger: {
          trigger: '.aboutSection',
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <h3 className={styles.statNumber}>20+</h3>
          <p className={styles.statLabel}>Branches</p>
        </div>
        <div className={styles.statItem}>
          <h3 className={styles.statNumber}>15k+</h3>
          <p className={styles.statLabel}>Customers</p>
        </div>
        <div className={styles.statItem}>
          <h3 className={styles.statNumber}>78+</h3>
          <p className={styles.statLabel}>Products</p>
        </div>
      </div>
      
      <Image ref={sticker1Ref} src="/sticker1-2.png" alt="Sticker" width={100} height={100} className={styles.sticker1} />
      <Image ref={sticker2Ref} src="/sticker3-2.png" alt="Sticker" width={100} height={100} className={styles.sticker2} />
      <Image ref={sticker3Ref} src="/sticker2-2.png" alt="Sticker" width={100} height={100} className={styles.sticker3} />
      
      <div className={styles.imagesContainer}>
        <Image ref={cup1Ref} src="/cup1.png" alt="Cup 1" width={300} height={400} className={styles.cup1} />
        <Image ref={cup2Ref} src="/cup2-2.png" alt="Cup 2" width={300} height={400} className={styles.cup2} />
        <Image ref={cup3Ref} src="/cup3.png" alt="Cup 3" width={300} height={400} className={styles.cup3} />
        <Image ref={cup4Ref} src="/cup4.png" alt="Cup 4" width={300} height={400} className={styles.cup4} />
      </div>
      <div className={styles.content}>
        <Image className={styles.logo} src="/logo3.png" alt="Icon" width={80} height={80} />
        <h2 className={styles.title}>Rich & Eromatic Lounge Coffee
</h2>
        <button className={styles.cta}>Click Here</button>
      </div>
    </section>
  );
}
