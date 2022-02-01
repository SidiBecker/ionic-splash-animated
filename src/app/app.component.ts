import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { MenuController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Splash', url: '/splash', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private menu: MenuController,
    private router: Router,
    private splash: SplashScreen,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.initializeApp();
    });
  }

  initializeApp() {
    this.splash.hide();

    setTimeout(() => {
      document
        .getElementById('splashimg')
        .classList.remove('roll-in-blurred-top');
      document
        .getElementById('splashimg')
        .classList.add('roll-out-blurred-top');

      setTimeout(() => {
        this.router.navigate(['folder/Inbox']);
        this.menu.enable(true);
      }, 600);
    }, 3000);
  }
}
