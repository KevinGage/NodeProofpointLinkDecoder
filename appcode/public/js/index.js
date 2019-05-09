function DecodeUrl(url) {
  let safeUrl = encodeURIComponent(url);
  
  console.log(safeUrl);

  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
      document.getElementById('output').innerHTML = this.responseText;
    } else {
      console.log(this.status);
      console.log(this.responseText);
    } 
  };

  xhttp.open("POST", "/", true);
  xhttp.setRequestHeader("Content-type", "application/X-www-form-urlencoded");
  xhttp.send('encoded='+safeUrl);
}