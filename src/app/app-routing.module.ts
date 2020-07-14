import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { StudentComponent } from "./components/student/student.component";
import { LoginComponent } from "./components/login/login.component";
import { DefaultLayoutComponent } from "./components/default-layout/default-layout.component";
import { DetailViewComponent } from "./components/detail-view/detail-view.component";
import { ListViewComponent } from "./components/list-view/list-view.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "navbar",
        component: NavbarComponent,
      },
      {
        path: "student",
        component: StudentComponent,
      },
      {
        path: "list-view",
        component: ListViewComponent,
      },
      {
        path: "detail-view/:id",
        component: DetailViewComponent,
      },
    ],
  },
  { path: "**", redirectTo: "/404", pathMatch: "full" },
  { path: "404", component: LoginComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
