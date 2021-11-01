//!json_placeholder_1
const { default: axios } = require("axios");

const getAllBtn = document.getElementById("getAllBtn"),
  getByIdBtn = document.getElementById("getByIdBtn"),
  createBtn = document.getElementById("createBtn"),
  deleteByIdBtn = document.getElementById("deleteByIdBtn"),
  updateByIdBtn = document.getElementById("updateByIdBtn");

getAllBtn.addEventListener("click", getAll);
createBtn.addEventListener("click", addNew);
getByIdBtn.addEventListener("click", getById);
deleteByIdBtn.addEventListener("click", deleteById);
// updateByIdBtn.addEventListener("click", updateById);

function getAll(e) {
  e.preventDefault();
  axios
    .get("/comments")
    .then(function (response) {
      if (response.status == 200) {
        const comments = response.data;
        console.log(comments);
      }
    })
    .catch(function (error) {
      console.log("you are in the get all catch");
    });
}

function addNew(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  axios
    .post("/comments", {
      name,
    })
    .then(function (response) {
      const comments = response;
      console.log(comments);
    })
    .catch(function (error) {
      console.log("you are in the create catch");
    });
}
function getById(e) {
  e.preventDefault();
  const id = document.getElementById("getById").value;
  axios
    .get(`/comments/${id}`)
    .then(function (response) {
      const askedComment = response.data;
      console.log("asked Comment: ", askedComment);
    })
    .catch(function (error) {
      console.log("you are in the get by ID catch");
    });
}

function deleteById(e) {
  e.preventDefault();
  let id = document.getElementById("deleteById").value;
  axios
    .delete(`/comments/${id}`)
    .then(function (response) {
      const comments = response.data;
      console.log(comments);
    })
    .catch(function (error) {
      console.log("you are in the delete by ID catch");
    });
}

// function updateById(e) {
//   e.preventDefault();
//   let id = document.getElementById("updateById").value;
//   axios
//     .patch(`/comments/${id}`, {
//       // name:
//     })
//     .then(function (response) {
//       const foundComment = response.data;
//       console.log(foundComment);
//     })
//     .catch(function (error) {
//       console.log("you are in the patch catch");
//     });
// }

//!json_placeholder_2
