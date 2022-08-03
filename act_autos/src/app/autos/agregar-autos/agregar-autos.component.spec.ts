import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAutosComponent } from './agregar-autos.component';

describe('AgregarAutosComponent', () => {
  let component: AgregarAutosComponent;
  let fixture: ComponentFixture<AgregarAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
