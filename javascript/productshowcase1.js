const products = [
  { name: "Holi Celebration Box", image: "https://picsum.photos/id/287/200/300", price: 1500, discount: 20 },
  { name: "Decorative Diyas Set", image: "https://picsum.photos/id/282/200/300", price: 1000, discount: 15 },
  { name: "Aromatic Candle Pack", image: "https://picsum.photos/id/288/200/300", price: 800, discount: 10 },
  { name: "Festive Gift Hamper", image: "https://picsum.photos/id/287/200/300", price: 2000, discount: 25 },
  { name: "Traditional Toran", image: "https://picsum.photos/id/289/200/300", price: 500, discount: 5 },
  { name: "Luxury Pooja Thali", image: "https://picsum.photos/id/280/200/300", price: 3000, discount: 30 },
];

  
  const container = document.getElementById('productContainer1');
  
  products.forEach(product => {
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
  
    container.appendChild(card);
  });
  