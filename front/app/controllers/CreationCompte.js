import BaseController from './basecontroller.js'
import apiCompteModel from '../model/apiCompteModel.js'
class CreationCompteController extends BaseController
{
    constructor() {
        super()
        this.model = new apiCompteModel()
    }
    verifFormulaire()
    {
        const danger = document.getElementById("messageDanger")
        let email = document.getElementById("Email").value
        let nom = document.getElementById("Nom").value
        let prenom = document.getElementById("Prenom").value
        let mdp = document.getElementById("Mdp").value
        let confirmMdp = document.getElementById("MdpComfirm").value

        if(email !== "" && nom !== "" && prenom !== "" && mdp !== "" && confirmMdp !== "")
        {
            danger.style="display: none;"
            console.log("test valide")
            this.model.creerUtilisateur(email, nom, prenom, mdp)
        }else
        {
            danger.style= ""
        }
    }
}

export default () => window.creationCompteController = new CreationCompteController()
