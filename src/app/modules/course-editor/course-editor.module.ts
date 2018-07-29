import { NgModule } from '@angular/core';
import { CourseEditorPageComponent } from './pages/course-editor.page';
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
        CourseEditorPageComponent,
        CourseFormComponent
    ],
    exports: [
        CourseEditorPageComponent,
        CourseFormComponent
    ]
})
export class CourseEditorModule { }
