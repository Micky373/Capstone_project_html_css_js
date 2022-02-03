const hamburger = document.getElementById('hamburger');
const menuItems = document.querySelector('.menu_items');
const closeButton = document.querySelector('.close_button');
const gotoItems = document.querySelectorAll('.goto');
const programContainer = document.querySelector('.programs');
const speakersList = document.querySelector('.speakers_list');
const displayMore = document.querySelector('.more');

// Mobile menu toggling

function toggling() {
  menuItems.classList.toggle('appear');
}
hamburger.addEventListener('click', toggling);
closeButton.addEventListener('click', toggling);
for (let i = 0; i < gotoItems.length; i += 1) {
  gotoItems[i].onclick = toggling;
}

// Main programm populating

const programs = [
  {
    image: './images/Lecture.png',
    title: 'Lecture',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.',
  },
  {
    image: './images/cc_exhibition.png',
    title: 'CC Exhibition',
    description: 'Appreciate various creations applying CC license of artists, organized from Art Center Nabi.',
  },
  {
    image: './images/forum.png',
    title: 'Forum',
    description: 'Have the time to share your thoughts and opinions with experts for each topic.',
  },
  {
    image: './images/workshop.png',
    title: 'Workshop',
    description: 'Try creating your own work using open source license rather than just watching.',
  },
  {
    image: './images/cc_ignite.png',
    title: 'CC Ignite',
    description: 'Get opportunities to network with CC affiliates around the world, also after the summit.',
  },
];

const speakers = [
  {
    image: 'yochai.png',
    name: 'Yochai Benkler',
    status: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies common-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    image: 'kilnam.png',
    name: 'Kilnam Chon',
    status: 'Retired',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society (ISOC) Internet Hall of Fame.',
  },
  {
    image: 'sohyeong.png',
    name: 'SohYeong Noh',
    status: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art pruduction in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    image: 'julia.png',
    name: 'Julia Leda',
    status: 'President of Young Pirates of Europe',
    description: 'European ingentration, political democracy and partecipation of youth through online as her major condern, Redas report outlining potential changes to EU copyright law was approved by the Parliament in July.',
  },
  {
    image: 'lila.png',
    name: 'Lila Tretikov',
    status: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    image: 'ryan.png',
    name: 'Ryan Merkley',
    status: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];
let programTemplate = '';
for (let i = 0; i < programs.length; i += 1) {
  programTemplate +=
    `<div class="program_${i + 1} flex_container">
            <img src="${programs[i].image}">
            <h1 class="program_headline">${programs[i].title}</h1>
            <p class="program_description">${programs[i].description}</p>
        </div>`
}

programContainer.innerHTML = programTemplate

let speakersTemplate = '';
let count = 0;
for (let i = 0; i < 2; i += 1) {
  speakersTemplate +=
    `<div class="speaker_container">
            <img src="./images/${speakers[i].image}">
            <div class="speaker_description">
                <h1>${speakers[i].name}</h1>
                <h2>${speakers[i].status}</h2>
                <hr>
                <p>${speakers[i].description}</p>
            </div>
        </div>`

}

for (let i = 2; i < speakers.length; i += 1) {
  speakersTemplate +=
    `<div class="speaker_container" id="dissapear">
            <img src="./images/${speakers[i].image}">
            <div class="speaker_description">
                <h1>${speakers[i].name}</h1>
                <h2>${speakers[i].status}</h2>
                <hr>
                <p>${speakers[i].description}</p>
            </div>
        </div>`
}

speakersList.innerHTML = speakersTemplate
const speakerContainer = document.querySelectorAll('.speaker_container')
displayTheRest = function () {
  if (speakerContainer[2].id == "dissapear") {
    for (let i = 2; i < speakerContainer.length; i++) {
      speakerContainer[i].removeAttribute('id')
    }
    displayMore.innerHTML = `Less
        <span class="display_less"><i class="fa fa-angle-up" aria-hidden="true"></i
        ></span>`
  }
  else {
    for (let i = 2; i < speakerContainer.length; i++) {
      speakerContainer[i].id = 'dissapear'
    }
    displayMore.innerHTML = `More
            <span class="display_more">v</span>`
  }
}


displayMore.onclick = displayTheRest