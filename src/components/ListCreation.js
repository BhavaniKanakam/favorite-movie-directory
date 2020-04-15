import React from "react";
import ListDetails from "./ListDetails";
import ListForm from "./ListForm";

export const ListContext = React.createContext();

const initialState = {
  list: [],
  searchList: [],
  search: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST_SUCCESS":
      return {
        ...state,
        list: [...state.list, action.payload],
        search: false
      }
    case "SEARCH":
      return {
        ...state,
        searchList: action.payload,
        search: true
      }
    default:
      return state;
  }
};

export const ListCreation = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [search, setSearch] = React.useState("");
  const data = state.search ? state.searchList : state.list;

  return (
    <React.Fragment>
    <ListContext.Provider value={{
      state,
      dispatch
    }}>
      <ListForm />
    </ListContext.Provider>
    <div className="home">
    <input
          onChange={e => {
            const test = state.list.filter(team => {
              return team.movie.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setSearch(e.target.value);
            dispatch({
              type: "SEARCH",
              payload: test
          })
          }}
          placeholder='Search'
          id="search-input"
          type="text"
          value={search}
      />
      {data.length > 0 &&
        data.map(list => (
          <ListDetails key={list.rating.toString()} list={list} />
        ))}
    </div>
    </React.Fragment>
  );
};

export default ListCreation;
