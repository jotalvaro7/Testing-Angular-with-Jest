import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../../src/app/shared/father-son/components/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherSonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('no debe de aparecer botones si no hay cliente', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });

  test('debe de aparecer botones si hay cliente', () => {
    component.client = { id: 1, name: 'Julio' };
    fixture.detectChanges();

    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  test('si hay cliente hacer match con el snapshot', () => {
    component.client = { id: 1, name: 'Julio' };
    fixture.detectChanges();

    expect(compiled).toMatchSnapshot();
  });

  test('debe emitir onDeleteClient con el boton eliminar', () => {
    component.client = { id: 1, name: 'Julio' };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');

    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    btnDelete?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  test('debe emitir onClientUpdate con el boton de cambiar ID', () => {
    component.client = { id: 1, name: 'Julio' };
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdate, 'emit');

    const btnChangeId = compiled.querySelector('[data-test=btn-id]');
    btnChangeId?.dispatchEvent(new Event('click'));

    expect(component.onClientUpdate.emit).toHaveBeenCalledWith({
      id: 2,
      name: 'Julio',
    });
  });

  test('debe emitir onChangeClient con el ID especificado si hay un cliente ', () => {
    jest.spyOn(component.onClientUpdate, 'emit');
    component.onChange(3);
    expect(component.onClientUpdate.emit).not.toHaveBeenCalled();

    component.client = { id: 1, name: 'Julio' };
    fixture.detectChanges();
    component.onChange(2);

    expect(component.onClientUpdate.emit).toHaveBeenCalledWith({
      id: 2,
      name: 'Julio',
    });
  });
});
