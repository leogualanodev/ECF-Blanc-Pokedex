var tab = new Array;
fetch (`https://pokeapi.co/api/v2/type`)
.then(response => response.json())
.then(function(response){
    console.log(response)
    
    for(let i=0; i < 20 ; i++){
        tab[i]= `${response.results[i].name}`
    }
    return tab
})
console.log(tab)
// je lance ma boucle pour remplir mes cartes pokémon sur mon écran de base


for ( let i=1; i < 152 ; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => response.json())
    .then(function(response){
    // console.log(response)
    let article = document.querySelector("article")
    // j'ajoute à chaque boucle du contenue dans mon html, stylisé en css auquel j'attribut un dataset que j'appelle id 
    article.innerHTML += `<button data-id="${i}" class="modal-button modal-trigger" id="pokémon${i}">  
                            <p class="number${i}">#${i}</p>
                            <div class="image"></div>
                            <div class="name">
                                <p>${response.name}</p>
                            </div>
                         </button>`
    
                        //  j'ajoute également le back-ground image qui est l'image de mon pokémon 
    let img= document.querySelector(`#pokémon${i}`)
    
    img.style.backgroundImage = `url(${response.sprites.front_default})`

        // je définie un événement au click auquel j'attribut la fonction toggleModal
    let modalContainer= document.querySelector(`.modal-container`);
    let modalTriggers = document.querySelectorAll(`.modal-trigger`);
    modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal)); 

    let modalClose = document.querySelectorAll(`.modal-close`);
    modalClose.forEach(close => close.addEventListener("click",closeModal));

    function closeModal (){
        modalContainer.classList.remove("active")
    }
       

    // cette fonction va permettre d'ajouter et d'enlever au click la classe active et donc faire apparaitre ou non ma modale 
    // elle va également permettre de remplir ma modale avec une 2nd fonction qui remplie ma modale en fonction de la ou je click (this = > cet élement la ))
    function toggleModal(){
        modalContainer.classList.add("active");
        returnInfo(this);
    }

    
      
    })

    
}

function returnInfo (a){
   
            
            fetch(`https://pokeapi.co/api/v2/pokemon/${a.dataset.id}`) // a étant l'élément "this" , on récupère le dataset (data-id) que l'on configurer plus haut 
            .then(response => response.json())
            .then( function(response){
                let pokemonImage= document.querySelector(`.pokemon-image`);
                pokemonImage.src = `${response.sprites.front_shiny}`;

                let pokeName = document.querySelector(`.name-modal`);
                pokeName.innerHTML = `${response.name}`;

                let weight = document.querySelector(`#part1 p`);
                weight.innerHTML = `${response.weight} kg`;

                let height = document.querySelector(`#part2 p`);
                height.innerHTML = `${response.height} m`;


                let numberPokemon = document.querySelector(`.number-modal`);
                numberPokemon.innerHTML = `#${a.dataset.id}`

                let ability1 = document.querySelector(`.ability1`);
                ability1.innerHTML = `${response.abilities[0].ability.name}`;

                let ability2 = document.querySelector(`.ability2`);
                ability2.innerHTML = `${response.abilities[1].ability.name}`;
                // on remplie le ou les types de notre pokémon et on va le stylisé en fonction de celui-ci (background)
                let type1= document.querySelector(`.type1`);
                type1.innerHTML = `${response.types[0].type.name}`
                if ( response.types[1].type.name !== undefined){   // je fais un if au cas où la 2nd abilité n'existe pas: le script continue !:) 
                    let type2= document.querySelector(`.type2`);
                    type2.innerHTML = `${response.types[1].type.name}`
                }
                // je définis ici les couleurs de type du pokemon dans ma modale 
                let colorFire1 = document.querySelector(`.type1`);
                let colorFire2 = document.querySelector(`.type2`);

                if ( `${response.types[0].type.name}` === `${tab[9]}`){
                        colorFire1.style.backgroundColor = "#f08030";
                }
                    
                

                else if ( `${response.types[0].type.name}` === `${tab[1]}` ){
                   
                        colorFire1.style.backgroundColor = "#c03028"
                   
                } 
                else if (`${response.types[0].type.name}` === `${tab[2]}`){
                    
                        colorFire1.style.backgroundColor = "#a890f0"
                   
                } 
                else if (`${response.types[0].type.name}` === `${tab[3]}`){
                    
                        colorFire1.style.backgroundColor = "#a040a0"
                    
                }
                else if (`${response.types[0].type.name}` === `${tab[4]}` ){
                    
                        colorFire1.style.backgroundColor = "#e0c068"
                    
                }
                else if (`${response.types[0].type.name}` === `${tab[5]}` ){
                    
                        colorFire1.style.backgroundColor = "#b8a038"
                    
                }
                else if (`${response.types[0].type.name}` === `${tab[6]}` ){
                    
                        colorFire1.style.backgroundColor = "#a8b820"
                }
                  
                
                else if (`${response.types[0].type.name}` === `${tab[7]}` ){
                    
                        colorFire1.style.backgroundColor = "#705898"
                     
                }
                else if (`${response.types[0].type.name}` === `${tab[8]}` ){
                   
                        colorFire1.style.backgroundColor = "#b8b8d0"
                    
                }
                else if (`${response.types[0].type.name}` === `${tab[10]}`){
                   
                        colorFire1.style.backgroundColor = "#6890f0"
                   
                }
                else if (`${response.types[0].type.name}` === `${tab[11]}`){
                    
                        colorFire1.style.backgroundColor = "#78c850"
                     
                }
                else if (`${response.types[0].type.name}` === `${tab[12]}`){
                    
                        colorFire1.style.backgroundColor = "#f8d030"
                   
                }
                else if (`${response.types[0].type.name}` === `${tab[13]}` ){
                    
                        colorFire1.style.backgroundColor = "#f85888"
                   
                }
                else if (`${response.types[0].type.name}` === `${tab[14]}` ){
                    
                        colorFire1.style.backgroundColor = "#98d8d8"
                   
                }
                else if (`${response.types[0].type.name}` === `${tab[15]}`){
                   
                        colorFire1.style.backgroundColor = "#7038f8"
                     
                }
                else if (`${response.types[0].type.name}` === `${tab[16]}` ){
                    
                        colorFire1.style.backgroundColor = "#705848"
                   
                }
                else if (`${response.types[0].type.name}` === `${tab[17]}` ){
                    
                        colorFire1.style.backgroundColor = "#ee99ac"
                   
                }
                else if (`${response.types[0].type.name}` === `${tab[19]}` ){
                   
                        colorFire1.style.backgroundColor = "#564c4e"
                   
                }
                else if (`${response.types[0].type.name}` === `${tab[18]}`){
                    
                        colorFire1.style.backgroundColor = "#68a090"  
                }
                else if (`${response.types[0].type.name}` === `${tab[0]}` ){
                    
                        colorFire1.style.backgroundColor = "#a8a878"  
                }
                else {
                    colorFire1.style.backgroundColor = "black"
                    
                }
                


                let diff = 10/15  // je definie une échelle pour le remplissage des mes barres de stats dans la modale (l'attaque de certain peut être supperieur à 100)
                    // je remplie ici la barre de stats de mon pokémon 
                let hp = document.querySelector(`#stats-number p`);
                let hpBar = document.querySelector(`.hp`);
                hp.innerHTML = `${response.stats[0].base_stat}`;
                hpBar.style.width = `${(response.stats[0].base_stat)*(diff)}%`;

                let atk = document.querySelector(`#stats-number p:nth-child(2)`);
                let atkBar = document.querySelector(`.atk`);
                atk.innerHTML = `${response.stats[1].base_stat}`;
                atkBar.style.width = `${(response.stats[1].base_stat)*(diff)}%`;

                let def = document.querySelector(`#stats-number p:nth-child(3)`);
                let defBar = document.querySelector(`.def`);
                def.innerHTML = `${response.stats[2].base_stat}`;
                defBar.style.width = `${(response.stats[2].base_stat)*(diff)}%`;

                let satk = document.querySelector(`#stats-number p:nth-child(4)`);
                let satkBar = document.querySelector(`.satk`);
                satk.innerHTML = `${response.stats[3].base_stat}`;
                satkBar.style.width = `${(response.stats[3].base_stat)*(diff)}%`;

                let sdef = document.querySelector(`#stats-number p:nth-child(5)`);
                let sdefBar = document.querySelector(`.sdef`);
                sdef.innerHTML = `${response.stats[4].base_stat}`;
                sdefBar.style.width = `${(response.stats[4].base_stat)*(diff)}%`;

                let spd = document.querySelector(`#stats-number p:nth-child(6)`);
                let spdBar = document.querySelector(`.spd`);
                spd.innerHTML = `${response.stats[5].base_stat}`;
                spdBar.style.width = `${(response.stats[5].base_stat)*(diff)}%`;
                

                
    })


}
