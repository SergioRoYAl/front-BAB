import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/model/model.interfaces';

@Component({
  selector: 'app-admin-user-view-routed',
  templateUrl: './admin-user-view-routed.component.html',
  styleUrls: ['./admin-user-view-routed.component.css']
})

export class AdminUserViewRoutedComponent implements OnInit {

  id: number = 1;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = parseInt(this.oActivatedRoute.snapshot.paramMap.get("id") || "1");
  }

  ngOnInit() {
  }




}
