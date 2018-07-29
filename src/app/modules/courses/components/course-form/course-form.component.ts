import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseInterface } from '../../../shared/course/model/course.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'vc-course-form',
    templateUrl: 'course-form.component.html',
    styleUrls: [ 'course-form.component.scss' ]
})
export class CourseFormComponent {

    @Input()
    public course: CourseInterface;

    @Output()
    public onSave: EventEmitter<CourseInterface> = new EventEmitter<CourseInterface>();

    constructor(private router: Router) {}

    public updateDate(date: string): void {
        this.course.creationDate = new Date(date);
    }

    public save(): void {
        this.onSave.emit(this.course);
    }

    public cancel(): void {
        this.router.navigate([ '/courses' ]);
    }
}
