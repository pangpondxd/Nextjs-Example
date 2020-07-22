import { useState, useEffect } from "react";

const MovieCreateForm = (props) => {
  //fixed uncontrolled data!
  const [form, setForm] = useState({
    name: "",
    description: "",
    rating: "",
    image: "",
    longDesc: "",
  });
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const changedImageHandler = async (event) => {
    const target = event.target;
    console.log("target = = = = = = =", target);
    const name = target.name;
    const files = target.files[0];
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "movieDB");
    console.log("data ; ; ; ;", files);
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/doumyycj0/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log("file.url", file.url);
    setImage(file.secure_url);
    setLoading(false);
    console.log("target ; ; ; ; ; ; ; ");
  };

  const changedCoverHandler = async (e) => {
    const target = event.target;
    const name = target.name;
    const files = target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "movieDB");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/doumyycj0/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    let cover = target.cover;
    cover = file.url;
    console.log(cover);
    setForm({
      ...form,
      cover: target.value,
    });
  };

  const changedHandler = (event) => {
    let target = event.target;
    let name = target.name;
    setForm({
      ...form,
      [name]: target.value,
    });

    console.log("target.value", target.value);
  };

  const changedGenreHandler = (event) => {
    const { options } = event.target;
    const optionsLength = options.length;
    let value = [];
    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setForm({
      ...form,
      genre: value.toString(),
    });
  };

  const submitForm = (e) => {
    // call here function to create movie from props
    e.preventDefault();
    props.handleFormSubmit({ ...form });
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="form-group">
        {JSON.stringify(form)}
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={image} style={{ width: "300px" }} />
        )}
        <br />
        <label htmlFor="name">Name</label>
        <input
          value={form.name}
          name="name"
          onChange={changedHandler}
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          value={form.description}
          onChange={changedHandler}
          name="description"
          type="text"
          className="form-control"
          id="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          value={form.rating}
          onChange={changedHandler}
          name="rating"
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          onChange={changedImageHandler}
          name="file"
          // ref="file"
          type="file"
          className="form-control"
          id="file"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          value={form.cover}
          onChange={changedCoverHandler}
          name="cover"
          type="file"
          className="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          value={form.longDesc}
          onChange={changedHandler}
          name="longDesc"
          className="form-control"
          id="longDesc"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          onChange={changedGenreHandler}
          multiple
          className="form-control"
          id="genre"
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};
export default MovieCreateForm;
