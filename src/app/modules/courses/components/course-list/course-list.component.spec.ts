import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CourseInterface } from '../../../shared/models/course/course.interface';

describe('CourseListComponent', () => {
    let component: CourseListComponent;
    let fixture: ComponentFixture<CourseListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CourseListComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render a list of CourseItems', () => {
        const testCourses: CourseInterface[] = [{
            id: 1,
            title: 'Test Course 1',
            description: 'Description 1',
            duration: 3232748,
            creationDate: new Date('2007-07-15')
        }, {
            id: 2,
            title: 'Test Course 2',
            description: 'Description 2',
            duration: 434382,
            creationDate: new Date('2017-07-17')
        }];

        component.courses = testCourses;
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('vc-course-item').length).toBe(2);
    });

    it('should delete CourseItem from list on delete event', () => {
        spyOn(component, 'deleteCourse').and.callThrough();
        spyOn(console, 'log').and.callThrough();

        component.deleteCourse(2);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.deleteCourse).toHaveBeenCalled();
            expect(console.log).toHaveBeenCalledWith('Course to delete:', 2);
        });
    });
});
