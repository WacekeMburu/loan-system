import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RClientsComponent } from './r-clients.component';

describe('RClientsComponent', () => {
  let component: RClientsComponent;
  let fixture: ComponentFixture<RClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RClientsComponent]
    });
    fixture = TestBed.createComponent(RClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
