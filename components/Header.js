// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector(`.header-container`)

function Header() {
    // Header Div
    const headerDiv = document.createElement(`div`)
    headerDiv.classList.add(`header`)
    
    // Date Span
    const date = document.createElement(`span`)
    date.classList.add(`date`)
    date.textContent = `MARCH 28, 2020`
    headerDiv.appendChild(date)

    // H1
    const headline = document.createElement(`h1`)
    headline.textContent = `Lambda Times`
    headerDiv.appendChild(headline)

    // Temp
    const temp = document.createElement(`span`)
    temp.classList.add(`temp`)
    temp.textContent = `98°`
    headerDiv.appendChild(temp)

    // Append Header Div to Parent Element
    headerContainer.appendChild(headerDiv)

}

Header()