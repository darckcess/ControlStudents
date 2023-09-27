<template>
  <div class="container">
    <div class="content">
      <h2>Students Control</h2>
      <div class="content-buttons">
        <button @click="updateData" id="btn-update">Update</button>
        <button @click="showModal" id="btn-create">Create</button>
      </div>
    </div>

    <ModalCreateStudent
      v-if="modalVisibility"
      :showModal="modalVisibility"
      @showModal="modalVisibility = false"
      @createStudent="createStudent"
    >
    </ModalCreateStudent>

    <StudentCard v-for="(student, index) in allStudents" :key="index" :student_id="student.id" :name="student.name" :age="student.age" @deleteStudent="deleteStudent"/>

  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import ModalCreateStudent from "../components/ModalCreateStudent.vue";
import StudentCard from "../components/StudentCard.vue";

const modalVisibility = ref(false);
const allStudents = ref([]);

onMounted(() => {
  updateData();
});

function showModal() {
  modalVisibility.value = true;
}

function updateData() {

  let requestGet = requestOptions;
  requestGet.method = 'GET';
  delete requestGet.body;

  prepareFetch(epGetStudents, requestGet).then(response => {
    response.json().then(res => {
      allStudents.value = res;
    })
  })

}

function createStudent(studentData) {

  let requestPost = requestOptions;
  requestPost.method = 'POST';
  requestPost.body = JSON.stringify(studentData);
  
  prepareFetch(epStudents, requestPost).then(response => {
    console.log('student created');
  })

  updateData();
}

function deleteStudent(student_id){

  let requestDelete = requestOptions;
  requestDelete.method = 'DELETE';

  prepareFetch(epDeleteStudent + student_id, requestDelete).then(response => {
    console.log('student deleted');
  })

  updateData();
}
</script>

<script>
//URL API
const URL_API = "https://tlqrendsvrgefxmmguml.supabase.co/rest/v1/";

//Endpoints 
const epStudents = 'students'
const epGetStudents = "students?select=*,tasks(*,status(*))";
const epStatus = "status";
const epTask = "tasks";
const epDeleteStudent = 'students?id=eq.'

//header get
let getHeaders = new Headers();
getHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscXJlbmRzdnJnZWZ4bW1ndW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5NjExODksImV4cCI6MjAwOTUzNzE4OX0.Jx6GrKpsNmjXNurY9ZGUJCNKBZYuPA61dehq8wCy2-U");
getHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscXJlbmRzdnJnZWZ4bW1ndW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5NjExODksImV4cCI6MjAwOTUzNzE4OX0.Jx6GrKpsNmjXNurY9ZGUJCNKBZYuPA61dehq8wCy2-U");

//header post
let postHeaders = getHeaders;
postHeaders.append("Content-Type", "application/json");
postHeaders.append("Accept", "application/json");

//data request
let requestOptions = {
  headers: getHeaders,
  redirect: "follow",
};


async function prepareFetch(endpoint, data) {
  return await fetch(URL_API + endpoint, data);
}
</script>



<style>

.content h2{
  text-align: center;
}

.content-buttons{
  display: flex;
  justify-content: space-around;
  gap: 10px;
  margin: 10px 0;
} 

.content-buttons button{
  width: 50%;
  height: 30px;
  border: none;
  color: white;
  cursor: pointer;
}

#btn-update{
  background-color: rgb(44, 55, 212);
}

#btn-create{
  background-color: rgb(14, 146, 25);
}

#btn-update:hover{
  background-color: rgb(35, 43, 167);
}

#btn-create:hover{
  background-color: rgb(10, 107, 18);
}

</style>
