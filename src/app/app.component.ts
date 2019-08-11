import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Social Connections',
      url: '/social-media',
      icon: 'people'
    },
    {
      title: 'Personal Info',
      url: '/personal-details',
      icon: 'person'
    },
    {
      title: 'Work Info',
      url: '/work-details',
      icon: 'briefcase'
    },
    {
      title: 'Skills',
      url: '/skills',
      icon: 'globe'
    },
    {
      title: 'Resume',
      url: '/resume',
      icon: 'print'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,    
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  showSplash = true;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleLightContent();      
      timer(3000).subscribe(() =>{
        this.showSplash = false;
      })
    });
  }
}
