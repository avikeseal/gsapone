//gsap animation script:

// this selects the HTML element with the ID animateBtn
//and addd an event listener to the button.
document.getElementById("animateBtn").addEventListener("click", () => {
    gsap.fromTo(
        //the target element to animate selected using CSS selector
        //here it targets the <h1> with the ID title
        "#title",
        //starting state of the animation
        //moves the element 50 pixels upward from its original position
        //makes the element fully transparent
        {y: -50, opacity: 0},
        //ending state of the animation:
        //moves the element back to it's original position
        //makes element fully visible with animation lasting for  1 second
        //ease: "power2.out" - a smoothing effect for the animation that accelerates and decelerates smoothly
        {y: 0, opacity: 1, duration: 1, ease: "power2.out"}
    );
});