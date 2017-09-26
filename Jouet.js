class Jouet {

    constructor(unId,unLibelle, uneTrancheAge, uneCategorie){
        this._id = unId;
        this._libelle = unLibelle;
        this._trancheAge = uneTrancheAge;
        this._categorie = uneCategorie;

        this._categorie.ajouterJouet(this);
    }


    get libelle(){
        return this._libelle;
    }

    get trancheAge(){
        return this._trancheAge.toString();
    }

    get categorie(){
        return this._categorie.libelle;
    }

    convenir(unAge){
        switch(unAge){
            case unAge<this.trancheAge.ageMin:
                return 0;//textNon = "Le jouet ne convient pas à l'age de l'enfant";
                break;
            case unAge>=this.trancheAge.ageMin && unAge<=this.trancheAge.ageMax:
                return 1;//"Le jouet convient à l'age de l'enfant";
                break;
            case unAge>this.trancheAge.ageMax:
                return 0;//textNon;
                break;
        }
    }

}
module.exports = Jouet;