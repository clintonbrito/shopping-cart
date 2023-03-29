import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionProducts = document.querySelector('.products');

const createLoading = () => {
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'loading';
  loadingDiv.textContent = 'carregando...';
  sectionProducts.appendChild(loadingDiv);
};

const createError = () => {
  const errorParagraph = document.createElement('p');
  errorParagraph.className = 'error';
  errorParagraph
    .textContent = 'Algum erro ocorreu, recarregue a página e tente novamente';
  sectionProducts.appendChild(errorParagraph);
};

const removeLoading = () => {
  const capturingLoading = document.querySelector('.loading');
  capturingLoading.remove();
};

const addCart = async (event) => {
  const productId = event.target.parentNode.firstChild.innerHTML;
  saveCartID(productId);
  const productObj = await fetchProduct(productId);
  const createCartElements = createCartProductElement(productObj);
  const cartLocation = document.querySelector('.cart__products');
  cartLocation.appendChild(createCartElements);
};

const printElements = async () => {
  createLoading();
  try {
    const result = await fetchProductsList('computador');
    removeLoading();
    result.forEach((product) => {
      sectionProducts.appendChild(createProductElement(product));
    });
    const productAddButton = document.querySelectorAll('.product__add');
    productAddButton.forEach((element) => element.addEventListener('click', addCart));
    return result;
  } catch (_e) {
    removeLoading();
    createError();
  }
};

// const printElements = async () => {
//   const result = await fetchProductsList('computador');
//   result.forEach((product) => {
//     sectionProducts.appendChild(createProductElement(product));
//   });
//   return result;
// };

// const removeLoading = () => {
//   try {
//     if (!removeLoading) {
//       throw new Error('Algum erro ocorreu, recarregue a página e tente novamente');
//     }
//     const capturingLoading = document.querySelector('.loading');
//     capturingLoading.remove();
//   } catch (err) {
//     throw new Error(err.message);
//   }
// };

// createLoading();
// removeLoading();
await printElements();

// Tive o auxílio do Summer Victor Matias para resolver o 5º requisito.
