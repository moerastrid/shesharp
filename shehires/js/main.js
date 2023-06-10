document.querySelector('a').addEventListener('click', showMeData);

async function showMeData() {
    const getData = async () => {
        const response = await fetch('https://documenter.getpostman.com/view/6124305/2s93sc4sDC#515a3956-341d-44a8-b8a1-3facb2330246',{
            method: 'POST',
            mode:"no-cors"
        });
        const data = await response.json();
        //console.log(data)
        return data;
    }
    let jsonData = await getData();
    document.getElementById('output').innerHTML = jsonData;
    document.getElementById('output2').innerHTML = jsonData.data[0].tag_categories[0];
}