import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calcular-media';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate an approved average', () => {
    component.notaB1 = 60;
    component.notaB2 = 60;

    component.calcularMedia();

    expect(component.media).toBe(60);
    expect(component.situacao).toBe('Aprovado(a)!');
    expect(component.erro).toBe('');
  });

  it('should classify an average as final evaluation', () => {
    component.notaB1 = 20;
    component.notaB2 = 20;

    component.calcularMedia();

    expect(component.media).toBe(20);
    expect(component.situacao).toBe('Avaliação Final!');
  });

  it('should classify an average as failed', () => {
    component.notaB1 = 0;
    component.notaB2 = 0;

    component.calcularMedia();

    expect(component.media).toBe(0);
    expect(component.situacao).toBe('Reprovado(a)!');
  });

  it('should reject notes outside the range from 0 to 100', () => {
    component.notaB1 = 101;
    component.notaB2 = 50;

    component.calcularMedia();

    expect(component.media).toBeNull();
    expect(component.situacao).toBe('');
    expect(component.erro).toBe('Digite notas entre 0 e 100.');
  });
});

