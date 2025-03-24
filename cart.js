document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.querySelector(".cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" width="50">
                <p>${item.name}</p>
                <p>$${item.price.toFixed(2)}</p>
                <p>Quantity: 
                    <button class="decrease" data-index="${index}">-</button>
                    ${item.quantity}
                    <button class="increase" data-index="${index}">+</button>
                </p>
                <button class="remove" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        totalPriceElement.innerText = `$${total.toFixed(2)}`;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    cartItemsContainer.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        if (e.target.classList.contains("increase")) {
            cart[index].quantity++;
        } else if (e.target.classList.contains("decrease") && cart[index].quantity > 1) {
            cart[index].quantity--;
        } else if (e.target.classList.contains("remove")) {
            cart.splice(index, 1);
        }
        renderCart();
    });

    document.getElementById("clearCart").addEventListener("click", () => {
        localStorage.removeItem("cart");
        location.reload();
    });

    renderCart();
});
