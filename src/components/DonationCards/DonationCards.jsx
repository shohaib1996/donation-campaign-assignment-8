import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const DonationCards = () => {
    const [donationCards, setDonationCards] = useState([])

    useEffect(() => {
        fetch(`/data/data.json`)
            .then(res => res.json())
            .then(data => setDonationCards(data))
    }, [])
    // console.log(donationCards)
    return (
        <div className="mt-20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 max-w-screen-xl mx-auto p-5 lg:p-0">
                {
                    donationCards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }

            </div>
        </div>
    );
};

export default DonationCards;