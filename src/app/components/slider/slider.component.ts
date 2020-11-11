import {Component, DoCheck, Input, OnChanges, OnInit} from "@angular/core";
import {Media} from "../../models/media.model";

@Component({
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnChanges {

    @Input() title: string;
    @Input() movies: Array<Media>;

    public groups: Array<Array<Media>> = [];
    private readonly items: number;

    public constructor() {
        this.items = Math.floor(window.innerWidth / 300);
    }

    ngOnChanges(changes: any): void {
        const groups: number = Math.ceil(this.movies.length / this.items);
        const movies: Array<Media> = changes.movies.currentValue;
        for (let i = 0; i < groups; i++) {
            this.groups[i] = [];
            for (let j = 0; j < this.items; j++) {
                if(movies[(i * this.items) + j]) {
                    this.groups[i][j] = movies[(i * this.items) + j];
                }
            }
        }
    }

}
