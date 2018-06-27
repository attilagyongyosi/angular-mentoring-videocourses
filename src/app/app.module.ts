import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesPage } from './modules/courses/pages/courses.page';
import { LayoutModule } from './modules/layout/layout.module';
import { CoursesModule } from './modules/courses/courses.module';

@NgModule({
    imports: [
        BrowserModule,
        LayoutModule,
        CoursesModule
    ],
    declarations: [
        AppComponent,
        CoursesPage
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
