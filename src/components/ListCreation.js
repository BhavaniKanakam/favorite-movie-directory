import React from "react";
import ListDetails from "./ListDetails";
import ListForm from "./ListForm";

export const SongContext = React.createContext();

const initialState = {
  list: [],
  isFetching: false,
  hasError: false,
  isSongSubmitting: false,
  songHasError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SONGS_REQUEST":
      return {
        ...state,
        isFetching: true,
        hasError: false
      };
    case "FETCH_SONGS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        songs: action.payload
      };
    case "FETCH_SONGS_FAILURE":
      return {
        ...state,
        hasError: true,
        isFetching: false
      };
    case "ADD_SONG_REQUEST":
      return {
        ...state,
        isSongSubmitting: true,
        songHasError: false,
      }
    case "ADD_SONG_SUCCESS":
      return {
        ...state,
        isSongSubmitting: false,
        list: [...state.list, action.payload]
      }
    case "ADD_SONG_FAILURE":
      return {
        ...state,
        isSongSubmitting: false,
        songHasError: true,
      }
    default:
      return state;
  }
};

export const ListCreation = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({
      type: "FETCH_SONGS_REQUEST"
    });
  }, []);

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
