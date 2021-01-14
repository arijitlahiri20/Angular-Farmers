import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderBidrequestComponent } from './bidder-bidrequest.component';

describe('BidderBidrequestComponent', () => {
  let component: BidderBidrequestComponent;
  let fixture: ComponentFixture<BidderBidrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderBidrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderBidrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
