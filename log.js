// Select elements
let sent = document.querySelector("#send");
let sbt = document.querySelector(".sendbtn");
let wr = document.querySelector("#wrong");
let val = document.querySelector(".ip");
let fsend = document.querySelector("#fsend");
let out = document.querySelector("#out");
let loading = document.querySelector(".loading");
let asms = document.querySelector("#asms");
let email = document.querySelector("#em");
let dis = false;
let hist = document.querySelector(".hist");
let ht = document.querySelector("#ht");
let a = document.querySelector("#a");
let part = document.querySelector("#part");


// By default, hide sendbtn
sbt.style.display = "none";
loading.style.display = "none";
// hist.style.display = "none";

// When "send" is clicked -> show the button
sent.addEventListener("click", () => {
    sbt.style.display = "block";
});

// When "wrong" is clicked -> hide the button
wr.addEventListener("click", () => {
    sbt.style.display = "none";
});



fsend.addEventListener("click", () => {
    if (val.value != "") {
        let atm = document.querySelector("#atm");
        let updateValue = document.querySelector("#value");
        console.log(updateValue.innerText);
        console.log(atm.value);
        if (parseInt(updateValue.innerText) < parseInt(atm.value)) {
            console.log(updateValue.innerText);
            console.log(atm.value);
            alert("not enough amount");
        }
        else {
            dis = true;
            console.log(updateValue.innerText);
            console.log(atm.value);
            updateValue.innerText = updateValue.innerText - atm.value;
            loading.style.display = "block";
            asms.innerText = `sent ₹${atm.value} to ${email.value}`;



            setTimeout(() => {
                loading.style.display = "none";

                if (dis) {
                    sbt.style.display = "none";
                    dis = false;
                }

            }, 3000);
            let hi = document.createElement("div");
            hi.classList.add("hist");

            // create two spans
            let p = document.createElement("span");
            p.classList.add("ht");   // ✅ class instead of id
            p.innerText = `Sent to ${email.value}`;

            let p1 = document.createElement("span");
            p1.classList.add("amt"); // ✅ class instead of id
            p1.innerText = `₹${atm.value}`;

            // append spans into history row
            hi.appendChild(p);
            hi.appendChild(p1);

            
            // append row into the history container
            part.appendChild(hi);
            



        }



    }

});
out.addEventListener("click", () => {
    window.location.href = "intex.html";
})
