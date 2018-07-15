import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';
import { Subscription } from 'rxjs';
import { CourseInterface } from '../../shared/models/course/course.interface';
import { FilterPipe } from '../../shared/pipes/filter/filter.pipe';
import { TEST_COURSES } from './courses-data';

@Component({
    selector: 'vc-courses-page',
    templateUrl: './courses.page.html',
    styleUrls: [ './courses.page.scss' ]
})
export class CoursesPageComponent implements OnInit, OnDestroy {

    private testData: CourseInterface[];

    public courses: CourseInterface[];

    private searchSubscription: Subscription;

    constructor(private searchService: SearchService, private filter: FilterPipe) {
        this.courses = [];
    }

    public ngOnInit(): void {
        this.searchSubscription = this.searchService.searchEvent$.subscribe((term) => {
            this.courses = this.filter.transform(this.testData, (course) => {
                return course.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
        });

        this.testData = TEST_COURSES;
        this.courses = this.testData;
    }

    public loadMore(): void {
        console.log('Loading more courses...');
    }

    public ngOnDestroy(): void {
        this.searchSubscription.unsubscribe();
    }
}
