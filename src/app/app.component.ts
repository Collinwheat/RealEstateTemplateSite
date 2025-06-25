import { Component } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'AgentSite';

  constructor(private primeng: PrimeNG, private authService: AuthService) {
    this.authService.user$.subscribe(user => {
      console.log('Auth state changed:', user);
    });
  }

    ngOnInit() {
        this.primeng.ripple.set(true);
    }
}
