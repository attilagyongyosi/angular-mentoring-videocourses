import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { CoursesModule } from './modules/courses/courses.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { LoginModule } from './modules/login/login.module';
import { CourseEditorModule } from './modules/course-editor/course-editor.module';
import { NotFoundModule } from './modules/not-found/not-found.module';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        LayoutModule,
        NotFoundModule,
        LoginModule,
        CoursesModule,
        CourseEditorModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
