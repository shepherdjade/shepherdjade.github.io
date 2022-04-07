// document.querySelector('button')
// document.querySelector('.new-quote button')


const quoteButton = document.querySelector('#js-new-quote');
  quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  async function getQuote() {
    console.log("quote button was clicked");
      try {
        const drink = document.querySelector('#fun').value;
        const response = await fetch(endpoint+drink);
        if (!response.ok) {
          throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json.drinks[0].strInstructions);
        displayQuote(json.drinks[0].strInstructions);
      } catch(err) {
        console.log(err)
        alert('Failed')
      }
  }

  function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
  }
