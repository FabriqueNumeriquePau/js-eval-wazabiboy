class dj{
    constructor(nom, lien,){
         this.nom = nom;
         this.lien = lien;
      
    getHtml =()=> {
         const from = document.createElement("article");
         //construction du titre
         const titre = document.createElement('h2');
         titre.textContent = this.nom;
         from.appendChild(body);
         for( let i = 1; i <= this.classement; i++){
              const image = document.createElement("img");
              image.src = "./7.jpg";
              image.width=20;
              image.height=20;
              image.appendChild(image);
         }
         const p = document.createElement("p");
         p.textContent ="nom :" 

    };
}

}

export default dj;
