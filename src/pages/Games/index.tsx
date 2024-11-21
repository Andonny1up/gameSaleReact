import useGames from './useGames'
import GameCard from './GameCard';
import { SimpleGrid } from '@chakra-ui/react';

type Props = {}

const Games = ({}: Props) => {
  const {data, isLoading} = useGames();
  return (
    <SimpleGrid 
        p={"20px"}
        columns={[1,2,3]}
        spacing="40px"
    >
        {isLoading && "Cargando..."}
        {data?.map(game => <GameCard key={game.gameID} game={game}/>)}
    </SimpleGrid>
  )
}

export default Games