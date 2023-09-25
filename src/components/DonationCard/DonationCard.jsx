import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ card }) => {
    // console.log(card)
    const { image, background_color, category, title, text_color, id } = card;

    const cardStyle = {
        backgroundColor: background_color,
    };
    const textColor = {
        color: text_color,
    }
    const categoryBackgroundColor = {
        backgroundColor: category.background_color,

    }

    return (
        <Link to={`/cards/${id}`}>
            <div className="card card-compact shadow-xl" style={cardStyle}>
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body h-[125px]" style={textColor}>
                    <h2 className="text-base w-24 text-center font-bold px-2 rounded-lg py-1" style={categoryBackgroundColor}>{category.name}</h2>
                    <p className='font-bold text-xl'>{title}</p>
                </div>
            </div>
        </Link>
    );

};
DonationCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default DonationCard;