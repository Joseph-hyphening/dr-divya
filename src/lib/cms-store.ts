/**
 * Unified CMS Data Store for Dr. Divya Sharma Skin & Hair Solutions
 * Manages dynamic blogs, condition text & media, and internal link routing
 */

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  imageMode: 'single' | 'before_after';
  singleImage?: string; // WebP format
  beforeAfter?: {
    beforeImage: string; // WebP format
    afterImage: string;  // WebP format
    label?: string;      // e.g. "8 Weeks Post CO2 Laser"
  };
  internalLinks: { title: string; href: string }[];
  content: string;
  tags: string[];
  published: boolean;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  beforeImage: string; // WebP format
  afterImage: string;  // WebP format
  patientAge?: string;
  treatmentDuration?: string;
}

export interface PatientLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  treatmentName: string;
  notes?: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  source?: string;
}

export interface ConditionMediaItem {
  id: string;
  url: string; // WebP format
  caption: string;
  type: 'gallery' | 'before_after' | 'clinical';
}

export interface ConditionData {
  id: string;
  slug: string;
  category: 'skin' | 'hair' | 'pediatrics';
  title: string;
  subtitle: string;
  hookSubtitle: string;
  description: string;
  keyBenefits: string[];
  heroImage: string; // Primary WebP image used on landing page & hero
  galleryImages: ConditionMediaItem[]; // Multiple images supported
  beforeAfterPair?: {
    beforeImage: string; // WebP
    afterImage: string;  // WebP
    title: string;
  };
  beforeAfterPairs?: BeforeAfterPair[]; // Multiple before/after cases supported
  lastUpdated: string;
}

// Initial Seed Blogs
export const initialBlogs: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'Fractional CO2 Laser for Deep Acne Scars: Real Clinical Outcomes & Recovery',
    slug: 'fractional-co2-laser-for-deep-acne-scars',
    excerpt: 'A comprehensive medical breakdown of ablative fractional photothermolysis, epidermal remodeling times, and Indian skin safety protocols.',
    category: 'Acne & Laser Science',
    readTime: '6 min read',
    author: 'Dr. Divya Sharma, MBBS (Gold Medalist), MD',
    date: 'August 28, 2026',
    imageMode: 'before_after',
    beforeAfter: {
      beforeImage: '/process/step-01-dermoscopy.jpg',
      afterImage: '/process/step-03-laser-suite.jpg',
      label: '4 Sessions Fractional CO2 • 12 Weeks Follow-up'
    },
    internalLinks: [
      { title: 'Acne & Scar Revision Suite', href: '/acne-pimples' },
      { title: 'Laser Skin Resurfacing', href: '/skin-resurfacing-and-rejuvenation' },
      { title: 'Chemical Peels Protocol', href: '/chemical-peels' }
    ],
    content: `Acne scars are permanent texture indentations resulting from dermal collagen matrix destruction during severe inflammatory acne flares.
    
### Why Over-the-Counter Creams Fail on True Scars
Topical retinoids and vitamin C serums can improve superficial post-inflammatory erythema (red spots) and hyperpigmentation (brown spots). However, they cannot penetrate into the reticular dermis with sufficient energy to stimulate architectural collagen matrix remodeling.

### The Fractional Photothermolysis Principle
US-FDA approved fractional CO2 lasers emit micro-thermal zones (MTZs) at a 10,600nm wavelength. By vaporizing microscopic columns of scarred tissue while leaving surrounding healthy islands untouched, the skin rapidly epithelializes from the inside out.

### Indian Skin Protocol & Zero Pigmentation Risk
Treating Fitzpatrick skin types III through V requires meticulous parameter calibration: conservative pulse energy, fractionated density, and aggressive pre-procedure epidermal barrier priming with targeted ceramides to eliminate post-inflammatory hyperpigmentation (PIH).`,
    tags: ['Acne Scars', 'CO2 Laser', 'Indian Skin Safety', 'Clinical Dermatology'],
    published: true,
  },
  {
    id: 'blog-2',
    title: 'Zero-Steroid Protocols for Eczema & Atopic Dermatitis: Ending the Rebound Cycle',
    slug: 'zero-steroid-protocols-for-eczema-rebound',
    excerpt: 'How chronic topical corticosteroid dependence thins the stratum corneum, and how physiological lipid replacement therapy restores skin barrier integrity.',
    category: 'Medical Dermatology',
    readTime: '5 min read',
    author: 'Dr. Divya Sharma, MBBS (Gold Medalist), MD',
    date: 'August 14, 2026',
    imageMode: 'single',
    singleImage: '/process/step-02-zero-steroid.jpg',
    internalLinks: [
      { title: 'Eczema & Dermatitis Care', href: '/eczema' },
      { title: 'Steroid Abuse & TSW Recovery', href: '/topical-steroids' },
      { title: 'Skin Allergies & Urticaria', href: '/skin-allergies' }
    ],
    content: `Topical steroid addiction and withdrawal (TSW) is an increasingly common dermatological presentation across urban clinics. Patients caught in the cycle of recurrent itching and flare-ups mistakenly increase steroid potency, creating fragile, compromised epidermal barriers.

### Understanding the Physiological Lipid Ratio
A healthy skin barrier relies on a strict equimolar ratio of Ceramides, Cholesterol, and Free Fatty Acids (3:1:1). At Dr. Divya Skin & Hair Solutions, our non-steroid protocols replace missing intracellular lipids and regulate epidermal pH without immunosuppressive atrophy.`,
    tags: ['Eczema', 'Zero-Steroid', 'Barrier Repair', 'TSW'],
    published: true,
  }
];

// Initial Seed Conditions covering the landing page hero and core clinical clusters
export const initialConditions: ConditionData[] = [
  {
    id: 'cond-acne',
    slug: 'acne-pimples',
    category: 'skin',
    title: 'Acne & Pimples',
    subtitle: 'Hormonal & Cystic Acne',
    hookSubtitle: 'Evidence-Based Clear Skin Protocols with Zero Steroid Rebound',
    description: 'Targeted medical therapies addressing hyperkeratinization, excess sebum, and Cutibacterium acnes colonization with personalized barrier repair.',
    keyBenefits: ['Polarized Dermoscopy Diagnosis', 'Zero Steroid Dependency', 'Custom Chemical Exfoliation', 'Active Breakout Remission'],
    heroImage: '/service-clinical-derm.png',
    galleryImages: [
      { id: 'm1', url: '/service-clinical-derm.png', caption: 'Clinical Acne Assessment', type: 'clinical' },
      { id: 'm2', url: '/process/step-01-dermoscopy.jpg', caption: 'Follicular Sebum Mapping', type: 'clinical' },
      { id: 'm3', url: '/process/step-02-zero-steroid.jpg', caption: 'Barrier First Treatment', type: 'clinical' }
    ],
    beforeAfterPair: {
      beforeImage: '/process/step-01-dermoscopy.jpg',
      afterImage: '/process/step-02-zero-steroid.jpg',
      title: 'Active Cystic Acne Resolution in 8 Weeks'
    },
    beforeAfterPairs: [
      {
        id: 'ba-acne-1',
        title: 'Active Cystic Acne Resolution • 8 Weeks',
        beforeImage: '/process/step-01-dermoscopy.jpg',
        afterImage: '/process/step-02-zero-steroid.jpg',
        patientAge: '24 Years Old',
        treatmentDuration: '8 Weeks Protocol'
      },
      {
        id: 'ba-acne-2',
        title: 'Fractional CO2 Deep Scar Remodeling • 4 Sessions',
        beforeImage: '/process/step-01-dermoscopy.jpg',
        afterImage: '/process/step-03-laser-suite.jpg',
        patientAge: '28 Years Old',
        treatmentDuration: '12 Weeks Protocol'
      },
      {
        id: 'ba-acne-3',
        title: 'Chemical Exfoliation & Erythema (PIE) Clearing',
        beforeImage: '/service-clinical-derm.png',
        afterImage: '/service-aesthetic-med.png',
        patientAge: '21 Years Old',
        treatmentDuration: '6 Weeks Protocol'
      }
    ],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-melasma',
    slug: 'melasma',
    category: 'skin',
    title: 'Melasma & Pigment',
    subtitle: 'Targeted Melanin Control',
    hookSubtitle: 'Triple-Action Hormonal & Solar Pigmentation Clearance',
    description: 'Specialized low-fluence Q-switched laser toning combined with medical tyrosinase inhibitors and oral antioxidants for resistant facial melasma.',
    keyBenefits: ['No Thermal Rebound Pigmentation', 'Calibrated for Indian Skin', 'Dermal & Epidermal Targeting', 'Long-Term Maintenance'],
    heroImage: '/service-aesthetic-med.png',
    galleryImages: [
      { id: 'm4', url: '/service-aesthetic-med.png', caption: 'Melasma Depth Assessment', type: 'clinical' },
      { id: 'm5', url: '/process/step-03-laser-suite.jpg', caption: 'Low-Fluence Q-Switching', type: 'clinical' }
    ],
    beforeAfterPair: {
      beforeImage: '/service-aesthetic-med.png',
      afterImage: '/process/step-03-laser-suite.jpg',
      title: 'Dermal Melasma Clearance'
    },
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-keloids',
    slug: 'keloids',
    category: 'skin',
    title: 'Keloids & Scars',
    subtitle: 'Steroid-Free Scar Repair',
    hookSubtitle: 'Dual Anti-Fibrotic Injections and Vascular Laser Remodeling',
    description: 'Safe flattening of hypertrophic scars and earlobe keloids with minimal recurrence rates.',
    keyBenefits: ['Non-Steroidal Anti-Proliferative Options', 'Pain-Free Cryotherapy Additions', 'Vascular Starvation of Fibrosis', 'Post-Op Compression Protocols'],
    heroImage: '/laser-treatment.png',
    galleryImages: [
      { id: 'm6', url: '/laser-treatment.png', caption: 'Vascular Laser for Scar Tissue', type: 'clinical' }
    ],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-psoriasis',
    slug: 'psoriasis',
    category: 'skin',
    title: 'Psoriasis & Plaques',
    subtitle: 'Systemic Remission Protocols',
    hookSubtitle: 'Compassionate Long-Term Autoimmune Management',
    description: 'Targeted biologics, non-steroidal immunomodulators, and therapeutic UV-protective plans for stubborn plaque psoriasis.',
    keyBenefits: ['Whole-Body Skin Clearance', 'Joint Health Coordination', 'Steroid Sparing Strategies', 'Holistic Stress Modulation'],
    heroImage: '/service-clinical-derm.png',
    galleryImages: [
      { id: 'm7', url: '/service-clinical-derm.png', caption: 'Plaque Thickness Mapping', type: 'clinical' }
    ],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-eczema',
    slug: 'eczema',
    category: 'skin',
    title: 'Eczema & Barrier',
    subtitle: 'Ceramide Lipid Repair',
    hookSubtitle: 'Restoring Stratum Corneum Resilience Without Steroid Abuse',
    description: 'Physiological barrier lipid reconstitution and allergen patch identification for atopic, contact, and nummular eczema.',
    keyBenefits: ['Rapid Itch Relief', 'Skin Microbiome Balancing', 'Elimination Diet Guidance', 'Zero-Steroid Maintenance'],
    heroImage: '/service-clinical-derm.png',
    galleryImages: [
      { id: 'm8', url: '/service-clinical-derm.png', caption: 'Barrier Hydration Analysis', type: 'clinical' }
    ],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-hollywood-peel',
    slug: 'hollywood-peel',
    category: 'skin',
    title: 'Hollywood Laser Peel',
    subtitle: 'Carbon Q-Switch Glow',
    hookSubtitle: 'Red Carpet Radiance with Zero Downtime',
    description: 'Liquid carbon application followed by photo-acoustic Nd:YAG vaporization to unclog pores and stimulate instant dermal collagen tightening.',
    keyBenefits: ['Instant Radiance', 'Pore Tightening', 'Sebum Regulation', 'Zero Downtime'],
    heroImage: '/service-aesthetic-med.png',
    galleryImages: [
      { id: 'm9-1', url: '/service-aesthetic-med.png', caption: 'Liquid Carbon Dermal Layering', type: 'clinical' },
      { id: 'm9-2', url: '/process/step-03-laser-suite.jpg', caption: 'Q-Switched Photoacoustic Laser Suite', type: 'clinical' },
      { id: 'm9-3', url: '/clinic-lounge.png', caption: 'Post-Laser Soothing & Barrier Suite', type: 'clinical' }
    ],
    beforeAfterPair: {
      beforeImage: '/process/step-01-dermoscopy.jpg',
      afterImage: '/process/step-03-laser-suite.jpg',
      title: 'Hollywood Carbon Peel Pore Refinement & Radiance'
    },
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-laser-toning',
    slug: 'laser-toning',
    category: 'skin',
    title: 'Laser Toning',
    subtitle: 'Deep Dermal Brightening',
    hookSubtitle: 'Sub-Cellular Melanosome Fragmentation for Clear Skin',
    description: 'Gentle, high-speed acoustic energy waves to clear uneven pigmentation, sun damage, and age spots safely on Indian skin tones.',
    keyBenefits: ['US-FDA Cleared Laser', 'Uniform Skin Tone', 'No Peeling or Redness', 'Dermatologist Supervised'],
    heroImage: '/service-laser-tech.png',
    galleryImages: [
      { id: 'm10-1', url: '/service-laser-tech.png', caption: 'Nd:YAG Laser Handpiece Protocol', type: 'clinical' },
      { id: 'm10-2', url: '/laser-treatment.png', caption: 'Dermal Pigment Fragmentation Suite', type: 'clinical' }
    ],
    beforeAfterPair: {
      beforeImage: '/process/step-01-dermoscopy.jpg',
      afterImage: '/process/step-03-laser-suite.jpg',
      title: 'Laser Toning: Melanin Fragmentation & Clear Tone'
    },
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-allergies',
    slug: 'skin-allergies',
    category: 'skin',
    title: 'Skin Allergies & Hives',
    subtitle: 'Acute & Chronic Urticaria',
    hookSubtitle: 'Diagnostic Root-Cause Tracking and Mast Cell Stabilization',
    description: 'Precision blood and patch testing to isolate environmental, dietary, and autoimmune triggers behind recurrent hives and angioedema.',
    keyBenefits: ['Immediate Antihistamine Calibration', 'Patch Test Trigger Mapping', 'Emergency Protocol Guidance', 'Long-term Remission'],
    heroImage: '/service-clinical-derm.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-keratosis',
    slug: 'keratosis-pilaris',
    category: 'skin',
    title: 'Keratosis Pilaris',
    subtitle: 'Follicular Texture Renewal',
    hookSubtitle: 'Gentle Keratolytic Smoothing for Chicken Skin',
    description: 'Targeted lactic, urea, and salicylic exfoliating regimens coupled with gentle vascular light to smooth bumpy arm and leg skin.',
    keyBenefits: ['Smooth Texture in 3 Weeks', 'Redness Reduction', 'Deep Follicle Hydration', 'Easy At-Home Maintenance'],
    heroImage: '/service-clinical-derm.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-dark-circles',
    slug: 'dark-circles',
    category: 'skin',
    title: 'Dark Circles',
    subtitle: 'Periorbital Rejuvenation',
    hookSubtitle: 'Multi-Factorial Under-Eye Brightening & Tear Trough Care',
    description: 'Addressing genetic vascular pooling, structural volume loss, and hyperpigmentation with peptides, gentle peels, and dermal nutrition.',
    keyBenefits: ['Non-Surgical Refreshment', 'Vascular Clearing', 'Deep Hydration Boost', 'Custom Peptides'],
    heroImage: '/service-aesthetic-med.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-stretch-marks',
    slug: 'stretch-marks',
    category: 'skin',
    title: 'Stretch Marks',
    subtitle: 'Collagen Remodeling',
    hookSubtitle: 'Fractional Micro-Needling RF and CO2 Laser Blending',
    description: 'Stimulating fresh elastin and neo-collagenesis to fade red striae rubrae and smooth silvery striae albae.',
    keyBenefits: ['Significant Depth Reduction', 'Texture Tightening', 'Post-Pregnancy Safe', 'Gradual Natural Blending'],
    heroImage: '/laser-treatment.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-tattoo',
    slug: 'tattoo-removal',
    category: 'skin',
    title: 'Tattoo Removal',
    subtitle: 'Multi-wavelength Nd:YAG',
    hookSubtitle: 'High-Peak Photo-Acoustic Ink Clearance Without Scarring',
    description: 'Dual wavelength Q-switched laser pulses shattering deep black, blue, and red pigments into microscopic particles cleared naturally by white blood cells.',
    keyBenefits: ['Preserves Surrounding Skin', 'No Hypopigmentation', 'Topical Numbing Comfort', 'All Ink Densities'],
    heroImage: '/service-laser-tech.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },

  // HAIR CONCERNS
  {
    id: 'cond-hair-loss',
    slug: 'hair-loss',
    category: 'hair',
    title: 'Hair Loss & GFC',
    subtitle: 'Autologous Growth Factors',
    hookSubtitle: 'Next-Generation Pure Growth Factor Concentrate Therapy',
    description: 'Highly concentrated recombinant autologous growth factor infusion to activate dormant miniaturized follicles and increase hair shaft diameter.',
    keyBenefits: ['Superior to Traditional PRP', 'Acellular & Pure', 'Zero Downtime', 'Densitometry Tracked'],
    heroImage: '/service-hair-restoration.png',
    galleryImages: [
      { id: 'm11', url: '/service-hair-restoration.png', caption: 'Follicular Densitometry Tracking', type: 'clinical' }
    ],
    beforeAfterPair: {
      beforeImage: '/service-hair-restoration.png',
      afterImage: '/service-hair-restoration.png',
      title: 'GFC Therapy 4 Sessions - Frontal Density Gain'
    },
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-male-baldness',
    slug: 'hair-loss-in-men',
    category: 'hair',
    title: 'Male Pattern Baldness',
    subtitle: 'DHT Blocker & Regrowth',
    hookSubtitle: 'Genetic Androgenetic Alopecia Interception',
    description: 'Scientific combination of 5-alpha reductase regulation, vasodilatory peptides, and in-clinic biostimulation for crown and hairline thinning.',
    keyBenefits: ['Halts Hairline Recession', 'Crown Density Reversal', 'Medical Safety Monitored', 'Custom Scalp Tonics'],
    heroImage: '/service-hair-restoration.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-female-hairfall',
    slug: 'hair-fall-in-female',
    category: 'hair',
    title: 'Female Hair Fall & PCOS',
    subtitle: 'Endocrine & Nutritional Care',
    hookSubtitle: 'Comprehensive Hormonal, Ferritin & Telogen Effluvium Balancing',
    description: 'Investigating thyroid, vitamin D3, ferritin, and androgen receptor sensitivity to treat diffuse parting widening and postpartum shedding.',
    keyBenefits: ['Root Cause Blood Mapping', 'PCOS-Specific Formulations', 'Volumizing Peptides', 'Gentle Non-Greasy Topicals'],
    heroImage: '/service-hair-restoration.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-dandruff',
    slug: 'dandruff',
    category: 'hair',
    title: 'Chronic Dandruff Relief',
    subtitle: 'Malassezia Antifungal Protocol',
    hookSubtitle: 'Ending Persistent Flaking, Itch, and Seborrheic Scalp Build-Up',
    description: 'Clinical antifungal and keratolytic scalp solutions designed to restore scalp microflora without drying or damaging delicate hair shafts.',
    keyBenefits: ['Anti-Recurrence Regimen', 'Soothes Red Inflamed Scalp', 'Safe for Color-Treated Hair', 'Prevents Secondary Shedding'],
    heroImage: '/service-hair-restoration.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-scalp-psoriasis',
    slug: 'psoriasis',
    category: 'hair',
    title: 'Scalp Psoriasis',
    subtitle: 'Keratolytic Scalp Relief',
    hookSubtitle: 'Gentle Plaque De-Scaling and Follicle Preservation',
    description: 'Targeted coal-tar derivatives, salicylic de-scaling oils, and safe immunomodulatory foams to clear thick adherent scales without causing hair breakage.',
    keyBenefits: ['Fast Scale Softening', 'Immediate Itch Cessation', 'Protects Hair Roots', 'Steroid-Free Maintenance'],
    heroImage: '/service-hair-restoration.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-hair-hub',
    slug: 'hair-scalp-problems',
    category: 'hair',
    title: 'Hair & Scalp Hub',
    subtitle: 'Comprehensive Trichology',
    hookSubtitle: 'Gold Medalist Trichological Diagnosis & Treatment',
    description: 'From alopecia areata patches to chronic scalp folliculitis, complete diagnostic dermoscopy and evidence-based clinical therapeutics.',
    keyBenefits: ['Polarized Trichoscopy', 'Targeted Micro-Nutrient Therapy', 'Stem Cell Growth Factors', 'Personalized Home Routines'],
    heroImage: '/service-hair-restoration.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },

  // PEDIATRIC CONCERNS
  {
    id: 'cond-baby-skin',
    slug: 'baby-skin-care',
    category: 'pediatrics',
    title: 'Newborn Skin Care',
    subtitle: 'Neonatal Barrier Protocols',
    hookSubtitle: 'Gentle, Science-Backed Dermatology for Tender Infant Skin',
    description: 'Protecting the vulnerable stratum corneum of newborns with hypoallergenic, fragrance-free medical protocols and parental bath-time guidance.',
    keyBenefits: ['Formulated for Infant Skin', 'Prevents Early Atopic Flares', 'Non-Toxic Ingredients', 'Dr. Divya Direct Guidance'],
    heroImage: '/service-pediatric-care.png',
    galleryImages: [
      { id: 'm12', url: '/service-pediatric-care.png', caption: 'Gentle Neonatal Evaluation', type: 'clinical' }
    ],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-cradle-cap',
    slug: 'cradle-cap',
    category: 'pediatrics',
    title: 'Infant Cradle Cap',
    subtitle: 'Gentle Seborrheic Clearing',
    hookSubtitle: 'Safely Dissolving Crusted Yellow Scalp Scales Without Irritation',
    description: 'Mild infant-safe emollient oils and physiological softening solutions that loosen crusts gently without picking or scratching delicate infant scalps.',
    keyBenefits: ['Zero Pain / Discomfort', 'Safe for 0+ Months', 'No Harsh Chemicals', 'Soothes Redness'],
    heroImage: '/service-pediatric-care.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-diaper-rash',
    slug: 'diaper-rash',
    category: 'pediatrics',
    title: 'Diaper Rash Healing',
    subtitle: 'Rapid Zinc Barrier Healing',
    hookSubtitle: 'Healing Candida and Friction Erythema Within 48 Hours',
    description: 'Medical zinc oxide barrier pastes and antifungal combinations that protect inflamed baby skin from wetness, acidity, and maceration.',
    keyBenefits: ['Rapid Overnight Calming', 'Medical Grade Zinc Barrier', 'Candida Eradication', 'Clear Prevention Advice'],
    heroImage: '/service-pediatric-care.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-baby-rashes',
    slug: 'common-skin-rashes-in-babies',
    category: 'pediatrics',
    title: 'Common Baby Rashes',
    subtitle: 'Viral Exanthem & Heat Rash',
    hookSubtitle: 'Accurate Diagnosis of Prickly Heat, Milia, and Viral Rashes',
    description: 'Compassionate pediatric dermatology visits giving parents peace of mind and exact clinical differentiation between benign and infectious rashes.',
    keyBenefits: ['Accurate Diagnosis', 'Avoids Unnecessary Antibiotics', 'Cooling Thermal Comfort', 'Emergency Guidance'],
    heroImage: '/service-pediatric-care.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-food-allergy',
    slug: 'food-allergy',
    category: 'pediatrics',
    title: 'Cutaneous Allergies',
    subtitle: 'Eczema & Food Reaction Care',
    hookSubtitle: 'Identifying Milk, Egg & Environmental Atopic Triggers',
    description: 'Structured allergic evaluation to differentiate between true food allergies and atopic skin barrier dysfunctions in growing babies.',
    keyBenefits: ['Avoids Malnutrition Diets', 'Identifies True Allergen Culprits', 'Symptom Relief', 'Holistic Pediatric Guidance'],
    heroImage: '/service-pediatric-care.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  },
  {
    id: 'cond-pediatric-hub',
    slug: 'newborn-pediatric-dermatology',
    category: 'pediatrics',
    title: 'Pediatric Dermatology',
    subtitle: 'Safe Infant & Toddler Care',
    hookSubtitle: 'Bangalore’s Premier Pediatric Dermatology Center in Whitefield',
    description: 'Complete tertiary hospital trained pediatric care for birthmarks, hemangiomas, molluscum, and childhood eczema by Dr. Divya Sharma.',
    keyBenefits: ['Child-Friendly Environment', 'Gold Medalist Care', 'Zero-Steroid First Line', 'Parental Partnership'],
    heroImage: '/service-pediatric-care.png',
    galleryImages: [],
    lastUpdated: '2026-09-01'
  }
];

// Local Storage Keys
const BLOGS_STORAGE_KEY = 'dr_divya_cms_blogs';
const CONDITIONS_STORAGE_KEY = 'dr_divya_cms_conditions';
const AUTH_STORAGE_KEY = 'dr_divya_admin_auth';

// Helper to check if running in browser
const isBrowser = () => typeof window !== 'undefined';

export function getBlogs(): BlogArticle[] {
  if (!isBrowser()) return initialBlogs;
  try {
    const data = localStorage.getItem(BLOGS_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(initialBlogs));
      return initialBlogs;
    }
    return JSON.parse(data);
  } catch {
    return initialBlogs;
  }
}

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  const blogs = getBlogs();
  return blogs.find((b) => b.slug === slug);
}

export function saveBlog(blog: BlogArticle): void {
  if (!isBrowser()) return;
  const blogs = getBlogs();
  const index = blogs.findIndex((b) => b.id === blog.id);
  if (index >= 0) {
    blogs[index] = blog;
  } else {
    blogs.unshift(blog);
  }
  localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(blogs));
  window.dispatchEvent(new Event('dr_divya_cms_update'));
}

export function deleteBlog(id: string): void {
  if (!isBrowser()) return;
  const blogs = getBlogs().filter((b) => b.id !== id);
  localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(blogs));
  window.dispatchEvent(new Event('dr_divya_cms_update'));
}

export function getConditions(): ConditionData[] {
  if (!isBrowser()) return initialConditions;
  try {
    const data = localStorage.getItem(CONDITIONS_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(CONDITIONS_STORAGE_KEY, JSON.stringify(initialConditions));
      return initialConditions;
    }
    const parsed: ConditionData[] = JSON.parse(data);
    const map = new Map<string, ConditionData>();
    initialConditions.forEach((c) => map.set(c.slug, c));
    parsed.forEach((c) => {
      const existing = map.get(c.slug);
      map.set(c.slug, existing ? { ...existing, ...c } : c);
    });
    return Array.from(map.values());
  } catch {
    return initialConditions;
  }
}

export function getConditionBySlug(slug: string): ConditionData | undefined {
  const conditions = getConditions();
  // Strip leading slash if passed
  const cleanSlug = slug.replace(/^\//, '');
  return conditions.find((c) => c.slug === cleanSlug || c.slug === slug);
}

export function saveCondition(condition: ConditionData): void {
  if (!isBrowser()) return;
  const conditions = getConditions();
  const index = conditions.findIndex((c) => c.id === condition.id || c.slug === condition.slug);
  if (index >= 0) {
    conditions[index] = { ...condition, lastUpdated: new Date().toISOString().split('T')[0] };
  } else {
    conditions.push({ ...condition, lastUpdated: new Date().toISOString().split('T')[0] });
  }
  localStorage.setItem(CONDITIONS_STORAGE_KEY, JSON.stringify(conditions));
  window.dispatchEvent(new Event('dr_divya_cms_update'));
}

export function getHeroCarouselItems(category: 'skin' | 'hair' | 'pediatrics') {
  const conditions = getConditions().filter((c) => c.category === category);
  return conditions.map((c) => ({
    id: c.id,
    title: c.title,
    subtitle: c.subtitle,
    href: `/${c.slug}`,
    image: c.heroImage,
  }));
}

export function getConditionBeforeAfterPairs(condition?: ConditionData | null): BeforeAfterPair[] {
  if (!condition) return [];
  if (condition.beforeAfterPairs && condition.beforeAfterPairs.length > 0) {
    return condition.beforeAfterPairs;
  }
  if (condition.beforeAfterPair && condition.beforeAfterPair.beforeImage && condition.beforeAfterPair.afterImage) {
    return [{
      id: 'default-pair',
      title: condition.beforeAfterPair.title || 'Clinical Results',
      beforeImage: condition.beforeAfterPair.beforeImage,
      afterImage: condition.beforeAfterPair.afterImage,
      treatmentDuration: 'Documented Protocol'
    }];
  }
  return [];
}

// Initial Sample Patient Leads for immediate admin testing
export const initialLeads: PatientLead[] = [
  {
    id: 'lead-1',
    name: 'Pooja Hegde',
    phone: '+91 98450 12345',
    email: 'pooja.h@gmail.com',
    preferredDate: '2026-09-08',
    treatmentName: 'Acne & Scars Treatment',
    notes: 'Struggling with recurrent cystic breakouts on cheeks and chin. Interested in Fractional CO2 laser.',
    submittedAt: '2026-09-06T10:15:00.000Z',
    status: 'new',
    source: '/acne-pimples'
  },
  {
    id: 'lead-2',
    name: 'Karthik Raman',
    phone: '+91 99001 88721',
    email: 'karthik.raman@techfirm.com',
    preferredDate: '2026-09-09',
    treatmentName: 'Hair Loss & GFC Therapy',
    notes: 'Grade 3 crown thinning. Want an in-depth dermoscopy consultation with Dr. Divya.',
    submittedAt: '2026-09-05T16:40:00.000Z',
    status: 'contacted',
    source: '/hair-loss'
  },
  {
    id: 'lead-3',
    name: 'Shreya Narayanan',
    phone: '+91 97412 55432',
    email: 'shreya.n@outlook.com',
    preferredDate: '2026-09-10',
    treatmentName: 'Melasma & Pigmentation',
    notes: 'Stubborn post-pregnancy melasma patches on both cheeks. Prefer laser toning or chemical peel routine.',
    submittedAt: '2026-09-04T11:20:00.000Z',
    status: 'scheduled',
    source: '/melasma'
  }
];

const LEADS_STORAGE_KEY = 'dr_divya_cms_leads';

export function getLeads(): PatientLead[] {
  if (!isBrowser()) return initialLeads;
  try {
    const data = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(initialLeads));
      return initialLeads;
    }
    return JSON.parse(data);
  } catch {
    return initialLeads;
  }
}

export function saveLead(leadData: {
  name: string;
  phone: string;
  email: string;
  preferredDate?: string;
  treatmentName?: string;
  notes?: string;
  source?: string;
}): PatientLead {
  const newLead: PatientLead = {
    id: `lead-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: leadData.name.trim(),
    phone: leadData.phone.trim(),
    email: leadData.email.trim(),
    preferredDate: leadData.preferredDate || new Date().toISOString().split('T')[0],
    treatmentName: leadData.treatmentName || 'General Dermatology Consultation',
    notes: leadData.notes?.trim() || '',
    submittedAt: new Date().toISOString(),
    status: 'new',
    source: leadData.source || 'Landing Page'
  };

  if (isBrowser()) {
    const leads = getLeads();
    leads.unshift(newLead);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
    window.dispatchEvent(new Event('dr_divya_cms_update'));
  }
  return newLead;
}

export function updateLeadStatus(id: string, status: PatientLead['status']): void {
  if (!isBrowser()) return;
  const leads = getLeads();
  const index = leads.findIndex((l) => l.id === id);
  if (index >= 0) {
    leads[index].status = status;
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
    window.dispatchEvent(new Event('dr_divya_cms_update'));
  }
}

export function deleteLead(id: string): void {
  if (!isBrowser()) return;
  const leads = getLeads().filter((l) => l.id !== id);
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
  window.dispatchEvent(new Event('dr_divya_cms_update'));
}

export function clearAllLeads(): void {
  if (!isBrowser()) return;
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify([]));
  window.dispatchEvent(new Event('dr_divya_cms_update'));
}

// Authentication Helpers
export function isAdminAuthenticated(): boolean {
  if (!isBrowser()) return false;
  return localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
}

export function setAdminAuthenticated(authenticated: boolean): void {
  if (!isBrowser()) return;
  if (authenticated) {
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}
