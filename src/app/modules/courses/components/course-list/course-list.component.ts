import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseInterface } from '../../../shared/course/model/course.interface';
import { Router } from '@angular/router';

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

    constructor(private router: Router) {}

    // @todo: let an event service handle this across components.
    public emitDelete(id) {
        this.onDelete.emit(id);
    }

    public sort(course1: CourseInterface, course2: CourseInterface): number {
        return course2.creationDate.getTime() - course1.creationDate.getTime();
    }

}
