import { Component, Input } from '@angular/core';

@Component({
    selector: 'vc-button',
    templateUrl: './button.component.html',
    styleUrls: [ './button.component.scss' ]
})
export class ButtonComponent {
    @Input()
    public label = '';

    @Input()
    public type = 'normal';
}
