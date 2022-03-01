github source code: https://github.com/stevermeister/ngx-cookie-service
npm link: https://www.npmjs.com/package/ngx-cookie-service

npm install ngx-cookie-service

-------------------------------------

app-module.ts:
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  ...
    providers:
[CookieService],
...
})

export class AppModule {
}

-------------------------------------

inject to constractor:
constructor(private cookieService: CookieService)
{
  this.cookieService.set('Test', 'Hello World');
  this.cookieValue = this.cookieService.get('Test');
}
-------------------------------------

get all:
const allCookies: {} = cookieService.getAll();
-------------------------------------

get( name: string ): string;
const value: string = cookieService.get('test');
-------------------------------------

check( name: string ): boolean;
const cookieExists: boolean = cookieService.check('test');
-------------------------------------

set( name: string, value: string, expires?:
  number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: 'Lax' | 'Strict' | 'None' ): void;

set( name: string, value: string, options?:
  { expires?: number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: 'Lax' | 'None' | 'Strict'}): void;

cookieService.set('test', 'Hello World');
cookieService.set('test', 'Hello World', { expires: 2, sameSite: 'Lax' });

-------------------------------------

delete( name: string, path?: string, domain?: string, secure?: boolean, sameSite: 'Lax' | 'None' | 'Strict' = 'Lax'): void;
cookieService.delete('test');
-------------------------------------

deleteAll( path?: string, domain?: string, secure?: boolean, sameSite: 'Lax' | 'None' | 'Strict' = 'Lax' ): void;
cookieService.deleteAll();
-------------------------------------

License:
MIT

The End
