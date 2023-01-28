import apiCompte from "../services/apiCompte.js"
export default class apiCompteModel
{
    constructor() {
        this.api = new apiCompte()
    }
    async creerUtilisateur(email, nom, prenom, mdp)
    {
        console.log("passage model")
        try {
            await this.api.creerUtilisateur(email, nom, prenom, mdp)
        } catch {
            return undefined
        }
    }
}