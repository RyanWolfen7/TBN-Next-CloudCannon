import { getCollectionSlugs, getCollectionItem } from '@/lib/collections';
import { useRouter } from 'next/router';

const GuestPage = ({ guest }) => {
    const router = useRouter();
    const { slug } = router.query

    return (
        <h1> Guest: {guest.name} slug: {slug} </h1>
    )
}

export default GuestPage
export async function getStaticPaths() {
	const slugs = await getCollectionSlugs('guests');
	return {
		paths: slugs,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('guests', params.slug);

	return {
		props: {
			guest: JSON.parse(JSON.stringify(page))
		}
	};
}
