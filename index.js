document.addEventListener("DOMContentLoaded", () => {
    const createBubble = () => {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        document.body.appendChild(bubble);

        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 2 + 3}s`;

        setTimeout(() => {
            bubble.remove();
        }, 5000);
    };

    setInterval(createBubble, 300);
});
