import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login.page';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    exports: [
        LoginPageComponent
    ]
})
export class LoginModule {}
