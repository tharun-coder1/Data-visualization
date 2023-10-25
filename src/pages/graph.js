import React from "react";
import { useState, useEffect } from 'react';
import "./styles.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Label
} from "recharts";
 


const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {

  const dt = payload[0].payload;
    return (
      <div className="custom-tooltip"  style={{
		  display: "flex",
		  flexWrap: "wrap",
		  margin: "-90px auto 30px",
		  maxWidth: "700px",
		  minWidth: "300px",
		  minHeight: "100px",
		  background: "rgba(255,255,255,0.3)",
		  objectFit: "cover",
		  marginBottom: "0",
		  padding: "11px",
		  boxShadow: "6px 4px 6px 4px rgba(0,0,0,0.15)",
		  borderRadius: "8px",
		  fontFamily: "Arial, Helvetica, sans-serif",
		  fontSize: 14,
		  zIndex: 9999,
		  borderStyle: "solid",
		  backgroundColor: "#fff",
		  position: "relative",
		  borderColor:"grey"
          }}>
        <p className="cutom" style={{width:"100%"}}><b>Text: </b>{`${label}`}</p>
		<p className="custom1" style={{width:"33%"}}>{`Side effect : ${dt.side_effect}`}</p>
		<p className="custom1" style={{width:"33%"}}>{`Get vaccine : ${dt.get_vaccine}`}</p>
		<p className="custom1" style={{width:"33%"}}>{`Child : ${dt.child}`}</p>
		<p className="custom1" style={{width:"33%"}}>{`Family health : ${dt.family_health}`}</p>
		<p className="custom1" style={{width:"33%"}}>{`Personal decision : ${dt.personal_decision}`}</p>
		<p className="custom1" style={{width:"33%"}}>{`Mandate : ${dt.mandate}`}</p>
		<p className="custom1" style={{width:"33%"}}>{`Health Information : ${dt.health_information}`}</p>
		<p className="custom1" style={{width:"33%"}}>{`Trust : ${dt.trust}`}</p>
		<p className="custom1" style={{width:"33%"}}>{`Politics : ${dt.politics}`}</p>
			<p className="custom1" style={{width:"33%"}}>{`Media : ${dt.media}`}</p>
      </div>
    );
  }

  return null;
};

const boxstyle = {
 zIndex:99,
};
 
 
function Graph(){

//const [words,setWords]=useState({dao:{lplimits:{mi:0,ma:1}}});
const [items,setItems]=useState([]);
const [in_data,setIndata]=useState([]);
const [max,setMax]=useState([]);
const [numbers,setNumbers]=useState([0,0.5,1]);
const [flag,setFlag]=useState(false);  



	const fetchUserData = () => {
	fetch('https://tpython.pythonanywhere.com/getdata/firebase')
		.then((res) => res.json())
		.then((json) => {
			
			setIndata(json);
			setItems(json);
			setFlag(true);
			
		})
		.catch(error => {
		console.error("Error fetching user data:", error);
		});

	};

	useEffect(() => {
		fetchUserData()

	},[])

	const arrayRemove =(arr, value) =>{

	return arr.filter(function(geeks:any){
	return geeks != value;
	});

	}


	if (!flag) {

		return(

		<div class="row my-6 jumbotron">
		<h3>Visualisation  is loading  <span class="spinner-border"></span></h3>
		</div>
		)

	}
	

  return (
    <div>
				<div className="container">
				<br></br>
				<br></br>
				<br></br>
				<h3>Graph  Visualization</h3>

				</div>
				
					<AreaChart
					width={16000}
					height={200}
					data={in_data}
					margin={{
					  top: 30,
					  right: 100,
					  left: 100,
					  bottom: 0
					}}

					>
					<XAxis height={30} interval={0} tick={false} dataKey="text">
						</XAxis>
					<YAxis ticks={numbers}>
						<Label
						style={{
						textAnchor: "middle",
						fontSize:19,
						fontFamily: "Arial, Helvetica, sans-serif"}}
						position="insideLeft"
						angle={-90}
						value="Side Effect" />
					</YAxis>
					<Tooltip offset={100} content={<CustomTooltip />} allowEscapeViewBox={{ x: true}} viewBox={{ x: 0, y: 0}}/>
					<Area type="monotone" dataKey="side_effect" stroke="#ff8000" fill="#ff8000"	  	style={{
						zIndex:0,
						position:"relative"}}/>
					</AreaChart>
				  

      
    </div>
  );

  
  
}
 
export default Graph;