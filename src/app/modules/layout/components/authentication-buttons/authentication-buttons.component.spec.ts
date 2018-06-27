import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationButtonsComponent } from './authentication-buttons.component';

describe('AuthenticationButtonsComponent', () => {
  let component: AuthenticationButtonsComponent;
  let fixture: ComponentFixture<AuthenticationButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
