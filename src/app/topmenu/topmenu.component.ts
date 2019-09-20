import { Component, OnInit } from '@angular/core';
import { Navstyle } from './navstyle';

@Component({
  selector: 'topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})


export class TopmenuComponent implements OnInit {

  public nav = new Navstyle();
  
  constructor() { 
    this.nav.navstyle = {'background':'#000', 'height':'5em'};
    
  }

  ngOnInit() {
  }

}
