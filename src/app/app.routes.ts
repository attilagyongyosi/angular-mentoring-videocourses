import { Routes } from '@angular/router';
import { CoursesListPageComponent } from './modules/courses/pages/list/courses-list.page';
import { LoginPageComponent } from './modules/login/pages/login.page';
import { CourseEditorPageComponent } from './modules/courses/pages/editor/course-editor.page';
import { NotFoundPageComponent } from './modules/not-found/pages/not-found.page';
import { CoursesComponent } from './modules/courses/courses.component';

export const ROUTES: Routes = [
    { path: 'login', component: LoginPageComponent },
    {
        path: 'courses',
        component: CoursesComponent,
        children: [
            {
                path: '',
                component: CoursesListPageComponent,
                data: {
                    breadcrumb: 'Video Courses'
                }
            },
            {
                path: 'new',
                component: CourseEditorPageComponent
            },
            {
                path: ':id',
                component: CourseEditorPageComponent,
                data: {
                    breadcrumb: ':id'
                }
            }
        ]
    },
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];
