<template>
  <h2>Users List</h2>
  <div 
    class="d-flex align-items-start mb-2 pr-3" 
    style="justify-content: space-between;"
  >
    <div class="d-flex row">
      <input 
        class="form__search form-control mr-3"
        placeholder="Search"
      >
      <button 
        class="form__btn btn btn-secondary"
        type="button"
      >
        Reset
      </button>
    </div>
    <router-link to="users/create">
      <button class="btn btn-success">
        Create User
      </button>
    </router-link>
  </div>
  <div class="table-box">
    <div class="table-box__top"></div>
    <table class="table-main table-edge table_hover">
      <thead class="table-main__head">
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Adress</th>
          <th class="width_110">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table__line" 
            v-for="user in userList" :key="user.id"
        >
          <td>
            <img class="table__img" :src="user.avatar" alt="avatar">
          </td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.adress }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div class="table-box__bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  data() {
    return {
      userList: []
    }
  },
  // methods: {
  // },
  mounted() {
    this.axios.get('/')
      .then((response) => (this.userList = response.data.data))
      .catch((error) => console.log( error ));

  }
}
</script>

<style scoped>
.table__img {
  height: 50px;
  border-radius: 20%;
}
</style>