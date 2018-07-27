import { Route } from '@angular/router';
import { CoursesPageComponent } from './modules/courses/pages/courses.page';
import { LoginPageComponent } from './modules/login/pages/login.page';
import { CreateCoursePageComponent } from './modules/create-course/pages/create-course.page';

export const ROUTES: Route[] = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'courses', component: CoursesPageComponent },
    { path: 'courses/:id', component: CoursesPageComponent },
    { path: 'courses/new', component: CreateCoursePageComponent }
];
