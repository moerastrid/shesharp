document.querySelector('button').addEventListener('click', showMeData);

async function showMeData() {
    const getData = async () => { 
        const response = await fetch('https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/junior-nl.json');
        const data = await response.json();
        console.log(data)
        return data;
    }
    let jsonData = await getData();
    document.getElementById('output').innerHTML = jsonData.data[0].job_name;
    document.getElementById('output2').innerHTML = jsonData.data[0].tag_categories[0];
    document.getElementById('output_job_location').innerHTML = jsonData.data[0].job_location;
    document.getElementById('output_description').innerHTML = jsonData.data[0].post_full_text;
    if (jsonData.data[0].job_location)
        document.getElementById('map').src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDMqjt-xzLOgk-LwScP-UwzlevX6gwPPug&q=" + jsonData.data[0].job_location;
}

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();