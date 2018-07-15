import * as moment from 'moment';

import { Component, Input } from '@angular/core';
import { CourseInterface } from '../../shared/models/course/course.interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseBorderDirective } from './course-border.directive';

describe('Course Border Directive', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let component: TestHostComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ TestHostComponent, CourseBorderDirective ]
        });
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
    });

    it('should change border to green for fresh courses', () => {
        component.course = {
            id: 1,
            title: 'Test',
            description: 'test',
            duration: 483738758,
            creationDate: moment().subtract(CourseBorderDirective.FRESH_THRESHOLD - 2, 'days').toDate()
        };

        fixture.detectChanges();
        expect(fixture.debugElement.nativeElement.querySelector('.border-green')).not.toBe(null);
    });

    it('should change border to blue for upcoming courses', () => {
        component.course = {
            id: 1,
            title: 'Test',
            description: 'test',
            duration: 483738758,
            creationDate: new Date('2020-08-08')
        };

        fixture.detectChanges();
        expect(fixture.debugElement.nativeElement.querySelector('.border-blue')).not.toBe(null);
    });
});

@Component({
    template: `<div vcCourseBorder [course]="course"></div>`
})
class TestHostComponent {
    @Input()
    public course: CourseInterface;
}
