<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Registration form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field prepend-icon="person" name="email" label="email" type="email" :rules="emailRules"
                              v-model="email"></v-text-field>
                <v-text-field prepend-icon="lock" name="password" label="Password" type="password"
                              :rules="passwordRules" :counter="6" v-model="password"></v-text-field>
                <v-text-field prepend-icon="repeat" name="confirm-password" label="Confirm Password" type="password"
                              :rules="confirmPasswordRules" :counter="6" v-model="confirmPassword"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="onSubmit" :loading="loading" :disabled="!valid || loading">Create Account
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be equal or than 6 characters'
        ],
        confirmPasswordRules: [
          v => !!v || 'Confirm Password is required',
          v => v === this.password || 'Password should be match'
        ]
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit() {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('registerUser', user)
            .then(() => {
              this.$router.push('/')
            })
            .catch(() => {
            })
        }
      }
    }
  }
</script>

<style scoped>

</style>
