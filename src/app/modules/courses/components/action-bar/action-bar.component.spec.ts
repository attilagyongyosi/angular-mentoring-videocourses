import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBarComponent } from './action-bar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';
import { of, Subject } from 'rxjs';

describe('Action Bar Component', () => {
    let component: ActionBarComponent;
    let fixture: ComponentFixture<ActionBarComponent>;
    let searchServiceStub: Partial<SearchService>;

    beforeEach(async(() => {
        searchServiceStub = {
            search: () => { return; }
        };

        TestBed.configureTestingModule({
            declarations: [ ActionBarComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [{
                provide: SearchService,
                useValue: searchServiceStub
            }]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActionBarComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have Breadcrumbs', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('vc-breadcrumbs')).not.toBe(null);
    });

    it('should have SearchBar', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('vc-search-bar')).not.toBe(null);
    });

    it('should have Add Course button', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('vc-button[label="Add Course"]')).not.toBe(null);
    });

});
