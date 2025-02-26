import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CClientsComponent } from './c-clients.component';

describe('CClientsComponent', () => {
  let component: CClientsComponent;
  let fixture: ComponentFixture<CClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CClientsComponent]
    });
    fixture = TestBed.createComponent(CClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
