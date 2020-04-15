import React from "react";
import { ListCreation } from "./ListCreation";

const ListForm = (props) => {
  const { dispatch } = React.useContext(ListCreation);

  const [movie, setMovie] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const onSubmit = () => {
      
      const data = {
        "movie": movie,
        "rating": rating,
        "duration": duration
      };
      dispatch({
        type: "ADD_LIST_SUCCESS",
        payload: data
    })
  }
    return (
      <div>
       <form className="modal-form">
                <div className="modal-form-inputs">

                <label htmlFor="title">Movie Name</label>
                    <input
                    id="naame-input"
                    name="Movie-name"
                    type="text"
                    value={movie}
                    onChange={e => setMovie(e.target.value)}
                    className="text-input"
                    />

                <label htmlFor="artist">Rating</label>
                    <input
                    id="ratings-input"
                    name="artist"
                    type="text"
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                    className="text-input"
                    />

                <label htmlFor="imageUrl">Duration</label>
                    <input
                    id="durtaion-input"
                    name="Duration"
                    type="text"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                    className="text-input"
                    />
                </div>
                <div className="form-action clearfix">
                    <button
                      type="button"
                      id="submit-input"
                      className="button button-primary"
                      onClick={onSubmit}
                    >
                      Submit
                    </button>
                </div>
              </form>
      </div>
    );
};

export default ListForm;

