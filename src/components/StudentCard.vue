<template>
  <div class="card-student">
    <div class="content-data">
      <div>
        <label>Name:</label>
        <p> {{ name }} </p>
      </div>
      <div>
        <label>Age:</label>
        <p> {{ age }} </p>
      </div>
    </div>
    <div class="content-buttons">
      <router-link :to="{name: 'task', params: {student_id}}" class="btn-task">Task</router-link>
      <button @click="deleteStudent" class="btn-delete">X</button>
    </div>
  </div>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  student_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['showTask', 'deleteStudent']);

function deleteStudent(){
  emit('deleteStudent', props.student_id);
}

</script>

<style scoped>
  .card-student{
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 400px;
    border: 1px solid #222222;
    padding: 20px 10px;
    margin-bottom: 10px;
    box-shadow: 5px 5px 5px #0f0f0f;
    color: rgb(204, 204, 204);
  }

  .content-data{
    display: grid;
    grid-template-columns: 2fr 1fr;

  }
  .content-data label{
    font-size: 12px;
  }

  .content-data p{
    font-weight: bold;
  }

  .content-buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
  }

  .btn-delete{
    width: 100%;
    height: 25px;
    border: none;
    color: white;
    cursor: pointer;
    padding: 5px 10px;
    background-color: rgb(114, 15, 15);
  }

  .btn-task{
    width: 100%;
    height: 25px;
    border: none;
    color: white;
    cursor: pointer;
    text-decoration: none;
    padding: 5px 10px;
    background-color: rgb(44, 55, 212);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-delete:hover{
    background-color: rgb(94, 12, 12);
  }

  .btn-task:hover{
    background-color: rgb(35, 43, 167);
  }

</style>