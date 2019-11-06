import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(
  public router: Router
  ) {}

  goPagechat(){
  	this.router.navigate(['chat']);
  }
  goPagechat1(){
  	this.router.navigate(['chat1']);
  }

}
