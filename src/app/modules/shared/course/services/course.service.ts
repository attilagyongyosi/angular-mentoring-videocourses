import { Injectable } from '@angular/core';
import { CourseInterface } from '../model/course.interface';
import { TEST_COURSES } from './courses-data';

@Injectable()
export class CourseService {
    private static courses: CourseInterface[] = TEST_COURSES;

    public getAll(): CourseInterface[] {
        return CourseService.courses;
    }

    public get(id: number): CourseInterface {
        return CourseService.courses.find(course => course.id === id);
    }

    public save(course: CourseInterface): CourseInterface {
        CourseService.courses.push(course);
        return course;
    }

    public remove(id: number): void {
        CourseService.courses = CourseService.courses.filter(course => course.id !== id);
    }
}
