import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PedidoAjaxService } from 'src/app/service/pedido.ajax.service';

@Component({
  selector: 'app-admin-pedido-plist-routed',
  templateUrl: './admin-pedido-plist-routed.component.html',
  styleUrls: ['./admin-pedido-plist-routed.component.css']
})
export class AdminPedidoPlistRoutedComponent implements OnInit {

  id_user: number;
  bLoading: boolean = false;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oPedidoAjaxService: PedidoAjaxService,
    private oMatSnackBar: MatSnackBar
  ) {
    this.id_user = parseInt(this.oActivatedRoute.snapshot.paramMap.get("id") ?? "0");
  }

  ngOnInit() { }

  doGenerateRandom(amount: number) {
    this.bLoading = true;
    this.oPedidoAjaxService.generateRandom(amount).subscribe({
      next: (oResponse: number) => {
        this.oMatSnackBar.open("Now there are " + oResponse + " pedidos", '', { duration: 2000 });
        this.bLoading = false;
      },
      error: (oError: HttpErrorResponse) => {
        this.oMatSnackBar.open("Error generating pedidos: " + oError.message, '', { duration: 2000 });
        this.bLoading = false;
      },
    })
  }

}

