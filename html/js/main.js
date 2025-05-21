// Scroll Reveal Animation
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
    scrollRevealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Initialize scroll reveal
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('[data-mobile-nav-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');

if (mobileNavToggle && mobileNav) {
    mobileNavToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize Lucide Icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Add active class to current navigation item
const currentPath = window.location.pathname;
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('text-primary');
    }
});

// Mobile Menu Logic
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

function openMobileMenu() {
    mobileMenu.classList.add('show');
    mobileMenuBackdrop.classList.add('show');
    mobileMenuBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
    mobileMenu.classList.remove('show');
    mobileMenuBackdrop.classList.remove('show');
    mobileMenuBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
}
if (mobileMenuToggle && mobileMenu && mobileMenuClose && mobileMenuBackdrop) {
    mobileMenuToggle.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
}

// Active Link Highlighting
function setActiveNavLinks() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}
window.addEventListener('DOMContentLoaded', setActiveNavLinks);
window.addEventListener('popstate', setActiveNavLinks);

// Tabs logic
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');
function setActiveTab(tab) {
  tabTriggers.forEach(t => {
    t.classList.remove('bg-white', 'font-bold', 'text-foreground', 'shadow-sm');
    t.classList.add('text-muted-foreground');
  });
  tab.classList.add('bg-white', 'font-bold', 'text-foreground', 'shadow-sm');
  tab.classList.remove('text-muted-foreground');
}
tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', function() {
    setActiveTab(this);
    const tab = this.getAttribute('data-tab');
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });
    document.getElementById('tab-content-' + tab).classList.remove('hidden');
  });
});
// Set default tab
setActiveTab(document.querySelector('.tab-trigger[data-tab="breakfast"]'));
document.querySelector('.tab-trigger[data-tab="breakfast"]').click();

// Menu Filtering and Cart Logic
const menuItems = [
  {
    id: 1,
    category: 'breakfast',
    name: 'Avocado Toast',
    description: 'Sourdough bread topped with smashed avocado, poached eggs, and microgreens.',
    price: 12.95,
    dietary: ['vegetarian'],
    image: 'images/placeholder.svg',
  },
  {
    id: 2,
    category: 'breakfast',
    name: 'Breakfast Bowl',
    description: 'Quinoa, roasted sweet potatoes, kale, avocado, and a soft-boiled egg.',
    price: 14.95,
    dietary: ['gluten-free'],
    image: 'images/placeholder.svg',
  },
  {
    id: 3,
    category: 'breakfast',
    name: 'Buttermilk Pancakes',
    description: 'Fluffy pancakes served with maple syrup and seasonal berries.',
    price: 11.95,
    dietary: ['vegetarian'],
    image: 'images/placeholder.svg',
  },
  {
    id: 4,
    category: 'breakfast',
    name: 'Vegan Breakfast Burrito',
    description: 'Scrambled tofu, black beans, roasted vegetables, and avocado in a whole wheat wrap.',
    price: 13.95,
    dietary: ['vegan'],
    image: 'images/placeholder.svg',
  },
  // Add more items for other categories as needed
];
let cart = [];
function updateCartCount() {
  const cartCount = cart.length;
  let cartBadge = document.getElementById('cart-count');
  if (!cartBadge) {
    // Add cart badge to navbar if not present
    const nav = document.querySelector('nav .container');
    if (nav) {
      const cartBtn = document.createElement('a');
      cartBtn.href = '#';
      cartBtn.className = 'relative ml-4';
      cartBtn.innerHTML = '<i data-lucide="shopping-cart" class="h-6 w-6"></i><span id="cart-count" class="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full px-2 text-xs font-bold">0</span>';
      nav.appendChild(cartBtn);
      lucide.createIcons();
    }
    cartBadge = document.getElementById('cart-count');
  }
  if (cartBadge) cartBadge.textContent = cartCount;
}
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-to-cart')) {
    const card = e.target.closest('.bg-white, .dark\:bg-background');
    const name = card.querySelector('h3').textContent;
    const item = menuItems.find(i => i.name === name);
    if (item) {
      cart.push(item);
      updateCartCount();
    }
  }
}); 