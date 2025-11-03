// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Smooth scroll for anchor links with offset for fixed navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navbarHeight = 80; // Height of fixed navbar
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission (basic example)
  const heroForm = document.querySelector('.hero-form');
  if (heroForm) {
    const button = heroForm.querySelector('.btn-primary');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const inputs = heroForm.querySelectorAll('.form-input');
      const name = inputs[0].value;
      const email = inputs[1].value;
      
      if (name && email) {
        alert(`Obrigado ${name}! Verifique seu e-mail ${email} para continuar.`);
        inputs[0].value = '';
        inputs[1].value = '';
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
  }
});