<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Products</h1>
        <v-card class="elevation-10 mb-2" v-for="(product, index) in products" :key="index">
          <v-layout>
            <v-flex xs4>
              <v-card-media :src="product.imageSrc" height="250px"></v-card-media>
            </v-flex>

            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ product.title }}</h2>
                <p>{{ product.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="`/product/${product.id}`">Open</v-btn>
              </v-card-actions>
            </v-flex>

          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
        ]
      }
    }
  }
</script>

<style scoped>

</style>
