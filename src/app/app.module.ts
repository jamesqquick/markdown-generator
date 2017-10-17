import { ElementServiceService } from './services/element-service.service';
import { MdGeneratorService } from './services/md-generator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormsModule } from '@angular/forms';
import { SectionsListComponent } from './components/sections-list/sections-list.component';
import { MdPreviewComponent } from './components/md-preview/md-preview.component'; 
import { ClipboardModule } from 'ngx-clipboard';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { HomeComponentComponent } from './components/home-component/home-component.component';

@NgModule({
  declarations: [AppComponent, MainNavbarComponent, FormBuilderComponent, SectionsListComponent, MdPreviewComponent, HomeComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, ClipboardModule, Ng2DragDropModule.forRoot()
  ],
  providers: [ MdGeneratorService, ElementServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
