function initAccordion() {
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    const title = section.querySelector('.section-title');
    const content = Array.from(section.children).filter(child => child !== title);
    
    // Initially hide all content except the first section
    if (section !== sections[0]) {
      content.forEach(el => el.style.display = 'none');
    }
    
    title.addEventListener('click', () => {
      // Toggle content visibility
      const isHidden = content[0].style.display === 'none';
      content.forEach(el => el.style.display = isHidden ? 'block' : 'none');
      
      // Optional: Add visual indicator for open/closed state
      title.classList.toggle('active', isHidden);
    });
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initAccordion);