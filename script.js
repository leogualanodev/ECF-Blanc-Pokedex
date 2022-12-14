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
    console.log(response)
    let article = document.querySelector("article")
    // j'ajoute à chaque boucle du contenue dans mon html, stylisé en css auquel j'attribut un dataset que j'appelle id 
    article.innerHTML += `<button data-id="${i}" class="modal-button modal-trigger" id="pokémon${i}">  
                            <p class="number${i}">#${i}</p>
                            <div class="image"> <img src="${response.sprites.other.home.front_default}"> </div>
                            <div class="name">
                                <p>${response.name}</p>
                            </div>
                         </button>`
    
                        //  j'ajoute également le back-ground image qui est l'image de mon pokémon 


        // je définie un événement au click auquel j'attribut la fonction toggleModal
    let modalContainer= document.querySelector(`.modal-container`);
    let modalTriggers = document.querySelectorAll(`.modal-trigger`);
    modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal)); 

    let modalClose = document.querySelectorAll(`.modal-close`);
    modalClose.forEach(close => close.addEventListener("click",closeModal));

    function closeModal (){
        modalContainer.classList.remove("active");
        let hpBar = document.querySelector(`.hp`); hpBar.style.width = 0 ;
        let atkBar = document.querySelector(`.atk`) ; atkBar.style.width = 0 ; 
        let defBar = document.querySelector(`.def`) ; defBar.style.width = 0 ;
        let satkBar = document.querySelector(`.satk`) ; satkBar.style.width = 0 ;
        let sdefBar = document.querySelector(`.sdef`) ; sdefBar.style.width = 0 ;
        let spdBar = document.querySelector(`.spd`) ; spdBar.style.width = 0 ; 

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
                weight.innerHTML = `${(response.weight)/10} kg`;

                let height = document.querySelector(`#part2 p`);
                height.innerHTML = `${(response.height)/10} m`;


                let numberPokemon = document.querySelector(`.number-modal`);
                numberPokemon.innerHTML = `#${a.dataset.id}`

                let ability1 = document.querySelector(`.ability1`);
                ability1.innerHTML = `${response.abilities[0].ability.name}`;

                let ability2 = document.querySelector(`.ability2`);
                ability2.innerHTML = `${response.abilities[1].ability.name}`;
                // on remplie le ou les types de notre pokémon et on va le stylisé en fonction de celui-ci (background)
                let type1= document.querySelector(`.type1`);
                type1.innerHTML = `${response.types[0].type.name}`
                console.log(response.types[1]);
                if ( response.types[1] !== undefined){   // je fais un if au cas où la 2nd abilité n'existe pas: le script continue !:) 
                    let type2= document.querySelector(`.type2`);
                    let colorFire2 = document.querySelector(`.type2`);
                    type2.innerHTML = `${response.types[1].type.name}`
                    if ( `${response.types[1].type.name}` === `${tab[9]}`){
                        colorFire2.style.backgroundColor = "#f08030";
                        }
                    
                

                        else if ( `${response.types[1].type.name}` === `${tab[1]}` ){
                   
                        colorFire2.style.backgroundColor = "#c03028"
                   
                        } 
                        else if (`${response.types[1].type.name}` === `${tab[2]}`){
                    
                        colorFire2.style.backgroundColor = "#a890f0"
                   
                        } 
                        else if (`${response.types[1].type.name}` === `${tab[3]}`){
                    
                        colorFire2.style.backgroundColor = "#a040a0"
                    
                        }
                        else if (`${response.types[1].type.name}` === `${tab[4]}` ){
                    
                        colorFire2.style.backgroundColor = "#e0c068"
                    
                        }
                        else if (`${response.types[1].type.name}` === `${tab[5]}` ){
                    
                        colorFire2.style.backgroundColor = "#b8a038"
                    
                        }
                        else if (`${response.types[1].type.name}` === `${tab[6]}` ){
                    
                        colorFire2.style.backgroundColor = "#a8b820"
                        }
                  
                
                        else if (`${response.types[1].type.name}` === `${tab[7]}` ){
                    
                        colorFire2.style.backgroundColor = "#705898"
                     
                        }
                        else if (`${response.types[1].type.name}` === `${tab[8]}` ){
                   
                        colorFire2.style.backgroundColor = "#b8b8d0"
                    
                        }
                        else if (`${response.types[1].type.name}` === `${tab[10]}`){
                   
                        colorFire2.style.backgroundColor = "#6890f0"
                   
                        }
                        else if (`${response.types[1].type.name}` === `${tab[11]}`){
                    
                        colorFire2.style.backgroundColor = "#78c850"
                     
                        }
                        else if (`${response.types[1].type.name}` === `${tab[12]}`){
                    
                        colorFire2.style.backgroundColor = "#f8d030"
                   
                        }
                        else if (`${response.types[1].type.name}` === `${tab[13]}` ){
                    
                        colorFire2.style.backgroundColor = "#f85888"
                   
                        }
                        else if (`${response.types[1].type.name}` === `${tab[14]}` ){
                    
                        colorFire2.style.backgroundColor = "#98d8d8"
                   
                        }
                        else if (`${response.types[1].type.name}` === `${tab[15]}`){
                   
                        colorFire2.style.backgroundColor = "#7038f8"
                     
                        }
                        else if (`${response.types[1].type.name}` === `${tab[16]}` ){
                    
                        colorFire2.style.backgroundColor = "#705848"
                   
                        }
                        else if (`${response.types[1].type.name}` === `${tab[17]}` ){
                    
                        colorFire2.style.backgroundColor = "#ee99ac"
                   
                        }
                        else if (`${response.types[1].type.name}` === `${tab[19]}` ){
                   
                        colorFire2.style.backgroundColor = "#564c4e"
                   
                        }
                        else if (`${response.types[1].type.name}` === `${tab[18]}`){
                    
                        colorFire2.style.backgroundColor = "#68a090"  
                        }
                        else if (`${response.types[1].type.name}` === `${tab[0]}` ){
                    
                        colorFire2.style.backgroundColor = "#a8a878"  
                        }
                        else {
                        colorFire2.style.backgroundColor = "black"
                    
                }
                }
                else
                {
                        let type2= document.querySelector(`.type2`);
                        type2.innerHTML  = ''
                }
                // je définis ici les couleurs de type du pokemon dans ma modale 
                let colorFire1 = document.querySelector(`.type1`);
                
                
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

                // deuxième couleur pour le type 2

                
                


                let diff = 10/20  // je definie une échelle pour le remplissage des mes barres de stats dans la modale (l'attaque de certain peut être supperieur à 100)
                    
                
                
                // je remplie ici la barre de stats de mon pokémon 
                let hp = document.querySelector(`#stats-number p`);
                hp.innerHTML = `${response.stats[0].base_stat}`;
                let atk = document.querySelector(`#stats-number p:nth-child(2)`);
                atk.innerHTML = `${response.stats[1].base_stat}`;
                let def = document.querySelector(`#stats-number p:nth-child(3)`);
                def.innerHTML = `${response.stats[2].base_stat}`;
                let satk = document.querySelector(`#stats-number p:nth-child(4)`);
                satk.innerHTML = `${response.stats[3].base_stat}`;
                let sdef = document.querySelector(`#stats-number p:nth-child(5)`);
                sdef.innerHTML = `${response.stats[4].base_stat}`;
                let spd = document.querySelector(`#stats-number p:nth-child(6)`);
                spd.innerHTML = `${response.stats[5].base_stat}`;


                setTimeout(()=> {
                        
                        



                        let hpBar = document.querySelector(`.hp`);
                        hpBar.style.cssText = `width:${(response.stats[0].base_stat)*(diff)}% ; background-color: #666666 ; transition: 1s; `; 
                        
                        let atkBar = document.querySelector(`.atk`);
                        atkBar.style.cssText = `width:${(response.stats[1].base_stat)*(diff)}% ; background-color: #666666 ; transition: 1s ; `;

                        let defBar = document.querySelector(`.def`);
                        defBar.style.cssText = `width:${(response.stats[2].base_stat)*(diff)}% ; background-color: #666666 ; transition: 1s;`;

                        let satkBar = document.querySelector(`.satk`);
                        satkBar.style.cssText = `width :${(response.stats[3].base_stat)*(diff)}% ; background-color: #666666 ; transition: 1s`;

                        let sdefBar = document.querySelector(`.sdef`);
                        sdefBar.style.cssText = ` width :${(response.stats[4].base_stat)*(diff)}% ; background-color: #666666 ; transition: 1s`;
                        
                        let spdBar = document.querySelector(`.spd`);
                        spdBar.style.cssText = ` width :${(response.stats[5].base_stat)*(diff)}% ; background-color: #666666 ; transition: 1s`;

                        
                },500)
                
                
    })

                fetch (`https://pokeapi.co/api/v2/pokemon-species/${a.dataset.id}`)
                .then (response => response.json())
                .then ( function (response){
                        
                        let desc = document.querySelector(`.text p `)
                        desc.innerHTML = response.flavor_text_entries[8].flavor_text

                })


}
