function validateForm() {
    var x = document.forms["my"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else {
    my.submit();
    }
  }