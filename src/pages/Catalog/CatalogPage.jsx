import { useEffect, useState } from "react";
import CarCard from "../../components/CarCard/CarCard";
import getAllCars from "../../utils/conectionsAPI";
import { Container } from "./CatalogPage.styled";


function CatalogPage() {
    const [page, setPage] = useState(1);
    const [cars, setCars] = useState([]);
  
    const cardsPerPage = 8;

    const paginatedCars = cars.slice(0, page * cardsPerPage);
    const getPage = () => setPage(page + 1);
    console.log('getPage:', getPage);

    useEffect(() => {
        getAllCars()
          .then(cars => {
            if (cars) {
              setCars(cars);
            }
          })
          .catch((error) => {console.log(error)});
      }, []);

    return (
        <Container>
            {paginatedCars.map(car => (
              <CarCard key={car.id} car={car}>
              </CarCard>
            ))}
        </Container>
        
    )
}

export default CatalogPage;