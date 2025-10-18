// --- Tilt léger sur la carte hero ---
const hero = document.querySelector('.card.hero');
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;
  hero.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
});
window.addEventListener('mouseleave', () => hero.style.transform = 'none');

// --- Apparition progressive des sections ---
const observer = new IntersectionObserver(entries => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-up').forEach(e => observer.observe(e));

// --- Effet halo sur le titre ---
const title = document.querySelector('.title');
window.addEventListener('mousemove', (e)=>{
  const dx = e.clientX / window.innerWidth * 100;
  const dy = e.clientY / window.innerHeight * 100;
  title.style.setProperty('--mx', dx + '%');
  title.style.setProperty('--my', dy + '%');
});
