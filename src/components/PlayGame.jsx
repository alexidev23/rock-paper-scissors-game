import { buttonsGame } from "../constants/buttons";

export function PlayGame({ buttonSelected }) {
  const button = buttonsGame.find(button => button.id === buttonSelected);
  console.log(button);

  return (
    <div className="flex w-[700px] m-auto py-10 justify-around text-white uppercase">
      <div className="text-center px-4 pb-8">
        <h2 className="mb-11">You Picked</h2>
        {button && (
          <div key={button.id} className={`w-56 h-56 rounded-full flex items-center justify-center ${button.background}`}>
            <div className='bg-white w-44 h-44 rounded-full flex items-center justify-center'>
              <img 
                src={`/${button.image}`}
                alt={button.name}
                width={80}
              />
            </div>
          </div>
        )}
      </div>
      <div className="px-4 pb-8 text-center flex flex-col items-center justify-center">
        <h2 className="mb-11">The House Picked</h2>
        <button className='w-56 h-56 rounded-full flex items-center justify-center'>
          <div className="bg-[#0d1f3a5e] w-44 h-44 rounded-full"></div>
        </button>
      </div>
    </div>
  );
}
