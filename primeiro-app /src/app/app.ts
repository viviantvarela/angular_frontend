import { Component, signal } from '@angular/core';
import { ExibeMensagem } from './exibe-mensagem/exibe-mensagem';

@Component({
  imports: [ExibeMensagem],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('primeiro-app');
}
