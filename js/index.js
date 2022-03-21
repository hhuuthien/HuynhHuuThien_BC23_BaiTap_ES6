import { User } from "../models/User.js";

let renderUserInfo = (user) => {
  document.querySelector("#signup-form .content #steps-uid-0-p-2 .fieldset-content").innerHTML += "<div></div>";

  let stringHTML = "<ul>";
  for (let key in user) {
    stringHTML += `
        <li>
            <div>${key}</div>
            <span>${user[key]}</span>
        </li>
      `;
  }
  stringHTML += "</ul>";

  document.querySelector("#signup-form .content #steps-uid-0-p-2 .fieldset-content div:last-child").innerHTML = stringHTML;
};

let getInfoAndAddToUser = (user) => {
  let arrayInput = document.querySelectorAll("#signup-form input, #signup-form select");

  for (let input of arrayInput) {
    let { id, value } = input;
    user[id] = value;
  }
};

let btnFinish = document.querySelector("#signup-form .actions ul li:last-child a");

btnFinish.onclick = () => {
  if (btnFinish.innerHTML === "Finish") {
    let user = new User();
    getInfoAndAddToUser(user);
    renderUserInfo(user);
  } else {
    return;
  }
};
