import styled from 'styled-components';

export const ItemContainer = styled.div`
    width:80%;
    display: flex;
    flex-direction: column;

    h3 , p , a {
        font-size:2rem;
    }

    hr, h3 {
        margin-top:1rem;
    }

    a {
        text-decoration:none;
    }

    .remove {
        color: #ff0000;
    }

    .search {
        color: #6a5acd;
    }
    
`