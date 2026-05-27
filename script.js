
        // Simple Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        
        // Console Greeting for potential tech-savvy employers
        console.log("%cLike what you see? Let's work together.", "color: #000; font-size: 20px; font-weight: bold;");
