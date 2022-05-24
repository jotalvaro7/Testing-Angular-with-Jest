import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../../src/app/shared/father-son/components/father-son/father-son.component';
import { FatherComponent } from '../../../../src/app/feature/father/components/father/father.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('debe establecer el cliente con el nombre indicado', () => {
    component.onSetClient('Pedro');
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2');
    expect(codeDiv?.textContent).toContain('"name"');
    expect(codeDiv?.textContent).toContain('"Pedro"');
  });

  test('debe de borrar el cliente si se emite onDelete (Hijo)', () => {
    component.client = { id: 1, name: 'Eduardo' };
    fixture.detectChanges();

    //TODO Instancia al hijo y sus propiedades.
    const sonDebugElement = fixture.debugElement.query(
      By.directive(FatherSonComponent)
    );
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;
    sonComponent.onDeleteClient.emit(); //TODO El hijo emite el delete

    //TODO El padre escucha y detecta los cambios
    expect(component.client).toBe(undefined);
  });

  test('debe de actualizar el cliente si se emite onClientUpdated (Hijo)', () => {
    component.client = { id: 1, name: 'Eduardo' };
    fixture.detectChanges();

    //TODO Instancia al hijo y sus propiedades.
    const sonDebugElement = fixture.debugElement.query(
      By.directive(FatherSonComponent)
    );
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;
    sonComponent.onClientUpdate.emit({ id: 10, name: 'Jose' }); //TODO El hijo emite el update

    //TODO El padre escucha y detecta los cambios
    expect(component.client).toEqual({ id: 10, name: 'Jose' });
  });
});
