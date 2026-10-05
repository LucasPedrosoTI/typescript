import { useEffect, useContext } from "react";
import show from "../api/show";
import { AppContext } from "../context/AppContext";
import { CREATE_LIST } from "../types";

export const useShows = () => {
  // const [shows, setShows] = useState([]);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    show.get("/shows").then((res) => {
      const action = { type: CREATE_LIST, payload: res.data };
      dispatch(action);
    });
  }, [state?.shows]);

  return { shows: state?.shows };
};
