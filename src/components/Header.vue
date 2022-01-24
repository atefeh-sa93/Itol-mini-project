<template>
  <div>
    <v-app-bar flat color="white">
      <v-container class="d-flex">
        <v-toolbar-title class="green--text font-weight-bold"
          >Itol mini project</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <router-link :to="{ name: 'Home' }" class="mr-3 text-decoration-none grey--text text--lighten-1">home</router-link>
          <router-link :to="{ name: 'Login' }" class="mr-3 text-decoration-none grey--text text--lighten-1">Sign in</router-link>
          <router-link :to="{ name: 'Register' }" class="text-decoration-none grey--text text--lighten-1">Sign up</router-link>
      </v-container>
    </v-app-bar>
  </div>
</template>
