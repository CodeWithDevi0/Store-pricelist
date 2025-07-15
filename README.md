# Store Pricelist - PHP Application

A simple PHP-based product listing application with live search functionality.

## 🚀 How to Deploy to Vercel

### Step 1: Prepare Your Code
Make sure you have these files in your project:
- ✅ `vercel.json` (Vercel configuration)
- ✅ `index.php` (Entry point)
- ✅ `home-page.php` (Main page)
- ✅ `includes/products-array.php` (Product data)
- ✅ `includes/top-content.php` (Header content)
- ✅ `js/fetch-array.js` (JavaScript functionality)

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. In your project folder, run: `vercel`
3. Follow the prompts
4. Choose "Other" for framework
5. Deploy!

#### Option B: Using Vercel Website
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your repository
4. Vercel will automatically detect it's a PHP project
5. Deploy!

### Step 3: Test Your Deployment
- Main page should load at: `https://your-app.vercel.app`
- Search functionality should work
- All product data should display

## 📁 Project Structure
```
Store-pricelist/
├── index.php              # Entry point
├── home-page.php          # Main application page
├── vercel.json            # Vercel configuration
├── includes/
│   ├── products-array.php # Product data & API endpoint
│   └── top-content.php    # Header content
└── js/
    └── fetch-array.js     # Search and display logic
```

## 🔧 Local Development
To test locally:
1. Start a PHP server: `php -S localhost:8000`
2. Open: `http://localhost:8000`

## 🛠️ Adding New Products
Edit `includes/products-array.php` and add new products to the array:
```php
array(
    'product_name' => 'New Product',
    'product_price' => 15
)
``` 