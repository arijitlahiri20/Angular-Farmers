import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderBidhistoryComponent } from './bidder-bidhistory.component';

describe('BidderBidhistoryComponent', () => {
  let component: BidderBidhistoryComponent;
  let fixture: ComponentFixture<BidderBidhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderBidhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderBidhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
