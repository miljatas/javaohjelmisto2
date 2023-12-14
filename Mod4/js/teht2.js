'use strict';

const tvForm = document.querySelector('#tv');

tvForm.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const query = document.querySelector('input[name=q]').value;

  const hakuKysely = `https://api.tvmaze.com/search/shows?q=${query}`;
  console.log("-- Hakukysely: " + hakuKysely);

  try {

    const response = await fetch(
      hakuKysely
    );

    const jsonData = await response.json();

    kasitteData(jsonData);

  } catch (error) {
    console.log(error.message);
  }
});



function kasitteData(jsonData) {
    console.log(jsonData);
}