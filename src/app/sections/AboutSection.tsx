'use client';
import styles from './AboutSection.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [line1Ref.current, line2Ref.current, line3Ref.current],
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: line1Ref.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className={`${styles.aboutSection} aboutSection`}>
      <div className={styles.content}>
        <div className={styles.lineWrapper}>
          <h2 ref={line1Ref} className={styles.line}>USE PREMIUM</h2>
          <div className={styles.imageBox1}></div>
        </div>
        <div className={styles.lineWrapper}>
          <h2 ref={line2Ref} className={styles.line}>FRESH BEANS. AND FRESHLY</h2>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.imageBox2}></div>
          <h2 ref={line3Ref} className={styles.line}>GROUND SPICES</h2>
        </div>
      </div>
    </section>
  );
}
