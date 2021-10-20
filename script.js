let input           = document.querySelector('#champ_de_saisie');
let phrase_erreur   = document.querySelector('#phrase_erreur');
let formulaire      = document.querySelector('form');

let nombreDessais   = 0;
let nombreAleatoire = Math.floor(Math.random() * Math.floor(1001));
let nombreChoisi;

function afficherResultat(nombre) {
    let resultat = document.createElement('p');

    if(nombre < nombreAleatoire) {
        resultat.textContent = "#" + nombreDessais + " (" + nombre + ") C'est plus !";
        resultat.className = "conteneur_resultat plus";
    }
    else if(nombre > nombreAleatoire) {
        resultat.textContent = "#" + nombreDessais + " (" + nombre + ") C'est moins !";
        resultat.className = "conteneur_resultat moins";
    }
    else {
        resultat.textContent = "#" + nombreDessais + " (" + nombre + ") Félicitations vous avez trouvez le juste prix !";
        resultat.className = "conteneur_resultat fini";
        input.disabled = true;
    }

    document.querySelector('#resultat_par_defaut').prepend(resultat);
} 

input.addEventListener('keyup', () => {
    if(isNaN(input.value)) {
        phrase_erreur.style.display = 'block';
    }
    else {
        phrase_erreur.style.display = 'none';
    }
});

formulaire.addEventListener('submit', (event) => {
    event.preventDefault();

    if(isNaN(input.value) || input.value == '') {
        input.style.borderColor = 'red';
    }
    else {
        input.style.borderColor = 'silver';
        nombreDessais++;
        nombreChoisi = input.value;
        input.value = '';
        afficherResultat(nombreChoisi);
    }
});

