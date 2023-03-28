import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Verifica se `fetchProduct` é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('O fetch foi chamado quando a função `fetchProduct` é chamada com o argumento `MLB1405519561`', async () => {
    // const data = await fetchProduct('MLB1405519561');
    // expect(data).toBe('https://api.mercadolibre.com/items/MLB1405519561');
    await expect(fetchProduct('MLB1405519561')).resolves.toBe('https://api.mercadolibre.com/items/MLB1405519561');
  });
  it('O retorno da função `fetchProduct` com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo', async () => {
    const correctEndpoint = await fetchProduct('MLB1405519561');
    expect(correctEndpoint).toBe(product);
  });
  it('Ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: `ID não informado`', async () => {
    // Usando try e catch com async functions: https://jestjs.io/docs/asynchronous
    expect.assertions(1);
    try {
      await fetchProduct();
    } catch (e) {
      expect(e).toMatch('ID não informado');
    }
  });
});
