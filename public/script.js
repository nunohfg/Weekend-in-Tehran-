document.getElementById('email-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById('success-message').classList.remove('hidden');
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          alert(data['errors'].map(error => error['message']).join(', '));
        } else {
          alert('Oops! There was a problem submitting your form');
        }
      });
    }
  }).catch(error => {
    alert('Oops! There was a problem submitting your form');
  });
});
