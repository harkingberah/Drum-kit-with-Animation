// let b1 = document.querySelectorAll("button")[0].addEventListener("click", handleClick)
// let b2 = document.querySelectorAll("button")[1].addEventListener("click", handleClick)
// function handleClick() {
//     alert("i got clicked");
// }

// let all = document.querySelectorAll(".drum")

// for (let i = 0; i < all.length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         // alert("i got clicked");
//         // this.style.color = "white";
//         let btnInnerHtml = this.innerHTML
//         switch (btnInnerHtml) {
//             case "w":
//                 let firstSound = new Audio("/sounds/tom-1.mp3")
//                 firstSound.play()
//             case "a":
//                 let secondSound = new Audio("/sounds/tom-2.mp3")
//                 secondSound.play()
//             case "s":
//                 let thirdSound = new Audio("/sounds/tom-3.mp3")
//                 thirdSound.play()
//             case "d":
//                 let fourthSound = new Audio("/sounds/tom-4.mp3")
//                 fourthSound.play()
//             case "j":
//                 let fifthSound = new Audio("/sounds/kick-bass.mp3")
//                 fifthSound.play()
//             case "k":
//                 let sixthSound = new Audio("/sounds/crash.mp3")
//                 sixthSound.play()
//             case "l":
//                 let seventhSound = new Audio("/sounds/snare.mp3")
//                 seventhSound.play()
//             default:
//                 console.log(btnInnerHtml)

//         }
//     })
// }
// document.addEventListener("keydown", function(e) {
//     //alert("key has been pressed")
//     // console.log(e)
//     // let keyClicked = e.key
//     // console.log(keyClicked)
//     switch (e.key) {
//         case "w":
//             let firstSound = new Audio("/sounds/tom-1.mp3")
//             firstSound.play()
//         case "a":
//             let secondSound = new Audio("/sounds/tom-2.mp3")
//             secondSound.play()
//         case "s":
//             let thirdSound = new Audio("/sounds/tom-3.mp3")
//             thirdSound.play()
//         case "d":
//             let fourthSound = new Audio("/sounds/tom-4.mp3")
//             fourthSound.play()
//         case "j":
//             let fifthSound = new Audio("/sounds/kick-bass.mp3")
//             fifthSound.play()
//         case "k":
//             let sixthSound = new Audio("/sounds/crash.mp3")
//             sixthSound.play()
//         case "l":
//             let seventhSound = new Audio("/sounds/snare.mp3")
//             seventhSound.play()
//         default:
//             console.log(e.key)

//     }
// })


// var audio = new Audio("/sounds/tom-1.mp3")
// audio.play()



//refactoring the function using higher order function
//to detect the button that was pressed
let all = document.querySelectorAll(".drum")
for (let i = 0; i < all.length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        // alert("i got clicked");
        // this.style.color = "white";
        let btnInnerHtml = this.innerHTML
        sound(btnInnerHtml)
        animation(btnInnerHtml)
    });
}

//to detect the key that was pressed
document.addEventListener("keydown", function(e) {
    //alert("key has been pressed")
    // console.log(e)
    // let keyClicked = e.key
    // console.log(keyClicked)
    sound(e.key)
    animation(e.key)

})

// to play the sound
function sound(key) {
    switch (key) {
        case "w":
            let firstSound = new Audio("/sounds/tom-1.mp3")
            firstSound.play()
        case "a":
            let secondSound = new Audio("/sounds/tom-2.mp3")
            secondSound.play()
        case "s":
            let thirdSound = new Audio("/sounds/tom-3.mp3")
            thirdSound.play()
        case "d":
            let fourthSound = new Audio("/sounds/tom-4.mp3")
            fourthSound.play()
        case "j":
            let fifthSound = new Audio("/sounds/kick-bass.mp3")
            fifthSound.play()
        case "k":
            let sixthSound = new Audio("/sounds/crash.mp3")
            sixthSound.play()
        case "l":
            let seventhSound = new Audio("/sounds/snare.mp3")
            seventhSound.play()
        default:
            console.log(key)

    }
}


function animation(currentKey) {
    let activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100)


}