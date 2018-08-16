export interface UserInfoResponseModel {
    id: number;
    fakeToken: string;
    name: {
        first: string;
        last: string;
    };
    login: string;
}
