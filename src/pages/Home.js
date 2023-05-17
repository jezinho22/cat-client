export default function Home({
	postCat,
	handleChange,
	form,
	cats,
	deleteCats,
}) {
	return (
		<div>
			{" "}
			<form onSubmit={postCat}>
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
					placeholder="location"
					onChange={handleChange}
					value={form.location}></input>
				<input type="submit" />
			</form>
			<div className="catWrap">
				{cats.map((cat) => {
					return (
						<div>
							<h3>{cat.name}</h3>
							<p>{cat.colour}</p>
							<p>{cat.location}</p>

							<button onClick={() => deleteCats(cat._id)}>Delete</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
