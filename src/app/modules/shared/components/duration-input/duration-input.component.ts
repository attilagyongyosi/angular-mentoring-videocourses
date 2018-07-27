import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'vc-duration-input',
    templateUrl: 'duration-input.component.html',
    styleUrls: [ 'duration-input.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationInputComponent {

    @Output()
    public onChange: EventEmitter<number> = new EventEmitter<number>();

    public duration = 0;

    public emitValue(value: number): void {
        this.duration = value;
        this.onChange.emit(value);
    }
}
