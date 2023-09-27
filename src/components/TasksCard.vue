<template>
  <div class="task-card">
    <div class="content-data">
      <label>Description:</label>
      <p>{{ description }}</p>
      <div v-if="status_id == 2 || status_id == 3">
        <label>Qualification:</label>
        <p>{{ qualification }}</p>
      </div>
    </div>
    <div class="content-buttons-task">
      <button @click="cancelTask" class="btn-cancel-task" v-if="status_id == 1">Cancel</button>
      <button @click="editTask" class="btn-edit">Edit</button>
    </div>
  </div>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['cancelTask', 'showModalEdit'])

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  qualification: {
    type: Number,
    required: false
  },
  status_id: {
    type: Number,
    required: true
  }
})

function cancelTask(){
  emit('cancelTask', props.id)
}

function editTask(){
  emit('showModalEdit', props)
}

</script>

<style scoped>
.task-card{
  display: grid;
    grid-template-columns: 2fr 1fr;
    width: 400px;
    border: 1px solid #222222;
    padding: 20px 10px;
    margin-bottom: 10px;
    box-shadow: 5px 5px 5px #0f0f0f;
    color: rgb(204, 204, 204);
}

.content-data label{
  font-size: 12px;
}

.content-data p{
  font-weight: bold;
}

.content-buttons-task{
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
}

.content-buttons-task button{
  width: 100%;
  height: 30px;
  border: none;
  color: white;
  cursor: pointer;
}

.btn-edit{
  background-color: rgb(44, 55, 212);
}

.btn-edit:hover{
  background-color: rgb(35, 43, 167);
}

.btn-cancel-task{
  background-color: rgb(143, 18, 18);
}

.btn-cancel-task:hover{
  background-color: rgb(124, 13, 13);
}

</style>