import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPedido, IPedidoPage } from '../model/model.interfaces';
import { API_URL } from 'src/enviroment/enviroment';

@Injectable()
export class PedidoAjaxService {

    sUrl: string = API_URL + "/pedido";

    constructor(
        private oHttpClient: HttpClient
    ) { }

    getOne(id: number): Observable<IPedido> {
        return this.oHttpClient.get<IPedido>(this.sUrl + "/" + id);
    }

    getPage(size: number | undefined, page: number | undefined, orderField: string, orderDirection: string, id_user: number): Observable<IPedidoPage> {
        if (!size) size = 10;
        if (!page) page = 0;
        let strUrlUser = "";
        if (id_user > 0) {
            strUrlUser = "&user=" + id_user;
        }
        return this.oHttpClient.get<IPedidoPage>(this.sUrl + "?size=" + size + "&page=" + page + "&sort=" + orderField + "," + orderDirection + strUrlUser);
    }

    removeOne(id: number | undefined): Observable<number> {
        if (id) {
            return this.oHttpClient.delete<number>(this.sUrl + "/" + id);
        } else {
            return new Observable<number>();
        }
    }

    newOne(opedido: IPedido): Observable<IPedido> {
        return this.oHttpClient.post<IPedido>(this.sUrl, opedido);
    }

    updateOne(opedido: IPedido): Observable<IPedido> {
        return this.oHttpClient.put<IPedido>(this.sUrl, opedido);
    }

    generateRandom(amount: number): Observable<number> {
        return this.oHttpClient.post<number>(this.sUrl + "/populate/" + amount, null);
    }

}
