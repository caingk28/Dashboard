// Calendar
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.classList.add('calendar-day');
        day.textContent = i;
        if (i === today.getDate()) {
            day.classList.add('today');
        }
        calendar.appendChild(day);
    }
}

// Analytics Chart
function createAnalyticsChart() {
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Project Alpha', 'Project Beta', 'Project Gamma'],
            datasets: [{
                label: 'Progress',
                data: [75, 30, 50],
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Team Chat
function initializeChat() {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-message');

    sendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('p');
            messageElement.textContent = `You: ${message}`;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
}

// Quick Access Files
function populateFileList() {
    const fileList = document.getElementById('file-list');
    const files = [
        'Project_Proposal.pdf',
        'Budget_Sheet.xlsx',
        'Meeting_Minutes.docx',
        'Design_Mockups.psd'
    ];

    files.forEach(file => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-file"></i> ${file}`;
        fileList.appendChild(li);
    });
}

// Announcements
function populateAnnouncements() {
    const announcementsList = document.getElementById('announcements-list');
    const announcements = [
        'Team meeting scheduled for Friday at 2 PM',
        'New project guidelines released',
        'Reminder: Submit timesheets by end of day'
    ];

    announcements.forEach(announcement => {
        const li = document.createElement('li');
        li.textContent = announcement;
        announcementsList.appendChild(li);
    });
}

// File Upload
function initializeFileUpload() {
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');

    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const fileName = file.name;

            // In a real application, you would send the file to a server here
            // For this example, we'll just add it to the list
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-file"></i> ${fileName}`;
            fileList.appendChild(li);

            // Clear the file input
            fileInput.value = '';

            // Optionally, show a success message
            alert('File uploaded successfully!');
        } else {
            alert('Please select a file to upload.');
        }
    });
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar();
    createAnalyticsChart();
    initializeChat();
    populateFileList();
    populateAnnouncements();
    initializeFileUpload();
});