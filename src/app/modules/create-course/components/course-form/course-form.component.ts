import { Component } from '@angular/core';
import { CourseInterface } from '../../../shared/course/model/course.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'vc-course-form',
    templateUrl: 'course-form.component.html',
    styleUrls: [ 'course-form.component.scss' ]
})
export class CourseFormComponent {
    public course: CourseInterface = {
        id: undefined,
        title: '',
        description: '',
        duration: 0,
        creationDate: undefined,
        topRated: false
    };

    constructor(private router: Router) {}

    public save(): void {
        console.log(this.course);
    }

    public cancel(): void {
        this.router.navigate([ '/courses' ]);
    }
}
