document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const rankingsContainer = document.getElementById('rankings');
  
    // Collect vote counts and character names
    const characters = [];
    cards.forEach(card => {
      const voteCount = parseInt(card.querySelector('.vote-count').textContent);
      const characterName = card.querySelector('.title').getAttribute('src').split('.')[0];
      characters.push({ name: characterName, votes: voteCount });
    });
  
    // Sort characters by vote count in descending order
    characters.sort((a, b) => b.votes - a.votes);
  
    // Display the rankings
    characters.forEach((character, index) => {
      const rankingElement = document.createElement('div');
      rankingElement.textContent = `${index + 1}. ${character.name} - ${character.votes} votes`;
      rankingElement.classList.add('ranking-item');
      rankingsContainer.appendChild(rankingElement);
    });
  });
  