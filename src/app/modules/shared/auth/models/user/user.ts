import { UserInterface } from './user.interface';

export class User implements UserInterface {
    id: number;
    firstName: string;
    lastName: string;
}
