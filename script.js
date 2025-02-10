document.addEventListener("DOMContentLoaded", () => {
    const speedControl = document.getElementById("speedControl");
    const hamsterContainer = document.querySelector(".wheel-and-hamster");

    function updateSpeed(value) {
        // Calculamos la velocidad invertida
        let speed = 5 - value;

        // Evitamos que la duración sea 0s, estableciendo un mínimo de 0.1s
        if (speed < 0.1) {
            speed = 0.1;
        }

        hamsterContainer.style.setProperty("--dur", `${speed}s`);
    }

    // Establecer velocidad inicial
    updateSpeed(speedControl.value);

    speedControl.addEventListener("input", (event) => {
        updateSpeed(event.target.value);
    });
});
