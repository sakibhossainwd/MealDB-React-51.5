// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'

const Header = ({meals, setMeals, letter, setLetter}) => {
    const handleSearch = ev => {
        ev.preventDefault();
        const form = ev.target;
        const searchTxt = form.search.value;
        console.log("Searched txt==========> ", searchTxt)
        const filteredMeals = meals.filter(item=>item.strMeal.toLowerCase().includes(searchTxt.toLowerCase()));
        // console.log('filtered=======> ', filteredMeals)
        setMeals(filteredMeals)
    }

    const handleSearchByLetter = ev => {
        ev.preventDefault();
        const form = ev.target;
        const searchTxt = form.search.value;
        console.log("Searched txt==========> ", searchTxt)
        setLetter(searchTxt)
        
    }
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <h2>MEAL-DB</h2>
                </div>
                <div className="input">
                    <form action="" onSubmit={handleSearch}>
                        <input type="text" name="search" placeholder='search your food' />
                        <button>Search</button>
                    </form>

                    <form action="" onSubmit={handleSearchByLetter}>
                        <input type="text" name="search" placeholder='search your food' />
                        <button>Search By Letter</button>
                    </form>
                </div>
                <div className="info">
                    <a href="#">Home</a>
                    <a href="#">Our Meal</a>
                    <a href="#">Offers</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;