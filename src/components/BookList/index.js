import "./index.css";
import { Component } from "react";
import Header from "../Header";
import PriceRange from "../PriceRanger";
import SearchInput from "../InputSearch";
import BookItem from "../BookItem";
import ErrorMessage from "../ErrorMsg";
import ContactUs from "../ContactUs";
import { ThreeDots } from "react-loader-spinner";

import { v4 as uuidv4 } from "uuid";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class BookList extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    booksData: [],
    priceRangeValue: [0, 0],
  };

  componentDidMount() {
    this.getBooks("");
  }

  getBooks = async (searchInputValue) => {
    let apiUrl;
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });
    if (searchInputValue === "") {
      apiUrl = `https://api.itbook.store/1.0/new`;
    } else {
      apiUrl = `https://api.itbook.store/1.0/search/${searchInputValue}`;
    }

    const response = await fetch(apiUrl);

    if (response.ok) {
      const fetchedData = await response.json();
      this.setState(
        {
          booksData: fetchedData["books"],
          apiStatus: apiStatusConstants.success,
        },
        this.setPriceRangeValue
      );
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }
  };

  onChangePriceRange = (event) => {
    this.setState({ priceRangeValue: event });
  };

  getMaxPriceOfBooks = (books) => {
    let prices = books.map((eachBook) => parseFloat(eachBook.price.slice(1)));
    let maxPrice = Math.max(...prices);
    return maxPrice;
  };

  setPriceRangeValue = () => {
    const { booksData } = this.state;
    let maxPrice = this.getMaxPriceOfBooks(booksData);
    this.setState({ ...BookItem, priceRangeValue: [0, maxPrice] });
  };

  renderLoadingView = () => {
    return <div className="book-list-spinner">
      <ThreeDots color="#ffe619" height="50" width="50" wrapperClass="loader" />
    </div>
  };

  getFilteredBooksByPriceRange = () => {
    const { booksData, priceRangeValue } = this.state;
    const filteredBooks = booksData.filter((eachBook) => {
      let price = parseFloat(eachBook.price.slice(1));
      return price >= priceRangeValue[0] && price <= priceRangeValue[1];
    });
    return filteredBooks;
  };

  renderBooksListView = () => {
    const { priceRangeValue, booksData } = this.state;
    const filteredBooks = this.getFilteredBooksByPriceRange();
    return (<>
      <PriceRange
        onChangePriceRange={this.onChangePriceRange}
        priceRangeValue={priceRangeValue}
        maxPrice={this.getMaxPriceOfBooks(booksData)}
      />
      <div className="book-items-container">
        <h1 className="book-items-heading">Books</h1>
        <ul className="book-items-list-container">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((eachbook) => (
              <BookItem key={uuidv4()} bookItemDetails={eachbook} />
            ))
          ) : (
            <p className="no-items-text">No Search Results Found.</p>
          )}
        </ul>
      </div>
    </>
    );
  };

  renderFailureView = () => {
    return <ErrorMessage />;
  };

  renderBooks = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderBooksListView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {

    return (
      <>
        <Header />
        <div className="book-list-container">
          <div className="book-list-content-container">
            <SearchInput onSearchBooks={this.getBooks} />
            <div className="books-container">
              {this.renderBooks()}
            </div>
          </div>
        </div>
        <ContactUs />
      </>
    );
  }
}

export default BookList;
