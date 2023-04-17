
export default class apiCompte
{
    constructor() {
        this.baseurl = "http://localhost:3000"
    }
    myFetch(url, init) {
        return new Promise(((resolve, reject) => {
            fetch(`${this.baseurl}/${url}`, init)
                .then(response => {
                    if (response.status === 200) {
                        resolve(response.json())
                    } else {
                        reject(response.status)
                    }
                })
                .catch(err => reject(err))
        }))
    }
    creerUtilisateur(email, nom, prenom, mdp)
    {
        console.log(`fetch`)
        return this.myFetch('users', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                nom: nom,
                prenom: prenom,
                mdp: mdp
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }

    recupererUtilisateur(email, mdp)
    {
        console.log(`fetch`)
        return this.myFetch('users', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                mdp: mdp
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }
}

