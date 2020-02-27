import Layout from '../comps/Layout'
import Link from 'next/link'
import useSWR from "@zeit/swr";
import fetch from "isomorphic-unfetch";
import { useRouter } from 'next/router';

function fetcher(url) {
    return fetch(url).then(r => r.json())
}

const PostLink = props => (
    <li>
        <Link href="/[id]" as={`/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)

const Index = () => {
    const { query } = useRouter()
    const { data, error } = useSWR(`/api/randomQuote${query.extra ? '?extra=' + query.extra : ''}`, fetcher)

    const author = data?.author
    let quote = data?.quote
    let extras = data?.extra

    if (!data) 
        quote = 'Loading...'

    if (error)
        quote = 'Failed to fetch data'
        
    if (!extras) {
        extras = 'No extra'
    }

    return (
        <Layout>
            <h1>{quote}</h1>
                {author && <span>{author}</span>}
                <br/>
                <span>{extras}</span>
            <ul>
                <PostLink id="sad"/>
                <PostLink id="dudu"/>
            </ul>
        </Layout>
    )
}

export default Index
