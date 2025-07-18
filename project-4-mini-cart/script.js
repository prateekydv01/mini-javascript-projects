document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {id: 1 , name: "product 1", price: 23.992},
    {id: 2 , name: "product 2", price: 19.52031},
    {id: 3 , name: "product 3", price: 45.0098}
  ]
  
  const cart = []

  const productList=document.getElementById('product-list')
  const cartItems=document.getElementById('cart-items')
  const emptyCartMessage=document.getElementById('empty-cart')
  const cartTotal=document.getElementById('cart-total')
  const totalPriceDisplay=document.getElementById('total-price')
  const checkoutBtn=document.getElementById('checkout-btn')

  products.forEach(product=>{
    const productDiv=document.createElement('div')
    productDiv.classList.add('product')
    productDiv.innerHTML=`
    <span>${product.name} - $${[product.price.toFixed(2)]}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv)
  })

  productList.addEventListener('click',(e)=>{
    if(e.target.tagName==='BUTTON'){
    const productId = parseInt(e.target.getAttribute("data-id"));
    const product = products.find(p=>p.id === productId)
    addToCart(product)
    }
  })
  function addToCart(product){
    cart.push(product);
    console.log(cart)
    renderCart()
  }

  function renderCart(){

    cartItems.innerHTML ="";
    let totalPrice=0

    if(cart.length>0){
      emptyCartMessage.classList.add("hidden")
      cartTotal.classList.remove('hidden')
      cart.forEach((item,index)=>{
        totalPrice+=item.price
        const cartItem = document.createElement('div')
        cartItem.innerHTML=`
        ${item.name} - ${item.price.toFixed(2)}
        `
        cartItems.appendChild(cartItem)
        totalPriceDisplay.textContent=`${totalPrice.toFixed(2)}`
      })
    }else{
      emptyCartMessage.classList.remove("hidden");
      cartTotal.classList.add("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }
  checkoutBtn.addEventListener("click", () => {
    cart.length = 0; 
    alert("Checkout successful!");
    renderCart(); 
  });
  

});

//assigment 
// add remove button in cart which subtracts the total and remove product
// add cart data to local storage so that onr reload it dont get removed