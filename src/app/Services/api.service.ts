import { Injectable, Inject, ReflectiveInjector } from '@angular/core';
import {  Http, Headers } from '@angular/http';
import { url } from './helper';

@Injectable()
export class ApiService {
    protected headers: Headers = new Headers();
    protected action;
    constructor(
        protected http : Http
    ) {
        this.headers.append('Content-Type', 'application/json')
        this.headers.append('Access-Control-Allow-Origin', '*');
    }
    getOne(id, cb, errorCb?) {
        this.http.get(url({path: this.action.itemOne, id: id}), {headers: this.headers}).subscribe(
            (res) => cb(res.json()),
            (err: any) => errorCb(err)
        )
    }
    getList(cb, sort?, query?, errorCb?) {
        const urlReq = url({
            path:this.action.list,
            query: query,
            sort: sort
        });
        this.http.get(urlReq, { headers: this.headers }).subscribe(
            (res) => cb(res.json()),
            (err: any) => errorCb(err)
        )
    }
    delete(id, cb?, errorCb?) {
        this.http.delete(url({path: this.action.delete, id:id}), { headers: this.headers }).subscribe(
            (res) => cb(res.json()),
            (err: any) => errorCb(err)
        )
    }

    post(body, cb, errorCb?) {
        body = JSON.stringify(body)
        this.http.post(url({path:this.action.create}), body, { headers: this.headers }).subscribe(
            (res) => cb(res.json()),
            (err: any) => errorCb(err)
        )
    }


    edit(id, body, cb, errorCb?) {
        body = JSON.stringify(body)
        this.http.put(url({ path: this.action.edit, id: id}), body, { headers: this.headers }).subscribe(
            (res) => cb(res.json()),
            (err: any) => errorCb(err)
        )
    }
}