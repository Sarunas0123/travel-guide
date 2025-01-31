// import {useQuery} from '@tanstack/react-query'
// import {useState, useEffect} from 'react'



// const fetchPosts = async (param: string) => {
//     const response = await fetch(`https://sky-scanner3.p.rapidapi.com/flights/price-calendar?fromEntityId=${param}`,
//         {   
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': 'def987fa5bmsh7e6c25d937ac2efp193155jsnfafab20f430f',
// 		        'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com'
//         }}
//     )
//     if(!response.ok) throw new Error("Error fetching data");
//     return response.json();
// }

// export default function Post (){

//     const [country, setCountry] = useState("");  
//     const [debouncedCountry, setDebouncedCountry] = useState("");

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setDebouncedCountry(country);
//         }, 10000)

//         return () => clearTimeout(timer);

//     }, [country])

//     const {data, isLoading, error} = useQuery({ 
//         queryKey: ["posts"], 
//         queryFn: () => fetchPosts(debouncedCountry),
//         enabled: !!debouncedCountry,
//     })
//     if (isLoading) return <p>Loading...</p>;
//     if (error instanceof Error) return <p>{error.message}</p>

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault(); // Prevent the form from refreshing the page
//       };

//     return (
//         <> 
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text"
//                     placeholder="Write a Country"
//                     onChange={(e) => setCountry(e.target.value)}
//                 />
//                 <button type="submit">Fly!</button>
//             </form>

//             {data && data.data?.days && (
//                 <div>
//                     {data.flights.days.map((post, id) => (
//                         <p key={id}>{post.day}</p>
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// }

