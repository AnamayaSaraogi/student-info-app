function showDetails() {
    const details = document.querySelectorAll(".details");
    const button = document.getElementById("details-button");

    const isHidden = details[0].hidden;

    details.forEach(section => {
        section.hidden = !isHidden;
    });

    button.textContent = isHidden ? "Hide details" : "Show details";
    button.setAttribute("aria-expanded", isHidden);
}