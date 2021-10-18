import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './module/auth/auth.module';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './core/guards/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    DashboardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
    timeOut:60000,
    positionClass: 'toast-bottom-left',
    preventDuplicates: true,
    }),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        // whitelistedDomains: ['https://jayeshkhairnar.000webhostapp.com'],
        // headerName:"Authorization"
        // blacklistedRoutes: ['https://jayeshkhairnar.000webhostapp.com/saiapi/admin/admin_read.php'],
        // skipWhenExpired:false
      }
    }),
    
   
  ],
  providers: [
    {   //first create httpinterceptor file
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
