import { useRouter } from "next/router";

const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = e.target.elements.search.value;
        router.push(`/search?query=${searchQuery}`);
    };

    return (
        <form onSubmit={handleSearch} className="flex h-12 items-center justify-center bg-accent rounded-md mt-4">
            <button type="submit" className="p-2 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
            </button>
            <input
                type="text"
                name="search"
                placeholder="Search"
                className="p-2 mb-5 text-lg border-none text-white bg-transparent focus:outline-none"
            />
        </form>
    );
};

export default SearchBar;
