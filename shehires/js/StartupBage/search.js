
async function fetchData(url) {
    return await fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  
function filterData(data, query) {
    const lowerCaseQuery = query.toLowerCase();
  
    const filteredData = data.filter(item => {
      const lowerCaseName = item.job_name.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
    });
  
    return filteredData;
  }
  
  function displayResults(results) {
    const resultList = document.getElementById('resultsList');
    resultList.innerHTML = '';
  
    results.forEach(result => {
      const listItem = document.createElement('li');
      listItem.textContent = result.name;
      resultList.appendChild(listItem);
    });
  }
  
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
  
    // Fetch data from the API
    const apiUrl = 'https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/junior-nl-all-fields.json';
    fetchData(apiUrl)
      .then(result => {
        const filteredResults = filterData(result?.data, searchTerm);
        displayResults(filteredResults);
      });
  });