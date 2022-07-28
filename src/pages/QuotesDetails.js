import { Fragment } from "react";
import { useParams ,Route} from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuotesDetails = () => {
  const param = useParams();
  return (
    <Fragment>
      <h1> Quotes Details page with id : {param.quotesId}</h1>
      <Route path={`/quotes/${param.quotesId}/comments`} ><Comments /></Route>
    </Fragment>
  );
};
export default QuotesDetails;
