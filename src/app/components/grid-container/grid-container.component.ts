import {Component, Input} from '@angular/core';
import {Media} from "../../models/media.model";

@Component({
    selector: 'app-grid-container',
    templateUrl: './grid-container.component.html',
    styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent {

    @Input() title: string;
    @Input() movies: Array<Media>;

    constructor() {
    }

}
