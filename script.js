// ====== WEBSITE DATA ======
const websiteData = {
    siteName: "DigitalLifeHub",
    visitorCount: 0,
    articlesRead: 0,
    adViews: { ad1: 0, ad2: 0, ad3: 0 },
    subscribers: [],
    
    // Sample articles data - WITH ALL 16 ARTICLES
    articles: [
        {
            id: 1,
            category: "food",
            title: "5-Minute Breakfast Recipes for Programmers",
            excerpt: "Quick, healthy breakfast ideas you can make between coding sessions. Perfect for busy developers!",
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            readTime: "3 min",
            date: "2024-03-15"
        },
        {
            id: 2,
            category: "tech",
            title: "Build Your First Website in 1 Hour",
            excerpt: "Step-by-step HTML/CSS tutorial for complete beginners. No coding experience required!",
            image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            readTime: "7 min",
            date: "2024-03-14"
        },
        {
            id: 3,
            category: "gaming",
            title: "Best Gaming Setup Under $500",
            excerpt: "Create the ultimate gaming station without breaking the bank. Budget-friendly gear recommendations.",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            readTime: "5 min",
            date: "2024-03-13"
        },
        {
            id: 4,
            category: "food",
            title: "Gamer Fuel: Energy-Boosting Snacks",
            excerpt: "Healthy snacks that keep you energized during long gaming sessions. No sugar crashes!",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            readTime: "4 min",
            date: "2024-03-12"
        },
        {
            id: 5,
            category: "tech",
            title: "How to Protect Your Gaming Accounts",
            excerpt: "Essential security tips to keep your gaming profiles safe from hackers and phishing attacks.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            readTime: "6 min",
            date: "2024-03-11"
        },
        {
            id: 6,
            category: "gaming",
            title: "Mobile Games That Pay Real Money",
            excerpt: "Legit mobile games that actually let you earn cash and gift cards. No scams, real methods.",
            image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            readTime: "8 min",
            date: "2024-03-10"
        },
        {
            id: 7,
            category: "food",
            title: "The Secret to Perfect Ghanaian Jollof Rice",
            excerpt: "After 5 years of experimenting, I've found the perfect rice-to-tomato ratio and the secret ingredient that makes Ghanaian jollof stand out.",
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
            readTime: "10 min",
            date: "2024-03-16"
        },
        {
            id: 8,
            category: "food",
            title: "7 Budget Meals for Students in Ghana (Under GH₵10)",
            excerpt: "As a former university student, these affordable meals kept me fed without breaking the bank. All recipes use local ingredients.",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
            readTime: "8 min",
            date: "2024-03-16"
        },
        {
            id: 9,
            category: "food",
            title: "My Grandmother's Authentic Waakye Recipe",
            excerpt: "Passed down through generations, this traditional Waakye recipe uses local sorghum leaves for that distinctive color and flavor.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
            readTime: "12 min",
            date: "2024-03-16"
        },
        {
            id: 10,
            category: "food",
            title: "How to Enjoy Street Food Safely in Accra",
            excerpt: "After getting food poisoning twice, I learned these essential tips for identifying clean street food vendors in Ghana.",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            readTime: "6 min",
            date: "2024-03-16"
        },
        {
            id: 11,
            category: "tech",
            title: "Best Smartphones Under GH₵2,000 in Ghana (2024)",
            excerpt: "After testing 8 different phones available in Ghana, here are my top picks for budget smartphones that actually perform well.",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            readTime: "9 min",
            date: "2024-03-16"
        },
        {
            id: 12,
            category: "tech",
            title: "How to Save 50% on Mobile Data in Ghana",
            excerpt: "Living with expensive data plans taught me these 10 practical tips to reduce your monthly data consumption significantly.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
            readTime: "7 min",
            date: "2024-03-16"
        },
        {
            id: 13,
            category: "tech",
            title: "How I Landed My First Tech Job in Ghana Without a Degree",
            excerpt: "My journey from knowing nothing about coding to getting hired as a web developer in Accra - and how you can do it too.",
            image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0",
            readTime: "11 min",
            date: "2024-03-16"
        },
        {
            id: 14,
            category: "gaming",
            title: "5 Mobile Games That Actually Pay Real Money in Ghana",
            excerpt: "After testing dozens of 'earn money' games, these are the legitimate ones that actually let you cash out to Mobile Money.",
            image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd",
            readTime: "8 min",
            date: "2024-03-16"
        },
        {
            id: 15,
            category: "gaming",
            title: "Gaming Setup Under GH₵500 for Students in Ghana",
            excerpt: "You don't need an expensive PC to enjoy gaming. Here's my budget setup using affordable Android devices and free games.",
            image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
            readTime: "6 min",
            date: "2024-03-16"
        },
        {
            id: 16,
            category: "gaming",
            title: "Best Games to Play with Friends at University in Ghana",
            excerpt: "These are the games my friends and I actually play together on campus - perfect for group gaming sessions.",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
            readTime: "5 min",
            date: "2024-03-16"
        }
    ],
    
    // Trending content
    trending: [
        { id: 1, title: "AI Tools for Content Creation", category: "tech", readTime: "5 min" },
        { id: 2, title: "Protein Pancakes for Gamers", category: "food", readTime: "3 min" },
        { id: 3, title: "Best Gaming Mouse 2024", category: "gaming", readTime: "7 min" },
        { id: 4, title: "Python Automation Tutorial", category: "tech", readTime: "10 min" },
        { id: 5, title: "Healthy Meal Prep Guide", category: "food", readTime: "6 min" }
    ],
    
    // Category colors and icons
    categories: {
        food: { color: "#e53e3e", name: "Food", icon: "fa-utensils" },
        tech: { color: "#3182ce", name: "Tech", icon: "fa-laptop-code" },
        gaming: { color: "#805ad5", name: "Gaming", icon: "fa-gamepad" }
    }
};

// ====== VISITOR TRACKING ======
const VisitorTracker = {
    init: function() {
        this.loadVisitorData();
        this.incrementVisitor();
        this.updateOnlineUsers();
        this.startLiveUpdates();
    },
    
    loadVisitorData: function() {
        const savedData = localStorage.getItem('visitorStats');
        if (savedData) {
            websiteData.visitorStats = JSON.parse(savedData);
        } else {
            websiteData.visitorStats = {
                totalVisitors: 1,
                todayVisitors: 1,
                thisWeekVisitors: 1,
                thisMonthVisitors: 1,
                onlineNow: 1,
                pageViews: 1,
                lastVisit: new Date().toISOString(),
                visitorHistory: []
            };
            this.saveVisitorData();
        }
    },
    
    incrementVisitor: function() {
        websiteData.visitorStats.totalVisitors++;
        websiteData.visitorStats.pageViews++;
        websiteData.visitorStats.lastVisit = new Date().toISOString();
        this.saveVisitorData();
    },
    
    updateOnlineUsers: function() {
        // Simulate online users
        websiteData.visitorStats.onlineNow = Math.floor(Math.random() * 5) + 1;
        localStorage.setItem('onlineUsers', JSON.stringify({
            count: websiteData.visitorStats.onlineNow,
            timestamp: Date.now()
        }));
    },
    
    startLiveUpdates: function() {
        setInterval(() => {
            this.updateOnlineUsers();
            updateFooterStats();
        }, 30000); // Update every 30 seconds
    },
    
    saveVisitorData: function() {
        localStorage.setItem('visitorStats', JSON.stringify(websiteData.visitorStats));
    }
};

// ====== DOM ELEMENTS ======
let DOM = {};

// ====== UTILITY FUNCTIONS ======
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateLocalStorage() {
    localStorage.setItem('digitalLifeHubData', JSON.stringify({
        visitorCount: websiteData.visitorCount,
        articlesRead: websiteData.articlesRead,
        adViews: websiteData.adViews,
        subscribers: websiteData.subscribers
    }));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('digitalLifeHubData');
    if (saved) {
        const parsed = JSON.parse(saved);
        websiteData.visitorCount = parsed.visitorCount || 0;
        websiteData.articlesRead = parsed.articlesRead || 0;
        websiteData.adViews = parsed.adViews || { ad1: 0, ad2: 0, ad3: 0 };
        websiteData.subscribers = parsed.subscribers || [];
    }
}

// ====== MOBILE ANCHOR LINK FIX ======
function fixMobileAnchorLinks() {
    // Get all anchor links that point to #something
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip empty anchors or external links
            if (targetId === '#' || targetId.includes('://')) return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Prevent default only for smooth scroll
            e.preventDefault();
            
            // Calculate header height
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 80;
            
            // Calculate target position with offset
            const targetPosition = targetElement.getBoundingClientRect().top + 
                                  window.pageYOffset - 
                                  headerHeight - 10;
            
            // Smooth scroll to position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update URL without page reload
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        });
    });
    
    // Fix for page load with hash in URL
    window.addEventListener('load', function() {
        if (window.location.hash) {
            setTimeout(() => {
                const hash = window.location.hash;
                const element = document.querySelector(hash);
                if (element) {
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    const targetPosition = element.getBoundingClientRect().top + 
                                          window.pageYOffset - 
                                          headerHeight - 10;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    });
}

// ====== UPDATE FOOTER STATS ======
function updateFooterStats() {
    // Update visitor count in footer
    const footerVisitors = document.getElementById('total-visitors-footer');
    const footerPageViews = document.getElementById('page-views-footer');
    const footerOnline = document.getElementById('online-now-footer');
    const footerArticles = document.getElementById('article-count-footer');
    
    if (footerVisitors) {
        footerVisitors.textContent = formatNumber(websiteData.visitorStats?.totalVisitors || 1);
    }
    
    if (footerPageViews) {
        footerPageViews.textContent = formatNumber(websiteData.visitorStats?.pageViews || 1);
    }
    
    if (footerOnline) {
        footerOnline.textContent = websiteData.visitorStats?.onlineNow || 1;
    }
    
    if (footerArticles) {
        footerArticles.textContent = websiteData.articles?.length || 0;
    }
    
    // Update last update time
    const lastUpdate = document.getElementById('last-update');
    if (lastUpdate) {
        const now = new Date();
        lastUpdate.textContent = now.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    }
}

// ====== PAGE INITIALIZATION ======
function initPage() {
    // Track page load time
    const startTime = performance.now();
    
    // Cache DOM elements
    cacheDOMElements();
    
    // Load saved data
    loadFromLocalStorage();
    
    // Initialize visitor tracking
    VisitorTracker.init();
    
    // Initialize components
    renderArticles();
    renderTrending();
    updateStats();
    updateFooterStats();
    setupEventListeners();
    simulateAdViews();
    
    // Fix mobile anchor links
    fixMobileAnchorLinks();
    
    // Calculate and display load time
    const loadTime = performance.now() - startTime;
    const loadTimeElement = document.getElementById('load-time');
    if (loadTimeElement) {
        loadTimeElement.textContent = (loadTime / 1000).toFixed(2);
    }
    
    console.log(`${websiteData.siteName} loaded successfully!`);
}

// ====== CACHE DOM ELEMENTS ======
function cacheDOMElements() {
    DOM = {
        articlesContainer: document.getElementById('articles-container'),
        trendingList: document.getElementById('trending-list'),
        loadMoreBtn: document.getElementById('load-more'),
        loadingIndicator: document.getElementById('loading'),
        subscribeBtn: document.getElementById('subscribe-btn'),
        newsletterEmail: document.getElementById('newsletter-email'),
        subscribeMessage: document.getElementById('subscribe-message'),
        mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
        mobileMenu: document.querySelector('.mobile-menu'),
        totalVisitors: document.getElementById('total-visitors'),
        onlineNow: document.getElementById('online-now'),
        articlesRead: document.getElementById('articles-read'),
        recipeCount: document.getElementById('recipe-count'),
        tutorialCount: document.getElementById('tutorial-count'),
        guideCount: document.getElementById('guide-count'),
        totalContent: document.getElementById('total-content'),
        adViews: {
            ad1: document.getElementById('ad1-views'),
            ad2: document.getElementById('ad2-views'),
            ad3: document.getElementById('ad3-views')
        }
    };
}

// ====== RENDER ARTICLES ======
function renderArticles(showAll = false) {
    if (!DOM.articlesContainer) return;
    
    DOM.articlesContainer.innerHTML = '';
    
    // Track how many articles to show
    let articlesToShow;
    if (showAll) {
        // Show all articles
        articlesToShow = websiteData.articles;
    } else {
        // Show only first 6 articles initially
        articlesToShow = websiteData.articles.slice(0, 6);
    }
    
    articlesToShow.forEach(article => {
        const category = websiteData.categories[article.category];
        const articleHTML = `
            <article class="article-card article-${article.category}" data-id="${article.id}">
                <div class="article-image" style="background-image: url('${article.image}')"></div>
                <div class="article-content">
                    <span class="article-category category-${article.category}">
                        <i class="fas ${category.icon}"></i> ${category.name}
                    </span>
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <div class="article-meta" style="display: flex; justify-content: space-between; margin-top: 15px; font-size: 12px; color: var(--gray);">
                        <span><i class="far fa-clock"></i> ${article.readTime} read</span>
                        <span><i class="far fa-calendar"></i> ${article.date}</span>
                    </div>
                    <a href="article.html?id=${article.id}" class="read-more">
                         Read More <i class="fas fa-arrow-right"></i>
                     </a>
                </div>
            </article>
        `;
        
        DOM.articlesContainer.innerHTML += articleHTML;
    });
    
    // Update the "Load More" button text based on how many articles are shown
    if (DOM.loadMoreBtn) {
        const totalArticles = websiteData.articles.length;
        const shownArticles = articlesToShow.length;
        
        if (shownArticles >= totalArticles) {
            // All articles are shown, hide or disable the button
            DOM.loadMoreBtn.disabled = true;
            DOM.loadMoreBtn.textContent = 'All Articles Loaded';
            DOM.loadMoreBtn.style.opacity = '0.6';
            DOM.loadMoreBtn.style.cursor = 'not-allowed';
        } else {
            // More articles available
            DOM.loadMoreBtn.disabled = false;
            DOM.loadMoreBtn.textContent = `Load More Articles (${totalArticles - shownArticles} remaining)`;
            DOM.loadMoreBtn.style.opacity = '1';
            DOM.loadMoreBtn.style.cursor = 'pointer';
        }
    }
}

// ====== RENDER TRENDING ======
function renderTrending() {
    if (!DOM.trendingList) return;
    
    DOM.trendingList.innerHTML = '';
    
    websiteData.trending.forEach((item, index) => {
        const category = websiteData.categories[item.category];
        const trendingHTML = `
            <div class="trending-item" data-id="${item.id}">
                <div class="trending-number">${index + 1}</div>
                <div class="trending-content">
                    <div class="trending-title">${item.title}</div>
                    <div class="trending-meta">
                        <span><i class="fas ${category.icon}"></i> ${category.name}</span>
                        <span><i class="far fa-clock"></i> ${item.readTime}</span>
                    </div>
                </div>
            </div>
        `;
        
        DOM.trendingList.innerHTML += trendingHTML;
    });
    
    // Add click events to trending items - link to corresponding articles
    document.querySelectorAll('.trending-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            // Navigate to the article page
            window.location.href = `article.html?id=${id}`;
        });
    });
}

// ====== UPDATE STATS ======
function updateStats() {
    // Update visitor stats
    if (DOM.totalVisitors) {
        DOM.totalVisitors.textContent = formatNumber(websiteData.visitorStats?.totalVisitors || 1);
    }
    
    if (DOM.onlineNow) {
        DOM.onlineNow.textContent = websiteData.visitorStats?.onlineNow || 1;
    }
    
    if (DOM.articlesRead) {
        DOM.articlesRead.textContent = formatNumber(websiteData.articlesRead || 0);
    }
    
    // Update content counts
    if (DOM.recipeCount) {
        const foodArticles = websiteData.articles.filter(a => a.category === 'food').length;
        DOM.recipeCount.textContent = formatNumber(foodArticles * 25); // Multiply for realistic count
    }
    
    if (DOM.tutorialCount) {
        const techArticles = websiteData.articles.filter(a => a.category === 'tech').length;
        DOM.tutorialCount.textContent = formatNumber(techArticles * 13); // Multiply for realistic count
    }
    
    if (DOM.guideCount) {
        const gamingArticles = websiteData.articles.filter(a => a.category === 'gaming').length;
        DOM.guideCount.textContent = formatNumber(gamingArticles * 33); // Multiply for realistic count
    }
    
    if (DOM.totalContent) {
        const foodCount = parseInt(DOM.recipeCount.textContent.replace(/,/g, '')) || 0;
        const techCount = parseInt(DOM.tutorialCount.textContent.replace(/,/g, '')) || 0;
        const gamingCount = parseInt(DOM.guideCount.textContent.replace(/,/g, '')) || 0;
        DOM.totalContent.textContent = formatNumber(foodCount + techCount + gamingCount);
    }
    
    // Update ad view counts
    if (DOM.adViews.ad1) {
        DOM.adViews.ad1.textContent = formatNumber(websiteData.adViews.ad1 || 0);
    }
    
    if (DOM.adViews.ad2) {
        DOM.adViews.ad2.textContent = formatNumber(websiteData.adViews.ad2 || 0);
    }
    
    if (DOM.adViews.ad3) {
        DOM.adViews.ad3.textContent = formatNumber(websiteData.adViews.ad3 || 0);
    }
}

// ====== SIMULATE AD VIEWS ======
function simulateAdViews() {
    // Increment ad views every 5 seconds
    const adInterval = setInterval(() => {
        if (websiteData.adViews.ad1 !== undefined) {
            websiteData.adViews.ad1 += getRandomNumber(1, 5);
        }
        if (websiteData.adViews.ad2 !== undefined) {
            websiteData.adViews.ad2 += getRandomNumber(1, 3);
        }
        if (websiteData.adViews.ad3 !== undefined) {
            websiteData.adViews.ad3 += getRandomNumber(1, 2);
        }
        
        updateLocalStorage();
        updateStats();
        updateFooterStats();
    }, 5000);
    
    // Store interval ID for cleanup if needed
    window.adSimulationInterval = adInterval;
}

// ====== EVENT HANDLERS ======
function handleSubscribe() {
    const email = DOM.newsletterEmail ? DOM.newsletterEmail.value.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showMessage('Please enter your email address.', 'error');
        return;
    }
    
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    if (websiteData.subscribers.includes(email)) {
        showMessage('You are already subscribed!', 'warning');
        return;
    }
    
    // Simulate API call
    if (DOM.subscribeBtn) {
        DOM.subscribeBtn.disabled = true;
        DOM.subscribeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
    }
    
    setTimeout(() => {
        websiteData.subscribers.push(email);
        updateLocalStorage();
        
        if (DOM.subscribeBtn) {
            DOM.subscribeBtn.disabled = false;
            DOM.subscribeBtn.textContent = 'Subscribe';
        }
        
        if (DOM.newsletterEmail) {
            DOM.newsletterEmail.value = '';
        }
        
        showMessage(`Thank you for subscribing! Welcome to ${websiteData.siteName}.`, 'success');
        
        // Log subscription
        console.log(`New subscriber: ${email}`);
        console.log(`Total subscribers: ${websiteData.subscribers.length}`);
    }, 1500);
}

function showMessage(text, type) {
    if (!DOM.subscribeMessage) return;
    
    DOM.subscribeMessage.textContent = text;
    DOM.subscribeMessage.className = '';
    DOM.subscribeMessage.classList.add(type);
    
    setTimeout(() => {
        DOM.subscribeMessage.textContent = '';
        DOM.subscribeMessage.className = '';
    }, 5000);
}

// ====== LOAD MORE ARTICLES FUNCTION ======
function handleLoadMore() {
    if (!DOM.loadMoreBtn) return;
    
    // Disable button and show loading
    DOM.loadMoreBtn.disabled = true;
    DOM.loadMoreBtn.textContent = 'Loading...';
    if (DOM.loadingIndicator) {
        DOM.loadingIndicator.style.display = 'block';
    }
    
    // Simulate loading delay
    setTimeout(() => {
        // Create more sample articles to load
        const moreArticles = [
            {
                id: websiteData.articles.length + 1,
                category: "food",
                title: "Traditional Ghanaian Banku Recipe with Tilapia",
                excerpt: "Step-by-step guide to making perfect banku and grilled tilapia with shito sauce.",
                image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
                readTime: "15 min",
                date: "March 17, 2024"
            },
            {
                id: websiteData.articles.length + 2,
                category: "tech",
                title: "Free Coding Resources Available in Ghana",
                excerpt: "Discover free coding bootcamps, online courses, and mentorship programs available to Ghanaians.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
                readTime: "8 min",
                date: "March 17, 2024"
            },
            {
                id: websiteData.articles.length + 3,
                category: "gaming",
                title: "How to Stream Games from Ghana with Slow Internet",
                excerpt: "Tips and tricks for streaming gameplay on Twitch/YouTube with Ghana's internet speeds.",
                image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd",
                readTime: "7 min",
                date: "March 17, 2024"
            },
            {
                id: websiteData.articles.length + 4,
                category: "food",
                title: "Healthy Ghanaian Snacks Under GH₵5",
                excerpt: "Affordable, nutritious snacks you can find in local markets across Ghana.",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                readTime: "5 min",
                date: "March 17, 2024"
            },
            {
                id: websiteData.articles.length + 5,
                category: "tech",
                title: "Best Laptops for Students in Ghana (2024 Edition)",
                excerpt: "Detailed review of laptops available in Ghana that offer the best value for money.",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                readTime: "10 min",
                date: "March 17, 2024"
            },
            {
                id: websiteData.articles.length + 6,
                category: "gaming",
                title: "Local Multiplayer Games for Android (No Internet Needed)",
                excerpt: "Perfect games to play with friends during power outages or when data is expensive.",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
                readTime: "6 min",
                date: "March 17, 2024"
            }
        ];
        
        // Add the new articles to our data
        websiteData.articles.push(...moreArticles);
        
        // Re-render ALL articles (including the new ones)
        renderArticles(true); // true means show all articles
        
        // Reset button state
        DOM.loadMoreBtn.disabled = false;
        DOM.loadMoreBtn.textContent = 'Load More Articles';
        if (DOM.loadingIndicator) {
            DOM.loadingIndicator.style.display = 'none';
        }
        
        // Update stats
        updateStats();
        updateFooterStats();
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.style.cssText = 'text-align: center; color: #38a169; margin-top: 10px; font-weight: bold; animation: fadeIn 0.5s;';
        successMsg.innerHTML = `<i class="fas fa-check-circle"></i> ${moreArticles.length} new articles loaded!`;
        DOM.loadMoreBtn.parentNode.appendChild(successMsg);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            successMsg.style.opacity = '0';
            successMsg.style.transition = 'opacity 0.5s';
            setTimeout(() => successMsg.remove(), 500);
        }, 3000);
        
        // Smooth scroll to show new articles
        const articlesContainer = document.getElementById('articles-container');
        if (articlesContainer) {
            const newArticles = articlesContainer.querySelectorAll('.article-card');
            if (newArticles.length > 6) { // If we had more than initial 6 articles
                const lastNewArticle = newArticles[newArticles.length - moreArticles.length];
                lastNewArticle.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
        
        console.log(`Loaded ${moreArticles.length} more articles. Total: ${websiteData.articles.length}`);
        
    }, 1500); // Simulate network delay
}

function toggleMobileMenu() {
    if (!DOM.mobileMenu || !DOM.mobileMenuBtn) return;
    
    DOM.mobileMenu.classList.toggle('active');
    const icon = DOM.mobileMenuBtn.querySelector('i');
    if (DOM.mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// ====== SETUP EVENT LISTENERS ======
function setupEventListeners() {
    // Load more articles
    if (DOM.loadMoreBtn) {
        DOM.loadMoreBtn.addEventListener('click', handleLoadMore);
    }
    
    // Newsletter subscription
    if (DOM.subscribeBtn && DOM.newsletterEmail) {
        DOM.subscribeBtn.addEventListener('click', handleSubscribe);
        DOM.newsletterEmail.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSubscribe();
            }
        });
    }
    
    // Mobile menu
    if (DOM.mobileMenuBtn) {
        DOM.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (DOM.mobileMenu && DOM.mobileMenu.classList.contains('active') &&
            !DOM.mobileMenu.contains(e.target) && 
            DOM.mobileMenuBtn && !DOM.mobileMenuBtn.contains(e.target)) {
            toggleMobileMenu();
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && DOM.mobileMenu && DOM.mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Track ad clicks (simulated)
    document.querySelectorAll('.ad-space').forEach(ad => {
        ad.addEventListener('click', function() {
            // Simulate ad click tracking
            const adId = this.id;
            let adClicks = JSON.parse(localStorage.getItem('adClicks') || '{}');
            adClicks[adId] = (adClicks[adId] || 0) + 1;
            localStorage.setItem('adClicks', JSON.stringify(adClicks));
            
            // Show message
            const messages = [
                "Thanks for checking out our sponsor!",
                "This click helps support free content creation.",
                "Advertisement revenue keeps this site running.",
                "Your click makes a difference - thank you!"
            ];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            
            alert(`🚀 ${randomMsg}\n\nThis would normally take you to the advertiser's website.`);
        });
    });
    
    // Logo click - scroll to top
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Track article card clicks for analytics (optional)
    document.addEventListener('click', function(e) {
        const articleCard = e.target.closest('.article-card');
        if (articleCard && !e.target.closest('.read-more')) {
            const articleId = articleCard.getAttribute('data-id');
            // Track views for articles clicked but not via "Read More"
            let articleClicks = JSON.parse(localStorage.getItem('articleClicks') || '{}');
            articleClicks[articleId] = (articleClicks[articleId] || 0) + 1;
            localStorage.setItem('articleClicks', JSON.stringify(articleClicks));
        }
    });
}

// ====== INITIALIZE WHEN PAGE LOADS ======
document.addEventListener('DOMContentLoaded', initPage);

// ====== CLEANUP ON PAGE UNLOAD ======
window.addEventListener('beforeunload', function() {
    // Clear the ad simulation interval
    if (window.adSimulationInterval) {
        clearInterval(window.adSimulationInterval);
    }
});

// ====== EXPOSE FUNCTIONS FOR GLOBAL USE ======
window.DigitalLifeHub = {
    data: websiteData,
    handleSubscribe,
    updateStats,
    showMessage,
    fixMobileAnchorLinks,
    getStats: function() {
        return {
            visitors: websiteData.visitorStats?.totalVisitors || 0,
            online: websiteData.visitorStats?.onlineNow || 0,
            articles: websiteData.articles.length,
            subscribers: websiteData.subscribers.length
        };
    }
};