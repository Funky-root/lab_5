const browserInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
};

localStorage.setItem("browserInfo", JSON.stringify(browserInfo));

const savedInfo = JSON.parse(localStorage.getItem("browserInfo"));

const footer = document.getElementById("footer-info");

footer.innerHTML = `
    <p><strong>User Agent:</strong> ${savedInfo.userAgent}</p>
    <p><strong>Platform:</strong> ${savedInfo.platform}</p>
    <p><strong>Language:</strong> ${savedInfo.language}</p>
`;
const commentsContainer = document.getElementById("comments-container");
fetch("https://jsonplaceholder.typicode.com/posts/22/comments")
    .then(response => response.json())
    .then(data => {

        data.forEach(comment => {

            const commentBlock = document.createElement("div");

            commentBlock.classList.add("comment");

            commentBlock.innerHTML = `
                <h3>${comment.name}</h3>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p>${comment.body}</p>
            `;

            commentsContainer.appendChild(commentBlock);
        });

    })
    .catch(error => {
        console.error("Error:", error);
    });
    const modal = document.getElementById("modal");

const closeModal = document.getElementById("close-modal");


setTimeout(() => {

    modal.style.display = "block";

}, 5000);

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});
const themeButton = document.getElementById("theme-toggle");

const currentHour = new Date().getHours();

if (currentHour >= 7 && currentHour < 21) {

    document.body.classList.remove("dark-mode");

} else {

    document.body.classList.add("dark-mode");

}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});