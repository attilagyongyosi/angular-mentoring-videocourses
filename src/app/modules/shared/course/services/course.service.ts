import { Injectable } from '@angular/core';
import { CourseInterface } from '../model/course.interface';
import { TEST_COURSES } from './courses-data';
import { PageModel } from '../../models/page.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CourseService {
    private static courses: CourseInterface[] = TEST_COURSES;
    private readonly url = `${environment.api.url}/courses`;

    constructor(private http: HttpClient) {}

    public getAll(page: PageModel, searchTerm: string = ''): Observable<CourseInterface[]> {
        return this.http.get<CourseInterface[]>(
            this.url,
            {
                params: {
                    textFragment: searchTerm,
                    start: `${page.page}`,
                    count: `${page.count}`
                }
            }
        ).pipe(
            map(courses => {
                return courses.map(course => {
                    course.date = new Date(course.date);
                    return course;
                });
            })
        );
    }

    public get(id: number): Observable<CourseInterface> {
        return this.http.get<CourseInterface>(`${this.url}/${id}`);
    }

    public save(course: CourseInterface): Observable<CourseInterface> {
        if (course.id) {
            return this.http.put<CourseInterface>(`${this.url}/${course.id}`, course);
        }

        return this.http.post<CourseInterface>(`${this.url}`, course);
    }

    public remove(id: number): Observable<Object> {
        return this.http.delete(`${this.url}/${id}`);
    }
}
