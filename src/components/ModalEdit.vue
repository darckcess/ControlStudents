<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-body">
        <label for="">Name</label>
        <input type="text" placeholder="Description" v-model="description">
        <label for="">Qualification</label>
        <input type="text" placeholder="Qualification" v-model="qualification">
      </div>
      <div class="modal-footer">
        <button @click="closeModal" class="btn-cancel">Close</button>
        <button @click="saveChanges" class="btn-save">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, defineEmits, defineProps } from 'vue'

const description = ref(props.description)
const qualification = ref(props.qualification)
let status_id = ref(1)

const emit = defineEmits(['closeModal', 'saveChanges'])
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
  }
})

function closeModal(){
  emit('closeModal', false)
}

function saveChanges(){

  console.log()
  if(props.qualification > 6)
    status_id = 2
  else 
    status_id = 1

  emit('saveChanges', {id: props.id, description: description.value, qualification: qualification.value, status_id: status_id})
}

</script>

<style scoped>
body{
  font-family: Arial, sans-serif;
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    height: 100vh; /* Aprovecha toda la altura de la pantalla */
    margin: 0;
}
.modal{
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

.modal-content {
    background-color: #303030;
    padding: 20px;
    border: 1px solid #3a3a3a;
    width: 60%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    position: relative;
    margin: auto;
}

.modal-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
}
.modal-body input{
  width: 50%;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(87, 87, 87);
  color: white;
}

.modal-footer{
  margin-top: 20px;
  column-gap: 10px;
}

.modal-footer button {
  width: 25%;
  color: white;
  padding: 5px 0;
  border: none;
  cursor: pointer;
}

</style>