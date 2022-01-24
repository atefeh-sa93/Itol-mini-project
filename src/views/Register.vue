<template>
  <v-container class="about">
    <v-row>
      <v-col cols="12" md="6" offset="3">
        <h1 class="text-center">Sign up</h1>
        <router-link
          class="d-block text-center text-decoration-none green--text mb-3"
          :to="{ name: 'Login' }"
          >Have an account?</router-link
        >
        <v-form v-model="valid" @submit.prevent="register">
          <v-text-field
            v-model="user.username"
            required
            label="username"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
            outlined
          ></v-text-field>
          <v-btn color="success" block :disabled="!valid" type="submit">Sign up</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data: () => ({
    valid: false,

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],

    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    show1: false,
    user: {
      username: "",
      password: "",
      email: "",
    },
  }),

  methods: {
    register() {
       axios.post('/users', {user: this.user}).then((res)=> {
           console.log(res);
       })
    },
  },
};
</script>
