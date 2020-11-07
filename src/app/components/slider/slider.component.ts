import {Component, Input, OnInit} from "@angular/core";
import {Media} from "../../models/media.model";

@Component({
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {

    @Input() movies: Array<Media>;

    ngOnInit(): void {
    }

}
