import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CarCard from "../CarCard/CarCard";
import { Container, ContainerCard } from "./Favorite.styled";
import getAllCars from '../../utils/conectionsAPI';

function Favorite() {
    const [cars, setCars] = useState([]);
    const favorite = useSelector(state => state.favorite);
    const favoriteCars = cars.filter(car => favorite.includes(car.id));
  
    useEffect(() => {
        getAllCars().then(cars => {
        if (cars) {
          setCars(cars);
        }
      });
    }, []);

    return (
        <Container>
            <ContainerCard>
            {favoriteCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
            </ContainerCard>
        </Container>
    )
}

export default Favorite;