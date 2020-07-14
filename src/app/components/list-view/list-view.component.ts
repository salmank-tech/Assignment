import { StudentService } from "./../../services/student.service";
import { Component, OnInit } from "@angular/core";
import { StudentData } from "src/app/models/Student";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-list-view",
  templateUrl: "./list-view.component.html",
  styleUrls: ["./list-view.component.scss"],
})
export class ListViewComponent implements OnInit {
  public studentData: StudentData[];
  constructor(
    public route: Router,
    public activatedRoute: ActivatedRoute,
    public studentService: StudentService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.studentService.getList().subscribe((res: any) => {
      this.studentData = res.data;
    });
  }

  edit(id: number) {
    this.route.navigate(["detail-view", id]);
  }
}
