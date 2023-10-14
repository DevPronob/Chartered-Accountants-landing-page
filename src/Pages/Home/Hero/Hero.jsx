import React, { useEffect, useState } from "react";
import "./Hero.css";
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";
const Hero = () => {
  const [search, setonSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://chartered-accountants-landing-page-server-7xsokjyrx-devpronob.vercel.app/api/accountant");

        if (response.ok) {
          const result = await response.json();

          // Filter the data based on the search query
        //   const search = search.toLowerCase(); // Ensure search is in lowercase

        if (!search) {
            setSuggestions([]);
            return []; // Return an empty array if the search term is empty
          }
          
          const filteredData = result.filter(accountant =>
            accountant.name.toLowerCase().includes(search.toLowerCase())
          );
          
          // Check if filteredData is empty, and return an empty array if so
          if (filteredData.length === 0) {
            setSuggestions([]);
          } else {
            setSuggestions(filteredData);
          }
          // Update the suggestions state with the filtered data
          
        } else {
          console.error("Network response was not ok");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [search]); // Re-run the effect when the search input changes

  console.log(suggestions, "kcckck");

  console.log(search, "from hero");
  return (
    <div className="section">
      <div class="w-screen hero__container">
        <div class="lg:min-h-[38rem] mx-auto flex pt-[108px] max-w-screen-xl flex-col space-y-6 overflow-hidden px-6 pb-16 lg:flex-row lg:items-center">
          <div class="w-full lg:w-1/2">
            <div class="mt-10 lg:max-w-lg">
              {/* <p class="mb-4">— &nbsp&nbsp Creative Design</p> */}
              <h1 class="font-[900] hero__heading1 lg:text-5xl lg:leading-snug">
                Find <span className="highlight__text">Partners</span> (CAs)
                available online
              </h1>

              <div class="mt-8 ">
                {" "}
                <span className="font-bold">CONNECT</span> with us where your
                services are listed and visible to a myriad of businesses
                seeking CA’s for compliance support
              </div>
            </div>

            <div class="mt-8 w-full rounded-md bg-transparent lg:max-w-md">
              <SearchBar setonSearch={setonSearch}></SearchBar>
              <SearchSuggestions suggestions={suggestions}></SearchSuggestions>
              
              <div>
                <ul>

                </ul>
              </div>
            </div>
          </div>

          <div class="relative hidden h-full w-full items-center justify-center lg:flex lg:w-1/2">
            <div class="flex z-10 gap-5">
              <img
                class="w-[350px] mt-[40px]"
                src="https://i.ibb.co/P9qY4dy/Picture-2.png"
                alt="Simon Lewis"
              />
              <img
                class="w-[350px] mt-[-35px]"
                src="https://i.ibb.co/Psp0dkj/Picture-1.png"
                alt="Simon Lewis"
              />
              <img
                class="w-[350px] mt-[-5px]"
                src="https://i.ibb.co/zfdwZM2/Picture.png"
                alt="Simon Lewis"
              />
            </div>

            {/* <img class="-scale-x-100 mt-auto ml-auto h-4/6 object-cover lg:max-w-2xl" src="/images/Rmq5nOvVkRXcJ4l-MnTfN.png" alt="glasses photo" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
