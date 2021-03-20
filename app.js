(async function() {
const activities = await fetch('/last-activities.json').then(response => response.json())
const type = document.getElementById('days').dataset.activity
const last = activities.find(a=>a.type===type)
if(last){
    const date = new Date(last.start_date_local)
    const days = Math.floor((new Date() - date) / (1000 * 60 * 60 * 24)) + 1
    document.getElementById('days').textContent = days<1000?days.toString().padStart(3, '0'):'Err'
    document.getElementById('strava-link').setAttribute('href', `https://www.strava.com/activities/${last.id}`)
}else{
    document.getElementById('days').textContent = 'Err'
}
})()