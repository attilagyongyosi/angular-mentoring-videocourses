import { Route } from '@angular/router';
import { CoursesPageComponent } from './modules/courses/pages/courses.page';
import { LoginPageComponent } from './modules/login/pages/login.page';
import { CourseEditorPageComponent } from './modules/course-editor/pages/course-editor.page';
import { NotFoundPageComponent } from './modules/not-found/pages/not-found.page';

export const ROUTES: Route[] = [
    { path: 'login', component: LoginPageComponent },
    { path: 'courses', component: CoursesPageComponent },
    { path: 'courses/new', component: CourseEditorPageComponent },
    { path: 'courses/:id', component: CourseEditorPageComponent },
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];
