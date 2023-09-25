import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonatedCard = ({ card }) => {
    const { image, background_color, category, title, text_color, price, id } = card;
    const cardStyle = {
        backgroundColor: background_color,
    };
    const textColor = {
        color: text_color,
    };
    const btnBackgroundColor = {
        backgroundColor: text_color,
    };
    const categoryBackgroundColor = {
        backgroundColor: category.background_color,

    }
    return (
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={cardStyle}>
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={image}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6" style={textColor}>
                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased w-24 text-center rounded-md" style={categoryBackgroundColor}>
                    {category.name}
                </h6>
                <h4 className="mb-2 block font-sans text-2xl leading-snug tracking-normal text-blue-gray-900 antialiased text-black font-bold">
                    {title}
                </h4>
                <p>${price}</p>

                <a className="inline-block" href="#">
                    <Link to={`/cards/${id}`}>
                        <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  transition-all text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
                            type="button" style={btnBackgroundColor}
                        >
                            View Details
                        </button>
                    </Link>
                </a>
            </div>
        </div>


    );
};
DonatedCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default DonatedCard;