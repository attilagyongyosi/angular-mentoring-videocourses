import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthenticationButtonsComponent } from './components/authentication-buttons/authentication-buttons.component';
import {SharedModule} from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        HeaderComponent,
        LogoComponent,
        FooterComponent,
        AuthenticationButtonsComponent
    ],
    exports: [
        HeaderComponent,
        LogoComponent,
        FooterComponent
    ]
})
export class LayoutModule {}
