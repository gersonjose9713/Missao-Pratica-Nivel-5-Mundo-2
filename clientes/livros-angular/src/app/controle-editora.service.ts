import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora Atlântica' },
    { codEditora: 2, nome: 'Editora Sol Nascente' },
    { codEditora: 3, nome: 'Editora Vento Verde' },
  ];

  constructor() {}

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(
      (e: Editora) => e.codEditora == codEditora
    );
    return editora?.nome || 'Desconhecido';
  }
}
