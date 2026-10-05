import { HttpHeaders } from '@angular/common/http';

export class Constants {
  public static readonly prodUrl: string =
    'https://gft-desafio-api-vendas.herokuapp.com/api';

  public static readonly devUrl: string = 'http://localhost:8080/api';

  private static readonly token: string =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZGVzYWZpby1hcGkiXSwidXNlcl9uYW1lIjoiYWRtaW5AZ2Z0LmNvbSIsInNjb3BlIjpbInJlYWQiXSwiZXhwIjoxNjA5NDQ2MTU3LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIiwiUk9MRV9VU0VSIl0sImp0aSI6InZscmxLNHVjQnl5WFhPM2JCOWttZWk3YlhTRT0iLCJjbGllbnRfaWQiOiJhZG1pbiJ9.Ktdk-MFWyeGdzwIE5acIM9nfKdNeFcUksfi5KQlQjVsVp8Zax4NaJ6CPifogE9cA3E10GIBdlmVSutPtQcH-hXw9bq38NEOCnnpNQjGVr8xd0p0mhl09iMmmEa6_h1BL9kdMD-fDaHTu-b6sZESHGdE6-Qs-cjRjPGkn8CEdSuFfK2hxIPNNxAHzioCzsKKL5fbGDk5cFYqEN-Nam0Z2Ai_Qh88wdNchXIGd6jJ4u0z3vziGby08xZqtajoc8eRfTMAH3tEfB3CGDsx7vqrV24pacv8x3YaXdkgWAtatq6fZ3-UTqQFBjviO2DsTQ9nNtAGmiwoSe6LkltAHSWB1Bw';

  private static readonly headers: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + Constants.token,
  });

  public static readonly options = {
    headers: Constants.headers,
  };
}
