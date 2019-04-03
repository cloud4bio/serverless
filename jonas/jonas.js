console.log('jonas.js loaded')

jonas=function(){
    // ini
    console.log(`ini at ${Date()}`)
}


window.onload=jonas


//fetch('https://health.data.ny.gov/resource/82xm-y6g8.json?hospital_county=Manhattan&ccs_diagnosis_description=Cancer%20of%20pancreas&facility_name=Memorial%20Hospital%20for%20Cancer%20and%20Allied%20Diseases').then(x=>x.json().then(console.log))