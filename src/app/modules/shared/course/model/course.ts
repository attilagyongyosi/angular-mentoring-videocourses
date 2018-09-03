import { CourseInterface } from './course.interface';

export class Course implements CourseInterface {
    id: number;
    name: string;
    date: Date;
    description: string;
    length: number;
    isTopRated: boolean;

    constructor(options: {
        id: number,
        title: string,
        creationDate: Date,
        description: string,
        duration: number,
        topRated?: boolean
    }) {
        this.id = options.id;
        this.name = options.title || '';
        this.date = options.creationDate || new Date();
        this.description = options.description || '';
        this.length = options.duration || 0;
        this.isTopRated = options.topRated || false;
    }
}
