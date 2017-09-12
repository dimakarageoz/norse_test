import host from './host';


export const url = (obj:{
        path:string,
        id?:number,
        query?: object,
        sort?: Array<any>;
    }) => {
    
    let url = `${host}${obj.path}`;
    
    if(obj.id)
        url += `/${obj.id}`;
    
    if(obj.query) {
        let query = Object.keys(obj.query).map(item => [
            `${item}=${obj.query[item]}`
        ]);

        const queryString = query.join('&');
        url += `?${queryString}`;
    }

    if(obj.sort) {
        let params = obj.sort.join(',')
        url = `${url}?_sort=${params}`;
    }
    return url
}
