import { CourseInterface } from './course.interface';

export class Course implements CourseInterface {
    id: number;
    title: string;
    creationDate: Date;
    description: string;
    duration: number;
}
