import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutedComponent } from './components/shared/home-routed/home-routed.component';
import { LoginRoutedComponent } from './components/shared/login-routed/login-routed.component';
import { LogoutRoutedComponent } from './components/shared/logout-routed/logout-routed.component';
import { AdminUserPlistRoutedComponent } from './components/user/admin-user-plist-routed/admin-user-plist-routed.component';
import { AdminPedidoViewRoutedComponent } from './components/pedido/admin-pedido-view-routed/admin-pedido-view-routed.component';
import { AdminPedidoNewRoutedComponent } from './components/pedido/admin-pedido-new-routed/admin-pedido-new-routed.component';
import { AdminPedidoEditRoutedComponent } from './components/pedido/admin-pedido-edit-routed/admin-pedido-edit-routed.component';
import { AdminUserNewRoutedComponent } from './components/user/admin-user-new-routed/admin-user-new-routed.component';
import { AdminUserViewRoutedComponent } from './components/user/admin-user-view-routed/admin-user-view-routed.component';
import { AdminUserEditRoutedComponent } from './components/user/admin-user-edit-routed/admin-user-edit-routed.component';
import { AdminPedidoPlistRoutedComponent } from './components/pedido/admin-pedido-plist-routed/admin-pedido-plist-routed.component';

const routes: Routes = [
  { path: '', component: HomeRoutedComponent },
  { path: 'home', component: HomeRoutedComponent},
  { path: 'login', component: LoginRoutedComponent},
  { path: 'logout', component: LogoutRoutedComponent},

  { path: 'admin/user/plist', component: AdminUserPlistRoutedComponent},
  { path: 'admin/user/new', component: AdminUserNewRoutedComponent},
  { path: 'admin/user/view/:id', component: AdminUserViewRoutedComponent  },
  { path: 'admin/user/edit/:id', component: AdminUserEditRoutedComponent},
  
  
  { path: 'admin/pedido/plist', component: AdminPedidoPlistRoutedComponent},
  { path: 'admin/pedido/plist/byuser/:id', component: AdminPedidoPlistRoutedComponent},
  { path: 'admin/pedido/view/:id', component: AdminPedidoViewRoutedComponent},
  { path: 'admin/pedido/new', component: AdminPedidoNewRoutedComponent},
  { path: 'admin/pedido/edit/:id', component: AdminPedidoEditRoutedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
