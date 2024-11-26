export interface IProduct {
    id: string,
    name: string,
    type: string;
    description: string;
    imageUrl: string;
    price: number;
    dimensions?: string;
    diameter?:string;
    height?: string;
    length?: string;
}
