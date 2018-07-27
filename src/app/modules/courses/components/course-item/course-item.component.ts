import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseInterface } from '../../../shared/course/model/course.interface';

@Component({
    selector: 'vc-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: [ './course-item.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {

    @Input()
    public course: CourseInterface;

    @Output()
    public onDelete = new EventEmitter<number>();

    @Output()
    public onEdit = new EventEmitter<CourseInterface>();

    public emitDelete(): void {
        this.onDelete.emit(this.course.id);
    }

    public emitEdit(): void {
        this.onEdit.emit(this.course);
    }

}
