function addToCart(name,price){
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to cart");
}

function displayCart(){
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  let total=0;
  document.getElementById("cart-items").innerHTML="";
  cart.forEach(i=>{
    cart-items.innerHTML+=`<p>${i.name} - ₹${i.price}</p>`;
    total+=i.price;
  });
  document.getElementById("total").innerText="Total: ₹"+total;
}
