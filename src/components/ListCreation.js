import React from "react";
import ListDetails from "./ListDetails";
import ListForm from "./ListForm";

export const SongContext = React.createContext();

const initialState = {
  list: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SONG_SUCCESS":
      return {
        ...state,
        isSongSubmitting: false,
        list: [...state.list, action.payload]
      }
    default:
      return state;
  }
};

export const ListCreation = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <React.Fragment>
    <SongContext.Provider value={{
      state,
      dispatch
    }}>
      <ListForm />
    </SongContext.Provider>
    <div className="home">
    {state.list.length > 0 &&
            state.list.map(list => (
              <ListDetails key={list.rating.toString()} list={list} />
            ))}
    </div>
    </React.Fragment>
  );
};

export default ListCreation;
