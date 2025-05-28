fetch("https://127.0.0.1:8089/api/v3/user")
  .then((response) => { 
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
    )
    .then((data) => {
        console.log("Success:", data);
        }
    )
  .catch((error) => {
    console.error("Error:", error);
  }
    );