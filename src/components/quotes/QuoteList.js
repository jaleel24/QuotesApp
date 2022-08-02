import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  //!useHistory hook gives you access to history objects and you have access to several functions to navigate your page.
  //! It's all about navigation. This is how you can use useHistory.
    const history = useHistory();
    //! useLocation is like a state that always returns your current URL. If the URL is changed, the useLocation will be updated as well.
    const location = useLocation();

    console.log(location);
    const queryParams = new URLSearchParams(location.search);

    const isSortAscending = queryParams.get('sort')==='asc';
  const SortingHandler = ()=>{
      history.push(`/quotes${queryParams}`);
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={SortingHandler}>Sort {isSortAscending ? 'Descending': 'Ascneding'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
