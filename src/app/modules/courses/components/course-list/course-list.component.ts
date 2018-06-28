import { Component, Input } from '@angular/core';
import { CourseInterface } from '../../../shared/models/course/course.interface';

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

}
