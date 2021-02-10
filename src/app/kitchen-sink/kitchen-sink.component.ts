import { Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';

@Component({
    selector: 'app-kitchen-sink',
    templateUrl: './kitchen-sink.component.html',
    styleUrls: ['./kitchen-sink.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class KitchenSinkComponent {
    colors = PXBColors;
    mobileStepperStep = 0;
}
