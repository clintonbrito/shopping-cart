import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    expect(fetch).toHaveBeenCalled();
  });
  
  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const correctEndpoint = await fetchProductsList('computador');
    expect(correctEndpoint).toBe(computadorSearch);
  });

  it('ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: `Termo de busca não informado`', async () => {
    // const emptyFunction = await fetchProductsList();
    await expect(fetchProductsList()).toThrowError('Termo de busca não informado');
  });
});
