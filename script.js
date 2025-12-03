
// Тема
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    toggleButton.textContent = body.classList.contains('dark-theme') 
        ? 'Світла тема' 
        : 'Темна тема';
});

// Відмітка цілей
const goals = document.querySelectorAll('.goal');

goals.forEach(goal => {
    goal.addEventListener('click', () => {
        if (goal.textContent.startsWith('🔲')) {
            goal.textContent = '✅ ' + goal.textContent.slice(2);
            goal.style.background = 'rgba(74, 222, 128, 0.3)';
        }
    });
});

// Анімація прогресу при скролі
const skills = document.querySelectorAll('.skill');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.5 });

skills.forEach(skill => {
    skill.style.opacity = '0';
    skill.style.transform = 'translateX(-50px)';
    skill.style.transition = 'all 0.8s ease';
    observer.observe(skill);
});