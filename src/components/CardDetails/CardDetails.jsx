import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const CardDetails = () => {
    const cards = useLoaderData();
    // console.log(cards)
    const { id } = useParams()
    // console.log(id);
    const card = cards.find(card => card.id === id * 1)
    const { image, title, text_color, description, price } = card;
    const backgroundColor = {
        backgroundColor: text_color,
    };

    // console.log(card)
    const handleDonate = () => {
        const getStoredDonate = JSON.parse(localStorage.getItem('donation')) || [];
        const isExit = getStoredDonate.find(card => card.id === id * 1)
        if(!isExit){
            getStoredDonate.push(card)
            localStorage.setItem('donation', JSON.stringify(getStoredDonate))
            return swal("Good Job!", "Donation Done!", "success");
        }else{
            return swal("Oops!", "You Have already Donate this Item!", "error");
        }
    }

    return (
        <div className="max-w-screen-xl mx-auto mt-12 mb-12">
            <div>
                <div className="hero h-[80vh] relative " style={{ backgroundImage: `url(${image})`,backgroundSize: 'cover',backgroundPosition: 'center' }}>
                    <div className="hero-overlay bg-opacity-60 absolute top-[75%] h-[25%] inset-0"></div>


                    <button onClick={handleDonate} className="btn absolute top-[80%] right-[85%] text-white font-bold outline-none border-none" style={backgroundColor}>Donate ${price}</button>

                </div>
            </div>
            <h1 className="text-3xl font-bold text-black mb-6 mt-20">{title}</h1>
            <p className="text-justify text-black">{description}</p>
        </div>

    );
};

export default CardDetails;