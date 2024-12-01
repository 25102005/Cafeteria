import { ProductCardProps } from "../components/ProductCard/ProductCard";

const catalogbebidas: ProductCardProps[] = [
    {
        imagesUrl: [
            'https://tofuu.getjusto.com/orioneat-local/resized2/5HTGDQeYwaBovZEuy-300-300.webp',
            'data:image/jpeg;base64,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',
        ],
        description: 'Delicioso frappé con frutas tropicales, ideal para refrescarte en un día caluroso.',
        price: 45,
        stars: 5,
        discount: 10,
        id: 'tropicalFrappeBlast',
        title: 'FRAPPÉ TROPICAL'
    },
    {
        imagesUrl: [
            'https://tofuu.getjusto.com/orioneat-local/resized2/pL4XbnAuvKzEfzk9d-800-800.webp',
            'https://primerocafe.com.mx/wp-content/uploads/2023/09/frappe-cafe.jpeg'
        ],
        description: 'Frappé de horchata con un toque cremoso y refrescante.',
        price: 40,
        stars: 4,
        discount: 5,
        id: 'creamyHorchataFrappe',
        title: 'HORCHATA FRAPPÉ'
    },
    {
        imagesUrl: [
            'https://tofuu.getjusto.com/orioneat-local/resized2/sRzBQNCr67EnoGLRK-300-x.webp',
            'https://cdn7.kiwilimon.com/recetaimagen/20073/640x640/12137.jpg.webp',
        ],
        description: 'Frappé de café suave y refrescante, perfecto para los amantes del café frío.',
        price: 50,
        stars: 5,
        discount: 15,
        id: 'icedCoffeeDelight',
        title: 'FRAPPÉ DE CAFÉ'
    },
    {
        imagesUrl: [
            'https://www.debate.com.mx/img/2022/08/26/limonada-mineral.jpeg?__scale=w:1200,h:1200,t:2',
            'https://cdn7.kiwilimon.com/recetaimagen/3675/640x640/11838.jpg.webp',
            'https://www.recetas-puertorico.com/base/stock/Recipe/limonada/limonada_web.jpg'
        ],
        description: 'Limonada fresca y cítrica, ideal para cualquier ocasión.',
        price: 30,
        stars: 4,
        discount: 10,
        id: 'lemonadeCooler',
        title: 'LIMONADA'
    },
    {
        imagesUrl: [
            'https://paragourmet.wordpress.com/wp-content/uploads/2012/05/sparkling-orangeade-0503-l.jpeg',
            'https://www.gastrolabweb.com/u/fotografias/m/2021/7/22/f638x638-16561_74728_3153.jpg',
        ],
        description: 'Refrescante naranjada con jugo de naranja recién exprimido.',
        price: 30,
        stars: 4,
        discount: 10,
        id: 'sunnyOrangeFizz',
        title: 'NARANJADA'
    },
    {
        imagesUrl: [
            'https://tofuu.getjusto.com/orioneat-local/resized2/bnt8QZSKhjuJkBxhH-300-300.webp',
            'https://cdn.pixabay.com/photo/2018/12/03/21/40/cappuccino-3854326_1280.jpg',
        ],
        description: 'Capuchino espumoso con un equilibrio perfecto de espresso y leche.',
        price: 45,
        stars: 5,
        discount: 10,
        id: 'classicCapuccinoFoam',
        title: 'CAPUCHINO'
    },
    {
        imagesUrl: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYlla6oxJY-VcIX_6EG9ZvFG6Kixym_ZXsnQ&s',
            'https://cdn7.kiwilimon.com/recetaimagen/21967/640x640/20668.jpg.webp',
            'https://www.vitamixespana.com/recetas/wp-content/uploads/2020/03/moka-menta-des-1.jpg'
        ],
        description: 'Café moka con un toque de chocolate, ideal para los amantes del sabor dulce.',
        price: 50,
        stars: 5,
        discount: 15,
        id: 'richMochaMagic',
        title: 'MOKA'
    },
    {
        imagesUrl: [
            'https://tofuu.getjusto.com/orioneat-local/resized2/JQWLfEpFQ4L5G5WoE-300-300.webp',
            'https://tofuu.getjusto.com/orioneat-local/resized2/seBxWctmA9EWRd6da-300-300.webp',
        ],
        description: 'Papaya, sandía, piña o melón con fruta machacada y un toque de jarabe endulzante.',
        price: 35,
        stars: 4,
        discount: 5,
        id: 'machacaFrut',
        title: 'MACHACADO DE FRUTAS'
    },
    {
        imagesUrl: [
            'https://www.villeroy-boch.com.mx/fileadmin/upload/tischkultur/images/Service/Wissenswertes/Kaffee-Americano/villeroy-boch-kaffee-americano-header-540x540.jpg',
            'https://srdelights.com/cdn/shop/files/AmericanCoffee.png?v=1718024474',
            'https://http2.mlstatic.com/D_NQ_NP_834973-MLM79044746533_092024-O.webp'
        ],
        description: 'Café americano clásico, con un sabor suave y aromático.',
        price: 30,
        stars: 4,
        discount: 10,
        id: 'americanoEssence',
        title: 'CAFÉ AMERICANO'
    },
    {
        imagesUrl: [
            'https://www.cocinista.es/download/bancorecursos/recetas/receta-bubble-tea-te-tapioca.jpg',
            'https://nextgenboba.com/cdn/shop/articles/Boba-tea-recipe-using-fresh-tapioca-pearls-1024x1024-1.jpg?v=1699882787&width=360',
            'https://tyberrymuch.com/wp-content/uploads/2023/06/coffee-milk-bubble-tea-recipe-735x735.jpg'
        ],
        description: 'Bebida dulce y aromática a base de té, leche, azúcar y perlas de tapioca.',
        price: 45,
        stars: 4,
        discount: 10,
        id: 'bubbleTea',
        title: 'BUBBLE TEA'
    }
];

export { catalogbebidas };
