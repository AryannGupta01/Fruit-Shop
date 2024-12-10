document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalAmountSpan = document.getElementById("total-amount");

    let cart = [];
    let totalAmount = 0;

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", (event) => {
            const productCard = event.target.parentElement;
            const productName = productCard.getAttribute("data-name");
            const productPrice = parseFloat(productCard.getAttribute("data-price"));

            // Update the cart
            cart.push({ name: productName, price: productPrice });
            totalAmount += productPrice;

            updateCart();
        });
    });

    function updateCart() {
        // Clear the cart container
        cartItemsContainer.innerHTML = "";

        // Add items to the cart container
        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.textContent = `${item.name} - Rs.${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(itemDiv);
        });

        // Update the total amount
        totalAmountSpan.textContent = totalAmount.toFixed(2);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalAmountSpan = document.getElementById("total-amount");
    const checkoutButton = document.getElementById("checkout-button");

    let cart = [];
    let totalAmount = 0;

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", (event) => {
            const productCard = event.target.parentElement;
            const productName = productCard.getAttribute("data-name");
            const productPrice = parseFloat(productCard.getAttribute("data-price"));

            // Update the cart
            cart.push({ name: productName, price: productPrice });
            totalAmount += productPrice;

            updateCart();
        });
    });

    function updateCart() {
        // Clear the cart container
        cartItemsContainer.innerHTML = "";

        // Add items to the cart container
        cart.forEach((item) => {
            const itemDiv = document.createElement("div");
            itemDiv.textContent = `${item.name} - Rs.${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(itemDiv);
        });

        // Update the total amount
        totalAmountSpan.textContent = totalAmount.toFixed(2);
    }

    // Handle checkout
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Add products to checkout.");
            return;
        }

        const orderDetails = {
            cart: cart,
            total: totalAmount.toFixed(2),
        };

        // Save the order details in localStorage (simulates passing data to the payment gateway)
        localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

        // Redirect to the fake payment page
        window.location.href = "payment.html";
    });
});
