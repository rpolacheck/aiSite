import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent {

  constructor( private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/logo.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'ai-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/ai-logo.svg')
    );
  }

  scroll(section: string) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'end'});
  }
}
