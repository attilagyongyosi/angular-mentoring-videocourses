import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '../../../../../../node_modules/@angular/common/http/testing';
import { AuthService } from './auth.service';
import { LoginResponseModel } from '../models/login-response.model';

describe('Auth Service', () => {
    let injector: TestBed;
    let service: AuthService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ AuthService ]
        });

        injector = getTestBed();
        service = injector.get(AuthService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should log in a valid user', () => {
        const dummyResponse: LoginResponseModel = { token: 'testToken' };

        service.login({ userName: 'username', password: 'xyz' }).subscribe(response => {
            expect(response.token).toBe('testToken');
        });

        const request = httpMock.expectOne('http://localhost:3004/auth/login');
        expect(request.request.method).toBe('GET');
        request.flush(dummyResponse);

    });
});
