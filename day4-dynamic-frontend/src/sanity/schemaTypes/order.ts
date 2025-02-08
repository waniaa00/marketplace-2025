


export default {
    name : 'order',
    type : 'document',
    title : 'Order',
    fields : [
        {
            name : 'fullName',
            title : 'Full Name',
            type : 'string',
        },
        {
            name : 'address',
            title : 'Address',
            type : 'string'
        },
        {
            name : 'city',
            title : 'City',
            type : 'string'
        },
        {
            name : 'postalCode',
            title : 'Postal Code',
            type : 'string'
        },
        {
            name : 'phone',
            title : 'Phone',
            type : 'string'
        },
        {
            name : 'email',
            title : 'Email',
            type : 'string'
        },
        {
            name : 'discount',
            title : 'Discount',
            type : 'number'
        },
        {
            name : 'cartItems',
            title : 'Cart Items',
            type : 'array',
            of : [{ type : 'reference', to : {type : 'product'}}]
        },
        {
            name : 'total',
            title : 'Total',
            type : 'number'
        },
        {
            name : 'success',
            title : ' Order Status',
            type : 'string',
            options : {
                list : [
                    {title : 'Pending', value : 'pending'},
                    {title : 'Success', value : 'success'},
                    {title : 'Dispatch', value : 'dispatch'},
                ],
                layout : 'radio' 
            },
            initialValue : 'pending'
        },


    ]
}