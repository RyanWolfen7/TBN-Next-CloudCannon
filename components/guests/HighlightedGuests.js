import Image from "next/image"
import { useState } from "react";

const HighlightedGuests = ({ guests, promotedListItems }) => {
    const selectedGuests = guests.filter(guest => promotedListItems.find(item => item.key == guest.name))
    const [transition, setTransition] = useState(selectedGuests.map(x => false));
    const handletransition = (index, bool) => {
        const transitionCopy = [...transition]
        transitionCopy[index] = bool
        setTransition(transitionCopy)
    }
    return (
        <div className="grid grid-cols-3 gap-6 mx-24 text-center my-24">
            {selectedGuests?.map((guest, index) => {
                const { name, mainImage, transitionImage } = guest
                return (
                    <div 
                        key={`${name}-highlighted-${index}`} 
                        onMouseEnter={() => handletransition(index, true)} 
                        onMouseLeave={() => handletransition(index, false)}
                    >
                        <div className="mb-16">
                            {transition[index] ?
                                <Image
                                    src={transitionImage}
                                    alt="Second Image"
                                    width={350}
                                    height={350}
                                />
                                :
                                <Image
                                    src={mainImage}
                                    alt="First Image"
                                    width={350}
                                    height={350}
                                />
                            }
                        </div>
                        <div className="text-4xl font-bold"> 
                            {name}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HighlightedGuests
