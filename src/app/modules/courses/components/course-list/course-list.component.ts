import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseInterface } from '../../../shared/course/model/course.interface';

@Component({
    selector: 'vc-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: [ './course-list.component.scss' ]
})
export class CourseListComponent {

    @Input()
    public courses: CourseInterface[] = [];

    @Output()
    public onDelete = new EventEmitter<number>();

    // @todo: let an event service handle this across components.
    public emitDelete(id: number) {
        this.onDelete.emit(id);
    }

    public sort(course1: CourseInterface, course2: CourseInterface): number {
        return course2.date.getTime() - course1.date.getTime();
    }

}
