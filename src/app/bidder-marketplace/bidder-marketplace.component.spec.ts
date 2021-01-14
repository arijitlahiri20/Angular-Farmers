import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderMarketplaceComponent } from './bidder-marketplace.component';

describe('BidderMarketplaceComponent', () => {
  let component: BidderMarketplaceComponent;
  let fixture: ComponentFixture<BidderMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
