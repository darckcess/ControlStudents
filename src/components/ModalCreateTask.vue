<template>
  <div class="modal-create-student" v-if="showModal">
    <div class="body-modal">
      <input type="text" placeholder="Description" v-model="taskDescription">
      <input type="text" placeholder="Qualification" v-model="taskQualification">
      <!-- <select name="status" id="">
        <option value="defualt" selected disabled>Select any status</option>
        <option value="1">Arppoved</option>
        <option value="1">Reproached</option>
        <option value="1">New</option>
        <option value="1">Cancelled</option>
      </select> -->
    </div>

    <div class="footer-modal">
      <button @click="closeModal" class="btn-close">Cancel</button>
      <button @click="createTask" class="btn-save">Save</button>
    </div>
  </div>
</template>

<script setup>

import { ref, defineProps, defineEmits } from 'vue'

const emit = defineEmits(['showModal', 'createTask'])

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true
  }
})

const taskDescription = ref('')
const taskQualification = ref('')
const taskStatus = ref(1)


function closeModal(){
  emit('showModal', false)
}

function createTask(){
  emit('createTask', {description: taskDescription.value, qualification: taskQualification.value, status_id: taskStatus.value})
}


</script>

<style scoped>

.create-task{
  width: 100%
}

</style>