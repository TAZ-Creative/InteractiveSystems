
// const var1 = document.querySelector("h1");

// var1.innerHTML = "Something";

const url = 'https://www.boredapi.com/api/activity';

async function getData()
{
    const resp = await fetch(url);
    console.log(resp);
}

getData();