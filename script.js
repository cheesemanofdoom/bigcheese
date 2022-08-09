var clear1st = document.querySelector(".js-name-form-submit")

var container = document.querySelector(".js-container")

clear1st.addEventListener("click", function (event) {
  event.preventDefault()
  localStorage.setItem("1st", " ")
})

localStorage.setItem("2nd", "")

localStorage.setItem("3rd", "")

localStorage.setItem("1st", "")
var nameoffield = document.querySelector(".js-name-form-field")
var btnSubmit = document.querySelector(".js-name-form-submit")

function cheeseadd() {
  nameoffield = document.querySelector(".js-name-form-field")
  container.innerHTML +=
    `
  <div>
    <h2>` +
    nameoffield.value +
    `</h2>
  </div>
`
}

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault()
  cheeseadd()
})

var cheeseblog = document.querySelector(".js-name-form-cheeseblog")

cheeseblog.addEventListener("click", function (event) {
  event.preventDefault()
  window.location = "https://www.cheese.com/"
})

function sayHello(name) {
  console.log("Hello," + name)
}
for (i = 0; i < 2; i++) sayHello("")

var cheesevideo = document.querySelector(".js-name-form-cheesevideo")

cheesevideo.addEventListener("click", function (event) {
  event.preventDefault()
  window.location =
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLWF9-KIGLqKU8kGznKOOgNNok0y2t925r"
})
