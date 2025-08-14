export default function Projects() {
  return (
      <div className="w-4/5 mx-auto my-12 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#3E5C76] mb-8 text-center">Projects</h2>
        <div className="flex flex-col gap-6 items-center">

          {/* AI Support System */}
          <div className="flex flex-col items-center gap-5 border-b border-[#F0EBD8] pb-6 w-full sm:w-4/5 md:w-full lg:w-2/4 bg-blue-400 p-6 sm:p-9 rounded-3xl transition-transform transform hover:scale-95 cursor-pointer" >
            <h3 className="text-2xl font-bold text-black mb-2 text-center">AI Support System for Call Operator</h3>
            <div className="text-white px-4 sm:px-6">
              <p className="text-center font-semibold">
                Full-stack web application with real-time speech processing (websocket) and LLMs for automatic
                transcription, content analysis, and key information extraction during emergency calls.
              </p>
            </div>
            <p className="font-semibold text-[#3E5C76] mb-2 mt-4">Technologies used:</p>
            <div className="flex flex-wrap items-center gap-4">
              <img src="/images/react.png" alt="React" className="w-10 h-8" />
              <img src="/images/typescript.png" alt="TypeScript" className="w-8 h-8" />
              <img src="/images/node.png" alt="Node.js" className="w-12 h-8" />
              <img src="/images/socketio.png" alt="Socket.io" className="w-8 h-8" />
              <img src="/images/mongodb.png" alt="MongoDB" className="w-8 h-8" />
              <img src="/images/express1.png" alt="Express.js" className="w-10 h-8" />
            </div>
          </div>

          {/* MANET Project */}
          <div className="flex flex-col items-center gap-5 border-b border-[#F0EBD8] pb-6 w-full sm:w-4/5 md:w-full lg:w-2/4 bg-green-200 p-6 sm:p-9 rounded-3xl transition-transform transform hover:scale-95 cursor-pointer">
            <h3 className="text-2xl font-bold text-green-700 mb-2 text-center">
              Artificial Intelligence in the Routing Process in MANET Networks
            </h3>
            <div className="text-white px-4 sm:px-6">
              <p className="text-center font-semibold text-black">
                Integration of the PSO (Particle Swarm Optimization) algorithm with a network routing protocol AODV to
                enhance routing metric values, crucial for efficient packet delivery. Evaluated using sequential
                simulations in the NS3 simulator.
              </p>
            </div>
            <p className="font-semibold text-[#3E5C76] mb-2 mt-4">Technologies used:</p>
            <div className="flex flex-wrap items-center gap-4">
              <img src="/images/python1.png" alt="Python" className="w-10 h-8" />
              <img src="/images/ns3sim.png" alt="NS3 Simulator" className="w-14 h-10" />
            </div>
          </div>

          {/* Web application for shelters */}
          <div className="flex flex-col items-center gap-5 border-b border-[#F0EBD8] pb-6 w-full sm:w-4/5 md:w-full lg:w-2/4 bg-[#A3C9E7] p-6 sm:p-9 rounded-3xl transition-transform transform hover:scale-95 cursor-pointer">
            <h3 className="text-2xl font-bold text- mb-2 text-center">Web application for shelters</h3>
            <div className="text-white px-4 sm:px-6">
              <p className="text-center font-semibold">
                Developed full-stack web application as part of the Live IT projects in collaboration with company
                Accenture and our university.
              </p>
            </div>
            <p className="font-semibold text-[#3E5C76] mb-2 mt-4">Technologies used:</p>
            <div className="flex flex-wrap items-center gap-4">
              <img src="/images/react.png" alt="React" className="w-10 h-8" />
              <img src="/images/javascript.png" alt="JavaScript" className="w-17 h-8" />
              <img src="/images/node.png" alt="Node.js" className="w-12 h-8" />
            </div>
          </div>

          {/* Portfolio Dentist */}
          <div className="flex flex-col items-center gap-5 border-b border-[#F0EBD8] pb-6 w-full sm:w-4/5 md:w-full lg:w-2/4 bg-[#6F93C1] p-6 sm:p-9 rounded-3xl transition-transform transform hover:scale-95 cursor-pointer">
            <h3 className="text-2xl font-bold text- mb-2 text-center">Portfolio for the dentist</h3>
            <div className="text-white px-4 sm:px-6">
              <p className="text-center font-semibold">
                Developed a responsive website for a dental clinic, including a reservation form that allows patients to book appointments online.
              </p>
            </div>
            <p className="font-semibold text-[#3E5C76] mb-2 mt-4">Technologies used:</p>
            <div className="flex flex-wrap items-center gap-4">
              <img src="/images/react.png" alt="React" className="w-10 h-8" />
              <img src="/images/typescript.png" alt="TypeScript" className="w-8 h-8" />
              <img src="/images/node.png" alt="Node.js" className="w-12 h-8" />
            </div>
          </div>

        </div>
      </div>
  );
}
