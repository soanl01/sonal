var form1 = document.getElementById("slidepage");
var form = document.getElementById("form-1");
var form2 = document.getElementById("form-2");
var form3 = document.getElementById("form-3");
var form4 = document.getElementById("form-4");
var next1 = document.getElementById("next-btn1");
var next2 = document.getElementById("next-btn2");
var next3 = document.getElementById("submit-btn3");
var back1 = document.getElementById("back-btn1");
var back2 = document.getElementById("back-btn2");
var back3 = document.getElementById("back-btn3");
var progress = document.querySelector("#progress");
var submitBtn = document.querySelector("#next-btn3");
var mealType = document.querySelector("#mealtype");
var mealtaken = document.querySelector("#mealtaken");
var mealQuantity = document.querySelector("#mealQuantity");
var breakfasrcarboVal = document.querySelector("#value-carbohydrate");
var breakfastProtienVal = document.querySelector("#value-protien");
var breakfastFatsVal = document.querySelector("#value-fats");

let query = "";

async function getMealQuery() {
    query = `I ate ${mealQuantity.value} ${mealtaken.value} in the ${mealType.value}`;
    console.log(query);
    const res = await fetchData(query);
    console.log(res, "res");
    breakfasrcarboVal.innerHTML = res[0].carbohydrates_total_g;
    breakfastProtienVal.innerHTML = res[0].protein_g;
    breakfastFatsVal.innerHTML = res[0].fat_total_g;
} 

// const query = '1lb brisket and fries';
const apiKey = 'g+vTyEyE3KQNeVBPAEhgcg==K5XZ58inVNU39L5b';

async function fetchData(query) {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
        // Add code here to handle and display the result data
    } catch (error) {
        console.error('Error: ', error.message);
    }
}



next1.onclick = function () {
  form1.style.marginLeft = "-90%";
  // form2.style.marginLeft = "0";
  progress.style.width = "50%";
};

back1.onclick = function () {
  //  alert('hello')
  // form1.style.marginLeft = "66%";
  form1.style.marginLeft = "-10%";
  // form2.style.marginLeft = "-9%";
  progress.style.width = "25%";
};

next2.onclick = function () {
  // alert('hello')
  form2.style.marginLeft = "-24%";
  form3.style.marginLeft = "0";
  progress.style.width = "75%";
};

back2.onclick = function () {
//   alert('hello')
  form2.style.marginLeft = "3%";
  form3.style.marginLeft = "-22%";
  form3.style.display = "none";
  progress.style.width ="50%";

};
next3.onclick = function () {
//   alert('hello')
  getMealQuery();
  form3.style.marginLeft = "-34%";
  form4.style.marginLeft = "0";
  progress.style.width ="100%";
};




















