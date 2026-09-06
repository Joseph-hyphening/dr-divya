import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.drdivyasharma.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // 1. Core High-Priority Sitelink & Hub Pages (Priority 1.0 - 0.9)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/dr-divya-sharma`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about-clinic`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/book-an-appointment`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/skin-concerns`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Main Clinical Pillar Hubs
    {
      url: `${BASE_URL}/medical-dermatology`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/aesthetics-skin-care`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hair-scalp-problems`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/newborn-pediatric-dermatology`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 2. High-Intent Medical Dermatology & Scar Conditions (Priority 0.85)
  const medicalPages = [
    'keloids',
    'acne-pimples',
    'acne',
    'acne-and-its-care',
    'melasma',
    'dark-spot-and-pigment-reduction',
    'dark-circles',
    'psoriasis',
    'psoriasis-overview-types-and-treatment',
    'eczema',
    'skin-allergies',
    'food-allergy',
    'rashes-skin-infection',
    'keratosis-pilaris',
    'skin-tags',
    'topical-steroids',
    'warts-or-verrucae',
    'white-patches',
    'birthmarks',
    'blood-vessel-related-lesions',
    'lumps-bumps',
    'milia',
    'molluscum-contagiosum',
    'nailcare-and-hygiene',
    'brittle-nails-reasons-and-treatment',
    'skin-colour-related-issues',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 3. Laser & Aesthetic Procedures (Priority 0.85)
  const aestheticPages = [
    'hollywood-peel',
    'chemical-peels',
    'laser-toning',
    'skin-laser-toning',
    'scar-removal',
    'skin-resurfacing-texture',
    'skin-resurfacing-and-rejuvenation',
    'unwanted-hair',
    'unwanted-hair-removal',
    'unwanted-male-body-hair',
    'tattoo-removal',
    'fairness-facial-glow',
    'stretch-marks',
    'stretch-marks-treatment',
    'led-therapy',
    'light-based-therapies',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 4. Hair & Trichology Solutions (Priority 0.85)
  const hairPages = [
    'hair-loss',
    'hair-loss-in-men',
    'hair-fall-in-female',
    'dandruff',
    'an-overview-of-dandruff',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 5. Pediatric Dermatology (Priority 0.8)
  const pediatricPages = [
    'baby-skin-care',
    'common-skin-rashes-in-babies',
    'cradle-cap',
    'diaper-rash',
    'how-to-avoid-diaper-rash',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 6. Educational Content, Blogs, FAQs & Reviews (Priority 0.7 - 0.75)
  const contentPages = [
    'blogs',
    'faq',
    'faq/laser-hair-removal',
    'faq/keratosis-pilaris',
    'testimonials/10',
    'testimonials/20',
    'clinic-gallery',
    'media',
    'videos',
    'the-truth-about-acne',
    'best-anti-ageing-foods',
    'are-chemical-peels-harmful-for-the-skin',
    'common-skin-irritants',
    'do-pimples-near-the-menstrual-cycle-indicate-a-hormonal-imbalance',
    'home-remedies-for-skin-care',
    'important-facts-about-athletes-foot',
    'know-more-about-skin-cancer',
    'learn-about-fungal-toenail-Infections',
    'side-effects-of-hard-water',
    'skin-care-tips-for-rosacea',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...corePages,
    ...medicalPages,
    ...aestheticPages,
    ...hairPages,
    ...pediatricPages,
    ...contentPages,
  ];
}
