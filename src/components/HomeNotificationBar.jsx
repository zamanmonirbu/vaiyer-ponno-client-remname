

const HomeNotificationBar = () => {
    return (
        <div className="relative h-10 w-full bg-blue-500 overflow-hidden">
            <div className="absolute whitespace-nowrap animate-marquee text-white">
                <span className="mr-8">This is a notification message! </span>
                <span className="mr-8">Another notification text here! </span>
                <span className="mr-8">Do miss out on our updates! </span>
            </div>
        </div>
    );
};

export default HomeNotificationBar;
