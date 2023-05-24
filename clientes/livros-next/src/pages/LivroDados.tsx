import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Menu } from '../../classes/componentes/Menu';
import ControleEditora from '../../classes/controle/ControleEditora';
import Livro from '../../classes/modelo/Livro';
import ControleLivros from '../../classes/controle/ControleLivros';

const LivroDados = () => {
  const controleEditora: ControleEditora = new ControleEditora();
  const controleLivros: ControleLivros = new ControleLivros();
  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora.toString(),
    text: editora.nome,
  }));

  const [livro, setLivro] = useState<Livro>({
    codigo: null,
    codEditora: Number(opcoes[0].value),
    titulo: '',
    resumo: '',
    autores: [],
  });

  const navigate = useRouter().push;

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    controleLivros.incluirLivro(livro).then(() => {
      navigate('/LivroLista');
    });};

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLivro({ ...livro, codEditora: parseInt(event.target.value) });
  };

  return (
    <div className="container">
      <Head>
        <title>LivroDados</title>
      </Head>
      <Menu />
      <main>
        <h1 className="mt-5 mb-4 text-center">Adição de Livro</h1>

        <form onSubmit={incluir}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">
              Título:
            </label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              value={livro.titulo}
              onChange={e => setLivro({ ...livro, titulo: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">
              Resumo:
            </label>
            <textarea
              className="form-control"
              id="resumo"
              value={livro.resumo}
              onChange={e => setLivro({ ...livro, resumo: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="autores" className="form-label">
              Autores:
            </label>
            <textarea
              className="form-control"
              id="autores"
              value={livro.autores.join('\n')}
              onChange={e =>
                setLivro({ ...livro, autores: e.target.value.split('\n') })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="editora" className="form-label">
              Editora:
            </label>
            <select
              className="form-select"
              id="editora"
              value={livro.codEditora}
              onChange={tratarCombo}
            >
              {opcoes.map(opcao => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-dark">
            Adicionar
          </button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;