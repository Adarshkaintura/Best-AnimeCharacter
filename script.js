// Function to handle votes
function vote(character) {
    const votesKey = character + '-votes';
    let votes = localStorage.getItem(votesKey);

    // If no votes are stored, initialize to 0
    if (!votes) {
        votes = 0;
    }

    // Increment the vote count
    votes = parseInt(votes) + 1;

    // Store the new vote count in localStorage
    localStorage.setItem(votesKey, votes);

    // Update the displayed vote count
    document.getElementById(votesKey).textContent = votes;
}

// Function to load votes on page load
function loadVotes() {
    const characters = ['sungjinwoo', 'gojo', 'goku', 'naruto','eren','sasuke','boruto','yuta'];
    characters.forEach(character => {
        const votesKey = character + '-votes';
        let votes = localStorage.getItem(votesKey);

        // If no votes are stored, initialize to 0
        if (!votes) {
            votes = 0;
        }

        // Update the displayed vote count
        document.getElementById(votesKey).textContent = votes;
    });
}

// Load votes when the page loads
window.onload = loadVotes;
