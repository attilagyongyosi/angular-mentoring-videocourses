import {NgModule} from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ButtonComponent,
        BreadcrumbsComponent,
        SearchBarComponent,
        DurationPipe,
        OrderByPipe
    ],
    exports: [
        ButtonComponent,
        BreadcrumbsComponent,
        SearchBarComponent,
        DurationPipe,
        OrderByPipe
    ],
    providers: [
        SearchService
    ]
})
export class SharedModule {}
