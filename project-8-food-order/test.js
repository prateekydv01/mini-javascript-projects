const items = [
    { id: 1, name: "Burger" },
    { id: 2, name: "Pizza" },
    { id: 3, name: "Fries" },
    { id: 4, name: "Pasta" },
    { id: 5, name: "Coke" }
  ];
  
  const menuElement = document.getElementById("menu");
  
  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name}
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    console.log(item.id)
    menuElement.appendChild(li);
  });
  
  function addToCart(itemId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = items.find(i => i.id === itemId);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  }
  