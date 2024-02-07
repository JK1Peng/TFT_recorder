document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tftForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather data from the form
        const formData = {
            champion: form.querySelector('#championSelect').value,
            items: Array.from(form.querySelector('#itemSelect').selectedOptions).map(option => option.value)
        };

        console.log('Form Data Submitted:', formData);
        
        // Here you would typically send the data to the server using fetch or XMLHttpRequest
        // Example:
        // fetch('/submit', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
    });
});
