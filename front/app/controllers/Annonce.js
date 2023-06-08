import BaseController from './basecontroller.js'
import ApiModel from '../model/apiModel.js'


class AnnonceController extends BaseController {
    constructor() {
        super()
        if(sessionStorage.getItem("token") == null && sessionStorage.getItem("ID_Utilisateur") == null)
        {
            document.location.href="../views/ConnexionCompte.html"
        }
        else
        {
            this.model = new ApiModel()
            this.token = sessionStorage.getItem("token")
            this.ID_Utilisateur = sessionStorage.getItem("ID_Utilisateur")
            this.ID_Annonce = sessionStorage.getItem("ID_Annonce")
            this.libelleAnnonce = document.getElementById('libelleAnnonce')
            this.descriptionAnnonce = document.getElementById('descriptionAnnonce')
            this.prix = document.getElementById('prix')
            this.ID_Utilisateur = document.getElementById('ID_Utilisateur')
            this.PossibleNego = document.getElementById('PossibleNego')
            this.ID_Categorie = document.getElementById('ID_Categorie')
            this.CommentaireAnnonce = document.getElementById('CommentaireAnnonce')
            this.recupererInfoAnnonce()
            this.afficherCommentaireAnnonce()
        }
    }
    async recupererInfoAnnonce()
    {
        let retour = await this.model.recupererInfoAnnonce(this.ID_Annonce, this.token)

        let PossibleNegos
        if(retour[0].PossibleNego === true)
        {
            PossibleNegos = "Oui"
        }
        else {
            PossibleNegos = "Non"
        }

        libelleAnnonce.innerHTML = retour[0].libelleAnnonce
        descriptionAnnonce.innerHTML = retour[0].descriptionAnnonce
        prix.innerHTML = retour[0].prix
        ID_Utilisateur.innerHTML = retour[0].utilisateur.nom + " " + retour[0].utilisateur.prenom
        PossibleNego.innerHTML = PossibleNegos
        ID_Categorie.innerHTML = retour[0].ID_Categorie
    }
    async evoyerMessage()
    {
        console.log("oui")
    }

    async afficherCommentaireAnnonce()
    {
        let retour = await this.model.afficherCommentaireAnnonce(this.ID_Annonce, this.token)
        for(let commentaire of retour)
        {
            CommentaireAnnonce.innerHTML += `
                <div class="div-Commentaire">
                    <div class="div-InfoCommentaire">
                        <span id="UtilisateurNom"> ${commentaire.utilisateur.nom} </span>
                        <span id="UtilisateurPrenom"> ${commentaire.utilisateur.prenom} </span>
                        <span id="horodatage"> ${formattedDateTime} </span>
                    </div>
                    <div class="div-InfoCommentaire">
                        <span id="TexteCommentaire"> ${commentaire.TexteCommentaire} </span>
                    </div>
                </div>
            `
        }

        console.log(retour)
    }
}

export default AnnonceController
