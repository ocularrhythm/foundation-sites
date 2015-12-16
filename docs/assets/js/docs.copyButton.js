// Adds a copy button to all code examples in the docs.

!function() {
  
  var $buttonTemplate = $('<button class="docs-code-copy">Copy</button>');
  
  // Look for code samples and set up a copy button on each
  $('[data-docs-code]').each(function() {
    var $button = $buttonTemplate.clone();
    var text = $(this).find('code').text()
      .replace('&lt;', '<')
      .replace('&gt;', '>');
  
    $(this).prepend($button);
  
    clipboard.copy({
      'text/plain': text;
    });
  
    // Change the text of the copy button when it's clicked on
    $button.click(function() {
      $(this).text('Copied!');
      window.setTimeout(function() {
        $button.text('Copy');
      }, 3000);
    });
  });

}()
