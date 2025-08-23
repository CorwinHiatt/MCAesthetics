import Link from 'next/link';
import styles from './Home.module.css';

export default function HomePage() {
  // Sample data for gallery cards (replace titles or descriptions as needed)
  const galleryItems = [
    {
      title: 'Skin Care Excellence',
      description: 'Discover treatments that rejuvenate and refresh your skin.',
      imageUrl: 'https://picsum.photos/seed/1/300/200',
    },
    {
      title: 'Laser Precision',
      description: 'Advanced laser technology for hair removal and more.',
      imageUrl: 'https://picsum.photos/seed/2/300/200',
    },
    {
      title: 'Body Contouring',
      description: 'Sculpt your ideal silhouette with non-invasive techniques.',
      imageUrl: 'https://picsum.photos/seed/3/300/200',
    },
    {
      title: 'Injectable Expertise',
      description: 'Enhance natural beauty with fillers and Botox.',
      imageUrl: 'https://picsum.photos/seed/4/300/200',
    },
    {
      title: 'Relaxing Facials',
      description: 'Pamper yourself with customized facial treatments.',
      imageUrl: 'https://picsum.photos/seed/5/300/200',
    },
    {
      title: 'Personalized Care',
      description: 'Tailored aesthetic solutions for every client.',
      imageUrl: 'https://picsum.photos/seed/6/300/200',
    },
  ];

  return (
    <div className={styles.homePageWrapper}>
      {/* Hero Section */}
      <section className={styles.homeHeroSection}>
        <h1 className={styles.homeHeroTitle}>Welcome to MC Aesthetics</h1>
        <p className={styles.homeHeroSubtitle}>
          Your premier destination for personalized aesthetic treatments in McMinnville, OR. Let us help you look and feel your best with our expert services.
        </p>
        <Link href="/contact" className={styles.homeHeroButton}>
          Get in Touch
        </Link>
      </section>

      {/* About Melissa & Company Section */}
      <section className={styles.homeAboutSection}>
        <h2 className={styles.homeAboutTitle}>About Melissa & MC Aesthetics</h2>
        <p className={styles.homeAboutText}>
          Melissa, the founder of MC Aesthetics, brings years of expertise and passion for beauty to every treatment. With a commitment to personalized care, she ensures each client leaves feeling confident and rejuvenated.
        </p>
        <p className={styles.homeAboutText}>
          At MC Aesthetics, we specialize in a range of services from skin care to body contouring. Our mission is to provide top-tier aesthetic solutions in a welcoming environment. Located in the heart of McMinnville, OR, we’re here to serve our community with excellence.
        </p>
        <p className={styles.homeAboutText}>
          Stay tuned for more about our story and values as we continue to grow. We can’t wait to share our journey with you!
        </p>
      </section>

      {/* Gallery Section with Cards */}
      <section className={styles.homeGallerySection}>
        <h2 className={styles.homeGalleryTitle}>Explore Our Services</h2>
        <div className={styles.homeGalleryGrid}>
          {galleryItems.map((item, index) => (
            <div key={index} className={styles.homeGalleryCard}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className={styles.homeGalleryImage}
                loading="lazy"
              />
              <div className={styles.homeGalleryCardContent}>
                <h3 className={styles.homeGalleryCardTitle}>{item.title}</h3>
                <p className={styles.homeGalleryCardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}