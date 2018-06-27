import {NgModule} from '@angular/core';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
    declarations: [
        ButtonComponent
    ],
    exports: [
        ButtonComponent
    ]
})
export class SharedModule {}
