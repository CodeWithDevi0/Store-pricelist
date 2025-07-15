# Store Pricelist - Static + Serverless

A modern web application with static frontend and serverless PHP backend for product listings with live search.

## 🚀 How to Deploy to Vercel

### Step 1: Prepare Your Code
Make sure you have these files in your project:
- ✅ `index.html` (Main page - static)
- ✅ `api/products.php` (API endpoint - serverless)
- ✅ `js/fetch-array.js` (JavaScript functionality)
- ✅ `vercel.json` (Vercel configuration)

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Website (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect it as a static site with serverless functions
6. Click "Deploy"

#### Option B: Using Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. In your project folder: `vercel`
3. Follow the prompts
4. Choose "Other" if asked about framework
5. Deploy!

### Step 3: Test Your Deployment
- Main page: `https://your-app.vercel.app/`
- API endpoint: `https://your-app.vercel.app/api/products`
- Search functionality should work perfectly

## 📁 Project Structure
```
Store-pricelist/
├── index.html             # Main application page (static)
├── vercel.json           # Vercel configuration
├── api/
│   └── products.php      # API endpoint (serverless function)
├── js/
│   └── fetch-array.js    # Search and display logic
└── includes/             # Legacy files (kept for reference)
    ├── products-array.php
    ├── top-content.php
    └── home-page.php
```

## 🔧 Technical Details

### Frontend (Static)
- Pure HTML/CSS/JavaScript
- Bootstrap 5 for styling
- Real-time search functionality
- Responsive design

### Backend (Serverless)
- PHP serverless function in `/api/products.php`
- Returns JSON data
- CORS enabled for cross-origin requests
- No server maintenance required

## 🛠️ Adding New Products
Edit `api/products.php` and add new products to the array:
```php
array(
    'product_name' => 'New Product',
    'product_price' => 15
)
```

## 🌟 Benefits of This Architecture
- ⚡ **Fast**: Static files served from CDN
- 💰 **Cost-effective**: Only pay for API calls
- 🔄 **Scalable**: Automatically scales with traffic
- 🛡️ **Secure**: No server to maintain or secure
- 🌍 **Global**: Available worldwide instantly

Your app is now optimized for Vercel's platform! 🚀 