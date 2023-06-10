document.querySelector('button').addEventListener('click', showMeData);

async function showMeData() {
    const getData = async () => { 
        const response = await fetch('https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/junior-nl-all-fields.json');
        const data = await response.json();
        console.log(data)
        return data;
    }
    let jsonData = await getData();
    // n = 0;
    // document.getElementById('output').innerHTML = jsonData.data[n].job_name;
    // document.getElementById('output2').innerHTML = jsonData.data[n].tag_categories[0];
    // document.getElementById('output_job_location').innerHTML = jsonData.data[n].job_location;
    // document.getElementById('output_description').innerHTML = jsonData.data[n].job_full_text;
    // if (jsonData.data[0].job_location)
    //     document.getElementById('map').src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDMqjt-xzLOgk-LwScP-UwzlevX6gwPPug&q=" + jsonData.data[0].job_location;
}
