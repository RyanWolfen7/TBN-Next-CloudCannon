const AlphabetTabs = ({ list, activeTab, setActiveTab }) => {
    const handleTabClick = (letter) => {
        setActiveTab(letter);
    };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
                {alphabet.map((letter) => {
                    let color = "text-black hover:text-main";
                    const exists = list.find((item) => item.name[0] === letter);
                    const isActive = activeTab === letter;
                    const isZ = letter === 'Z';
                    if (isActive) color = "text-main hover:text-black";
                    return (
                        <button
                            key={letter}
                            className={`py-2 rounded-lg ${color} text-lg md:text-xl disabled:text-slate-300`}
                            onClick={() => handleTabClick(letter)}
                            disabled={!exists}
                        >
                            <div className="relative">
                                <span className="relative inline-block px-2 md:pl-3 md:pr-2 mb-2">
                                    <p className="mb-2">{letter}</p>
                                    {isActive && <span className="absolute bottom-0 left-0 w-full h-1 bg-main"></span>}
                                </span>
                                {!isZ && <span className="text-black hidden md:inline"> | </span>}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default AlphabetTabs;
