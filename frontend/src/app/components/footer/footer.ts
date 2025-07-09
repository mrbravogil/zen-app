import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
      <div class="text-center">
        <p class="text-sm font-semibold">Made with ❤️ by María Bravo</p>
      </div>    
  `,
  styleUrls: ['./footer.css']
})
export class Footer {

}
