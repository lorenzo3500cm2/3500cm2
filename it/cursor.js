document.addEventListener("DOMContentLoaded", function () {
    let cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    document.addEventListener("mousedown", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    });

    document.addEventListener("mouseup", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});
