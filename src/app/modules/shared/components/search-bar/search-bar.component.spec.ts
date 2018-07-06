import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchBarComponent', () => {
    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ SearchBarComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();

        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit event on button click', (done) => {
        component.onSearch.subscribe(searchTerm => {
            expect(typeof searchTerm).toBe('string');
            expect(searchTerm).toBe('test');
            done();
        });

        const compiled = fixture.debugElement.nativeElement;
        const searchInput = compiled.querySelector('.search-bar__input');
        searchInput.value = 'test';
        searchInput.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        const button = compiled.querySelector('.search-bar__search-button');
        button.click();
        expect(component.searchTerm).toBe('test');

        fixture.whenStable().then(() => {
            expect(component.emitSearch).toHaveBeenCalled();
        });
    });

    it('should use input placeholder', () => {
        component.placeholder = 'testPlaceholder';
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const searchInput = compiled.querySelector('.search-bar__input');
        expect(searchInput.getAttribute('placeholder')).toBe('testPlaceholder');
    });
});
