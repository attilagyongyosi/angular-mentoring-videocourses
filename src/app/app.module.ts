import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './modules/pages/courses/courses.component';
import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
    imports: [
        LayoutModule,
        BrowserModule
    ],
    declarations: [
        AppComponent,
        CoursesComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
