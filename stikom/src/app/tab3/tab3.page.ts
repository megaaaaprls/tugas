import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
  public router: Router
  ) {}

  goPage5(){
  	this.router.navigate(['tab5']);
  }
  goPage6(){
  	this.router.navigate(['tab6']);
  }
  goPage7(){
  	this.router.navigate(['tab7']);
  }
  goPage8(){
  	this.router.navigate(['tab8']);
  }
  goPage9(){
  	this.router.navigate(['tab9']);
  }

}
