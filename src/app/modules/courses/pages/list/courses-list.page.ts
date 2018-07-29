import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';
import { Subscription } from 'rxjs';
import { CourseInterface } from '../../../shared/course/model/course.interface';
import { FilterPipe } from '../../../shared/pipes/filter/filter.pipe';
import { TEST_COURSES } from '../../../shared/course/services/courses-data';
import { CourseService } from '../../../shared/course/services/course.service';
import { BreadcrumbsService } from '../../../shared/breadcrumbs/services/breadcrumbs.service';

@Component({
    selector: 'vc-courses-list-page',
    templateUrl: './courses-list.page.html',
    styleUrls: [ './courses-list.page.scss' ]
})
export class CoursesListPageComponent implements OnInit, OnDestroy {

    private testData: CourseInterface[];

    public courses: CourseInterface[];

    private searchSubscription: Subscription;

    constructor(private breadcrumbsService: BreadcrumbsService,
                private courseService: CourseService,
                private searchService: SearchService,
                private filter: FilterPipe) {
        this.courses = [];
    }

    public ngOnInit(): void {
        this.breadcrumbsService.changeBreadcrumbs([{
            label: 'Video Courses',
            url: '/courses'
        }]);

        this.searchSubscription = this.searchService.searchEvent$.subscribe((term) => {
            this.courses = this.filter.transform(this.testData, (course) => {
                return course.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
        });

        this.refreshData();
    }

    public loadMore(): void {
        console.log('Loading more courses...');
    }

    public delete(id: number): void {
        if (confirm('Do you really want to remove this course?')) {
            this.courseService.remove(id);
            this.refreshData();
        }
    }

    public ngOnDestroy(): void {
        this.searchSubscription.unsubscribe();
    }

    private refreshData(): void {
        this.testData = this.courseService.getAll();
        this.courses = this.testData;
    }
}
