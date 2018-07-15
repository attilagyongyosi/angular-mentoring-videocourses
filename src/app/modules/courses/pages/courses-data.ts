import { Course } from '../../shared/models/course/course';
import { CourseInterface } from '../../shared/models/course/course.interface';

export const TEST_COURSES: CourseInterface[] = [
    new Course({
        id: 1,
        title: 'AngularJS For Beginners',
        description: 'This course is extremely funky for people who want to learn AngularJS. True story, come and learn, yo',
        creationDate: new Date('2023-04-03'),
        duration: 55,
        topRated: true
    }),
    new Course({
        id: 2,
        title: 'Introduction to Frontend Fundamentals',
        description: `Always wondered how to make websites? Tired of not having a job and having raw furniture panels for breakfast?
                          Learn the inside-out of web development in 5 minutes!`,
        creationDate: new Date('2019-11-23'),
        duration: 143
    }),
    new Course({
        id: 3,
        title: 'Basics of Presentation Excellence',
        description: `Afraid of PowerPoint? People fall asleep during your pitch?
                          Fear no more: watch this video and become the presentation ninja guru master Jedi you are destined to be!`,
        creationDate: new Date('2018-07-11'),
        duration: 110
    })
];
