document.addEventListener('DOMContentLoaded', () => {
    const copyIpBtn = document.getElementById('copy-ip-btn');
    const serverIpEl = document.getElementById('server-ip');

    if (copyIpBtn && serverIpEl) {
        const serverIp = serverIpEl.textContent;
        copyIpBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(serverIp).then(() => {
                const originalText = copyIpBtn.textContent;
                copyIpBtn.textContent = 'Copied!';
                copyIpBtn.style.backgroundColor = '#fff';
                copyIpBtn.style.color = '#000';
                
                setTimeout(() => {
                    copyIpBtn.textContent = originalText;
                    copyIpBtn.style.color = '';
                    copyIpBtn.style.backgroundColor = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy IP: ', err);
                alert('Failed to copy IP address.');
            });
        });
    }

    // Music functionality
    const backgroundMusic = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    let musicPlaying = false;

    // Auto-play music (with user interaction requirement)
    document.addEventListener('click', () => {
        if (!musicPlaying) {
            backgroundMusic.play().then(() => {
                musicPlaying = true;
                musicToggle.textContent = '🔊';
            }).catch(err => {
                console.log('Auto-play prevented:', err);
            });
        }
    }, { once: true });

    // Music toggle button
    musicToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggle.textContent = '🔊';
            musicToggle.classList.remove('muted');
        } else {
            backgroundMusic.pause();
            musicToggle.textContent = '🔇';
            musicToggle.classList.add('muted');
        }
    });

    // Page navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetPage = link.getAttribute('data-page');
            
            // Remove active class from all nav links and pages
            navLinks.forEach(nl => nl.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active class to clicked nav link and corresponding page
            link.classList.add('active');
            document.getElementById(`${targetPage}-page`).classList.add('active');
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Gallery item click animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = '';
            }, 150);
        });
    });

    // Add entrance animation delay to sections
    const sections = document.querySelectorAll('main section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});