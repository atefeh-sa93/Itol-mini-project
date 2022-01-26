<template>
  <v-container class="about">
    <v-row>
      <v-col cols="12" md="6" offset="3">
        <h1 class="text-center">Sign in</h1>
        <router-link
          class="d-block text-center text-decoration-none green--text mb-3"
          :to="{ name: 'Register' }"
          >Need an account?</router-link
        >
        <v-form v-model="valid" @submit.prevent="login">
          <v-text-field
            v-model="form.email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="form.password"
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
          <v-btn color="success" block :disabled="!valid" type="submit"
            >Sign in</v-btn
          >
          <v-snackbar
            v-model="snackbar"
            :vertical="vertical"
            :timeout="timeout"
            color="green darken-4"
          >
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
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
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    show1: false,
    form: {
      password: "",
      email: "",
    },
    snackbar: false,
    text: "Your are login now.",
    vertical: true,
    timeout: 2000,
  }),

  methods: {
    login() {
      axios
        .post("/users/login", { user: this.form })
        .then((result) => {
          if (result.status === 200) {
            this.snackbar = true;
            this.form = {
              password: "",
              email: "",
            };
          }
        })
        .catch(this.handleError);
    },
  },
};
</script>
First name
