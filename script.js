var clear1st = document.querySelector(".js-name-form-submit")

var container = document.querySelector(".js-container")

var cheeselist =
  "cheddar, parmigiano reggiano, parmesan, roquefort, brie, gruyere, feta, mozzarella, manchego, gorgonzola, epoisses, swiss cheese, gouda cheese, monterey jack, muenster cheese, provolone, blue cheese, camembert, irish cheddar, havarti, buffalo mozzarella, colby-jack, monterey jack, edam, ricotta, manchego, pepper jack cheese, roquefort, goat cheese, colby cheese, stilton cheese, emmentaler, cream cheese, comté cheese, american farmhouse cheddar, cottage cheese, grana padano, halloumi, rembrandt gouda, sharp provolone, danish blue, saint albray, appenzeller cheese, mascarpone, tomme de savoie, string cheese, saint-marcellin, american cheese, pont-l'évêque cheese, mahón cheese, cantal cheese, emmental français, selles-sur-cher cheese, neufchâtel cheese, morbier cheese, fourme de montbrison, cheese curdcaprice des dieux, reblochon, coulommiers cheese, taleggio cheese, vacherin, beaufort cheese, beaufort alpage, abondance cheese, saint-paulin cheese, chaource cheese, livarot cheese, rocamadour cheese, cambozola, oregon blue vein, leonora goat cheese, pimento cheese, banon cheese, cabrales cheese, tête de moine, boerenkaas, emmental de savoie, brocciu, laguiole cheese, limburger cheese, queso de bola, maroilles cheese, stichelton, ossau-lraty cheese, saint-nectaire, pont l'evêque, crottin de chavignol, mimolette, pélardon, fourme d'ambert, fromage frais, bleu du vercors-sassenage, cabecou, saint-félicien cheese, bleu d'auvergne, bleu de bresse, farmer cheese, hooligan, bleu des causses"

const cheeseadded = []

var nameoffield = document.querySelector(".js-name-form-field")

var btnSubmit = document.querySelector(".js-name-form-submit")

function cheeseadd() {
  nameoffield = document.querySelector(".js-name-form-field")
  var lowered = nameoffield.value.toLowerCase()
  //if cheese in cheeselist
  let result = cheeselist.includes(lowered)
  if (result == true) {
    if (cheeseadded.includes(lowered) == false) {
      container.innerHTML +=
        `
          <div>
            <h2>` +
        nameoffield.value +
        `</h2>
          </div>
          `
      cheeseadded.push(lowered)
    }
  } else {
    window.location = "https://www.youtube.com/watch?v=xvFZjo5PgG0"
  }
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

var cheesevideo = document.querySelector(".js-name-form-cheesevideo")

cheesevideo.addEventListener("click", function (event) {
  event.preventDefault()
  window.location =
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLWF9-KIGLqKU8kGznKOOgNNok0y2t925r"
})
