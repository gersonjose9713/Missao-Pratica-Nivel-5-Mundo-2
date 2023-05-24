import React, { useState, useEffect } from 'react';
import { Menu } from '../../classes/componentes/Menu';
import Head from 'next/head';
import Livro from '../../classes/modelo/Livro';
import { LinhaLivro } from '../../classes/componentes/LinhaLivro';
import ControleLivros from '../../classes/controle/ControleLivros';

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivros = new ControleLivros();

  useEffect(() => {
    controleLivros
      .obterLivros()
      .then(data => setLivros(data))
      .then(() => setCarregado(true))
      .catch(error => console.log(error));
  });

  const excluirLivro = (codigo: string) => {
    controleLivros
      .excluirLivro(codigo)
      .then(() => controleLivros.obterLivros())
      .then(data => setLivros(data))
      .catch(error => console.log(error))
      .finally(() => setCarregado(false));
  };

  return (
    <div>
      <Head>
        <title>LivroLista</title>
      </Head>
      <Menu />
      <main>
        <h1>Catálogo de Livros</h1>
        {carregado ? (
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Resumo</th>
                <th>Editora</th>
                <th>Autores</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro, index) => (
                <LinhaLivro
                  key={index}
                  livro={livro}
                  excluir={() =>
                    livro.codigo && excluirLivro(livro.codigo.toString())
                  }
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p>Carregando...</p>
        )}
      </main>
    </div>
  );
};

export default LivroLista;