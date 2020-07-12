import { useState } from "react";

const MovieCreateForm = (props) => {
  //fixed uncontrolled data!
  const [form, setForm] = useState({
    name: "",
    description: "",
    rating: "",
    image: "",
    cover: "",
    longDesc: ""
  });

  const changedHandler = (event) => {
    const target = event.target;
    const name = target.name;
    setForm({
      ...form,
      [name]: target.value,
    });
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

  const submitForm = () => {
    // call here function to create movie from props
    props.handleFormSubmit({...form})
  }

  return (
    <form>
      {JSON.stringify(form)}
      <div className="form-group">
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
          value={form.image}
          onChange={changedHandler}
          name="image"
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          form={form.cover}
          onChange={changedHandler}
          name="cover"
          type="text"
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
      <button onClick={submitForm} type="button" className="btn btn-primary">
         Create
        </button>
    </form>
  );
};
export default MovieCreateForm;
