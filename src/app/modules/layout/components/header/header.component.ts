import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth/services/auth.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'vc-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
    public isAuthenticated = false;

    // todo: make it dumber?
    constructor(private router: Router, private authService: AuthService) {}

    public ngOnInit(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe(() => {
                this.isAuthenticated = this.authService.isAuthenticated();
            });
    }
}
