import ItemsContainner from "../components/ItemsContainner/ItemsContainner";

import AtomicHabits from '../assests/Books/AtomicHabits.png' 
import LifeAmazingSecrets from '../assests/Books/LifeAmazingSecrets.jpg' 
import ManSearchForMeaning from '../assests/Books/ManSearchForMeaning.jpg' 
import MilkAndHoney from '../assests/Books/MilkAndHoney.jpg' 
import thealchemist from '../assests/Books/the-alchemist.jpg' 
import thepsychologyofmoney from '../assests/Books/the-psychology-of-money.jpg' 
import thesubtleartofnotgivingafuck from '../assests/Books/the-subtle-art-of-not-not giving-a-fuck.jpg' 
import TheLordOfTheRing from '../assests/Books/TheLordOfTheRing.jpg' 
import ThePowerOfHabits from '../assests/Books/ThePowerOfHabits.jpg' 


function Books() {

    const BooksLists = [
        {
            id: "b01",
            img: AtomicHabits,
            title: "Atmoic Habits",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed ab impedit!",
            price: 150
        },
        {
            id: "b02",
            img : LifeAmazingSecrets,
            title: "Life's Amazing Secrets",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed ab impedit!",
            price: 225
        },
        {
            id: "b03",
            img : ManSearchForMeaning,
            title: "Man Search For Meaning",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed ab impedit!",
            price: 175
        },
        {
            id: "b04",
            img: MilkAndHoney,
            title: "Milk and Honey",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed ab impedit!",
            price: 220
        },
        {
            id: "b05",
            img: thealchemist,
            title: "The Alchemist",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed ab impedit!",
            price: 180
        },
        {
            id: "b06",
            img: thepsychologyofmoney,
            title: "The Psychology Of Money",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed ab impedit!",
            price: 195
        },
        {
            id: "b07",
            img: thesubtleartofnotgivingafuck,
            title: "The Subtle Art of not giving a f",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed ab impedit!",
            price: 240
        },
        {
            id: "b08",
            img: TheLordOfTheRing,
            title: "The Lord of The Rings",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed ab impedit!",
            price: 250
        },
        {
            id: "b09",
            img: ThePowerOfHabits,
            title: "The Power of Habits",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed ab impedit!",
            price: 180
        }
    ]


    return (
        <ItemsContainner
            items={ BooksLists }
        />    
    )
}

export default Books;