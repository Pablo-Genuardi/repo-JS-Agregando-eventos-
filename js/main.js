//array de productos

const Products =
[
    {
        id:1,
        name: 'Semillas de Tomate Platense',
        price: '480',
        description: 'Agroecologicas, produccion propia',
        image: 'img/tomate-platense.png'
    },

    {
        id:2,
        name: 'Semillas de Cebolla Verdeo',
        price: '480',
        description: 'Agroecologicas, produccion propia',
        image: 'img/cebolla-verdeo.png'
    },

    {
        id:3,
        name: 'Semillas de Dinosaur Kale',
        price: '480',
        description: 'Agroecologicas, importadas',
        image: 'img/dinosaur-kale.png'
    },
]

const cart = [];

const updateCart = (cart) =>

{
    let cartContainer = document.querySelector('#cart');

    let container = document.querySelector('#cartContainer');
    if(container)
    {
        container.parentNode.removeChild(container);
    }

    let div = document.createElement('div');
    div.setAttribute('id', 'cartContainer');
    div.innerHTML += `<h2>Carrito de compras</h2>`;
    for (const product of cart)
    {
        div.innerHTML +=`
        <div>
            <h4>Producto: ${product.name} </h4>
            <h4>Precio: ${product.price} </h4>
            <h4>Cantidad: ${product.quantity} </h4>
        </div>
        
        `;

    }
    cartContainer.appendChild(div);
}

const loadEvents = () =>
{
    let buttons = document.querySelectorAll('.button');
    for (const button of buttons) 
    {
        button.addEventListener('click', ()=>{
        
            let prod = Cart.find(product => product.id == button.id);
            if(prod)
            {
                prod.quantity++;
            }
            else
            {
                let prod = Products.find(product => product.id == button.id);
                if(prod)
                {
                    let newProduct = {
                        id: prod.id,
                        name: prod.name,
                        price: prod.price,
                        description: prod.description,
                        image: prod.image,
                        quantity: 1 

                    }
                    cart.push(newProduct);
                }
            }
            updateCart(cart);

        });
    }
}

const loadproducts = (Products) =>
{
    let container = document.querySelector('#container');
    console.log('container: ', container);
    for (const product of Products )
    {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `
            <img src="${product.image}" alt="${product.description}">
            <h3>$${product.price}</h3>
            <h4>${product.name}</h4>
            <button id="${product.id}">Add to cart</button>
        `;
        container.appendChild(div);
    
    }

    loadEvents();
}

loadproducts(Products);