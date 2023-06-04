const AlphabetTabs = ({ list, activeTab, setActiveTab }) => {
    const handleTabClick = (letter) => {
        setActiveTab(letter);
    };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="flex justify-center">
            <div className="flex">
                {alphabet.map((letter) => {
                    let color = "text-black hover:text-main"
                    const exists = list.find(item => item.searchKey[0] == letter)
                    const isActive = activeTab === letter
                    const isZ = letter == 'Z'
                    if(isActive) color = "text-main hover:text-black "
                    return (<>
                        <button
                            key={letter}
                            className={`px-1 py-2 rounded-lg ${color} disabled:text-slate-300`}
                            onClick={() => handleTabClick(letter)}
                            disabled={!exists}
                        >
                            <div className='relative'>
                                <span className='relative inline-block'>
                                    {letter}
                                    {isActive && <span absolute bottom-0 left-0 w-full h-1 bg-main></span>}
                                </span>
                                {!isZ && <span> | </span>}
                            </div>
                        </button>
                    </>)
                })}
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default AlphabetTabs;
