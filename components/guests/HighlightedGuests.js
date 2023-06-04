import Image from "next/image"

const HighlightedGuests = ({ guests, promotedListItems }) => {
    // const { searchKey, orderNumber } = promotedListItem
    const selectedGuests = guests.filter(guest => promotedListItems.find(item => item.searchKey == guest.name) == guest.name)
    return (
        <div className="grid grid-cols-3 gap-4">
            {selectedGuests?.map((guest, index) => {
                const { name, mainImage, transitionImage } = guest
                return (
                    <div key={`${name}-highlighted-${index}`}>
                        <div className="relative">
                            <Image
                                src={mainImage}
                                alt="First Image"
                                width={400}
                                height={300}
                                className="transition-opacity duration-300"
                            />
                            <Image
                                src={transitionImage}
                                alt="Second Image"
                                width={400}
                                height={300}
                                className="transition-opacity duration-300 absolute inset-0 opacity-0 hover:opacity-100"
                            />
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
