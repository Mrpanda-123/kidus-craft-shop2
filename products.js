const products = [
  { id: 1, name: "Handmade Necklace", price: 25.99, image: "https://via.placeholder.com/200?text=Necklace" },
  { id: 2, name: "Woven Bag", price: 40.00, image: "https://via.placeholder.com/200?text=Woven+Bag" },
  { id: 3, name: "Traditional Basket", price: 35.50, image: "https://via.placeholder.com/200?text=Basket" }
];

const productList = document.getElementById('product-list');

if(productList) {
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cart.findIndex(item => item.id === id);
  if(index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}
