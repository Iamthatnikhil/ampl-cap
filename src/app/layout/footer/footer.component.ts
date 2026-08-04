import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 
  // onWindowScroll() {
  //   this.toggleButtonVisibility();
  // }

 
  scrollToTop() {
    window.scrollTo(0, 0);
  }



  // toggleButtonVisibility() {
  //   const button = document.querySelector('.scroll-to-top-button');
  //   if (button) {
  //     button.classList.toggle(
  //       'scroll-to-top-button--visible',
  //       window.scrollY > 100
  //     );
  //   }
  // }
 
}
