document.querySelector('.products-grid');

const PRODUCTS = {
  0: {
    name: "Ficus Bonsai",
    price: '$140',
    status: 'IN-STOCK',
    src: 'https://animation-academy.s3.amazonaws.com/ficus-bonsai-opti.jpg'
  },
  1: {
    name: "Fresh Fruit",
    price: '$100',
    status: 'HOT',
    src: 'https://animation-academy.s3.amazonaws.com/fruit-opti.jpg'
  },
  2: {
    name: "Gnocchi",
    price: '$40',
    status: 'OUT OF STOCK',
    src: 'https://animation-academy.s3.amazonaws.com/gnocchi-opi.jpg'
  },
  3: {
    name: "Peperomia",
    price: '$80',
    status: 'SALE!',
    src: 'https://animation-academy.s3.amazonaws.com/peperomia-opti.jpg'
  }
}
export default class ProductsCreator {
  constructor() {
    this.productsContainer = document.querySelector('.products-grid');
    this.products = [];
    this.buildProducts();
    this.attachProducts();
  }

  buildProducts() {
    for (let i = 0; i < Object.keys(PRODUCTS).length; i++) {
      // create div
      const box = document.createElement('div')
      box.classList.add('product-box')
      box.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${PRODUCTS[i].src})`

      // build elements using product data from POJO
      const productPrice = document.createElement('p');
      productPrice.innerHTML = PRODUCTS[i].price;
      productPrice.classList.add('price');

      const productStatus = document.createElement('p')
      productStatus.innerHTML = PRODUCTS[i].status;
      productStatus.classList.add('status');

      const productTitle = document.createElement('h4');
      productTitle.innerHTML = PRODUCTS[i].name;
      productTitle.classList.add('title');

      box.append(productPrice, productStatus, productTitle);
      this.products.push(box);
    }
  }

  attachProducts() {
    this.products.forEach(product => {
      this.productsContainer.appendChild(product)
    })
  };

}