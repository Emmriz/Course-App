import { MessagesService } from './messages.service';
import { COURSES } from './mock-courses';
import { Course } from './course';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private messageService: MessagesService) {}

  getCourses(): Observable<Course[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('CourseService: fetched courses');
    return of(COURSES);
  }

  getCourse(id: number): Observable<Course> {
    this.messageService.add(`CoursesService: fetched courses id=${id}`);
    return of(COURSES.find((courses) => courses.id === id));
  }
}
