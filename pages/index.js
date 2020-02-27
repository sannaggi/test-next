import Layout from '../comps/Layout'
import Link from 'next/link'
import useSWR from "@zeit/swr";
import fetch from "isomorphic-unfetch";

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
    const { data, error } = useSWR('/api/randomQuote', fetcher)

    const author = data?.author
    let quote = data?.quote

    if (!data) 
        quote = 'Loading...'
    if (error)
        quote = 'Failed to fetch data'

    return (
        <Layout>
            <h1>{quote}</h1>
                {author && <span>{author}</span>}
            <ul>
                <PostLink id="sad"/>
                <PostLink id="dudu"/>
            </ul>
        </Layout>
    )
}

export default Index