const fs = require('fs');

function convert() {
    let format =
`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/vs2015.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/highlight.min.js"></script>
  <script>hljs.highlightAll();</script>
  <style>
    pre > code {
        font-family: "Sans Mono", "Consolas", "Courier", monospace;
    }
  </style>
</head>
<body>
  <pre><code class="language-xxx">
yyy
  </code></pre>
  <script type="text/javascript">
    hljs.initHighlightingOnLoad();
  </script>
</body>
</html>
`

    let language = document.getElementById('language').value;
    let code = document.getElementById('code').value;

    if (language === 'html') {
        code = code.toString().replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    }

    let result = format.replace('xxx', language).replace('yyy', code);

    document.getElementById('result').value = result;
}
