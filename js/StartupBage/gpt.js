API_KEY = undefined;

window.onload = function() {
    API_KEY = prompt("Please enter your chat-gpt API KEY:");
    getnumber();
}

number = 0;
jobdescription = null;

async function getnumber() {
    const getData = async () => { 
        const response = await fetch('https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/junior-nl-all-fields.json');
        const data = await response.json();
        console.log(data)
        return data;
    }
    jsonData = await getData();
    console.log(jsonData);
    const temp = window.location.search;
    console.log(temp);
    const urlParams = new URLSearchParams(temp);
    console.log(urlParams);
    const jobnumber = urlParams.get('n')
    number = jobnumber;
    console.log(jobnumber);
    console.log(jsonData.data[0].job_name);
    document.getElementById('output_name').innerHTML = jsonData.data[number].job_name;
    console.log(jsonData.data[number].job_name);
    document.getElementById('output_tag').innerHTML = jsonData.data[number].tag_categories[0];
    document.getElementById('output_job_location').innerHTML = jsonData.data[number].job_location;
    document.getElementById('output_description').innerHTML = jsonData.data[number].job_full_text;
    jobdescription = jsonData.data[number].job_full_text;
    console.log(jobdescription);
    document.getElementById('map').src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDMqjt-xzLOgk-LwScP-UwzlevX6gwPPug&q=Berlin" + jsonData.data[number].job_location;
}

const form = document.getElementById('chat-form');
const mytextInput = document.getElementById('mytext');
const responseTextarea = document.getElementById('response');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mytext = mytextInput.value.trim();
	const blah= `Use this resume"${mytext}" and write a cover letter for this job "${jobdescription}"`
	console.log(blah)
    if (mytext) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: blah}],
                    temperature: 1.0,
                    top_p: 0.7,
                    n: 1,
                    stream: false,
                    presence_penalty: 0,
                    frequency_penalty: 0,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                responseTextarea.value = data.choices[0].message.content;
            } else {
                responseTextarea.value = 'Error: Unable to process your request.';
            }
        } catch (error) {
            console.error(error);
            responseTextarea.value = 'Error: Unable to process your request.';
        }
    }
});