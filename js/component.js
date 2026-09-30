
export function createCardComponent(item) {
  const card = document.createElement('li');
  card.className = 'card';
  card.dataset.cardId = item.index;
  card.dataset.type = item.category;

  const img = document.createElement('img');
  img.src = `../assets/images/${item.category}-${item.img}.jpg`;
  img.alt = `Coffee image ${item.img}`;
  img.loading = 'lazy';
  img.className = 'card--img';

  const container = document.createElement('div');
  container.className = 'text--container';


  const title = document.createElement('h2');
  title.className = 'card--name';
  title.textContent = item.name;

  const description = document.createElement('p');
  description.className = 'card--description';
  description.textContent = item.description;


  const price = document.createElement('h3');
  price.className = 'card--price';
  price.textContent = item.price;

  container.append(title, description, price);
  card.append(img, container);

  return card;
}

export function createMenuList(stor) {
  const container = document.createElement('div');
  container.className = 'menu__list';
  container.id = `${stor.type}-list`;


  const list = document.createElement('ul');
  list.className = 'cards--list';

  const items = stor.arr.map(e => createCardComponent(stor.data[e]))

  list.append(...items)

  container.append(list);

  return container;
}

function createInput({ type, id, value, index }) {

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = type;
  input.id = `${type}-${id}`;
  input.className = 'modal__radio-btn';
  input.checked = index < 1;

  const label = document.createElement('label');
  label.htmlFor = `${type}-${id}`;
  label.className = 'modal__radio-label';


  const label_value = document.createElement('span');
  label_value.className = 'value';
  label_value.textContent = type === 'sizes' ? id : Number(id) + 1;

  const label_type = document.createElement('span');
  label_type.className = 'type';
  label_type.textContent = type === 'sizes' ? value.size : value?.name;

  label.append(label_value, label_type);

  return [input, label];
}

function createButtonContainer({ type, data }) {
  const size_container = document.createElement('div');
  size_container.className = type;

  const size_title = document.createElement('p');
  size_title.className = `u-text-m ${type}-title`;
  size_title.textContent = type;

  const size_buttons = document.createElement('div');
  size_buttons.className = `${type}-buttons`;

  type === 'sizes' ? data.map((e, index) => size_buttons.append(...createInput({ ...e, index }))) :
    data.map((e, index) => size_buttons.append(...createInput(
      { type, id: index, value: e, index })));

  size_container.append(size_title, size_buttons);

  return size_container;
}

export function createModal(data) {
  const img = document.createElement('img');
  img.className = 'modal-img';
  img.src = `../assets/images/${data.category}-${data.img}.jpg`;
  img.loading = 'lazy';
  img.alt = `${data.category} img`;

  const description = document.createElement('div');
  description.className = 'modal__description';

  const title = document.createElement('h2');
  title.className = 'u-text-xl modal--title';
  title.textContent = data.name;

  const text = document.createElement('p');
  text.className = 'u-text-m modal-text';
  text.textContent = data.description;

  const sizes = [...Object.entries(data.sizes)].map(([key, value]) => ({ id: key, 'type': 'sizes', value }))

  const sizes_list = createButtonContainer({ type: 'sizes', data: sizes });

  const additives_list = createButtonContainer({ 'type': "additives", data: data.additives })


  const total = document.createElement('div');
  total.className = 'total';

  const total_title = document.createElement('h2');
  total_title.className = 'u-text-l total--title';
  total_title.textContent = 'Total :'

  const total_price = document.createElement('h2');
  total_price.className = 'u-text-l total--price';
  total_price.textContent = data.price;

  total.append(total_title, total_price);

  const info = document.createElement('div');
  info.className = 'info';

  const info_mark = document.createElement('span');
  info_mark.className = 'info-mark';
  info_mark.textContent = 'i';

  const info_text = document.createElement('p');
  info_text.className = 'info--text';
  info_text.textContent = 'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.';

  info.append(info_mark, info_text);

  const btn_close = document.createElement('button');
  btn_close.className = 'bth btn-close';
  btn_close.type = 'button';
  btn_close.id = 'close-modal';
  btn_close.textContent = 'Close';


  description.append(title, text, sizes_list, additives_list, total, info, btn_close);

  return [img, description];

}
