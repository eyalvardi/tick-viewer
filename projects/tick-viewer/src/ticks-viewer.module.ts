import {NgModule}             from "@angular/core";
import {CommonModule}         from "@angular/common";
import {TicksViewerComponent} from "./ticks-viewer.component";

@NgModule({
    declarations: [
        TicksViewerComponent
    ],
    providers   : [ ],
    imports     : [
        CommonModule
    ],
    exports     : [ TicksViewerComponent ]
})
export class TicksViewerModule { }
