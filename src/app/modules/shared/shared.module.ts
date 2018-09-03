import {NgModule} from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { BreadcrumbsComponent } from './breadcrumbs/components/breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { CourseService } from './course/services/course.service';
import { AuthService } from './auth/services/auth.service';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsService } from './breadcrumbs/services/breadcrumbs.service';
import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiTokenInterceptor } from './auth/api-token.interceptor';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpClientModule
    ],
    declarations: [
        ButtonComponent,
        DurationInputComponent,
        DateInputComponent,
        BreadcrumbsComponent,
        SearchBarComponent,
        DurationPipe,
        OrderByPipe,
        FilterPipe
    ],
    exports: [
        ButtonComponent,
        DurationInputComponent,
        DateInputComponent,
        BreadcrumbsComponent,
        SearchBarComponent,
        DurationPipe,
        OrderByPipe,
        FilterPipe
    ],
    providers: [
        AuthService,
        AuthGuard,
        CourseService,
        SearchService,
        BreadcrumbsService,
        FilterPipe,
        {
            provide: HTTP_INTERCEPTORS, useClass: ApiTokenInterceptor, multi: true
        }
    ]
})
export class SharedModule {}
