const url = "https://api.adviceslip.com/advice";
const result = document.querySelector(".result");
const btn = document.querySelector("button");


const getAdvice = async function() {

    try {
        const response = await fetch(url);
        const object = await response.json();

        console.log (object.slip.advice);

        result.innerHTML = `<div class="result">${object.slip.advice}<div>`;
    }

    catch (error) {
        console.log(error);
    }
}

btn.addEventListener ("click", getAdvice);










