(function () {
  const frame = document.getElementById('frame');
  const tabs = document.querySelectorAll('.tab');
  const leftImg = document.querySelector('#leftCol .col-img');
  const rightImg = document.querySelector('#rightCol .col-img');

  function setView(view) {
    frame.classList.remove('view-left', 'view-right', 'view-both');
    frame.classList.add('view-' + view);
    tabs.forEach(t => t.classList.remove('active'));
    const active = document.querySelector(`.tab[data-view="${view}"]`);
    if (active) active.classList.add('active');
    if (view === 'left') {
      rightImg.classList.add('img-hidden');
      leftImg.classList.remove('img-hidden');
    } else if (view === 'right') {
      leftImg.classList.add('img-hidden');
      rightImg.classList.remove('img-hidden');
    } else {
      leftImg.classList.remove('img-hidden');
      rightImg.classList.remove('img-hidden');
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => setView(tab.dataset.view));
  });

  setView('left');
})();
