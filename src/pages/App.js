import { useState } from 'react';
import { api } from '../services/api';

import { Container } from './styles'
import logoGitHub from '../assets/images/github.png'
import Input from "../components/input";
import Button from '../components/button';
import ItemRepository from "../components/itemRepository";

function App() {

  // state to save repository current.
  const [currentRepository, setCurrentRepository] = useState('');

  // state to save repository.
  const [repository, setRepository] = useState([]);

  // function to get repository.
  const handleSearchRepository = async () => {
    try {
      const { data } = await api.get(`/${currentRepository}`, {
        headers: {
          Authorization: `Bearer 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`,
        },
      });

      if (data.id) {
        // Check if the repository with the same ID already exists
        const isExist = repository.find((repo) => repo.id === data.id);

        if (!isExist) {
          // If it doesn't exist, add it to the repository state
          setRepository((prev) => [...prev, data]);
          // Clear the input field after successfully adding the repository
          setCurrentRepository('');
        }
      }
    } catch (error) {
      console.error('Error fetching repository:', error);
      // Handle error (e.g., display a message to the user)
    }
  };

  // function to remove repository
  const handleRemoveRepository = (id) => {
    const updatedRepository = repository.filter((repo) => repo.id !== id);
    setRepository(updatedRepository);
  };

  return (
    <Container>
      <img src={logoGitHub} width={50} alt="imagem logo github" />

      <Input value={currentRepository} onChange={(e) => setCurrentRepository(e.target.value)} />

      <Button onClick={handleSearchRepository}>Search</Button>

      {/* map item */}
      {repository.map(repo => <ItemRepository key={repo.id} repo={repo} onRemove={() => handleRemoveRepository(repo.id)} />)}


    </Container>
  );
}

export default App;
