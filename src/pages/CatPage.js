import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CatPage() {
	// cat for all the individual cat data from a get request
	const [cat, setCat] = useState({});

	useEffect(() => {
		getCat();
	}, []);

	// get the id parameter from useParams
	// which passes within link from one page to another
	// to allow page to get cat data
	const { id } = useParams;

	async function getCat() {
		console.log("get CAT is working");
		const API = `http://localhost:8080/cats?_id=${id}`;
		const res = await axios.get(API);
		// axios .data is always an array, so take item 0
		setCat(res.data[0]);
	}

	return (
		<div>
			<h2>{cat.name}</h2>
			<p>{cat.colour}</p>
			<p>{cat.location}</p>
			{/* <form onSubmit={updateCat}>
				<input
					name="name"
					placeholder="Name"
					onChange={handleChange}
					value={form.name}></input>
				<input
					name="colour"
					placeholder="colour"
					onChange={handleChange}
					value={form.colour}></input>
				<input
					name="location"
					placeholder="Location"
					onChange={handleChange}
					value={form.location}></input>
				<input type="submit" />
			</form> */}
		</div>
	);
}
