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
            price: 150
        },
        {
            id: "b02",
            img : LifeAmazingSecrets,
            title: "Life's Amazing Secrets",
            price: 225
        },
        {
            id: "b03",
            img : ManSearchForMeaning,
            title: "Man Search For Meaning",
            price: 175
        },
        {
            id: "b04",
            img: MilkAndHoney,
            title: "Milk and Honey",
            price: 220
        },
        {
            id: "b05",
            img: thealchemist,
            title: "The Alchemist",
            price: 180
        },
        {
            id: "b06",
            img: thepsychologyofmoney,
            title: "The Psychology Of Money",
            price: 195
        },
        {
            id: "b07",
            img: thesubtleartofnotgivingafuck,
            title: "The Subtle Art of not giving a f",
            price: 240
        },
        {
            id: "b08",
            img: TheLordOfTheRing,
            title: "The Lord of The Rings",
            price: 250
        },
        {
            id: "b09",
            img: ThePowerOfHabits,
            title: "The Power of Habits",
            price: 180
        }
    ]


    return (
        <ItemsContainner
            items={BooksLists}
        />
    )
}

export default Books;