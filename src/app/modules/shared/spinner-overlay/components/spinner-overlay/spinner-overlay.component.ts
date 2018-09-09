import { Component, OnInit } from '@angular/core';
import { SpinnerOverlayService } from '../../services/spinner-overlay.service';

@Component({
    selector: 'vc-spinner-overlay',
    templateUrl: 'spinner-overlay.component.html',
    styleUrls: [ 'spinner-overlay.component.scss' ]
})
export class SpinnerOverlayComponent implements OnInit {
    public show = false;

    constructor(private spinner: SpinnerOverlayService) {}

    public ngOnInit(): void {
        this.spinner.onChange().subscribe(spinnerStatus => {
            this.show = spinnerStatus;
        });
    }
}
