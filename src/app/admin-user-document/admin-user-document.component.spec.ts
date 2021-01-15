import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserDocumentComponent } from './admin-user-document.component';

describe('AdminUserDocumentComponent', () => {
  let component: AdminUserDocumentComponent;
  let fixture: ComponentFixture<AdminUserDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
