window.addEventListener('DOMContentLoaded',(event) => {
    getVisitCount();
})
const functionApiUrl = "https://getresumecounters.azurewebsites.net/api/GetResumeCounter?code=ss62Et1Jrqq2yYYmkXvidV9GaWaFmnwi9SHvtfcOpraQ8tzw7wuU8A=="
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
       return response.json()
    }).then(response => {
        console.log("website function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}