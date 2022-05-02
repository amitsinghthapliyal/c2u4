// write js code here corresponding to index.html
// You should add submit event on the form
var matchArr = JSON.parse(localStorage.getItem("schedule")) || []
document.querySelector("#masaiForm").addEventListener("submit", matchFun);

function matchFun(event){
    event.preventDefault();

    matchObj = {
        matchNumber: masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
    }

    matchArr.push(matchObj);
    localStorage.setItem("schedule", JSON.stringify(matchArr));

}
