const textElement = document.getElementById('type-text');

const titles = [
  "Basil Leju",
  "a Software Developer",
  "a Photographer"
];

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

document.addEventListener('DOMContentLoaded', type);
