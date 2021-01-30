// import { useState, useEffect } from 'react';
// import styled from 'styled-components';

// const StyledSearch = styled.div`
//   height: 55px;
//   border-bottom: 1px solid #dbdbdb;
//   display: flex;
//   align-items: center;
//   label {
//     padding: 0 10px;
//   }
//   input {
//     border: 0;
//     outline: 0;
//     height: 30px;
//     font-size: 18px;
//   }
// `;

// const Search = ({ data }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   console.log('search', data);

//   // useEffect(() => {
//   //   const results = data.filter((person) =>
//   //     person.toLowerCase().includes(searchTerm)
//   //   );
//   //   setSearchResults(results);
//   // }, [searchTerm]);

//   return (
//     <StyledSearch>
//       <label>받는 사람:</label>
//       <div>
//         <input type="text" placeholder="검색..." value={searchTerm} />
//       </div>
//     </StyledSearch>
//   );
// };

// export default Search;
