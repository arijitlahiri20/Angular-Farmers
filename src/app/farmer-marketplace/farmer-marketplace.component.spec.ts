import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMarketplaceComponent } from './farmer-marketplace.component';

describe('FarmerMarketplaceComponent', () => {
  let component: FarmerMarketplaceComponent;
  let fixture: ComponentFixture<FarmerMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
