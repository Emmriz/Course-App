import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];

  constructor(private coursesService: CourseService) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.coursesService
      .getCourses()
      .subscribe((course) => (this.courses = course.slice(1, 5)));
  }
}
