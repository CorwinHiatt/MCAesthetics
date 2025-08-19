export interface SubService {
  id: number;
  name: string;
  slug: string;
  description: string;
  benefits?: string[];
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
        benefits: [
          'Reduces appearance of fine lines and wrinkles',
          'Prevents formation of new wrinkles',
          'Quick procedure with minimal downtime',
          'Results typically last 3-4 months'
        ]
      },
      {
        id: 102,
        name: 'Dysport',
        slug: 'dysport',
        description: 'Similar to Botox, Dysport is an injectable that reduces moderate to severe frown lines between the eyebrows.',
        benefits: [
          'Smooths frown lines and wrinkles',
          'Natural-looking results',
          'Quick treatment sessions',
          'May spread to a wider area than Botox'
        ]
      },
      {
        id: 103,
        name: 'Jeuveau',
        slug: 'jeuveau',
        description: 'A newer neurotoxin treatment specifically designed for aesthetic use to improve the appearance of moderate to severe frown lines.',
        benefits: [
          'Effectively reduces frown lines',
          'Modern formulation',
          'Comparable results to other neurotoxins',
          'May have a quicker onset than alternatives'
        ]
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
        benefits: [
          'Instantly adds volume to facial features',
          'Smooths moderate to severe facial wrinkles',
          'Results can last 1-2 years depending on the specific product',
          'Natural-looking results'
        ]
      },
      {
        id: 202,
        name: 'Restylane',
        slug: 'restylane',
        description: 'A line of hyaluronic acid fillers designed to add fullness to the face and lips and reduce the appearance of wrinkles and folds.',
        benefits: [
          'Reduces appearance of fine lines and wrinkles',
          'Enhances lip fullness and definition',
          'Restores lost volume in cheeks and under eyes',
          'Results typically last 6-18 months'
        ]
      },
      {
        id: 203,
        name: 'Radiesse',
        slug: 'radiesse',
        description: 'A calcium hydroxylapatite filler that stimulates natural collagen production while providing immediate volume.',
        benefits: [
          'Provides immediate volume correction',
          'Stimulates natural collagen production',
          'Longer-lasting results (up to 15 months)',
          'Effective for deeper wrinkles and folds'
        ]
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
        benefits: [
          'Minimal downtime',
          'Improves skin texture and tone',
          'Reduces fine lines and minor blemishes',
          'Can be performed regularly for maintenance'
        ]
      },
      {
        id: 502,
        name: 'Medium Peels',
        slug: 'medium-peels',
        description: 'Peels that penetrate to the middle layers of the skin to remove damaged cells, addressing more significant skin concerns.',
        benefits: [
          'Reduces moderate wrinkles and discoloration',
          'Improves age spots and freckles',
          'Treats some precancerous skin growths',
          'More dramatic results than superficial peels'
        ]
      },
      {
        id: 503,
        name: 'Deep Peels',
        slug: 'deep-peels',
        description: 'The most aggressive type of chemical peel that penetrates to the lower dermal layer to address more severe skin concerns.',
        benefits: [
          'Treats deeper wrinkles and scars',
          'Addresses significant sun damage and discoloration',
          'Provides the most dramatic results',
          'Long-lasting effects'
        ]
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
        benefits: [
          'Improves skin texture and firmness',
          'Reduces scars, pore size, and stretch marks',
          'Minimal downtime',
          'Safe for most skin types'
        ]
      },
      {
        id: 702,
        name: 'Microneedling with PRP',
        slug: 'microneedling-with-prp',
        description: 'Combines traditional microneedling with platelet-rich plasma (PRP) derived from your own blood to enhance results.',
        benefits: [
          'Enhanced collagen production',
          'Accelerated healing process',
          'More significant improvement in skin texture and tone',
          'Better results for scars and deep wrinkles'
        ]
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
        benefits: [
          'Maintains skin health',
          'Prevents signs of aging',
          'Protects against environmental damage',
          'Customizable for different skin types'
        ]
      },
      {
        id: 902,
        name: 'ZO Treatment Products',
        slug: 'zo-treatment-products',
        description: 'Targeted treatments that address specific skin concerns such as hyperpigmentation, acne, and aging.',
        benefits: [
          'Addresses specific skin concerns',
          'Contains potent active ingredients',
          'Provides visible results',
          'Complements professional treatments'
        ]
      },
      {
        id: 903,
        name: 'ZO Skin Brightening',
        slug: 'zo-skin-brightening',
        description: 'Products specifically formulated to reduce hyperpigmentation and even skin tone for a brighter complexion.',
        benefits: [
          'Reduces dark spots and discoloration',
          'Evens skin tone',
          'Prevents new pigmentation',
          'Brightens overall complexion'
        ]
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
