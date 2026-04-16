// Shared JavaScript for all pages
document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileBtn = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ============================================
    // SET ACTIVE LINK BASED ON CURRENT PAGE
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    navLinksItems.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // ============================================
    // GALLERY SHOW MORE BUTTON (only on gallery page)
    // ============================================
    const showMoreBtn = document.getElementById('showMoreBtn');
    if (showMoreBtn) {
        const hiddenItems = document.querySelectorAll('.hidden-item');
        let isShowingMore = false;
        
        showMoreBtn.addEventListener('click', function() {
            isShowingMore = !isShowingMore;
            hiddenItems.forEach(item => {
                if (isShowingMore) {
                    item.style.display = 'block';
                    item.classList.add('show-item');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('show-item');
                }
            });
            if (isShowingMore) {
                showMoreBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Show Less Images <i class="fas fa-chevron-up"></i>';
            } else {
                showMoreBtn.innerHTML = '<i class="fas fa-images"></i> Show More Images <i class="fas fa-chevron-down"></i>';
            }
        });
    }

    // ============================================
    // CONTACT FORM HANDLER (only on contact page)
    // ============================================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formStatus.innerHTML = '✅ Thank you! Your message has been sent. We will respond within 24-48 hours.';
            formStatus.className = 'form-status success';
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
            contactForm.reset();
        });
    }

    // ============================================
    // UPDATE COPYRIGHT YEAR
    // ============================================
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', new Date().getFullYear());
    }

    console.log('WillBry Agro website loaded - Current page: ' + currentPage);
});