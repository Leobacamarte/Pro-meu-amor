const milMilhoesBtn = document.querySelector('#milM');

milMilhoesBtn.addEventListener('click', () => {
    window.alert('Eu também te amo mil milhões, meu amor!')
    location.href = "https://www.youtube.com/watch?v=har3c93pJe0";
});

const desvia = (btn) => {
  btn.style.position = 'absolute';
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
  console.log('opa, desviei...');
};

const geraPosicao = (min, max) => {
  return (Math.random() * (max - min) + min) + "%";
};
