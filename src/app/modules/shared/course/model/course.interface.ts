export interface CourseInterface {
    id: number;
    name: string;
    date: Date;
    length: number;
    description: string;
    isTopRated?: boolean;
}
