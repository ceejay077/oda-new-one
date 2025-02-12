// "use client";
// import React, { useState } from "react";

// export default function Form() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     service: "",
//     frequency: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="my-10">
//       <h1 className="text-3xl mx-5 py-4">Get in touch with us</h1>
//       <img src="images/homePage/world-map.png" alt="World Map" />
//       <div className="m-4">
//         <p className="text-titleDescription">
//           Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//           vulputate libero et velit interdum, ac aliquet odio mattis.
//         </p>
//       </div>
//       <div className="m-4">
//         <p className="text-titleDescription">Address</p>
//         <p>1901 Thornridge Cir. Shiloh, Australia 81063</p>
//       </div>
//       <div className="m-4 flex justify-between mt-5">
//         <div className="flex flex-col">
//           <p className="text-titleDescription">Email</p>
//           <p>support@oda.com</p>
//         </div>
//         <div className="flex flex-col mr-3">
//           <p className="text-titleDescription">Phone</p>
//           <p>+6017-4077944</p>
//         </div>
//       </div>
//       <div className="m-6">
//         <form className="w-full max-w-sm">
//           <div className="md:flex md:items-center mb-6">
//             <div className="md:w-2/3">
//               <input
//                 className="bg-gray-200 border-2 rounded w-full py-2 px-4"
//                 name="fullName"
//                 type="text"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="md:flex md:items-center mb-6">
//             <div className="md:w-2/3">
//               <input
//                 className="bg-gray-200 border-2 rounded w-full py-2 px-4"
//                 name="email"
//                 type="email"
//                 placeholder="Company Email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="md:w-2/3">
//             <input
//               className="bg-gray-200 border-2 rounded w-full py-2 px-4"
//               name="phone"
//               type="text"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="md:w-2/3 mt-6">
//             <input
//               className="bg-gray-200 border-2 rounded w-full py-2 px-4"
//               name="service"
//               type="text"
//               placeholder="Service Required"
//               value={formData.service}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="md:w-2/3 mt-6">
//             <input
//               className="bg-gray-200 border-2 rounded w-full py-2 px-4"
//               name="frequency"
//               type="text"
//               placeholder="Frequency"
//               value={formData.frequency}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="md:w-2/3 mt-6">
//             <textarea
//               className="bg-gray-200 w-full h-20 border-2 rounded p-2"
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="md:flex md:items-center mt-6">
//             <div className="md:w-2/3">
//               <button
//                 className="shadow bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded"
//                 type="submit"
//               >
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
