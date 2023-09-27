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
