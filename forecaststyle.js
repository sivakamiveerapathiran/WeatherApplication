
async function getWeather(){
	 const lat = document.getElementById('latitude').value;
     const lon = document.getElementById('longitude').value;
	  if (!lat || !lon) {
                alert("Please enter both latitude and longitude");
                return;
            }
   
   const url =`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;
      
    try {
        const response = await fetch(url);
        const data = await response.json();

        
        const hourly_data = data.hourly.temperature_2m;
        const time_data = data.hourly.time; 
       
        const table_body = document.getElementById('weatherTable').getElementsByTagName('tbody')[0];
        table_body.innerHTML = ''; 

            var counter=0;
          for (let i = 0; i < hourly_data.length && i < 10; i++) {
            const row = table_body.insertRow();

            const time_cell = row.insertCell(0);
            const date = new Date(time_data[i]); 
            const time_string = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); 
            time_cell.textContent = time_string;

            const temp_cell = row.insertCell(1);
            temp_cell.textContent = `${hourly_data[i]}°C`; 
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}