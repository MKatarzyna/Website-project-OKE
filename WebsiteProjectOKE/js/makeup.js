let selectElement;

const fetchBrandType = async () => {
    const productsData = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json').then(data => data.json());

    console.log(productsData);
}

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

const changeBrand = () => {
    console.log("I will change brand");
    console.log(event.target.value);
    getProductByBrand(event.target.value);
}


fetchBrandType();