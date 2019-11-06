var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://my-json-server.typicode.com/kadabengarann/negaraAPImenyerang/articles", true);
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("body-content").innerHTML = `
    ${myObj.map(function(article){
        return `
        <a href="#id=?${article.id}2626" onclick="loadContent(${article.id})">
        <div class="artic">
        <img class="article-photo" src="${article.photo}">
        <div class="preview">
        <h2 class="article-title">${article.judul}</h2>
        <p>${article.prev}</p>
        </div>
        </div></a>
        `;
    }).join("")}
    `;
  }else if (this.status == 404) {
    document.getElementById("body-content").innerHTML = "<p>Halaman tidak ditemukan.</p>";
  } else {
    document.getElementById("body-content").innerHTML = "<p>Ups.. halaman tidak dapat diakses.Hubungkan ke internet</p>";
  }
};
xmlhttp.send();

function loadContent(iya) {
  var xhr = new XMLHttpRequest();
  var url = "https://my-json-server.typicode.com/kadabengarann/negaraAPImenyerang/articles";
  
  document.getElementById("body-content").innerHTML = "";

  xhr.onloadstart = function () {
    document.getElementById("article-content").innerHTML = "Loading...";
  }

  xhr.onerror = function () {
    document.getElementById("article-content").innerHTML ="Gagal mengambil data";
  };

  xhr.onloadend = function () {
      if (this.responseText !== "") {
          var data = JSON.parse(this.responseText);
          var article = data[iya];
          document.getElementById("article-content").innerHTML = `
            <div class="wrapper">
            <img class="article-photo-gede" src="${article.photo}">
            <h1 class="article-title-gede">${article.judul}</h1>
            <p class="article-penulis">${article.penulis}</p>
            <div class="article-isi">${article.isi}</div>
            </div>
          `;
          // setTimeout(function () {
          //   document.getElementById("body-content").innerHTML = "<p>OOpsieee.. halaman tidak dapat diakses.Hubungkan ke internet</p>"
          // }, 3000);
      }
  };

  xhr.open("GET", url, true);
  xhr.send();
  console.log(iya);
  
}

function clearResult() {
  
}