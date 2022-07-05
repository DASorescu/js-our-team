/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// # MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
// # MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
// # MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
// # BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
// # BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! */
// # DATI
/* 
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 
*/



// DATI INIZIALI NECESSARI 
// STRINGA VIUOTA 
let teamInfo = [];
// // COSTRUISCO L'ARRAY DI ELEMENTI
// #  MILESTONE 0
const ourTeam = 
[
{
    nome : 'Wayne',
    cognome : 'Barnett',
    occupation : 'Founder & CEO',
    photo : 'wayne-barnett-founder-ceo.jpg'
},
{
    nome : 'Angela',
    cognome : 'Caroll',
    occupation : 'Chief Editor',
    photo : 'angela-caroll-chief-editor.jpg'
},
{
    nome : 'Walter',
    cognome : 'Gordon',
    occupation : 'Office Manager',
    photo : 'walter-gordon-office-manager.jpg'
},
{
    nome : 'Angela',
    cognome : 'Lopez',
    occupation : 'Social Media Manager',
    photo : 'angela-lopez-social-media-manager.jpg'
},
{
    nome : 'Scott',
    cognome : 'Estrada',
    occupation : 'Developer',
    photo : 'scott-estrada-developer.jpg'
},
{
    nome : 'Barbara',
    cognome : 'Ramos',
    occupation : 'Graphic Designer',
    photo : 'barbara-ramos-graphic-designer.jpg'
}
]

// ? CICLO CHE GIRA GLI ELEMENTI E MI STAMPA IN CONSOLE LE CARATTERISTICHE DI OGNUNO DI ESSI 
// #MILESTONE 1 
for(i=0 ; i< ourTeam.length;i++){
    currentTeamMember = ourTeam[i];
    // console.log('-----------------TEAM-MEMBER-----------------------');
    teamInfo[i] = (currentTeamMember);
    
    for(let key in currentTeamMember ){
        // console.log(`${key} : ${currentTeamMember[key]}`) 
        
    }
    console.log(teamInfo)
}
// ? STAMPARE LE STESSE INFORMAZIONI IN PAGINA SOTTO FORMA DI STRINGA 
// # MILESTONE 2

    const teamElement = document.getElementById('our-team');
    teamElement.innerText
