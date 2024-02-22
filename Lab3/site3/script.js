const activityName = document.querySelector(".activity");
const participantsNumber = document.querySelector(".participants");
const activityPrice = document.querySelector(".price");
const activityType = document.querySelector(".type")

const url = 'https://www.boredapi.com/api/activity';

async function getData()

{
    const resp = await fetch(url);
    // console.log(resp);

    const respData = await resp.json();

    console.log(respData);
    console.log(respData.activity)

    activityName.innerHTML = respData.activity
    participantsNumber.innerHTML = respData.participants
    activityPrice.innerHTML = respData.price
    activityType.innerHTML = respData.type
}

getData();



