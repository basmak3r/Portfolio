const textElement = document.getElementById('type-text');

const titles = ['Basil Leju', 'a Software Developer', 'a Photographer'];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentTitle = titles[titleIndex];
  let displayText = currentTitle.slice(0, charIndex);
  textElement.textContent = displayText;

  if (!isDeleting && charIndex < currentTitle.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(type, 300);
    }
  }
}

// Navigation functionality
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const contentSections = document.querySelectorAll('.content-section');
  const mobileContent = document.querySelectorAll('.about-mobile');
  const navContainer = document.querySelector('.nav-container');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.section;
      
      // Add ripple effect
      item.classList.add('clicked');
      setTimeout(() => {
        item.classList.remove('clicked');
      }, 600);
      
      // Remove active class from all nav items
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      // Switch content sections (desktop)
      contentSections.forEach(contentSection => {
        contentSection.classList.remove('active');
      });
      
      const activeSection = document.getElementById(`${section}-section`);
      if (activeSection) {
        activeSection.classList.add('active');
      }
      
      // Switch mobile content
      mobileContent.forEach(mobileSection => {
        mobileSection.classList.remove('active');
      });
      
      const activeMobile = document.getElementById(`${section}-mobile`);
      if (activeMobile) {
        activeMobile.classList.add('active');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  type();
  initNavigation();
});
