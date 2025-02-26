import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UClientsComponent } from './u-clients.component';

describe('UClientsComponent', () => {
  let component: UClientsComponent;
  let fixture: ComponentFixture<UClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UClientsComponent]
    });
    fixture = TestBed.createComponent(UClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
