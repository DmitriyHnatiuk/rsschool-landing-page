
export function createCardComponent(item) {
  const card = document.createElement('li');
  card.className = 'card';
  card.dataset.cardId = item.index;

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

