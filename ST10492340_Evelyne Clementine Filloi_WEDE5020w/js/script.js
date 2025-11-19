// 🌸 PRODUCTS DATA - Avec les VRAIS noms et images
const products = [
    // BRACELETS
    { id: 1, name: "Bracelet Lega", price: 25, image: "images/Bracelet lega.jpg", category: "bracelet" },
    { id: 2, name: "Bracelet Theor", price: 19, image: "images/Bracelet Theor.jpg", category: "bracelet" },
    { id: 3, name: "Bracelet Gret", price: 15, image: "images/Bracelet Gret.jpg", category: "bracelet" },
    { id: 4, name: "Bracelet Slim", price: 19, image: "images/BraceletSlim.jpg", category: "bracelet" },
    { id: 5, name: "Bracelet Tiktok", price: 15, image: "images/Bracelet Tiktok.jpg", category: "bracelet" },
    { id: 6, name: "3 Bracelets Together", price: 22, image: "images/3 Bracelet together.jpg", category: "bracelet" },
    { id: 7, name: "Bracelet Gold", price: 19, image: "images/Bracelet 1.jpg", category: "bracelet" },
    { id: 8, name: "Bracelet Mix", price: 15, image: "images/Bracelet 2.jpg", category: "bracelet" },
    { id: 9, name: "Bracelet with Cross", price: 22, image: "images/Bracelet 3.jpg", category: "bracelet" },
    { id: 10, name: "Bracelet 4", price: 22, image: "images/Bracelet 4.jpg", category: "bracelet" },
    
    // RINGS
    { id: 11, name: "Multiple Ring", price: 22, image: "images/Multiple Ring.jpg", category: "ring" },
    { id: 12, name: "Multiple Ring Gold", price: 25, image: "images/Multiple ring Gold.jpg", category: "ring" },
    { id: 13, name: "Chic Ring", price: 22, image: "images/Ring1.jpg", category: "ring" },
    
    // NECKLACES & OTHERS
    { id: 14, name: "Necklace Elegant", price: 25, image: "images/Neclackes.jpg", category: "necklace" },
    { id: 15, name: "Necklace Simple", price: 15, image: "images/Neclackes 1.jpg", category: "necklace" },
    { id: 16, name: "Earrings Sparkle", price: 25, image: "images/Earings.jpg", category: "earrings" },
    { id: 17, name: "Elegant Watch", price: 22, image: "images/Watch.jpg", category: "watch" }
];

// ========== 🛒 CART SYSTEM ==========
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function addToCart(name, price) {
    const cart = getCart();
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    saveCart(cart);
    alert(`${name} added to your basket! 🛍️`);
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

// ========== 🔍 SEARCH FUNCTIONALITY ==========
function searchProducts() {
    const query = document.getElementById("search").value.toLowerCase().trim();
    const resultsContainer = document.getElementById("search-results");
    
    // Masquer les résultats de recherche dropdown
    if (resultsContainer) {
        resultsContainer.style.display = "none";
    }
    
    if (query === "") {
        displayAllProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );
    
    displayFilteredProducts(filteredProducts);
}

function displayAllProducts() {
    const productList = document.getElementById("product-list");
    if (!productList) return;
    
    productList.innerHTML = "";
    
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            <p><strong>${product.name}</strong></p>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function displayFilteredProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    if (!productList) return;
    
    productList.innerHTML = "";
    
    if (filteredProducts.length === 0) {
        productList.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
            No products found for your search 😔<br>
            <small>Try "bracelet", "ring", "necklace" or product names</small>
        </p>`;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            <p><strong>${product.name}</strong></p>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// ========== 🎯 FILTER SYSTEM ==========
function filterByCategory(category) {
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (category === 'all') {
        displayAllProducts();
    } else {
        const filtered = products.filter(product => product.category === category);
        displayFilteredProducts(filtered);
    }
}

// ========== 🧺 BASKET MANAGEMENT ==========
function loadBasket() {
    const cart = getCart();
    const basketContainer = document.getElementById("basket-container");
    const totalElement = document.getElementById("basket-total");

    if (!basketContainer || !totalElement) return;

    basketContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        basketContainer.innerHTML = `
            <p>Your basket is empty 🛒</p>
            <button onclick="showProducts()" style="margin-top: 10px; padding: 10px 20px; background: #d63384; color: white; border: none; border-radius: 5px; cursor: pointer;">
                🛍️ Browse All Products
            </button>
        `;
        totalElement.textContent = "0";
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>$${item.price} × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button onclick="removeItem(${index})">❌ Remove</button>
        `;
        basketContainer.appendChild(div);
        total += item.price * item.quantity;
    });

    totalElement.textContent = total.toFixed(2);
}

function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadBasket();
}

// ========== 🎯 NAVIGATION FUNCTIONS ==========
function showProducts() {
    document.getElementById("product-section").style.display = "block";
    document.getElementById("basket-section").style.display = "none";
    document.getElementById("checkout-section").style.display = "none";
    displayAllProducts();
}

function showBasket() {
    loadBasket();
    document.getElementById("product-section").style.display = "none";
    document.getElementById("basket-section").style.display = "block";
    document.getElementById("checkout-section").style.display = "none";
}

function showCheckout() {
    loadCheckout();
    document.getElementById("product-section").style.display = "none";
    document.getElementById("basket-section").style.display = "none";
    document.getElementById("checkout-section").style.display = "block";
}

function loadCheckout() {
    const cart = getCart();
    const totalElement = document.getElementById("basket-total");

    if (totalElement) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalElement.textContent = total.toFixed(2);
    }

    // Gestion du formulaire de paiement
    const paymentForm = document.getElementById("payment-form");
    if (paymentForm) {
        paymentForm.onsubmit = function(e) {
            e.preventDefault();
            alert("🎉 Thank you for your purchase! Your order has been confirmed.");
            localStorage.removeItem("cart");
            updateCartCount();
            showProducts();
        };
    }
}

// ========== 🚀 INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
    displayAllProducts();
    
    // Enter key support for search
    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                searchProducts();
            }
        });
    }
});

// Enquiry Form Validation and Submission
    function validateEnquiryForm() {
      // Reset previous errors
      document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
      });

      let isValid = true;

      // Validate Full Name
      const fullName = document.getElementById('fullName').value.trim();
      if (fullName.length < 2) {
        document.getElementById('nameError').textContent = 'Please enter your full name';
        isValid = false;
      }

      // Validate Email
      const email = document.getElementById('email').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
      }

      // Validate Message
      const message = document.getElementById('message').value.trim();
      if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Please enter a message with at least 10 characters';
        isValid = false;
      }

      if (isValid) {
        submitEnquiryForm(fullName, email, message);
      }

      return false; // Prevent default form submission
    }

    function submitEnquiryForm(name, email, message) {
      // Here you would normally send the data to your server
      // For now, we'll simulate the submission and show confirmation
      
      // Simulate sending email (in a real project, use a backend service)
      console.log('Enquiry submitted:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', document.getElementById('subject').value);
      console.log('Message:', message);

      // Show confirmation message
      showConfirmation();
      
      // Reset form
      document.getElementById('enquiryForm').reset();
    }

    function showConfirmation() {
      document.getElementById('confirmationMessage').style.display = 'flex';
    }

    function closeConfirmation() {
      document.getElementById('confirmationMessage').style.display = 'none';
    }

    // Close confirmation when clicking outside
    document.getElementById('confirmationMessage').addEventListener('click', function(e) {
      if (e.target === this) {
        closeConfirmation();
      }
    });

    // Contact Form Validation
    function validateContactForm() {
      document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
      });

      let isValid = true;

      // Name validation
      const name = document.getElementById('contactName').value.trim();
      if (name.length < 2) {
        document.getElementById('contactNameError').textContent = 'Please enter your full name';
        isValid = false;
      }

      // Email validation
      const email = document.getElementById('contactEmail').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('contactEmailError').textContent = 'Please enter a valid email address';
        isValid = false;
      }

      // Message validation
      const message = document.getElementById('contactMessage').value.trim();
      if (message.length < 10) {
        document.getElementById('contactMessageError').textContent = 'Please enter a message with at least 10 characters';
        isValid = false;
      }

      if (isValid) {
        submitContactForm();
      }

      return false;
    }

    function submitContactForm() {
      // Simulate form submission
      console.log('Contact form submitted');
      
      // Show confirmation
      document.getElementById('contactConfirmation').style.display = 'flex';
      
      // Reset form
      document.getElementById('contactForm').reset();
    }

    function closeContactConfirmation() {
      document.getElementById('contactConfirmation').style.display = 'none';
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-item h3').forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        
        // Toggle current answer
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
        
        // Close other answers
        document.querySelectorAll('.faq-item p').forEach(otherAnswer => {
          if (otherAnswer !== answer) {
            otherAnswer.style.display = 'none';
            otherAnswer.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
            otherAnswer.previousElementSibling.querySelector('i').classList.remove('fa-chevron-up');
          }
        });
      });
    });

    // Initialize FAQ - hide all answers
    document.querySelectorAll('.faq-item p').forEach(answer => {
      answer.style.display = 'none';
    });

    // Attach form validation
    document.getElementById('contactForm').onsubmit = validateContactForm;

    // Close confirmation when clicking outside
    document.getElementById('contactConfirmation').addEventListener('click', function(e) {
      if (e.target === this) {
        closeContactConfirmation();
      }
    });
    // Simple animation on scroll
    document.addEventListener('DOMContentLoaded', function() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe all sections for animation
      document.querySelectorAll('.mv-card, .value-card, .service-card, .impact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      });
    });
    // Simple animations
    document.addEventListener('DOMContentLoaded', function() {
      // Animate elements on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe cards for animation
      document.querySelectorAll('.product-card, .feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      });

      // Floating animation for hero cards
      const floatingCards = document.querySelectorAll('.floating-card');
      floatingCards.forEach((card, index) => {
        card.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite alternate`;
      });
    });

    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px); }
        100% { transform: translateY(-20px); }
      }
    `;
    document.head.appendChild(style);
    function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" 
           onclick="openLightbox('${product.name}', ${product.price}, '${product.image}')"
           onerror="this.src='images/placeholder.jpg'">
      <div class="product-overlay">
        <button class="quick-view" onclick="openLightbox('${product.name}', ${product.price}, '${product.image}')">
          <i class="fas fa-eye"></i>
          Quick View
        </button>
        <button class="add-to-cart-overlay" onclick="addToCart('${product.name}', ${product.price})">
          <i class="fas fa-shopping-cart"></i>
          Add to Cart
        </button>
      </div>
      <div class="product-badge">New</div>
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-category">${product.category}</p>
      <div class="product-price">$${product.price}</div>
      <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.price})">
        <i class="fas fa-shopping-cart"></i>
        Add to Cart
      </button>
    </div>
  `;
  return card;
}
// Lightbox functionality
let currentLightboxIndex = 0;
let lightboxProducts = [];

function openLightbox(productName, productPrice, productImage) {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxPrice = document.getElementById('lightbox-price');
  
  // Set lightbox content
  lightboxImage.src = productImage;
  lightboxImage.alt = productName;
  lightboxTitle.textContent = productName;
  lightboxPrice.textContent = `$${productPrice}`;
  
  // Store current product info for add to cart
  currentLightboxProduct = { name: productName, price: productPrice };
  
  // Find current index for navigation
  lightboxProducts = products;
  currentLightboxIndex = products.findIndex(p => p.name === productName);
  
  // Show lightbox
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

function changeLightboxImage(direction) {
  currentLightboxIndex += direction;
  
  // Loop around if at ends
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = lightboxProducts.length - 1;
  } else if (currentLightboxIndex >= lightboxProducts.length) {
    currentLightboxIndex = 0;
  }
  
  const product = lightboxProducts[currentLightboxIndex];
  openLightbox(product.name, product.price, product.image);
}

function addToCartFromLightbox() {
  if (currentLightboxProduct) {
    addToCart(currentLightboxProduct.name, currentLightboxProduct.price);
    // Optional: Show confirmation in lightbox
    showLightboxConfirmation();
  }
}

function showLightboxConfirmation() {
  const button = document.querySelector('.add-to-cart-lightbox');
  const originalText = button.innerHTML;
  
  button.innerHTML = '<i class="fas fa-check"></i> Added to Cart!';
  button.style.background = '#28a745';
  
  setTimeout(() => {
    button.innerHTML = originalText;
    button.style.background = '';
  }, 2000);
}

// Close lightbox when clicking outside image
document.getElementById('lightbox-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  const lightbox = document.getElementById('lightbox-modal');
  if (lightbox.style.display === 'flex') {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      changeLightboxImage(-1);
    } else if (e.key === 'ArrowRight') {
      changeLightboxImage(1);
    }
  }
});