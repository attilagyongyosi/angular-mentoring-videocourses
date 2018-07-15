import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { Component, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../shared/course/model/course';
import { CourseInterface } from '../../../shared/course/model/course.interface';

@Pipe({
    name: 'vcDuration'
})
class MockDurationPipe implements PipeTransform {
    public transform(value: number, ...args: any[]): string {
        return '' + value;
    }
}

@Component({
    selector: 'vc-course-item-host',
    template: `<vc-course-item [course]="testCourse"></vc-course-item>`
})
class CourseItemHostComponent {
    public testCourse: CourseInterface = {
        id: 55,
        title: 'Test Course',
        description: 'My description.',
        creationDate: new Date('1949-07-07'),
        duration: 45
    };
}

describe('CourseItemComponent', () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;

    let hostFixture: ComponentFixture<CourseItemHostComponent>;
    let hostComponent: CourseItemHostComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CourseItemComponent, CourseItemHostComponent, MockDurationPipe ],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        hostFixture = TestBed.createComponent(CourseItemHostComponent);
        hostComponent = hostFixture.componentInstance;
        hostFixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have an image', () => {
        const image = fixture.debugElement.nativeElement.querySelector('.course-item__image-placeholder');
        expect(image).not.toBe(null);
    });

    it('should have a button row', () => {
        const buttons = fixture.debugElement.nativeElement.querySelector('.course-item__buttons');
        expect(buttons).not.toBe(null);
    });

    it('should render a course item', () => {
        component.course = new Course({
            id: 1,
            title: 'Test Course',
            duration: 67,
            creationDate: new Date('2011-05-05'),
            description: 'Some description.',
        });

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        const title = compiled.querySelector('.course-item__title');
        expect(title.textContent).toBe('TEST COURSE');

        const description = compiled.querySelector('.course-item__description');
        expect(description.textContent).toBe('Some description.');

        const duration = compiled.querySelector('.course-item__duration');
        expect(duration.textContent).toBe('67');

        const creationDate = compiled.querySelector('.course-item__creation');
        expect(creationDate.textContent).toBe('May 5, 2011');
    });

    it('should emit onDelete event', (done) => {
        component.course = {
            id: 12,
            title: 'Some Course',
            description: 'Some text.',
            creationDate: new Date('2011-06-28'),
            duration: 56
        };

        fixture.detectChanges();

        component.onDelete.subscribe(id => {
            expect(typeof id).toBe('number');
            expect(id).toBe(12);
            done();
        });

        const compiled = fixture.debugElement.nativeElement;
        const deleteButton = compiled.querySelector('.course-item__delete');
        deleteButton.dispatchEvent(new Event('click'));
        fixture.detectChanges();

        expect(component.course.id).toBe(12);

        fixture.whenStable().then(() => {
            expect(component.onDelete).toHaveBeenCalled();
        });
    });

    it('should render course item within a host component', () => {
        const compiledHost = hostFixture.debugElement.nativeElement;

        const title = compiledHost.querySelector('.course-item__title');
        expect(title.textContent).toBe('TEST COURSE');

        const description = compiledHost.querySelector('.course-item__description');
        expect(description.textContent).toBe('My description.');

        const duration = compiledHost.querySelector('.course-item__duration');
        expect(duration.textContent).toBe('45');

        const creationDate = compiledHost.querySelector('.course-item__creation');
        expect(creationDate.textContent).toBe('Jul 7, 1949');
    });

    it('should render star icon for top-rated courses', () => {
        component.course = {
            id: 2,
            title: 'TopRated',
            description: 'This course is top rated.',
            duration: 12,
            creationDate: new Date(),
            topRated: true
        };

        fixture.detectChanges();
        expect(fixture.debugElement.nativeElement.querySelector('.course-item__star')).not.toBe(null);
    });
});
