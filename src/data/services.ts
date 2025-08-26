export interface ServiceMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface ServiceItem {
  name: string;
  imageUrl: string;
  meta: ServiceMeta;
  nested?: ServiceItem[];
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const aestheticServicesData: ServiceCategory = {
  title: "Aesthetic Services",
  items: [
    {
      name: "Wrinkle Reducers",
      imageUrl: "https://picsum.photos/800/600?random=1",
      meta: {
        title: "Wrinkle Reducers McMinnville - Smooth Fine Lines Naturally",
        description: "Soften crow’s feet, forehead lines, and frown lines with wrinkle reducers at MC Aesthetics in McMinnville. Non-surgical, natural results in just 15-30 minutes with no downtime.",
        keywords: ["wrinkle reducers McMinnville", "anti-aging treatments Oregon", "fine lines solutions", "botox alternatives", "natural facial treatments", "crow’s feet reduction"],
      },
      nested: [
        {
          name: "Xeomin",
          imageUrl: "https://picsum.photos/800/600?random=2",
          meta: {
            title: "Xeomin McMinnville - Pure Wrinkle Treatment",
            description: "Xeomin at MC Aesthetics in McMinnville is a purified wrinkle reducer for natural results on frown lines and crow’s feet. See effects in 3-4 days, lasting 3-4 months.",
            keywords: ["Xeomin McMinnville", "wrinkle treatment Oregon", "anti-aging", "natural botox", "frown line reduction", "pure neurotoxin"],
          },
        },
        {
          name: "Dysport",
          imageUrl: "https://picsum.photos/800/600?random=3",
          meta: {
            title: "Dysport McMinnville - Fast-Acting Wrinkle Reduction",
            description: "Dysport at MC Aesthetics in McMinnville offers fast wrinkle reduction for glabellar lines and forehead wrinkles. Results in 2-3 days, lasting 3-4 months with a smooth finish.",
            keywords: ["Dysport McMinnville", "wrinkle injections Oregon", "quick anti-aging", "facial rejuvenation", "forehead line treatment", "fast botox alternative"],
          },
        },
        {
          name: "DAXXIFY",
          imageUrl: "https://picsum.photos/800/600?random=4",
          meta: {
            title: "DAXXIFY McMinnville - Long-Lasting Wrinkle Treatment",
            description: "DAXXIFY at MC Aesthetics in McMinnville reduces frown lines for 6-9 months with a unique peptide formula. Enjoy sustained youthful results with minimal downtime.",
            keywords: ["DAXXIFY McMinnville", "long-lasting botox Oregon", "wrinkle treatment", "anti-aging innovation", "frown line solution", "extended wrinkle reduction"],
          },
        },
        {
          name: "Jeuveau",
          imageUrl: "https://picsum.photos/800/600?random=5",
          meta: {
            title: "Jeuveau McMinnville - Modern Wrinkle Reducer",
            description: "Jeuveau at MC Aesthetics in McMinnville smooths glabellar lines with a modern approach. Results last 3-6 months for a refreshed, confident look.",
            keywords: ["Jeuveau McMinnville", "modern botox Oregon", "wrinkle reducer", "facial aesthetics", "glabellar line treatment", "youthful expression"],
          },
        },
      ],
    },
    {
      name: "Dermal Fillers",
      imageUrl: "https://picsum.photos/800/600?random=6",
      meta: {
        title: "Dermal Fillers McMinnville - Restore Volume and Youth",
        description: "Enhance facial volume and smooth deep nasolabial folds with dermal fillers at MC Aesthetics in McMinnville. Immediate, non-surgical results lasting 6-18 months.",
        keywords: ["dermal fillers McMinnville", "facial volume Oregon", "anti-aging fillers", "youthful skin", "nasolabial fold treatment", "cheek enhancement"],
      },
      nested: [
        {
          name: "Sculptra",
          imageUrl: "https://picsum.photos/800/600?random=7",
          meta: {
            title: "Sculptra McMinnville - Gradual Volume Restoration",
            description: "Sculptra at MC Aesthetics in McMinnville stimulates collagen for natural volume in hollow cheeks and smile lines. Long-lasting results up to 2 years.",
            keywords: ["Sculptra McMinnville", "collagen filler Oregon", "volume restoration", "natural anti-aging", "smile line treatment", "long-term filler"],
          },
        },
        {
          name: "Restylane",
          imageUrl: "https://picsum.photos/800/600?random=8",
          meta: {
            title: "Restylane McMinnville - Smooth Lines and Enhance Lips",
            description: "Restylane at MC Aesthetics in McMinnville plumps lips and smooths marionette lines with hyaluronic acid. Natural results lasting 6-12 months.",
            keywords: ["Restylane McMinnville", "dermal filler Oregon", "lip enhancement", "wrinkle smoothing", "marionette line treatment", "under-eye rejuvenation"],
          },
        },
        {
          name: "RHA",
          imageUrl: "https://picsum.photos/800/600?random=9",
          meta: {
            title: "RHA Fillers McMinnville - Dynamic Facial Rejuvenation",
            description: "RHA fillers at MC Aesthetics in McMinnville adapt to facial movements for natural wrinkle correction. Lasts 6-18 months for dynamic folds and lines.",
            keywords: ["RHA filler McMinnville", "dynamic fillers Oregon", "facial rejuvenation", "natural look", "smile line filler", "long-lasting HA filler"],
          },
        },
        {
          name: "Revanesse",
          imageUrl: "https://picsum.photos/800/600?random=10",
          meta: {
            title: "Revanesse McMinnville - Natural Volume and Lip Augmentation",
            description: "Revanesse at MC Aesthetics in McMinnville offers Versa™ for wrinkles and Lips™ for augmentation with minimal swelling. Results last up to 12 months.",
            keywords: ["Revanesse McMinnville", "natural filler Oregon", "lip augmentation", "facial volume", "minimal swelling filler", "Versa wrinkle treatment"],
          },
        },
        {
          name: "Belotero",
          imageUrl: "https://picsum.photos/800/600?random=11",
          meta: {
            title: "Belotero McMinnville - Precision Fine Line Treatment",
            description: "Belotero at MC Aesthetics in McMinnville targets superficial lines like smoker’s lines with seamless integration. Results last 6-18 months for subtle enhancement.",
            keywords: ["Belotero McMinnville", "precision filler Oregon", "wrinkle treatment", "subtle volume", "smoker’s lines solution", "fine line reduction"],
          },
        },
        {
          name: "Radiesse",
          imageUrl: "https://picsum.photos/800/600?random=12",
          meta: {
            title: "Radiesse McMinnville - Instant Volume and Collagen Boost",
            description: "Radiesse at MC Aesthetics in McMinnville restores volume and stimulates collagen for cheeks and jawline. Results last 12-18 months, also ideal for hands.",
            keywords: ["Radiesse McMinnville", "collagen booster Oregon", "instant volume", "dermal filler", "jawline contouring", "hand rejuvenation"],
          },
        },
      ],
    },
    {
      name: "Kybella",
      imageUrl: "https://picsum.photos/800/600?random=13",
      meta: {
        title: "Kybella McMinnville - Double Chin Reduction Treatment",
        description: "Kybella at MC Aesthetics in McMinnville permanently reduces double chin fat for a sculpted jawline. Non-surgical treatment with lasting results.",
        keywords: ["Kybella McMinnville", "double chin treatment Oregon", "fat reduction", "jawline contouring", "permanent chin fat removal", "submental fullness solution"],
      },
    },
    {
      name: "Sclerotherapy",
      imageUrl: "https://picsum.photos/800/600?random=14",
      meta: {
        title: "Sclerotherapy McMinnville - Spider Vein Treatment",
        description: "Sclerotherapy with Asclera® at MC Aesthetics in McMinnville clears spider veins and small varicose veins. Quick 15-45 minute sessions, FDA-approved since 2010.",
        keywords: ["Sclerotherapy McMinnville", "spider vein removal Oregon", "vein treatment", "clear skin", "Asclera therapy", "reticular vein solution"],
      },
    },
    {
      name: "Chemical Peels - Perfect Derma™",
      imageUrl: "https://picsum.photos/800/600?random=15",
      meta: {
        title: "Perfect Derma Peel McMinnville - Radiant Skin Rejuvenation",
        description: "Perfect Derma™ Peel at MC Aesthetics in McMinnville brightens skin and treats acne scars, melasma, and wrinkles. Safe for all skin types with no downtime.",
        keywords: ["chemical peels McMinnville", "Perfect Derma Oregon", "skin rejuvenation", "acne scar treatment", "hyperpigmentation solution", "anti-aging peel"],
      },
    },
    {
      name: "Scarlet RF Microneedling",
      imageUrl: "https://picsum.photos/800/600?random=16",
      meta: {
        title: "Scarlet RF Microneedling McMinnville - Advanced Skin Tightening",
        description: "Scarlet RF Microneedling at MC Aesthetics in McMinnville tightens skin and improves acne scars with no downtime. Optimal results in 3 sessions over 2-3 months.",
        keywords: ["Scarlet RF McMinnville", "microneedling Oregon", "skin tightening", "texture improvement", "acne scar removal", "radiofrequency rejuvenation"],
      },
    },
    {
      name: "CoolPeel CO2 Laser",
      imageUrl: "https://picsum.photos/800/600?random=18",
      meta: {
        title: "CoolPeel CO2 Laser McMinnville - Skin Resurfacing Innovation",
        description: "CoolPeel CO2 Laser at MC Aesthetics in McMinnville offers powerful resurfacing with minimal downtime. Smooth skin, reduce pores, and erase fine lines now.",
        keywords: ["CoolPeel CO2 Laser McMinnville", "skin resurfacing Oregon", "anti-aging laser", "minimal downtime treatment", "glowing skin solution", "fine line reduction"],
      },
    },
    {
      name: "All Aesthetic Services",
      imageUrl: "https://picsum.photos/800/600?random=17",
      meta: {
        title: "All Aesthetic Services McMinnville - Comprehensive Skin Care",
        description: "Explore all aesthetic services at MC Aesthetics in McMinnville for tailored skin care solutions. From fillers to lasers, achieve your best look with expert care.",
        keywords: ["aesthetic services McMinnville", "skin care treatments Oregon", "facial rejuvenation", "anti-aging solutions", "cosmetic injections", "skin tightening"],
      },
    },
  ],
};

export default aestheticServicesData;