const EMAILJS_CONFIG = {
  CONTACT: {
    SERVICE_ID: 'service_4i458lr',
    TEMPLATE_STAFF: 'template_9fgi826',
    TEMPLATE_AUTO: 'template_m4m09pa',
    PUBLIC_KEY: 'BUVqjnMW8-ZT5z0T4'
  },
  FEEDBACK: {
    SERVICE_ID: 'service_jzj4sib',
    TEMPLATE: 'template_svz49zm',
    PUBLIC_KEY: 'c9Mkpbq0FBqSTWdj7'
  }
};
const content = {
  home: {
    hero: {
      title: "Escape to the Extraordinary",
      subtitle: "Discover handpicked destinations, luxury stays, and curated travel experiences across India",
      cta: "Book Your Escape",
      bg: "/assets/hero.webp"
    },
    about: {
      title: "Namith Chowdary",
      subtitle: "Founder & Lead Explorer",
      bio: "Coastal Escapes was born from a passion for discovering the hidden soul of India. As a lifestyle explorer and storyteller, I believe that travel is more than just visiting a place—it's about the pulse of the destination, the culture, and the memories that linger long after the journey ends. Join me as we explore the sun-kissed coasts and majestic mountains of our beautiful nation.",
      image: "/assets/professional_founder.webp",
      signature: "Namith Chowdary"
    },
    seo: "Explore the best travel booking platform for hotels in Goa and customized tour packages in India. Coastal Escapes helps travelers find affordable hotels in Goa, premium resorts, and curated travel experiences.",
    featured: [
      { id: "goa", name: "Goa", desc: "Beaches, nightlife, relaxation", bg: "/assets/goa.webp", link: "Explore Goa and check our Hotels in Goa page for the best stays." },
      { id: "manali", name: "Manali", desc: "Mountains, adventure, snow", bg: "/assets/manali.webp" },
      { id: "kerala", name: "Kerala", desc: "Backwaters, nature, wellness", bg: "/assets/kerala.webp" },
      { id: "jaipur", name: "Jaipur", desc: "Heritage, culture, royalty", bg: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800" }
    ]
  },
  destinations: {
    title: "Top Travel Destinations in India",
    items: [
      { 
        id: "goa",
        name: "Goa: The sun-kissed Coast", 
        desc: "Famous for its 100km coastline, from buzzing Baga to soulful Agonda.", 
        highlight: "UNESCO Heritage churches, spice plantations, vibrant night markets, and world-class water sports.",
        appeal: "Ideal for those seeking a mix of relaxation, culture, and high-energy nightlife.",
        bg: "/assets/goa.webp" 
      },
      { 
        id: "manali",
        name: "Manali: The Alpine Retreat", 
        desc: "Gateway to the high Himalayas, find peace in the heart of the Beas River Valley.", 
        highlight: "Rohtang Pass, Hadimba Devi Temple, paragliding in Solang, and the charming cafes of Old Manali.",
        appeal: "Perfect for honeymooners, adventure enthusiasts, and families looking for a cool retreat.",
        bg: "/assets/manali.webp" 
      },
      { 
        id: "kerala",
        name: "Kerala: God’s Own Country", 
        desc: "A tropical paradise known for its unique culture and stunning natural beauty.", 
        highlight: "Munnar tea gardens, Thekkady wildlife sanctuary, and the iconic Alleppey houseboats.",
        appeal: "The ultimate destination for wellness, nature lovers, and peaceful family gatherings.",
        bg: "/assets/kerala.webp" 
      },
      { 
        id: "jaipur",
        name: "Jaipur: The Pink City", 
        desc: "A treasure trove of heritage, architecture, and vibrant culture.", 
        highlight: "Hawa Mahal, Amer Fort, Jantar Mantar, and authentic Rajasthani bazaars.",
        appeal: "Must-visit for history buffs, photographers, and luxury travelers.",
        bg: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800" 
      },
      { 
        id: "udaipur",
        name: "Udaipur: City of Lakes", 
        desc: "Known as the Venice of the East, famed for its stunning palaces and lakes.", 
        highlight: "City Palace, Lake Pichola, Saheliyon-ki-Bari, and Jag Mandir.",
        appeal: "Perfect for romantic getaways and artistic inspiration.",
        bg: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800" 
      }
    ]
  },
  hotels: {
    title: "World-Class Stays",
    seo: "Find the best hotels in India with affordable prices and premium comfort. Book your stay with trusted recommendations.",
    items: [
      { 
        id: "azure-palms",
        name: "Azure Palms Resort", 
        price: "₹7,500 – ₹12,000", 
        desc: "A stunning beachfront property in South Goa with private beach access and an infinity pool.", 
        features: ["Private Balconies", "Spa & Wellness", "Multi-cuisine Dining", "Free Wi-Fi"],
        bg: "/assets/hotel_luxury.webp",
        rates: { standard: "₹7,500", deluxe: "₹10,500", villa: "₹15,000" },
        menu: ["Floating Breakfast", "Seafood Grill", "Ayurvedic Massage", "Sunset Cruise"]
      },
      { 
        id: "heritage-inn",
        name: "Heritage Inn", 
        price: "₹4,500 – ₹6,500", 
        desc: "A restored Portuguese villa combining old-world charm with modern amenities in North Goa.", 
        features: ["Authentic Decor", "Garden Breakfast", "Near Night Markets", "Pet-friendly"],
        bg: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=600",
        rates: { boutique: "₹4,500", suite: "₹6,500" },
        menu: ["Traditional Goan Thali", "Cycle Tours", "Bird Watching", "Yoga Sessions"]
      },
      { 
        id: "royal-haveli",
        name: "The Royal Haveli", 
        price: "₹9,000 – ₹15,000", 
        desc: "A grand palace-style hotel in the heart of Jaipur offering traditional Rajasthani hospitality.", 
        features: ["Palatial Decor", "Roof-top Dining", "Cultural Shows", "Royal Suite"],
        bg: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=800",
        rates: { royal: "₹9,000", maharaja: "₹15,000" },
        menu: ["Dal Baati Choorma", "Puppet Shows", "Folk Music", "City Tours"]
      }
    ]
  },
  packages: {
    title: "Tour Packages",
    items: [
      { name: "Goa Package", duration: "3 Days / 2 Nights", price: "₹9,999 per person", inc: "Hotel + Sightseeing", bg: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600" },
      { name: "Manali Package", duration: "5 Days / 4 Nights", price: "₹18,500 per person", inc: "Transport + Hotel", bg: "/assets/manali.webp" }
    ]
  },
  blog: {
    title: "Travel Stories & Insights",
    posts: [
      { 
        id: "goa-gems",
        title: "Top 10 Hidden Gems to Visit in Goa", 
        summary: "Beyond the crowded beaches lie secret caves and silent shores.", 
        bg: "/assets/goa.webp",
        content: `
          <p>Goa is often synonymous with Baga, Calangute, and the pulsing nightlife of the North. But for the discerning traveler, the true magic of the sun-kissed state lies in its "hidden" corners. From the mysterious Arvalem Caves to the secluded Butterfly Beach, there's a side of Goa that remains untouched by mass tourism.</p>
          <br>
          <h3>1. Butterfly Beach</h3>
          <p>Accessible only by boat or a short trek through a dense forest, this tiny cove in South Goa is a paradise for couples and solitude-seekers. It's one of the best places to spot dolphins and, true to its name, beautiful butterflies.</p>
          <br>
          <h3>2. The Caves of Arvalem</h3>
          <p>Carved into solid rock, these 6th-century Buddhist caves offer a glimpse into Goa's ancient history. Located near Sanquelim, they are often overlooked but deeply atmospheric.</p>
          <br>
          <p>Stay tuned as we unveil more secret spots in our upcoming editions!</p>
        `,
        bloggerUrl: "https://cinemawithnamith.blogspot.com/2026/03/top-10-hidden-gems-to-visit-in-goa.html"
      },
      { 
        id: "budget-tips",
        title: "The Ultimate Guide to Budget Travel in India", 
        summary: "How to see the best of India without breaking the bank.", 
        bg: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600",
        content: `
          <p>India is one of the most budget-friendly destinations in the world, yet many travelers find themselves overspending on tourist traps. Here are our top tips for a high-value, low-cost journey:</p>
          <br>
          <h4>Choose Sleeper Trains</h4>
          <p>India's railway network is legendary. Opting for 3AC or Sleeper class is not only atmospheric but saves you hundreds compared to flights or luxury coaches.</p>
          <br>
          <h4>Eat Like a Local</h4>
          <p>Skip the fancy restaurants and head to local dhabas. You'll get more authentic food for a fraction of the price. Look for places crowded with locals—that's always a good sign.</p>
        `,
        bloggerUrl: "https://cinemawithnamith.blogspot.com/2026/03/the-ultimate-guide-to-budget-travel-in.html"
      },
      { 
        id: "manali-timing",
        title: "Best Time to Visit Manali: A Seasonal Guide", 
        summary: "From snowy winters to blooming summers, choose your perfect season.", 
        bg: "/assets/manali.webp",
        content: `
          <p>Experience the magic of the mountains across the year!</p>
        `,
        bloggerUrl: "https://cinemawithnamith.blogspot.com/2026/03/best-time-to-visit-manali-seasonal-guide.html"
      }
    ]
  },
  contact: {
    email: "hellocoastalescapes@gmail.com",
    phone: "6304475233",
    address: "Kakatiya Street 507, Mandapeta, Andhra Pradesh, 533308, India"
  }
};
const AI_KNOWLEDGE = {
  greetings: {
    en: [
      "Hello! I am your premium Coastal Escapes travel assistant. How may I plan your perfect getaway today?",
      "Welcome to Coastal Escapes! I'm here to help you discover India's best destinations. What's on your travel bucket list?",
      "Namaste! I am your AI travel concierge. Ready to explore luxury stays and tour packages?"
    ],
    hi: [
      "नमस्ते! मैं आपका कोस्टल एस्केप्स ट्रैवल असिस्टेंट हूँ। मैं आपकी यात्रा की योजना बनाने में कैसे मदद कर सकता हूँ?",
      "कोस्टल एस्केप्स में आपका स्वागत है! आपको भारत के बेहतरीन गंतव्यों की खोज करने में मदद करने के लिए मैं यहाँ हूँ।",
      "नमस्ते! मैं आपका एआई ट्रैवल कंसीयज हूँ। क्या आप लक्जरी स्टे और टूर पैकेज देखने के लिए तैयार हैं?"
    ],
    te: [
      "నమస్కారం! నేను మీ కోస్టల్ ఎస్కేప్స్ ట్రావెల్ అసిస్టెంట్. మీ ప్రయాణాన్ని ప్లాన్ చేయడంలో నేను మీకు ఎలా సహాయపడగలను?",
      "కోస్టల్ ఎస్కేప్స్ కు స్వాగతం! భారతదేశంలోని ఉత్తమ పర్యాటక ప్రాంతాలను కనుగొనడంలో మీకు సహాయపడటానికి నేను ఇక్కడ ఉన్నాను.",
      "నమస్కారం! లగ్జరీ స్టేలు మరియు టూర్ ప్యాకేజీలను అన్వేషించడానికి సిద్ధంగా ఉన్నారా?"
    ]
  },
  nav_contact: {
    patterns: ["contact", "email", "phone", "address", "call", "reach", "office", "talk to human", "संपर्क", "फोन", "पता", "కాంటాక్ట్", "ఫోన్", "చిరునామా"],
    responses: {
      en: "I'd be happy to help you connect with our team! I'm navigating you to our Contact section now...",
      hi: "मुझे आपको हमारी टीम से जोड़ने में खुशी होगी! मैं अब आपको हमारे संपर्क अनुभाग (Contact Section) पर ले जा रहा हूँ...",
      te: "మా బృందంతో మిమ్మల్ని కలపడానికి నేను సంతోషిస్తున్నాను! నేను ఇప్పుడు మిమ్మల్ని మా కాంటాక్ట్ విభాగానికి తీసుకువెళుతున్నాను..."
    },
    action: "/contact"
  },
  nav_feedback: {
    patterns: ["feedback", "rate", "review", "how was", "experience", "सुझाव", "ప్రశంస", "rating"],
    responses: {
      en: "We'd love to hear about your experience! I'm taking you to our premium feedback and rating page.",
      hi: "हमें आपके अनुभव के बारे में जानकर खुशी होगी! मैं आपको हमारे फीडबैक और रेटिंग पेज पर ले जा रहा हूँ।",
      te: "మీ అనుభవం గురించి తెలుసుకోవడానికి మేము ఇష్టపడతాము! నేను మిమ్మల్ని మా ఫీడ్‌బ్యాక్ మరియు రేటింగ్ పేజీకి తీసుకువెళుతున్నాను."
    },
    action: "/feedback"
  },
  nav_hotels: {
    patterns: ["hotel", "stay", "resort", "room", "accommodation", "booking", "azure palms", "heritage inn", "होटल", "रुकना", "कमरा", "booking", "హోటల్", "స్టే", "రూమ్"],
    responses: {
      en: "Looking for a luxurious stay? I'm taking you to our curated list of world-class hotels.",
      hi: "लक्जरी स्टे की तलाश है? मैं आपको विश्व स्तरीय होटलों की हमारी चुनिंदा सूची पर ले जा रहा हूँ।",
      te: "లగ్జరీ స్టే కోసం చూస్తున్నారా? ప్రపంచ స్థాయి హోటళ్ల జాబితాకు నేను మిమ్మల్ని తీసుకువెళుతున్నాను."
    },
    action: "/hotels"
  },
  nav_destinations: {
    patterns: ["destination", "place", "visit", "goa", "manali", "kerala", "jaipur", "udaipur", "where to go", "जगह", "घूमना", "गोवा", "मनाली", "కేరళ", "గోవా", "మనాలి"],
    responses: {
      en: "India has so many breathtaking spots! Let me show you our top travel destinations.",
      hi: "भारत में बहुत सारे लुभावने स्थान हैं! मैं आपको हमारे प्रमुख यात्रा गंतव्य दिखाता हूँ।",
      te: "భారతదేశంలో చాలా అద్భుతమైన ప్రాంతాలు ఉన్నాయి! మా టాప్ ట్రావెల్ డెస్టినేషన్లను మీకు చూపిస్తాను."
    },
    action: "/destinations"
  },
  jokes: {
    en: [
      "Why don't some people go on vacation? Because they don't have the 'cents' of adventure!",
      "I told my suitcase that there will be no vacation this year. Now I'm dealing with emotional baggage.",
      "Why did the airplane get sent to its room? Because it had a bad altitude!",
      "Where do sharks go on vacation? Finland!",
      "What kind of traveler is always the coolest? A 'fan' of the mountains!"
    ],
    hi: [
      "एक बार एक हवाई जहाज ने दूसरे हवाई जहाज से क्या कहा? भाई, तुम्हारा 'एटीट्यूड' (altitude) बहुत खराब है!",
      "सूटकेस ने अपने मालिक से क्या कहा? मुझे छुट्टियाँ चाहिए, मेरा सामान बहुत भारी (emotional baggage) हो गया है!",
      "शार्क अपनी छुट्टियाँ मनाने कहाँ जाते हैं? फिनलैंड (Finland)!"
    ],
    te: [
      "విహారయాత్రలకు వెళ్లని వారు ఎందుకు ఉంటారో తెలుసా? వారికి సాహసం చేసే 'సెన్స్' (cents) ఉండదు కాబట్టి!",
      "ఒక విమానం తన రూమ్ కు ఎందుకు వెళ్ళాల్సి వచ్చింది? దాని ఏటిట్యూడ్ (altitude) బాగోలేదని!",
      "షార్కులు సెలవులకు ఎక్కడికి వెళ్తాయి? ఫిన్లాండ్ (Finland) కు!"
    ]
  },
  who_are_you: {
    en: "I am the Coastal Escapes AI Concierge, your local guide to luxury travel in India. I don't need the internet to be smart—I'm built right into this website!",
    hi: "मैं कोस्टल एस्केप्स एआई कंसीयज हूँ, जो भारत में लक्जरी यात्रा के लिए आपका स्थानीय गाइड है।",
    te: "నేను కోస్టల్ ఎస్కేప్స్ AI కాన్సియర్జ్ ని, భారతదేశంలో లగ్జరీ ప్రయాణం కోసం మీ లోకల్ గైడ్ ని."
  },
  fallback: {
    en: "That's an interesting question! While I'm specialized in travel planning, you can find more details in our Blog or Contact section.",
    hi: "यह एक दिलचस्प सवाल है! हालांकि मैं यात्रा योजना में विशेषज्ञ हूँ, आप हमारे ब्लॉग या संपर्क अनुभाग में अधिक विवरण पा सकते हैं।",
    te: "అది ఆసక్తికరమైన ప్రశ్న! నేను ట్రావెల్ ప్లానింగ్ లో నిపుణుడిని అయినప్పటికీ, మీరు మా బ్లాగ్ లేదా కాంటాక్ట్ విభాగంలో మరిన్ని వివరాలను కనుగొనవచ్చు."
  }
};
const PROFANITY_DB = {
  words: [
    "fuck", "shit", "bitch", "asshole", "dick", "pussy", "bastard",
    "gaali", "behenchod", "madarchod", "chutiya", "harami", "saala", "kamine",
    "गाली", "बकवास", "हरामी", "कमीने", "साला",
    "lanja", "na kodaka", "dengu", "nee amma", "pooku", "yedava",
    "లంజ", "నీ అమ్మ", "దెంగు", "పూకు", "యదవ"
  ],
  polite_reply: (word, lang = 'en') => {
    const replies = {
      en: `At Coastal Escapes, we value decency and professional behavior. The term you used, "<strong>${word}</strong>", is considered disrespectful. Please maintain a polite tone.`,
      hi: `कोस्टल एस्केप्स में, हम शालीनता और पेशेवर व्यवहार को महत्व देते हैं। आपके द्वारा उपयोग किया गया शब्द "<strong>${word}</strong>" अपमानजनक माना जाता है। कृपया विनम्र लहज़ा बनाए रखें।`,
      te: `కోస్టల్ ఎస్కేప్స్ లో, మేము గౌరవప్రదమైన ప్రవర్తనకు విలువ ఇస్తాము. మీరు ఉపయోగించిన "<strong>${word}</strong>" పదం గౌరవప్రదమైనది కాదు. దయచేసి మర్యాదగా మాట్లాడండి.`
    };
    return replies[lang] || replies.en;
  }
};
const app = document.getElementById('app');
function navigate(page) {
  window.scrollTo(0, 0);
  if (page.startsWith('/hotel/')) {
    const id = page.split('/').pop();
    renderHotelDetail(id);
    return;
  }
  switch(page) {
    case '/': renderHome(); break;
    case '/destinations': renderDestinations(); break;
    case '/hotels': renderHotels(); break;
    case '/packages': renderPackages(); break;
    case '/blog': renderBlog(); break;
    case '/contact': renderContact(); break;
    case '/feedback': renderFeedback(); break;
    default: renderHome();
  }
}
function renderNavbar() {
  return `
    <nav id="navbar">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
        <a href="/" class="logo">
          <div class="logo-icon">CE</div>
          <div class="logo-text">
            Coastal
            <span>Escapes</span>
          </div>
        </a>
        <ul class="nav-links nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/destinations">Destinations</a></li>
          <li><a href="/hotels">Hotels</a></li>
          <li><a href="/packages">Packages</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}
function renderFooter() {
  return `
    <footer>
      <div class="container">
        <div class="grid">
          <div>
            <h3 class="logo">COASTAL ESCAPES</h3>
            <p style="color: var(--text-muted); margin-top: 1rem;">Crafting unforgettable journeys across India's most stunning landscapes.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul style="list-style: none; margin-top: 1rem; color: var(--text-muted);">
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/hotels">Hotels</a></li>
              <li><a href="/packages">Packages</a></li>
              <li><a href="/feedback">Give Feedback</a></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <p style="margin-top: 1rem;"><a href="mailto:${content.contact.email}" style="color: var(--text-muted); text-decoration: none;">${content.contact.email}</a></p>
            <p><a href="tel:${content.contact.phone.replace(/\s/g, '')}" style="color: var(--text-muted); text-decoration: none;">${content.contact.phone}</a></p>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2026 Coastal Escapes. All rights reserved.
        </div>
      </div>
    </footer>
  `;
}
function renderHome() {
  app.innerHTML = `
    ${renderNavbar()}
    <header class="hero" style="background-image: url('${content.home.hero.bg}')">
      <div class="container">
        <div class="hero-content">
          <h1>${content.home.hero.title}</h1>
          <p>${content.home.hero.subtitle}</p>
          <a href="/hotels" class="btn">${content.home.hero.cta}</a>
        </div>
      </div>
    </header>
    <section class="about-section" id="about">
      <div class="container about-grid">
        <div class="about-image-wrap">
          <img loading="lazy" decoding="async" src="${content.home.about.image}" alt="Namith Chowdary">
        </div>
        <div class="about-content">
          <span class="sig-label" style="color: var(--secondary); margin-bottom: 1rem; display: block;">Our Philosophy</span>
          <h2>The Soul of <br> Coastal Escapes</h2>
          <p>${content.home.about.bio}</p>
          <div class="signature">${content.home.about.signature}</div>
          <p style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.6;">Founder, Coastal Escapes</p>
        </div>
      </div>
    </section>
    <section class="seo-banner" style="background: var(--bg-card); padding: 4rem 0; border-bottom: 1px solid var(--glass-border);">
      <div class="container" style="max-width: 800px; text-align: center;">
        <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--secondary);">Why Choose Coastal Escapes?</h2>
        <p style="font-size: 1.1rem; color: var(--text-muted); line-height: 1.8;">
          ${content.home.seo}
        </p>
      </div>
    </section>
    <section class="container">
      <h2 class="section-title">Featured Destinations</h2>
      <div class="grid">
        ${content.home.featured.map(d => `
          <a href="/destinations" class="card glass">
            <img loading="lazy" decoding="async" src="${d.bg}" alt="${d.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 2rem;">
            <h3>${d.name}</h3>
            <p style="color: var(--text-muted); margin: 1rem 0;">${d.desc}</p>
            ${d.link ? `<p style="font-size: 0.9rem; color: var(--secondary); font-weight: 600;">${d.link}</p>` : ''}
          </a>
        `).join('')}
      </div>
    </section>
    <section style="background: var(--glass);">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="grid">
          <a href="/hotels" class="card glass">
            <h3>Hotel Booking</h3>
            <p>Premium stays curated for comfort and value.</p>
          </a>
          <a href="/packages" class="card glass">
            <h3>Tour Packages</h3>
            <p>All-inclusive experiences for every traveler.</p>
          </a>
          <a href="/blog" class="card glass">
            <h3>Travel Blog</h3>
            <p>Authentic stories and guides from across India.</p>
          </a>
        </div>
      </div>
    </section>
    ${renderModalContainer()}
    ${renderFooter()}
  `;
  attachListeners();
}
function renderHotels() {
  app.innerHTML = `
    ${renderNavbar()}
    <section class="container" style="padding-top: 10rem;">
      <h1 class="section-title">${content.hotels.title}</h1>
      <p style="text-align: center; max-width: 600px; margin: -2rem auto 4rem; color: var(--text-muted);">${content.hotels.seo}</p>
      <div class="grid">
        ${content.hotels.items.map(h => `
          <div class="card glass" style="display: flex; flex-direction: column;">
            <img loading="lazy" decoding="async" src="${h.bg}" alt="${h.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 2rem;">
            <h2 style="font-size: 1.5rem;">${h.name}</h2>
            <p style="color: var(--secondary); font-weight: 600; margin: 0.5rem 0;">${h.price}</p>
            <p style="color: var(--text-muted); margin-bottom: 1rem; flex-grow: 1;">${h.desc}</p>
            <a href="/hotel/${h.id}" class="btn" style="padding: 0.8rem 1.5rem; font-size: 0.9rem; text-align: center; margin-bottom: 1rem;">View Details & Menu</a>
            <button onclick="openPaymentModal('${h.name}')" class="btn" style="background: var(--accent); color: white; border: none; padding: 0.8rem 1.5rem; font-size: 0.9rem; text-align: center; cursor: pointer;">Book via PhonePe</button>
          </div>
        `).join('')}
      </div>
    </section>
    ${renderFooter()}
  `;
  attachListeners();
}
function renderDestinations() {
  app.innerHTML = `
    ${renderNavbar()}
    <section class="container" style="padding-top: 10rem;">
      <h1 class="section-title">${content.destinations.title}</h1>
      <div class="grid">
        ${content.destinations.items.map(d => `
          <div class="card glass" style="display: flex; flex-direction: column;">
            <img loading="lazy" decoding="async" src="${d.bg}" alt="${d.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 2rem;">
            <h2>${d.name}</h2>
            <p style="color: var(--text-muted); margin: 1rem 0;">${d.desc}</p>
            <p style="font-size: 0.9rem; margin-bottom: 1rem; flex-grow: 1;"><strong>Highlights:</strong> ${d.highlight}</p>
            <p style="font-style: italic; font-size: 0.85rem; color: var(--secondary);">Best for: ${d.appeal}</p>
          </div>
        `).join('')}
      </div>
    </section>
    ${renderFooter()}
  `;
  attachListeners();
}
function renderPackages() {
  app.innerHTML = `
    ${renderNavbar()}
    <section class="container" style="padding-top: 10rem;">
      <h1 class="section-title">${content.packages.title}</h1>
      <div class="grid">
        ${content.packages.items.map(p => `
          <div class="card glass" style="display: flex; flex-direction: column; height: 100%;">
            <img loading="lazy" decoding="async" src="${p.bg}" alt="${p.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 2rem;">
            <h2 style="flex-grow: 0;">${p.name}</h2>
            <p style="color: var(--text-muted); margin: 0.5rem 0;">${p.duration}</p>
            <div style="flex-grow: 1; padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 0.5rem; margin-bottom: 1.5rem;">
              <h4 style="margin-bottom: 0.5rem; font-size: 0.9rem;">Package Inclusions:</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">${p.inc}</p>
            </div>
            <button onclick="openPaymentModal('${p.name}')" class="btn" style="background: var(--accent); color: white; width: 100%; border: none; cursor: pointer;">Book Now via PhonePe</button>
          </div>
        `).join('')}
      </div>
    </section>
    ${renderModalContainer()}
    ${renderFooter()}
  `;
  attachListeners();
}
function renderModalContainer() {
  return `
    <div id="modal-root" class="modal-overlay" style="display: none;">
      <div class="modal-content glass">
        <button class="modal-close" onclick="closeModal()">&times;</button>
        <div id="modal-body"></div>
      </div>
    </div>
  `;
}
window.openPaymentModal = function(itemName) {
  const modalRoot = document.getElementById('modal-root');
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <h2 style="color: var(--secondary); margin-bottom: 1rem;">Complete Your Booking</h2>
      <p style="margin-bottom: 2rem; color: var(--text-muted);">Scan this QR code with your PhonePe app to pay for <strong>${itemName}</strong></p>
      <img loading="lazy" decoding="async" src="/assets/qr.webp" alt="PhonePe QR" style="width: 250px; border-radius: 1rem; border: 5px solid white; margin-bottom: 2rem;">
      <p style="font-size: 0.9rem; color: var(--text-muted);">After scanning, please share the screenshot with us on email or phone.</p>
    </div>
  `;
  modalRoot.style.display = 'flex';
}
window.closeModal = function() {
  document.getElementById('modal-root').style.display = 'none';
}
function renderHotelDetail(id) {
  const hotel = content.hotels.items.find(h => h.id === id);
  if (!hotel) { navigate('/'); return; }
  app.innerHTML = `
    ${renderNavbar()}
    <section class="container" style="padding-top: 10rem;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;">
        <div>
          <img loading="lazy" decoding="async" src="${hotel.bg}" alt="${hotel.name}" style="width: 100%; border-radius: 1rem; box-shadow: 0 20px 40px rgba(0,0,0,0.4);">
        </div>
        <div>
          <h1 style="font-size: 3rem; margin-bottom: 1rem;">${hotel.name}</h1>
          <p style="color: var(--text-muted); font-size: 1.2rem; margin-bottom: 2rem;">${hotel.desc}</p>
          <div class="glass" style="padding: 2rem; margin-bottom: 2rem;">
            <h3 style="color: var(--secondary); margin-bottom: 1rem;">Amenities & Services ("The Menu")</h3>
            <ul style="list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              ${hotel.menu.map(m => `<li style="color: var(--text-muted);">✦ ${m}</li>`).join('')}
            </ul>
          </div>
          <div class="glass" style="padding: 2rem;">
            <h3 style="color: var(--secondary); margin-bottom: 1rem;">Exclusive Rates</h3>
            <div style="display: flex; gap: 2rem;">
              ${Object.entries(hotel.rates).map(([tier, rate]) => `
                <div>
                  <p style="text-transform: capitalize; font-weight: 600;">${tier}</p>
                  <p style="font-size: 1.5rem; color: white;">${rate}</p>
                </div>
              `).join('')}
            </div>
          </div>
          <button onclick="openPaymentModal('${hotel.name}')" class="btn" style="margin-top: 2rem; width: 100%; background: var(--accent); color: white; border: none; cursor: pointer;">Confirm Booking via PhonePe</button>
        </div>
      </div>
    </section>
    ${renderModalContainer()}
    ${renderFooter()}
  `;
  attachListeners();
}
function renderBlog() {
  app.innerHTML = `
    ${renderNavbar()}
    <section class="container" style="padding-top: 10rem;">
      <h1 class="section-title">${content.blog.title}</h1>
      <div class="grid">
        ${content.blog.posts.map(p => `
          <div class="card glass" style="display: flex; flex-direction: column;">
            <img loading="lazy" decoding="async" src="${p.bg}" alt="${p.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 2rem;">
            <h3 style="flex-grow: 0;">${p.title}</h3>
            <p style="color: var(--text-muted); margin: 1rem 0; flex-grow: 1;">${p.summary}</p>
            <div id="content-${p.id}" class="blog-full-content" style="display: none; color: var(--text-muted); padding-top: 1.5rem; border-top: 1px solid var(--glass-border);">
              ${p.content}
              <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(255,165,0,0.1); border-radius: 0.5rem; border: 1px solid var(--secondary);">
                <h4 style="color: white; margin-bottom: 0.5rem;">Enjoying this story?</h4>
                <p style="font-size: 0.9rem; margin-bottom: 1rem;">Read the full interactive version and join the discussion on our official Blogger page.</p>
                <a href="${p.bloggerUrl}" target="_blank" class="btn" style="display: inline-block; padding: 0.6rem 1.2rem; font-size: 0.85rem; background: var(--secondary); color: #050505;">Read on Blogger</a>
              </div>
            </div>
            <button onclick="toggleBlog('${p.id}')" id="btn-${p.id}" style="background: none; border: none; color: var(--secondary); cursor: pointer; display: block; margin-top: 1.5rem; text-align: left;">Read More &rarr;</button>
          </div>
        `).join('')}
      </div>
    </section>
    ${renderFooter()}
  `;
  attachListeners();
}
window.toggleBlog = function(id) {
  const contentEl = document.getElementById('content-' + id);
  const btnEl = document.getElementById('btn-' + id);
  if (contentEl.style.display === 'none') {
    contentEl.style.display = 'block';
    btnEl.innerHTML = '&larr; Show Less';
  } else {
    contentEl.style.display = 'none';
    btnEl.innerHTML = 'Read More &rarr;';
  }
}
function renderContact() {
  app.innerHTML = `
    ${renderNavbar()}
    <section class="container" style="padding-top: 10rem;">
      <h1 class="section-title">Contact Us</h1>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;">
        <div class="glass" style="padding: 3rem;">
          <h2>Send an Inquiry</h2>
          <form id="contact-form" style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
            <input type="text" id="user-name" name="name" placeholder="Your Name" required style="padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); border-radius: 0.5rem; color: white;">
            <input type="email" id="user-email" name="email" placeholder="Email Address" required style="padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); border-radius: 0.5rem; color: white;">
            <textarea id="user-message" name="message" placeholder="Your Message" rows="5" required style="padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); border-radius: 0.5rem; color: white;"></textarea>
            <button class="btn" type="submit">Send Message</button>
          </form>
          <div id="form-feedback" style="display: none; margin-top: 2rem; padding: 1.5rem; border-radius: 0.5rem; background: rgba(0, 255, 127, 0.1); border: 1px solid var(--accent); color: white;">
            <strong>Thank you <span id="feedback-name"></span>!</strong>
            <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-muted);">An email has been sent to our team at hello@coastalescapes.com. We've also sent an automatic confirmation to your inbox. We will get back to you shortly!</p>
          </div>
        </div>
        <div>
          <h2>Our Office</h2>
          <p style="margin: 1.5rem 0; color: var(--text-muted);">${content.contact.address}</p>
          <div class="satellite-view" style="width: 100%; height: 300px; border-radius: 1rem; overflow: hidden; margin-bottom: 2rem; border: 1px solid var(--glass-border); position: relative;">
            <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800" alt="Satellite view Mandapeta" style="width: 100%; height: 100%; object-fit: cover;">
            <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(0,0,0,0.7); padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.75rem;">Satellite View: Mandapeta, AP</div>
          </div>
          <h3>Direct Contact</h3>
          <p style="color: var(--secondary); font-size: 1.5rem; margin-top: 1rem;"><a href="tel:${content.contact.phone.replace(/\s/g, '')}" style="color: inherit; text-decoration: none;">${content.contact.phone}</a></p>
          <p><a href="mailto:${content.contact.email}" style="color: var(--text-muted); text-decoration: none;">${content.contact.email}</a></p>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
  attachListeners();
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const feedbackName = document.getElementById('feedback-name');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalBtnText = btn.innerText;
    btn.innerText = "Sending...";
    btn.disabled = true;
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-message').value;
    const templateParams = {
      from_name: name,
      user_name: name,
      email: email,        // General
      user_email: email,   // Specific
      to_email: email,     // Often used for auto-replies
      reply_to: email,     // Important for replies
      message: message,
      staff_email: "hellocoastalescapes@gmail.com"
    };
    emailjs.send(EMAILJS_CONFIG.CONTACT.SERVICE_ID, EMAILJS_CONFIG.CONTACT.TEMPLATE_STAFF, templateParams, EMAILJS_CONFIG.CONTACT.PUBLIC_KEY)
      .then(() => {
        form.style.display = 'none';
        feedbackName.innerText = name;
        feedback.style.display = 'block';
        emailjs.send(EMAILJS_CONFIG.CONTACT.SERVICE_ID, EMAILJS_CONFIG.CONTACT.TEMPLATE_AUTO, templateParams, EMAILJS_CONFIG.CONTACT.PUBLIC_KEY)
          .catch(err => console.error("Auto-reply configuration check:", err));
      })
      .catch((error) => {
        console.error('EmailJS Debug:', {
          status: error.status,
          text: error.text,
          message: error.message
        });
        btn.innerText = "Error! Check Console";
        btn.disabled = false;
        setTimeout(() => { btn.innerText = originalBtnText; }, 3000);
      });
  });
}
function attachListeners() {
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        navigate(href);
      }
    });
  });
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}
window.addEventListener('popstate', () => navigate(window.location.pathname));
navigate(window.location.pathname);
initChatbot();
function initChatbot() {
  const chatContainer = document.createElement('div');
  chatContainer.innerHTML = `
    <button id="chatbot-toggle" class="chat-btn">✦</button>
    <div id="chatbot-window" class="chat-window">
      <div class="chat-header">
        <h3><div class="status-dot"></div> AI Concierge</h3>
        <button id="chatbot-close" class="close-chat" style="background:none; border:none; color:rgba(255,255,255,0.5); font-size:1.5rem; cursor:pointer;">&times;</button>
      </div>
      <div id="chat-messages" class="chat-messages">
        <div class="chat-msg msg-bot">Hello! I am your premium Coastal Escapes travel assistant. How may I plan your perfect getaway today?</div>
      </div>
      <div class="chat-input-area">
        <button id="btn-voice" class="btn-voice" title="Use Voice Input">🎤</button>
        <input type="text" id="chat-input" placeholder="Ask me anything..." autocomplete="off">
        <button id="btn-send-chat" title="Send Message">➤</button>
      </div>
      <div id="lang-indicator" style="padding: 0.5rem 2rem; font-size: 0.7rem; color: var(--secondary); opacity: 0.8; background: rgba(0,0,0,0.2);">Detected Language: English</div>
    </div>
  `;
  document.body.appendChild(chatContainer);
  const toggleBtn = document.getElementById('chatbot-toggle');
  const chatWindow = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chatbot-close');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('btn-send-chat');
  const voiceBtn = document.getElementById('btn-voice');
  let chatHistory = [];
  let isRecording = false;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;
  if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      chatInput.value = transcript;
      sendMessage();
    };
    recognition.onend = () => {
      isRecording = false;
      voiceBtn.classList.remove('listening');
    };
  }
  toggleBtn.addEventListener('click', () => chatWindow.classList.add('active'));
  closeBtn.addEventListener('click', () => chatWindow.classList.remove('active'));
  voiceBtn.addEventListener('click', () => {
    if (!recognition) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }
    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
      isRecording = true;
      voiceBtn.classList.add('listening');
    }
  });
  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
  async function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    chatInput.value = '';
    const loadingId = appendLoading();
    setTimeout(() => {
      removeElement(loadingId);
      const detection = detectLanguage(text);
      const response = generateLocalResponse(text, detection);
      document.getElementById('lang-indicator').innerText = `Detected Language: ${detection.toUpperCase()}`;
      appendMessage(response.text, 'bot');
      if (response.action) {
        setTimeout(() => {
          navigate(response.action);
        }, 1500);
      }
    }, 800);
  }
  function detectLanguage(input) {
    const hindiRegex = /[\u0900-\u097F]/;
    const teluguRegex = /[\u0C00-\u0C7F]/;
    if (hindiRegex.test(input)) return 'hi';
    if (teluguRegex.test(input)) return 'te';
    const lowInput = input.toLowerCase();
    if (lowInput.includes("namaste") || lowInput.includes("kaise")) return 'hi';
    if (lowInput.includes("namaskaram") || lowInput.includes("ela unnavu")) return 'te';
    return 'en';
  }
  function generateLocalResponse(input, lang = 'en') {
    const lowerInput = input.toLowerCase();
    for (const word of PROFANITY_DB.words) {
      if (lowerInput.includes(word)) {
        return { text: PROFANITY_DB.polite_reply(word, lang) };
      }
    }
    for (const key in AI_KNOWLEDGE) {
      if (AI_KNOWLEDGE[key].patterns) {
        if (AI_KNOWLEDGE[key].patterns.some(p => lowerInput.includes(p))) {
          const resMap = AI_KNOWLEDGE[key].responses;
          return { 
            text: resMap[lang] || resMap['en'],
            action: AI_KNOWLEDGE[key].action
          };
        }
      }
    }
    if (lowerInput.includes("joke") || lowerInput.includes("चुटकुल") || lowerInput.includes("జోక్")) {
      const jokes = AI_KNOWLEDGE.jokes[lang] || AI_KNOWLEDGE.jokes['en'];
      return { text: jokes[Math.floor(Math.random() * jokes.length)] };
    }
    if (lowerInput.includes("who are you") || lowerInput.includes("नाम") || lowerInput.includes("పేరు")) {
      return { text: AI_KNOWLEDGE.who_are_you[lang] || AI_KNOWLEDGE.who_are_you['en'] };
    }
    if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("नमस्ते") || lowerInput.includes("నమస్తే")) {
      const greets = AI_KNOWLEDGE.greetings[lang] || AI_KNOWLEDGE.greetings['en'];
      return { text: greets[Math.floor(Math.random() * greets.length)] };
    }
    return { text: AI_KNOWLEDGE.fallback[lang] || AI_KNOWLEDGE.fallback['en'] };
  }
  function appendMessage(text, sender) {
    const msgEl = document.createElement('div');
    msgEl.classList.add('chat-msg', sender === 'user' ? 'msg-user' : 'msg-bot');
    let formattedText = text;
    if (sender === 'bot') {
        formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\n/g, '<br>');
    }
    msgEl.innerHTML = formattedText;
    chatMessages.appendChild(msgEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  function appendLoading() {
    const id = 'loading-' + Date.now();
    const msgEl = document.createElement('div');
    msgEl.id = id;
    msgEl.classList.add('chat-msg', 'msg-bot', 'loading-dots');
    msgEl.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(msgEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return id;
  }
  function removeElement(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }
}
function renderFeedback() {
  app.innerHTML = `
    ${renderNavbar()}
    <section class="container" style="padding-top: 10rem; min-height: 80vh;">
      <h1 class="section-title">Professional Feedback</h1>
      <p style="text-align: center; color: var(--text-muted); margin: -2rem auto 4rem; max-width: 600px;">
        Your detailed insights help us refine the Coastal Escapes luxury collection.
      </p>
      <div id="feedback-container">
        <div class="feedback-box">
          <form id="feedback-form">
            <div style="text-align: center;">
              <span class="sig-label">Overall Experience</span>
              <div class="rating-widget">
                <!-- 10-Point High-Precision Hybrid System -->
                ${[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5].map(val => `
                  <input type="radio" name="rating" id="st${val}" value="${val}" class="star-input" ${val === 5 ? 'required' : ''}>
                  <label for="st${val}" class="star-label ${val % 1 !== 0 ? 'half' : 'full'}">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </label>
                `).join('')}
              </div>
            </div>
            <div class="sig-input-group">
              <label class="sig-label">Full Name</label>
              <input type="text" id="fb-name" placeholder="Enter your name" required class="sig-input">
            </div>
            <div class="sig-input-group">
              <label class="sig-label">Email Address</label>
              <input type="email" id="fb-email" placeholder="email@address.com" required class="sig-input">
            </div>
            <div class="sig-input-group">
              <label class="sig-label">Your Feedback</label>
              <textarea id="fb-message" placeholder="Please share your thoughts on our hotels and packages..." rows="4" required class="sig-input" style="resize: none;"></textarea>
            </div>
            <button class="sig-button" type="submit" style="width: 100%;">SUBMIT FEEDBACK</button>
          </form>
        </div>
      </div>
      <div id="fb-success-root" style="display: none;" class="bloom-container">
        <div class="bloom-text">
          Thank U For Your <br> Valuable Feedback
        </div>
        <div class="bloom-subtext">
          We Try To Improve More
        </div>
        <a href="/" class="btn" style="margin-top: 3rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem 3rem;">Return Home</a>
      </div>
    </section>
    ${renderFooter()}
  `;
  attachListeners();
  const form = document.getElementById('feedback-form');
  const container = document.getElementById('feedback-container');
  const successRoot = document.getElementById('fb-success-root');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    container.style.opacity = '0';
    setTimeout(() => {
      container.style.display = 'none';
      successRoot.style.display = 'flex';
    }, 400);
    const rating = form.querySelector('input[name="rating"]:checked').value;
    const name = document.getElementById('fb-name').value;
    const email = document.getElementById('fb-email').value;
    const message = document.getElementById('fb-message').value;
    const templateParams = {
      from_name: name,
      user_email: email,
      rating: rating,
      message: message,
      subject: `[Professional Feedback] ${rating}/5 Stars`,
      to_email: "hellocoastalescapes@gmail.com"
    };
    emailjs.send(EMAILJS_CONFIG.FEEDBACK.SERVICE_ID, EMAILJS_CONFIG.FEEDBACK.TEMPLATE, templateParams, EMAILJS_CONFIG.FEEDBACK.PUBLIC_KEY)
      .then(res => console.log("Feedback Sent Successfully:", res))
      .catch(err => console.error("EmailJS Sync failed:", err));
  });
}
function initProactiveFeedback() {
  const toast = document.createElement('div');
  toast.className = 'proactive-toast';
  toast.id = 'proactive-feedback';
  toast.innerHTML = `
    <div style="font-size: 2rem;">✨</div>
    <div style="flex-grow: 1;">
      <h4 style="margin: 0; color: white;">Share Your Experience</h4>
      <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">How was your trip? Rate our service.</p>
    </div>
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <button id="btn-rate-now" 
              style="background: var(--secondary); color: #000; border: none; padding: 0.6rem 1.2rem; border-radius: 0.5rem; font-weight: 700; cursor: pointer; white-space: nowrap; transition: transform 0.2s;">
        Rate Us
      </button>
      <button id="btn-toast-close" 
              style="background: none; border: none; color: white; cursor: pointer; font-size: 1.5rem; opacity: 0.5;">&times;</button>
    </div>
  `;
  document.body.appendChild(toast);
  const rateBtn = document.getElementById('btn-rate-now');
  const closeBtn = document.getElementById('btn-toast-close');
  rateBtn.addEventListener('click', () => {
    window.navigate('/feedback');
    toast.classList.remove('active');
  });
  closeBtn.addEventListener('click', () => {
    toast.classList.remove('active');
  });
  setTimeout(() => {
    if (window.location.pathname !== '/feedback') {
      toast.classList.add('active');
    }
  }, 100);
}
window.navigate = navigate;
initProactiveFeedback();
