const products2 = [
  { name: "Floral Holi Box", image: "https://picsum.photos/id/297/200/300", price: 1500, discount: 20 },
  { name: "Handcrafted Lantern", image: "https://picsum.photos/id/292/200/300", price: 1000, discount: 15 },
  { name: "Colorful Rangoli Kit", image: "https://picsum.photos/id/295/200/300", price: 800, discount: 10 },
  { name: "Premium Gift Basket", image: "https://picsum.photos/id/297/200/300", price: 2000, discount: 25 },
  { name: "Festive Wall Hanging", image: "https://picsum.photos/id/296/200/300", price: 500, discount: 5 },
  { name: "Elegant Candle Stand", image: "https://picsum.photos/id/290/200/300", price: 3000, discount: 30 },
];

  
  const container2 = document.getElementById('productContainer2');
  
  products2.forEach(product => {
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
  
    container2.appendChild(card);
  });
  