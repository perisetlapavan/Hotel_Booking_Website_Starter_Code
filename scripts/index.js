// adding extra 4 images below through javascript-------------------------------------------------------- 
let divimages=`<div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3 " id="firstImageSiteDiv"><a
            href="list.html" onclick="chennaiButton()" target="_self"><img class="siteImages"
              src="https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg" /></a>
          <div id="delhicentered">chennai</div>
        </div>

        <div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" id="secondImageSiteDiv"><a
        href="list.html" onclick="agraButton()" target="_self"><img class="siteImages" 
          src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg" /></a>
          <div id="goacentered">Agra</div>
        </div>

        <div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" id="thirdImageSiteDiv"><a
        href="list.html" onclick="jaipurButton()" target="_self"><img class="siteImages" 
        src="https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg" /></a>
          <div id="charminarcentered">Jaipur</div>
        </div>

        <div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" id="fourthImageSiteDiv"><a
        href="list.html" onclick="bengaluruButton()" target="_self"><img class="siteImages" id="lastImageSite"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg" /></a>
          <div id="calcuttacentered">Bengaluru</div>
        </div><br></br>`
document.getElementById("row").innerHTML=divimages;        
//-------------------------------------------------------------------------------------------------------------

// scriptCode for View more and View less------------------------------------------------------------------------
function popUp() {
    if (document.getElementById('row').style.display === "none") {
      document.getElementById('row').style.display = "flex";
      document.getElementById("viewButton").innerHTML = "View less";
      document.getElementById('createSpace').style.display = "block";
    }
    else{
      document.getElementById('row').style.display = "none";
      document.getElementById("viewButton").innerHTML = "View More";
      document.getElementById('createSpace').style.display = "none";
    }
  }
//----------------------------------------------------------------------------------------------------------------   

//search Button on click to store delhi in session storage-------------------------------------------------------------------------
function searchButton(){
  sessionStorage.setItem("placeName",document.getElementById("searchBar").value);
}
//------------------------------------------------------------------------------------------

//Delhi icon Button on click to store delhi in session storage-------------------------------------------------------------------------
function delhiButton(){
  sessionStorage.setItem("placeName","delhi");
}
//------------------------------------------------------------------------------------------

//Goa icon Button on click to store goa in session storage-------------------------------------------------------------------------
function goaButton(){
  sessionStorage.setItem("placeName","goa");
}
//------------------------------------------------------------------------------------------

//Charminar icon Button on click to store charminar in session storage-------------------------------------------------------------------------
function charminarButton(){
  sessionStorage.setItem("placeName","charminar");
}
//------------------------------------------------------------------------------------------

//Calcutta icon Button on click to store calcutta in session storage-------------------------------------------------------------------------
function calcuttaButton(){
  sessionStorage.setItem("placeName","calcutta");
}
//------------------------------------------------------------------------------------------

//chennai icon Button on click to store chennai in session storage-------------------------------------------------------------------------
function chennaiButton(){
  sessionStorage.setItem("placeName","chennai");
}
//------------------------------------------------------------------------------------------

//Agra icon Button on click to store Agra in session storage-------------------------------------------------------------------------
function agraButton(){
  sessionStorage.setItem("placeName","agra");
}
//------------------------------------------------------------------------------------------

//jaipur icon Button on click to store jaipur in session storage-------------------------------------------------------------------------
function jaipurButton(){
  sessionStorage.setItem("placeName","jaipur");
}
//------------------------------------------------------------------------------------------

//bengaluru icon Button on click to store bengaluru in session storage-------------------------------------------------------------------------
function bengaluruButton(){
  sessionStorage.setItem("placeName","bengaluru");
}
//------------------------------------------------------------------------------------------





