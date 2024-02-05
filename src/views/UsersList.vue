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
          <th class="text-align-start">Name</th>
          <th class="text-align-start">Email</th>
          <!-- <th>Phone</th> -->
          <!-- <th>Adress</th> -->
          <th class="width-110">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table__line" 
            v-for="(user, index) in userList" :key="user.id"
        >
          <td>
            <img class="table__img" :src="user.avatar" alt="avatar">
          </td>
          <td class="text-align-start">
            <a href="/" @click.prevent="openUserDetails(index)">
              {{ user.first_name }} 
            </a>
            </td>
          <td class="text-align-start">{{ user.email }}</td>
          <!-- <td>({{ index }})</td> -->
          <!-- <td>{{ user.id }}</td> -->
          <td class="width-110">
            <div class="d-flex justify-content-around">
              <button class="btn-none">
                <i class="bi bi-gear"></i>
              </button>
              <button class="btn-none" @click="removeUser(index)">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="table-box__bottom"></div>
  </div>
  <UserDetailsModal :show="showUserModal" :user="user" @close="closeUserModal"/>
</template>

<script>
import {ref} from "vue"
import UserDetailsModal from "../components/UserDetailsModal.vue"

export default {
  name: 'UsersList',

  components: {
    UserDetailsModal
  },

  data() {
    return {
      userList: [],
      user: null,
      showUserModal: ref(false)
    }
  },
  methods: {
    openUserDetails(index) {
      this.user = this.userList[index];
      console.log( this.user );
      this.showUserModal = true
    },
    removeUser(index) {
      this.userList.splice(index, 1);
      this.axios.delete(`/users/${index}`)
        .then( responce => {
          console.log( responce );
        })
        .catch((error) => console.log( error ));
    },
    closeUserModal() {
      this.showUserModal = false
    }
  },
  mounted() {
    this.axios.get('/users')
      .then((response) => (this.userList = response.data.data))
      .catch((error) => console.log( error ));

  },
}
</script>

<style scoped>
.table__img {
  height: 50px;
  border-radius: 20%;
}
</style>