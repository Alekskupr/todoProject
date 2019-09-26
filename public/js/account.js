const updateButton = document.getElementsByClassName('updateButton');

function listenerUpdateButton() {
  for (let i = 0; i < updateButton.length; i += 1) {
    updateButton[i].addEventListener('click', e => {
      console.log(updateButton[i].parentNode.parentNode.id);

    });
  }
}

listenerUpdateButton();


// searchButton.addEventListener('click', async e => {
//   e.preventDefault();
//   const filterJSON = await fetch('/', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(filters),
//   });
//   const sendingRequest = await filterJSON.json();
//   console.log(sendingRequest);
//   const store = document.getElementById('storePlace');
//   store.innerHTML = storeT({ store: sendingRequest });
// });




//ПРИИИИИМЕР FETCH const form = document.forms["feedback"];

// form.addEventListener("submit", async event => {
//   event.preventDefault();
//   const { name: nameInput, height: heightInput } = event.target;
//   // alert(name.value);
//   // alert(height.value);

//   const response = await fetch("/feedback", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name: nameInput.value,
//       height: heightInput.value
//     })
//   });

//   const respData = await response.json();

//   const { name, height } = respData.data;
//   // console.log(name, height);

//   const list = document.querySelector("#users");
//   const itemName = document.createElement("li");
//   itemName.innerText = `name: ${name}`;
//   list.appendChild(itemName);

//   const itemHeight = document.createElement("li");
//   itemHeight.innerText = `height: ${height}`;
//   list.appendChild(itemHeight);

//   const helloResp = await fetch("/hello");

//   console.log(await helloResp.text());
// });

// async function fetchJson(url, options = {}) {
//   return await (await fetch(url, options)).json();
// }

// ответ с сервера 
// router.post("/feedback", function(req, res) {
//   const { name, height } = req.body;
//   fs.writeFile("db.json", JSON.stringify(req.body), () => {});
//   res.json({
//     status: "ok",
//     data: {
//       name,
//       height
//     }
//   });
// });