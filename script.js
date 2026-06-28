// Total 24 Premium Product Cards (Divided into Categories)
// Verified & Fixed 24 Premium Product Cards Array
const products = [
    // --- CATEGORY: AUDIO GEAR ---
    {
        id: 1,
        title: "Wireless Elite Headphones",
        price: 18900,
        category: "audio",
        imgMain: "img/images (32).jfif",
        imgHover: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500"
    },
    {
        id: 2,
        title: "Aura Studio Earbuds",
        price: 3800,
        category: "audio",
        imgMain: "img/images (33).jfif",
        imgHover: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500"
    },
    {
        id: 3,
        title: "Theater Sound Speakers",
        price: 52000,
        category: "audio",
        imgMain: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        imgHover: "img/images (31).jfif"
    },
    {
        id: 4,
        title: "RGB Soundbar Pro",
        price: 12500,
        category: "audio",
        imgMain: "img/images (29).jfif",
        imgHover: "img/images (30).jfif"
    },

    // --- CATEGORY: PERIPHERALS ---
    {
        id: 5,
        title: "Pro Mechanical Keyboard",
        price: 9500,
        category: "peripherals",
        imgMain: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        imgHover: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500"
    },
    {
        id: 6,
        title: "Premium Gaming Mouse",
        price: 3200,
        category: "peripherals",
        imgMain: "img/images (27).jfif",
        imgHover: "img/images (28).jfif"
    },
    {
        id: 7,
        title: "Durable USB-C Dock",
        price: 6100,
        category: "peripherals",
        imgMain: "img/images (26).jfif",
        imgHover: "img/images (25).jfif"
    },
    {
        id: 8,
        title: "Wireless Trackpad Studio",
        price: 14500,
        category: "peripherals",
        imgMain: "img/images (23).jfif",
        imgHover: "img/images (24).jfif"
    },

    // --- CATEGORY: IMAGING & CAMERAS ---
    {
        id: 9,
        title: "Pro Shooter Camera",
        price: 145000,
        category: "peripherals",
        imgMain: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        imgHover: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500"
    },
    {
        id: 10,
        title: "4K Cinema Prime Lens",
        price: 89000,
        category: "peripherals",
        imgMain: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500",
        imgHover: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=500"
    },
    {
        id: 11,
        title: "Vlogger Ring Light Set",
        price: 4800,
        category: "peripherals",
        imgMain: "img/images (21).jfif",
        imgHover: "img/images (22).jfif"
    },
    {
        id: 12,
        title: "Ultra Stable Gimbal Pro",
        price: 24500,
        category: "peripherals",
        imgMain: "img/images (20).jfif",
        imgHover: "img/images (19).jfif"
    },

    // --- CATEGORY: SMART WEARABLES ---
    {
        id: 13,
        title: "Active Smart Watch",
        price: 7800,
        category: "audio",
        imgMain: "img/images (18).jfif",
        imgHover: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500"
    },
    {
        id: 14,
        title: "Fitness Band Pulse+",
        price: 3900,
        category: "audio",
        imgMain: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
        imgHover: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=500"
    },
    {
        id: 15,
        title: "Noise Isolation Buds",
        price: 5500,
        category: "audio",
        imgMain: "img/images (16).jfif",
        imgHover: "img/images (17).jfif"
    },
    {
        id: 16,
        title: "Premium Leather Straps",
        price: 1800,
        category: "audio",
        imgMain: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500",
        imgHover: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500"
    },

    // --- CATEGORY: GAMING SETUP ITEMS ---
    {
        id: 17,
        title: "Ergonomic Gaming Chair",
        price: 34500,
        category: "peripherals",
        imgMain: "img/images (12).jfif",
        imgHover: "img/images (13).jfif"
    },
    {
        id: 18,
        title: "Curved 144Hz Monitor",
        price: 48000,
        category: "peripherals",
        imgMain: "img/images (14).jfif",
        imgHover: "img/images (15).jfif"
    },
    {
        id: 19,
        title: "Neon XL Mousepad",
        price: 2200,
        category: "peripherals",
        imgMain: "img/il_300x300.7469394082_o0op.webp",
        imgHover: "img/images (11).jfif"
    },
    {
        id: 20,
        title: "Dual Monitor Desk Mount",
        price: 8500,
        category: "peripherals",
        imgMain: "img/images (10).jfif",
        imgHover: "img/images (9).jfif"
    },

    // --- CATEGORY: STORAGE & POWER ---
    {
        id: 21,
        title: "2TB Portable SSD",
        price: 28500,
        category: "peripherals",
        imgMain: "img/images (7).jfif",
        imgHover: "img/images (8).jfif"
    },
    {
        id: 22,
        title: "20000mAh Power Bank",
        price: 4500,
        category: "peripherals",
        imgMain: "img/UGREEN-25683-Power-Bank-20000mAh-22.5W-PD-3.0-Fast-Charging.avif",
        imgHover: "img/images (2).jfif"
    },
    {
        id: 23,
        title: "Braided Fast Charge Cable",
        price: 950,
        category: "peripherals",
        imgMain: "img/images (4).jfif",
        imgHover: "img/images (3).jfif"
    },
    {
        id: 24,
        title: "MagSafe Wireless Charger",
        price: 3600,
        category: "peripherals",
        imgMain: "img/images (5).jfif",
        imgHover: "img/images (6).jfif"
    }
];


// --- Hero Image Auto-Slider Logic (3 Seconds) ---
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function changeHeroImage() {
    // Current active slide se active class mitao
    slides[currentSlideIndex].classList.remove('active');
    
    // Agli slide par jao (agar aakhri slide ho to wapas 0 par le aao)
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    // Nayi slide par active class lagao
    slides[currentSlideIndex].classList.add('active');
}

// 3000ms matlab 3 seconds bad khud change ho
setInterval(changeHeroImage, 3000);

// ==========================================

// Initialize Cart from LocalStorage or empty array
let cart = JSON.parse(localStorage.getItem('myStoreCart')) || [];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items-container');
const totalPriceEl = document.getElementById('total-price');
const cartCountEl = document.getElementById('cart-count');
const searchInput = document.getElementById('search-input');

// Render Products to the UI
function displayProducts(productsToRender) {
    productsContainer.innerHTML = "";
    if(productsToRender.length === 0) {
        productsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: #a0a0a0;">No products found.</p>`;
        return;
    }
    
    productsToRender.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product-card">
                <div class="image-container">
                    <img src="${product.imgMain}" alt="${product.title}" class="product-img img-main">
                    <img src="${product.imgHover}" alt="${product.title}" class="product-img img-hover">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">Rs. ${product.price}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// Toggle Cart Sidebar Open/Close
function toggleCart() {
    cartSidebar.classList.toggle('active');
}

// Add Item to Cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
}

// Change Quantity (+ / -)
function changeQuantity(id, action) {
    const item = cart.find(item => item.id === id);
    if (action === 'increase') {
        item.quantity += 1;
    } else if (action === 'decrease') {
        item.quantity -= 1;
        if (item.quantity === 0) {
            removeFromCart(id);
            return;
        }
    }
    updateCart();
}

// Remove Item from Cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Update Cart UI & LocalStorage
function updateCart() {
    localStorage.setItem('myStoreCart', JSON.stringify(cart));
    renderCartItems();
}

// Render Cart Items
function renderCartItems() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.imgMain}" alt="${item.title}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">Rs. ${item.price}</div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, 'decrease')">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, 'increase')">+</button>
                    </div>
                </div>
                <i class="fas fa-trash remove-item" onclick="removeFromCart(${item.id})"></i>
            </div>
        `;
    });

    totalPriceEl.innerText = `Rs. ${total}`;
    cartCountEl.innerText = count;
}

// Live Search Filtering Logic
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
    updateCart(); // Load local storage items on page load
});