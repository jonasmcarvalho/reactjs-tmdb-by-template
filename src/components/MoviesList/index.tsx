import { useEffect, useState } from "react";
import { TopRelatedMoviesItem } from "./TopRelatedMoviesItem";

import { Container } from "./styles";
import { api } from "../../services/api";

interface Repository {    
    title: string;
    overview: string;
    release_date: string;
    vote_average: string;
    poster_path: string;
}

export function TopRelatedMovies() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        api.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=de1fe62e293e7bb93774da73df634cb3&language=pt-BR&page=2`)
            .then(response => setRepositories(response.data.results))           
        }, []) 

    return (
        <Container>
            <h1>Top Related Movies</h1>
            <ul>
                {repositories.map(repository => {
                    return <TopRelatedMoviesItem key={repository.title} repository={repository} />
                })}
            </ul>
        </Container>
    )
}