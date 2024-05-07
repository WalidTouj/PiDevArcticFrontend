import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandeComponent } from './add-demande.component';

describe('AddDemandeComponent', () => {
  let component: AddDemandeComponent;
  let fixture: ComponentFixture<AddDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
