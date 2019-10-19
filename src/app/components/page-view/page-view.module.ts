import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AboutComponent } from '../about/about.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { PageViewComponent } from './page-view.component';


@NgModule({
  declarations: [AboutComponent, ContactFormComponent, PageViewComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
  ],
  exports: [AboutComponent, ContactFormComponent, PageViewComponent]
})
export class PageViewModule { }
