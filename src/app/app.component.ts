import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotify-clone';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'avatar',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/imgs/user-regular.svg'))
      .addSvgIcon(
        'setaBaixo',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/imgs/caret-down.svg'))
        .addSvgIcon(
        'inicio',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/imgs/home.svg'))
        .addSvgIcon(
        'buscar',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/imgs/search.svg'))
        .addSvgIcon(
        'biblioteca',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/imgs/book.svg'));
  }
}
