import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentComponent } from "./components/student/student.component";
import { LoginComponent } from "./components/login/login.component";
import { DefaultLayoutComponent } from "./components/default-layout/default-layout.component";
import { DetailViewComponent } from "./components/detail-view/detail-view.component";
import { HttpClientModule } from "@angular/common/http";
import { ListViewComponent } from "./components/list-view/list-view.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentComponent,
    LoginComponent,
    DefaultLayoutComponent,
    DetailViewComponent,
    ListViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
