import "d3-transition";
import React from "react";
import ReactWordcloud from "react-wordcloud";
import { useState, useEffect } from 'react';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import 'tippy.js/themes/light.css';
import styled from 'styled-components';
import ReactSlider from 'react-slider';

import 'tippy.js/dist/tippy.css';

const StyledSlider = styled(ReactSlider)`
    width: 80%;
    height: 14px;
`;

const StyledThumb = styled.div`
    height: 30px;
    line-height: 25px;
    width: 35px;
    text-align: center;
    background-color: #000;
    color: #fff;
	font-size:12.5px;
    border-radius: 80%;
    cursor: grab;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: #D3D3D3;
    border-radius: 28px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;





const options1 = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  enableOptimizations: true,
  deterministic: true,
  fontFamily: "Arial",
  fontSizes: [20, 42],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations:1,
  rotationAngles: [0],
  transitionDuration: 700,
  tooltipOptions:{
	minWidth: 1050,
	theme: 'light',
	allowHTML: true
  
}
};


const options2 = {
  enableTooltip: true,
  enableOptimizations: true,
  deterministic: true,
  fontFamily: "Arial",
  fontSizes: [20, 42],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations:1,
  rotationAngles: [0],
  transitionDuration: 800,
  tooltipOptions:{
	theme: 'light',
	allowHTML: true
  
}
};


const options3 = {
  enableTooltip: true,
  enableOptimizations: true,
  deterministic: true,
  fontFamily: "Arial",
  fontSizes: [20, 42],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 1,
  rotationAngles: [0],
  transitionDuration: 700,
  tooltipOptions:{
	minWidth: 1050,
	theme: 'light',
	allowHTML: true
	}
};


const options4 = {
  enableTooltip: true,
  enableOptimizations: true,
  deterministic: true,
  fontFamily: "Arial",
  fontSizes: [20, 42],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 1,
  rotationAngles: [0],
  transitionDuration: 700,
  tooltipOptions:{
	minWidth: 1050,
	theme: 'light',
	allowHTML: true
	}
}


	const callbacks1 = {
	getWordTooltip: (word) =>
	`<span style="font-size:16px;"> Term&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>: ${word.text}</b> <br/>Probability&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${word.prob} <br/>Scaled Frequency&nbsp&nbsp: ${word.value} </span>`,

	};

	const callbacks2 = {
	getWordTooltip: (word) =>
	`<span style="font-size:16px;"> Term&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>: ${word.text}</b> <br/>Probability&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${word.prob} <br/>Scaled Frequency&nbsp&nbsp: ${word.value} </span>`,

	};


	const callbacks3 = {
	getWordColor: (word) => (word.indicator <1 ? "black" : "pink"),
	getWordTooltip: (word) =>
	`<span style="font-size:16px;"> Term&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>: ${word.text}</b> <br/>Probability&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${word.prob} <br/>Scaled Frequency&nbsp&nbsp: ${word.value} </span>`,


	};
	
		const callbacks4 = {
	getWordColor: (word) => (word.indicator <1 ? "black" : "blue"),
	getWordTooltip: (word) =>
	`<span style="font-size:16px;"> Term&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>: ${word.text}</b> <br/>Probability&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${word.prob} <br/>Scaled Frequency&nbsp&nbsp: ${word.value} </span>`,

	};
	
	

function Wordcloud() {
	
const [words,setWords]=useState({dao:{lplimits:{mi:0,ma:1}}});
const [words1,setWords1]=useState([]);
const [words2,setWords2]=useState([]);
const [words3,setWords3]=useState([]);
const [words4,setWords4]=useState([]);
const [flag,setFlag]=useState(false);

const fetchUserData = () => {
  fetch("https://tpython.pythonanywhere.com/getdata/l")
    .then(response => response.json())
    .then(data => {
      setWords1(data.jsn);
      //console.log("This is the first data" + JSON.stringify(data));
	  
		setWords((prevState)=> {
		let dao = Object.assign({}, prevState.dao);
		dao["l"]=data.jsn;
		dao["lslimits"]=data.slimits;
		dao["lplimits"]=data.plimits; 
		return { dao };                       
		})

    })
    .catch(error => {
      console.error("Error fetching user data:", error);
    });
	  
	      fetch("https://tpython.pythonanywhere.com/getdata/r")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setWords2(data.jsn);
		setWords((prevState)=> {
		let dao = Object.assign({}, prevState.dao);
		dao["r"]=data.jsn;
		dao["rslimits"]=data.slimits;
		dao["rplimits"]=data.plimits;
		return { dao };                       
		})

      })
	  
	  
	      fetch("https://tpython.pythonanywhere.com/getdata/ll")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setWords3(data.jsn)
		setWords((prevState)=> {
		let dao = Object.assign({}, prevState.dao);
		dao["ll"]=data.jsn
		dao["llslimits"]=data.slimits;
		dao["llplimits"]=data.plimits;
		return { dao };                       
		})
      })
	  
	      fetch("https://tpython.pythonanywhere.com/getdata/lr")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setWords4(data.jsn)
		setWords((prevState)=> {
		let dao = Object.assign({}, prevState.dao);
		dao["lr"]=data.jsn
		dao["lrslimits"]=data.slimits;
		dao["lrplimits"]=data.plimits;
		return { dao };                       
		})
      })
	  
	var testSleep = function () {
	setTimeout(function () {
	setFlag(true);  
	}, 3000);
	}

	testSleep();

  }

  useEffect(() => {
    fetchUserData()

  }, [])
	
	const demoOnClicklp = (a, b) => {
	var temp=words;
	var result = temp.dao.l.filter(word => word.prob >= a[0] &&  word.prob <= a[1]);
	console.log("result  words" + JSON.stringify(result));
	setWords1(result);
	};
	
	const demoOnClickls = (a, b) => {
	console.log("This is  words" + JSON.stringify(words.dao));
	var temp=words;
	var result = temp.dao.l.filter(word => word.value >= a[0] &&  word.value <= a[1]+1);
	setWords1(result);
	};

	const demoOnClickrp = (a, b) => {
	var temp=words;
	var result = temp.dao.r.filter(word => word.prob >= a[0] &&  word.prob <= a[1]);
	setWords2(result);
	};
	
	const demoOnClickrs = (a, b) => {
	var temp=words;
	console.log("This is ends"+a[0]+"last"+a[1]);
	var result = temp.dao.r.filter(word => word.value >= a[0] &&  word.value <= a[1]+1);
	console.log("result"+JSON.stringify(result));
	setWords2(result);
	};

	const demoOnClickll = (a, b) => {
	var temp=words;
	var result = temp.dao.ll.filter(word => word.value >= a[0] &&  word.value <= a[1]+1);
	setWords3(result);
	};

	const demoOnClicklr = (a, b) => {
	var temp=words;
	var result = temp.dao.lr.filter(word => word.value >= a[0] &&  word.value <= a[1]+1);
	setWords4(result);
	};

  if (!flag) {

	return(

	<div class="row my-6 jumbotron">
	<h3>Visualisation  is loading  <span class="spinner-border"></span></h3>
	</div>
	)

}
	
  return (
  
 <div>
    <div className="row ">
		<div className="col-md-5 mx-auto">
		<br></br>
		<br></br>
		<br></br>
		<h3>
		<center>
		Wordcloud
		</center>
		</h3>
		<br></br>
		<br></br>
		<div className="row">
		<span className="col-md-6">
		<h5>Probability:</h5>
		<StyledSlider min={words.dao.lplimits.mi} step={0.10} max={words.dao.lplimits.ma} defaultValue={[words.dao.lplimits.mi, words.dao.lplimits.ma]} renderTrack={Track} renderThumb={Thumb} onAfterChange={demoOnClicklp}/>
		</span>

		<span className="col-md-6">
		<h5>Scaled Term Frequency:</h5>
		<StyledSlider min={words.dao.lslimits.mi} step={1} max={words.dao.lslimits.ma} defaultValue={[words.dao.lslimits.mi, words.dao.lslimits.ma]}  renderTrack={Track} renderThumb={Thumb} onAfterChange={demoOnClickls}/>
		</span>
		</div>
		

		<div style={{ height: 450, width: 650 }}>
		<ReactWordcloud options={options1} callbacks={callbacks1} words={words1} />
		</div>
		
		
		
		
		</div>
	
	
	

	</div>
	
 </div>
	  
  );
}

export default Wordcloud;