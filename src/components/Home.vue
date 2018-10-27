<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel delimiter-icon="stop" prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right">
            <v-carousel-item
              v-for="(product, i) in products"
              :key="i"
              :src="product.imageSrc"></v-carousel-item>
          </v-carousel>
          <h1>Home</h1>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="(product, i) in products" :key="i">
          <router-link :aria-label="product.title" :to="'/product/' + product.id">
            <v-card-media :src="product.imageSrc" height="350px"></v-card-media>
          </router-link>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="card_heading heading">{{ product.title }}</h3>
                <div class="card_describe">
                  <p class="subheading">{{ product.description.substring(0, 60) }}</p>
                  <p class="subheading card_price"><span class="title">Price: </span>${{ product.price }}</p>
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="light-blue darken-4" round outline :to="'/products/' + product.id">Description</v-btn>
              <v-btn dark color="light-blue darken-4" round>Add to cart</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        products: [
          {
            id: '1',
            title: 'Lenovo Legion Y520',
            vendor: 'Lenovo',
            color: 'Black',
            material: 'metal/plastic',
            description: 'Intel core i5 7400HQ MHz/15.6',
            price: 784,
            promo: false,
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
            promo: false,
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
            promo: false,
            imageSrc: 'https://www.photoworkout.com/wp-content/uploads/2018/05/Best-Laptops-for-Photo-Editing.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .card_heading {
    font-weight: bold;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .card_describe {
    margin-top: auto;
    padding-left: 1rem;
  }

  .card_price {
    color: #c00f1b;
    font-size: 18px;
  }
</style>
