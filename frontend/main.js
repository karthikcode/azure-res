window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionAPI = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPI).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API's");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(Error){
        console.log(error);
    });
    return count;
}