const products = [ 
    {
        id:'1',
        name: 'BRISA M',
        price: 1400,
        category: 'tressa',
        img: 'http://www.tressa.com.ar/system/photos/6912/detail/BRISA_M_01.jpg?1673286444',
        stock: 3,
        descripcion: 'Tressa, Dama, Metal, RETRO'
    },
    {
        id:'2',
        name: 'Stone ST1036',
        price: 1000,
        category: 'stone',
        img: 'https://importadora376.com.ar/wp-content/uploads/2021/07/ST1036NB.jpg',
        stock: 4,
        descripcion: 'Reloj de hombre Stone 1036'
    },
    {
        id:'3',
        name: 'Knock Out 2476',
        price: 1300,
        category: 'knock out',
        img: 'https://importadora376.com.ar/wp-content/uploads/2023/05/KN2476-033-1-1.jpg',
        stock: 2,
        descripcion: 'Reloj de hombre Knock Out 2476'
    },
    {
        id:'4',
        name: 'COSMIC',
        price: 1400,
        category: 'tressa',
        img: 'https://importadora376.com.ar/wp-content/uploads/2022/11/T-COSMIC-02-P-1.jpg',
        stock: 3,
        descripcion: 'Tressa, Hombre, Metal, Cosmic'
    },
    {
        id:'5',
        name: 'Stone ST1116N',
        price: 1000,
        category: 'stone',
        img: 'https://importadora376.com.ar/wp-content/uploads/2022/03/ST1116N.jpg',
        stock: 4,
        descripcion: 'Reloj Unisex Stone ST1116N'
    },
    {
        id:'6',
        name: 'Knock Out KN8446',
        price: 1300,
        category: 'knock out',
        img: 'https://importadora376.com.ar/wp-content/uploads/2023/05/KN8446-033-1-1.jpg',
        stock: 2,
        descripcion: 'Reloj de hombre Knock Out KN8446'
    },
  
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500);
    })
}