import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsPage } from './patients.component';

describe('PatientsPage', () => {
  let component: PatientsPage;
  let fixture: ComponentFixture<PatientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
