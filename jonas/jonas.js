console.log('jonas.js loaded')

jonas=function(){
    // ini
    console.log(`ini at ${Date()}`)
    let div=document.createElement('div')
    document.body.appendChild(div)
    jonas.div=div
    fetch('https://health.data.ny.gov/resource/82xm-y6g8.json?hospital_county=Manhattan&ccs_diagnosis_description=Cancer%20of%20pancreas&facility_name=Memorial%20Hospital%20for%20Cancer%20and%20Allied%20Diseases'
    ).then(x=>x.json().then(y=>{
        jonas.data=y
        jonas.div.innerHTML='<textarea id="txtData"></textarea>'
        txtData.value=JSON.stringify(y,null,3)
   }))

}


window.onload=jonas