let stateInfo;

loadJson();

function loadJson() {
  fetch("./JSON/states.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      stateInfo = data;
      console.log(stateInfo);
      loadState();
    })
    .catch((err) => {
      console.log(err);
    });
}

function loadState() {
  const stateMain = document.querySelector(".stateForm");
  const selectElmt = document.querySelector("#searchState");
  stateMain.appendChild(selectElmt);
  let optionElmt;
  for (let i = 0; i < Object.keys(stateInfo).length; i++) {
    optionElmt = document.createElement("option");
    optionElmt.textContent = `${Object.keys(stateInfo)[i]}`;
    selectElmt.appendChild(optionElmt);
  }

  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  stateMain.appendChild(submitBtn);
}
