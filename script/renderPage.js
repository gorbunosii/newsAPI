import fetchRequest from './fetchRequest.js';
import renderTop from './renderGoods.js';
import renderSearch from './renderDiscount.js';
import preload from './preload.js';

const main = document.querySelector(`.main`);
const loop = document.querySelector(`.loop`);
const input = document.querySelector(`.input`);
const select = document.querySelector(`.sl`);

const init = () => {
  preload.show();
  return new Promise((resolve) => {
    resolve(fetchRequest(`top-headlines?country=${select.value}&pageSize=8`, {
      callback: renderTop,
    }));
  });
};

loop.addEventListener(`click`, e => {
  preload.show();
  const foo = () => Promise.all([
    fetchRequest(`everything?q=${input.value}&pageSize=8`, {
      callback: renderSearch,
      inputValue: input.value,
    }),
    fetchRequest(`top-headlines?country=${select.value}&pageSize=8`, {
      callback: renderTop,
    }),
  ]);
  foo().then(data => {
    main.textContent = ``;
    main.append(data[0], data[1]);
    preload.remove();
  });
});

init().then(data => {
  main.append(data);
  preload.remove();
});
