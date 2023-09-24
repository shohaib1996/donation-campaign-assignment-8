import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const cards = useLoaderData();
    // console.log(cards)
    const {id} = useParams()
    // console.log(id);
    const card = cards.find(card => card.id === id*1)
    const { image, background_color, category, title, text_color } = card;

    console.log(card)
    
    return (
        <div>
            
        </div>
    );
};

export default CardDetails;