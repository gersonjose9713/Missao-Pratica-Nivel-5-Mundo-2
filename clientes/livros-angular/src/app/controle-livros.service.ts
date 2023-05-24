import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'A Guerra dos Tronos',
      resumo:
        'A Guerra dos Tronos é o primeiro livro da série de fantasia épica As Crônicas de Gelo e Fogo.',
      autores: ['George R. R. Martin'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Harry Potter e a Pedra Filosofal',
      resumo:
        'Harry Potter e a Pedra Filosofal é o primeiro livro da série Harry Potter, que narra as aventuras de um jovem bruxo chamado Harry Potter.',
      autores: ['J.K. Rowling'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'O Senhor dos Anéis',
      resumo:
        'O Senhor dos Anéis é uma trilogia de fantasia escrita por J.R.R. Tolkien, que se passa em um mundo fictício chamado Terra-média.',
      autores: ['J.R.R. Tolkien'],
    },
  ];

  constructor() {}

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map((l) => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
