'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/logo2.png" alt="Logo" width={40} height={40} />
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button 
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
