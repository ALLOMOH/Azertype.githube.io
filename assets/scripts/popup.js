/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la 
 * fermeture de la popup de partage. 
 * 
 *********************************************************************************/


/**
 * Cette fonction affiche la popup pour partager son score. 
 */

function afficherPopup(){
    let popupBackground=document.querySelector(".popupBackground")
        // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popupBackground.classList.add("active")
}
/**
 * Cette fonction cache la popup pour partager son score. 
 */

function cacherPopup(){
    let popupBackground = document.querySelector(".popupBackground")
      // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
}


/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */
function initAddEventListenerPopup(){
    //On écoute le click sur le button "partager"
    btnPartage = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click",()=>{
        afficherPopup()
    })
    // On écoute le click sur la div "popupBackground"
    popupBackground.addEventListener("click",(e)=>{
        if(e.target === popupBackground){
            cacherPopup()
        }
    })
}
