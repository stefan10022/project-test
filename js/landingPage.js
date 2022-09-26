{
  const artistSelect = document.querySelector("#artist-select");
  const visitorBtn = document.querySelector(".shape-2");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((data) => {
      data.forEach((artist) => {
        const option = document.createElement("option");
        option.innerText = artist.name;
        option.value = artist.name;
        artistSelect.append(option);
      });
    })
    .catch((err) => console.log(err));

  visitorBtn.addEventListener("click", () => {
    location.hash = "visitor";
  });
}
