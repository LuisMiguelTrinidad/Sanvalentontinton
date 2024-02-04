function exito() {
    // Clear content of div1
    document.getElementById("div1").innerHTML = "";

    // Add content to div3
    document.getElementById("div3").innerHTML =
        '<img src="despues.gif" id="despues" width="400"><h1>Yey :3</h1>';

    // Create hearts and add them to the body
    createHearts();

    // Optional: Add additional styling/animations to the hearts if needed
}

function error(){
    let si = document.getElementById("Si")
    si.style.fontSize = parseInt(window.getComputedStyle(si).fontSize)+ 30 + 'px';
    si.textContent="Si porfi"
}

function createHearts() {
    // Use setInterval to create hearts continuously every 0.2 seconds
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        document.body.appendChild(heart);

        // Set random X and Y positions
        const randomX = Math.random() < 0.5 ?
            Math.random() * 500 : 
            1000 + Math.random() * 500; 

        const randomY = Math.random() * window.innerHeight;

        heart.style.left = randomX + "px";
        heart.style.top = randomY + "px";

        // Set heart image
        heart.style.backgroundImage = "url('heart.png')";

        // Animate the hearts
        animateHeart(heart);
    }, 200); // 200 milliseconds (0.2 seconds)
}

function animateHeart(heart) {
    const animationDuration = 3000; // milliseconds

    // Set a timeout to remove the heart element after the animation
    setTimeout(() => {
        heart.remove();
    }, animationDuration);

    // Apply animation to the heart
    heart.style.animation = `floatHeart ${animationDuration / 1000}s linear`;
}
