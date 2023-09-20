import { useEffect, useState } from "react";
import CarCard from "../../components/CarCard/CarCard";
import getAllCars from "../../utils/conectionsAPI";
import { ContainerCard, LoadMore, Container } from "./CarList.styled";

function CarList() {
    const [listCars, setListCars] = useState(8);
    const [cars, setCars] = useState([]);
  
    const nextPageCars = () => {
      setListCars(listCars + 8);
    };
  
    useEffect(() => {
        getAllCars().then(cars => {
        if (cars) {
          setCars(cars);
        }
      });
    }, []);
  
    const loadedCars = cars.slice(0, listCars);

    return (
        <Container>
            <ContainerCard>
                {loadedCars.map(car => (
                  <CarCard key={car.id} car={car}>
                  </CarCard>
                ))}
            </ContainerCard> 
            <LoadMore onClick={nextPageCars}>Load more</LoadMore>
        </Container>
        
    )
}

export default CarList;