import { useRouter } from 'next/router';

const Search = () => {
    const router = useRouter();
    const { query } = router.query;

    return (
        <div>
            <h1>Search Results</h1>
            <p>Query: {query}</p>
        </div>
    );
};

export default Search;
