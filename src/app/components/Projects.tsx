export default function Projects() {
  return (
    <div className="w-4/5 mx-auto my-12">
      <h2 className="text-4xl font-bold text-[#3E5C76] mb-8">Projects</h2>
      <div className="flex flex-col gap-6">
        <div className="border-b border-[#F0EBD8] pb-6">
          <h3 className="text-2xl font-semibold text-[#3E5C76] mb-2">AI Support System for Call Operator</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              Full-stack web application with real-time speech processing (websocket) and LLMs for automatic
              transcription, content analysis, and key information extraction during emergency calls.
            </li>
          </ul>
        </div>
        <div className="border-b border-[#F0EBD8] pb-6">
          <h3 className="text-2xl font-semibold text-[#3E5C76] mb-2">Artificial Intelligence in the Routing Process in MANET Networks</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              Integration of the PSO (Particle Swarm Optimization) algorithm with a network routing protocol to
              enhance routing metric values, crucial for efficient packet delivery. Evaluated using sequential
              simulations in the NS3 simulator.
            </li>
          </ul>
        </div>
        <div className="border-b border-[#F0EBD8] pb-6">
          <h3 className="text-2xl font-semibold text-[#3E5C76] mb-2">Web application for shelters</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              Developed the mobile and web application as part of the Live IT projects in collaboration with company
              Accenture and our university.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
