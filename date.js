let todayDate = document.getElementById("todayDate");

function toDate(){
    let today = new Date();
    let year = today.getFullYear();
    console.log(year);
    //today.String(getFullYear());
    let month = String(today.getMonth()+1).padStart(2,"0");
    console.log(month);
    //today.String(getMonth()+1).padStart(2,"0");
    let date = today.getDate();
    console.log(date);
    //today.String(getDate()).padStart(2,"0");
    todayDate.innerText =`${year}. ${month}. ${date}`;
    console.log("rfff");
}

toDate();