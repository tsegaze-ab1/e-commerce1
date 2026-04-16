// E-commerce JavaScript Implementation
// ShopEasy - Complete functionality 

// Product Data
const products = [
    //Electronic
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 89.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "High-quality wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Smartphone Pro Max",
        price: 999.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Latest smartphone with advanced camera and performance"
    },
    {
        id: 3,
        name: "Laptop Ultrabook",
        price: 1299.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Lightweight laptop perfect for work and entertainment"
    },
    {
        id: 4,
        name: "Smart Watch Series",
        price: 299.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Advanced smartwatch with health monitoring features"
    },
    
    // Clothing
    {
        id: 5,
        name: "Designer T-Shirt",
        price: 29.99,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Premium cotton t-shirt with modern design"
    },
    {
        id: 6,
        name: "Denim Jeans",
        price: 79.99,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Classic denim jeans with perfect fit"
    },
    {
        id: 7,
        name: "Winter Jacket",
        price: 149.99,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Warm winter jacket with waterproof material"
    },
    {
        id: 8,
        name: "Running Shoes",
        price: 119.99,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Comfortable running shoes with advanced cushioning"
    },
    
    // Home & Garden
    {
        id: 9,
        name: "Coffee Maker Deluxe",
        price: 199.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Professional coffee maker for perfect morning brew"
    },
    {
        id: 10,
        name: "Indoor Plant Set",
        price: 49.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Beautiful indoor plants to brighten your space"
    },
    {
        id: 11,
        name: "Smart Home Hub",
        price: 179.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Control your smart home devices from one place"
    },
    {
        id: 12,
        name: "Garden Tools Set",
        price: 89.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Complete set of professional garden tools"
    },
    
    // Sports
    {
        id: 13,
        name: "Yoga Mat Premium",
        price: 39.99,
        category: "sports",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Non-slip yoga mat for comfortable practice"
    },
    {
        id: 14,
        name: "Dumbbell Set",
        price: 129.99,
        category: "sports",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Adjustable dumbbell set for home workouts"
    },
    {
        id: 15,
        name: "Basketball",
        price: 24.99,
        category: "sports",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Official size basketball for indoor and outdoor play"
    },
    {
        id: 16,
        name: "Fitness Tracker",
        price: 79.99,
        category: "sports",
        image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Track your fitness goals with this advanced tracker"
    }
];

// Shopping Cart
let cart = [];
let currentFilter = 'all';

// DOM Elements
const productGrid = document.getElementById('productGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartDisplay();
    setupEventListeners();
});

// Load products into the grid
function loadProducts(filter = 'all') {
    const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);
    
    productGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    return card;
}

// Filter products by category
function filterProducts(category) {
    currentFilter = category;
    loadProducts(category);
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showCartNotification();
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Update product quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : 'auto';
}

// Show cart notification
function showCartNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1002;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = 'Item added to cart!';
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
        style.remove();
    }, 3000);
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`Checkout Summary:\n\nItems: ${itemCount}\nTotal: $${total.toFixed(2)}\n\nThank you for your purchase!`);
    
    // Clear cart after checkout
    cart = [];
    updateCartDisplay();
    toggleCart();
}

// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

// Setup event listeners
function setupEventListeners() {
    // Close cart when clicking overlay
    cartOverlay.addEventListener('click', toggleCart);
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('active');
        });
    });
    
    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Handle newsletter subscription
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const newsletterButton = newsletterForm.querySelector('button');
        newsletterButton.addEventListener('click', handleNewsletterSubscription);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
}

// Handle newsletter subscription
function handleNewsletterSubscription(e) {
    e.preventDefault();
    
    const emailInput = e.target.parentElement.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email && isValidEmail(email)) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Search functionality (bonus feature)
function searchProducts(query) {
    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    productGrid.innerHTML = '';
    
    if (searchResults.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No products found matching your search.</p>';
        return;
    }
    
    searchResults.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Add search functionality to the page
function addSearchFeature() {
    // Create search input
    const searchContainer = document.createElement('div');
    searchContainer.style.cssText = `
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    `;
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search products...';
    searchInput.style.cssText = `
        padding: 0.8rem 1rem;
        border: 2px solid #ddd;
        border-radius: 25px;
        width: 300px;
        font-size: 1rem;
        outline: none;
    `;
    
    const searchButton = document.createElement('button');
    searchButton.innerHTML = '<i class="fas fa-search"></i>';
    searchButton.style.cssText = `
        background: #3498db;
        color: white;
        border: none;
        padding: 0.8rem 1rem;
        border-radius: 25px;
        margin-left: 0.5rem;
        cursor: pointer;
    `;
    
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchProducts(query);
        } else {
            loadProducts(currentFilter);
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                searchProducts(query);
            } else {
                loadProducts(currentFilter);
            }
        }
    });
    
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    
    // Insert search before product grid
    const productsSection = document.querySelector('.products .container');
    const productFilters = productsSection.querySelector('.product-filters');
    productsSection.insertBefore(searchContainer, productFilters);
}

// Initialize search feature
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addSearchFeature, 100);
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'C' to open cart
    if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.altKey) {
        toggleCart();
    }
    
    // Press 'Escape' to close cart
    if (e.key === 'Escape') {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Add loading animation
function showLoading() {
    const loading = document.createElement('div');
    loading.id = 'loading';
    loading.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    loading.innerHTML = '<div style="font-size: 2rem; color: #3498db;">Loading...</div>';
    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.remove();
    }
}

// Show loading on page load
window.addEventListener('load', function() {
    hideLoading();
});

// Add to favorites functionality (bonus feature)
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function toggleFavorite(productId) {
    const product = products.find(p => p.id === productId);
    const favoriteIndex = favorites.findIndex(fav => fav.id === productId);
    
    if (favoriteIndex > -1) {
        favorites.splice(favoriteIndex, 1);
        alert(`${product.name} removed from favorites`);
    } else {
        favorites.push(product);
        alert(`${product.name} added to favorites`);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleCart = toggleCart;
window.toggleMenu = toggleMenu;
window.scrollToProducts = scrollToProducts;
window.filterProducts = filterProducts;
window.proceedToCheckout = proceedToCheckout;
window.toggleFavorite = toggleFavorite;
