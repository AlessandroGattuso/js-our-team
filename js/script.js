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
   let image = (cardsData[k].name + " " + cardsData[k].role).toLowerCase().replace(/ /g,"-");
   let card = `<div class="card myCard">
                  <img src="./img/${image}.jpg" class="card-img-top" alt="Image not found">
                  <div class="card-body text-center">
                      <p class="fs-4">${cardsData[k].name}</p>
                      <p class="card-role">${cardsData[k].role}</p>
                  </div>
                </div>`;

  grid.innerHTML += card;
}