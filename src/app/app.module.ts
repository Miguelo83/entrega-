import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShearchModule } from './pages/shearch/shearch.module';

import { ArticlesComponent } from './pages/articles/articles.component';
import { AuthInterceptorProvider } from './auth/interceptors/cookies.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ShearchModule
   
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
