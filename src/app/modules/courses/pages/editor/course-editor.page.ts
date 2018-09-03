import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../shared/course/services/course.service';
import { CourseInterface } from '../../../shared/course/model/course.interface';
import { BreadcrumbsService } from '../../../shared/breadcrumbs/services/breadcrumbs.service';

@Component({
    selector: 'vc-course-editor-page',
    templateUrl: 'course-editor.page.html',
    styleUrls: [ 'course-editor.page.scss' ]
})
export class CourseEditorPageComponent implements OnInit {
    public course: CourseInterface;

    constructor(private router: Router,
                private activeRoute: ActivatedRoute,
                private breadcrumbsService: BreadcrumbsService,
                private courseService: CourseService) {}

    public ngOnInit(): void {
        this.course = {
            id: 0,
            name: '',
            date: undefined,
            description: '',
            isTopRated: false,
            length: 0
        };

        this.activeRoute.params.subscribe(params => {
            if (params.id) {
                this.course = this.courseService.get(+params.id);
                this.breadcrumbsService.changeBreadcrumbs([{
                    label: 'Video Courses',
                    url: '/courses'
                }, {
                    label: params.id,
                    url: `/courses/${params.id}`
                }]);
            }
        });
    }

    public save(course: CourseInterface): void {
        this.courseService.save(course);
        this.router.navigate([ '/courses' ]);
    }

}
