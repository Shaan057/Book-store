# <span style="color: green;"> Interactive Book Store Application</span>

An application that allows users to browse and search for books, view book details, add books to a shopping cart, and place an order.

### <span style="color: orange;"> Usage</span>

```
git clone <github repository link>  //to clone the github repository
npm install                         //to install all the dependencies required to run application
npm start                           //to start the application
```

## <span style="color: Orange;"> Development</span>

### <span style="color: red;"> Tech Stack</span>

> <span style="color: violet;">Frontend - ReactJS (React Router, Redux/React Context)</span>

### <span style="color: red;"> Functionality</span>

| Page         | Page Details                                                                                                                             | Navigation                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Home         | Header - Links for pages Home, Book List, Cart, Banner - Heading, description, and “Explore Books” Button                                | -                                                                                      |
| Book List    | Header - Links for pages Home, Book List, Cart, Book Items - image, title, subtitle, price, Search (by title, author), Filter (by price) | “Book List” link in Header, “Explore Books” Button, “Back” Button in Book Details Page |
| Book Details | Book detailed Information - image, title, subtitle, price, description, etc., “Add to cart” Button, “Back” button                        | Each Book Item in Book List Page                                                       |
| Cart         | Cart Items, “Remove” Button, Order Summary, “Checkout” Button                                                                            | “Cart” link in Header, “Back” Button in Checkout Page                                  |
| Checkout     | “Back” Button, Order Form - Personal Details - First Name, Last Name, Email, Mobile No. , Place Order Button, Order Summary              | “Checkout” Button in Cart                                                              |

### <span style="color: red;"> Technical Details</span>

### Routes

| Page         | Route        | Path       |
| ------------ | ------------ | ---------- |
| Home         | Home         | /          |
| Book List    | Book List    | /books     |
| Book Details | Book Details | /books/:id |
| Cart         | Cart         | /cart      |
| Checkout     | Checkout     | /checkout  |
| Not Found    | Not Found    | /not-found |

## <span style="color: Green;"> Routes & Components</span>

### <span style="color: Blue;"> **Home**</span>

| Component | Details                                         | State              | API (IT Bookstore) |
| --------- | ----------------------------------------------- | ------------------ | ------------------ |
| Home      | Heading, Description, and "ExploreBooks" button | -                  | -                  |
| Header    | Links for pages Home, Book List, Cart           | (Context Consumer) | -                  |

### <span style="color: Blue;"> **Book List**</span>

| Component    | Details                                    | State                                 | API (IT Bookstore) |
| ------------ | ------------------------------------------ | ------------------------------------- | ------------------ |
| BookList     |                                            | apiStatus, booksData, priceRangeValue | /new               |
| Header       | Links for pages Home, Book List, Cart      | (Context Consumer)                    | -                  |
| SearchInput  | Search (by title, author)                  | searchInputValue                      | /search/{query}    |
| PriceRange   | Filter (by price)                          | -                                     | -                  |
| BookItem     | Book Items (title, subtitle, image, price) | -                                     | -                  |
| Loader       |                                            | -                                     | -                  |
| ErrorMessage |                                            | -                                     | -                  |

### <span style="color: Blue;"> **Book Details**</span>

| Component    | Details                                                                                                            | State                      | API (IT Bookstore) |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------- | ------------------ |
| BookDetails  | Book detailed Information -  image, title, subtitle, price, description, etc., “Add to cart” Button, “Back” button | apiStatus, bookDetailsData | /books/{isbn}      |
| Header       | Links for pages Home, Book List, Cart                                                                              | (Context Consumer)         | -                  |
| Loader       |                                                                                                                    | -                          | -                  |
| ErrorMessage |                                                                                                                    | -                          | -                  |

### <span style="color: Blue;"> **Cart**</span>

| Components | Details                                                         | State              | API (IT Bookstore) |
| ---------- | --------------------------------------------------------------- | ------------------ | ------------------ |
| Cart       | Cart Items, “Remove” Button, Order Summary, “Checkout” Button   | (Context Consumer) | -                  |
| Header     | Links for pages Home, Book List, Cart                           | (Context Consumer) | -                  |
| CartItem   | Book Detailed Info (image, title, subtitle, price, description) | (Context Consumer) | -                  |

### <span style="color: Blue;"> **Checkout**</span>

| Components      | Details                                                                                                      | State                        | API (IT Bookstore) |
| --------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------ |
| Checkout        | “Back” button                                                                                                | (Context Consumer)           | -                  |
| UserDetailsForm | Order Form - Personal Details - First Name, Last Name, Email, Mobile No. , Place Order Button, Order Summary | userDetails, isFormSubmitted | -                  |

### <span style="color: Blue;"> **Not Found**</span>

| Components | Details                               | State              | API (IT Bookstore)                    |
| ---------- | ------------------------------------- | ------------------ | ------------------------------------- |
| NotFound   | -                                     | -                  | -                                     |
| Header     | Links for pages Home, Book List, Cart | (Context Consumer) | Links for pages Home, Book List, Cart |

### <span style="color: Blue;"> **App**</span>

| Component | Details | State                                                                     | API (IT Bookstore) |
| --------- | ------- | ------------------------------------------------------------------------- | ------------------ |
| App       | -       | cartList (Context Provider), Context: cartList, addToCart, deleteFromCart | -                  |

## <span style="color: Green;"> Guidelines</span>

- Followed Github Guidelines
  - Made the commits often and made sure the commit messages are concise and specific
  - Included a README file for explaining the project setup, usage instructions, and any additional information.
- Followed Clean Code Guidelines
- The repo is well-organized and easy to navigate
  - Followed the `create-react-app` folder structure
- The Application handled all the errors

## <span style="color: Green;"> Resources </span>

### <span style="color: Green;"> Design Files </span>

Pages: Home, Book List, Book Details, Shopping Cart, Checkout

Reference: https://www.crossword.in/

### <span style="color: Green;">API </span>

Books, Book Details, Search

Reference: https://api.itbook.store

### <span style="color: Green;">Third-party packages</span>

- Loader (react-loader-spinner)
- Icons (react-icons)
- Range Slider (rc-slider)
- React Tooltip (rc-tooltip) for tooltips in Range slider
- React Router (react-router-dom)

### <span style="color: Green;">Future Improvements</span>

- Implement User Authentication

## <span style="color: Red;">Previews</span>

### <span style="color: Orange;"> Mobile View</span>

###### [Home View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421339/Screenshot_397_qwfvg6.png)

###### [Book List View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421340/Screenshot_398_mmsi98.png)

###### [Book Details View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421340/Screenshot_400_elocqs.png)

###### [Cart View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704423005/Screenshot_401_ene3hk.png)

###### [Empty Cart View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421340/Screenshot_399_wdaxbc.png)

###### [Checkout Details View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704423005/Screenshot_402_dlykwu.png)

###### [Order Placed View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704423004/Screenshot_403_xmbmrl.png)

### <span style="color: Orange;"> Desktop View</span>

###### [Home View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421339/Screenshot_390_hwkzot.png)

###### [Book List View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421339/Screenshot_391_ozsdzg.png)

###### [Book Details View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421339/Screenshot_393_xwz9tb.png)

###### [Empty Cart View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421338/Screenshot_392_hsll4u.png)

###### [Checkout Details View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421338/Screenshot_395_rso9z9.png)

###### [Cart View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421338/Screenshot_394_xnvulz.png)

###### [Order Placed View](https://res.cloudinary.com/dx8csuvrh/image/upload/v1704421339/Screenshot_396_pytxja.png)

### <span style="color: Green;">Demo</span>

#### [Link](https://book-store-mu-gules.vercel.app/)
