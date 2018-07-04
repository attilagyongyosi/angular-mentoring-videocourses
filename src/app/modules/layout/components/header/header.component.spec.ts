import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HeaderComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain the app title', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.header__title').textContent).toContain('Videocourses training catalog');;
    })

    it('should contain a logo component', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('vc-logo')).not.toBe(null);
    });

    it('should contain an authentication buttons component', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('vc-authentication-buttons')).not.toBe(null);
    });
});
