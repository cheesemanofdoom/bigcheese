var clear1st = document.querySelector(".js-name-form-submit")

var container = document.querySelector(".js-container")
//cheese list
var cheeselist =
  "abbaye de belloc, abbaye de citeaux, abbaye du mont des cats, abertam, abondance, acapella, ackawi, acorn, adelost, affidelice au chablis, afuega'l pitu, airag, airedale, aisy cendre, allgauer emmentaler, alverca, ambert, american cheese, ami du chambertin, anejo enchilado, anneau du vic-bilh, anthoriro, appenzell, aragon, ardi gasna, ardrahan, armenian string, aromes au gene de marc, asadero, asiago, aubisque pyrenees, autun, avaxtskyr, baby swiss, babybel, baguette laonnaise, bakers, baladi, balaton, bandal, banon, barry's bay cheddar, basing, basket cheese, bath cheese, bavarian bergkase, baylough, beaufort, beauvoorde, beenleigh blue, beer cheese, bel paese, bergader, bergere bleue, berkswell, bethmale des pyrénées, bethmale of the pyrenees, beyaz peynir, bierkase, bishop kennedy, blarney, bleu d'auvergne, bleu de gex, bleu de laqueuille, bleu de septmoncel, bleu de termignon alpage, bleu des causses, blue, blue castello, blue of termignon, blue rathgore, bocconcini, boeren leidenkaas, bonchester, bosworth, bougon, boule du roves, boulette d'avesnes, boursault, boursin, bouyssou, bra, braudostur, breakfast cheese, brebis du lavort, brebis du lochois, brebis du puyfaucon, bresse bleu, brick, brie, brie au poivre, brie de meaux, brie de melun, brie with pepper, brillat-savarin, brin, brin d'amour, brinza burduf brinza), briquette de brebis, briquette du forez, broccio, broccio demi-affine, brousse du rove, bruder basil, brusselae kaas fromage de bruxelles), bryndza, buchette d'anjou, buffalo, burgos, butte, butterkase, button innes), buxton blue, cabecou, caboc, cabrales, cachaille, caciocavallo, caciotta, caerphilly, cairnsmore, calenzana, cambazola, camembert, canadian cheddar, canestrato, cantal, caprice des dieux, capricorn goat, capriole banon, caravane, carre de l'est, casciotta di urbino, cashel blue, castelleno, castelmagno, castelo branco, castigliano, cathelain, celtic promise, cendre d'olivet, cerney, chabichou, chabichou du poitou, chabis de gatine, chaource, charolais, chaumes, cheddar, cheddar clothbound, cheshire, chevres, chevrotin des aravis, chontaleno, civray, coeur de camembert au calvados, coeur de chevre, cojack, colby, colby-jack, cold pack, comte, coolea, cooleney, coquetdale, corleggy, cornish pepper, cotherstone, cotija, cottage cheese, cougar gold, coulommiers, coverdale, crayeux de roncq, cream cheese, cream havarti, crema agria, crema mexicana, creme fraiche, crescenza, croghan, crottin de chavignol, crowdie, crowley, cuajada, curd, cure nantais, curworthy, cwmtawe pecorino, cypress grove chevre, danablu danish blue), danbo, danish fontina, daralagjazsky, dauphin, delice des fiouves, denhany dorset drum, derby, dessertnyj belyj, devon blue, devon garland, dolcelatte, doolin, doppelrhamstufel, dorset blue vinney, double gloucester, double worcester, dreux a la feuille, dry jack, duddleswell, dunbarra, dunlop, dunsyre blue, duroblando, durrus, dutch mimolette commissiekaas), edam, edelpilz, emental grand cru, emlett, emmental, epoisses de bourgogne, esbareich, esrom, etorki, evansdale farmhouse brie, evora de l'alentejo, exmoor blue, explorateur, farmer, feta, figue, filetta, fin-de-siecle, finlandia swiss, finn, fiore sardo, fleur du maquis, flor de guia, flower marie, folded, folded cheese with mint, fondant de brebis, fontainebleau, fontal, fontina val d'aosta, formaggio di capra, fougerus, four herb gouda, fourme d' ambert, fourme de haute loire, fourme de montbrison, fresh jack, fresh mozzarella, fresh ricotta, fresh truffles, fribourgeois, friesekaas, friesian, friesla, frinault, fromage a raclette, fromage corse, fromage de montagne de savoie, fromage frais, fruit cream cheese, frying cheese, fynbo, gabriel, galette du paludier, galette lyonnaise, galloway goat's milk gems, gammelost, gaperon a l'ail, garrotxa, gastanberra, geitost, gippsland blue, gjetost, gloucester, golden cross, gorgonzola, gornyaltajski, gospel green, gouda, goutu, gowrie, grabetto, graddost, grafton village cheddar, grana, grana padano, grand vatel, grataron d' areches, gratte-paille, graviera, greuilh, greve, gris de lille, gruyere, gubbeen, guerbigny, halloumi, harbourne blue, havarti, heidi gruyere, hereford hop, herrgardsost, herriot farmhouse, herve, hipi iti, hubbardston blue cow, humboldt fog, hushallsost, iberico, idaho goatster, idiazabal, il boschetto al tartufo, ile d'yeu, isle of mull, jarlsberg, jermi tortes, jibneh arabieh, jindi brie, jubilee blue, juustoleipa, kadchgall, kaseri, kashta, kefalotyri, kenafa, kernhem, kervella affine, kikorangi, king island cape wickham brie, king river gold, klosterkaese, knockalara, kugelkase, l'aveyronnais, l'ecir de l'aubrac, la taupiniere, la vache qui rit, laguiole, lairobell, lajta, lanark blue, lancashire, langres, lappi, laruns, lavistown, le brin, le fium orbo, le lacandou, le roule, leafield, lebbene, leerdammer, leicester, leyden, limburger, lincolnshire poacher, lingot saint bousquet d'orb, liptauer, little rydings, livarot, llanboidy, llanglofan farmhouse, loch arthur farmhouse, loddiswell avondale, longhorn, lou palou, lou pevre, lyonnais, maasdam, macconais, mahoe aged gouda, mahon, malvern, mamirolle, manchego, manouri, manur, marble cheddar, marbled cheeses, maredsous, margotin, maribo, maroilles, mascares, mascarpone, mascarpone torta, matocq, maytag blue, meira, menallack farmhouse, menonita, meredith blue, mesost, metton cancoillotte), meyer vintage gouda, mihalic peynir, milleens, mimolette, mine-gabhar, mini baby bells, mixte, molbo, monastery cheeses, mondseer, mont d'or lyonnais, montasio, monterey jack, monterey jack dry, morbier, morbier cru de montagne, mothais a la feuille, mozzarella, mozzarella di bufala, mozzarella fresh, mozzarella rolls, muenster, murol, mycella, myzithra, naboulsi, nantais, neufchatel, niolo, nokkelost, northumberland, oaxaca, olde york, olivet au foin, olivet bleu, olivet cendre, orkney extra mature cheddar, orla, oschtjepka, ossau fermier, ossau-iraty, oszczypek, oxford blue, p'tit berrichon, palet de babligny, paneer, panela, pannerone, pant ys gawn, parmesan, parmigiano reggiano, pas de l'escalette, passendale, pasteurized processed, pate de fromage, patefine fort, pave d'affinois, pave d'auge, pave de chirac, pave du berry, pecorino, pecorino in walnut leaves, pecorino romano, peekskill pyramid, pelardon des cevennes, pelardon des corbieres, penamellera, penbryn, pencarreg, pepper jack, perail de brebis, petit morin, petit pardou, petit-suisse, picodon de chevre, picos de europa, pinconning, piora, pithtviers au foin, plateau de herve, plymouth cheese, podhalanski, poivre d'ane, polkolbin, pont l'eveque, port nicholson, port-salut, postel, pouligny-saint-pierre, pourly, prastost, pressato, prince-jean, processed cheddar, provel, provolone, pyengana cheddar, pyramide, quark, quartirolo lombardo, quatre-vents, quercy petit, queso blanco, queso blanco con frutas --pina y mango, queso de murcia, queso del montsec, queso del tietar, queso fresco, queso iberico, queso jalapeno, queso majorero, queso media luna, queso para frier, queso quesadilla, rabacal, raclette, ragusano, raschera, reblochon, red leicester, regal de la dombes, reggianito, remedou, requeson, richelieu, ricotta, ricotta salata, ridder, rigotte, rocamadour, rollot, romano, romans part dieu, roncal, roquefort, roule, rouleau de beaulieu, royalp tilsit, rubens, rustinu, saaland pfarr, saanenkaese, saga, sage derby, sainte maure, saint-marcellin, saint-nectaire, saint-paulin, salers, samso, san simon, sancerre, sap sago, sardo, sardo egyptian, sbrinz, scamorza, schabzieger, schloss, selles sur cher, selva, serat, seriously strong cheddar, serra da estrela, sharpam, shelburne cheddar, shropshire blue, siraz, sirene, smoked gouda, somerset brie, sonoma jack, sottocenare al tartufo, soumaintrain, sourire lozerien, spenwood, sraffordshire organic, st. agur blue cheese, stilton, stinking bishop, string, sussex slipcote, sveciaost, swaledale, sweet style swiss, swiss, syrian armenian string), tala, taleggio, tamie, tasmania highland chevre log, taupiniere, teifi, telemea, testouri, tete de moine, tetilla, texas goat cheese, tibet, tillamook cheddar, tilsit, timboon brie, toma, tomme brulee, tomme d'abondance, tomme de chevre, tomme de romans, tomme de savoie, tomme des chouans, tommes, torta del casar, toscanello, touree de l'aubier, tourmalet, trappe veritable), trois cornes de vendee, tronchon, trou du cru, truffe, tupi, turunmaa, tymsboro, tyn grug, tyning, ubriaco, ulloa, vacherin-fribourgeois, v alencay, vasterbottenost, venaco, vendomois, vermont cheddar, vieux corse, vignotte, vulscombe, waimata farmhouse blue, washed rind cheese, waterloo, weichkaese, wellington, wensleydale, white stilton, whitestone farmhouse, wigmore, woodside cabecou, xynotyro, yarg cornish, yarra valley pyramid, yorkshire blue, zamorano, zanetti grana padano, zanetti parmigiano reggiano"

const cheeseadded = []

var nameoffield = document.querySelector(".js-name-form-field")

var btnSubmit = document.querySelector(".js-name-form-submit")
//cheese list
function cheeseadd() {
  nameoffield = document.querySelector(".js-name-form-field")
  var lowered = nameoffield.value.toLowerCase()
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
  console.log(cheeseadded)
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

var seconds = 21

function tick() {
  if (seconds < 2) {
    window.location = "https://youtu.be/xvFZjo5PgG0"
  }
  var counter = document.getElementById("counter")
  seconds--
  counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds)
  if (seconds > 0) {
    setTimeout(tick, 1000)
  } else {
    document.getElementById("verifiBtn").innerHTML = `
      <div class="Btn" id="ResendtBtn">
      <button type="submit">Restart</button>
      </div>
      `
    document.getElementById("counter").innerHTML = ""
  }
}
tick()
