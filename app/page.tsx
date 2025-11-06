import styles from "./page.module.css";
import Logo from "../components/Logo";
import VehicleCard from "../components/VehicleCard";

const featureHighlights = [
  "Door-to-door pick-up from Tokyo hotels",
  "Flexible photo stops at Lake Kawaguchiko & Chureito Pagoda",
  "Licensed English & Japanese speaking guide",
  "Seasonal dining curated with local partners",
  "Complimentary high-speed Wi-Fi on board",
  "Cold towels, bottled water, and child seats on request"
];

const itinerary = [
  {
    time: "07:30",
    title: "Tokyo Departure",
    detail: "Private greeting at your hotel lobby with concierge-style check-in."
  },
  {
    time: "09:30",
    title: "Lake Kawaguchiko Cruise",
    detail: "Capture the mirror reflection of Mount Fuji aboard a serene lake cruise."
  },
  {
    time: "11:00",
    title: "Chureito Pagoda Vista",
    detail: "Iconic five-story pagoda with sweeping Fuji skyline views and guided photography tips."
  },
  {
    time: "13:00",
    title: "Gourmet Lunch",
    detail: "Farm-to-table kaiseki or halal-friendly dining tailored to your group preferences."
  },
  {
    time: "15:00",
    title: "Craft Village Experience",
    detail: "Explore artisan workshops for indigo dyeing, sake pairing, or matcha ceremonies."
  },
  {
    time: "18:00",
    title: "Tokyo Evening Return",
    detail: "Relaxing drive back with sunset skyline drop-off at your preferred destination."
  }
];

const vehicles = [
  {
    title: "Toyota Vellfire Executive Lounge",
    description:
      "Captain seats with extended leg rests, ambient lighting, and top-tier suspension for a smooth ride.",
    seats: 5,
    highlight: "Ideal for couples or families seeking refined comfort."
  },
  {
    title: "Toyota Alphard Royal Lounge",
    description:
      "Spacious VIP cabin with privacy partitions, chilled refreshments, and premium audio.",
    seats: 6,
    highlight: "Perfect for business delegations and multigenerational travel."
  }
];

const ctaMail = "hello@fujitourguide.com";
const ctaPhone = "+81-80-1234-5678";

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.heroLogoWrap}>
          <Logo className={styles.heroLogo} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.badgeRow}>
            <span className={styles.badge}>1-Day Mount Fuji Escape</span>
            <span className={styles.badge}>Toyota Vellfire &amp; Alphard</span>
            <span className={styles.badge}>FujiTourGuide.com</span>
          </div>
          <h1 className={styles.heroHeading}>
            Luxury <span>Mount Fuji</span> experience crafted for your perfect
            day.
          </h1>
          <p className={styles.heroSubheading}>
            Elevate your journey with a private chauffeur, bilingual guide, and
            curated moments across Fuji&apos;s most breathtaking vantage points.
          </p>
          <div className={styles.ctaRow}>
            <a href={`mailto:${ctaMail}`} className={styles.primaryButton}>
              Reserve Your Date
            </a>
            <a href={`tel:${ctaPhone}`} className={styles.secondaryButton}>
              Talk to a Planner
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="features-heading">
        <div>
          <h2 className={styles.sectionHeading} id="features-heading">
            Why travelers choose FujiTourGuide.com
          </h2>
          <p className={styles.sectionIntro}>
            Our concierge team curates every 1-day Mount Fuji tour with your
            comfort in mind. We merge refined hospitality with insider access to
            create a seamless escape from Tokyo.
          </p>
        </div>
        <ul className={styles.featureList}>
          {featureHighlights.map((item) => (
            <li key={item} className={styles.featureItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="vehicles-heading">
        <div>
          <h2 className={styles.sectionHeading} id="vehicles-heading">
            Executive Toyota Fleet
          </h2>
          <p className={styles.sectionIntro}>
            Glide to Fuji in absolute comfort with our meticulously maintained
            Toyota Vellfire and Alphard models — the gold standard for luxury
            MPVs in Japan.
          </p>
        </div>
        <div className={styles.vehiclesGrid}>
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.title} {...vehicle} />
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="itinerary-heading">
        <div>
          <h2 className={styles.sectionHeading} id="itinerary-heading">
            Signature 1-day itinerary
          </h2>
          <p className={styles.sectionIntro}>
            Tailor any moment to your interests. Our planners refine this
            itinerary based on seasonality, family needs, and photography goals.
          </p>
        </div>
        <ol className={styles.timeline}>
          {itinerary.map((item) => (
            <li key={item.time} className={styles.timelineItem}>
              <strong>
                {item.time} • {item.title}
              </strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="contact-heading">
        <div className={styles.contactCard}>
          <h3 id="contact-heading">Your Fuji concierge team</h3>
          <p>
            Share your travel dates, group size, and preferred experiences. We
            will craft a bespoke day and confirm within 24 hours.
          </p>
          <div>
            <a href={`mailto:${ctaMail}`}>{ctaMail}</a>
          </div>
          <div>
            <a href={`tel:${ctaPhone}`}>{ctaPhone}</a>
          </div>
        </div>
      </section>

      <p className={styles.footerNotice}>
        FujiTourGuide.com — Private Mount Fuji journeys in Toyota Vellfire &
        Alphard luxury.
      </p>
    </main>
  );
}
