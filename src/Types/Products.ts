export interface Product {
    id: string;
    name: string;
    color: string;
    description: string;
    presentacion?: string;
    imgUrl: string;
    price: number;
    disponibilidad?: boolean;
}