import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseInterface } from '../../../shared/models/course/course.interface';

@Component({
    selector: 'vc-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: [ './course-item.component.scss' ]
})
export class CourseItemComponent {

    @Input()
    public course: CourseInterface;

    @Output()
    public onDelete = new EventEmitter<number>();

    public emitDelete() {
        this.onDelete.emit(this.course.id);
    }

}
