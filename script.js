
document.addEventListener("DOMContentLoaded", () => {
function updateCartCount() {
    const count = localStorage.getItem("cartCount")
    document.querySelector(".cart-icon span").innerText = count;
}
updateCartCount();
});





