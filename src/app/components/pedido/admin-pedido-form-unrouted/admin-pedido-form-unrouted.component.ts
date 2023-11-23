import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IPedido, IUser, formOperation } from 'src/app/model/model.interfaces';
import { PedidoAjaxService } from 'src/app/service/pedido.ajax.service';
import { AdminUserSelectionUnroutedComponent } from '../../user/admin-user-selection-unrouted/admin-user-selection-unrouted.component';

@Component({
  selector: 'app-admin-pedido-form-unrouted',
  templateUrl: './admin-pedido-form-unrouted.component.html',
  styleUrls: ['./admin-pedido-form-unrouted.component.css']
})

export class AdminPedidoFormUnroutedComponent implements OnInit {
  @Input() id: number = 1;
  @Input() operation: formOperation = 'NEW'; //new or edit

  pedidoForm!: FormGroup;
  oPedido: IPedido = { user: {} } as IPedido;
  status: HttpErrorResponse | null = null;

  oDynamicDialogRef: DynamicDialogRef | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private oPedidoAjaxService: PedidoAjaxService,
    private router: Router,
    private oMatSnackBar: MatSnackBar,
    public oDialogService: DialogService
  ) {
    this.initializeForm(this.oPedido);
  }

  initializeForm(oPedido: IPedido) {
    this.pedidoForm = this.formBuilder.group({
      id: [oPedido.id],
      title: [oPedido.observaciones, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]],
      user: this.formBuilder.group({
        id: [oPedido.user.id, Validators.required]
      })
    });
  }

  ngOnInit() {
    if (this.operation == 'EDIT') {
      this.oPedidoAjaxService.getOne(this.id).subscribe({
        next: (data: IPedido) => {
          this.oPedido = data;
          this.initializeForm(this.oPedido);
        },
        error: (error: HttpErrorResponse) => {
          this.status = error;
          this.oMatSnackBar.open("Error reading pedido from server.", '', { duration: 2000 });
        }
      })
    } else {
      this.initializeForm(this.oPedido);
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.pedidoForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.pedidoForm.valid) {
      if (this.operation === 'NEW') {
        this.oPedidoAjaxService.newOne(this.pedidoForm.value).subscribe({
          next: (data: IPedido) => {
            this.oPedido = { "user": {} } as IPedido;
            this.initializeForm(this.oPedido); //el id se genera en el servidor
            this.oMatSnackBar.open('pedido has been created.', '', { duration: 2000 });
            this.router.navigate(['/admin', 'pedido', 'view', data]);
          },
          error: (error: HttpErrorResponse) => {
            this.status = error;
            this.oMatSnackBar.open('Failed to create pedido.', '', { duration: 2000 });
          }
        });
      } else {
        this.oPedidoAjaxService.updateOne(this.pedidoForm.value).subscribe({
          next: (data: IPedido) => {
            this.oPedido = data;
            this.initializeForm(this.oPedido);
            this.oMatSnackBar.open('pedido has been updated.', '', { duration: 2000 });
            this.router.navigate(['/admin', 'pedido', 'view', this.oPedido.id]);
          },
          error: (error: HttpErrorResponse) => {
            this.status = error;
            this.oMatSnackBar.open('Failed to update pedido.', '', { duration: 2000 });
          }
        });
      }
    }
  }

  onShowUsersSelection() {
    this.oDynamicDialogRef = this.oDialogService.open(AdminUserSelectionUnroutedComponent, {
      header: 'Select a User',
      width: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.oDynamicDialogRef.onClose.subscribe((oUser: IUser) => {
      if (oUser) {
        this.oPedido.user = oUser;
        this.pedidoForm.controls['user'].patchValue({ id: oUser.id })
      }
    });
  }

}
