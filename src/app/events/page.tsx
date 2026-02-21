import styles from './Events.module.css';

export default function Events() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Upcoming Events</h1>
      <p className={styles.introText}>
        Stay updated with our latest events and conferences. Here are the upcoming events for the community.
      </p>

      <div className={styles.eventList}>
        <div className={styles.eventItem}>
          <h2>13th Annual QCABA Conference</h2>
          <p>Date: Friday, September 20th</p>
          <p>Location: Online Event</p>
          <a href="https://www.behaviorlive.com/" target="_blank" rel="noopener noreferrer">
            <button className={styles.rsvpButton}>RSVP Now</button>
          </a>
        </div>

        <div className={styles.eventItem}>
          <h2>Behavior Analysis Workshop</h2>
          <p>Date: Tuesday, October 5th</p>
          <p>Location: Montréal, Canada</p>
          <button className={styles.rsvpButton}>Register</button>
        </div>
      </div>
    </div>
  );
}
