import { Component } from '@angular/core';
import { CourseInterface } from '../../../shared/course/model/course.interface';

@Component({
    selector: 'vc-course-form',
    templateUrl: 'course-form.component.html',
    styleUrls: [ 'course-form.component.scss' ]
})
export class CourseFormComponent {
    private course: CourseInterface;
}
