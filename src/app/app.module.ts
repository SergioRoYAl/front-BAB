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

@NgModule({
  declarations: [
    AppComponent,
    AdminUserDetailUnroutedComponent,



    MenuUnroutedComponent,
    HomeRoutedComponent,
    FooterUnroutedComponent,

    UserUserDetailUnroutedComponent,

    LoginRoutedComponent,
    LogoutRoutedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    //--
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    BrowserAnimationsModule,

    
  ],
  providers: [
    MatSnackBar,
    CryptoService,
    UserAjaxService,
    SessionAjaxService,
    DialogService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
