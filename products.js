let allProducts=[];

function addProduct(){
  db.collection("products").add({
    name:name.value,
    price:Number(price.value),
    image:image.value,
    category:category.value.toLowerCase()
  }).then(()=>alert("Added"));
}

db.collection("products").onSnapshot(snap=>{
  allProducts=[];
  snap.forEach(doc=>allProducts.push(doc.data()));
  renderProducts(allProducts);
});

function renderProducts(list){
  let box=document.querySelector(".products");
  if(!box) return;
  box.innerHTML="";
  list.forEach(p=>{
    box.innerHTML+=`
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
      </div>`;
  });
}

function applyFilters(){
  let s=searchInput.value.toLowerCase();
  let min=Number(minPrice.value)||0;
  let max=Number(maxPrice.value)||Infinity;
  let c=categoryFilter.value;

  renderProducts(allProducts.filter(p=>
    p.name.toLowerCase().includes(s) &&
    p.price>=min && p.price<=max &&
    (c=="" || p.category==c)
  ));
}

