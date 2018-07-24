import { Component, EventEmitter, Output } from '@angular/core';
import { Credentials } from '../../../shared/auth/models/credentials';

@Component({
    selector: 'vc-login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: [ 'login-form.component.scss' ]
})
export class LoginFormComponent {
    @Output()
    public onSubmit: EventEmitter<Credentials> = new EventEmitter<Credentials>();

    public credentials: Credentials = {
        userName: '',
        password: ''
    };

    public login(): void {
        this.onSubmit.emit(this.credentials);
    }
}
