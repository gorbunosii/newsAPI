const renderDiscount = (err, data, inputValue) => {
  console.assert; (data);
  if (err) {
    console.warn(err, data);
    return;
  }

  const template = document.createDocumentFragment();
  const container = document.createElement(`div`);
  container.classList = `container search`;

  const titleH2 = document.createElement(`h2`);
  titleH2.classList = `title-new`;
  titleH2.textContent = `По вашему запросу '${inputValue}'
   найдено 8 результатов`;

  const line = document.createElement(`div`);
  line.classList = `line`;

  const goods = data.articles.map(item => {
    const card = document.createElement('div');
    card.className = 'card';
    const cardImg = document.createElement('img');
    if (item.urlToImage) {
      cardImg.src = item.urlToImage;
    } else {
      cardImg.src = 'image/unsplash_xsGxhtAsfSA.jpg';
    }
    cardImg.classList = `cardImg`;

    const cardTitle = document.createElement('a');
    cardTitle.textContent = item.title;
    cardTitle.classList = `cardImg`;
    cardTitle.href = item.url;
    cardTitle.target = `_blank`;

    const cardDescritpion = document.createElement('p');
    cardDescritpion.textContent = item.description;
    cardDescritpion.classList = `cardDescritpion`;

    const cardAuthorAt = document.createElement('div');
    cardAuthorAt.classList = `cardAuthorAt`;
    const cardAuthor = document.createElement('p');
    cardAuthor.textContent = item.author;
    cardAuthor.classList = `cartAuthor`;
    const cardAt = document.createElement('p');
    cardAt.textContent = item.publishedAt;
    cardAt.classList = `cartAt`;
    cardAuthorAt.append(cardAt, cardAuthor);

    card.append(cardImg, cardTitle, cardDescritpion, cardAuthorAt);
    return card;
  });

  container.append(titleH2, line, ...goods);
  template.append(container);

  return template;
};

export default renderDiscount;
