function changeAllButtons() {
    const btns = document.querySelectorAll('span[id^="btn_show_"]');

    btns.forEach(btn => {
        const questionId = btn.id.replace('btn_show_', '');

        // Create new button
        const newBtn = document.createElement('span');
        newBtn.innerHTML = 'Безкоштовне пояснення*';
        newBtn.className = "q-btn button-green";
        newBtn.onclick = () => {
            const questionElement = document.getElementById(questionId);
            questionElement.style.display = questionElement.style.display === 'none' ? 'block' : 'none';
        };

        // Append new button to parent
        btn.parentNode.appendChild(newBtn);

        // Create and insert new div for comment
        const commentDiv = document.getElementById('commentar_' + questionId);
        const newDiv = document.createElement('div');
        newDiv.id = questionId;
        newDiv.innerHTML = commentDiv.innerHTML;
        newDiv.style.display = 'none';
        commentDiv.after(newDiv);

        // Remove old elements
        btn.remove();
        commentDiv.remove();
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "changeButtons") {
        changeAllButtons();
        sendResponse({ status: "done" });
    }
});
