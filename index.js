var btnmin = document.querySelectorAll('.moins')
console.log(btnmin)

var btnpls = document.querySelectorAll('.plus')
console.log(btnpls)

var qte = document.querySelectorAll('.qte')
console.log(qte)


var prix = document.querySelectorAll('.price')
console.log(prix)

var total = document.querySelector('.tot')
console.log(total)
console.log(total.value)

var heart = document.querySelectorAll('.heart')
console.log(heart)


for (let i = 0; i < btnmin.length; i++) {
    btnmin[i].addEventListener('click', () => {
        if (+qte[i].value > 0) {
            +qte[i].value--
        }
        total.value = +total.value - (+(prix[i].value))
    })
}


for (let i = 0; i < btnpls.length; i++) {
    btnpls[i].addEventListener('click', () => {
        +qte[i].value++
        total.value = +total.value + (+(prix[i].value))
    })
}



var deleted = document.querySelectorAll('.delete')
console.log(deleted)

for (let i = 0; i < deleted.length; i++) {
    deleted[i].addEventListener('click', () => {
        deleted[i].parentElement.remove()
    })
}



for (let i = 0; i < btnpls.length; i++) {
    heart[i].addEventListener('click', () => {
        console.log((heart[i].style.backgroundColor));

        if ((heart[i].style.backgroundColor) != "red") {
            heart[i].style.backgroundColor = "red";
        } else {
            heart[i].style.backgroundColor = "white";
        }

    })
}