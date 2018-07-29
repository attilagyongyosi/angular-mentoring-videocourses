import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'vc-duration-input',
    templateUrl: 'duration-input.component.html',
    styleUrls: [ 'duration-input.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationInputComponent {

    @Input()
    public duration = 0;

    @Output()
    public onChange: EventEmitter<number> = new EventEmitter<number>();

    public emitValue(value: number): void {
        this.duration = value;
        this.onChange.emit(value);
    }
}
