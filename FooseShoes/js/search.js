
  $(function() {
    var availableTags = [
      "MEN SHOES",
      "KIDS",
      "PINK SHOES",
      "WOMEN SHOES",
      "CHEAP SHOES",
      "PRADA",
      "ANNA FIELD"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });
