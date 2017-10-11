export class Product {
    constructor(public _id: string,
                public articul: number,
                public name: string,
                public about: string,
                public material: string,
                public colors: string,
                public w_h: string,
                public quantity: number,
                public cost: number,
                public status: string,
                public image: string,
                public salesText: string,
                public salesCost: number) {}
}