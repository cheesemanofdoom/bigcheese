var clear1st = document.querySelector(".js-name-form-submit")

var container = document.querySelector(".js-container")

clear1st.addEventListener("click", function (event) {
  event.preventDefault()
  localStorage.setItem("1st", " ")
})

var cheeselist =
  "cheddar, parmigiano reggiano, parmesan, roquefort, brie, gruyere, feta, mozzarella, manchego, gorgonzola, epoisses, swiss cheese, gouda cheese, monterey jack, muenster cheese, provolone, blue cheese, camembert, irish cheddar, havarti, buffalo mozzarella, colby-jack, monterey jack, edam, ricotta, manchego, pepper jack cheese, roquefort, goat cheese, colby cheese, stilton cheese, emmentaler, cream cheese, comté cheese, american farmhouse cheddar, cottage cheese, grana padano, halloumi, rembrandt gouda, sharp provolone, danish blue, saint albray, appenzeller cheese, mascarpone, tomme de savoie, string cheese, saint-marcellin, american cheese, pont-l'évêque cheese, mahón cheese, cantal cheese, emmental français, selles-sur-cher cheese, neufchâtel cheese, morbier cheese, fourme de montbrison, cheese curdcaprice des dieux, reblochon, coulommiers cheese, taleggio cheese, vacherin, beaufort cheese, beaufort alpage, abondance cheese, saint-paulin cheese, chaource cheese, livarot cheese, rocamadour cheese, cambozola, oregon blue vein, leonora goat cheese, pimento cheese, banon cheese, cabrales cheese, tête de moine, boerenkaas, emmental de savoie, brocciu, laguiole cheese, limburger cheese, queso de bola, maroilles cheese, stichelton, ossau-lraty cheese, saint-nectaire, pont l'evêque, crottin de chavignol, mimolette, pélardon, fourme d'ambert, fromage frais, bleu du vercors-sassenage, cabecou, saint-félicien cheese, bleu d'auvergne, bleu de bresse, farmer cheese, hooligan, bleu des causses"

localStorage.setItem("2nd", "")

localStorage.setItem("3rd", "")

localStorage.setItem("1st", "")
var nameoffield = document.querySelector(".js-name-form-field")
var btnSubmit = document.querySelector(".js-name-form-submit")

function cheeseadd() {
  nameoffield = document.querySelector(".js-name-form-field")
  //if cheese in cheeselist
  let result = cheeselist.includes(nameoffield.value.toLowerCase())
  if (result == true) {
    container.innerHTML +=
      `
  <div>
    <h2>` +
      nameoffield.value +
      `</h2>
  </div>
  `
  } else {
    window.location = "https://www.youtube.com/watch?v=xvFZjo5PgG0"
  }
  //else: rickroll
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
