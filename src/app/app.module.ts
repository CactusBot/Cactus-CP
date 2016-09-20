import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdButtonModule } from '@angular2-material/button';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdSliderModule } from '@angular2-material/slider';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdListModule } from '@angular2-material/list';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdInputModule } from '@angular2-material/input';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdMenuModule } from '@angular2-material/menu';
import { MdRippleModule } from '@angular2-material/core/core';
import { RtlModule } from '@angular2-material/core/rtl/dir';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule.forRoot(),
    MdButtonToggleModule.forRoot(),
    MdCardModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdGridListModule.forRoot(),
    MdIconModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdMenuModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdRadioModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdSliderModule.forRoot(),
    MdSlideToggleModule.forRoot(),
    MdTabsModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdTooltipModule.forRoot(),
    MdRippleModule.forRoot(),
    RtlModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
