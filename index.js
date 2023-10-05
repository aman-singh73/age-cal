const inpYears=document.getElementById("year");
const inpMonths=document.getElementById("month");
const inpDays=document.getElementById("day");

const DAYS=document.getElementById("DD");
const MONTHS=document.getElementById("MM");
const YEARS=document.getElementById("YY");

const form=document.querySelector("form");

const date=new Date();
let day=date.getDate();
let month=1+date.getMonth();
let year=date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs=document.querySelectorAll("input");
    let validator=true;
    inputs.forEach((i) => {
        const parent=i.parentElement;
        if(!i.value) {
            i.style.borderColor="red";
            parent.querySelector("small").innerText=" required.";
            validator=false;
        }
        else if(inpMonths.value>12) {
            inpMonths.style.borderColor="red";
            inpMonths.parentElement.querySelector("small").innerText="valid month";
            validator=false;
        }
        else if (inpDays.value > 31) {
            inpDays.style.borderColor = "red";
            inpDays.parentElement.querySelector("small").innerText ="valid day";
            validator = false;   
    }
    else {
        i.style.borderColor="black";
        parent.querySelector("small").innerText="";
        validator =true;
    }
});
return validator;
}

function handleSubmit (each) {
    each.preventDefault();
    if(validate()) {
        if(inpDays.value>day) {
            day=day+months[month-1];
            month =month-1;
        }
        if(inpMonths.value>month) {
            month=month+12;
            year=year-1;
        }
        const dd=day-inpDays.value;
        const mm=month-inpMonths.value;
        const yy=year-inpYears.value;

        DAYS.innerHTML=dd;
        MONTHS.innerHTML=mm;
        YEARS.innerHTML=yy;
    }
}
form.addEventListener("submit", handleSubmit);