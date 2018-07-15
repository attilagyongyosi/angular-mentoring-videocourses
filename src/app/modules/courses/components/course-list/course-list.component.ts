import { Component, Input } from '@angular/core';
import { CourseInterface } from '../../../shared/course/model/course.interface';

@Component({
    selector: 'vc-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: [ './course-list.component.scss' ]
})
export class CourseListComponent {

    @Input()
    public courses: CourseInterface[] = [];

    public deleteCourse(id: number): void {
        console.log('Course to delete:', id);
    }

    public sort(course1: CourseInterface, course2: CourseInterface): number {
        return course2.creationDate.getTime() - course1.creationDate.getTime();
    }

}
