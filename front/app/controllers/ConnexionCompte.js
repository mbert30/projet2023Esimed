import BaseController from './basecontroller.js'
import apiCompteModel from '../model/apiCompteModel.js'
class ConnexionCompteController extends BaseController
{
    constructor() {
        super()
        this.model = new apiCompteModel()
    }
    verifFormulaire()
    {
        const danger = document.getElementById("messageDanger")
        let email = document.getElementById("Email").value
        let mdp = document.getElementById("Mdp").value

        if(email !== "" && mdp !== "")
        {
            danger.style="display: none;"
            console.log("test valide")
            this.model.recupererUtilisateur(email, mdp)
        }else
        {
            danger.style= ""
        }
    }
}

export default () => window.connexionCompteController = new ConnexionCompteController()