// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html' || currentPage === '') {
        // Load initial products (all)
        loadHomePageProducts('all');
        // Setup category filter buttons
        setupCategoryFilters();
    } else if (currentPage === 'product.html') {
        loadProductDetails();
    }

    setActiveNavLink();
});

// Keep setActiveNavLink function as is

function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            // Load products for the selected category
            const category = button.getAttribute('data-category');
            loadHomePageProducts(category);
        });
    });
}

// Modify loadHomePageProducts to accept a filter
function loadHomePageProducts(categoryFilter = 'all') { // Default to 'all'
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = ''; // Clear existing content

    // Get products based on the filter
    const productsToShow = getProductsByCategory(categoryFilter); // Use the new function from products.js

    // Use only a subset for the grid display if needed (e.g., random 60)
    // For this example, we'll display all that match the category
    // const displayLimit = 60;
    // const finalProducts = getRandomProducts(productsToShow.length).slice(0, displayLimit);
    const finalProducts = productsToShow; // Display all matching products

    if (finalProducts.length === 0) {
        productGrid.innerHTML = '<p>No products found in this category.</p>';
        return;
    }

    finalProducts.forEach(product => {
        const card = document.createElement('a');
        card.href = `product.html?id=${product.id}`;
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${product.imageUrl || 'images/placeholder.png'}" alt="${product.name}">
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <span class="category">${product.category}</span>
                <span class="price">$${product.price.toFixed(2)}</span>
            </div>
        `;
        productGrid.appendChild(card);
    });
}


// Modify loadProductDetails to use new seller info
function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (!productId) {
        displayProductError("No product ID specified.");
        return;
    }

    const product = findProductById(productId);

    if (!product) {
        displayProductError(`Product with ID ${productId} not found.`);
        return;
    }

    document.title = `${product.name} - Bazar`;

    // Get elements (same as before)
    const productName = document.getElementById('product-name');
    const productCategory = document.getElementById('product-category');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const productImage = document.getElementById('product-image');
    const sellerInfoDiv = document.getElementById('seller-info'); // Get the container div
    const buyButton = document.getElementById('buy-button');
    const contactButton = document.getElementById('contact-button');

    // Populate basic details (same as before)
    if (productName) productName.textContent = product.name;
    if (productCategory) productCategory.textContent = product.category;
    if (productPrice) productPrice.textContent = `$${product.price.toFixed(2)}`;
    if (productDescription) productDescription.innerHTML = `<p>${product.description}</p>`;
    if (productImage) {
        productImage.src = product.imageUrl || 'images/placeholder.png';
        productImage.alt = product.name;
    }

    // Populate seller information
    if (sellerInfoDiv) {
        sellerInfoDiv.innerHTML = `
            <p><strong>Shop Name:</strong> ${product.sellerName || 'N/A'}</p>
            <p><strong>Address:</strong> ${product.sellerAddress || 'N/A'}</p>
            <!-- Optionally display contact number here or only in the alert -->
        `;
    }

    // Update Button Functionality
    if (buyButton) {
        buyButton.onclick = () => {
            alert(`'Buy Now' clicked for ${product.name}.\nThis feature requires backend integration.`);
        };
    }

    // *** UPDATE CONTACT BUTTON ACTION ***
    if (contactButton) {
        contactButton.onclick = () => {
            // Construct the message for the alert
            let contactMessage = `Seller Information:\n--------------------------\n`;
            contactMessage += `Shop: ${product.sellerName || 'Not Available'}\n`;
            contactMessage += `Address: ${product.sellerAddress || 'Not Available'}\n`;
            contactMessage += `Phone: ${product.sellerPhone || 'Not Available'}\n`;
            if (product.sellerContact) { // Include email if available
                 contactMessage += `Email: ${product.sellerContact}\n`;
            }
             contactMessage += `\n(Showing information for demo purposes.)`;

             alert(contactMessage);

             // Alternative: Open email client if email exists
             // if (product.sellerContact) {
             //    window.location.href = `mailto:${product.sellerContact}?subject=Inquiry about ${product.name}`;
             // } else {
             //    alert(contactMessage); // Show alert if no email
             // }
        };
    }
}

// Keep displayProductError function as is
function displayProductError(message) {
    const detailsContainer = document.getElementById('product-details');
    if (detailsContainer) {
        detailsContainer.innerHTML = `<p style="color: red; text-align: center; padding: 20px;">${message}</p>`;
    }
     document.title = "Product Not Found - Bazar";
}

// Helper function (already in products.js but good practice to have access here too or import)
// Ensure findProductById is accessible
function findProductById(id) {
    // In a real app, you'd fetch this from the backend API
    return products.find(p => p.id === parseInt(id));
}

// Ensure getRandomProducts is accessible if you use it in loadHomePageProducts
// function getRandomProducts(arr, count) { ... }

// Ensure getProductsByCategory is accessible
function getProductsByCategory(category) {
    if (!category || category.toLowerCase() === 'all') {
        return products; // Assuming 'products' is globally accessible from products.js
    }
    return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}