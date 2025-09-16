export interface ServiceMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface ServiceDetails {
  overview?: string; // Detailed description of the service
  treats?: string[]; // Conditions or issues the service addresses
  benefits?: string[]; // Benefits of the service
  candidacy?: string; // Who is a good candidate
  notCandidacy?: string; // Who is not a good candidate
  resultsDuration?: string; // How long results last
  preCare?: string[]; // Pre-treatment care instructions
  postCare?: string[]; // Post-treatment care instructions
  tips?: string[]; // Additional tips for after treatment
  whyChoose?: string; // Why choose this service at MC Aesthetics
  whatToExpect?: string; // What to expect during treatment
  cost?: string; // Cost information if available
}

export interface ServiceItem {
  name: string;
  imageUrl: string; // String paths to public/images/ for static serving
  meta: ServiceMeta;
  details?: ServiceDetails; // Added for expanded content
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
      imageUrl: "/images/wrinklereducer.webp",
      meta: {
        title: "Wrinkle Reducers McMinnville - Smooth Fine Lines Naturally",
        description: "Soften crow’s feet, forehead lines, and frown lines with wrinkle reducers at MC Aesthetics in McMinnville. Non-surgical, natural results in just 15-30 minutes with no downtime.",
        keywords: ["wrinkle reducers McMinnville", "anti-aging treatments Oregon", "fine lines solutions", "botox alternatives", "natural facial treatments", "crow’s feet reduction"],
      },
      nested: [
        {
          name: "Xeomin",
          imageUrl: "/images/xeominOriginal.jpg",
          meta: {
            title: "Xeomin McMinnville - Pure Wrinkle Treatment",
            description: "Xeomin at MC Aesthetics in McMinnville is a purified wrinkle reducer for natural results on frown lines and crow’s feet. See effects in 3-4 days, lasting 3-4 months.",
            keywords: ["Xeomin McMinnville", "wrinkle treatment Oregon", "anti-aging", "natural botox", "frown line reduction", "pure neurotoxin"],
          },
          details: {
            overview: "Xeomin is an FDA-approved injectable treatment that temporarily relaxes the facial muscles responsible for creating expression lines—such as crow’s feet, frown lines, and forehead creases. Similar to other botulinum toxin products, Xeomin targets the nerve signals to reduce muscle activity and allow the skin to smooth over time. What sets Xeomin apart is its purity. Unlike some other neurotoxins, Xeomin is uniquely formulated without added proteins. This 'naked' composition means it’s less likely to cause resistance over time, making it a great long-term option for clients who want consistent results without complications.",
            treats: ["Glabellar lines (frown lines) between the eyebrows", "Forehead creases from raised eyebrows", "Crow’s feet at the corners of the eyes", "Bunny lines along the nose", "Downturned mouth corners and mild chin dimpling"],
            benefits: ["Minimally invasive treatment with no downtime", "Noticeable yet subtle results", "Less likely to cause resistance due to pure formulation"],
            whyChoose: "At MC Aesthetics, our clients value results that enhance—not change—their natural appearance. Xeomin fits perfectly into this philosophy. Nurse Practitioner Melissa Cook brings years of advanced aesthetic experience and an artistic eye to each injection, ensuring that your outcome is both subtle and effective. What truly sets our practice apart is our personalized approach. Every face is different, and so is every treatment plan. When you visit MC Aesthetics for Xeomin, you can expect a thoughtful consultation, precise dosing, and a treatment plan tailored specifically to your facial anatomy, lifestyle, and aesthetic goals.",
            whatToExpect: "Xeomin appointments at MC Aesthetics typically take less than 30 minutes. After a brief consultation and facial assessment, a few tiny injections are administered to the targeted muscles. Discomfort is minimal, and most clients return to their daily activities immediately after. You may start to see changes within 3–4 days, with full results visible around day 7–10. The effects of Xeomin usually last about 3–4 months, depending on your metabolism, muscle strength, and treatment area. Because Xeomin doesn’t contain any unnecessary additives, it’s often a preferred option for people who’ve developed resistance to other botulinum toxins or who are simply looking for a cleaner formulation.",
            resultsDuration: "The effects of Xeomin usually last about 3–4 months, depending on your metabolism, muscle strength, and treatment area."
          },
        },
        {
          name: "Dysport",
          imageUrl: "/images/dysport.webp",
          meta: {
            title: "Dysport McMinnville - Fast-Acting Wrinkle Reduction",
            description: "Dysport at MC Aesthetics in McMinnville offers fast wrinkle reduction for glabellar lines and forehead wrinkles. Results in 2-3 days, lasting 3-4 months with a smooth finish.",
            keywords: ["Dysport McMinnville", "wrinkle injections Oregon", "quick anti-aging", "facial rejuvenation", "forehead line treatment", "fast botox alternative"],
          },
          details: {
            overview: "Dysport is an FDA-approved botulinum toxin that temporarily relaxes the muscles responsible for fine lines and wrinkles. It’s particularly effective for treating moderate to severe glabellar lines—the vertical creases between your eyebrows that deepen with repeated frowning or squinting. Unlike some neurotoxins, Dysport diffuses slightly more, making it an ideal choice for treating broader areas like the forehead. Its fast-acting formulation means you can often see noticeable improvements within just 2–3 days, with results that last 3 to 4 months.",
            treats: ["Glabellar lines (frown lines between the brows)", "Forehead wrinkles caused by raising the brows", "Crow’s feet around the outer eyes", "Neck bands and chin dimpling in select cases"],
            benefits: ["Smooth, natural finish without compromising expression", "Faster results than other wrinkle relaxers", "Ideal for larger or more diffuse areas"],
            whyChoose: "At MC Aesthetics, our approach to aesthetic medicine is grounded in skill, safety, and subtlety. Melissa Cook, a Certified Nurse Practitioner with years of experience in advanced injectables, personally performs all Dysport treatments. Her training and artistic eye ensure that each injection enhances your natural beauty, never masks it. We begin each Dysport appointment with a one-on-one consultation. During this time, we assess your facial muscle movement, skin condition, and aesthetic goals. The result is a custom treatment plan that targets the right areas with the right dose—no overdone results, just refined and refreshed. We’ve built our reputation in McMinnville on honesty, transparency, and consistent outcomes.",
            whatToExpect: "A typical Dysport treatment at our clinic takes about 15 to 30 minutes. Using ultra-fine needles, we administer a series of small injections into the targeted muscle groups. The treatment is generally well tolerated, and most clients describe only minor discomfort. You can expect to see improvement within 2–3 days, with optimal results developing around day 7. There is little to no downtime—most clients return to their daily activities immediately, though we may advise avoiding strenuous activity or lying down for a few hours post-treatment.",
            resultsDuration: "The effects of Dysport usually last around 3 to 4 months. For best results, we recommend a consistent treatment schedule, which we’ll help you plan during your consultation."
          },
        },
        {
          name: "DAXXIFY",
          imageUrl: "/images/DAXXIFY.webp",
          meta: {
            title: "DAXXIFY McMinnville - Long-Lasting Wrinkle Treatment",
            description: "DAXXIFY at MC Aesthetics in McMinnville reduces frown lines for 6-9 months with a unique peptide formula. Enjoy sustained youthful results with minimal downtime.",
            keywords: ["DAXXIFY McMinnville", "long-lasting botox Oregon", "wrinkle treatment", "anti-aging innovation", "frown line solution", "extended wrinkle reduction"],
          },
          details: {
            overview: "DAXXIFY® is an advanced botulinum toxin type A treatment, uniquely formulated with a peptide stabilizer, providing an effective solution for reducing facial wrinkles, particularly frown lines.",
            benefits: ["Prolonged effectiveness, typically lasting 6 to 9 months", "Reduces the need for frequent treatments", "Convenient and sustained solution for wrinkle reduction"],
            candidacy: "Ideal candidates are adults seeking to reduce moderate to severe frown lines, looking for a longer-lasting alternative to traditional neuromodulators.",
            whatToExpect: "The treatment involves a quick, minimally invasive procedure with minimal downtime. Patients can expect to see results within a few days.",
            resultsDuration: "DAXXIFY® results typically last 6 to 9 months, offering a longer-lasting solution compared to other neuromodulators.",
            cost: "Please call for pricing."
          },
        },
        {
          name: "Jeuveau",
          imageUrl: "/images/Jeuveau.webp",
          meta: {
            title: "Jeuveau McMinnville - Modern Wrinkle Reducer",
            description: "Jeuveau at MC Aesthetics in McMinnville smooths glabellar lines with a modern approach. Results last 3-6 months for a refreshed, confident look.",
            keywords: ["Jeuveau McMinnville", "modern botox Oregon", "wrinkle reducer", "facial aesthetics", "glabellar line treatment", "youthful expression"],
          },
          details: {
            overview: "Jeuveau® is a modern botulinum toxin type A formulation, akin to well-known products like Botox. Developed specifically for cosmetic use, Jeuveau® has been meticulously crafted to help smooth out facial wrinkles, particularly targeting glabellar lines – the frown lines between your eyebrows. Its emergence in the aesthetic market marks a significant advancement in anti-aging treatments.",
            benefits: ["Effectively reduces the appearance of glabellar lines", "Results typically last several months", "Can boost self-confidence and satisfaction with one’s appearance"],
            candidacy: "Ideal candidates for Jeuveau® are adults seeking to diminish moderate to severe frown lines. It’s not recommended for individuals with certain medical conditions, neuromuscular disorders, or women who are pregnant or breastfeeding. A consultation with our specialists will determine if Jeuveau® is right for you.",
            whatToExpect: "Your Jeuveau® experience begins with a thorough consultation to assess your suitability and discuss your aesthetic goals. During treatment, the targeted area is cleaned, and Jeuveau® is precisely injected. The procedure is quick, often completed within 10-20 minutes. Post-treatment, we advise avoiding strenuous activities for a short period and provide comprehensive aftercare instructions.",
            resultsDuration: "The effects of Jeuveau® usually last between three to six months.",
            cost: "Please call for pricing."
          },
        },
      ],
    },
    {
      name: "Dermal Fillers",
      imageUrl: "/images/DermalFiller.jpg",
      meta: {
        title: "Dermal Fillers McMinnville - Restore Volume and Youth",
        description: "Enhance facial volume and smooth deep nasolabial folds with dermal fillers at MC Aesthetics in McMinnville. Immediate, non-surgical results lasting 6-18 months.",
        keywords: ["dermal fillers McMinnville", "facial volume Oregon", "anti-aging fillers", "youthful skin", "nasolabial fold treatment", "cheek enhancement"],
      },
      nested: [
        {
          name: "Sculptra",
          imageUrl: "/images/Sculptra.webp",
          meta: {
            title: "Sculptra McMinnville - Gradual Volume Restoration",
            description: "Sculptra at MC Aesthetics in McMinnville stimulates collagen for natural volume in hollow cheeks and smile lines. Long-lasting results up to 2 years.",
            keywords: ["Sculptra McMinnville", "collagen filler Oregon", "volume restoration", "natural anti-aging", "smile line treatment", "long-term filler"],
          },
          details: {
            overview: "Collagen is a protein that makes up much of the skin’s structure and loss of it can lead to sagging, wrinkles, and other signs of aging. Sculptra® is an FDA-approved injectable that helps gradually restore facial volume by stimulating the body’s natural collagen production.",
            treats: ["Fine lines and wrinkles", "Smooth lines around the mouth (smile lines)", "Hollow cheeks", "Hollow temples", "Nasolabial folds (lines around the nostrils)", "Marionette lines", "Wrinkles around the chin"],
            benefits: ["Long-lasting results", "Prompts collagen development", "Natural-looking results"],
            candidacy: "Good candidates for Sculptra treatments are those who want to restore fullness to their face slowly and discreetly to address fine lines and wrinkles that may make them look older than they feel inside.",
            resultsDuration: "The results of Sculptra can last for up to two years after the initial course of injections. It is recommended that you receive repeat injections as you approach the two-year mark to maintain results and avoid returning to your original appearance."
          },
        },
        {
          name: "Restylane",
          imageUrl: "/images/restylane.webp",
          meta: {
            title: "Restylane McMinnville - Smooth Lines and Enhance Lips",
            description: "Restylane at MC Aesthetics in McMinnville plumps lips and smooths marionette lines with hyaluronic acid. Natural results lasting 6-12 months.",
            keywords: ["Restylane McMinnville", "dermal filler Oregon", "lip enhancement", "wrinkle smoothing", "marionette line treatment", "under-eye rejuvenation"],
          },
        },
        {
          name: "RHA",
          imageUrl: "/images/RHA.webp",
          meta: {
            title: "RHA Fillers McMinnville - Dynamic Facial Rejuvenation",
            description: "RHA fillers at MC Aesthetics in McMinnville adapt to facial movements for natural wrinkle correction. Lasts 6-18 months for dynamic folds and lines.",
            keywords: ["RHA filler McMinnville", "dynamic fillers Oregon", "facial rejuvenation", "natural look", "smile line filler", "long-lasting HA filler"],
          },
          details: {
            overview: "Resilient hyaluronic acid (RHA) is a clear gel injectable filler that increases lost volume, softens deep folds in the skin, and reduces wrinkles. RHA® is the first and only FDA-approved dermal filler for the correction of dynamic facial wrinkles and folds, including around the eyes, mouth, and cheeks. RHA® closely resembles the hyaluronic acid that exists naturally in your body, so it looks perfectly natural, takes longer to break down, and lasts longer than many other fillers.",
            treats: ["Dynamic wrinkles", "Dynamic facial folds", "Fine lines", "Lips", "Jaw", "Smile lines", "Cheeks"],
            benefits: ["Immediate results", "FDA-approved", "Long-lasting results (up to 1.5 years)", "No downtime", "Diminishes fine lines", "Natural-looking results", "Quick treatments"],
            candidacy: "RHA is a great non-surgical option for both women and men looking for smoother facial lines, increased volume, and an overall younger, softer appearance. To learn more about RHA® and determine if it is right for you, book a complimentary consultation.",
            resultsDuration: "RHA® products move with your face and more closely resemble the hyaluronic acid that naturally exists in your body. This means that it takes longer for this filler to break down than other HA products, with results lasting from 6 months to 1.5 years."
          },
        },
        {
          name: "Revanesse",
          imageUrl: "/images/Revanesse.webp",
          meta: {
            title: "Revanesse McMinnville - Natural Volume and Lip Augmentation",
            description: "Revanesse at MC Aesthetics in McMinnville offers Versa™ for wrinkles and Lips™ for augmentation with minimal swelling. Results last up to 12 months.",
            keywords: ["Revanesse McMinnville", "natural filler Oregon", "lip augmentation", "facial volume", "minimal swelling filler", "Versa wrinkle treatment"],
          },
          details: {
            overview: "Revanesse® is a line of revolutionary Hyaluronic Acid (HA) dermal fillers that provide natural, long-lasting results. Revanesse® uses cross-linking technology to create a cosmetic filler, which can be injected easier, feels more natural, is easier to shape, and won’t break down as quickly or dramatically as other cosmetic fillers. If you’re considering dermal fillers in McMinnville, Revanesse® is a trusted option that delivers noticeable yet natural enhancements. With its unique formulation and smoother consistency, this line of fillers is designed to refresh your appearance without sacrificing facial movement or expression.",
            benefits: [
              "Revanesse® Versa™: Immediate results, long-lasting results (up to 12 months with optimal correction), safe and well-studied, minimally invasive, less swelling than similar products",
              "Revanesse® Lips™: Less pain than other treatments, less product required to achieve optimal outcomes, minimal swelling, minimal downtime",
              "General: Consistent results, patient comfort, smooth texture, advanced formulation, reduced swelling"
            ],
            candidacy: "If you’re interested in dermal fillers in McMinnville but want a natural look and a gentle treatment experience, Revanesse® is an excellent option. Its minimal swelling and long-lasting results make it ideal for first-time clients and those familiar with cosmetic injectables.",
            whatToExpect: "Your appointment will begin with a consultation to discuss your goals and determine the right filler type. The procedure is quick—usually 30 minutes or less—and minimally uncomfortable. Most clients resume normal activities the same day. You may experience mild swelling or redness at the injection site, but this typically subsides within 24–48 hours. Full results are often visible immediately and improve over the first few days.",
            resultsDuration: "With optimal correction, Revanesse® Versa™ results may be seen for up to 12 months. Revanesse® Lips™ also provides long-lasting enhancement with minimal downtime."
          },
        },
        {
          name: "Belotero",
          imageUrl: "/images/Belotero.webp",
          meta: {
            title: "Belotero McMinnville - Precision Fine Line Treatment",
            description: "Belotero at MC Aesthetics in McMinnville targets superficial lines like smoker’s lines with seamless integration. Results last 6-18 months for subtle enhancement.",
            keywords: ["Belotero McMinnville", "precision filler Oregon", "wrinkle treatment", "subtle volume", "smoker’s lines solution", "fine line reduction"],
          },
          details: {
            overview: "Belotero is an injectable dermal filler made of hyaluronic acid, a naturally occurring substance found in our skin. Belotero is FDA-approved to smooth moderate to severe facial wrinkles and folds. Belotero quickly integrates into the skin without disrupting natural contours or expressions. It is lightweight and easy to layer, so it can be injected into very fine lines without creating bumps or lumps. HA (hyaluronic acid)/Belotero helps hydrate the skin as well, as it binds with the skin’s own water.",
            treats: ["Superficial lines", "Smoker’s lines around the lips", "Chin wrinkles", "Subtle volume to lips"],
            benefits: ["Instant results", "FDA-approved", "Long-lasting results (up to 18 months)", "No downtime", "Diminishes fine lines", "Natural-looking results (optimal skin integration)", "Quick treatments (typically 30 minutes)"],
            candidacy: "Most all adults are good candidates for Belotero, as it is safe and effective. It is most effective for people with the following skin aging concerns: laugh lines, nasolabial folds (smile lines), smoker’s lines (vertical lines around the upper/lower lips), lines around the eyes, wrinkles on the chin, other fine lines or superficial lines.",
            resultsDuration: "BELOTERO® treatments vary from person to person and also depend on the site of injection. Typically, the effect of a Belotero injection can last from 6 to 18 months."
          },
        },
        {
  name: "Radiesse",
  imageUrl: "/images/radiesse.webp",
  meta: {
    title: "Radiesse McMinnville - Instant Volume and Collagen Boost",
    description: "Radiesse at MC Aesthetics in McMinnville restores volume and stimulates collagen for cheeks and jawline. Results last 12-18 months, also ideal for hands.",
    keywords: ["Radiesse McMinnville", "collagen booster Oregon", "instant volume", "dermal filler", "jawline contouring", "hand rejuvenation"],
  },
  details: {
    overview: "Radiesse is a unique dermal filler that provides immediate volume restoration while also stimulating your body’s natural collagen production for long-lasting results. Composed of calcium hydroxylapatite (CaHA) microspheres suspended in a gel carrier, Radiesse works twofold: it fills in wrinkles and folds instantly upon injection, and over time, the CaHA microspheres encourage collagen growth to maintain a youthful structure. At MC Aesthetics in McMinnville, Radiesse is a go-to for clients seeking to enhance facial contours like cheeks and jawlines or even rejuvenate aging hands. It’s a versatile, FDA-approved option for those wanting both instant gratification and sustained improvement.",
    treats: ["Nasolabial folds (smile lines)", "Marionette lines (lines from mouth to chin)", "Cheek volume loss", "Jawline contouring", "Chin wrinkles", "Aging hands with volume loss"],
    benefits: ["Immediate volume correction upon injection", "Stimulates natural collagen production for extended results", "Longer-lasting compared to many HA fillers", "Versatile for both facial and hand rejuvenation", "Minimal downtime with quick treatment sessions"],
    candidacy: "Radiesse is ideal for adults looking to address moderate to severe facial wrinkles, folds, or volume loss, as well as those interested in hand rejuvenation. It’s suitable for most healthy individuals who are not allergic to any components of the filler. A consultation at MC Aesthetics will help determine if Radiesse is the right fit for your aesthetic goals.",
    notCandidacy: "Radiesse may not be suitable for those with severe allergies, bleeding disorders, or active skin infections near the treatment area. It’s also not recommended for pregnant or breastfeeding individuals. We’ll assess your medical history during your consultation to ensure safety.",
    resultsDuration: "Results from Radiesse typically last 12 to 18 months, depending on the treatment area, your metabolism, and lifestyle factors. The collagen stimulation effect can even extend the youthful appearance beyond the filler’s duration in some cases.",
    whatToExpect: "Your Radiesse treatment at MC Aesthetics will start with a personalized consultation to map out the areas needing volume or contouring. The procedure itself takes about 30 minutes, using a fine needle or cannula for injection. Most clients feel minimal discomfort, often mitigated by a numbing agent. You’ll see immediate volume enhancement, though optimal results develop over a few weeks as collagen production ramps up. Mild swelling or bruising may occur but usually resolves within a few days. You can return to most daily activities right after, with some post-care guidance from our team.",
    preCare: ["Avoid blood-thinning medications like aspirin or ibuprofen for a week prior to reduce bruising risk.", "Inform us of any allergies or medical conditions during your consultation.", "Stay hydrated and avoid alcohol 24 hours before treatment."],
    postCare: ["Avoid strenuous exercise or excessive heat for 24-48 hours post-treatment.", "Don’t massage or apply pressure to treated areas to prevent filler displacement.", "Use ice packs if swelling occurs, and contact us with any concerns."],
    whyChoose: "At MC Aesthetics, we pride ourselves on delivering results that look natural and feel authentic. Nurse Practitioner Melissa Cook’s expertise in facial anatomy ensures that Radiesse is placed precisely for balanced, harmonious enhancement—never overdone. We take the time to understand your vision, whether it’s a sharper jawline or fuller cheeks, and tailor the treatment accordingly. Our McMinnville clients appreciate our commitment to safety, comfort, and long-term skin health, making us a trusted choice for dermal fillers like Radiesse."
  },
},
      ],
    },
//     {
//   name: "CoolPeel CO2 Laser",
//   imageUrl: "/images/CO2Coolpeel.jpg",
//   meta: {
//     title: "CoolPeel CO2 Laser McMinnville - Skin Resurfacing Innovation",
//     description: "CoolPeel CO2 Laser at MC Aesthetics in McMinnville offers powerful resurfacing with minimal downtime. Smooth skin, reduce pores, and erase fine lines now.",
//     keywords: ["CoolPeel CO2 Laser McMinnville", "skin resurfacing Oregon", "anti-aging laser", "minimal downtime treatment", "glowing skin solution", "fine line reduction"],
//   },
//   details: {
//     overview: "CoolPeel CO2 Laser is a revolutionary skin resurfacing treatment that delivers the powerful benefits of traditional CO2 laser technology with significantly less downtime. Unlike older CO2 lasers that required weeks of recovery due to intense heat damage, CoolPeel uses short, controlled bursts of energy to target the superficial layers of skin, removing damaged tissue while stimulating collagen production. At MC Aesthetics in McMinnville, we use CoolPeel to address a variety of skin concerns, from fine lines to sun damage, giving you a refreshed, youthful glow with results that keep improving over time. It’s the perfect balance of efficacy and convenience for busy individuals.",
//     treats: ["Fine lines and wrinkles", "Sun damage and age spots", "Uneven skin texture", "Enlarged pores", "Acne scars", "Dull or tired-looking skin"],
//     benefits: ["Powerful skin resurfacing with minimal downtime (often just 1-3 days)", "Stimulates collagen for long-term skin firmness", "Improves skin tone and texture in just one session", "Customizable to your specific skin needs", "Safe for most skin types with proper consultation"],
//     candidacy: "CoolPeel is ideal for adults seeking to improve skin texture, tone, and signs of aging without the lengthy recovery of traditional lasers. It’s best for those with mild to moderate skin concerns like fine lines, sun damage, or acne scarring. A consultation at MC Aesthetics will confirm if CoolPeel matches your skin type and goals.",
//     notCandidacy: "This treatment may not be suitable for individuals with active skin infections, certain autoimmune conditions, or very dark skin tones due to pigmentation risks. Pregnant or breastfeeding individuals should postpone treatment. We’ll evaluate your skin and medical history to ensure safety.",
//     resultsDuration: "You’ll notice smoother, brighter skin within a week after treatment as the superficial layer peels away. Collagen production continues for months, enhancing firmness and texture over time. For optimal results, a series of 2-3 sessions spaced 4-6 weeks apart is often recommended, with maintenance treatments every 6-12 months.",
//     whatToExpect: "Your CoolPeel session at MC Aesthetics begins with a thorough skin assessment and discussion of your goals. The treatment itself takes about 15-30 minutes, depending on the area. You might feel a mild stinging sensation, but we ensure comfort with cooling techniques or numbing cream if needed. Post-treatment, your skin may feel like a mild sunburn with slight redness or flaking for 1-3 days. Most clients resume normal activities quickly, following our tailored aftercare plan. Full results develop over weeks as new, healthy skin emerges.",
//     preCare: ["Avoid sun exposure and tanning for at least 2 weeks before treatment.", "Discontinue retinoids or exfoliating products 5-7 days prior.", "Inform us of any skin conditions or medications during consultation."],
//     postCare: ["Keep skin hydrated with recommended moisturizers.", "Avoid direct sun exposure and use SPF 30+ religiously for at least 4 weeks.", "Don’t pick at flaking skin—let it shed naturally.", "Skip harsh skincare products for a few days post-treatment."],
//     tips: ["Pair CoolPeel with a medical-grade skincare routine for enhanced results—ask us for recommendations!", "Schedule treatments during cooler months if possible to minimize sun exposure risks.", "Stay consistent with follow-up sessions for cumulative benefits."],
//     whyChoose: "At MC Aesthetics, we’re committed to cutting-edge treatments that fit into your life. CoolPeel CO2 Laser is a game-changer, and our team, led by Nurse Practitioner Melissa Cook, is trained to customize each session to your unique skin profile. We prioritize your comfort and safety, offering detailed guidance before and after treatment. Our McMinnville clients love how CoolPeel delivers dramatic improvements without sidelining their schedules—because we believe glowing skin shouldn’t come at the cost of downtime."
//   },
// },
    {
      name: "Kybella",
      imageUrl: "/images/Kybella.webp",
      meta: {
        title: "Kybella McMinnville - Double Chin Reduction Treatment",
        description: "Kybella at MC Aesthetics in McMinnville permanently reduces double chin fat for a sculpted jawline. Non-surgical treatment with lasting results.",
        keywords: ["Kybella McMinnville", "double chin treatment Oregon", "fat reduction", "jawline contouring", "permanent chin fat removal", "submental fullness solution"],
      },
      details: {
        overview: "KYBELLA® (deoxycholic acid) is an FDA-approved injectable drug for contouring moderate to severe submental fullness, a condition that is commonly referred to as a double chin. The active ingredient in KYBELLA® is a synthetic form of deoxycholic acid, and in aesthetic medicine, it is used to metabolize unwanted subcutaneous fat. When your KYBELLA®-trained injector injects into the fat beneath the trouble area, KYBELLA® destroys fat cells, resulting in a noticeable reduction in fullness. Because we are born with a fixed number of fat cells and do not make or destroy them naturally, the cells do not regenerate in the area that was injected.",
        candidacy: "Adults over the age of 21 who are medically healthy and are not allergic to the active ingredients in the formula of this treatment are generally ideal candidates. This treatment is ideal for those who have a moderate amount of unwanted fat beneath the chin, particularly those who have not had success getting rid of this fat with traditional means. Additionally, candidates for this treatment should not currently be pregnant or breastfeeding.",
        notCandidacy: "KYBELLA® is not for everyone. If you have the appearance of submental fullness due to conditions like microgenia, neck muscle conditions, or low skin elasticity, you probably aren’t a good candidate. Give us a call for more information, or schedule a complimentary consultation and we’ll evaluate your eligibility for KYBELLA®.",
        resultsDuration: "The results of KYBELLA® are long-lasting, as treated fat cells cannot regenerate. However, all of the fat cells aren’t destroyed in any given area of treatment, only most of them. Where there are existing fat cells, there is the possibility of developing another double chin. To reduce the chance of having your double chin come back, you should manage your weight and make good lifestyle choices that limit the possibility of excess dietary fat being stored in the remaining fat cells.",
        preCare: [
          "Before receiving KYBELLA®, you should talk to your aesthetician/healthcare provider about any of the following conditions you may have:",
          "Previous surgery on your face, neck, or chin",
          "Previous cosmetic treatments on your face, neck, or chin",
          "Medical conditions in or near the neck area",
          "Trouble swallowing",
          "Bleeding problems",
          "Pregnancy or currently breastfeeding"
        ],
        postCare: [
          "Do not touch, rub, massage or manipulate the area of treatment",
          "Apply ice to the treated area over the next 24 hours. Apply an icepack to the treated area for 20 minutes, then remove for 20 minutes.",
          "If needed, take acetaminophen and/or a pain reliever to decrease discomfort",
          "Sleep on your back with your head slightly elevated for the next 3-5 days",
          "Stay hydrated by drinking plenty of water",
          "Avoid vigorous exercise, sun and heat exposure for at least 3-5 days after treatment",
          "Avoid Aspirin, Motrin, Garlic, Flax Oil, Cod Liver Oil, Vitamins A and E, or any essential fatty acids for up to a week post-treatment",
          "Avoid cosmetic treatments to the Kybella treated area, such as injectables, laser, peels, facials and micro-dermabrasion"
        ]
      },
    },
    {
      name: "Sclerotherapy",
      imageUrl: "/images/Asclera.webp",
      meta: {
        title: "Sclerotherapy McMinnville - Spider Vein Treatment",
        description: "Sclerotherapy with Asclera® at MC Aesthetics in McMinnville clears spider veins and small varicose veins. Quick 15-45 minute sessions, FDA-approved since 2010.",
        keywords: ["Sclerotherapy McMinnville", "spider vein removal Oregon", "vein treatment", "clear skin", "Asclera therapy", "reticular vein solution"],
      },
      details: {
        overview: "Sclerotherapy is a medical procedure used to eliminate varicose veins and spider veins. Sclerotherapy treatment involves injecting a solution directly into the vein. The sclerotherapy solution causes the vein to scar, forcing blood to reroute through healthier veins. The collapsed vein is reabsorbed into local tissue and eventually fades away from view. At MC Aesthetics, we use a prescription medicine called Asclera® (polidocanol) to treat sclerotherapy. Asclera® treats two types of veins: uncomplicated spider veins (very small varicose veins ≤ 1 mm in diameter) and uncomplicated small varicose veins (1 to 3 mm in diameter) known as reticular veins. Asclera® has not been studied in varicose veins more than 3 mm in diameter. Asclera® has been an FDA-approved treatment since 2010.",
        benefits: ["Non-surgical", "FDA-approved in the U.S. since 2010", "Quick treatments – each session typically lasts 15 to 45 minutes", "Minimal side effects"],
        notCandidacy: "You shouldn’t receive Asclera if you have a known allergy to polidocanol, have an acute vein or blood clotting (thromboembolic) disease, or are pregnant or nursing. Be sure to tell your healthcare provider about all the medicines you are taking, including prescription and nonprescription medicines, vitamins, and herbal products. Together, you can ensure that Asclera® is right for you.",
        tips: [
          "Walk 15 to 20 minutes after the treatment and continue this every day for the next few days",
          "Avoid heavy exercise",
          "Avoid sunbathing",
          "Avoid hot baths or saunas for at least 2 or 3 days",
          "Avoid long plane flights",
          "Wear compression stockings or support hose continuously for up to 3 days and 2 to 3 weeks after treatment during the daytime"
        ]
      },
    },
    
     {
  name: "Chemical Peels Perfect Derma",
  imageUrl: "/images/ChemicalPeel.webp",
  meta: {
    title: "Perfect Derma Peel McMinnville - Radiant Skin Rejuvenation",
    description: "Perfect Derma Peel at MC Aesthetics in McMinnville brightens skin and treats acne scars, melasma, and wrinkles. Safe for all skin types with no downtime.",
    keywords: ["chemical peels McMinnville", "Perfect Derma Oregon", "skin rejuvenation", "acne scar treatment", "hyperpigmentation solution", "anti-aging peel"]
  },
  details: {
    overview: "If you’re looking for chemical peels in McMinnville, the Perfect Derma Peel is a safe, effective, medical-grade, medium-depth peel for all skin types and ethnicities. This product is virtually painless, with no pre-peel skin preparation and little downtime. The Perfect Derma Peel is the only peel that includes the powerful antioxidant Glutathione, which lightens and brightens the skin, slows down the aging process, and helps prevent wrinkles. After one treatment, overall skin tone and complexion will appear smooth, glowing, and fresh. Depending on skin conditions, multiple skin peel treatments at our McMinnville med spa may be necessary for desired results. A series of 2–3 treatments applied once every 4 weeks will allow for optimal results for more severe skin conditions such as melasma and active acne.",
    treats: ["Hyper pigmentation", "Sun damage", "Melasma", "Acne scars", "Fine lines and wrinkles", "Enlarged pores"],
    benefits: [
      "Builds collagen and elastin for a healthier, firmer complexion",
      "Refines pores and overall skin texture",
      "Controls acne and prevents acne scarring",
      "Normal daily activities can be resumed immediately post-peel",
      "No preconditioning of the skin prior to treatment",
      "All skin types are safe to treat",
      "Virtually painless"
    ],
    candidacy: "The Perfect Derma Peel is suitable for all skin types and ethnicities. Schedule a consultation with us in McMinnville to determine if this chemical peel treatment is right for you.",
    resultsDuration: "After just one treatment of The Perfect Derma Peel, your overall skin tone and complexion will appear smoother, glowing, and fresh. It all depends on your skin conditions, but multiple treatments may be necessary for desired results. Proper skin care will extend the results. It is recommended that 2 to 4 treatments of The Perfect Derma Peel per year are done to sustain desired results for regular maintenance and skin rejuvenation."
  }
},
// Update for Scarlet RF Microneedling under Aesthetic Services
{
  name: "Scarlet RF Microneedling",
  imageUrl: "/images/SCARLET.webp",
  meta: {
    title: "Scarlet RF Microneedling McMinnville - Advanced Skin Tightening",
    description: "Scarlet RF Microneedling at MC Aesthetics in McMinnville tightens skin and improves acne scars with no downtime. Optimal results in 3 sessions over 2-3 months.",
    keywords: ["Scarlet RF McMinnville", "microneedling Oregon", "skin tightening", "texture improvement", "acne scar removal", "radiofrequency rejuvenation"],
  },
  details: {
    overview: "Scarlet RF Microneedling combines the proven benefits of traditional microneedling with radiofrequency (RF) energy to deliver unparalleled skin rejuvenation. This advanced treatment uses tiny needles to create controlled micro-injuries in the skin, stimulating collagen and elastin production, while RF energy heats deeper layers to tighten and firm. At MC Aesthetics in McMinnville, Scarlet RF is our go-to for clients wanting to address sagging skin, acne scars, or uneven texture without surgery or significant downtime. It’s a powerful, FDA-cleared solution that transforms skin from the inside out, revealing a smoother, more youthful complexion.",
    treats: ["Loose or sagging skin on face and neck", "Acne scars and other textural irregularities", "Fine lines and wrinkles", "Enlarged pores", "Stretch marks", "Uneven skin tone"],
    benefits: ["Dual-action technology for tightening and texture improvement", "Minimal to no downtime—resume daily activities quickly", "Safe for all skin types with customizable settings", "Long-lasting results with collagen remodeling", "Non-surgical alternative to more invasive procedures"],
    candidacy: "Scarlet RF Microneedling is suitable for most adults looking to improve skin firmness, texture, or scarring. It’s ideal for those with mild to moderate skin laxity or acne scars who prefer non-invasive options. We’ll assess your skin during a consultation at MC Aesthetics to ensure this treatment aligns with your needs.",
    notCandidacy: "This treatment isn’t recommended for individuals with active skin infections, pacemakers, or certain medical conditions like uncontrolled diabetes. Pregnant or breastfeeding clients should wait. We’ll review your health history to confirm eligibility.",
    resultsDuration: "Initial improvements in skin texture and glow are visible within a week, with optimal tightening and collagen benefits appearing over 2-3 months as your skin rebuilds. A series of 3 sessions, spaced 4-6 weeks apart, is typically recommended for best results. Maintenance treatments every 6-12 months can prolong the effects.",
    whatToExpect: "Your Scarlet RF session at MC Aesthetics starts with a personalized consultation to target your specific concerns. The treatment, lasting 30-60 minutes, involves applying a numbing cream for comfort, followed by the handheld device delivering microneedles and RF energy. You might feel mild warmth or prickling, but it’s generally well-tolerated. Post-treatment, expect slight redness or sensitivity for 1-2 days, similar to a mild sunburn. Most clients return to normal routines immediately, following our aftercare tips for optimal healing and results.",
    preCare: ["Avoid sun exposure and tanning for 1-2 weeks before your session.", "Stop using retinoids or harsh exfoliants 3-5 days prior.", "Arrive with clean skin, free of makeup or lotions."],
    postCare: ["Keep the treated area clean and moisturized as advised.", "Avoid direct sun and use SPF 30+ for at least 2 weeks.", "Refrain from hot showers, saunas, or intense workouts for 24-48 hours.", "Don’t apply heavy makeup until redness subsides, usually 1-2 days."],
    tips: ["Hydration is key—drink plenty of water before and after to support skin recovery.", "Consider combining Scarlet RF with complementary treatments like chemical peels for enhanced results—ask us how!", "Be patient; the best outcomes unfold over weeks as collagen builds."],
    whyChoose: "MC Aesthetics stands out in McMinnville for our dedication to transformative, non-invasive treatments like Scarlet RF Microneedling. Under the expert care of Nurse Practitioner Melissa Cook, each session is tailored to your skin’s unique needs, ensuring natural-looking tightening and rejuvenation. We know life doesn’t pause for beauty, so we focus on treatments with minimal disruption and maximum impact. Our clients rave about the confidence boost from smoother, firmer skin—and we’re here to guide you every step of the way with personalized support."
  },
},
    // Update for CoolPeel CO2 Laser under Aesthetic Services


    {
      name: "All Aesthetic Services",
      imageUrl: "/images/aestheticOfficeSpace.jpg",
      meta: {
        title: "All Aesthetic Services McMinnville - Comprehensive Skin Care",
        description: "Explore all aesthetic services at MC Aesthetics in McMinnville for tailored skin care solutions. From fillers to lasers, achieve your best look with expert care.",
        keywords: ["aesthetic services McMinnville", "skin care treatments Oregon", "facial rejuvenation", "anti-aging solutions", "cosmetic injections", "skin tightening"],
      },
    },
  ],
};

export default aestheticServicesData;