import { useLoaderData } from "react-router-dom";
import DonationCards from "../../components/DonationCards/DonationCards";
import { useRef, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";
import swal from 'sweetalert';

const Home = () => {
    const inputRef = useRef()
    const [searchValue, setSearchValue] = useState('')
    const [isSearch, setIsSearch] = useState(false)
    
   

    const handleSearch = (e) => {
        e.preventDefault()
        const search = (inputRef.current.value).toLowerCase()
        setSearchValue(search)

        inputRef.current.value = '';
        console.log(search);
        setIsSearch(true)
       
    }


    const cards = useLoaderData();
    



    return (
        <div className="">
            <div className="flex flex-col items-center justify-center">
                <h1 className=" font-extrabold text-center text-3xl md:text-5xl mt-24 mb-8">I Grow By Helping People In Need</h1>
                <div className="form-control">
                    <div className="input-group mb-40">
                        <input ref={inputRef} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-secondary font-bold text-white bg-[#FF444A]">
                            Search
                        </button>
                    </div>
                </div>

                <div className={isSearch ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-12 gap-5 max-w-screen-xl mx-auto p-5 lg:p-0" : ""}>
                {isSearch ? (
                        (() => {
                            const searchCards = cards.filter(card => card.category.name.toLowerCase() === searchValue);
                            if (searchCards.length === 0) {
                                return swal("Oops!", `No match Found check your spelling and Click on 'TAKE ME THERE!'`, "error");
                            }
                            return searchCards.map((card) => (
                                <div key={card.id}>
                                   <DonationCard card={card}></DonationCard>
                                </div>
                            ));
                        })()
                    ) : (
                        <DonationCards></DonationCards>
                    )}
                </div>



            </div>

        </div>
    );
};

export default Home;