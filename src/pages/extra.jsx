Colors:
Primary Colors:

Purple: text-purple-800 (for main heading)
Blue: text-blue-500 (for highlighted "My Portfolio" text)
Gray:
Light gray: bg-gray-50 (for background color)
Dark gray: text-gray-700 (for the paragraph text)
Darker gray: text-gray-900 (for section titles)
Light gray: border-gray-200 (for the timeline line)
Light gray: text-gray-600 (for company descriptions)
Secondary Colors:

White: bg-white, text-white (for background and text of elements like timeline items)
Blue: bg-blue-500 (for timeline item circle background)
Fonts:
Font Family:

The default font used is font-sans, which is the standard sans-serif font in Tailwind CSS.
Font Sizes:

Main Heading: text-4xl sm:text-5xl
Subheading (Experience section): text-3xl sm:text-4xl
Paragraph text: text-lg
Timeline Item Titles: text-xl
Timeline Item Numbers: font-bold text-lg






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