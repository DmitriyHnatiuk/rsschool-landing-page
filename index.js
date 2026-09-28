const slider_list = document.getElementById('slider_list');
const slider_button_next = document.getElementById('slider-next');
const slider_button_prev = document.getElementById("slider-prev");
const pagination_buttons = document.getElementById('slider-pagination');

function updatePaginationButtons(index) {
  [...pagination_buttons.children].map(e => {
    e.classList.toggle('active', e.dataset.index === index);
  })
}

function updateSlider(slide) {
  slide.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start'
  });
}

function getSlideByDirection(index) {
  const length = slider_list.children.length;

  if( index < 0 || index === length ) return;

  const slide = slider_list.children[index];

  updateSlider(slide);

  updatePaginationButtons(String(index));
}


const pagination = pagination_buttons?.children || []; 
[...pagination].map((button, index) => button.addEventListener('click', () => {

  updateSlider(slider_list.children[index]),
  updatePaginationButtons(button.dataset.index)

}));

slider_button_next?.addEventListener("click", () => {
  const current_dot = document.querySelector('.slider__indicators.active');
  const current_index = current_dot.dataset.index;

  const next_index = Number(current_index) + 1;

  getSlideByDirection(next_index);
})

slider_button_prev?.addEventListener("click", () => {
  const current_dot = document.querySelector('.slider__indicators.active');
  const current_index = current_dot.dataset.index;

  const next_index = Number(current_index) - 1;
  
  getSlideByDirection(next_index);

});

