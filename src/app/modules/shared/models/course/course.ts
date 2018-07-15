import { CourseInterface } from './course.interface';

export class Course implements CourseInterface {
    id: number;
    title: string;
    creationDate: Date;
    description: string;
    duration: number;
    topRated: boolean;

    constructor(options: {
        id: number,
        title: string,
        creationDate: Date,
        description: string,
        duration: number,
        topRated?: boolean
    }) {
        this.id = options.id;
        this.title = options.title || '';
        this.creationDate = options.creationDate || new Date();
        this.description = options.description || '';
        this.duration = options.duration || 0;
        this.topRated = options.topRated || false;
    }
}
