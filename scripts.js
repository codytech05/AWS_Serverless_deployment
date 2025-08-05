// Add your API endpoint here
var API_ENDPOINT =
  "https://vndmw6m81e.execute-api.us-east-1.amazonaws.com/prod/";

// AJAX POST request to save student data
document.getElementById("savestudent").onclick = function () {
  var inputData = {
    studentid: $("#studentid").val(),
    name: $("#name").val(),
    class: $("#class").val(),
    age: $("#age").val(),
  };
  $.ajax({
    url: API_ENDPOINT,
    type: "POST",
    data: JSON.stringify(inputData),
    contentType: "application/json; charset=utf-8",
    success: function (response) {
      document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
    },
    error: function () {
      alert("Error saving student data.");
    },
  });
};

// AJAX GET request to retrieve all students
document.getElementById("getstudents").onclick = function () {
  $.ajax({
    url: API_ENDPOINT,
    type: "GET",
    contentType: "application/json; charset=utf-8",
    success: function (response) {
      let students = [];
debugger
            // If body is a JSON string, parse it
            if (typeof response.body === 'string') {
                students = JSON.parse(response.body);
                console.log("studentsString", students);
            } else {
                // Optional fallback if body was already parsed
                students = response.body;
                console.log("students", students);
            }

            $('#studentTable tbody').empty(); // Clear old rows

            jQuery.each(students, function (i, student) {
                $("#studentTable tbody").append("<tr> \
                    <td>" + student.studentid + "</td> \
                    <td>" + student.name + "</td> \
                    <td>" + student.class + "</td> \
                    <td>" + student.age + "</td> \
                </tr>");
            });
    },
    error: function () {
      alert("Error retrieving student data.");
    },
  });
};
