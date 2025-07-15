# Store Pricelist - Static + Node.js Serverless

A modern web application with static frontend and Node.js serverless backend for product listings with live search.

## 🚀 How to Deploy to Vercel

### Step 1: Prepare Your Code
Make sure you have these files in your project:
- ✅ `index.html` (Main page - static)
- ✅ `api/products.js` (API endpoint - Node.js serverless)
- ✅ `js/fetch-array.js` (JavaScript functionality)
- ✅ `vercel.json` (Vercel configuration)

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Website (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect it as a static site with Node.js serverless functions
6. Click "Deploy"

#### Option B: Using Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. In your project folder: `vercel`
3. Follow the prompts
4. Deploy!

### Step 3: Test Your Deployment
- Main page: `https://your-app.vercel.app/`
- API endpoint: `https://your-app.vercel.app/api/products`
- Search functionality should work perfectly

## 📁 Project Structure
```
Store-pricelist/
├── index.html             # Main application page (static)
├── vercel.json           # Vercel configuration
├── .vercelignore         # Files to ignore during deployment
├── api/
│   └── products.js       # API endpoint (Node.js serverless function)
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

### Backend (Node.js Serverless)
- Node.js serverless function in `/api/products.js`
- Returns JSON data
- CORS enabled for cross-origin requests
- No server maintenance required
- Guaranteed compatibility with Vercel

## 🛠️ Adding New Products
Edit `api/products.js` and add new products to the array:
```javascript
{
  product_name: 'New Product',
  product_price: 15
}
```

## 🔄 What Changed to Fix Vercel Deployment

### Problem
Vercel was detecting the wrong runtime (Node.js instead of PHP) causing deployment failures.

### Solution
- ✅ **Converted API from PHP to Node.js** - More reliable on Vercel
- ✅ **Simplified configuration** - Removed complex PHP runtime setup
- ✅ **Added fallback logic** - JavaScript tries multiple endpoints
- ✅ **Better error handling** - Clear error messages for users

### Benefits of Node.js Approach
- 🚀 **Instant deployment** - No runtime detection issues
- ⚡ **Faster cold starts** - Node.js starts quicker than PHP
- 🔄 **Better compatibility** - Native Vercel support
- 🛡️ **More reliable** - Standard Vercel serverless approach

## 🌟 Benefits of This Architecture
- ⚡ **Fast**: Static files served from CDN
- 💰 **Cost-effective**: Only pay for API calls
- 🔄 **Scalable**: Automatically scales with traffic
- 🛡️ **Secure**: No server to maintain or secure
- 🌍 **Global**: Available worldwide instantly
- ✅ **Vercel Optimized**: Uses Vercel's preferred technologies

Your app is now fully optimized for Vercel's platform! 🚀 