import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';

fdescribe('LogoComponent', () => {
    let component: LogoComponent;
    let fixture: ComponentFixture<LogoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LogoComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LogoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    fit('should create', () => {
        expect(component).toBeTruthy();
    });

    fit('should display logo', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.logo').src).toContain('assets/images/epam-logo.svg');
    });
});
