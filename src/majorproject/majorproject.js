import React, { useState } from 'react';
import './external.css';

import axios from 'axios';

function MajorProject() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();


    const apiKey = "oIg4vVM848Q5MjXJhT/1BQ==OlMh85lL7lVgwifu";
    const apiUrl = `https://api.api-ninjas.com/v1/airquality?city=${city}&X-Api-Key=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => { setData(response.data); console.log(response.data) })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
    setCity("")
  }



  return (
    <>
      <center className="a">
        <form onSubmit={handleSearch} style={{ margin: "50px" }}>


          <input
            name="city"
            style={{ width: '350px', height: '45px', borderRadius: "50px", borderColor: "black", borderWidth: "3px", backgroundColor: "pink" }}
            placeholder="Search for a location"
            value={city}
            onChange={handleChange}
            type="text"
          />
          <div className='s'>
            <input style={{ width: "100px", height: "30px", borderRadius: "50px", borderColor: "black" }} type="submit" value='Search' />
          </div>

        </form>
      </center>
      {data && (
        <>
          

       <div  className="d" style={{border:"3px solid black",width:400,height:200}}>

       <table  className='v'>
            <tr>
              <th>
                <h4>CO:{data.CO.aqi}</h4>
                <h4>con:{data.CO.concentration}</h4>
              </th>
              <th>
                <h4>NO2:{data.NO2.aqi}</h4>
                <h4>con:{data.NO2.concentration}</h4>
              </th>
              <th>
                <h4>O3:{data.O3.aqi}</h4>
                <h4>con:{data.O3.concentration}</h4>
              </th>
              <th>
                <h4>PM10{data.PM10.aqi}</h4>
                <h4>con:{data.PM10.concentration}</h4>
              </th>
              
            </tr>
           
          </table>
          <h4 className='m'>OVERALL_AQI:{data.overall_aqi}</h4>
       </div>

        </>
      )
      }

    </>
  );
}

export default MajorProject;
