# Swagger

java -jar swagger-codegen-cli.jar generate 
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




// app.module.ts
imports:
  ApiModule,
  
  
providers: [
    { provide: BASE_PATH, useValue: 'https://api.angular.schule' }
],
  
  
// book-store.service.ts
constructor(private bookService: BookService)
  
  
  
  
