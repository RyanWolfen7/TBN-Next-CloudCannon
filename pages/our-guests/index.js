import WYSIWYG from "@/components/wysiwyg";
import { getCollectionItem, getCollection } from "@/lib/collections";
import HighlightedGuests from './../../components/guests/HighlightedGuests';
import AlphabetTabs from './../../components/paginators/AlphabetTabs';
import { useEffect, useState } from "react";
import Link from "next/link";
import createSlugFromNames from './../../lib/helpers/slugify';

const OurGuestsPage = ({ page, guests }) => {
    const { contentHtml, header, subText, promotedListItems, seo } = page
    const [activeTab, setActiveTab] = useState('');
    const [currentList, setCurrentList] = useState([])

    useEffect(() => {
        if(guests.length && !activeTab) {
            const sortedGuests = guests.sort((a, b) => a.name.localeCompare(b.name))
            setActiveTab(sortedGuests[0].name[0].toUpperCase())
        }
        if(activeTab) {
            const filteredGuests =  guests.filter(guest => guest.name[0].toUpperCase() == activeTab)
            setCurrentList(filteredGuests)
        }
    }, [guests, activeTab])

    return (
        <div className="">
            {header && 
                <div className="flex-grow flex items-center justify-center mt-16">
                    <div className="margin-x-auto max-w-xl text-center"> 
                        <h1 className="text-6xl font-bold mb-6"> {header} </h1>
                        <p className="text-xl"> {subText} </p>
                    </div>
                </div>
            }
            <WYSIWYG contentHtml={contentHtml} />
            <HighlightedGuests
                promotedListItems={promotedListItems}
                guests={guests}
            />
            <hr className="pb-4"/>
            <AlphabetTabs list={guests} activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="py-8 mx-24">
                <h3 className="text-4xl font-bold text-main pb-8"> {activeTab} </h3>
                <ul className="grid md:grid-cols-3 gap-6">
                    {currentList.map((item, index) => {
                        const slugifiedName = createSlugFromNames(item.name)
                        return (
                            <li key={`${item.name}-${index}`} className="text-xl hover:text-main">
                                <Link href={`/our-guests/${[slugifiedName]}`}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const page = await getCollectionItem('pages', 'our-guests');
    const guests = await getCollection('guests')
    return {
        props: {
            page: JSON.parse(JSON.stringify(page)),
            guests: JSON.parse(JSON.stringify(guests))
        }
    };
}

export default OurGuestsPage
