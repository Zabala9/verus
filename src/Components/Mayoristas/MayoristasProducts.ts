export interface MayoristasProducts {
    id: string;
    name: string;
    color: string;
    description: string;
    presentacion?: string;
    imgUrl: string;
    price: number;
}

export interface MayoristasCollection {
    [brand: string]: MayoristasProducts[]
}