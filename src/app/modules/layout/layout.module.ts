import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
    declarations: [
        HeaderComponent,
        LogoComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        LogoComponent,
        FooterComponent
    ]
})
export class LayoutModule {}
