import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Student, Country, StudentData } from "src/app/models/Student";
import { Router, ActivatedRoute } from "@angular/router";
import { StudentService } from "src/app/services/student.service";

@Component({
  selector: "app-detail-view",
  templateUrl: "./detail-view.component.html",
  styleUrls: ["./detail-view.component.scss"],
})
export class DetailViewComponent implements OnInit {
  student: StudentData;

  constructor(
    public route: Router,
    public activatedRoute: ActivatedRoute,
    public studentService: StudentService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.getViewData(res.id);
    });
  }

  getViewData(id: number) {
    this.studentService.getById(id).subscribe((res: any) => {
      this.student = res.data;
      console.log(this.student);
    });
  }
}
