const readline = require('readline');


// Create an interface for reading and writing to the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for their name
rl.question('Enter your name: ', function (name) {
    console.log(`\nWelcome to Samdova Store, ${name}!\n`);

        // Sample Products
        const products = [
            { id: 1, name: 'Sheo', price: 500 },
            { id: 2, name: 'book', price: 150 },
            { id: 3, name: 'laptop', price: 10000 }
        ];
    
        // Display a list of items
        console.log('Below are list of Avaliable Items:');
        products.forEach(product => {
            console.log(`${product.id} - ${product.name} - $${product.price}`);
        });
    
        // Ask the user to select items for the cart
    rl.question('\nEnter the IDs of the items you want to add to the cart (comma-separated): ', function (selectedItems) {
        const selectedIds = selectedItems.split(',').map(id => parseInt(id.trim()));

        // Validate selected item IDs
        const selectedProducts = products.filter(product => selectedIds.includes(product.id));

        if (selectedProducts.length > 0) {
            console.log('\nInput the Items to be added to cart:');
            selectedProducts.forEach(product => {
                console.log(`${product.name} - $${product.price}`);
            });
        } else {
            console.log('\nInvalid item IDs. No items added to the cart.');
        }

        // Close the readline interface
        rl.close();
    });

    
});
