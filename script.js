document.querySelectorAll('.copy-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    var targetId = button.getAttribute('data-target');
    var copyText = document.getElementById(targetId);

    if (copyText) {
      copyText.select();
      copyText.setSelectionRange(0, 99999);

      document.execCommand('copy');

      alert('Текст скопирован: ' + copyText.value);
    } else {
      console.error('Элемент с ID "' + targetId + '" не найден.');
    }
  });
});

function showCopyNotification(text) {
  var notification = document.createElement('div');
  notification.textContent = text;
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = '#4CAF50';
  notification.style.color = 'white';
  notification.style.padding = '10px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = 1000;
  document.body.appendChild(notification);

  setTimeout(function() {
    notification.remove();
  }, 2000);
}

document.querySelectorAll('.copy-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    var copyText = button.previousElementSibling;

    if (copyText && copyText.tagName === 'INPUT') {
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
      showCopyNotification('Текст скопирован!');
    }
  });
});

