import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IUser } from 'src/app/model/model.interfaces';

@Component({
  selector: 'app-menu-unrouted',
  templateUrl: './menu-unrouted.component.html',
  styleUrls: ['./menu-unrouted.component.css']
})
export class MenuUnroutedComponent implements OnInit {

  strUserName: string = "";
  oSessionUser: IUser | null = null;
  strUrl: string = "";

  constructor(
    private oRouter: Router
  ) { 
    
    this.oRouter.events.subscribe((ev) => {
      if ( ev instanceof NavigationEnd) {
        this.strUrl = ev.url;
      }
    })
  }

    
  ngOnInit() {
  }

}
