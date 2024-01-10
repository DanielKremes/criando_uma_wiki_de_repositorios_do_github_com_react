import { ItemContainer } from './styles'

const itemRepository = ({ repo, onRemove }) => {

    const handleRemoveClick = () => {
        // Call the onRemove function passed from the parent component
        onRemove && onRemove(repo.id);
    };

    return (
        <ItemContainer>

            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target='_blank' rel="noreferrer" className='search'>Search</a>
            <a href='$' onClick={handleRemoveClick} className='remove'>
                Remove
            </a>
            <hr />

        </ItemContainer>
    );
}

export default itemRepository;