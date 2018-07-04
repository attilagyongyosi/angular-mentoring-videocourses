import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationButtonsComponent } from './authentication-buttons.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AuthenticationButtonsComponent', () => {
    let component: AuthenticationButtonsComponent;
    let fixture: ComponentFixture<AuthenticationButtonsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AuthenticationButtonsComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
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

    it('should display dummy user login text', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain('User Login');
    });

    it('should have a dummy logoff button', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('vc-button')).not.toBe(null);
        expect(compiled.querySelector('vc-button').getAttribute('label')).toContain('Log off');
    });
});
