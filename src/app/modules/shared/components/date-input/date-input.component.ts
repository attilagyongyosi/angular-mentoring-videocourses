import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'vc-date-input',
    templateUrl: 'date-input.component.html',
    styleUrls: [ 'date-input.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent {

    @Input()
    public date = Date.now().toString();

    @Output()
    public onChange: EventEmitter<string> = new EventEmitter<string>();

    public change(value: string): void {
        this.date = value;
        this.onChange.emit(value);
    }
}
