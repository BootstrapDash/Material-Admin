(function($) {
  'use strict';
  
    function qsa(sel) {
        return Array.apply(null, document.querySelectorAll(sel));
    }
    qsa(".code-editable").forEach(function (editorEl) {
      CodeMirror.fromTextArea(editorEl, {
        theme: "dracula",
        lineNumbers: true
      });
    });
    qsa(".code-non-editable").forEach(function (editorEl) {
        CodeMirror.fromTextArea(editorEl, {
          mode: "javascript",
          theme: "dracula",
          lineNumbers: true,
          readOnly: true,
          maxHighlightLength: 0,
          workDelay: 0
        });
      }); 

  // The function actually applying the offset
  function offsetAnchor() {
    if (location.hash.length !== 0) {
        // window.scrollTo(window.scrollX, window.scrollY - 140);
        $("html").animate({ scrollTop: $(location.hash).offset().top - 115 }, 300);
    }
  }
  
  // Captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
      // Click events are captured before hashchanges. Timeout
      // causes offsetAnchor to be called after the page jump.
      window.setTimeout(function() {
      offsetAnchor();
      }, 0);
  });
  
  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);

    
})(jQuery);    