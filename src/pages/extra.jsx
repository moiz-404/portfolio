// {/* Experience Timeline Section */}
// <div className="max-w-7xl mx-auto px-6">
// <h2 className="text-3xl sm:text-4xl font-semibold text-secondary mb-8">
//   My Experience
// </h2>
// <div className="container mx-auto px-4 py-8">
//   <div className="relative wrap overflow-hidden">
//     {/* Timeline Line */}
//     <div className="absolute border-l-2 border-opacity-20 border-neutral left-5 h-full transform -translate-x-1/2"></div>

//     {/* Work Items */}
//     {list.map((job, index) => (
//       <div
//         key={index}
//         className={`mb-10 flex ${
//           index % 2 === 0 ? 'justify-start' : 'justify-end'
//         } items-center w-full`}
//       >
//         <div
//           className={`order-1 w-5/12 ${index % 2 !== 0 && 'hidden'}`}
//         ></div>
//         <div className="relative z-20 size-10 order bg-blue-500 text-primary rounded-full flex items-center shadow-lg justify-center">
//           <span className="font-bold text-lg">{index + 1}</span>
//         </div>
//         <div className="ml-8 flex-1">
//           <div className="bg-primary shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
//             <h3 className="text-xl font-semibold text-secondary">
//               {job.company}
//             </h3>
//             <p className="text-lg text-neutralDark mt-2 mx-auto">
//               {job.date}
//             </p>
//             <p className="text-neutralDark mt-2 mx-auto">
//               {job.description}
//             </p>
//           </div>
//         </div>
//         <div
//           className={`order-1 w-5/12 ${index % 2 === 0 && 'hidden'}`}
//         ></div>
//       </div>
//     ))}
//   </div>
// </div>
// </div>
