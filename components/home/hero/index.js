export default function Hero({ name }) {
    return (
     <div className="grid grid-col-2 gap-0 py-0">
     <div className="grid grid-rows-2 gap-0 ax-w-lg ">
     <div className=" w-full text-7xl text-left pt-40 pl-24 content-center">
        <div className="font-bold text-violet-600 py-5 border-2 max-w-3xl px-10 py-10 border-violet-500 rounded-tr-3xl bg-zinc-700">
        {name}
        <div className="text-3xl text-violet-300 pl-2 pt-5 mb-0 ">Software Engineer</div>
        </div>
        <div className="">
          <button type="button" className="text-base max-w-md mt-4 p-4 bg-violet-500 text-neutral-100 hover:bg-violet-400 hover:text-gray-800 rounded-md text-center font-mono"> Click here!</button>
        </div>
        </div>
        </div>
        </div>

    )
  }