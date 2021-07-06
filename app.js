const APIkey="sDwmgPkctEWFTVh4uIuQ9etJjhmTWYSS";
const endpoint="http://dataservice.accuweather.com/locations/v1/cities/search";
const scity=document.querySelector("#Scity");
const cityname=document.querySelector("h5.cityname");
const status=document.querySelector("h5.status");
const temp=document.querySelector("h2.temp");
const secondIcon=document.querySelector("div.second-icon img");
const mainIcon=document.querySelector(" img.main-icon");
const card=document.querySelector("div.cardd");
let city;






const recivecity= async function(city){
    
    const res=await fetch(`${endpoint}?apikey=${APIkey}&q=${city}`);
    const data= await res.json();
    return(data[0].Key) ;
}

 const recivedata= async function(keycity){
     const res = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${keycity}?apikey=${APIkey}`);
     const data= await res.json();
     return data;
 }

 
    scity.addEventListener("keydown",function(e){
        if (e.key==="Enter"){
            city=scity.value;
            recivecity(city)
            .then(data=>recivedata(data))
            .then(data=>{ 
                
                cityname.innerHTML=city.toUpperCase();
                status.innerHTML=data[0].WeatherText;
                temp.innerText=`${data[0].Temperature.Metric.Value} ${data[0].Temperature.Metric.Unit}`;
                secondIcon.src=`icon/${data[0].WeatherIcon}.svg`;
                if(data[0].IsDayTime){mainIcon.src=`img/day.svg`;}
                else {mainIcon.src=`img/night.svg`;}
                card.style.display="block";
                
            });
           
            
        }
        
        });

 
    




 
