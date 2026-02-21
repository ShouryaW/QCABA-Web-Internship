"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Membership.module.css';

const Membership: React.FC = () => {
  const [shake, setShake] = useState(false);

  // Shake the most popular card when the page loads
  useEffect(() => {
    setShake(true);
    const timeout = setTimeout(() => {
      setShake(false);
    }, 1500); // 1.5 seconds for shake effect
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.container}>
      {/* Page Heading */}
      <h1 className={styles.heading}>Our Memberships</h1>
      <p className={styles.introText}>
        At QcABA, we offer various types of memberships tailored to meet the diverse needs and interests of our members.
        Whether you're a seasoned behavior analyst, a student aspiring to enter the field, or you're committed to
        promoting behavior analysis, we have a membership option for you.
      </p>

      {/* Membership Selection Heading */}
      <h2 className={styles.chooseMembershipHeading}>Choose Your Membership</h2>

      <div className={styles.membershipContainer}>
        {/* Student Member */}
        <div className={styles.membershipCard}>
          <h2 className={styles.membershipTitle}>Membre étudiant/Student Member</h2>
          <p className={styles.price}>$20</p>
          <p className={styles.description}>Ideal for aspiring behavior analysts.</p>
          <p className={styles.validity}>Validity: 12 months</p>
          <ul className={styles.benefitsList}>
            <li>Discounted membership fees</li>
            <li>Educational resources</li>
            <li>Mentorship opportunities</li>
            <li>Scholarships and awards eligibility</li>
            <li>Professional network access</li>
            <li>Continuing education</li>
            <li>Newsletter and publications</li>
            <li>Conference and course discounts</li>
            <li>Advocacy support</li>
            <li>Job postings and career resources</li>
          </ul>
          <Link href="/membership/select/student">
            <button className={styles.selectButton}>Select</button>
          </Link>
        </div>

        {/* Regular Member (Most Popular) */}
        <div className={`${styles.membershipCard} ${styles.mostPopular} ${shake ? styles.shake : ''}`}>
          <div className={styles.mostPopularBanner}>Most Popular</div>
          <h2 className={styles.membershipTitle}>Membre régulier/Regular Member</h2>
          <p className={styles.price}>$30</p>
          <p className={styles.description}>Perfect for dedicated behavior analysts.</p>
          <p className={styles.validity}>Validity: 12 months</p>
          <ul className={styles.benefitsList}>
            <li>Voting rights and leadership eligibility</li>
            <li>Extensive professional network</li>
            <li>Continuing education opportunities</li>
            <li>Newsletter and exclusive publications</li>
            <li>Conference and course discounts</li>
            <li>Advocacy support</li>
            <li>Mentorship opportunities</li>
            <li>Job postings and career resources</li>
          </ul>
          <Link href="/membership/select/regular">
            <button className={styles.selectButton}>Select</button>
          </Link>
        </div>

        {/* Sustaining Member */}
        <div className={styles.membershipCard}>
          <h2 className={styles.membershipTitle}>Membre donateur/Sustaining Member</h2>
          <p className={styles.price}>$60</p>
          <p className={styles.description}>Perfect for champions of behavior analysis.</p>
          <p className={styles.validity}>Validity: 12 months</p>
          <ul className={styles.benefitsList}>
            <li>Recognition as a key supporter</li>
            <li>Exclusive event invitations</li>
            <li>Enhanced networking opportunities</li>
            <li>Professional network access</li>
            <li>Continuing education</li>
            <li>Newsletter and publications</li>
            <li>Conference and course discounts</li>
            <li>Advocacy support</li>
            <li>Mentorship opportunities</li>
            <li>Job postings and career resources</li>
          </ul>
          <Link href="/membership/select/sustaining">
            <button className={styles.selectButton}>Select</button>
          </Link>
        </div>

        {/* Affiliate Member */}
        <div className={styles.membershipCard}>
          <h2 className={styles.membershipTitle}>Membre Affilié/Affiliate Member</h2>
          <p className={styles.price}>$20</p>
          <p className={styles.description}>Perfect for those with a professional interest in behavior analysis.</p>
          <p className={styles.validity}>Validity: 12 months</p>
          <ul className={styles.benefitsList}>
            <li>Participation in association activities</li>
            <li>Professional network access</li>
            <li>Continuing education</li>
            <li>Newsletter and publications</li>
            <li>Conference and course discounts</li>
            <li>Advocacy support</li>
            <li>Mentorship opportunities</li>
            <li>Job postings and career resources</li>
          </ul>
          <Link href="/membership/select/affiliate">
            <button className={styles.selectButton}>Select</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Membership;
