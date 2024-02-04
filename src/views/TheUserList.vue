<template>
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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
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