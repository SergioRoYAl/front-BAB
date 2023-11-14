import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUserDetailUnroutedComponent } from './user/admin-user-detail-unrouted/admin-user-detail-unrouted.component';
import { MenuUnroutedComponent } from './shared/menu-unrouted/menu-unrouted.component';
import { FooterUnroutedComponent } from './shared/footer-unrouted/footer-unrouted.component';
import { HomeRoutedComponent } from './shared/home-routed/home-routed.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminUserDetailUnroutedComponent,
    MenuUnroutedComponent,
    FooterUnroutedComponent,
    HomeRoutedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
