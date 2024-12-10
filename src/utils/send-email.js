export async function  sendEmail(data) {
  const apiEndpoint = "/api/email";
  console.log(data);
  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(`Success: ${response.message}`);
    })
    .catch((err) => {
      const errorMessage = err.message || "An error occurred";
      alert(`Error: ${errorMessage}`);
    });
}
