export type OrderRequest = {
    id?: string;
    Quantity?: number;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    Price?: string;
    caption?:string;
    category?:string;
    url?: string;
    ratings?:string;
    OrderDate?:string;
}