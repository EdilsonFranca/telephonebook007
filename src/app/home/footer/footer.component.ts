import { Component } from '@angular/core';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
  getCurrentTime() {
    return new Date().getFullYear()
  }
}
