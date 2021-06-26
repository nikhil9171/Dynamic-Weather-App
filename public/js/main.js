
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = 'Pls write before search';
        datahide.classList.add('data_hide')
    }
    else{
        try{
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}%20%20&appid=5656427772cc6873da4cd33f77cf234a`;
          const response = await fetch(url);
          const data = await response.json();
          const arrData = [data];
          city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;

          temp_real_val.innerText = arrData[0].main.temp;
        
              const tempStatus = arrData[0].weather[0].main;
            if(tempStatus == "Sunny") {
              temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if(tempStatus == "Clouds") {
              temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if(tempStatus == "Rainy") {
              temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else{
              temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide')

          // console.log(data);
        }catch{
            city_name.innerText = 'Pls write na before search';
            datahide.classList.add('data_hide')
        }
    }
}

submitBtn.addEventListener('click',getInfo)