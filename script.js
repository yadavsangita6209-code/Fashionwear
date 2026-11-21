// Interactive "Add to Bag" button on product.html
const addToBagBtn = document.getElementById('addToBagBtn');
const bagMessage = document.getElementById('bagMessage');

if (addToBagBtn) {
  addToBagBtn.addEventListener('click', function () {
    bagMessage.textContent = 'Item added to your FashionWear bag! (Prototype demo)';
  });
}

// Interactive Contact Form on contact.html
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    formMessage.textContent = 'Thank you! Your message has been received (prototype form – no data stored).';
    contactForm.reset();
  });
}
