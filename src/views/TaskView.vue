<template>
  <div class="content-tasks">
    <h2>Create a new task</h2>
    <div class="content-buttons">
      <button @click="getTasks" id="btn-update">Update</button>
      <button @click="showModal" id="btn-create">Create</button>
    </div>

    <div class="create-task">
      <ModalCreateTask
        v-if="visibility"
        :showModal="visibility"
        @showModal="visibility = false"
        @createTask="createTask"
      />
    </div>

    <div class="content-card-task">
      <TasksCard
        v-for="(component, index) in tasks"
        :key="index"
        :id="component.id"
        :description="component.description"
        :qualification="component.qualification"
        :status_id="component.status_id"
        @cancelTask="cancelTask"
        @showModalEdit="showModalEd"
      />
    </div>
  </div>

  <ModalEdit
    v-if="showModalEdit"
    :id="dataEdit.id"
    :description="dataEdit.description"
    :qualification="dataEdit.qualification"
    @closeModal="closeModalEdit"
    @saveChanges="editTask"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ModalCreateTask from "../components/ModalCreateTask.vue";
import TasksCard from "../components/TasksCard.vue";
import ModalEdit from "../components/ModalEdit.vue";

const route = useRoute();

const student_id = route.params.student_id;
const tasks = ref([]);
const visibility = ref(false);
const showModalEdit = ref(false);
const dataEdit = ref({});

function showModal() {
  visibility.value = true;
}

function showModalEd(data) {
  showModalEdit.value = true;
  dataEdit.value = data;
}
function closeModalEdit() {
  showModalEdit.value = false;
}

onMounted(() => {
  getTasks();
});

function getTasks() {
  let requestGet = requestOptions;
  requestGet.method = "GET";
  delete requestGet.body;

  prepareFetch(epGetTask + student_id, requestGet).then((response) => {
    response.json().then((res) => {
      tasks.value = res;
    });
  });
}

function createTask(data) {
  data.student_id = student_id;

  let requestPost = requestOptions;
  requestPost.method = "POST";
  requestPost.body = JSON.stringify(data);

  prepareFetch(epTask, requestPost).then((response) => {
    console.log("created task");
    console.log(requestPost);
  });
  getTasks();
}

function cancelTask(task_id) {
  let requestPatch = requestOptions;
  requestPatch.method = "PATCH";
  requestPatch.body = JSON.stringify({ status_id: 4 });

  prepareFetch(epJustTask + task_id, requestPatch).then((response) => {
    console.log("Canceled task");
  });

  getTasks();
}

function editTask(data) {
  let requestPatch = requestOptions;
  requestPatch.method = "PATCH";
  requestPatch.body = JSON.stringify(data);

  prepareFetch(epJustTask + data.id, requestPatch).then((response) => {
    console.log("updated task");
  });

  getTasks();
}
</script>



<script>
//URL API
const URL_API = "https://tlqrendsvrgefxmmguml.supabase.co/rest/v1/";

//Endpoints

const epGetTask = "tasks?student_id=eq.";
const epJustTask = "tasks?id=eq.";
const epTask = "tasks";

//header get
let getHeaders = new Headers();
getHeaders.append(
  "apikey",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscXJlbmRzdnJnZWZ4bW1ndW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5NjExODksImV4cCI6MjAwOTUzNzE4OX0.Jx6GrKpsNmjXNurY9ZGUJCNKBZYuPA61dehq8wCy2-U"
);
getHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscXJlbmRzdnJnZWZ4bW1ndW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5NjExODksImV4cCI6MjAwOTUzNzE4OX0.Jx6GrKpsNmjXNurY9ZGUJCNKBZYuPA61dehq8wCy2-U"
);

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

<style scoped>
.create-task {
  width: 100%;
}
.content-tasks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
}

.content-buttons {
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 10px;
  margin: 10px 0;
}

.content-buttons button {
  width: 50%;
  height: 30px;
  border: none;
  color: white;
  cursor: pointer;
}
</style>