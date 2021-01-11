import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBidderComponent } from './signup-bidder.component';

describe('SignupBidderComponent', () => {
  let component: SignupBidderComponent;
  let fixture: ComponentFixture<SignupBidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupBidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
