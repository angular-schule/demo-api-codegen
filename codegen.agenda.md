# Swagger

java -jar swagger-codegen-cli.jar generate \
   -i https://api.angular.schule/swagger.json \
   -l typescript-angular \
   -o ./code \
   -c options.json


cd code
npm install
npm run build
npm publish dist --access=public


cd book-rating
npm i @angular-schule/book-monkey-api



SNIPPET: sw1
// app.module.ts
imports:
  ApiModule,
  

SNIPPET: sw2
providers: [
    { provide: BASE_PATH, useValue: 'https://api.angular.schule' }
],
  

SNIPPET: sw3
// book-store.service.ts
constructor(private bookService: BookService)


SNIPPET: sw4
return this.bookService.booksGet();

  
  
  
# GraphQL

npm i apollo-angular apollo-angular-link-http apollo-client apollo-cache-inmemory graphql-tag graphql


SNIPPET: gr1

// app.module.ts
imports:
  HttpLinkModule,
  ApolloModule
  
  
  
SNIPPET: gr2
AppModule {

  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'https://api.angular.schule/graphql'}),
      cache: new InMemoryCache()
    });
  }



SNIPPET: gr3
// book-store.service.ts
const booksQuery = gql`
  query BookList {
    book: books {
      isbn
      title
      description
      rating
      thumbnails {
        url
      }
    }
  }
`;


npm install --save-dev graphql-code-generator graphql-codegen-typescript-template
npm install graphql


npx gql-gen --schema https://api.angular.schule/graphql \
  --template graphql-codegen-typescript-template \
  --out ./src/app/graphql-types.ts \
  "./src/**/*.ts"
  
  
  
SNIPPET: gr4
constructor(private apollo: Apollo)



SNIPPET: gr5
   getAll(): Observable<BookList.Book[]> {

    return this.apollo.query<BookList.Query>({
      query: booksQuery,
    })
    .pipe(
      map(({ data }) => data.book)
    );
  }
  

