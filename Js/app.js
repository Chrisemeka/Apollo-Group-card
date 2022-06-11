// team memebers array
const apolloMembers = [
    {name: 'Anyanwu Chukwuemeka', image: './img/Khrisemeka-circle.png', bestFood: 'Yamarita', complexion: 'chocolate', thingsLearnt: ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'Github'], bestMovie: 'Endgame', age: '20'},

    {name: 'Ifeoma Okafor', image: './img/e4ma-circle.png', bestFood: 'Yam and egg', complexion: 'dark', thingsLearnt: ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'Github'], bestMovie: 'No Way Home', age: '23'},

    {name: 'Kasie Ugwu', image: './img/kasie-circle.png', bestFood: 'Noodles', complexion: 'caramel', thingsLearnt: ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'Github'], bestMovie: 'Spartacus', age: '26'},

    {name: 'Ogaga Andrew', image: './img/drew-circle.png', bestFood: 'Pepper Soup', complexion: 'dark', thingsLearnt: ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'Github'], bestMovie: 'The 300', age: '27'},

    {name: 'Loveth Omokaro', image: './img/Loveth.png', bestFood: 'Swallow and Egwusi', complexion: 'caramel', thingsLearnt: ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'Github'], bestMovie: 'Infinity War', age: '21'},

    {name: 'Stanley Chijoke', image: './img/stanley-circle.png', bestFood: 'Beans and Plaintain', complexion: 'caramel', thingsLearnt: ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'Github'], bestMovie: 'Interstellar', age: '25'},

    {name: 'Charles Onyemenam', image: './img/charles-circle.png', bestFood: 'Fried Rice', complexion: 'dark', thingsLearnt: ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'Github'], bestMovie: 'Mulitverse Of Madness', age: '29'},

    {name: 'Shodipe Oladele', image: './img/ladel-circle.png', bestFood: 'Amala and Ewedu', complexion: 'chocolate', thingsLearnt: ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'Github'], bestMovie: 'DARK KNIGHT', age: '30'},
]


const row = document.getElementById('row');

for (let i = 0; i < apolloMembers.length; i++) {
    const card = `<div class="card mb-3 mx-3 col-lg-4" style="width: 30rem; background-color: #ddd">
    <div class="text-center"><img src="${apolloMembers[i].image}" class="card-img-top" alt="image"></div>
    <div class="card-body">
    <h5 class="card-title text-center">${apolloMembers[i].name}</h5>
    <ul class="card-text">
        <li>Best Food: ${apolloMembers[i].bestFood}</li>
        <li>Best Movie: ${apolloMembers[i].bestMovie}</li>
        <li>Complexion: ${apolloMembers[i].complexion}</li>
        <li>Things I Learnt: ${apolloMembers[i].thingsLearnt}</li>
    </ul>
    <div class="text-center"><button onclick="clickMe(${i})"><a href="#" class="btn btn-secondary on">Click Here</a></button></div>
    </div>
</div>`;
    row.innerHTML += card   
}

function clickMe(i) {
    alert(`${apolloMembers[i].name}`)
}





