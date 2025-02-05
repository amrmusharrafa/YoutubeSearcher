let darkMode = false;
const queryInput = document.getElementById('query');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '🌞';
  } else {
    document.body.classList.remove('dark-mode');
    themeIcon.textContent = '🌙';
  }
});

searchBtn.addEventListener('click', () => {
  const query = queryInput.value.trim();
  if (query) {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    resultContainer.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Press Here to View Results on YouTube</a>`;
  }
});
