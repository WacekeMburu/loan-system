import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DClientsComponent } from './d-clients.component';

describe('DClientsComponent', () => {
  let component: DClientsComponent;
  let fixture: ComponentFixture<DClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DClientsComponent]
    });
    fixture = TestBed.createComponent(DClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
