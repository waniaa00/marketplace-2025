

export interface Products {
    _id : string;
    name :  string;
    _type : "product";
    image? : {
        asset : {
            _ref : string;
            _type: "image";

        }
    };
    price : number;
    description? : string; 
    quantity: number;
    slug : {
        _type : "slug"
        current : string;
    };
    inventory : number
}

