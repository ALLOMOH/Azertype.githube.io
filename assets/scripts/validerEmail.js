function validerEmail(email) {
  let emailRegxExp = new RegExp("[a-zA-Z._-]+@[a-zA-Z._-]+\\.[a-z]+");
  if (emailRegxExp.test(email)) {
    throw new Error("L'email n'est pas valide.");
  }

  /**
   * Cette fonction lance le jeu.
   * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
   */
  function lancerJeu() {
    // Initialisations
    initAddEventListenerPopup();
    let mots = document.getElementById("mots");
    let phrases = document.getElementById("pharases");
    let i = 0;
    let score = 0;
    let listProposition = listeMots;
    let btnValiderMot = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");
    let baliseemail = document.getElementById("email");
    afficherProposition(listeMots[i]);
    btnValiderMot.addEventListener("click", () => {
      if (inputEcriture.value == listProposition[i]) {
        score++;
      }
      afficherProposition(listProposition[i]);
      i++;
      afficherResultat(score, i);
      inputEcriture.value = "";
      if (listeMots[i] == undefined) {
        afficherProposition("Le jeu est fini");
        btnValiderMot.disabled = true;
      } else {
        afficherProposition(listProposition[i]);
      }
    });

    let listeBtnRadio = document.querySelectorAll(".optionSource input");
    for (let index = 0; index < listeBtnRadio.length; index++) {
      listeBtnRadio[index].addEventListener("change", (event) => {
        if (event.target.value === "1") {
          listProposition = listeMots;
        } else {
          listProposition = listePhrases;
        }
        afficherProposition(listProposition[i]);
      });
    }

    verifibalise = (balise) => {
      if (balise.value === "") {
        balise.classList.add("error");
      }
      // else{
      //   balise.classList.remove('error')
      // }
    };

    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      let nom = document.getElementById("nom").value;
      let email = document.getElementById("email").value;
      e.preventDefault();
      verifibalise(nom);
      verifibalise(email);

      let scoreEmail = `${score} / ${i}`;

      if (validerNom(nom) && validerEmail(email)) {
        afficherEmail(nom, email, scoreEmail);
      } else {
        throw new Error("error!");
      }
    });

    afficherResultat(score, i);
  }
}
