import { NgModule } from '@angular/core';
import { CreateCoursePageComponent } from './pages/create-course.page';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        CreateCoursePageComponent,
        CourseFormComponent
    ],
    exports: [
        CreateCoursePageComponent,
        CourseFormComponent
    ]
})
export class CreateCourseModule { }
