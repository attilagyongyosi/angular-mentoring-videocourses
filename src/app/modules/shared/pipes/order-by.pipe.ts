import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vcOrderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(value: any[], ...args: any[]): any[] {
        if (!args || args.length < 1) { return value.concat(); }
        return value.concat().sort(args[0]);
    }
}
