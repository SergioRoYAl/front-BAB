import { NgModule, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CryptoService } from './service/crypto.service';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUserDetailUnroutedComponent } from './components/user/admin-user-detail-unrouted/admin-user-detail-unrouted.component';
import { MenuUnroutedComponent } from './components/shared/menu-unrouted/menu-unrouted.component';
import { FooterUnroutedComponent } from './components/shared/footer-unrouted/footer-unrouted.component';
import { HomeRoutedComponent } from './components/shared/home-routed/home-routed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserUserDetailUnroutedComponent } from './components/user/user-user-detail-unrouted/user-user-detail-unrouted.component';
import { UserAjaxService } from './service/user.ajax.service';
import { SessionAjaxService } from './service/session.ajax.service';
import { LoginRoutedComponent } from './components/shared/login-routed/login-routed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutRoutedComponent } from './components/shared/logout-routed/logout-routed.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminUserPlistRoutedComponent } from './components/user/admin-user-plist-routed/admin-user-plist-routed.component';
import { AdminUserPlistUnroutedComponent } from './components/user/admin-user-plist-unrouted/admin-user-plist-unrouted.component';
import { PaginatorModule } from "primeng/paginator"; 
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';

import { AdminPedidoPlistUnroutedComponent } from './components/pedido/admin-pedido-plist-unrouted/admin-pedido-plist-unrouted.component';
import { AdminPedidoDetailUnroutedComponent } from './components/pedido/admin-pedido-detail-unrouted/admin-pedido-detail-unrouted.component';
import { AdminPedidoPlistRoutedComponent } from './components/pedido/admin-pedido-plist-routed/admin-pedido-plist-routed.component';
import { AdminPedidoViewRoutedComponent } from './components/pedido/admin-pedido-view-routed/admin-pedido-view-routed.component';
import { AdminPedidoFormUnroutedComponent } from './components/pedido/admin-pedido-form-unrouted/admin-pedido-form-unrouted.component';
import { AdminPedidoNewRoutedComponent } from './components/pedido/admin-pedido-new-routed/admin-pedido-new-routed.component';
import { AdminUserSelectionUnroutedComponent } from './components/user/admin-user-selection-unrouted/admin-user-selection-unrouted.component';
import { AdminPedidoEditRoutedComponent } from './components/pedido/admin-pedido-edit-routed/admin-pedido-edit-routed.component';
import { AdminUserFormUnroutedComponent } from './components/user/admin-user-form-unrouted/admin-user-form-unrouted.component';
import { AdminUserNewRoutedComponent } from './components/user/admin-user-new-routed/admin-user-new-routed.component';
import { AdminUserEditRoutedComponent } from './components/user/admin-user-edit-routed/admin-user-edit-routed.component';
import { AdminUserViewRoutedComponent } from './components/user/admin-user-view-routed/admin-user-view-routed.component';
import { PedidoAjaxService } from './service/pedido.ajax.service';
import { ConfirmationService, PrimeIcons, PrimeNGConfig, PrimeTemplate } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    AdminUserDetailUnroutedComponent,
    AdminUserPlistRoutedComponent,
    AdminUserPlistUnroutedComponent,
    AdminUserSelectionUnroutedComponent,
    AdminUserFormUnroutedComponent,
    AdminUserNewRoutedComponent,
    AdminUserEditRoutedComponent,
    AdminUserViewRoutedComponent,

    AdminPedidoPlistUnroutedComponent,
    AdminPedidoPlistRoutedComponent,
    AdminPedidoDetailUnroutedComponent,
    AdminPedidoViewRoutedComponent,
    AdminPedidoFormUnroutedComponent,
    AdminPedidoNewRoutedComponent,
    AdminPedidoEditRoutedComponent,
    
    
    MenuUnroutedComponent,
    HomeRoutedComponent,
    FooterUnroutedComponent,

    UserUserDetailUnroutedComponent,

    LoginRoutedComponent,
    LogoutRoutedComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule, 
    ButtonModule,


    //--
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    BrowserAnimationsModule,

    
  ],
  providers: [
    PrimeNGConfig,
    PrimeTemplate,
    PrimeIcons,
    MatSnackBar,
    CryptoService,
    UserAjaxService,
    SessionAjaxService,
    DialogService,
    PedidoAjaxService,
    ConfirmationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
