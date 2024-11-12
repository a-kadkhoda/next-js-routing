

const Card = ({ title, category, price, rating, image }) => {

  return (
    <>
      <svg className="hidden">
        <symbol
          id="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </symbol>
        <symbol
          id="heart"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </symbol>
      </svg>

      <div className="flex flex-col bg-white w-60 h-80 shadow border hover:border-orange-400 hover:shadow-orange-400 rounded-md overflow-hidden">
        <div className="relative w-full h-1/2 border flex justify-center items-center">
          <img className="h-full p-2" src={image} alt="" />
        </div>
        <div className="flex flex-col p-5">
          <span className="font-bold text-sm line-clamp-1">{title}</span>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm text-zinc-600">
              {category}
            </span>
            <div className="flex justify-center items-center gap-x-1 text-yellow-400">
              <svg className="w-4 h-4">
                <use href="#star" />
              </svg>
              <span className="font-medium text-black text-xs">{rating.rate}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <span>${price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
