// Function to handle form submission
function addNotice(event) {
    event.preventDefault();
  
    // Get form values
    const title = document.getElementById('notice-title').value;
    const date = document.getElementById('notice-date').value;
    const content = document.getElementById('notice-content').value;
  
    // Create notice element
    const noticeElement = document.createElement('div');
    noticeElement.className = 'notice';
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
  
    const dateElement = document.createElement('p');
    dateElement.className = 'date';
    dateElement.textContent = date;
  
    const contentElement = document.createElement('p');
    contentElement.textContent = content;
  
    // Append elements to notice container
    const noticeContainer = document.getElementById('notice-container');
    noticeElement.appendChild(titleElement);
    noticeElement.appendChild(dateElement);
    noticeElement.appendChild(contentElement);
    noticeContainer.appendChild(noticeElement);
  
    // Reset form fields
    document.getElementById('notice-form').reset();
  }
  
  // Add event listener to form submission
  document.getElementById('notice-form').addEventListener('submit', addNotice);
  