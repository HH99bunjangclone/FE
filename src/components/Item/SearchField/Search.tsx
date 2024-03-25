// import { searchItems } from '../../../apis/itemAPI';
// import { useQuery } from '@tanstack/react-query';
// import { SearchContainer, SearchInput } from './styles';
// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router';
// import styled from 'styled-components';
// import ItemCard from '../ItemCard/ItemCard';
// import { instance } from '../../../apis/axios';

// function Search({ posts, setSearchResults }) {
//   const handleSubmit = (e) => e.preventDefault()

//   const handleSearchChange = (e) => {
//       if (!e.target.value) return setSearchResults(posts)

//       const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

//       setSearchResults(resultsArray)
//   }

//   const [value, setValue] = useState([]);
//   const [text, setText] = useState('');
//   const [item, setItem] = useState(data);
//   const { title } = useParams();
//   console.log(title,'title')
//   const [inputData, setInputData] = useState([]);

//   useEffect(() => {
//     searchItems(String(title));
//   }, []);


//   const { data, isLoading, isError } = useQuery({
//     queryKey: ['searchItems'],
//     queryFn: () => searchItems(String(title)),
//   });
//   console.log(data, 'data')
//   // const searchQuery = useQuery ({
//     //   queryFn: searchItems,
//     //   onSuccess: (data) => {
//       //     console.log(data);
//       //     const
//       //   }
//       // })
//   const handleSearch = async (e: any) => {
//     e.preventDefault();
//     return await instance
//       .get(`/item/search?title=${title}`)
//       .then((response) => {
//         setInputData(response.data)
//         setValue([]);
//       })
//       .catch((err) => console.log(err));
//   }

//   if (isLoading) {
//     return <div>로딩 중...</div>;
//   }
//   if (isError) {
//     return <div>먼가가 잘못됨!! 니누기야ㅡㅡ</div>;
//   }
//         //data.data.items
//   return (
//     <>
//     <SearchContainer onSubmit={handleSubmit}>
//       <SearchInput 
//       value={value} 
//       // onChange={handleSearch}
//       onChange={handleSearchChange}
//       placeholder="상품명, 지역명, @상점명 입력" 
//       />
//       <img src="/assets/search_icon.svg" alt="search" />
//       {/* <SearchInput 
//       value={text} 
//       onChange={(e) => setText(e.target.value)}
//       placeholder="상품명, 지역명, @상점명 입력" 
//       />
//       <img src="/assets/search_icon.svg" alt="search" /> */}
//     </SearchContainer>
//     <FoundContainer>
//     {data?.data.title.length === 0 ? (
//       <ItemCardList>
//         <div>No Data Found</div>
//       </ItemCardList>
//     ): (
//       data?.data?.items.map((item: any) => {
//         return <ItemCard key={item.id} item={item} />;
//       })
//     )}
//     {data?.data.title.length > 0 &&
//       data?.data?.items.map((item: any) => {
//         return <ItemCard key={item.id} item={item} />;
//       })}
//     </FoundContainer>
//     </>
//   )
// }

// export default Search;

// const ItemCardList = styled.div`
// display: flex;
// gap: 12px;
// flex-wrap: wrap;
// `;
// const FoundContainer = styled.div`
// display: flex;
// gap: 12px;
// flex-wrap: wrap;
// `;