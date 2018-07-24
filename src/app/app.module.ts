import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { CoursesModule } from './modules/courses/courses.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { LoginModule } from './modules/login/login.module';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        LayoutModule,
        LoginModule,
        CoursesModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
