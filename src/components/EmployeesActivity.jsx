
const Card = () => {
  const cardData = [
    {
      id: 1,
      bgColor: "#F4F8FC",
      borderColor: "border-blue-500",
      image:
        "https://images.pexels.com/photos/29647355/pexels-photo-29647355/free-photo-of-young-barista-in-coffee-shop-work-environment.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Abhinav Kumar",
      level: 25,
      status: "Active",
      direct: 3,
      teams: 6,
      total: 9,
      borderStyle: "borderRight",
    },
    {
      id: 2,
      bgColor: "#FFF7E5",
      borderColor: "border-[#FDC748]",
      image:
        "https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ethel Weber",
      level: 25,
      status: "Active",
      direct: 1,
      teams: 1,
      total: 1,
      borderStyle: "borderTop",
    },
    {
      id: 3,
      bgColor: "#F4F8FC",
      borderColor: "border-blue-500",
      image:
        "https://images.pexels.com/photos/29647355/pexels-photo-29647355/free-photo-of-young-barista-in-coffee-shop-work-environment.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Abhinav Kumar",
      level: 25,
      status: "Active",
      direct: 2,
      teams: 5,
      total: 7,
      borderStyle: "borderRight",
    },
    {
      id: 4,
      bgColor: "#FFF7E5",
      borderColor: "border-[#FDC748]",
      image:
        "https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ethel Weber",
      level: 25,
      status: "Active",
      direct: 1,
      teams: 10,
      total: 11,
      borderStyle: "borderTop",
    },
    {
      id: 1,
      bgColor: "#F4F8FC",
      borderColor: "border-blue-500",
      image:
        "https://images.pexels.com/photos/29647355/pexels-photo-29647355/free-photo-of-young-barista-in-coffee-shop-work-environment.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Abhinav Kumar",
      level: 25,
      status: "Active",
      direct: 3,
      teams: 6,
      total: 9,
      borderStyle: "borderRight",
    },
    {
      id: 2,
      bgColor: "#FFF7E5",
      borderColor: "border-[#FDC748]",
      image:
        "https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ethel Weber",
      level: 25,
      status: "Active",
      direct: 1,
      teams: 1,
      total: 1,
      borderStyle: "borderTop",
    },
    {
      id: 3,
      bgColor: "#F4F8FC",
      borderColor: "border-blue-500",
      image:
        "https://images.pexels.com/photos/29647355/pexels-photo-29647355/free-photo-of-young-barista-in-coffee-shop-work-environment.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Abhinav Kumar",
      level: 25,
      status: "Active",
      direct: 2,
      teams: 5,
      total: 7,
      borderStyle: "borderRight",
    },
    {
      id: 4,
      bgColor: "#FFF7E5",
      borderColor: "border-[#FDC748]",
      image:
        "https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ethel Weber",
      level: 25,
      status: "Active",
      direct: 1,
      teams: 10,
      total: 11,
      borderStyle: "borderTop",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center items-start max-w-[1280px] m-auto">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="bg-white w-full sm:w-[48%] md:w-[30%] lg:w-[23%] border drop-shadow-md p-4 rounded-xl"
        >
          <div
            className={`rounded-2xl h-64 flex flex-col items-center justify-evenly p-8`}
            style={{ backgroundColor: card.bgColor }}
          >
            <span
              className={`w-20 h-20 rounded-full border-4 ${card.borderColor} flex justify-center items-center`}
              style={{
                [card.borderStyle]: "4px solid lightgray", // Dynamically add specific border styles
              }}
            >
              <img
                src={card.image}
                alt="user"
                className="w-16 h-16 rounded-full"
              />
            </span>

            <p className="font-semibold">{card.name}</p>
            <p>Level: {card.level}</p>
            <button
              style={{ paddingBottom: "1px" }}
              className="border border-1 border-gray-500 text-gray-500 text-sm px-2 rounded-md"
            >
              {card.status}
            </button>
          </div>
          <div className="direct-teams flex justify-evenly items-center w-full mt-5">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{card.direct}</span>
              <span>Direct</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{card.teams}</span>
              <span>Teams</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{card.total}</span>
              <span>Total</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
