import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HomeComponent } from './home/home.component';
import moduleName from './app.module.ajs';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    entryComponents: [
        HomeComponent
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, [moduleName], { strictDi: true });
    }
}