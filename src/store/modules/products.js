export default {
  state: {
    products: [
      {
        id: '1',
        title: 'Lenovo Legion Y520',
        vendor: 'Lenovo',
        color: 'Black',
        material: 'metal/plastic',
        description: 'Intel core i5 7400HQ MHz/15.6',
        price: 784,
        promo: true,
        imageSrc: 'https://rukminim1.flixcart.com/flap/1400/1400/image/7c0b69.jpg?q=50'
      },
      {
        id: '2',
        title: 'Asus FX503VD',
        vendor: 'Asus',
        color: 'white',
        material: 'plastic',
        description: 'Intel core i5 7400HQ MHz/15.6',
        price: 460,
        promo: true,
        imageSrc: 'https://c.s-microsoft.com/en-us/CMSImages/Windows10_ViewAll__hero_1920.jpg?version=9827798b-32be-675f-4a86-ae7dca0d2e19'
      },
      {
        id: '3',
        title: 'Asus TUF',
        vendor: 'Asus',
        color: 'red',
        material: 'plastic',
        description: 'Intel core i5 7400HQ MHz/15.6',
        price: 944,
        promo: true,
        imageSrc: 'https://www.photoworkout.com/wp-content/uploads/2018/05/Best-Laptops-for-Photo-Editing.jpg'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    products(state) {
      return state.products
    },
    promoProducts(state) {
      return state.products.filter(product => {
        return product.promo
      })
    },
    myProducts(state) {
      return state.products
    },
    productById(state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    }
  }
}
