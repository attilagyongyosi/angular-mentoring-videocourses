import {NgModule} from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

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
        OrderByPipe,
        FilterPipe
    ],
    exports: [
        ButtonComponent,
        BreadcrumbsComponent,
        SearchBarComponent,
        DurationPipe,
        OrderByPipe,
        FilterPipe
    ],
    providers: [
        SearchService,
        FilterPipe
    ]
})
export class SharedModule {}
