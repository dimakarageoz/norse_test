import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs'
import host from './host';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
    private headers: Headers = new Headers();
    private action;
    constructor(
        private http: Http
    ) {
        this.headers.append('Content-Type', 'application/json')
        this.headers.append('Access-Control-Allow-Origin', '*');
    }
    set path(obj: object) {
        this.action = obj
    }
    url(path, id? ){
        let url = `${host}${path}`;
        if(id)
            url += `/${id}`; 
        return url
    }

    getOne(id, cb, errorCb?) {
        this.http.get(this.url(this.action.itemOne, id), {headers: this.headers}).subscribe(
            (res) => cb(res.json()),
            (err: any) => errorCb(err)
        )
    }
    getList(cb, errorCb?) {
        this.http.get(this.url(this.action.list), { headers: this.headers }).subscribe(
            (res) => cb(res.json()),
            (err: any) => errorCb(err)
        )
    }
    delete(id, cb?, errorCb?) {
        this.http.delete(this.url(this.action.delete, id), { headers: this.headers }).subscribe(
            (res) => cb(res.json()),
            (err: any) => errorCb(err)
        )
    }

    post(body, cb, errorCb?) {
        body = JSON.stringify(body)
        this.http.post(this.url(this.action.create), body, { headers: this.headers }).subscribe(
            (res) => cb(res.json()),
            (err: any) => errorCb(err)
        )
    }


    edit(id, body, cb, errorCb?) {
        body = JSON.stringify(body)
        this.http.put(this.url(this.action.edit, id), body, { headers: this.headers }).subscribe(
            (res) => cb(res.json()),
            (err: any) => errorCb(err)
        )
    }
}