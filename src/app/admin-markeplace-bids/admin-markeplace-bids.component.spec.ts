import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMarkeplaceBidsComponent } from './admin-markeplace-bids.component';

describe('AdminMarkeplaceBidsComponent', () => {
  let component: AdminMarkeplaceBidsComponent;
  let fixture: ComponentFixture<AdminMarkeplaceBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMarkeplaceBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMarkeplaceBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
