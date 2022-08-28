import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
	function randomNum(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	const [st1, setSt1] = useState('');
	const ref1 = React.createRef();
	const [st2, setSt2] = useState(0);
	const [st3, setSt3] = useState('');
	const [st4, setSt4] = useState('');
	const [st5, setSt5] = useState('');
	const [st6, setSt6] = useState('');
	const [st7, setSt7] = useState('');
	const [st8, setSt8] = useState(0);
	const [st9, setSt9] = useState('');
	const [st10, setSt10] = useState([]);
	const ref10 = React.createRef();

	function task1() {
		setSt1(ref1.current.value);
	}
	function task2() {
		let currentSt2 = st2;
		currentSt2++;
		setSt2(currentSt2);
	}
	function task3(event) {
		setSt3(event.target.value)
	}
	function task4() {
		let currentSt4 = st4;
		currentSt4++;
		setSt4(currentSt4);
	}
	function task5(event) {
		if (event.target.checked) setSt5(event.target.value);
		else setSt5(0);
	}
	function task6(event) {
		setSt6(event.target.value);
	}
	function task7() {
		let arr = [];
		for (let i = 0; i < 3; i++) {
			arr.push(randomNum(0, 255));
		}
		setSt7(`rgb(${arr[0]},${arr[1]},${arr[2]})`);

	}
	function task8(event) {
		console.log(event);
		if (event.charCode >= 48 && event.charCode <= 57) setSt8(1);
		else setSt8(0);
	}
	function task9(event) {
		setSt9(event.target.value);
	}
	function task10() {
		let arr = [...st10, ref10.current.value];
		setSt10(arr);
		ref10.current.value = '';
	}

	return (
		<>
			<h1>События</h1>
			<section>
				<h2>Task 1</h2>
				<input type="text" className='i-1' ref={ref1} />
				<button className="task-1" onClick={task1}>Push</button>
				<div>{st1}</div>
			</section>
			<section>
				<h2>Task 2</h2>
				<div className="task-2" onMouseEnter={task2}></div>
				<div>{st2}</div>
			</section>
			<section>
				<h2>Task 3</h2>
				<input type="text" className="task-3" onInput={task3} />
				<div>{st3}</div>
			</section>
			<section>
				<h2>Task 4</h2>
				<button className="task-4" onClick={task4}>Count</button>
				<div>{st4}</div>
			</section>
			<section>
				<h2>Task 5</h2>
				<input type="checkbox" value="55" onChange={task5} />
				<div>{st5}</div>
			</section>
			<section>
				<h2>Task 6</h2>
				<select className="task-6" onChange={task6}>
					<option value="7">seven</option>
					<option value="4">four</option>
					<option value="9">nine</option>
					<option value="10">ten</option>
				</select>
				<div>{st6}</div>
			</section>
			<section>
				<h2>Task 7</h2>
				<div className="block-7" style={{ background: st7 }}></div>
				<button className="task-7" onClick={task7}>Color</button>
				<div>{st7}</div>
			</section>
			<section>
				<h2>Task 8</h2>
				<input type="text" className="task-8" onKeyPress={task8}></input>
				<div>{st8}</div>
			</section>
			<section>
				<h2>Task 9</h2>
				<input type="range" className="task-9" onInput={task9}></input>
				<div>{st9}</div>
			</section>
			<section>
				<h2>Task 10</h2>
				<input type="number" className="i-10" ref={ref10}></input>
				<button className="task-10" onClick={task10}>Push</button>
				<div>{st10.join('-')}</div>
			</section>
		</>
	);
}

export default App;
