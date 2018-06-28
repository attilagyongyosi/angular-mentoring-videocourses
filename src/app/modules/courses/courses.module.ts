import {NgModule} from '@angular/core';
import {CoursesPageComponent} from './pages/courses.page';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        CoursesPageComponent,
        ActionBarComponent
    ],
    exports: [
        CoursesPageComponent,
        ActionBarComponent
    ]
})
export class CoursesModule {}
