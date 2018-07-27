import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'vc-date-input',
    templateUrl: 'date-input.component.html',
    styleUrls: [ 'date-input.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent {

    @Output()
    public onChange: EventEmitter<string> = new EventEmitter<string>();

    public date = '';

    public change(value: string): void {
        this.date = value;
        this.onChange.emit(value);
    }
}
