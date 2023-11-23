import { Component, OnInit, Input, Optional } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IPedido } from 'src/app/model/model.interfaces';
import { PedidoAjaxService } from 'src/app/service/pedido.ajax.service';

@Component({
  selector: 'app-admin-pedido-detail-unrouted',
  templateUrl: './admin-pedido-detail-unrouted.component.html',
  styleUrls: ['./admin-pedido-detail-unrouted.component.css']
})

export class AdminPedidoDetailUnroutedComponent implements OnInit {

  @Input() id: number = 1;

  oPedido: IPedido = { user: {} } as IPedido;
  status: HttpErrorResponse | null = null;

  constructor(
    private oPedidoAjaxService: PedidoAjaxService,
    @Optional() public ref: DynamicDialogRef,
    @Optional() public config: DynamicDialogConfig
  ) {
    if (config) {
      if (config.data) {
        this.id = config.data.id;
      }
    }
  }

  ngOnInit() {
    this.getOne();
  }

  getOne(): void {
    this.oPedidoAjaxService.getOne(this.id).subscribe({
      next: (data: IPedido) => {
        this.oPedido = data;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }

    })

  }

}
