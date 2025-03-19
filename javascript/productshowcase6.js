const products6 = [
  { name: "Holi Celebration Box", image: "https://picsum.photos/id/227/200/300", price: 1500, discount: 20 },
  { name: "Decorative Diyas Set", image: "https://picsum.photos/id/222/200/300", price: 1000, discount: 15 },
  { name: "Fragrant Incense Pack", image: "https://picsum.photos/id/225/200/300", price: 800, discount: 10 },
  { name: "Traditional Pooja Thali", image: "https://picsum.photos/id/225/200/300", price: 2000, discount: 25 },
  { name: "Hanging Bell Chime", image: "https://picsum.photos/id/288/200/300", price: 500, discount: 5 },
  { name: "Marble Ganesh Idol", image: "https://picsum.photos/id/220/200/300", price: 3000, discount: 30 },
];

  const container6 = document.getElementById('productContainer6');
  
  products6.forEach(product => {
    const discountedPrice = Math.round(product.price - (product.price * product.discount / 100));
  
    const card = document.createElement('div');
    card.className = 'product-card';
  
    card.innerHTML = `
      <div class="product-image" style="background-image: url('${product.image}');">
        <div class="card-top">
          <i class="fas fa-heart"></i>
          <div class="discount-badge">${product.discount}% OFF</div>
        </div>
        <div class="product-price">
          ${product.discount > 0 ? `<span class="original-price">₹${product.price}</span><span class="discounted-price">₹${discountedPrice}</span>` : `<span class="discounted-price">₹${product.price}</span>`}
        </div>
      </div>
      <div class="product-details">
        <h3>${product.name}</h3>
        <button class="add-cart-btn">Add to Cart</button>
      </div>
    `;
  
    container6.appendChild(card);
  });
  