// Global variable to store all products data for searching
let productsData = [];

// Function to fetch products data
async function fetchProducts() {
    try {
        // Try the new API endpoint first, fallback to old path
        let response;
        try {
            response = await fetch('/api/products');
        } catch (error) {
            // Fallback to original path
            response = await fetch('includes/products-array.php');
        }
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const products = await response.json();
        
        // IMPORTANT: Store products in global variable for search functionality
        productsData = products;
        
        // Display all products initially
        displayProducts(products);
        
        // Initialize search functionality after data is loaded
        initializeSearch();
        
    } catch (error) {
        console.error('Error fetching products:', error);
        displayError('Failed to load products. Please try again later.');
    }
}

// Function to display products in the container
function displayProducts(products) {
    const container = document.getElementById('products-container');
    
    if (!container) {
        console.error('Products container not found');
        return;
    }
    
    // Clear existing content
    container.innerHTML = '';
    
    // If no products found, show message
    if (products.length === 0) {
        container.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <i class="fas fa-search"></i> No products found matching your search.
            </div>
        `;
        return;
    }
    
    // Create row wrapper
    const row = document.createElement('div');
    row.className = 'row';
    
    // Generate product cards
    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        // //pwede sad butngag .toFixed(2) for 2 decimal places
        col.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${escapeHtml(product.product_name)}</h5>
                    <p class="card-text">
                        <strong>Price: ₱${parseFloat(product.product_price)}</strong> 
                    </p>
                </div>
            </div>
        `;
        
        row.appendChild(col);
    });
    
    container.appendChild(row);
}

// Function to initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (!searchInput) {
        console.log('Search input not found - search functionality disabled');
        return;
    }
    
    // Add event listener for real-time search (when user types)
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        // If search is empty, show all products
        if (searchTerm === '') {
            displayProducts(productsData);
            return;
        }
        
        // Filter products based on search term
        const filteredProducts = productsData.filter(product => 
            product.product_name.toLowerCase().includes(searchTerm)
        );
        
        // Display filtered results
        displayProducts(filteredProducts);
    });
    
    console.log('Search functionality initialized successfully!');
}

// Function to display error message
function displayError(message) {
    const container = document.getElementById('products-container');
    
    if (container) {
        container.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <i class="fas fa-exclamation-triangle"></i> ${message}
            </div>
        `;
    }
}

// Utility function to escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Load products when the page loads
document.addEventListener('DOMContentLoaded', fetchProducts);
