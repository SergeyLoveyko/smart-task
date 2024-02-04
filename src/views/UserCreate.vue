<template>
  <div class="form-wrapper">
    <div class="form-container">
      <h2>Create User</h2>

      <div class="form-box">
        <form class="form" @submit.prevent="createUser">
          <div class="d-flex justify-content-between">
            <label 
              class="form-label form-label-col"
              for="staticName"
            >
              Name
            </label>
            <div class="form-65">
              <input 
                class="form-control"
                type="text"
                id="staticName"
                v-model.trim="form.userName"
              >
              <!-- <small class="error-message ps-3">
                The name field is required
              </small> -->
            </div>
          </div>

          <div class="d-flex justify-content-between">
            <label
              class="form-label form-label-col"
              for="staticEmail"
            >
              Email
            </label>
            <div class="form-65">
              <input
                class="form-control"
                type="email"
                id="staticEmail"
                v-model.trim="form.userEmail"
              >
              <!-- <small class="error-message ps-3">
                The email field is required
              </small> -->
            </div>
          </div>

          <div class="d-flex justify-content-end mt-4">
            <router-link to="/" class="mr-3">
              <button type="button" class="btn btn-secondary">Back</button>
            </router-link>
            <button type="submit" class="btn btn-primary">Create</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userName: '',
        userEmail: '',
      },
      flag: {
        userName: true,
        userEmail: true,

      },
    }
  },
  methods: {
    createUser() {
      let userData = {
        name: this.form.userName,
        email: this.form.userEmail
      }
      this.axios.post('https://reqres.in/api/users', userData)
        .then( responce => {
          console.log( responce );
          this.form.userName = '',
          this.form.userEmail = '',
          this.$router.push('/');
        })
    }
  }
}
</script>