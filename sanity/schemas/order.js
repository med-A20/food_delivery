export default {
    name : 'order',
    title : 'Order',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        },
        {
            name : 'key',
            title : 'Key',
            type : 'string'
        },
        {
            name : 'phone',
            title : 'Phone',
            type : 'string'
        },
        {
            name : 'adresse',
            title : 'Adresse',
            type : 'string'
        },
        {
            name : 'total',
            title : 'Total',
            type : 'number'
        },
        {
            name : 'methode',
            title : 'Methode',
            type : 'number'
        },
        {
            name : 'status',
            title : 'Status',
            type : 'number'
        },
    ]
}