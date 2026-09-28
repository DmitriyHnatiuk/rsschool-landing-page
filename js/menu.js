const coffee_btn = document.getElementById('coffee-btn');
const tee_btn = document.getElementById('tee-btn');
const desert_btn = document.getElementById('desert-btn');

const coffee_list = document.getElementById('coffee-list');
const tee_list = document.getElementById('tee-list');
const desert_list = document.getElementById('desserts-list');

function updateSlider(slide) {
  slide.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start'
  });
}

desert_btn.addEventListener("change", ()=> updateSlider(desert_list));
coffee_btn.addEventListener("change",()=>updateSlider(coffee_list));
tee_btn.addEventListener("change",  ()=> updateSlider(tee_list));
