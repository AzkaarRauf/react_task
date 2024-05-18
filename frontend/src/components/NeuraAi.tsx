export default function NeuraAi() {
  return (
    <>
      <div>
        <h2 className="card-title px-4 justify-between">
          Neura AI
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm">
              Expert Mode
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Expert Mode</a>
              </li>
              <li>
                <a>Beginner Mode</a>
              </li>
            </ul>
          </div>
        </h2>
        {/* CAROUSEL */}
        <div>
          <div className="carousel carousel-center p-4 space-x-4 rounded-box">
            {/* CARD */}
            <div className="carousel-item h-full ">
              <div className="card bg-green-100 h-56 w-96">
                <div className="card-body">
                  <h2 className="card-title">Trade Execution</h2>
                  <p>
                    Automate trades based on user- defined criteria, using Al
                    algorithms to time trades optimally.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item h-full">
              <div className="card bg-purple-100 h-56 ">
                <div className="card-body">
                  <h2 className="card-title">Real-Time Alerts</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CHAT */}
        <div className="w-full flex justify-center">
          <div className="join w-full px-4">
            <input
              className="input input-bordered join-item w-full rounded-full"
              placeholder="Ask AI anything..."
            />

            <button className="btn  join-item rounded-r-full">
              <img
                src="https://www.svgrepo.com/download/533610/arrow-right.svg"
                alt="send-button"
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
