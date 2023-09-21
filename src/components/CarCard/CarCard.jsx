import { useState } from "react";
import CarDetails from "../CarDetails/CarDetails";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { cutFavorite, pushFavorite } from "../../store/reducer";
import { 
    CarBlock,
    CarImg, 
    CarName, 
    CarNameBlue, 
    CarPrice, CarYear, 
    MainInfoBlock, 
    CarNameBlock, 
    CarInfo, 
    CarInfoItem,
    CarButton,
    FavoriteButton,
    DisableFavoriteButton,
    ActiveFavoriteButton,
} from "./CarCard.styled";

function CarCard({ car }) {
    
    const dispatch = useDispatch();
    const favorite = useSelector(state => state.favorite);
  
    const isCarInFavorites  = favorite.includes(car.id);

    const addFavorite = () => {
        dispatch(pushFavorite(car.id));
    };
    const delFavorite = () => {
        dispatch(cutFavorite(car.id));
    };

    const [isShowModal, setIsShowModal] = useState(false);
    const toggleModal = () => {
        setIsShowModal(!isShowModal);
      };

    const address = car.address.split(",");
    const city = address[1];
    const country = address[2];



    const funcCut = () => {
        const func = car.functionalities[0];
        const maxLengtx = 8;
        if (func.length > maxLengtx) {
            return func.slice(0,8) + "..."
        } else {
            return func
        }
    }

    const rentCut = () => {
        const func = car.rentalCompany;
        const maxLengtx = 8;
        if (func.length > maxLengtx) {
            return func.slice(0,8) + "..."
        } else {
            return func
        }
    }

    const carModelCut = () => {
        const model = car.model;
        const  maxLengtx = 5;
        if (model.length > maxLengtx) {
            return " "
        } else {
            return model
        }
    };


    return(
        <CarBlock>
            <FavoriteButton onClick={!isCarInFavorites  ? addFavorite : delFavorite} type="button">
                {!isCarInFavorites  ? <DisableFavoriteButton /> : <ActiveFavoriteButton />}
            </FavoriteButton>
            <CarImg src={car.img}/>
            <MainInfoBlock>
                <CarNameBlock>
                    <CarName>{car.make}</CarName>
                    <CarNameBlue>{carModelCut()}<span style={{ color: '#121417' }}>,</span></CarNameBlue>
                    <CarYear>{car.year}</CarYear>
                </CarNameBlock>
                <CarPrice>{car.rentalPrice}</CarPrice>
            </MainInfoBlock>
            <CarInfo>
                <CarInfoItem>{city}</CarInfoItem>
                <CarInfoItem>{country}</CarInfoItem>
                <CarInfoItem>{rentCut()}</CarInfoItem>
                <CarInfoItem>{car.type}</CarInfoItem>
                <CarInfoItem>{car.make}</CarInfoItem>
                <CarInfoItem>{car.mileage}</CarInfoItem>
                <CarInfoItem>{funcCut()}</CarInfoItem>
            </CarInfo>
            <CarButton onClick={toggleModal}>Learn more</CarButton>
            {isShowModal && (
                <Modal onClose={toggleModal}>
                <CarDetails car={car} city={city} country={country} />
        </Modal>
      )}
        </CarBlock>  
    )
}

export default CarCard;