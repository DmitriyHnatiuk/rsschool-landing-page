const coffee_btn = document.getElementById('coffee-btn');
const tee_btn = document.getElementById('tee-btn');
const desert_btn = document.getElementById('desert-btn');

const coffee_list = document.getElementById('coffee-list');
const tee_list = document.getElementById('tee-list');
const desert_list = document.getElementById('desserts-list');

const menu = document.getElementById('menu-container');
const modal_container = document.getElementById('modal-container');
const close_modal = document.getElementById('close-modal');
const modal_bg = document.getElementById('modal-bg')


function updateSlider(slide) {
  slide.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start'
  });
}

desert_btn.addEventListener('change', () => updateSlider(desert_list));
coffee_btn.addEventListener('change', () => updateSlider(coffee_list));
tee_btn.addEventListener('change', () => updateSlider(tee_list));



menu.addEventListener('click', (e) => {
  modal_container ?
    modal_container.classList.remove('is-hidden') :
    console.warn(' modal_container  not found!');

  document.documentElement.style.overflow = 'hidden';

})
function closeModal (){
  modal_container ?
    modal_container.classList.add('is-hidden') :
    console.warn(' modal_container  not found!');
  
  document.documentElement.style.overflow = '';
}

close_modal.addEventListener('click', closeModal);
modal_bg.addEventListener('click', closeModal)