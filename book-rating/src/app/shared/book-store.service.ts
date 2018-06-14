import { BookService } from '@angular-schule/book-monkey-api';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, take } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { Book } from './book';

import gql from 'graphql-tag';
import { BookList } from '../graphql-types';

const booksQuery = gql`
  query BookList {
    book: books {
      isbn
      title
      description,
      rating
      thumbnails {
        url
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private bookService: BookService, private apollo: Apollo
  ) { }

  getAllViaGraphQL(): Observable<BookList.Book[]> {

    return this.apollo.query<BookList.Query>({
      query: booksQuery,
    })
    .pipe(
      map(({ data }) => data.book)
    );
  }

  getAllViaGraphQLWatch() {

    const querRef = this.apollo.watchQuery<any>({
      query: booksQuery,
    });

    // querRef.startPolling
    // querRef.stopPolling
    // querRef.refetch

    querRef
      .valueChanges
      .pipe(
        map(({ data }) => data.books)
      );
  }

  getAllViaSwagger(): Observable<Book[]> {
    return this.bookService.booksGet();
  }

  getAllHardcoded(): Observable<Book[]> {

    return of([{
      'isbn': '9783864903571',
      'title': 'Angular',
      'authors': ['Johannes Hoppe', 'Ferdinand Malcher', 'Danny Koppenhagen', 'Gregor Woiwode'],
      'published': '2017-04-01T12:00:00.000Z',
      'subtitle': 'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript'
                + '- ab Angular 4, inklusive NativeScript und Redux',
      'rating': 5,
      'thumbnails': [{
        'url': 'assets/angular-buch_dpunkt.jpg',
        'title': 'Front Cover'
      }],
      'description': 'Mit Angular setzen Sie auf ein modernes und modulares Web-Framework.'
                   + 'Dieses Buch stellt Ihnen die Bausteine von Angular, viele Best Practices'
                   + ' und die notwendigen Werkzeuge vor. Beginnen Sie Ihren Einstieg in die'
                   + 'Welt von Angular mit einer praxisnahen Einführung.\n'
    }, {
      'isbn': '9783836239141',
      'title': 'Angular',
      'authors': ['Christoph Höller'],
      'published': '2017-01-30T00:00:00.000Z',
      'subtitle': 'Das umfassende Handbuch zum JavaScript-Framework',
      'rating': 4,
      'thumbnails': [{
        'url': 'assets/angular-buch_rheinwerk.jpg',
        'title': 'Front Cover'
      }],
      'description': 'Angular ist das JavaScript-Framework für professionelle Webapplikationen'
                   + ' – hier lernen Sie es umfassend kennen! Christoph Höller macht Sie mit'
                   + ' allen relevanten Technologien, Standards und Kernbestandteilen des'
                   + ' Angular-Frameworks vertraut. Am Praxisbeispiel einer Projektverwaltung'
                   + ' führt Ihnen der Webprofi die Komponenten und Konzepte von Angular praxisnah vor.'
    }, {
      'isbn': '9783960090267',
      'title': 'Angular',
      'authors': ['Manfred Steyer', 'Daniel Schwab'],
      'published': '2017-08-28T00:00:00.000Z',
      'subtitle': 'Das Praxisbuch zu Grundlagen und Best Practices',
      'rating': 4,
      'thumbnails': [{
        'url': 'assets/angular-buch_oreilly.jpg',
        'title': 'Front Cover'
      }],
      'description': 'Die Komplexität moderner JavaScript- und Single-Page-Anwendungen (SPA) '
                   + ' ist eine Herausforderung für jeden Entwickler. Entwickler begrüßen daher sehr,'
                   + ' dass Angular sie bei wiederkehrenden Aufgaben wie Datenbindung, Validierung '
                   + 'und Routing unterstützt. Auch der Support durch Google und eine riesige Community'
                   + ' spricht dafür, die leistungsfähige Plattform zu nutzen.'
    }]);
  }
}
