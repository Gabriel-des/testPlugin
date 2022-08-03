import { Component } from '@angular/core';

import { Example } from 'testplugin/src';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  test() {
    Example.openMap({ latitude: 10, longitude: 10 });
  }
  

}
