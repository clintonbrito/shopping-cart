import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const printElements = async () => {
  const result = await fetchProductsList('computador');
  const createProduct = document.querySelector('.products');
  result.forEach((product) => {
    createProduct.appendChild(createProductElement(product));
  });
  return result;
};

// createProductElement();
printElements();
