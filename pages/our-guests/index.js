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
            setActiveTab(sortedGuests.name[0].toUpperCase)
        }
        if(activeTab) {
            const filteredGuests =  guests.filter(guest => guest.name[0].toUpperCase() == activeTab)
            setCurrentList(filteredGuests)
        }
    }, [guests, activeTab])
    return (
        <div className="">
            {header && <div> 
                <h1> {header} </h1>
                <p> {subText} </p>
            </div>}
            <WYSIWYG contentHtml={contentHtml} />
            <HighlightedGuests
                promotedListItems={promotedListItems}
                guests={guests}
            />
            <hr/>
            <AlphabetTabs list={guests} activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div>
                <h3> {activeTab} </h3>
                <ul>
                    {currentList.map((item, index) => {
                        const slugifiedName = createSlugFromNames(item.name)
                        return (
                            <li key={`${item.name}-${index}`}>
                                <Link href={`/${slugifiedName}`}>
                                </Link>
                                {item.name}
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
