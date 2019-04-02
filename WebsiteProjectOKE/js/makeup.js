let selectElement;

const fetchProductType = async () => {
    const productsData = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json').then(data => data.json());

    console.log(productsData);
}



// fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
//     .then(function(resp) {
//         return resp.json();
//     })
//     .then(function(data) {
//         console.log(data.products);
//     })


const productSelect = (product) => {
    select = document.querySelector('.product-select');
    const  productOptions = product.map(product =>  {
        const optionElement = document.createElement('option');
        optionElement.value = product.id;
        optionElement.label = product.name;
        return optionElement;
        console.log(product);
    })

    productOptions.forEach(productOptions => {
        console.log(productOptions);
        select.appendChild(productOptions);
    })
}

const fillProductImage = (imageUrl) => {
    document.querySelector('.product-image').setAttribute('src', imageUrl);
}

const getProductByBrand = async (productId) => {

    const [data] = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=' + productId).then(data => data.json());
    const {url} = data;
    fillProductImage(url);

    console.log(data);
}

const changeProduct = () => {
    console.log("I will change product");
    console.log(event.target.value);
    getProductByBrand(event.target.value);
}


fetchProductType();