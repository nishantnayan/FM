document.addEventListener("DOMContentLoaded", function() {
    // You can use IntersectionObserver or other techniques here for scroll tracking
    const sections = document.querySelectorAll('h2, h3, h4');  // Targeting headings
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a class or do something when the section is in view
          document.querySelector('.sidebar a[href="#' + entry.target.id + '"]').classList.add('active');
        } else {
          document.querySelector('.sidebar a[href="#' + entry.target.id + '"]').classList.remove('active');
        }
      });
    }, { threshold: 0.5 }); // Threshold for when to trigger visibility
  
    sections.forEach(section => observer.observe(section));
  });
  