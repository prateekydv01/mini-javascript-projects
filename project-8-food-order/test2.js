const cartElement = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartElement.innerHTML = "<li>Cart is empty</li>";
} else {
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    cartElement.appendChild(li);
  });

  // Show checkout button only if cart has items
  checkoutBtn.style.display = "inline-block";
}

// Handle checkout
checkoutBtn.addEventListener("click", () => {
  localStorage.removeItem("cart");
  cartElement.innerHTML = "<li>Thank you for your purchase! 🎉</li>";
  checkoutBtn.style.display = "none";
});
