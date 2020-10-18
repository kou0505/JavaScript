'use strict' 

{
  const NAME = document.getElementById('name');
  const PRICE = document.getElementById('price');
  const IMAGE = document.getElementById('image');

  const NAMI = document.getElementById('nami');


  NAMI.onclick = () => {
    NAME.textContent = 'お弁当-並-';
    PRICE.textContent = '1000';
    IMAGE.setAttribute('src', 'img/nami.png');
  };

  NAMI.addEventListener('mouseenter', () => {
    NAMI.classList.add('btn-lg');
  });
  NAMI.addEventListener('mouseleave', () => {
    NAMI.classList.remove('btn-lg');
  });

  const JOU = document.getElementById('jou');
  JOU.onclick = () => {
    NAME.textContent = 'お弁当-上-';
    PRICE.textContent = '2000';
    IMAGE.setAttribute('src', 'img/jou.png');
  };

  JOU.addEventListener('mouseenter', () => {
    JOU.classList.add('btn-lg');
  });
  JOU.addEventListener('mouseleave', () => {
    JOU.classList.remove('btn-lg');
  });

  const CARTCONFIRM = document.getElementById('cartConfirm');
  const CARTLIST = document.getElementById('cartList');

  CARTCONFIRM.onclick = () => {
    const LI = `<li>${NAME.textContent}</li>`;
    CARTLIST.insertAdjacentHTML('beforeend', LI);
  };
}