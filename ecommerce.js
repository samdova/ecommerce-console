const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const products = [
    { id: 1, name: 'Sheo', price: 500 },
    { id: 2, name: 'book', price: 150 },
    { id: 3, name: 'laptop', price: 10000 }
];

const options = [
    { id: 1, name: 'Checkout' },
    { id: 2, name: 'Logout' }
];

rl.question('Enter your name: ', function (name) {
    handleUserInput(name);
});

function showProductList() {
    console.log('\nBelow are the available items:');
    products.forEach(product => {
        console.log(`${product.id} - ${product.name} - $${product.price}`);
    });
}

function handleUserInput(name) {
    console.log(`\nWelcome to Samdova Store, ${name}!\n`);

    showProductList();

    rl.question('\nEnter the items you want to add to the cart by there number in front (comma-separated): ', function (selectedItems) {
        const selectedIds = selectedItems.split(',').map(id => parseInt(id.trim()));
        const selectedProducts = products.filter(product => selectedIds.includes(product.id));

        if (selectedProducts.length > 0) {
            console.log('\nItems added to the cart:');
            selectedProducts.forEach(product => {
                console.log(`${product.name} - $${product.price} \nadded to your cart`);
            });

            console.log('\nSelect an option:');
            options.forEach(option => {
                console.log(`${option.id} - ${option.name}`);
            });

            rl.question('Enter the option: ', function (selectedOption) {
                const optionId = parseInt(selectedOption.trim());

                switch (optionId) {
                    case 1:
                        console.log('\nThanks for coming! Checked out -> -> logging out...');
                        rl.close();
                        process.exit();
                        break;
                    case 2:
                        console.log('\nCart  cleared -> -> logging out...');
                        rl.close();
                        process.exit();
                        break;
                    default:
                        console.log('\nInvalid option ID. Please try again.');
                        rl.emit('SIGINT');
                        break;
                }
            });
        } else {
            console.log('\nInvalid item IDs. No items added to the cart. \nWe hope to see you again, have a nice day.');
            rl.close();
        }
    });
}

rl.on('SIGINT', function () {
    console.log('\nThank you for visiting Samdova Store! Goodbye!');
    rl.close();
    process.exit();
});