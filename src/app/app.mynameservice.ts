import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MyNameService {
    private dataUrl = './assets/test.json'; // URL to web API
    constructor(private http: Http) { }

    getNames(): Observable<string[]> {
        return this.http.get(this.dataUrl)
       .pipe(map(this.extractData),
        catchError(this.handleError.bind(this)))
    }
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    private handleError(error: any) {
        throw(error);
    }
}