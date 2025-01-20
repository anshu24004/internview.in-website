function getAiSuggestions() {
    const input = document.getElementById('ai-input').value;
    const output = document.getElementById('ai-output');

    if (!input) {
        output.innerHTML = "<p>Please enter your skills to get suggestions!</p>";
        return;
    }

    const suggestions = [
        "Data Analyst Internship",
        "Front-End Developer Training",
        "AI and Machine Learning Project",
        "UI/UX Design Program",
        "Digital Marketing Internship"
    ];

    const filteredSuggestions = suggestions.filter(s =>
        s.toLowerCase().includes(input.toLowerCase())
    );

    output.innerHTML = `
        <h3>Suggestions:</h3>
        <ul>
            ${filteredSuggestions.map(s => `<li>${s}</li>`).join('') || "<li>No matches found</li>"}
        </ul>
    `;
}
