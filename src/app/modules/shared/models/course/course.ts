import { CourseInterface } from './course.interface';

export class Course implements CourseInterface {
    id: number;
    title: string;
    creationDate: Date;
    description: string;
    duration: number;

    constructor(options: {
        id: number,
        title: string,
        creationDate: Date,
        description: string,
        duration: number
    }) {
        this.id = options.id;
        this.title = options.title || '';
        this.creationDate = options.creationDate || new Date();
        this.description = options.description || '';
        this.duration = options.duration || 0;
    }
}
