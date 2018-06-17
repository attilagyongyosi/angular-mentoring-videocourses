import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LogoComponent } from './layout/logo/logo.component';
import { CoursesComponent } from './pages/courses/courses.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        CoursesComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
