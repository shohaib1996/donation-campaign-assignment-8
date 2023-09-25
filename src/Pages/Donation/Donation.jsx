import { useEffect, useState } from "react";
import DonatedCard from "../../components/DonatedCard/DonatedCard";

const Donation = () => {
    const [donationCards, setDonationCards] = useState([]);
   
    const [isShowAll, setIsShowAll] = useState(false)

    useEffect(() => {
        const donatedCard = JSON.parse(localStorage.getItem('donation'));
        setDonationCards(donatedCard);
    }, []);
    console.log(donationCards.length)

    return (
        <div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-screen-xl mx-auto">
                {
                   isShowAll ? donationCards.map(card => <DonatedCard key={card.id} card={card}></DonatedCard>) :
                   donationCards.slice(0, 4).map(card => <DonatedCard key={card.id} card={card}></DonatedCard>)
                }

            </div>
            <div className="mt-6 flex items-center justify-center mb-12">
                {donationCards.length > 4 && (
                    <button onClick={() => setIsShowAll(!isShowAll)} className={isShowAll ? 'hidden' : 'btn btn-secondary text-white font-bold'}>Show All</button>
                )}


            </div>
        </div>
    );
};

export default Donation;

