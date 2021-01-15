import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMarketplaceSellComponent } from './farmer-marketplace-sell.component';

describe('FarmerMarketplaceSellComponent', () => {
  let component: FarmerMarketplaceSellComponent;
  let fixture: ComponentFixture<FarmerMarketplaceSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerMarketplaceSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMarketplaceSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
