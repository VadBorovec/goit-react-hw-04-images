import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';

import './Searchbar.css';

// !======functional component

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      Notiflix.Notify.failure('Please enter a search query.');
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <ImSearch className="SearchForm-button-icon" />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

// !======class

// class Searchbar extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { searchQuery } = this.state;
//     const { onSubmit } = this.props;
//     onSubmit(searchQuery);
//     this.setState({ searchQuery: '' });
//   };

//   handleChange = e => {
//     this.setState({ searchQuery: e.target.value });
//   };

//   render() {
//     const { searchQuery } = this.state;

//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <ImSearch className="SearchForm-button-icon" />
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={searchQuery}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

export default Searchbar;
