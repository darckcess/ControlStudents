<template>
  <div class="modal-create-student" v-if="showModal">
    <!-- <div class="header-modal">
      <button @click="closeModal" class="btn-close">Close</button>
    </div> -->
    <div class="body-modal">
      <label for="">Student Name</label>
      <input type="text" placeholder="Student name" v-model="studentName">
      <label for="">Student Age</label>
      <input type="text" placeholder="Student age" v-model="studentAge">
    </div>
    <div class="footer-modal">
      <button @click="closeModal" class="btn-cancel">Cancel</button>
      <button @click="createStudent" class="btn-save">Save</button>
    </div>
  </div>
</template>

<script setup>

import { ref, defineProps, defineEmits } from 'vue';

const emit = defineEmits(['showModal', 'createStudent']);

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true
  }
});

const studentName = ref('');
const studentAge = ref('');

function createStudent(){
  emit('createStudent', {name: studentName.value, age: studentAge.value});

  studentName.value = '';
  studentAge.value = '';
}

function closeModal(){
  emit('showModal', false);
}

</script>

<style>

.modal-create-student{
  margin: 20px 0;
  display: grid;
  grid-template-rows: 2fr 1fr;
  row-gap: 5px;
  border: 1px solid rgba(122, 122, 122, 0);
}

.header-modal{
  display: flex;
  justify-content: end;
}

.btn-close{
  width: 100px;
  height: 30px;
  background-color: rgb(143, 18, 18);
  border: none;
  cursor: pointer;
  color: white;
}

.btn-close:hover{
  background-color: rgb(124, 13, 13);
}

.body-modal{
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 10px;
}

.body-modal label{
  font-size: 12px;
  margin-left: 5px;
}

.body-modal input{
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(87, 87, 87);
  color: white;
}

.footer-modal{
  display: flex;
  justify-content: center;
  column-gap: 5px;
}

.footer-modal button{
  width: 100%;
  height: 30px;
  border: none;
  color: white;
  cursor: pointer;

}

.btn-cancel{
  background-color: rgb(114, 15, 15);
}

.btn-save{
  background-color: rgb(14, 146, 25);
}

.btn-cancel:hover{
  background-color: rgb(94, 12, 12);
}

.btn-save:hover{
  background-color: rgb(10, 107, 18);
}

</style>

