import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-calcular-media',
  styleUrl: './calcular-media.scss',
  templateUrl: './calcular-media.html',
})

export class CalculadoraComponent {
  notaB1: number | null = null;
  notaB2: number | null = null;
  media: number | null = null;
  situacao: string = '';
  erro: string = '';

  calcularMedia(): void {
    if (
      this.notaB1 === null ||
      this.notaB2 === null ||
      this.notaB1 < 0 ||
      this.notaB1 > 100 ||
      this.notaB2 < 0 ||
      this.notaB2 > 100
    ) {
      this.media = null;
      this.situacao = '';
      this.erro = 'Digite notas entre 0 e 100.';
      return;
    }

    this.erro = '';
    this.media = ((this.notaB1 * 2) + (this.notaB2 * 3)) / 5;

    if (this.media >= 60) {
      this.situacao = 'Aprovado(a)!';
    } else if (this.media >= 10) {
      this.situacao = 'Avaliação Final!';
    } else {
      this.situacao = 'Reprovado(a)!';
    }
  }
}
