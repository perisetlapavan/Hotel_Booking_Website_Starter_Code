// adding extra 4 images below through javascript-------------------------------------------------------- 
let divimages=`<div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3 " id="firstImageSiteDiv"><a
            href="list.html" target="_self"><img class="siteImages"
              src="https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg" /></a>
          <div id="delhicentered">chennai</div>
        </div>

        <div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" id="secondImageSiteDiv"><img
            class="siteImages" src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg" />
          <div id="goacentered">Agra</div>
        </div>

        <div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" id="thirdImageSiteDiv"><img
            class="siteImages" src="https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg" />
          <div id="charminarcentered">Jaipur</div>
        </div>

        <div class="siteImageDiv col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" id="fourthImageSiteDiv"><img
            class="siteImages" id="lastImageSite"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg" />
          <div id="calcuttacentered">Bengaluru</div>
        </div><br></br>`
document.getElementById("row").innerHTML=divimages;        
//-------------------------------------------------------------------------------------------------------------