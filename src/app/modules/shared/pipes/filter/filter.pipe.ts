import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vcFilter'
})
export class FilterPipe implements PipeTransform {
    public transform(array: any[], ...args: any[]): any[] {
        if (!args || args.length < 1) { return array.concat(); }
        return array.filter(args[0]);
    }
}
