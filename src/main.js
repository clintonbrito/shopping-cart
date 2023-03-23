import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionProducts = document.querySelector('.products');
// const sectionContainer = document.querySelector('.container');

const createLoading = () => {
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'loading';
  loadingDiv.textContent = 'carregando...';
  sectionProducts.appendChild(loadingDiv);
};

const printElements = async () => {
  const result = await fetchProductsList('computador');
  result.forEach((product) => {
    sectionProducts.appendChild(createProductElement(product));
  });
  return result;
};

const removeLoading = () => {
  const capturingLoading = document.querySelector('.loading');
  capturingLoading.remove();
};

createLoading();
await printElements();
removeLoading();
