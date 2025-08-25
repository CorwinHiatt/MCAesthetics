"use client"

import React, { useState } from 'react';
import styles from './Carousel.module.css';

// Define the type for review data
interface Review {
  reviewer: string;
  reviewText: string;
  reviewDate: string;
  ownerResponse?: string;
  ownerResponseDate?: string;
}

export default function Carousel() {
  // Array of all 34 five-star reviews
  const reviews: Review[] = [
    {
      reviewer: 'Lea Mackenbach',
      reviewText: 'Mellissa explains everything clearly, answers all my questions, and has such a welcoming personality - it\'s like visiting a friend. Her expertise really shows and I\'m always happy with my results. If you\'re looking for someone who truly cares about their patients, definitely go see Melissa at MC Aesthetic!',
      reviewDate: '2 weeks ago',
      ownerResponse: 'Thank you so much for your kind words and for sharing your experience. We\'re thrilled to hear that you feel so comfortable and valued during your visits. Melissa and the entire team at MC Aesthetics are committed to ensuring a welcoming and professional environment. Your satisfaction and trust mean the world to us. We look forward to seeing you again soon!',
      ownerResponseDate: '3 days ago',
    },
    {
      reviewer: 'Linnea Kittrell',
      reviewText: 'I had an amazing experience at MC Aesthetics! Melissa and Angela were incredibly professional, knowledgeable, and made me completely at ease. I had botox and filler done, and the results are absolutely perfect-natural, refreshed, and...',
      reviewDate: '4 months ago',
      ownerResponse: 'We are so glad you are happy with your results! 😊 Thank you so much!',
      ownerResponseDate: '4 months ago',
    },
    {
      reviewer: 'Karee Wasson',
      reviewText: 'I recently had the pleasure of visiting Melissa and I couldn\'t be more impressed with the experience! From the moment I walked in, I felt welcomed and at ease. She took the time to assess my skin and customize the treatment to my needs...',
      reviewDate: '5 months ago',
      ownerResponse: 'Thank you for your wonderful review, Karee! We\'re thrilled to hear about your positive experience with Melissa and the fantastic results you achieved. Your satisfaction means a lot to us, and we look forward to welcoming you back for more treatments!',
      ownerResponseDate: '5 months ago',
    },
    {
      reviewer: 'Maureen Cook',
      reviewText: 'I hope this review finds others like me…. A nearly 60 year old, farm girl with soap and some lotion being my only beauty routine … Melissa introduced me to a skincare line called "ZO" …',
      reviewDate: 'a week ago',
      ownerResponse: 'Thank you so much for your heartfelt review! We\'re thrilled to hear that you\'ve had such a positive experience and that Melissa was able to introduce you to a skincare routine that shows great results. We believe everyone deserves to feel good about themselves, and it\'s wonderful to know that you\'ve noticed improvements in your skin. We appreciate your trust and recommendation. Please don\'t hesitate to reach out if you need any further assistance or guidance on your beauty journey.',
      ownerResponseDate: '3 days ago',
    },
    {
      reviewer: 'Brianna Bracelin',
      reviewText: 'Maleah is amazing, she makes you feel very comfortable and does a seamless job! My Botox lasted and my lip filler is perfect. Very knowledgeable and precise work. I\'ve seen a few injectors over the years and Maleah has done an exceptional job for me. Ive found my forever injector!',
      reviewDate: '4 weeks ago',
      ownerResponse: 'Thank you so much for your amazing review! We\'re thrilled to hear that Maleah made you feel comfortable and delivered such perfect results with your Botox and lip filler. Your kind words about her knowledge and precision mean the world to us. We\'re honored that you\'ve found your forever injector with us at MC Aesthetics! Looking forward to seeing you again soon! 😊',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'Desteny',
      reviewText: 'I have had Xeomin injections numerous times at two different clinics and my appointment with Maleah was the best injection experience I\'ve had— there was no bruising or swelling, and I have always bruised before! My results are great and I will definitely be booking with her again in the future!',
      reviewDate: 'a month ago',
      ownerResponse: 'We are so happy that you had a great experience with us! Thank you for taking the time to leave us a review. We really appreciate it! Hope to see you again soon',
      ownerResponseDate: 'a month ago',
    },
    {
      reviewer: 'Janet Thorpe',
      reviewText: 'Melissa is simply delightful! Additionally, she knows her stuff, and explained how certain muscles in the face work and how their movement produces lines and wrinkles. Very professional, lovely environment. I WILL be going back 😊',
      reviewDate: '5 months ago',
      ownerResponse: 'Thank you for your wonderful review, Janet! We\'re thrilled to hear that you had a delightful experience with Melissa and found her knowledgeable and professional. We look forward to welcoming you back soon!',
      ownerResponseDate: '5 months ago',
    },
    {
      reviewer: 'Sara Vera',
      reviewText: 'Best experience ever got lip filler and nose filler done and I am super satisfied! Melissa and Maleah are a dream team super sweet and make you feel super comfortable!',
      reviewDate: '3 months ago',
      ownerResponse: 'Thank you so much for your wonderful review and for choosing us for your lip and nose fillers. We\'re thrilled to hear that you are satisfied with the results and that Melissa and Maleah made your experience so comfortable. We look forward to welcoming you back for any future treatments!',
      ownerResponseDate: '2 months ago',
    },
    {
      reviewer: 'Joanna Gauthier',
      reviewText: 'I have been to other places that I thought were the best, until I met Melissa! I am amazed and thrilled with the results I\'ve gotten from her. I love that she has ideas for things that I hadn\'t even thought of. I let her do her thing and I...',
      reviewDate: '2 years ago',
      ownerResponse: 'Thank you for your amazing review! It is truly appreciated.',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'mikayla armstrong',
      reviewText: 'Melissa is the best! She is so sweet, knowledgeable, and very informative about the entire process. She makes the experience extremely easy and makes me feel so comfortable. Highly recommend!!',
      reviewDate: '9 months ago',
      ownerResponse: 'Thank you so much for your wonderful review, Mikayla! We\'re thrilled to hear that Melissa made such a positive impact on your experience. Your recommendation means a lot to us, and we look forward to serving you again!',
      ownerResponseDate: '9 months ago',
    },
    {
      reviewer: 'Annette Dennigmann',
      reviewText: 'Melissa is so kind and caring. You can tell she takes pride in her work. I\'m very happy with my results from my last visit, and look forward to maybe trying other treatments. I definitely recommend MC Aesthetics! 😊',
      reviewDate: 'a year ago',
      ownerResponse: 'Thank you so much for your wonderful feedback! 💖 It truly means the world to hear that you had such a positive experience at MC Aesthetics.',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'Alyssa Underwood',
      reviewText: 'I had a wrinkle relaxer treatment with Ana and it was amazing. It was my first time being injected and I was a little nervous. I was able to ask all my questions, cover my concerns as well as my hope for the results. 10/10 I would highly...',
      reviewDate: '2 years ago',
      ownerResponse: 'Thank you for your amazing review! We\'re so happy Ana made your first treatment comfortable and answered all your questions!',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'Linda Tanons',
      reviewText: 'My friend and I shop at McMinnville RealDeals, and heard about MC Aestetics from them. We were driving all the way from Depoe Bay to Salem for our Botox, so we thought we would give Melissa a try. Her office is above RealDeals. It\'s a...',
      reviewDate: 'a year ago',
      ownerResponse: 'Linda and Cheryl, Thank you for your wonderful review! We appreciate you making the switch from Salem.',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'cassandra haworth',
      reviewText: 'I just have to start by saying you are in the best hands possible when booking an appt with MC Aesthetics. Melissa is so warm and welcoming, you can walk in and know you are in good hands. She was awesome at walking me through every...',
      reviewDate: '4 years ago',
      ownerResponse: 'Thank you very much!',
      ownerResponseDate: 'Edited 3 years ago',
    },
    {
      reviewer: 'Moe Holverson',
      reviewText: 'This lovely Ms. Cook is not only warm and welcoming, informative and smart, but she is a master at making you feel and look youthful and valuable! I love to visit with her … she is a master at her craft and I recommend her to anyone that...',
      reviewDate: 'a year ago',
      ownerResponse: 'Thank you so much for taking the time to share your experience at MC Aesthetics. It truly means the world to me that you felt well-cared for during your visit. Creating a warm and welcoming environment where clients feel valued is exactly what I strive for every day.',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'Elsa',
      reviewText: 'I\'ve had such wonderful experiences here. Melissa is warm and kind, the office is lovely, and for the first time in years, I don\'t have a headache every day- plus my forehead looks great! I have had migraines, tension headaches, and TMJ my entire adult life, and after seeing Melissa, my pain is gone and I feel so much better!',
      reviewDate: '3 years ago',
      ownerResponse: 'Thank you so much for the review! I am so happy your daily chronic pain is gone!',
      ownerResponseDate: '3 years ago',
    },
    {
      reviewer: 'Raelene Venteicher',
      reviewText: "Melissa makes you feel like a million bucks right as you walk in the door and I felt so comfortable with her doing what she needed to so that I wouldn't see the deep crease or wrinkles I don't like! Dramatic Results I could see within 2...",
      reviewDate: '4 years ago',
      ownerResponse: 'Thank you so much for your review! This is exactly why I do what I do- help make clients feel their best and I love hearing from my clients. Thanks again!',
      ownerResponseDate: '4 years ago',
    },
    {
      reviewer: 'Ireland Lynn',
      reviewText: 'I never leave reviews on anything... but I\'ve also never had such a great experience with a practitioner before either! I feel compelled to share! Melissa literally saved my face after a terrible experience with another practitioner! She\'s...',
      reviewDate: '3 years ago',
      ownerResponse: 'Thank you very much for the glowing review!',
      ownerResponseDate: 'Edited 3 years ago',
    },
    {
      reviewer: 'Cindi W',
      reviewText: 'Melissa is wonderful and I LOVE my results! She understands "easing" into aging and really took the time to listen and answer questions. It is totally worth the drive to come see her and I\'ll definitely be back.',
      reviewDate: '2 years ago',
      ownerResponse: 'Thank you for your kind review! We appreciate you taking the time to share your experience with us!',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'Toni Matthews',
      reviewText: 'I highly recommend MC Aesthetics! Melissa is very knowledgeable, and attuned to her clients desired outcome. Her friendly demeanor paired with a clean, stylish office puts you right at ease. After receiving Botox in my expression lines, and filler around my mouth, my skin has never looked better!...',
      reviewDate: '4 years ago',
      ownerResponse: 'Thank you for the very kind words! It means so much to me that you are happy with your results:)',
      ownerResponseDate: '3 years ago',
    },
    {
      reviewer: 'Cindee Paulsen',
      reviewText: 'I highly recommend Melissa at MC Aesthetics. Melissa is very knowledgeable & highly trained in all the products/services she offers. She listens to you regarding your areas of concern explaining what treatment plan will be needed for the desired outcome. I am a repeat client of Melissa\'s and really happy with the services and results...',
      reviewDate: '3 years ago',
      ownerResponse: 'Thank you so much Cindee. I look forward to seeing you again soon!',
      ownerResponseDate: '3 years ago',
    },
    {
      reviewer: 'Shelby Imlah',
      reviewText: "I'm so in love with my results! Thank you for taking extra time with me to ensure the best results. I will absolutely be back! For anyone in question, Melissa is extremely knowledgeable, calming and felt in the best care with her. ❤️...",
      reviewDate: '2 years ago',
      ownerResponse: 'Thank you for the review Shelby!',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'Michelle Price',
      reviewText: 'I stumbled across the website for MC Aesthetics and so pleased I did! Melissa is friendly, professional, and has an art for rejuvenating the face with fillers and Botox. The office is very clean, as well. I highly recommend!!...',
      reviewDate: '3 years ago',
      ownerResponse: 'Thank you so much Michelle! I really appreciate the feedback and I am happy to help people reach their aesthetic goals:)',
      ownerResponseDate: 'Edited 3 years ago',
    },
    {
      reviewer: 'Andrea',
      reviewText: 'Melissa is WONDERFUL! She is extremely knowledgeable and was able to answer all of my questions and concerns. I left there feeling really good about our conversation and I felt very comfortable in her care.',
      reviewDate: '3 years ago',
      ownerResponse: 'Thank you so much Andrea! I really appreciate you sharing your experience with others! It\'s so important for patients to feel comfortable and trust their aesthetic provider. Thank you for putting your trust in me!',
      ownerResponseDate: '3 years ago',
    },
    {
      reviewer: 'Josi\'s Tru',
      reviewText: 'I booked a apt and this was my first time having anything like this done. The office was so warming and comfortable. She took the time to listen to me and took the time to answer all my questions. She was so sweet and om top of that I was...',
      reviewDate: '3 years ago',
      ownerResponse: 'Thank you, Josi! We appreciate you taking the time to share about your wonderful experience with us!',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'Jessica Bogh',
      reviewText: 'Such a wonderful experience and care received at MC Aesthetics! Always able to answer my questions and very knowledgeable about all of her products! I have really enjoyed the results and will definitely continue to come back 💕',
      reviewDate: '4 years ago',
      ownerResponse: 'Thank you very much for your review!',
      ownerResponseDate: '4 years ago',
    },
    {
      reviewer: 'Holly Starr',
      reviewText: 'Very gentle, kind and professional nurse practitioner!! Melissa Provides excellent results and makes sure you are comfortable also!!! Highly recommend!...',
      reviewDate: '4 years ago',
      ownerResponse: 'Thank you Holly! I am so appreciative of your kind review and can\'t wait to see you next week!!',
      ownerResponseDate: '4 years ago',
    },
    {
      reviewer: 'Irma Del Rayo',
      reviewText: "I've been doing Botox and skin care! Very happy with my results! Best skin care products! Highly recommend!...",
      reviewDate: '3 years ago',
      ownerResponse: 'Thank you very much. I am so glad you are happy with your results!!',
      ownerResponseDate: '3 years ago',
    },
    {
      reviewer: 'Rich&Lisa McCulloch',
      reviewText: 'Melissa is such a nice person. Would highly recommend MC Aesthetics',
      reviewDate: 'a year ago',
      ownerResponse: 'Thank you for sharing your positive experience!',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'Lee McCollins',
      reviewText: "I've only had wonderful experiences and great results! I highly recommend Melissa.",
      reviewDate: '3 years ago',
      ownerResponse: 'Thank you so much for the review!🌟',
      ownerResponseDate: '3 years ago',
    },
    {
      reviewer: 'J.R. Cook',
      reviewText: '',
      reviewDate: '2 years ago',
      ownerResponse: 'Thank you!',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'Christina Golden',
      reviewText: '',
      reviewDate: '4 years ago',
      ownerResponse: 'Thank you for your review!',
      ownerResponseDate: '3 years ago',
    },
    {
      reviewer: 'Trish Steven',
      reviewText: '',
      reviewDate: '3 years ago',
      ownerResponse: 'Thank you!',
      ownerResponseDate: '2 weeks ago',
    },
    {
      reviewer: 'Keri Bridges',
      reviewText: '',
      reviewDate: '3 years ago',
      ownerResponse: 'Thank you!',
      ownerResponseDate: '2 weeks ago',
    }
     ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  const googleReviewLink = "https://g.page/r/CZUCluKVE6bvEBM/review";

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.showcaseTitle}>35 Five-Star Reviews & Counting!</h2>
      <div className={styles.carouselWrapper}>
        <button className={styles.carouselArrowLeft} onClick={prevReview} aria-label="Previous review">
          &#8249;
        </button>
        <div className={styles.carouselContent}>
          <div
            className={styles.carouselSlider}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className={styles.carouselItem}>
                <div className={styles.reviewCard}>
                  <h3 className={styles.reviewerName}>{review.reviewer}</h3>
                  <div className={styles.starRating}>★★★★★</div>
                  <p className={styles.reviewDate}>{review.reviewDate}</p>
                  {review.reviewText && (
                    <p className={styles.reviewText}>{review.reviewText}</p>
                  )}
                  {review.ownerResponse && (
                    <div className={styles.ownerResponse}>
                      <h4 className={styles.responseTitle}>MC Aesthetics (Owner)</h4>
                      <p className={styles.responseDate}>{review.ownerResponseDate}</p>
                      <p className={styles.responseText}>{review.ownerResponse}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.carouselArrowRight} onClick={nextReview} aria-label="Next review">
          &#8250;
        </button>
      </div>
      
      <div className={styles.carouselDots}>
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselDot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => goToReview(index)}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
      
      <div className={styles.reviewCta}>
        <h3 className={styles.reviewCtaTitle}>Been a customer?</h3>
        <a 
          href={googleReviewLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.reviewButton}
        >
          Tell us how we did
        </a>
      </div>
    </div>
  );
}