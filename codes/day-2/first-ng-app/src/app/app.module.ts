import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { SampleModule } from "./sample/sample.module";

@NgModule({
    //register components, directives and pipes ONLY
    declarations: [AppComponent],
    //register or import modules ONLY (feature modules or built-in modules)
    imports: [BrowserModule, SampleModule],
    //register services ONLY
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('App Module created');
    }
}