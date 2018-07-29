import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-list.page';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';
import { Subject } from 'rxjs';
import { FilterPipe } from '../../shared/pipes/filter/filter.pipe';
import { CourseService } from '../../shared/course/services/course.service';

@Pipe({
    name: 'vcFilter'
})
class MockFilterPipe implements PipeTransform {
    public transform(value: any[], ...args: any[]): any[] {
        return value.concat();
    }
}

describe('Courses Page Component', () => {
    let component: CoursesPageComponent;
    let fixture: ComponentFixture<CoursesPageComponent>;
    let searchServiceStub: Partial<SearchService>;
    let courseServiceStub: Partial<CourseService>;

    beforeEach(async(() => {
        searchServiceStub = {
            searchEvent$: new Subject(),
            search: () => { return; }
        };

        courseServiceStub = {
            getAll: () => { return []; }
        };

        TestBed.configureTestingModule({
            declarations: [ CoursesPageComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [{
                provide: SearchService,
                useValue: searchServiceStub
            }, {
                provide: CourseService,
                useValue: courseServiceStub
            }, {
                provide: FilterPipe,
                useClass: MockFilterPipe
            }]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have an ActionBar', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('vc-action-bar')).not.toBe(null);
    });

    it('should have a CourseList', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('vc-course-list')).not.toBe(null);
    });

    it('should have a Load More button', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('vc-button[label="Load more"]')).not.toBe(null);
    });

    it('should load more courses on button click', () => {
        spyOn(component, 'loadMore').and.callThrough();
        spyOn(console, 'log').and.callThrough();

        const compiled = fixture.debugElement.nativeElement;
        const button = compiled.querySelector('vc-button[label="Load more"]');
        button.click();

        expect(component.loadMore).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('Loading more courses...');
    });
});
