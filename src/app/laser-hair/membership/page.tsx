"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../LaserHair.module.css'; // Import the custom CSS module - ensure .bookButton is defined here!

const LaserMembershipPage = () => {
  const [activeTab, setActiveTab] = useState('laser-hair');

  useEffect(() => {
    console.log(`Active Tab: ${activeTab}`); // Debug: Check if tab state is set correctly (remove after testing)
  }, [activeTab]);

  return (
    <div className={styles.mcaLaserHairPageWrapper}>
      {/* Hero Section */}
      <header className={styles.mcaLaserHairHero}>
        <h1 className={styles.mcaLaserHairMainTitle}>Laser Hair Removal Membership</h1>
        <p className={styles.mcaLaserHairIntroText}>Unlock smooth, hassle-free skin with our exclusive membership deal. Say goodbye to razors and hello to confidence!</p>
        <div className={styles.mcaLaserHairHeroImageHolder}>
          <Image
            src="/images/laserHairMembership.jpg" // Reuse one of your images as hero
            alt="Laser Hair Membership - Full body treatment results"
            fill
            className={styles.mcaLaserHairImage}
          />
          <div className={styles.mcaLaserHairImageBorderAccent}></div>
        </div>
        {/* CTA Button in Hero - Using provided <a> structure */}
        <a 
          href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
          className={styles.bookButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      </header>

      {/* Image Gallery Section (Adapted as Content Section) */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>Explore Laser Hair Removal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className={styles.mcaLaserHairImageHolder}>
            <Image
              src="/images/laserHairMembership.jpg"
              alt="Laser Hair Membership - Full body treatment results"
              fill
              className={styles.mcaLaserHairImage}
            />
            <div className={styles.mcaLaserHairImageBorderAccent}></div>
            <p className={styles.mcaLaserHairParagraph}>Full-Body Confidence</p>
          </div>
          <div className={styles.mcaLaserHairImageHolder}>
            <Image
              src="/images/laserFaceHair.jpg"
              alt="Laser Face Hair Removal - Smooth facial results"
              fill
              className={styles.mcaLaserHairImage}
            />
            <div className={styles.mcaLaserHairImageBorderAccent}></div>
            <p className={styles.mcaLaserHairParagraph}>Flawless Facial Smoothness</p>
          </div>
          <div className={styles.mcaLaserHairImageHolder}>
            <Image
              src="/images/laserArmpit.jpg"
              alt="Laser Armpit Hair Removal - Underarm treatment"
              fill
              className={styles.mcaLaserHairImage}
            />
            <div className={styles.mcaLaserHairImageBorderAccent}></div>
            <p className={styles.mcaLaserHairParagraph}>Effortless Underarm Care</p>
          </div>
        </div>
        <p className={`${styles.mcaLaserHairParagraph} text-center`}>Visualize the results: Full-body confidence starts here!</p>
      </section>

      {/* Membership Details Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>Membership Options</h2>
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setActiveTab('laser-hair')}
            className="px-6 py-3 rounded-full font-medium transition-colors bg-[var(--mca-soft-white)] text-[var(--mca-deep-purple)] border border-[var(--mca-lux-gold)] hover:bg-[var(--mca-pink-highlight)] hover:text-white"
          >
            Laser Hair Removal
          </button>
          {/* Add more tabs here if needed */}
        </div>
        {activeTab === 'laser-hair' && (
          <div className={styles.mcaLaserHairCallToAction}>
            <h3 className={styles.mcaLaserHairCtaText}>1-Hour Laser Hair Removal Membership - $299 / Month</h3>
            <ul className={styles.mcaLaserHairListContainer}>
              <li className={styles.mcaLaserHairListItem}>1 full hour of laser hair removal per session</li>
              <li className={styles.mcaLaserHairListItem}>6-month minimum commitment for best results</li>
              <li className={styles.mcaLaserHairListItem}>We can typically cover 3-4 body areas in one hour (e.g., face, underarms, legs—customize to your needs!)</li>
              <li className={styles.mcaLaserHairListItem}>Professional, pain-free treatments with lasting smoothness</li>
            </ul>
            <p className={styles.mcaLaserHairParagraph}>This membership is perfect if you&apos;re ready to invest in yourself. Imagine the time you will save—no more daily shaving routines. Commit to 6 months and watch the transformation!</p>
            {/* Converted "Sign Up Now" to <a> with provided structure */}
            
           
            {/* CTA Button after Membership Details - Using provided <a> structure */}
            <a 
              href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
              className={styles.bookButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up Now
            </a>
          </div>
        )}
      </section>

      {/* Benefits Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>Why Choose Our Membership?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className={styles.mcaLaserHairCallToAction}>
            <h3 className={styles.mcaLaserHairCtaText}>Affordable & Flexible</h3>
            <p className={styles.mcaLaserHairParagraph}>Pay monthly, customize sessions, and see real results.</p>
            <a 
              href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
              className={styles.bookButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up Now
            </a>
          </div>
          <div className={styles.mcaLaserHairCallToAction}>
            <h3 className={styles.mcaLaserHairCtaText}>Expert Care</h3>
            <p className={styles.mcaLaserHairParagraph}>Trained professionals using state-of-the-art tech.</p>
            <a 
              href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
              className={styles.bookButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up Now
            </a>
          </div>
          <div className={styles.mcaLaserHairCallToAction}>
            <h3 className={styles.mcaLaserHairCtaText}>Lasting Results</h3>
            <p className={styles.mcaLaserHairParagraph}>Up to 90% hair reduction after consistent treatments.</p>
            <a 
              href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
              className={styles.bookButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer (Simple Adaptation) */}
      <footer className="py-8 px-4 text-center w-full bg-[var(--mca-deep-purple)] text-white mt-auto">
        <p className={styles.mcaLaserHairParagraph}>Questions? Contact us for a free consultation. Results may vary—consult with our experts!</p>
        <p className="mt-2 text-sm">&copy; 2025 Your Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LaserMembershipPage;