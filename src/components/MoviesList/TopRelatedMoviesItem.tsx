interface TopRelatedMoviesItemProps {
    repository: {        
        title: string;
        overview: string;
        release_date: string;
        vote_average: string;
        poster_path: string;               
    }
}

export function TopRelatedMoviesItem(props: TopRelatedMoviesItemProps) {
    return (
        <li>
            <strong>{props.repository.title}</strong>

            <p>{props.repository.overview}</p>

            <p>Lançamento: {props.repository.release_date}</p>

            <p>Nota: {props.repository.vote_average}</p>

            <p>Poster: {props.repository.poster_path}</p>
        </li>
    )
}