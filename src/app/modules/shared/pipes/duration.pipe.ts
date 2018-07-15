import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vcDuration'
})
export class DurationPipe implements PipeTransform {
    public transform(value: number, ...args: any[]): string {
        const hours = Math.floor(value / 60);
        const minutes = value % 60;
        return (hours ? `${hours}h ` : '') + `${minutes}min`;
    }
}
