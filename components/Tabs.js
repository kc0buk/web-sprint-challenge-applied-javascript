import axios from 'axios'
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const topicsEndpoint = `https://lambda-times-backend.herokuapp.com/topics`
const topicsParent = document.querySelector(`.topics`)
// console.log(topicsParent)

axios.get(topicsEndpoint)
    .then( response => {
        let topics = response.data.topics
        topics.unshift(`all`)
        // console.log(topics)
        topics.forEach ( item => {
            const topicDiv = document.createElement(`div`)
            topicDiv.classList.add(`tab`)
            topicDiv.textContent = item.toUpperCase()
            topicsParent.appendChild(topicDiv)
        })
    })
    .catch( err => {
        console.log(`There was an error. The error is ${err}`)
    })
