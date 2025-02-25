import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function PostsDettaglio() {

    const { id } = useParams();

    const [post, setPost] = useState({});

    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => fetchPost(),
        [])



    return (
        <h2>Dettaglio {post.title}</h2>
    )
}