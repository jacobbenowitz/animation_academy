
const PRODUCTS = {
  0: {
    name: "Product Name 1",
    price: '$100',
    status: 'IN-STOCK'
  },
  1: {
    name: "Product Name 2",
    price: '$100',
    status: 'NEW'
  },
  2: {
    name: "Product Name 3",
    price: '$100',
    status: 'OUT OF STOCK'
  },
  3: {
    name: "Product Name 4",
    price: '$100',
    status: 'SALE!'
  }
}
  
export default class ProductsCreator {

  constructor(productsContainer) {
    this.productsContainer = productsContainer;
    this.products = [];
    this.buildProducts();
    this.attachProducts();
  }

  buildProducts() {
    debugger;
    for (let i = 0; i < Object.keys(PRODUCTS).length; i++) {
      // create div
      const div = document.createElement('div')
      div.classList.add('product-box')
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

      div.append(productPrice, productStatus, productTitle);
      this.products.push(div);
    }
  }

  attachProducts() {
    this.products.forEach(product => {
      this.productsContainer.appendChild(product)
    })
  };
}