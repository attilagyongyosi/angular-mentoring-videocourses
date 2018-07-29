import { NgModule } from '@angular/core';
import { CoursesListPageComponent } from './pages/list/courses-list.page';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { SharedModule } from '../shared/shared.module';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CommonModule } from '@angular/common';
import { CourseBorderDirective } from './directives/course-border.directive';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseEditorPageComponent } from './pages/editor/course-editor.page';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        CoursesComponent,
        CoursesListPageComponent,
        CourseEditorPageComponent,
        CourseFormComponent,
        ActionBarComponent,
        CourseItemComponent,
        CourseListComponent,
        CourseBorderDirective
    ],
    exports: [
        CoursesComponent,
        CoursesListPageComponent,
        CourseEditorPageComponent,
        CourseFormComponent,
        ActionBarComponent
    ]
})
export class CoursesModule {}
