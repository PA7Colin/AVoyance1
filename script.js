const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,   
      modifier: 1,
      slideShadows: false,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
  });


  const horairesTravail = [
    { jour: 'Lundi', ouverture: '08:00', fermeture: '20:00' },
    { jour: 'Mardi', ouverture: '08:00', fermeture: '20:00' },
    { jour: 'Mercredi', ouverture: '08:00', fermeture: '20:00' },
    { jour: 'Jeudi', ouverture: '08:00', fermeture: '20:00' },
    { jour: 'Vendredi', ouverture: '08:00', fermeture: '20:00' },
    { jour: 'Samedi', ouverture: 'FERMER', fermeture: 'FERMER' },
    { jour: 'Dimanche', ouverture: 'FERMER', fermeture: 'FERMER' },
];

function mettreAJourTableau() {
  const tbody = document.querySelector('.info__hour tbody');

  // Supprime les anciennes lignes du tbody
  tbody.innerHTML = '';

  // Ajoute les nouvelles lignes en fonction des données
  horairesTravail.forEach(horaire => {
      const ligne = document.createElement('tr');
      ligne.innerHTML = `<td>${horaire.jour}</td><td>${horaire.ouverture}</td><td>${horaire.fermeture}</td>`;
      tbody.appendChild(ligne);
  });
}
window.onload = () => {
  mettreAJourTableau();
};


// SwiperJS Livre D'or

const swiper1 = new Swiper('.swiper1', {
  effect: 'cards',
  perSlideOffset: 8,
  perSlideRotate: 2,
  rotate: true,
  slideShadows: true,
  grabCursor: true,
});
