import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        LoginPageComponent,
        LoginFormComponent
    ],
    exports: [
        LoginPageComponent,
        LoginFormComponent
    ]
})
export class LoginModule {}
