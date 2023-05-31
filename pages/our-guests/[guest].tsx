'use client'
import { useParams } from 'next/navigation';

const GuestPage = ({}) => {
    const params: Record<string, string | string[]>  | null= useParams();
    const slug = params?.guest;
    return (
        <h1> Guest {slug} </h1>
    )
}

export default GuestPage
