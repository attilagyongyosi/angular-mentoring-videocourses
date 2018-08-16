import { getTestBed, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { HttpClientTestingModule, HttpTestingController } from '../../../../../../../node_modules/@angular/common/http/testing';
import { LoginResponseModel } from '../../models/login-response.model';
import { catchError } from 'rxjs/operators';
import { ObservableInput } from 'rxjs';

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

    it('should log in with correct credentials', () => {
        const mockResponse: LoginResponseModel = {
            token: 'fakeToken'
        };

        service.login({ userName: 'bobby', password: 'pass' }).subscribe(response => {
            expect(response.token).toBe('fakeToken');
        });

        const req = httpMock.expectOne(`${service.url}/auth/login`);
        expect(req.request.method).toBe('POST');
        req.flush(mockResponse);
    });

    it('should throw error when login fails', (done) => {
        service.login({ userName: 'bobby', password: 'wrong' }).subscribe(
            () => {},
            (error: Error) => {
                expect(error).toBeDefined();
                expect(error.message).toBe('Login failed!');
                done();
            }
        );

        const req = httpMock.expectOne(`${service.url}/auth/login`);
        expect(req.request.method).toBe('POST');
        req.flush({}, { status: 401, statusText: 'Unauthorized' });
    });
});
