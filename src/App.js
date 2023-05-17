import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import About from "./pages/About";
import CatPage from "./pages/CatPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	const [cats, setCats] = useState([]);
	const [form, setForm] = useState({
		name: "",
		colour: "",
		hasClaws: true,
		location: "",
	});

	useEffect(() => {
		console.log("Used effect");
		getCats();
	}, []);

	async function getCats() {
		const API = "http://localhost:8080/cats";
		const res = await axios.get(API);
		setCats(res.data);
	}

	async function deleteCats(id) {
		console.log(id);
		const API = `http://localhost:8080/cats/${id}`;
		await axios.delete(API);
		//re-run getCats to re-render page
		getCats();
	}

	async function postCat(event) {
		// this is the event handler for submit
		event.preventDefault(); // but want to reset the form later ...
		const API = "http://localhost:8080/cats";
		// post will pass form as body because it exactly matches the model
		// as shown in app.post on !!!server!!!
		// so body carries the new Cat
		await axios.post(API, form);
		getCats();
		setForm({
			name: "",
			colour: "",
			hasClaws: true,
			location: "",
		});
	}

	function handleChange(event) {
		//     setForm({...form, name: event.target.value}) for name
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	return (
		<BrowserRouter>
			<div className="App">
				<h1>Cats!!</h1>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								cats={cats}
								form={form}
								handleChange={handleChange}
								postCat={postCat}
								deleteCats={deleteCats}
							/>
						}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/cats/:id" element={<CatPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
