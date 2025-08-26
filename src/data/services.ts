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
        title: "Wrinkle Reducers - Smooth Fine Lines and Wrinkles",
        description: "Explore our range of wrinkle reducer treatments to achieve a youthful, smooth complexion with expert care.",
        keywords: ["wrinkle reducers", "anti-aging treatments", "fine lines solutions", "botox alternatives"],
      },
      nested: [
        {
          name: "Xeomin",
          imageUrl: "https://picsum.photos/800/600?random=2",
          meta: {
            title: "Xeomin Wrinkle Treatment - Natural Results",
            description: "Discover Xeomin, a purified wrinkle reducer for natural-looking results with minimal downtime.",
            keywords: ["Xeomin", "wrinkle treatment", "anti-aging", "natural botox"],
          },
        },
        {
          name: "Dysport",
          imageUrl: "https://picsum.photos/800/600?random=3",
          meta: {
            title: "Dysport Injections - Fast-Acting Wrinkle Reduction",
            description: "Dysport offers fast-acting wrinkle reduction for a refreshed appearance. Book your consultation today.",
            keywords: ["Dysport", "wrinkle injections", "quick anti-aging", "facial rejuvenation"],
          },
        },
        {
          name: "DAXXIFY",
          imageUrl: "https://picsum.photos/800/600?random=4",
          meta: {
            title: "DAXXIFY - Long-Lasting Wrinkle Treatment",
            description: "Experience DAXXIFY, a long-lasting wrinkle reducer for sustained youthful results. Learn more now.",
            keywords: ["DAXXIFY", "long-lasting botox", "wrinkle treatment", "anti-aging innovation"],
          },
        },
        {
          name: "Jeuveau",
          imageUrl: "https://picsum.photos/800/600?random=5",
          meta: {
            title: "Jeuveau - Modern Wrinkle Reducer",
            description: "Jeuveau, a modern wrinkle reducer, helps smooth lines for a refreshed look. Schedule your session today.",
            keywords: ["Jeuveau", "modern botox", "wrinkle reducer", "facial aesthetics"],
          },
        },
      ],
    },
    {
      name: "Dermal Fillers",
      imageUrl: "https://picsum.photos/800/600?random=6",
      meta: {
        title: "Dermal Fillers - Restore Volume and Youth",
        description: "Enhance facial volume and smooth deep lines with our premium dermal filler treatments tailored to you.",
        keywords: ["dermal fillers", "facial volume", "anti-aging fillers", "youthful skin"],
      },
      nested: [
        {
          name: "Sculptra",
          imageUrl: "https://picsum.photos/800/600?random=7",
          meta: {
            title: "Sculptra Filler - Gradual Volume Restoration",
            description: "Sculptra stimulates collagen for gradual, natural volume restoration. Perfect for long-term facial rejuvenation.",
            keywords: ["Sculptra", "collagen filler", "volume restoration", "natural anti-aging"],
          },
        },
        {
          name: "Restylane",
          imageUrl: "https://picsum.photos/800/600?random=8",
          meta: {
            title: "Restylane Filler - Smooth Lines and Enhance Features",
            description: "Restylane fillers smooth lines and enhance facial features with natural-looking results. Book now.",
            keywords: ["Restylane", "dermal filler", "lip enhancement", "wrinkle smoothing"],
          },
        },
        {
          name: "RHA",
          imageUrl: "https://picsum.photos/800/600?random=9",
          meta: {
            title: "RHA Fillers - Dynamic Facial Rejuvenation",
            description: "RHA fillers adapt to facial movements for dynamic, natural rejuvenation. Discover the difference today.",
            keywords: ["RHA filler", "dynamic fillers", "facial rejuvenation", "natural look"],
          },
        },
        {
          name: "Revanesse",
          imageUrl: "https://picsum.photos/800/600?random=10",
          meta: {
            title: "Revanesse Filler - Smooth and Natural Results",
            description: "Revanesse offers smooth, natural results for facial volume and wrinkle reduction. Schedule a consultation.",
            keywords: ["Revanesse", "natural filler", "facial volume", "anti-aging treatment"],
          },
        },
        {
          name: "Belotero",
          imageUrl: "https://picsum.photos/800/600?random=11",
          meta: {
            title: "Belotero Filler - Precision Wrinkle Treatment",
            description: "Belotero provides precise wrinkle treatment and subtle volume for a refreshed look. Learn more.",
            keywords: ["Belotero", "precision filler", "wrinkle treatment", "subtle volume"],
          },
        },
        {
          name: "Radiesse",
          imageUrl: "https://picsum.photos/800/600?random=12",
          meta: {
            title: "Radiesse Filler - Instant Volume and Collagen Boost",
            description: "Radiesse delivers instant volume and stimulates collagen for lasting facial rejuvenation. Book today.",
            keywords: ["Radiesse", "collagen booster", "instant volume", "dermal filler"],
          },
        },
      ],
    },
    {
      name: "Kybella",
      imageUrl: "https://picsum.photos/800/600?random=13",
      meta: {
        title: "Kybella - Double Chin Reduction Treatment",
        description: "Kybella effectively reduces double chin fat for a sculpted jawline. Non-surgical and permanent results await.",
        keywords: ["Kybella", "double chin treatment", "fat reduction", "jawline contouring"],
      },
    },
    {
      name: "Sclerotherapy",
      imageUrl: "https://picsum.photos/800/600?random=14",
      meta: {
        title: "Sclerotherapy - Spider Vein Treatment",
        description: "Sclerotherapy treats spider veins effectively, restoring clear, smooth skin. Schedule your treatment today.",
        keywords: ["Sclerotherapy", "spider vein removal", "vein treatment", "clear skin"],
      },
    },
    {
      name: "Chemical Peels - Perfect Derma™",
      imageUrl: "https://picsum.photos/800/600?random=15",
      meta: {
        title: "Chemical Peels - Perfect Derma™ for Radiant Skin",
        description: "Perfect Derma™ chemical peels rejuvenate skin, addressing acne, pigmentation, and texture. Reveal radiant skin now.",
        keywords: ["chemical peels", "Perfect Derma", "skin rejuvenation", "acne treatment"],
      },
    },
    {
      name: "Scarlet RF Microneedling",
      imageUrl: "https://picsum.photos/800/600?random=16",
      meta: {
        title: "Scarlet RF Microneedling - Advanced Skin Tightening",
        description: "Scarlet RF Microneedling tightens skin and improves texture with advanced technology. Transform your skin today.",
        keywords: ["Scarlet RF", "microneedling", "skin tightening", "texture improvement"],
      },
    },
    {
      name: "All Aesthetic Services",
      imageUrl: "https://picsum.photos/800/600?random=17",
      meta: {
        title: "All Aesthetic Services - Comprehensive Skin Care",
        description: "Browse all aesthetic services for complete skin care and rejuvenation solutions tailored to your needs.",
        keywords: ["aesthetic services", "skin care treatments", "facial rejuvenation", "anti-aging solutions"],
      },
    },
  ],
};

export default aestheticServicesData;