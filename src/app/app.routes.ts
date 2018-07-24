import { Route } from '@angular/router';
import { CoursesPageComponent } from './modules/courses/pages/courses.page';
import { LoginPageComponent } from './modules/login/pages/login.page';

export const ROUTES: Route[] = [
    { path: '', component: LoginPageComponent },
    { path: 'courses', component: CoursesPageComponent }
];
