class Livro {
  codigo: string | null;
  titulo: string;
  codEditora: number;
  resumo: string;
  autores: string[];

  constructor(
    codigo: string | null,
    titulo: string,
    codEditora: number,
    resumo: string,
    autores: string[]
  ) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.codEditora = codEditora;
    this.resumo = resumo;
    this.autores = autores;
  }
}

export default Livro;
