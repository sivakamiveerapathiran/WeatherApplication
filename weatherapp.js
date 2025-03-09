async function getWeather(){
	 const lat = document.getElementById('latitude').value;
     const lon = document.getElementById('longitude').value;
	  if (!lat || !lon) {
                alert("Please enter both latitude and longitude");
                return;
            }

const url =`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,visibility,wind_speed_10m`;
 try {
                const response = await fetch(url);
               // const data = await response.json();
			   resp_json =await response.json();
			   
                document.getElementById('temperature').value=resp_json.current.temperature_2m;	
				document.getElementById('humidity').value=resp_json.current.relative_humidity_2m;	
				document.getElementById('wind-speed').value=resp_json.current.wind_speed_10m;	
                document.getElementById('visibility').value=resp_json.current.visibility;				
				

            } catch (error) {
			alert("Fetch error:", error);
                console.error("Fetch error:", error);
                alert("Failed to fetch weather data.");
            }
        };