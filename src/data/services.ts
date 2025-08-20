// app/data/services.ts


export interface SubService {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
  benefits?: string[];
  process?: string;
  results?: string;
  duration?: string;
  recoveryTime?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  benefits?: string[];
  subServices: SubService[];
  faqs?: FAQ[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 1,
    name: 'Wrinkle Reducers',
    slug: 'wrinkle-reducers',
    description: 'Treatments to reduce the appearance of fine lines and wrinkles for a more youthful appearance.',
    imageUrl: 'https://picsum.photos/1200/600',
    subServices: [
      {
        id: 101,
        name: 'Botox',
        slug: 'botox',
        description: 'A popular injectable treatment that temporarily reduces the appearance of facial wrinkles by relaxing the underlying muscles.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Reduces appearance of fine lines and wrinkles',
          'Prevents formation of new wrinkles',
          'Quick procedure with minimal downtime',
          'Results typically last 3-4 months'
        ],
        process: 'Botox is administered through a series of small injections directly into the targeted muscles. The procedure typically takes 10-15 minutes and requires no anesthesia or recovery time.',
        results: 'Results begin to appear within 24-48 hours after treatment, with full effects visible within 7-14 days. The reduction in wrinkles and fine lines typically lasts 3-4 months before a touch-up is needed.',
        duration: '10-15 minutes',
        recoveryTime: 'No downtime required. Patients can return to normal activities immediately after treatment.'
      },
      {
        id: 102,
        name: 'Dysport',
        slug: 'dysport',
        description: 'Similar to Botox, Dysport is an injectable that reduces moderate to severe frown lines between the eyebrows.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Smooths frown lines and wrinkles',
          'Natural-looking results',
          'Quick treatment sessions',
          'May spread to a wider area than Botox'
        ],
        process: 'Dysport is injected directly into the muscles that cause frown lines and wrinkles. The procedure is quick, typically taking about 10-20 minutes to complete.',
        results: 'Results may be visible within 2-3 days after treatment, with maximum results appearing within 7-10 days. Effects typically last 3-4 months before a maintenance treatment is needed.',
        duration: '10-20 minutes',
        recoveryTime: 'Minimal to no downtime. Some patients may experience slight bruising or swelling at injection sites that resolves within a day or two.'
      },
      {
        id: 103,
        name: 'Jeuveau',
        slug: 'jeuveau',
        description: 'A newer neurotoxin treatment specifically designed for aesthetic use to improve the appearance of moderate to severe frown lines.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Effectively reduces frown lines',
          'Modern formulation',
          'Comparable results to other neurotoxins',
          'May have a quicker onset than alternatives'
        ],
        process: 'Jeuveau is administered through precise injections into the muscles responsible for creating frown lines. The treatment is performed in-office and typically takes about 15-20 minutes.',
        results: 'Many patients notice improvement within 2-3 days, with full results visible within 7-10 days. Results typically last 3-4 months before a follow-up treatment is recommended.',
        duration: '15-20 minutes',
        recoveryTime: 'No significant downtime. Patients can return to normal activities immediately, though some may experience minor redness or swelling at injection sites for a few hours.'
      }
    ],
    faqs: [
      {
        question: 'How long do wrinkle reducer treatments last?',
        answer: 'Most wrinkle reducer treatments last between 3-4 months, though this can vary based on the specific product used, the area treated, and individual factors.'
      },
      {
        question: 'Is there any downtime after treatment?',
        answer: 'There is minimal to no downtime after wrinkle reducer treatments. Some patients may experience slight redness or swelling at the injection sites, but this typically resolves within a few hours.'
      },
      {
        question: 'When will I see results?',
        answer: 'Results typically begin to appear within 3-5 days after treatment, with full results visible after about 2 weeks.'
      }
    ]
  },
  {
    id: 2,
    name: 'Dermal Fillers',
    slug: 'dermal-fillers',
    description: 'Injectable treatments that restore volume, smooth lines, and enhance facial contours for a more youthful appearance.',
    imageUrl: 'https://picsum.photos/1200/600',
    subServices: [
      {
        id: 201,
        name: 'Juvederm',
        slug: 'juvederm',
        description: 'A collection of hyaluronic acid fillers that add volume to different areas of the face, including lips, cheeks, and around the mouth.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Instantly adds volume to facial features',
          'Smooths moderate to severe facial wrinkles',
          'Results can last 1-2 years depending on the specific product',
          'Natural-looking results'
        ],
        process: 'After a consultation to determine your aesthetic goals, the provider will inject Juvederm into targeted areas using a fine needle or cannula. The procedure may include topical or local anesthetic for comfort.',
        results: 'Results are visible immediately after treatment, with some potential swelling that resolves within a few days. The enhanced volume and reduced wrinkles typically last 1-2 years depending on the specific Juvederm product used.',
        duration: '30-60 minutes',
        recoveryTime: 'Minimal downtime of 24-48 hours. Some patients may experience swelling, bruising, or tenderness at injection sites that typically resolves within a week.'
      },
      {
        id: 202,
        name: 'Restylane',
        slug: 'restylane',
        description: 'A line of hyaluronic acid fillers designed to add fullness to the face and lips and reduce the appearance of wrinkles and folds.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Reduces appearance of fine lines and wrinkles',
          'Enhances lip fullness and definition',
          'Restores lost volume in cheeks and under eyes',
          'Results typically last 6-18 months'
        ],
        process: 'After cleansing the treatment area and applying a topical anesthetic if desired, Restylane is precisely injected into targeted areas using a fine needle. The provider may massage the area to ensure proper placement and a natural appearance.',
        results: 'Results are immediately visible, with full effects apparent once any swelling subsides. Depending on the specific Restylane product and treatment area, results typically last 6-18 months.',
        duration: '30-45 minutes',
        recoveryTime: 'Most patients return to normal activities within 24 hours. Some swelling, redness, or bruising may occur at injection sites and typically resolves within 3-7 days.'
      },
      {
        id: 203,
        name: 'Radiesse',
        slug: 'radiesse',
        description: 'A calcium hydroxylapatite filler that stimulates natural collagen production while providing immediate volume.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Provides immediate volume correction',
          'Stimulates natural collagen production',
          'Longer-lasting results (up to 15 months)',
          'Effective for deeper wrinkles and folds'
        ],
        process: 'After applying a topical anesthetic, Radiesse is injected beneath the skin using a fine needle. The treatment focuses on areas needing volume restoration and wrinkle reduction, particularly nasolabial folds and marionette lines.',
        results: 'Immediate volume enhancement is visible after treatment, with continued improvement over time as collagen production increases. Results typically last 12-15 months as the body gradually metabolizes the product.',
        duration: '30-60 minutes',
        recoveryTime: 'Most patients experience minimal downtime of 24-48 hours. Some swelling, redness, or bruising at injection sites may occur and typically resolves within a week.'
      }
    ],
    faqs: [
      {
        question: 'Are dermal filler treatments painful?',
        answer: 'Most dermal fillers contain lidocaine to minimize discomfort during the procedure. Additionally, topical numbing cream can be applied before treatment to further reduce any pain.'
      },
      {
        question: 'How long do fillers last?',
        answer: 'The longevity of fillers varies depending on the product used, the area treated, and individual factors. Generally, fillers can last anywhere from 6 months to 2 years.'
      },
      {
        question: 'Can fillers be reversed if I don\'t like the results?',
        answer: 'Hyaluronic acid fillers (like Juvederm and Restylane) can be dissolved using an enzyme called hyaluronidase if you\'re unhappy with the results.'
      }
    ]
  },
  {
    id: 3,
    name: 'Kybella',
    slug: 'kybella',
    description: 'The first and only FDA-approved injectable treatment that destroys fat cells under the chin for an improved profile.',
    imageUrl: 'https://picsum.photos/1200/600',
    subServices: [],
    benefits: [
      'Permanently destroys fat cells under the chin',
      'Non-surgical alternative to liposuction',
      'Customizable treatment plan',
      'Minimal downtime',
      'Improves profile and reduces appearance of double chin'
    ],
    faqs: [
      {
        question: 'How many Kybella treatments will I need?',
        answer: 'Most patients require 2-4 treatment sessions spaced about 1 month apart to achieve optimal results. Your provider will create a customized treatment plan based on your specific goals and anatomy.'
      },
      {
        question: 'Is there downtime after Kybella treatment?',
        answer: 'After Kybella treatment, you may experience swelling, bruising, pain, numbness, or redness in the treatment area. These side effects are typically temporary and resolve on their own.'
      },
      {
        question: 'Are Kybella results permanent?',
        answer: 'Yes, once the fat cells are destroyed by Kybella, they can no longer store or accumulate fat. However, maintaining a stable weight is important for long-lasting results.'
      }
    ]
  },
  {
    id: 4,
    name: 'Sclerotherapy',
    slug: 'sclerotherapy',
    description: 'A medical procedure used to eliminate varicose veins and spider veins by injecting a solution that causes the veins to collapse and fade from view.',
    imageUrl: 'https://picsum.photos/1200/600',
    subServices: [],
    benefits: [
      'Effectively reduces appearance of spider veins',
      'Minimally invasive procedure',
      'Little to no downtime',
      'Improves leg appearance and confidence',
      'Can relieve symptoms associated with varicose veins'
    ],
    faqs: [
      {
        question: 'How many sclerotherapy treatments will I need?',
        answer: 'The number of treatments needed varies depending on the extent and size of the veins being treated. Most patients require 2-4 sessions spaced 4-6 weeks apart for optimal results.'
      },
      {
        question: 'Is sclerotherapy painful?',
        answer: 'Most patients experience minimal discomfort during sclerotherapy. The procedure involves small needle injections that may cause a slight burning or cramping sensation for a few minutes.'
      },
      {
        question: 'When will I see results from sclerotherapy?',
        answer: 'Small spider veins may respond in 3-6 weeks, while larger veins may take 3-4 months to respond. Multiple treatments are often needed for complete results.'
      }
    ]
  },
  {
    id: 5,
    name: 'Chemical Peels',
    slug: 'chemical-peels',
    description: 'Treatments that use chemical solutions to improve the skin\'s appearance by removing damaged outer layers, revealing fresher, younger-looking skin underneath.',
    imageUrl: 'https://picsum.photos/1200/600',
    subServices: [
      {
        id: 501,
        name: 'Superficial Peels',
        slug: 'superficial-peels',
        description: 'Mild peels that exfoliate the outermost layer of the skin to improve texture, minor discoloration, and refresh the skin\'s appearance.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Minimal downtime',
          'Improves skin texture and tone',
          'Reduces fine lines and minor blemishes',
          'Can be performed regularly for maintenance'
        ],
        process: 'After cleansing the skin, the chemical solution (typically containing alpha-hydroxy acids like glycolic acid) is applied to the face. The solution remains on the skin for a few minutes before being neutralized and removed. A soothing mask or cream may be applied afterward.',
        results: 'The skin appears fresher and more radiant immediately after treatment, with continued improvement in texture and tone over the next week as the skin completes its renewal process.',
        duration: '30 minutes',
        recoveryTime: '1-3 days of mild redness and peeling, similar to a light sunburn. Most patients can apply makeup the next day.'
      },
      {
        id: 502,
        name: 'Medium Peels',
        slug: 'medium-peels',
        description: 'Peels that penetrate to the middle layers of the skin to remove damaged cells, addressing more significant skin concerns.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Reduces moderate wrinkles and discoloration',
          'Improves age spots and freckles',
          'Treats some precancerous skin growths',
          'More dramatic results than superficial peels'
        ],
        process: 'The skin is thoroughly cleansed before applying the chemical solution (typically containing trichloroacetic acid). The solution remains on the skin for a specified time before being neutralized. Cool compresses may be applied to alleviate any burning sensation.',
        results: 'After the recovery period, patients notice significant improvement in skin tone, texture, and pigmentation. Fine lines are reduced, and the skin appears smoother and more youthful.',
        duration: '45 minutes',
        recoveryTime: '7-14 days. The skin will redden, swell, and blister before peeling. Most patients take about a week off from work and social activities.'
      },
      {
        id: 503,
        name: 'Deep Peels',
        slug: 'deep-peels',
        description: 'The most aggressive type of chemical peel that penetrates to the lower dermal layer to address more severe skin concerns.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Treats deeper wrinkles and scars',
          'Addresses significant sun damage and discoloration',
          'Provides the most dramatic results',
          'Long-lasting effects'
        ],
        process: 'The procedure begins with sedation or local anesthesia for comfort. After thorough cleansing, the chemical solution (typically phenol-based) is applied in a precise manner, often in sections. The procedure is carefully timed and monitored to ensure safety and effectiveness.',
        results: 'Once healed, the skin appears dramatically smoother, tighter, and more even-toned. Deep wrinkles are significantly reduced, and overall skin quality is greatly improved. Results can last for years with proper sun protection.',
        duration: '1-2 hours',
        recoveryTime: '14-21 days. The face will be bandaged after treatment. Significant swelling, redness, and peeling occur during recovery. Most patients take 2-3 weeks off from work and social activities.'
      }
    ],
    faqs: [
      {
        question: 'How should I prepare for a chemical peel?',
        answer: 'Prior to a chemical peel, you should avoid sun exposure, discontinue use of retinoids and exfoliants, and follow any specific instructions provided by your skincare professional.'
      },
      {
        question: 'What is the recovery time for chemical peels?',
        answer: 'Recovery time varies depending on the depth of the peel. Superficial peels may have 1-7 days of redness and mild peeling, medium peels 7-14 days, and deep peels can require 14-21 days for complete healing.'
      },
      {
        question: 'How often can I get a chemical peel?',
        answer: 'The frequency depends on the type of peel. Superficial peels can be done every 2-4 weeks, medium peels every 3-6 months, and deep peels are typically a once-in-a-lifetime treatment due to their intensity.'
      }
    ]
  },
  {
    id: 6,
    name: 'Scarlet RF',
    slug: 'scarlet-rf',
    description: 'An advanced radiofrequency microneedling treatment that tightens and rejuvenates the skin by stimulating collagen production.',
    imageUrl: 'https://picsum.photos/1200/600',
    subServices: [],
    benefits: [
      'Tightens skin and improves elasticity',
      'Reduces appearance of fine lines and wrinkles',
      'Minimizes pore size',
      'Improves skin texture and tone',
      'Minimal downtime compared to more invasive procedures'
    ],
    faqs: [
      {
        question: 'How many Scarlet RF treatments will I need?',
        answer: 'Most patients benefit from a series of 3-4 treatments spaced 4-6 weeks apart for optimal results. Maintenance treatments may be recommended every 6-12 months.'
      },
      {
        question: 'Is Scarlet RF painful?',
        answer: 'A topical numbing cream is applied before treatment to minimize discomfort. Most patients describe the sensation as warm and prickly but tolerable.'
      },
      {
        question: 'When will I see results from Scarlet RF?',
        answer: 'Some improvements may be visible immediately after treatment, but the most significant results develop over 2-3 months as collagen production increases. Results continue to improve with additional treatments.'
      }
    ]
  },
  {
    id: 7,
    name: 'Microneedling',
    slug: 'microneedling',
    description: 'A minimally invasive cosmetic procedure that creates controlled micro-injuries to stimulate the body\'s natural wound healing process and collagen production.',
    imageUrl: 'https://picsum.photos/1200/600',
    subServices: [
      {
        id: 701,
        name: 'Traditional Microneedling',
        slug: 'traditional-microneedling',
        description: 'Uses a device with fine needles to create tiny punctures in the top layer of the skin, triggering the body to create new collagen and elastin.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Improves skin texture and firmness',
          'Reduces scars, pore size, and stretch marks',
          'Minimal downtime',
          'Safe for most skin types'
        ],
        process: 'After applying a topical numbing cream, a specialized device with fine needles is moved across the skin, creating thousands of microscopic channels. These controlled micro-injuries trigger the skins natural healing process, stimulating collagen and elastin production.',
        results: 'Immediately after treatment, the skin appears flushed. As healing progresses over the next few weeks, skin texture and tone improve, with continued enhancement for up to 6 months as collagen remodeling occurs.',
        duration: '30-60 minutes',
        recoveryTime: '24-72 hours of redness and mild swelling, similar to a sunburn. Most patients can resume normal activities within 1-2 days, though complete healing takes about a week.'
      },
      {
        id: 702,
        name: 'Microneedling with PRP',
        slug: 'microneedling-with-prp',
        description: 'Combines traditional microneedling with platelet-rich plasma (PRP) derived from your own blood to enhance results.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Enhanced collagen production',
          'Accelerated healing process',
          'More significant improvement in skin texture and tone',
          'Better results for scars and deep wrinkles'
        ],
        process: 'The treatment begins with a blood draw to obtain PRP. After applying numbing cream, the microneedling device creates controlled micro-injuries in the skin. The PRP is then applied topically or injected into specific areas, allowing the growth factors to penetrate deeply and enhance the healing process.',
        results: 'Initial redness subsides within a few days, revealing improved skin texture. Significant improvements in skin quality, including reduced scarring and fine lines, develop over 4-6 weeks and continue to improve for up to 6 months.',
        duration: '60-90 minutes',
        recoveryTime: '2-4 days of redness and mild swelling. The skin may feel tight and dry for several days. Most patients can resume normal activities within 48 hours, though complete healing takes about a week.'
      }
    ],
    faqs: [
      {
        question: 'How many microneedling treatments will I need?',
        answer: 'Most patients require a series of 3-6 treatments spaced 4-6 weeks apart for optimal results. The exact number depends on your specific skin concerns and goals.'
      },
      {
        question: 'What is the downtime after microneedling?',
        answer: 'Downtime is minimal, with most patients experiencing redness and mild swelling for 24-48 hours. The skin may feel tight and dry for a few days after treatment.'
      },
      {
        question: 'Is microneedling safe for all skin types?',
        answer: 'Microneedling is generally safe for all skin types, including darker skin tones. However, those with active skin infections, certain skin conditions, or who are pregnant should avoid the treatment.'
      }
    ]
  },
  {
    id: 8,
    name: 'Laser Hair Removal',
    slug: 'laser-hair-removal',
    description: 'A medical procedure that uses concentrated light to remove unwanted hair by damaging the hair follicles and inhibiting future growth.',
    imageUrl: 'https://picsum.photos/1200/600',
    subServices: [],
    benefits: [
      'Provides long-term hair reduction',
      'Treats large areas quickly and effectively',
      'Prevents ingrown hairs',
      'Saves time and money compared to shaving or waxing',
      'Precise targeting of dark, coarse hairs'
    ],
    faqs: [
      {
        question: 'How many laser hair removal sessions will I need?',
        answer: 'Most patients require 6-8 treatments spaced 4-6 weeks apart for optimal results. Maintenance treatments may be needed annually or biannually.'
      },
      {
        question: 'Is laser hair removal painful?',
        answer: 'Most patients describe the sensation as a rubber band snapping against the skin. Discomfort varies depending on the treatment area and individual pain tolerance. Topical numbing cream can be applied if needed.'
      },
      {
        question: 'Is laser hair removal permanent?',
        answer: 'Laser hair removal provides long-term hair reduction rather than permanent removal. After completing a full series of treatments, most patients experience 70-90% reduction in hair growth.'
      }
    ]
  },
  {
    id: 9,
    name: 'ZO Skin Health',
    slug: 'zo-skin-health',
    description: 'Medical-grade skincare products developed by Dr. Zein Obagi that address a wide range of skin concerns through advanced ingredients and formulations.',
    imageUrl: 'https://picsum.photos/1200/600',
    subServices: [
      {
        id: 901,
        name: 'ZO Daily Skincare',
        slug: 'zo-daily-skincare',
        description: 'Comprehensive daily skincare regimens designed to maintain healthy skin and prevent common concerns.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Maintains skin health',
          'Prevents signs of aging',
          'Protects against environmental damage',
          'Customizable for different skin types'
        ],
        process: 'After a personalized skin assessment, a ZO specialist will recommend a customized daily regimen typically including cleanser, exfoliant, toner, and targeted treatments. Products are applied in a specific sequence for maximum effectiveness.',
        results: 'With consistent use, patients notice improved skin clarity, texture, and tone within 4-6 weeks. Long-term use helps maintain skin health and prevent signs of aging.',
        duration: 'Daily use as part of morning and evening skincare routines',
        recoveryTime: 'No downtime. Some products may cause initial redness or peeling as the skin adjusts, typically resolving within 1-2 weeks.'
      },
      {
        id: 902,
        name: 'ZO Treatment Products',
        slug: 'zo-treatment-products',
        description: 'Targeted treatments that address specific skin concerns such as hyperpigmentation, acne, and aging.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Addresses specific skin concerns',
          'Contains potent active ingredients',
          'Provides visible results',
          'Complements professional treatments'
        ],
        process: 'After identifying specific skin concerns, targeted ZO treatment products are incorporated into the daily skincare routine. These products contain higher concentrations of active ingredients to address particular issues like pigmentation, acne, or aging.',
        results: 'Improvement in specific skin concerns becomes noticeable within 6-8 weeks of consistent use. Results continue to improve with ongoing application as directed.',
        duration: 'Used as directed as part of daily skincare routine, typically applied once or twice daily',
        recoveryTime: 'Some products may cause temporary redness, dryness, or peeling as the skin adjusts to active ingredients. This typically subsides within 2-3 weeks as the skin adapts.'
      },
      {
        id: 903,
        name: 'ZO Skin Brightening',
        slug: 'zo-skin-brightening',
        description: 'Products specifically formulated to reduce hyperpigmentation and even skin tone for a brighter complexion.',
        imageUrl: 'https://picsum.photos/1200/600',
        benefits: [
          'Reduces dark spots and discoloration',
          'Evens skin tone',
          'Prevents new pigmentation',
          'Brightens overall complexion'
        ],
        process: 'After cleansing and toning, ZO brightening products are applied to target areas of hyperpigmentation or all over the face for general brightening. These products contain ingredients that inhibit melanin production and promote cell turnover to reveal brighter skin.',
        results: 'Initial brightening effects may be noticed within 2-4 weeks, with significant improvement in pigmentation and overall skin tone after 8-12 weeks of consistent use.',
        duration: 'Applied daily as part of morning and/or evening skincare routine',
        recoveryTime: 'Some initial sensitivity or mild peeling may occur as the skin adjusts to the active ingredients. This typically resolves within 1-2 weeks.'
      }
    ],
    faqs: [
      {
        question: 'How soon will I see results with ZO Skin Health products?',
        answer: 'Initial improvements in skin texture and hydration may be noticeable within days. More significant results for specific concerns like pigmentation or aging typically develop over 6-12 weeks of consistent use.'
      },
      {
        question: 'Can ZO products be used with other treatments?',
        answer: 'Yes, ZO Skin Health products are designed to complement professional treatments like chemical peels, microneedling, and laser procedures. Your provider will recommend the appropriate products to use before and after treatments.'
      },
      {
        question: 'Are ZO Skin Health products suitable for sensitive skin?',
        answer: 'ZO offers products for various skin types, including sensitive skin. However, some active ingredients may cause irritation initially. Your provider will recommend the appropriate products and help you gradually introduce them into your routine.'
      }
    ]
  }
];
