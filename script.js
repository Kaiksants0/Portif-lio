// Menu hamburguer
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Validação do formulário
const form = document.getElementById('form-contato');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const msg = document.getElementById('mensagem');
const msgErro = document.getElementById('msg-erro');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nome.value === '' || email.value === '' || msg.value === '') {
    msgErro.textContent = "Preencha todos os campos.";
  } else {
    msgErro.textContent = "Mensagem enviada com sucesso!";
    msgErro.style.color = "lightgreen";
    form.reset();
  }
});

// Botão voltar ao topo
const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});