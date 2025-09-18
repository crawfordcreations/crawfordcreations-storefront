// This script takes the product data from products.js and renders it onto the page.

document.addEventListener('DOMContentLoaded', () => {
    // The container where product cards will be injected
    const productGrid = document.getElementById('product-grid');
    
    // Check if the product grid container exists
    if (!productGrid) {
        console.error('Product grid container not found!');
        return;
    }

    // Start with an empty string to build the HTML
    let htmlContent = '';

    // Loop through each product in the `products` array (from products.js)
    for (const product of products) {
        // Use a template literal to create the HTML for one product card
        htmlContent += `
            <div class="bg-gray-800 rounded-lg shadow-2xl overflow-hidden flex flex-col">
                <div class="w-full h-64 bg-gray-700">
                     <img src="${product.imageUrl}" alt="Demo of ${product.name}" class="w-full h-full object-cover">
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-2xl font-bold text-white mb-3">${product.name}</h3>
                    <p class="text-gray-400 mb-6 flex-grow">${product.description}</p>
                    <div class="flex items-center justify-between mt-auto">
                        <span class="text-4xl font-bold gradient-text">${product.price}</span>
                        <a href="${product.purchaseUrl}" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                            Purchase
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // Inject the fully constructed HTML into the product grid
    productGrid.innerHTML = htmlContent;
});