import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const cards = useLoaderData();
    // console.log(cards)
    const {id} = useParams()
    // console.log(id);
    const card = cards.find(card => card.id === id*1)
    
    console.log(card)
    
    return (
        <div>
            <h1>Card Details</h1>
        </div>
    );
};

export default CardDetails;