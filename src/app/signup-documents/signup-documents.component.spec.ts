import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDocumentsComponent } from './signup-documents.component';

describe('SignupDocumentsComponent', () => {
  let component: SignupDocumentsComponent;
  let fixture: ComponentFixture<SignupDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
