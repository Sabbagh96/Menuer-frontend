// Replace 'https://api.example.com/data' with the actual API endpoint you want to get data from
fetch("http://localhost:4000/menuer/business/dashboard/home")
  .then((response) => {
    // Check if the response status is OK (status code 200-299)
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then((data) => {
    // Handle the JSON data
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch operation
    console.error("There was a problem with the fetch operation:", error);
  });
