export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface IPage<T> {
    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

    strSortField: string;
    strSortDirection: string;
    strFilter: string;
    strFilteredTitle: string;
    strFilteredMessage: string;
    nRecords: number;
}

export interface IEntity{
    id: number;
}

export interface IUser extends IEntity{
    nombre_empresa: string,
    username: string,
    password: string,
    identificador_empresarial: string
    role: boolean,
    pedidos: number
}

export interface IUserPage extends IPage<IUser>{

}

export interface IPedido extends IEntity{
    user: IUser;
    fecha: Date;
    observaciones: string;
    establecimiento: IEstablecimiento;
}

export interface IPedidoPage extends IPage<IPedido>{
}

export interface IEstablecimiento extends IEntity{
    pedidos: number;
    repartidor: string;
}

export interface IEstablecimientoPage extends IPage<IEstablecimiento>{
}

export interface SessionEvent {
    type: string;
}

export interface IToken {
    jti: string;
    iss: string;
    iat: number;
    exp: number;
    name: string;
}