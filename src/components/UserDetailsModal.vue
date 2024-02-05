<template>
  <div class="modal" v-if="show" @click="closeModalTwo($event)">
    <div class="modal__container">

      <div class="modal__close" @click="closeModal">
        <div class="modal__close-line"></div>
      </div>
      <header class="modal__title">
        <h2>User Details</h2>
      </header>

      <main>
        <img class="modal__ava" :src="user.avatar" alt="avatar">
        <div class="modal__text">
          <div class="modal__item modal__name">
            <span>Name</span>
            <span>{{ user.first_name }}</span>
          </div>
          <div class="modal__item modal__email">
            <span>Email</span>
            <span>{{ user.email }}</span>
          </div>
          <div class="modal__item modal__phone">
            <span>Phone</span>
            <span>{{  }}</span>
          </div>
          <div class="modal__item modal__adress">
            <span>Adress</span>
            <span>{{  }}</span>
          </div>
        </div>
      </main>

    </div>

  </div>
</template>

<script>
export default {
  name: 'UserDetailsModal',

  props: [ 'show', 'user'],

  emits: [ 'close' ],

  methods: {
    closeModal() {
      this.$emit('close');
    },
    closeModalTwo(event) {
      if(!event.target.closest('.modal__container')) {
        this.closeModal();
      }
    }
  }
}
</script>

<style scoped>
  .modal {
    position: fixed;
    display: grid;
    place-items: center;
    inset: 0;
    background: rgba(0, 0, 0, .20);
    z-index: 10;
  }

  .modal__container {
    position: relative;
    background: #f5f5f5;
    padding: 1.5rem 2rem 1.5rem 2rem;
    width: 35%;
    max-width: 400px;
    border-radius: 15px;
    /* border: 1px solid #818f9d; */
    box-shadow:  0 0.1875rem 0.1875rem 0 rgba(14, 34, 56, .15);
  }

  .modal__close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    /* background-color: #000; */
    transform: rotate(0deg);
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .modal__close:hover {
    transform: rotate(90deg);
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .modal__close-line {
    position: relative;
    width: 31px;
    height: 3px;
    top: 13px;
    /* background: #000; */
  }

  .modal__close-line:before {
    content: "";
    position: absolute;
    width: 31px;
    height: 3px;
    bottom: 0px;
    left: 0;
    background: #818f9d;
    transform: rotate(-45deg);
  }

  .modal__close-line:after {
    content: "";
    position: absolute;
    width: 31px;
    height: 3px;
    top: 0px;
    left: 0;
    background: #818f9d;
    transform: rotate(45deg);
  }

  .modal__title {
    display: inline-flex;
    justify-content: center;
    align-items: start;
    margin-bottom: 2rem;
  }

  .modal__title h2 {
    margin: 0;
  }

  .modal__ava {
    border-radius: 15px;
    margin-bottom: 2rem;
  }

  .modal__text {
    padding: 1rem;
    border-radius: 15px;
    background-color: #818f9d;
  }

  .modal__item:not(:last-child) {
    margin-bottom: 1rem;
  }
  
  .modal__item>* {
    display: inline-flex;
    width: 50%;
    color: white;
  }


</style>