
const linkData = [
    { name: "CRYSTAL BRACELETS", image: 'https://picsum.photos/id/101/200/300' },
    { name: "GOD IDOLS", image: 'https://picsum.photos/id/102/200/300' },
    { name: "POOJA ESSENTIALS", image: 'https://picsum.photos/id/103/200/300' },
    { name: "FESTIVE DECOR", image: 'https://picsum.photos/id/104/200/300' },
    { name: "SALT LAMPS", image: 'https://picsum.photos/id/106/200/300' },
    { name: "EVIL EYE", image: 'https://picsum.photos/id/106/200/300' },
    { name: "LAMPS & LANTERNS", image: 'https://picsum.photos/id/107/200/300' },
    { name: "JAP MALAS", image: 'https://picsum.photos/id/108/200/300' },
    { name: "VASTU & YANTRA", image: 'https://picsum.photos/id/109/200/300' },
    { name: "WALL HANGINGS", image: 'https://picsum.photos/id/110/200/300' },
    { name: "PUJA THALI SETS", image: 'https://picsum.photos/id/111/200/300' },
    { name: "INCENSE HOLDERS", image: 'https://picsum.photos/id/112/200/300' },
    { name: "MEDITATION TOOLS", image: 'https://picsum.photos/id/113/200/300' },
    { name: "DECORATIVE BELLS", image: 'https://picsum.photos/id/114/200/300' },
    { name: "CANDLE HOLDERS", image: 'https://picsum.photos/id/115/200/300' },
    { name: "PRAYER KITS", image: 'https://picsum.photos/id/116/200/300' },
    { name: "MANDALA ART", image: 'https://picsum.photos/id/117/200/300' },
    { name: "SPIRITUAL BOOKS", image: 'https://picsum.photos/id/118/200/300' },
    { name: "TORANS", image: 'https://picsum.photos/id/119/200/300' },
    { name: "BELL CHIMES", image: 'https://picsum.photos/id/120/200/300' },
    { name: "HOLY WATER SPRINKLERS", image: 'https://picsum.photos/id/121/200/300' },
    { name: "PRAYER MATS", image: 'https://picsum.photos/id/122/200/300' },
    { name: "AARTI ACCESSORIES", image: 'https://picsum.photos/id/123/200/300' },
    { name: "TABLE DECOR", image: 'https://picsum.photos/id/124/200/300' }
  ];
  
  // Target container
  const gridContainer = document.getElementById('linkGrid');
  
  // Loop through the array
  linkData.forEach(item => {
    // Create wrapper
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('link-item');
  
    // Create image
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.classList.add('circle-img');
  
    // Create name
    const name = document.createElement('p');
    name.textContent = item.name;
    name.classList.add('link-name');
  
    // Append to div
    linkDiv.appendChild(img);
    linkDiv.appendChild(name);
  
    // Append to container
    gridContainer.appendChild(linkDiv);
  });
  



// Data structure for dropdown content
// Data structure for dropdown content
const dropdownData = [
    {
      menuTitle: "HEALING CRYSTAL",
      items: [
        { name: "Crystal Bracelets", image: 'https://picsum.photos/id/287/200/300' },
        { name: "Crystal Necklaces", image: 'https://picsum.photos/id/288/200/300' },
        { name: "Crystal Rings", image: 'https://picsum.photos/id/289/200/300' },
        { name: "Healing Stones", image: 'https://picsum.photos/id/296/200/300' },
        { name: "Chakra Sets", image: 'https://picsum.photos/id/297/200/300' },
        { name: "Crystal Pyramids", image: 'https://picsum.photos/id/291/200/300' },
        { name: "Raw Crystals", image: 'https://picsum.photos/id/299/200/300' },
        { name: "Crystal Clusters", image: 'https://picsum.photos/id/300/200/300' },
        { name: "Crystal Trees", image: 'https://picsum.photos/id/301/200/300' }
      ]
    },
    {
      menuTitle: "HOME DECOR",
      items: [
        { name: "Wall Art", image: 'https://picsum.photos/id/290/200/300' },
        { name: "Vases", image: 'https://picsum.photos/id/291/200/300' },
        { name: "Candles", image: 'https://picsum.photos/id/292/200/300' },
        { name: "Lamps & Lanterns", image: 'https://picsum.photos/id/302/200/300' },
        { name: "Wall Hangings", image: 'https://picsum.photos/id/302/200/300' },
        { name: "Decorative Bells", image: 'https://picsum.photos/id/304/200/300' },
        { name: "Throw Pillows", image: 'https://picsum.photos/id/310/200/300' },
        { name: "Area Rugs", image: 'https://picsum.photos/id/311/200/300' },
        { name: "Picture Frames", image: 'https://picsum.photos/id/312/200/300' }
      ]
    },
    {
      menuTitle: "POOJA ROOM DECOR",
      items: [
        { name: "Idols", image: 'https://picsum.photos/id/293/200/300' },
        { name: "Incense Holders", image: 'https://picsum.photos/id/294/200/300' },
        { name: "Prayer Mats", image: 'https://picsum.photos/id/295/200/300' },
        { name: "Aarti Plates", image: 'https://picsum.photos/id/305/200/300' },
        { name: "Puja Thali Sets", image: 'https://picsum.photos/id/306/200/300' },
        { name: "Diya Holders", image: 'https://picsum.photos/id/307/200/300' },
        { name: "Torans", image: 'https://picsum.photos/id/308/200/300' },
        { name: "Bell Chimes", image: 'https://picsum.photos/id/309/200/300' },
        { name: "Holy Water Sprinklers", image: 'https://picsum.photos/id/313/200/300' }
      ]
    },
   
  ];
  
  
  // Function to create dropdown content
  function createDropdownContent(items) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('link-grid');
  
    items.forEach(item => {
      const linkDiv = document.createElement('div');
      linkDiv.classList.add('link-item');
  
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
  
      const name = document.createElement('p');
      name.textContent = item.name;
  
      linkDiv.appendChild(img);
      linkDiv.appendChild(name);
      gridDiv.appendChild(linkDiv);
    });
  
    return gridDiv;
  }
// Select all list items within the mobile navigation
document.addEventListener('DOMContentLoaded', () => {
    // Select the mobile navigation container
    const mobileNav = document.querySelector('.mobile-nav');
  
    // Check if mobileNav exists
    if (mobileNav) {
      // Iterate over each list item
      mobileNav.querySelectorAll('ul li').forEach(li => {
        const menuTitle = li.querySelector('.menu-title').textContent.trim();
        const dropdown = li.querySelector('.dropdown-content');
  
        // Find matching dropdown data
        const data = dropdownData.find(d => d.menuTitle === menuTitle);
        if (data) {
          const dropdownContent = createDropdownContent(data.items);
          dropdown.appendChild(dropdownContent);
        }
      });
  
      // Delegated event listener for menu-item clicks
      mobileNav.addEventListener('click', event => {
        const menuItem = event.target.closest('.menu-item');
        if (menuItem) {
          const li = menuItem.closest('li');
          const dropdownIcon = menuItem.querySelector('.dropdown-icon');
          const dropdownContent = li.querySelector('.dropdown-content');
  
          // Toggle active class on the list item
          li.classList.toggle('active');
  
          // Toggle rotate class on the dropdown icon
          if (dropdownIcon) {
            dropdownIcon.classList.toggle('rotate');
          }
  
          // Toggle show class on the dropdown content
          if (dropdownContent) {
            dropdownContent.classList.toggle('show');
          }
        }
      });
    }
  });
  