import Image from "next/image"
import { useState } from "react";

const HighlightedGuests = ({ guests, promotedListItems }) => {
    const [transition, setTransition] = useState(false);
    const selectedGuests = guests.filter(guest => promotedListItems.find(item => item.key == guest.name))
    
    return (
        <div className="grid grid-cols-3 gap-4">
            {selectedGuests?.map((guest, index) => {
                const { name, mainImage, transitionImage } = guest
                return (
                    <div key={`${name}-highlighted-${index}`} onMouseEnter={() => setTransition(true)} onMouseLeave={() => setTransition(false)}>
                        <div>
                            {transition ?
                                <Image
                                    src={transitionImage}
                                    alt="Second Image"
                                    width={400}
                                    height={300}
                                    className="transition-opacity duration-300"
                                />
                                :
                                <Image
                                    src={mainImage}
                                    alt="First Image"
                                    width={400}
                                    height={300}
                                    className="transition-opacity duration-300" 
                                />
                            }
                        </div>
                        <div> 
                            {name}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HighlightedGuests
