// 0. Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 800); // Wait for fade out transition (0.8s)
        }
    }, 2000); // 2s wait to let the loader bar animation finish
});

// 1. Custom Cursor
        const cursorDot = document.getElementById('cursorDot');
        const cursorRing = document.getElementById('cursorRing');

        window.addEventListener('mousemove', (e) => {
            cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        const hoverElements = document.querySelectorAll('a, button, .menu-toggle, .card, .nav-dot, .info-item, .form-control');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });

        // 2. Fullscreen Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const body = document.body;

        menuToggle.addEventListener('click', () => {
            body.classList.toggle('menu-open');
        });

        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', () => {
                body.classList.remove('menu-open');
            });
        });

        // 3. Header Scrolled State
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });

        // 4. Typing Effect
        const typingText = document.getElementById('typing-text');
        const words = ['Fullstack Developer', 'Informatics Student', 'AI Enthusiast'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }
        setTimeout(typeEffect, 1000);

        // 5. Scroll Animations (Reveal)
        const revealElements = document.querySelectorAll('.reveal');
        const revealOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => revealObserver.observe(el));

        // 6. Active Side Navigation Dots
        const sections = document.querySelectorAll('section');
        const navDots = document.querySelectorAll('.nav-dot');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 250) {
                    current = section.getAttribute('id');
                }
            });

            navDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('href').includes(current)) {
                    dot.classList.add('active');
                }
            });
        });

        // Magnetic Effect for Social Links
        const magnetics = document.querySelectorAll('.magnetic-wrap');
        magnetics.forEach(wrap => {
            wrap.addEventListener('mousemove', (e) => {
                const position = wrap.getBoundingClientRect();
                const x = e.clientX - position.left - position.width / 2;
                const y = e.clientY - position.top - position.height / 2;
                wrap.children[0].style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            wrap.addEventListener('mouseleave', () => {
                wrap.children[0].style.transform = 'translate(0px, 0px)';
            });
        });
