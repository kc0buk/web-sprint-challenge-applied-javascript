import axios from 'axios'
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const articlesEndpoint = `https://lambda-times-backend.herokuapp.com/articles`
const cardsParent = document.querySelector(`.cards-container`)
// console.log(cardsParent)

axios.get(articlesEndpoint)
    .then( response => {
        let articles = response.data.articles
        // console.log(articles)
        for (let obj in articles) {
            articles[obj].forEach( item => {
                let card = articleMaker(item)
                // console.log(card)
                cardsParent.appendChild(card)
            })
        }
    })
    .catch( err => {
        console.log(`There was an error. The error is ${err}`)
    })

function articleMaker(obj) {
    // console.log(obj.headline)
    // Card Div
    const cardDiv = document.createElement(`div`)
    cardDiv.classList.add(`card`)

    // Card Headline Div
    const cardHeadline = document.createElement(`div`)
    cardHeadline.classList.add(`headline`)
    cardHeadline.textContent = obj.headline
    cardDiv.appendChild(cardHeadline)

    // Author Div
    const authorDiv = document.createElement(`div`)
    authorDiv.classList.add(`author`)
    cardDiv.appendChild(authorDiv)

    // Author Image Div
    const authorImgDiv = document.createElement(`div`)
    authorImgDiv.classList.add(`img-container`)
    authorDiv.appendChild(authorImgDiv)

    // Author Image
    const authorImg = document.createElement(`img`)
    authorImg.src = obj.authorPhoto
    authorImg.alt = `Author photo`
    authorImgDiv.appendChild(authorImg)

    // Author Name
    const author = document.createElement(`span`)
    author.textContent = `By ${obj.authorName}`
    authorDiv.appendChild(author)

    // Headline Event Listener
    cardHeadline.addEventListener(`click`, () => {
        console.log(obj.headline)
    })

    return cardDiv
}