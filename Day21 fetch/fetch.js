//using randomuser.me api

fetch("https://randomuser.me/api/?results=10")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))

  .catch((error) => {
    console.log(error);
  });
