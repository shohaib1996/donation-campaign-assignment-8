import DonationCards from "../../components/DonationCards/DonationCards";

const Home = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center">
                <h1 className=" font-extrabold text-center text-3xl md:text-5xl mt-24 mb-8">I Grow By Helping People In Need</h1>
                <div className="form-control">
                    <div className="input-group mb-40">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-secondary font-bold text-white bg-[#FF444A]">
                            Search
                        </button>
                    </div>
                </div>
                <DonationCards></DonationCards>
            </div>
            
        </div>
    );
};

export default Home;