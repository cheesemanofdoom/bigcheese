var clear1st = document.querySelector(".js-name-form-submit")

var container = document.querySelector(".js-container")

clear1st.addEventListener("click", function (event) {
  event.preventDefault()
  localStorage.setItem("1st", " ")
})

localStorage.setItem("2nd", "")

localStorage.setItem("3rd", "")

localStorage.setItem("1st", "")

var btnSubmit = document.querySelector(".js-name-form-submit")

var nameoffield = document.querySelector(".js-name-form-field")

function cheeseadd() {
  container.innerHTML += `
  <div>
    <h2>("namemoffield")</h2>
  </div>
`
}

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault()
  cheeseadd()
})

function sayHello(name) {
  console.log("Hello," + name)
}
for (i = 0; i < 3; i++) sayHello("")

