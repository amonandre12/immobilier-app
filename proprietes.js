export const property  = [
    {
        id : 1 , 
        icon : "fas fa-building" , 
        title : "Appartements" , 
        description : "Du studio au 5 pièces, dans les quartiers résidentiels et centres urbains."
    } , 

    {
        id : 2 , 
        icon : "fas fa-home" , 
        title : "Maisons" , 
        description : "Maisons individuelles et jumelées avec jardins et espaces verts."
    } , 

    {
        id : 3 , 
        icon : "fas fa-hotel", 
        title : "Villas" , 
        description : "Villas de luxe avec piscine, jardin et sécurité renforcée."
    } , 

    {
        id : 4 , 
        icon : "fas fa-warehouse", 
        title : "Locaux commerciaux " , 
        description : "Boutiques, bureaux et espaces professionnels dans les zones stratégiques."
    } , 

    {
        id : 5, 
        icon : "fas fa-archway", 
        title : "Terrains" , 
        description : "Terrains viabilisés pour construction résidentielle ou commerciale. "
    } , 

    {
        id : 6, 
        icon : "fas fa-city", 
        title : "Immeubles" , 
        description : "Immeubles d'habitation ou mixtes pour investisseurs institutionnels. "
    } , 
] ; 

// The affichage the data 
const dataContainer = document.getElementById('propertyContent')

for(let i = 0 ; i < property.length ; i ++ ) {
    const compterData = property[i]
    
    const wrapper = document.createElement('div')
    const icon = document.createElement('i') 
    const title = document.createElement('h2')
    const description = document.createElement('p') 

    icon.className = compterData.icon 
    icon.classList.add('icons')


    title.textContent = compterData.title
    title.classList.add('titre') 

    description.textContent = compterData.description
    description.classList.add('paragraph')

    wrapper.classList.add('property-card');
    wrapper.append(icon , title , description) 
    console.log(wrapper)

    if(dataContainer) {
        dataContainer.appendChild(wrapper)
    }
}
