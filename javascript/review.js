document.addEventListener('DOMContentLoaded', function() {
  const reviews = [
    { username: 'Alice', rating: 5, timeAgo: '2 months ago', text: 'This product is amazing! Highly recommend it.' },
    { username: 'Bob', rating: 4, timeAgo: '1 month ago', text: 'Good quality, but a bit expensive.' },
    { username: 'Charlie', rating: 3, timeAgo: '3 weeks ago', text: 'Average experience. Could be better.' },
    { username: 'David', rating: 5, timeAgo: '1 week ago', text: 'Exceeded my expectations in every way.' },
    { username: 'Eve', rating: 2, timeAgo: '5 days ago', text: 'Not satisfied with the quality.' },
    { username: 'Frank', rating: 4, timeAgo: '3 days ago', text: 'Very good, but there is room for improvement.' },
    { username: 'Grace', rating: 5, timeAgo: '2 days ago', text: 'Absolutely love it! Will buy again.' },
    { username: 'Hannah', rating: 3, timeAgo: '1 day ago', text: 'It’s okay, neither good nor bad.' },
    { username: 'Ian', rating: 4, timeAgo: '12 hours ago', text: 'Quite useful and well-made.' },
    { username: 'Jack', rating: 5, timeAgo: '6 hours ago', text: 'Fantastic product! Highly recommend.' },
    { username: 'Karen', rating: 2, timeAgo: '5 hours ago', text: 'Not what I expected. Disappointed.' },
    { username: 'Leo', rating: 3, timeAgo: '4 hours ago', text: 'Mediocre product, does the job.' },
    { username: 'Mona', rating: 4, timeAgo: '3 hours ago', text: 'Good value for the price.' },
    { username: 'Nina', rating: 5, timeAgo: '2 hours ago', text: 'Exceptional quality and performance.' },
    { username: 'Oscar', rating: 1, timeAgo: '1 hour ago', text: 'Terrible experience. Do not buy.' },
    { username: 'Paul', rating: 4, timeAgo: '45 minutes ago', text: 'Satisfied with the purchase.' },
    { username: 'Quinn', rating: 5, timeAgo: '30 minutes ago', text: 'Outstanding product! Five stars.' },
    { username: 'Rachel', rating: 3, timeAgo: '20 minutes ago', text: 'It’s decent, but nothing special.' },
    { username: 'Sam', rating: 4, timeAgo: '10 minutes ago', text: 'Works as advertised. Happy with it.' },
    { username: 'Tina', rating: 5, timeAgo: 'Just now', text: 'Best purchase I’ve made recently!' }
  ];

  const reviewsContainer = document.getElementById('reviewsContainer');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  // Function to create a review card
  function createReviewCard(review) {
    const card = document.createElement('div');
    card.classList.add('review-card');

    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.textContent = review.username.charAt(0).toUpperCase();
    avatar.style.backgroundColor = getRandomPastelColor();
    card.appendChild(avatar);

    const reviewContent = document.createElement('div');
    reviewContent.classList.add('review-content');

    const username = document.createElement('div');
    username.classList.add('username');
    username.textContent = review.username;
    reviewContent.appendChild(username);

    const ratingTime = document.createElement('div');
    ratingTime.classList.add('rating-time');

    const rating = document.createElement('div');
    rating.classList.add('rating');
    rating.innerHTML = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    ratingTime.appendChild(rating);

    const timeAgo = document.createElement('div');
    timeAgo.classList.add('time-ago');
    timeAgo.textContent = review.timeAgo;
    ratingTime.appendChild(timeAgo);

    reviewContent.appendChild(ratingTime);

    const reviewText = document.createElement('div');
    reviewText.classList.add('review-text');
    reviewText.textContent = review.text;
    reviewContent.appendChild(reviewText);

    card.appendChild(reviewContent);

    return card;
  }

  // Function to generate a random pastel color
  function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
  }

  // Populate the reviews container with review cards
  reviews.forEach(review => {
    const reviewCard = createReviewCard(review);
    reviewsContainer.appendChild(reviewCard);
  });

  // Scroll functionality
  const scrollAmount = 320; // Adjust based on card width and gap

  prevButton.addEventListener('click', () => {
    reviewsContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
    updateNavButtons();
  });

  nextButton.addEventListener('click', () => {
    reviewsContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    updateNavButtons();
  });

  // Optional: Disable buttons at scroll boundaries
  function updateNavButtons() {
    prevButton.disabled = reviewsContainer.scrollLeft === 0;
    nextButton.disabled = reviewsContainer.scrollLeft + reviewsContainer.clientWidth >= reviewsContainer.scrollWidth;
  }

  reviewsContainer.addEventListener('scroll', updateNavButtons);
  window.addEventListener('resize', updateNavButtons);

  // Initialize button states
  updateNavButtons();
});
