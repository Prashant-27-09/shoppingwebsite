document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.previousElementSibling;
    const moreContent = content.querySelector('.more-content');
    const isExpanded = moreContent.style.display === 'inline';

    moreContent.style.display = isExpanded ? 'none' : 'inline';
    button.textContent = isExpanded ? 'Read more' : 'Read less';
  });
});
