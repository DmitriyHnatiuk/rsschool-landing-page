import { createMenuList, createModal } from "./component.js";

const coffee_btn = document.getElementById('coffee-btn');
const tea_btn = document.getElementById('tea-btn');
const dessert_btn = document.getElementById('dessert-btn');

const menu = document.getElementById('menu-container');


function updateSlider(slide) {
  menu.scrollTo({
    left: slide.offsetLeft,
    top: 0,
    behavior: 'smooth'
  });
};


function listeners(stor) {
  const modal_container = document.getElementById('modal-container');
  const modal = document.getElementById('modal');

  const modal_bg = document.getElementById('modal-bg');

  const coffee_list = document.getElementById('coffee-list');
  const tea_list = document.getElementById('tea-list');
  const dessert_list = document.getElementById('dessert-list')


  const handleEsc = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  function closeModal() {
    modal_container ?
      modal_container.classList.add('is-hidden') :
      console.warn(' modal_container  not found!');

    document.documentElement.style.overflow = '';
    window.removeEventListener('keydown', handleEsc);
    modal.replaceChildren();
  }

  function openModal(e) {

    if (e.target.localName === "ul" ||
      e.target.firstChild?.localName === "ul" ||
      e.target.localName === "span") return;

    const card_id = e.target.parentElement.localName === "li" ? e.target.parentElement.dataset.cardId : e.target.parentElement.parentElement.dataset.cardId;

    const card_type = e.target.parentElement.localName === "li" ? e.target.parentElement.dataset.type : e.target.parentElement.parentElement.dataset.type;

    const card_data = stor[card_type].data[card_id]
    modal.append(...createModal(card_data));

    const close_modal = document.getElementById('close-modal');
    close_modal.addEventListener('click', closeModal);

    modal_container ?
      modal_container.classList.remove('is-hidden') :
      console.warn(' modal_container  not found!');

    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
  };


  menu.addEventListener('click', openModal);
  coffee_btn.addEventListener('change', () => updateSlider(coffee_list));
  tea_btn.addEventListener('change', () => updateSlider(tea_list));
  dessert_btn.addEventListener('change', () => updateSlider(dessert_list));

  modal_bg.addEventListener('click', closeModal);
};

function createStor(data) {
  return data.reduce((acc, item, index,) => ({
    ...acc, [item.category]: {
      data: { ...acc[item.category]?.data, [index]: { ...item, index, "img": (acc[item.category]?.data?.length || 0) + 1 }, length: (acc[item.category]?.data?.length || 0) + 1 },
      arr: [...acc[item.category]?.arr || '', index]
    }
  }), {})
}

async function initApp(src) {
  try {
    const response = await fetch(src);
    const data = await response.json();

    return data;

  } catch (e) {
    console.error("Error:", e);
  }
}

function createMenu(data) {
  const menu_container = document.getElementById('menu-container')
  const arrType = Object.keys(data)

  const menu_list = arrType.map(type => createMenuList({ ...data[type], type }));

  menu_container.append(...menu_list);
}

async function renderMenu(src) {
  try {
    const data = await initApp(src);

    const stor = createStor(data);

    createMenu(stor);

    listeners(stor)
  } catch (e) {
    console.error("Error:", e);
  }
};

renderMenu('../store/products.json');