import styled from "styled-components";


export const Container = styled.section`
    margin: 2rem;

    h1 {
        margin-bottom: 4rem;
        justify-content: center;
        display: flex;
    }

    ul {
        list-style: none;        

        li {
            background: var(--shape);
            padding: 1rem 2rem;
            line-height: 1.5rem;
            text-align: justify;
            border-radius: 1.25rem;
            
            & + li {
                margin-top: 1rem;                
            }

            strong {
                font-size: 1.3rem;
                justify-content: center;
                display: flex;
                padding: 0 0 1rem 0;
            }

            p {
                font-size: 1rem;
                color: #444;                
                margin-top: 0.7rem;
            }            
        }
    }    
`;