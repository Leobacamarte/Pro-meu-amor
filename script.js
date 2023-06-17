const milMilhoesBtn = document.querySelector('#milM');

milMilhoesBtn.addEventListener('click', () => {
    window.alert('Eu também te amo mil milhões, meu amor!')
    location.href = "https://open.spotify.com/playlist/5tv5H3qlPmAg8dBC7kWZuh?si=a8a5717f1d8d4b17";
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
