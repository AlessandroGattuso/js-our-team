
const cardsData = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
  },
];

const grid = document.querySelector('.grid');

for(let k in cardsData){
   //The image files name is composed by the lowercase name and role and in the middle raplace ' ' with '-';
   let image = (cardsData[k].name + " " + cardsData[k].role).toLowerCase().replace(/ /g,"-");
   let card = `<div class="card myCard">
                  <img src="./img/${image}.jpg" class="card-img-top" alt="Image not found">
                  <div class="card-body text-center">
                      <h4>${cardsData[k].name}</h4>
                      <p class="card-role">${cardsData[k].role}</p>
                  </div>
               </div>`;

   grid.innerHTML += card;
}