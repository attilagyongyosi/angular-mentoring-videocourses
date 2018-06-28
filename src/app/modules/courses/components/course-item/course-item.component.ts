import { Component, Input } from '@angular/core';
import { CourseInterface } from '../../../shared/models/course/course.interface';

@Component({
    selector: 'vc-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: [ './course-item.component.scss' ]
})
export class CourseItemComponent {

    @Input()
    public course: CourseInterface;

}
