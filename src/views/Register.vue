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
            v-model="form.username"
            required
            label="username"
            outlined
          ></v-text-field>
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
            >Sign up</v-btn
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
  name: "Register",
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
    form: {
      username: "",
      password: "",
      email: "",
    },
    snackbar: false,
    text: "Your registration is completed",
    vertical: true,
    timeout: 2000,
  }),

  methods: {
    register() {
      axios
        .post("/users", { user: this.form })
        .then((result) => {
          if (result.status === 200) {
            this.snackbar = true;
            this.form = {
              username: "",
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
