
import {useState} from 'react'



const MovieCreateForm = () => {
    const [form, setForm] = useState({
        name: 'Dukdui',
        description: 'Hate P Mee'
    })

    const changedHandler = (event) => {
        const target = event.target
        const name = target.name
        setForm({
            ...form,
            [name]: target.value
        })
    }
    return (
        <form>
            {JSON.stringify(form)}
                <div className="form-group">
                  <label for="name">Name</label>
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
                  <label for="description">Description</label>
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
                  <label for="description">Rating</label>
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
                  <label for="image">Image</label>
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
                  <label for="cover">Cover</label>
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
                  <label for="longDesc">Long Description</label>
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
                  <label for="genre">Genre</label>
                  <select multiple className="form-control" id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                  </select>
                </div>
              </form>
    )
}
export default MovieCreateForm