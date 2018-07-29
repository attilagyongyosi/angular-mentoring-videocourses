import { Component, Input } from '@angular/core';
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

    constructor(private router: Router) {}

    public updateDate(date: string): void {
        this.course.creationDate = new Date(date);
    }

    public save(): void {
        console.log(this.course);
    }

    public cancel(): void {
        this.router.navigate([ '/courses' ]);
    }
}
