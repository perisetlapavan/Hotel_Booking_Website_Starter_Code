
//function for loading and populating html page with api using onload method in <body> tag--------------------
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);


  //populating html page---------------------------------------------------------------
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    var url = "https://travel-advisor.p.rapidapi.com/locations/search?query=" + sessionStorage.getItem('placeName') + "&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US";
    xhr.open("GET", url);
    xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "6d56d52dd7msh93a4e9d9359610fp149bbdjsn904d321f9246");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        const resp = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
          var output = JSON.parse(xhr.responseText);
          // var output=[];
          // output=out.data.filter((e)=>{
          //   return e.result_object.category.key==="hotel";
          // })
          
          // output.data.map((e) => {
          //   document.getElementById("siteImages").innerHTML +=
          //     `<div class="imageWithData" id="pic1" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
          //   <div class="siteImagesDiv">
          //     <a href="detail.html" target="_self" onclick="hotelId()">
          //       <img class="siteImages" id="list-view"
          //         src="` + e.result_object.photo.images.small.url + `"/>
          //     </a>
          //   </div>
          //   <div class="hotelInfo">
          //     <a href="detail.html" target="_self" onclick="hotelId()">
          //       <h3>`+ e.result_object.name + `</h3>
          //       <p><span class="material-icons-outlined material-icons" style="color: gold;">
          //           star
          //         </span>
          //         <span class="material-icons-outlined material-icons" style="color: gold;">
          //           star
          //         </span>
          //         <span class="material-icons-outlined material-icons" style="color: gold;">
          //           star
          //         </span>
          //         <span class="material-icons-outlined material-icons" style="color: gold;">
          //           star
          //         </span>
          //         <span class="material-icons-outlined material-icons" style="color: gold;">
          //           star
          //         </span>
          //       </p>
          //       <p>`+ e.result_object.location_string + `</p>
          //     </a>
          //   </div>
          // </div>`;

          // })

//list of hotels with their image and data(dont know to assign diff id's in loop)-----------------------------
          document.getElementById("siteImages").innerHTML +=
              `<div id="pic1" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId1()">
                <img class="siteImages" id="image1"
                  src="` + output.data[0].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId1()">
                <h3 id="hotelName1">`+ output.data[0].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id1" class="id">`+output.data[0].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location1">`+ output.data[0].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic2" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId2()">
                <img class="siteImages" id="image2"
                  src="` + output.data[1].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId2()">
                <h3 id="hotelName2">`+ output.data[1].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id2" class="id">`+output.data[1].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location2">`+ output.data[1].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div  id="pic3" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId3()">
                <img class="siteImages" id="image3"
                  src="` + output.data[2].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId3()">
                <h3 id="hotelName3">`+ output.data[2].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id3" class="id">`+output.data[2].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location3">`+ output.data[2].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic4" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId4()">
                <img class="siteImages" id="image4"
                  src="` + output.data[3].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId4()">
                <h3 id="hotelName4">`+ output.data[3].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id4" class="id">`+output.data[3].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location4">`+ output.data[3].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic5" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId5()">
                <img class="siteImages" id="image5"
                  src="` + output.data[4].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId5()">
                <h3 id="hotelName5">`+ output.data[4].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id5" class="id">`+output.data[4].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location5">`+ output.data[4].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic6" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId6()">
                <img class="siteImages" id="image6"
                  src="` + output.data[5].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId6()">
                <h3 id="hotelName6">`+ output.data[5].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id6" class="id">`+output.data[5].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location6">`+ output.data[5].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic7" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId7()">
                <img class="siteImages" id="image7"
                  src="` + output.data[6].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId7()">
                <h3 id="hotelName7">`+ output.data[6].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id7" class="id">`+output.data[6].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location7">`+ output.data[6].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic8" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId8()">
                <img class="siteImages" id="image8"
                  src="` + output.data[7].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId8()">
                <h3 id="hotelName8">`+ output.data[7].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id8" class="id">`+output.data[7].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location8">`+ output.data[7].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic9" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId9()">
                <img class="siteImages" id="image9"
                  src="` + output.data[8].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId9()">
                <h3 id="hotelName9">`+ output.data[8].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id9" class="id">`+output.data[8].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location9">`+ output.data[8].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic10" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId10()">
                <img class="siteImages" id="image10"
                  src="` + output.data[9].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId10()">
                <h3 id="hotelName10">`+ output.data[9].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id10" class="id">`+output.data[9].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location10">`+ output.data[9].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic11" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId11()">
                <img class="siteImages" id="image11"
                  src="` + output.data[10].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId11()">
                <h3 id="hotelName11">`+ output.data[10].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id11" class="id">`+output.data[10].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location11">`+ output.data[10].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic12" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId12()">
                <img class="siteImages" id="image12"
                  src="` + output.data[11].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId12()">
                <h3 id="hotelName12">`+ output.data[11].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id12" class="id">`+output.data[11].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location12">`+ output.data[11].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic13" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId13()">
                <img class="siteImages" id="image13"
                  src="` + output.data[12].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId13()">
                <h3 id="hotelName13">`+ output.data[12].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id13" class="id">`+output.data[12].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location13">`+ output.data[12].result_object.location_string + `</p>
              </a>
            </div>
          </div>
          
          <div id="pic14" class="imageWithData pic col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="siteImagesDiv">
              <a href="detail.html" target="_self" onclick="hotelId14()">
                <img class="siteImages" id="image14"
                  src="` + output.data[13].result_object.photo.images.small.url + `"/>
              </a>
            </div>
            <div class="hotelInfo">
              <a href="detail.html" target="_self" onclick="hotelId14()">
                <h3 id="hotelName14">`+ output.data[13].result_object.name + `</h3>
                <p><span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                  <span class="material-icons-outlined material-icons" style="color: gold;">
                    star
                  </span>
                </p>
                <!--/ I hide this location-id to use it in onclick method later -->
                <p id="id14" class="id">`+output.data[13].result_object.location_id+`</p>
                <!-- -------\ -->
                <p id="location14">`+ output.data[13].result_object.location_string + `</p>
              </a>
            </div>
          </div>`;
//----------------------------------------------------------------------------------------
          resolve(resp);
        } else {
          reject(
            JSON.stringify({
              error: "Failed to GET cities for " + country,
            })
          );
        }
      }
    };
  });
}

if (typeof exports !== "undefined") {
  module.exports = {
    enterTheCode,
  };
}
//----------------------------------------------------------------------------------------------------------

//storing hotelId,name,image,location in sessionStorage to use in next html pages-------------------------------------------------------------------------

function hotelId1(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id1").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName1").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image1").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location1").innerHTML)
}

function hotelId2(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id2").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName2").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image2").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location2").innerHTML)
}

function hotelId3(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id3").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName3").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image3").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location3").innerHTML)
}

function hotelId4(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id4").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName4").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image4").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location4").innerHTML)
}

function hotelId5(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id5").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName5").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image5").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location5").innerHTML)
}

function hotelId6(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id6").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName6").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image6").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location6").innerHTML)
}

function hotelId7(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id7").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName7").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image7").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location7").innerHTML)
}

function hotelId8(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id8").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName8").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image8").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location8").innerHTML)
}

function hotelId9(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id9").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName9").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image9").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location9").innerHTML)
}

function hotelId10(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id10").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName10").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image10").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location10").innerHTML)
}

function hotelId11(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id11").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName11").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image11").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location11").innerHTML)
}

function hotelId12(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id12").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName12").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image12").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location12").innerHTML)
}

function hotelId13(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id13").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName13").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image13").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location13").innerHTML)
}

function hotelId14(){
  sessionStorage.setItem("hotel_Id",document.getElementById("id14").innerHTML)
  sessionStorage.setItem("hotelName",document.getElementById("hotelName14").innerHTML)
  sessionStorage.setItem("hotelImage",document.getElementById("image14").getAttribute("src"))
  sessionStorage.setItem("hotellocation",document.getElementById("location14").innerHTML)
}

// --------------------------------------------------------------------------------------------------------
