import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellrequestsComponent } from './admin-sellrequests.component';

describe('AdminSellrequestsComponent', () => {
  let component: AdminSellrequestsComponent;
  let fixture: ComponentFixture<AdminSellrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSellrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSellrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
