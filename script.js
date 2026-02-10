// ====== SINGLE SOURCE OF TRUTH - ALL ARTICLES ======
const allArticles = [
    // ====== FOOD ARTICLES ======
    {
        id: 1,
        title: "5-Minute Breakfast Recipes for Programmers",
        excerpt: "Quick, healthy breakfast ideas you can make between coding sessions.",
        image: "https://images.unsplash.com/photo-1587621881783-0c55aef67ea7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "3 min",
        date: "March 15, 2024",
        category: "food",
        tags: ["breakfast", "quick", "healthy", "ghana"],
        author: "Ama Serwaa",
        views: "2.4K",
        trending: true
    },
    {
        id: 4,
        title: "Gamer Fuel: Energy-Boosting Snacks",
        excerpt: "Healthy snacks that keep you energized during long gaming sessions.",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac73f5f53f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "4 min",
        date: "March 12, 2024",
        category: "food",
        tags: ["snacks", "energy", "gaming", "ghana"],
        author: "Yaw Asante",
        views: "1.9K",
        trending: false
    },
    {
        id: 7,
        title: "Koko and Koose: The Ultimate Ghanaian Breakfast Combo",
        excerpt: "Learn how to make authentic Hausa koko (spicy millet porridge) paired with perfectly fried koose (bean cakes).",
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "12 min",
        date: "March 17, 2024",
        category: "food",
        tags: ["ghanaian", "traditional", "breakfast", "koko", "koose"],
        author: "Northern Kitchen",
        views: "3.5K",
        trending: true
    },
    {
        id: 10,
        title: "How to Enjoy Street Food Safely in Accra",
        excerpt: "Practical safety guidelines for identifying clean street food vendors in Accra and avoiding foodborne illness risks.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "6 min",
        date: "March 16, 2024",
        category: "food",
        tags: ["streetfood", "accra", "safety", "ghana"],
        author: "Food Safety Ghana",
        views: "2.8K",
        trending: false
    },
    {
        id: 17,
        title: "Authentic Ghanaian Jollof Rice Recipe",
        excerpt: "The secret to perfect Ghanaian jollof rice that wins every party. Smoked turkey makes all the difference!",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "25 min",
        date: "March 18, 2024",
        category: "food",
        tags: ["jollof", "rice", "ghanaian", "recipe"],
        author: "Ghana Chef",
        views: "4.8K",
        trending: true
    },
    {
        id: 18,
        title: "Banku with Grilled Tilapia and Shito",
        excerpt: "Step-by-step guide to making soft banku paired with perfectly grilled tilapia and homemade shito.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "45 min",
        date: "March 18, 2024",
        category: "food",
        tags: ["banku", "tilapia", "seafood", "coastal"],
        author: "Coastal Chef",
        views: "3.2K",
        trending: false
    },
    {
        id: 19,
        title: "Fufu with Goat Light Soup - Ashanti Style",
        excerpt: "Traditional fufu preparation with goat light soup. Perfect for family gatherings and special occasions.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "60 min",
        date: "March 19, 2024",
        category: "food",
        tags: ["fufu", "soup", "ashanti", "traditional"],
        author: "Ashanti Kitchen",
        views: "5.1K",
        trending: true
    },
    {
        id: 20,
        title: "Waakye: Ghana's Favorite Red Rice and Beans",
        excerpt: "Complete guide to making waakye with spaghetti, plantain, hard-boiled eggs, and fried fish.",
        image: "https://images.unsplash.com/photo-1505576399279-565b52ce32f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "40 min",
        date: "March 19, 2024",
        category: "food",
        tags: ["waakye", "rice", "beans", "breakfast"],
        author: "Traditional Cook",
        views: "2.9K",
        trending: false
    },
    {
        id: 22,
        title: "Kelewele: Spicy Fried Plantain Snack",
        excerpt: "Crispy fried plantain with ginger, pepper, and spices. Perfect evening snack or side dish.",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac73f5f53f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "20 min",
        date: "March 19, 2024",
        category: "food",
        tags: ["kelewele", "plantain", "snack", "streetfood"],
        author: "Street Food Expert",
        views: "3.7K",
        trending: false
    },

    // ====== TECH ARTICLES ======
    {
        id: 2,
        title: "Build Your First Website in 1 Hour",
        excerpt: "Step-by-step HTML/CSS tutorial for complete beginners.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "7 min",
        date: "March 14, 2024",
        category: "tech",
        tags: ["webdev", "beginner", "tutorial", "ghana"],
        author: "Tech Guru Ghana",
        views: "3.5K",
        trending: true
    },
    {
        id: 5,
        title: "How to Protect Your Gaming Accounts",
        excerpt: "Essential security tips to keep your gaming profiles safe from hackers.",
        image: "https://images.unsplash.com/photo-1633356270995-90a468ce6620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "6 min",
        date: "March 11, 2024",
        category: "tech",
        tags: ["security", "gaming", "accounts", "ghana"],
        author: "Security Expert",
        views: "4.2K",
        trending: true
    },
    {
        id: 8,
        title: "MTN vs Vodafone: Which Has Better Night Data Bundles in 2024?",
        excerpt: "Comparing night data bundle plans from MTN and Vodafone based on pricing, coverage, and user experiences.",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "7 min",
        date: "March 17, 2024",
        category: "tech",
        tags: ["mtn", "vodafone", "data", "bundles", "ghana"],
        author: "Network Tester",
        views: "5.1K",
        trending: false
    },

    // ====== GAMING ARTICLES ======
    {
        id: 3,
        title: "Best Gaming Setup Under $500",
        excerpt: "Create the ultimate gaming station without breaking the bank.",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "5 min",
        date: "March 13, 2024",
        category: "gaming",
        tags: ["setup", "budget", "gaming", "ghana"],
        author: "Gamer Ghana",
        views: "3.8K",
        trending: true
    },
    {
        id: 6,
        title: "Mobile Games That Pay Real Money",
        excerpt: "Legit mobile games that actually let you earn cash and gift cards.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f70674688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "8 min",
        date: "March 10, 2024",
        category: "gaming",
        tags: ["mobile", "money", "games", "ghana"],
        author: "Mobile Gamer",
        views: "3.4K",
        trending: false
    },
    {
        id: 9,
        title: "How to Win Local FIFA Tournaments in Ghana Gaming Cafés",
        excerpt: "Proven strategies used by successful tournament players in Ghanaian gaming cafés to compete effectively.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "9 min",
        date: "March 17, 2024",
        category: "gaming",
        tags: ["fifa", "tournaments", "ghana", "cafes"],
        author: "Tournament Champion",
        views: "4.2K",
        trending: true
    }
];

// ====== PAGINATION SETUP ======
let currentPage = 1;
const articlesPerPage = 6;
let displayedArticles = 0;

// ====== LOAD ARTICLES FUNCTION (For index.html) ======
function loadArticles() {
    const container = document.getElementById('articles-container');
    if (!container) return;

    // Calculate articles to show
    const startIndex = 0;
    const endIndex = currentPage * articlesPerPage;
    const articlesToShow = allArticles.slice(startIndex, endIndex);

    // Clear container on first page
    if (currentPage === 1) {
        container.innerHTML = '';
    }

    // Add articles
    articlesToShow.forEach((article, index) => {
        if (index >= displayedArticles) {
            container.innerHTML += createArticleCard(article);
        }
    });

    // Update counters
    displayedArticles = articlesToShow.length;
    updateStats();
    updateLoadMoreButton();
}

// ====== CREATE ARTICLE CARD (Used by both index.html and food.html) ======
function createArticleCard(article) {
    const categoryConfig = {
        food: { 
            icon: 'fa-utensils', 
            color: '#e53e3e',
            className: 'category-food'
        },
        tech: { 
            icon: 'fa-laptop-code', 
            color: '#3182ce',
            className: 'category-tech'
        },
        gaming: { 
            icon: 'fa-gamepad', 
            color: '#805ad5',
            className: 'category-gaming'
        }
    };
    
    const config = categoryConfig[article.category] || categoryConfig.food;
    
    return `
        <article class="article-card article-${article.category}">
            <div style="position: relative; width: 100%; height: 200px; overflow: hidden; border-radius: 8px 8px 0 0;">
                <img src="${article.image}" 
                     alt="${article.title}" 
                     style="width: 100%; height: 100%; object-fit: cover; object-position: center;"
                     loading="lazy"
                     onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                ${article.trending ? '<span style="position: absolute; top: 10px; left: 10px; background: linear-gradient(135deg, #FF9800, #F44336); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; display: flex; align-items: center; gap: 5px;"><i class="fas fa-fire"></i> Trending</span>' : ''}
            </div>
            <div class="article-content">
                <span class="article-category ${config.className}">
                    <i class="fas ${config.icon}"></i> 
                    ${article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    <span class="ghana-flag-small">🇬🇭</span>
                </span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <span><i class="far fa-clock"></i> ${article.readTime}</span>
                    <span><i class="far fa-eye"></i> ${article.views}</span>
                    <span><i class="far fa-calendar"></i> ${article.date}</span>
                </div>
                <a href="article.html?id=${article.id}" class="read-more">
                    Read Article <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `;
}

// ====== LOAD MORE FUNCTION ======
async function loadMoreArticles() {
    const loadMoreBtn = document.getElementById('load-more');
    const loadingElement = document.getElementById('loading');
    
    if (!loadMoreBtn || !loadingElement) return;
    
    // Show loading
    loadMoreBtn.style.display = 'none';
    loadingElement.style.display = 'block';
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Load more
    currentPage++;
    loadArticles();
    
    // Hide loading
    loadingElement.style.display = 'none';
}

// ====== UPDATE LOAD MORE BUTTON ======
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more');
    if (!loadMoreBtn) return;
    
    if (allArticles.length > displayedArticles) {
        loadMoreBtn.style.display = 'inline-flex';
        loadMoreBtn.disabled = false;
        loadMoreBtn.innerHTML = '<i class="fas fa-plus-circle"></i> Load More Ghana Articles';
    } else {
        loadMoreBtn.style.display = 'none';
        loadMoreBtn.innerHTML = '<i class="fas fa-check"></i> All Articles Loaded';
    }
}

// ====== LOAD ARTICLES BY CATEGORY (For food.html, tech.html, gaming.html) ======
function loadArticlesByCategory(category) {
    const container = document.getElementById(`${category}-articles`);
    if (!container) return;

    // Filter articles by category
    const filteredArticles = allArticles.filter(article => article.category === category);
    
    // Clear container
    container.innerHTML = '';
    
    // Display articles
    filteredArticles.forEach(article => {
        container.innerHTML += createArticleCard(article);
    });

    // If no articles found
    if (filteredArticles.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px; color: #718096;">
                <i class="fas fa-${category === 'food' ? 'utensils' : category === 'tech' ? 'laptop-code' : 'gamepad'} fa-3x" 
                   style="margin-bottom: 20px; color: ${category === 'food' ? '#e53e3e' : category === 'tech' ? '#3182ce' : '#805ad5'};"></i>
                <h3>No ${category} articles yet</h3>
                <p>Check back soon for ${category} content!</p>
            </div>
        `;
    }
}

// ====== OTHER FUNCTIONS ======
function updateStats() {
    const foodCount = allArticles.filter(a => a.category === 'food').length;
    const techCount = allArticles.filter(a => a.category === 'tech').length;
    const gamingCount = allArticles.filter(a => a.category === 'gaming').length;

    const elements = {
        'recipe-count': foodCount,
        'tutorial-count': techCount,
        'guide-count': gamingCount
    };

    Object.entries(elements).forEach(([id, count]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = count + '+';
    });
}

function loadTrending() {
    const container = document.getElementById('trending-list');
    if (!container) return;

    const trending = [...allArticles]
        .sort((a, b) => parseInt(b.views) - parseInt(a.views))
        .slice(0, 5);

    container.innerHTML = trending.map((article, index) => `
        <div class="trending-item" onclick="window.location.href='article.html?id=${article.id}'">
            <div class="trending-number">${index + 1}</div>
            <div class="trending-content">
                <h4>${article.title}</h4>
                <div class="trending-meta">
                    <span><i class="far fa-eye"></i> ${article.views}</span>
                    <span class="trending-category ${article.category}">${article.category}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ====== MOBILE MENU FUNCTIONALITY - SIMPLE & WORKING ======
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && nav) {
        console.log('✅ Mobile menu initialized');
        
        // Toggle menu when button is clicked
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            console.log('📱 Menu button clicked');
            
            // Toggle the active class on nav
            nav.classList.toggle('mobile-active');
            this.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Change icon
            if (nav.classList.contains('mobile-active')) {
                this.innerHTML = '<i class="fas fa-times"></i>';
                console.log('➡️ Menu opened');
            } else {
                this.innerHTML = '<i class="fas fa-bars"></i>';
                console.log('⬅️ Menu closed');
            }
        });
        
        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('mobile-active');
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.classList.remove('menu-open');
                console.log('🔗 Menu closed via link click');
            });
        });
        
        // Close menu when clicking outside (on overlay)
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('mobile-active') && 
                !nav.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                nav.classList.remove('mobile-active');
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.classList.remove('menu-open');
                console.log('🖱️ Menu closed via outside click');
            }
        });
        
        // Also close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('mobile-active')) {
                nav.classList.remove('mobile-active');
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.classList.remove('menu-open');
                console.log('⎋ Menu closed via Escape key');
            }
        });
        
    } else {
        console.error('❌ Mobile menu elements not found!');
        console.log('Looking for:', {
            mobileMenuBtn: mobileMenuBtn ? 'Found' : 'Not found',
            nav: nav ? 'Found' : 'Not found'
        });
    }
}

// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, initializing...');
    
    // Initialize mobile menu FIRST
    initializeMobileMenu();
    
    // Load articles on homepage
    if (document.getElementById('articles-container')) {
        loadArticles();
        loadTrending();
        
        // Add load more event
        const loadMoreBtn = document.getElementById('load-more');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', loadMoreArticles);
        }
    }
    
    // Load articles on category pages
    if (window.location.pathname.includes('food.html')) {
        loadArticlesByCategory('food');
    }
    if (window.location.pathname.includes('tech.html')) {
        loadArticlesByCategory('tech');
    }
    if (window.location.pathname.includes('gaming.html')) {
        loadArticlesByCategory('gaming');
    }
    
    // Initialize newsletter subscription
    const subscribeBtn = document.getElementById('subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const email = document.getElementById('newsletter-email').value;
            const message = document.getElementById('subscribe-message');
            
            if (email && email.includes('@')) {
                message.innerHTML = '<span style="color: var(--success);">✓ Subscribed! Check your email.</span>';
                console.log('📧 Newsletter subscription:', email);
            } else {
                message.innerHTML = '<span style="color: var(--food-color);">Please enter a valid email</span>';
            }
        });
    }
    
    // Update visitor counters (simulated)
    setTimeout(() => {
        const visitorElements = [
            'total-visitors', 
            'total-visitors-footer', 
            'online-now',
            'ad1-views',
            'ad2-views',
            'ad3-views'
        ];
        
        visitorElements.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const current = parseInt(el.textContent) || 0;
                el.textContent = current + Math.floor(Math.random() * 10) + 1;
            }
        });
        
        // Update articles read
        const articlesRead = document.getElementById('articles-read');
        if (articlesRead) {
            articlesRead.textContent = Math.floor(Math.random() * 100) + 50;
        }
    }, 1000);
    
    console.log('✅ All scripts initialized');
});

// ====== GLOBAL ACCESS ======
window.allArticles = allArticles;
window.loadArticles = loadArticles;
window.loadArticlesByCategory = loadArticlesByCategory;
window.loadMoreArticles = loadMoreArticles;
window.initializeMobileMenu = initializeMobileMenu;