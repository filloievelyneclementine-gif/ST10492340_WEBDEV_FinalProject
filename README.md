# 💎 Velvet Gleam - Luxury Jewelry E-Commerce

![Velvet Gleam Banner](https://via.placeholder.com/1200x400/ffeef8/d63384?text=Velvet+Gleam+-+Luxury+Jewelry)

A sophisticated, fully responsive e-commerce website for Velvet Gleam luxury jewelry brand. Built with modern web technologies and featuring an elegant, user-friendly shopping experience.

## ✨ Features

### 🛍️ E-Commerce Functionality
- **Product Catalog** - Beautiful grid layout with filtering and search
- **Shopping Cart** - Persistent cart with local storage
- **Checkout Process** - Secure payment form with validation
- **Product Search** - Real-time search with instant results
- **Category Filtering** - Filter by bracelet, ring, necklace, etc.

### 🎨 User Experience
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Professional Animations** - Smooth transitions and hover effects
- **Intuitive Navigation** - Easy-to-use interface

### 📱 Pages Included
- **Homepage** - Hero section, featured products, brand story
- **Products** - Complete catalog with search and filters
- **About Us** - Brand story, mission, and values
- **Contact** - Multiple contact methods with interactive form
- **Enquiry** - Customer support form with validation

## 🚀 Live Demo

[View Live Website](https://your-username.github.io/velvet-gleam)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome 6.0
- **Styling**: Custom CSS with CSS Grid & Flexbox
- **Storage**: Local Storage for cart persistence
- **Responsive**: Mobile-first design approach

## 📁 Project Structure
velvet-gleam/
├── index.html (Homepage)
├── Product.html
├── About.html
├── Contact.html
├── Enquiry.html
├── css/
│ └── styles.css (All styles)
├── js/
│ └── script.js (All functionality)
├── images/
│ ├── velvet_gleam.jpg (Logo)
│ ├── Bracelet lega.jpg
│ ├── Bracelet Theor.jpg
│ ├── Multiple Ring.jpg
│ └── ... (All product images)
└── README.md

text

## 🎯 Key Features Breakdown

### Product Management
```javascript
// Sample product data structure
const products = [
  {
    id: 1,
    name: "Bracelet Lega",
    price: 25,
    image: "images/Bracelet lega.jpg",
    category: "bracelet"
  }
  // ... more products
];
Shopping Cart

Add/remove items
Quantity management
Persistent storage
Total calculation
Checkout process
Search & Filter

Real-time product search
Category-based filtering
No results handling
Search suggestions
🖥️ Installation & Setup

Clone the repository

bash
git clone https://github.com/your-username/velvet-gleam.git
Navigate to project directory

bash
cd velvet-gleam
Open in browser

Simply open index.html in your web browser
Or use a local server for better performance
For Local Development Server

bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
Then visit http://localhost:8000 in your browser.

📱 Responsive Breakpoints

Desktop: 1200px and above
Tablet: 768px - 1199px
Mobile: 320px - 767px
🎨 Color Scheme

Color	Usage	Hex Code
Primary	Brand color, buttons, accents	#d63384
Secondary	Gradients, highlights	#8a2be2
Background	Page background	#f9f3f3
Text	Primary text	#333333
Text	Secondary text	#666666
🔧 Customization

Adding New Products

Add product image to images/ folder
Update the products array in js/script.js:
javascript
{
  id: 18,
  name: "Your Product Name",
  price: 29,
  image: "images/your-image.jpg",
  category: "category-name"
}
Modifying Colors

Edit the CSS variables in styles.css:

css
:root {
  --primary-color: #d63384;
  --secondary-color: #8a2be2;
  --background-color: #f9f3f3;
}
Adding New Categories

Update category filters in Product.html
Add filter button in the category section
Update the filterByCategory() function
📞 Contact Information

Email: velvetgleam2025@gmail.com
WhatsApp: +27 60 205 7704
Address: 1352 Underwood Farms Blvd, Gahanna, OH 43230
Business Hours: Mon-Fri 9AM-6PM EST
🌐 Social Media

Instagram
Facebook
TikTok
Pinterest
🤝 Contributing

We welcome contributions! Please feel free to:

Fork the project
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details.

🚀 Deployment

GitHub Pages

Push your code to GitHub
Go to repository Settings → Pages
Select "Deploy from branch" and choose main branch
Your site will be available at https://your-username.github.io/velvet-gleam
Netlify

Drag and drop your project folder to Netlify
Or connect your GitHub repository for automatic deployments
🐛 Known Issues

Image optimization needed for faster loading
Could benefit from a backend for order management
Payment integration would require secure server-side processing
🔮 Future Enhancements

Backend integration with Node.js/Express
User authentication and accounts
Order history and tracking
Product reviews and ratings
Wishlist functionality
Advanced product filtering
Payment gateway integration
Admin dashboard
Inventory management
Email notifications
👥 Team

Evy - Founder & CEO
Development - [Your Name]
🙏 Acknowledgments

Font Awesome for beautiful icons
Modern CSS techniques for responsive design
JavaScript ES6+ features for enhanced functionality
<div align="center">
Made with 💖 for fashion lovers everywhere

Crafting elegance, empowering stories
