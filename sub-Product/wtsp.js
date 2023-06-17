function sendMessage() {
  var targetNumber = +919893989591;
  var message = encodeURIComponent(
    "Hello, I'm interested in your products. Can you provide more information?"
  );

  // Construct the WhatsApp URL
  var whatsappUrl = "https://wa.me/" + targetNumber + "?text=" + message;

  // Open WhatsApp in a new window or tab
  window.open(whatsappUrl);
}
