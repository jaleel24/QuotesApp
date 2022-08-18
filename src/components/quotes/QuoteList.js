import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};
const QuoteList = (props) => {



  //!useHistory hook gives you access to history objects and you have access to several functions to navigate your page.
  //! It's all about navigation. This is how you can use useHistory.
    const history = useHistory();
    //! useLocation is like a state that always returns your current URL. If the URL is changed, the useLocation will be updated as well.
    const location = useLocation();
     console.log(location);
    const queryParams = new URLSearchParams(location.search);

    const isSortAscending = queryParams.get('sort')==='asc';

    const sortedQuotes = sortQuotes(props.quotes,isSortAscending)
  const SortingHandler = ()=>{
      // history.push('/quotes/?sort='+(isSortAscending ? 'desc' : 'asc'));
      //! used a location.pathname to not hardcode anything
      // history.push(`${location.pathname}?sort=${(isSortAscending ? 'desc' : 'asc')}`);
      //---------------------------------------------------
      //? the code in line 36 is more readable than the line 33 use whatever helps
      history.push({
        path:location.pathname,
        search:`?sort=${(isSortAscending ? 'desc' : 'asc')}`
      });
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={SortingHandler}>Sort {isSortAscending ? 'Descending': 'Ascneding'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
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
