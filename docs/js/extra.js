document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor tags with href starting with "http"
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([target="_blank"])');
    
    externalLinks.forEach(function(link) {
        link.setAttribute('target', '_blank'); // Open in new tab
        link.setAttribute('rel', 'noopener noreferrer'); // Security improvement
    });
});

// Function for collapsible warning banners: Toggles the open class on the collapsible content and the rotate class on the arrow to expand/collapse the section.
function toggleCollapse(element) {
const collapsibleContent = element.nextElementSibling;
const arrow = element.querySelector('.arrow');

if (collapsibleContent.classList.contains('open')) {
    collapsibleContent.classList.remove('open');
    arrow.classList.remove('rotate');
} else {
    collapsibleContent.classList.add('open');
    arrow.classList.add('rotate');
}
}

// auto-expand collapsible warning banner on external navigation
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash === '#warning-banner') {
      const banner = document.getElementById('warning-banner');
      if (banner) {
        toggleCollapse(banner);
        banner.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

// auto-expand collapsible warning banner on external navigation
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash === '#alert-banner') {
    const banner = document.getElementById('alert-banner');
    if (banner) {
      toggleCollapse(banner);
      banner.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
  