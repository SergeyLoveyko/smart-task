<template>
  <h2>Users List</h2>
  <div 
    class="d-flex align-items-start mb-2 pr-3" 
    style="justify-content: space-between;"
  >
    <div class="d-flex row">
      <div class="d-flex mr-3">
        <input 
          class="form__search form-control mr-2"
          placeholder="Search"
          v-model="inputValue"
          @keyup="filterUsers"
        >
        <select 
          class="form-control form_65"
          id="parentCategory"
          placeholder="Enter parent name"
          aria-describedby="parentCategoryHelp"
          v-model="categoryValue"
        >
          <option disabled value="">Select category</option>
          <option value="first_name">Name</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="adress">Adress</option>
        </select>
      </div>
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
            v-for="(user, index) in usersList" :key="user.id"
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
      usersListStor: [],
      usersList: [],
      sortUsersList: null,
      user: null,
      inputValue: '',
      categoryValue: '',
      showUserModal: ref(false)
    }
  },
  methods: {
    copyUserList(userListStart) {
      this.usersListStor = userListStart;
      this.usersList = userListStart;
    },

    openUserDetails(index) {
      this.user = this.usersList[index];
      this.showUserModal = true
    },

    removeUser(index) {
      this.usersList.splice(index, 1);
      this.axios.delete(`/users/${index}`)
        .then( responce => {
          console.log( responce );
        })
        .catch((error) => console.log( error ));
    },

    closeUserModal() {
      this.showUserModal = false
    },

    filterUsers() {

      const rgx = new RegExp(this.inputValue, 'i');
      this.usersList = this.usersListStor.filter(item => {
        if (rgx.test( item[this.categoryValue] )) {
          return true;
        } else {
          return false;
        }
      })

    },
  },
  // mounted() {
  //   this.axios.get('/users')
  //     .then((response) => (this.usersList = response.data.data))
  //     .catch((error) => console.log( error ));
  // },
  created() {
    this.axios.get('/users').then(response => {
          this.copyUserList(response.data.data);
    })
  }


}
</script>

<style scoped>
.table__img {
  height: 50px;
  border-radius: 20%;
}
</style>