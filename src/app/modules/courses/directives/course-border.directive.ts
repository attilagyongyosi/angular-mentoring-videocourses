import { Directive, HostBinding, Input } from '@angular/core';
import * as moment from 'moment';
import { CourseInterface } from '../../shared/course/model/course.interface';

@Directive({
    selector: '[vcCourseBorder]'
})
export class CourseBorderDirective {
    public static FRESH_THRESHOLD = 14;

    @Input()
    public course: CourseInterface;

    @HostBinding('class')
    get borderClass(): string {
        if (this.isFresh()) { return 'border-green'; }
        if (this.isUpcoming()) { return 'border-blue'; }
    }

    private isFresh(): boolean {
        const creationMoment = moment(this.course.date);
        const thresholdDaysBefore = moment().subtract(CourseBorderDirective.FRESH_THRESHOLD, 'days');
        return creationMoment.isBefore(moment()) && creationMoment.isAfter(thresholdDaysBefore);
    }

    private isUpcoming(): boolean {
        return moment(this.course.date).isAfter(moment());
    }

}
