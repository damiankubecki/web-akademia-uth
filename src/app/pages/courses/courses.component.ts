import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CourseCardComponent } from '../../shared/ui/course-card/course-card.component';
import { PageComponent } from '../../shared/layout/page/page.component';

@Component({
  selector: 'web-courses',
  imports: [PageComponent, CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
  courses = [
    {
      title: 'HTML & CSS od podstaw',
      description: 'Poznaj podstawy tworzenia stron internetowych od zera.',
      image: '/assets/images/html-css.png',
      longDescription:
        'Ten kurs to solidne fundamenty web developmentu. Nauczysz się tworzyć semantyczne strony, korzystać z selektorów CSS, ustawiać layouty przy pomocy Flexbox i Grid, a także dbać o dostępność i strukturę dokumentu HTML5.',
    },
    {
      title: 'JavaScript w praktyce',
      description:
        'Zrozum, jak działa JavaScript i stwórz interaktywne aplikacje.',
      image: 'assets/images/js.png',
      longDescription:
        'Dowiesz się, jak manipulować DOM, reagować na zdarzenia i tworzyć dynamiczne komponenty. Kurs zawiera praktyczne zadania, które pokażą Ci realne zastosowanie JavaScriptu w nowoczesnych stronach internetowych.',
    },
    {
      title: 'Angular krok po kroku',
      description: 'Buduj nowoczesne aplikacje SPA z użyciem Angulara.',
      image: 'assets/images/angular.png',
      longDescription:
        'Poznasz strukturę aplikacji Angular, routing, komponenty, bindowanie danych, komunikację z backendem i Reactive Forms. Kurs idealny dla tych, którzy chcą wejść w świat frameworków frontendowych na poważnie.',
    },
    {
      title: 'Responsive Web Design',
      description:
        'Twórz strony, które świetnie wyglądają na każdym urządzeniu.',
      image: 'assets/images/rwd.png',
      longDescription:
        'Nauczysz się projektować strony, które automatycznie dostosowują się do różnych ekranów. Poznasz techniki Media Queries, Flexbox, CSS Grid i zasady Mobile First. Praktyczne przykłady pomogą Ci zastosować wiedzę od razu.',
    },
  ];
}
