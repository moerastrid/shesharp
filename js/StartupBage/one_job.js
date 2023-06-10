// window.onload = function() {
//     buttonClick();
// }

// function buttonClick() {
//     const response = fetch('https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/junior-nl-all-fields.json');
//     const data = response.json();
//     console.log(data)
//     jsonData = getData();
//     const temp = window.location.search;
//     console.log(temp);
//     const urlParams = new URLSearchParams(temp);
//     console.log(urlParams);
//     const jobnumber = urlParams.get('n')
//     console.log(jobnumber);
//     document.getElementById('output_name').innerHTML = jsonData.data[n].job_name;
//     document.getElementById('output_tag').innerHTML = jsonData.data[n].tag_categories[0];
//     document.getElementById('output_job_location').innerHTML = jsonData.data[n].job_location;
//     document.getElementById('output_description').innerHTML = jsonData.data[n].job_full_text;
//     if (jsonData.data[0].job_location)
//         document.getElementById('map').src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDMqjt-xzLOgk-LwScP-UwzlevX6gwPPug&q=" + jsonData.data[0].job_location;
// }



// // // Initialize and add the map
// // let map;

// // async function initMap() {
// //   // The location of Uluru
// //   const position = { lat: -25.344, lng: 131.031 };
// //   // Request needed libraries.
// //   //@ts-ignore
// //   const { Map } = await google.maps.importLibrary("maps");
// //   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

// //   // The map, centered at Uluru
// //   map = new Map(document.getElementById("map"), {
// //     zoom: 4,
// //     center: position,
// //     mapId: "DEMO_MAP_ID",
// //   });

// //   // The marker, positioned at Uluru
// //   const marker = new AdvancedMarkerElement({
// //     map: map,
// //     position: position,
// //     title: "Uluru",
// //   });
// // }

// // initMap();
