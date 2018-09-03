import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

interface DataResponse {
    userId: string;
    id: string;
    title: string;
    body: string;
}

@Component({
    selector: 'app-json-place-holder',
    templateUrl: './json-place-holder.component.html',
    styleUrls: ['./json-place-holder.component.css']
})
export class JsonPlaceHolderComponent implements OnInit {

    private datas  = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<DataResponse>('http://jsonplaceholder.typicode.com/posts').subscribe(datas => {
            // console.log(datas);
            this.datas = datas;
        },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured.');
                } else {
                    console.log('Server-side error occured.');
                }
            }
        );
    }

}
