import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseInterface } from '../../../shared/course/model/course.interface';
import { CourseService } from '../../../shared/course/services/course.service';
import { BreadcrumbsService } from '../../../shared/breadcrumbs/services/breadcrumbs.service';
import { PageModel } from '../../../shared/models/page.model';

@Component({
    selector: 'vc-courses-list-page',
    templateUrl: './courses-list.page.html',
    styleUrls: [ './courses-list.page.scss' ]
})
export class CoursesListPageComponent implements OnInit, OnDestroy {

    private readonly pageSize = 10;

    private page: PageModel = {
        page: 0,
        count: this.pageSize
    };

    public courses: CourseInterface[] = [];

    private pageSubscriptions: Subscription[] = [];

    constructor(private breadcrumbsService: BreadcrumbsService,
                private courseService: CourseService) { }

    public ngOnInit(): void {
        this.breadcrumbsService.changeBreadcrumbs([{
            label: 'Video Courses',
            url: '/courses'
        }]);

        this.updateCourseData();
    }

    public loadMore(): void {
        this.page.page += this.pageSize;
        this.updateCourseData();
    }

    public delete(id: number): void {
        if (confirm('Do you really want to remove this course?')) {
            this.courseService.remove(id);
        }
    }

    public updateCourseData(): void {
        this.courseService.getAll(this.page).subscribe(courses => {
            this.courses = this.courses.concat(courses);
        });
    }

    public ngOnDestroy(): void {
        this.pageSubscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }
}
