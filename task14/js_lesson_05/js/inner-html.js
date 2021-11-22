var firstItem = document.getElementById('one');

var itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a herf=\"http://example.org\">' + itemContent + '</a>';
