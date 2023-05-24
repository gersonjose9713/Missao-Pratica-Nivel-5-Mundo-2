import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  editoras: Editora[] = [];
  livros: Livro[] = [];

  constructor(
    private controleEditoraService: ControleEditoraService,
    private controleLivrosService: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  excluir(codigo: number): void {
    this.controleLivrosService.excluir(codigo);
    this.carregarLivros();
  }

  obterNomeEditora(codEditora: number): string {
    return this.controleEditoraService.getNomeEditora(codEditora);
  }

  private carregarDados(): void {
    this.carregarEditoras();
    this.carregarLivros();
  }

  private carregarEditoras(): void {
    this.editoras = this.controleEditoraService.getEditoras();
  }

  private carregarLivros(): void {
    this.livros = this.controleLivrosService.obterLivros();
  }
}
