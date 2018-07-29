import {NgModule} from '@angular/core';
import { CoursesPageComponent } from './pages/courses.page';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { SharedModule } from '../shared/shared.module';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CommonModule } from '@angular/common';
import { CourseBorderDirective } from './directives/course-border.directive';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        CoursesPageComponent,
        ActionBarComponent,
        CourseItemComponent,
        CourseListComponent,
        CourseBorderDirective
    ],
    exports: [
        CoursesPageComponent,
        ActionBarComponent
    ]
})
export class CoursesModule {}
