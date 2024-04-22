// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// CommonModule is usually not needed to be imported here, as BrowserModule imports it

@NgModule({
    declarations: [
        AppComponent // Declare AppComponent here
    ],
    imports: [
        BrowserModule // BrowserModule imports CommonModule
        // No need to import CommonModule here explicitly for most cases
    ],
    providers: [],
    bootstrap: [AppComponent] // Bootstrap AppComponent here
})
export class AppModule { }
