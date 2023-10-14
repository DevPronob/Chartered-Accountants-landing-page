import React from 'react';
import './Services.css'
const Services = () => {
    const service =[
        {
            id:"1",
            name:"Commencement of business ",
            dec:"Invested shareholders must confirm payment and office address ",
            Duedate:"Within 180 days",
            fees:"₹50,000",
            Penaltyfees1:" for the company",
            Penaltyfees2:"₹1,000 /day for directors",
        },
        {
            id:"2",
            name:"Auditor Appointment",
            dec:"Company informs new auditor and submits ADT.1 form to ROC.",
            Duedate:"Within 30 days ",
            fees:"₹300",
            Penaltyfees1:" per month.",
            Penaltyfees2:"",
        },
        {
            id:"3",
            name:"DIN eKYC",
            dec:"Directors share personal information for identification & verification ",
            Duedate:"Every Year",
            fees:"₹5000",
            Penaltyfees1:" one time",
            Penaltyfees2:"",
        },
        {
            id:"4",
            name:"DPT-3",
            dec:"Companies report money taken from people to ROC; auditors confirm details.",
            Duedate:"Within 30 days ",
            fees:"₹300",
            Penaltyfees1:" per month.",
            Penaltyfees2:"",
        },
        {
            id:"5",
            name:"MCA Form AOC-4",
            dec:"It's like an official report card for a company's documents",
            fees:"₹200",
            Duedate:"On or Before 30th November ",
            Penaltyfees1:" per day (No upper limit)*",
            Penaltyfees2:"",
        },
        {
            id:"6",
            name:"MCA Form MGT-7",
            dec:"Companies must annually report activities and finances to the registrar.",
            fees:"₹200",
            Duedate:"On or Before 31st December",
            Penaltyfees1:" per day (No upper limit)* ",
            Penaltyfees2:"",
        },
    ]
    return (
        <div className='pt-16 services__container'>
            <h2 className='services__heading'>Want to  <span className='highlight__text'>Join</span> Us?</h2>
            <p>To remain with us, it is essential that you diligently follow the steps provided</p>
           <div className='services__main'>
           <div class="grid grid-cols-3 gap-x-16 gap-y-12 px-4 py-20 lg:px-20">
 {
    service.map(items =>{
        return  <div class="flex w-[400px]">
        <div class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
          <div class="p-3">
            <div class="absolute -mt-[12px] -ml-[12px] h-12 w-16 rounded-xl bg-gradient-outline text-center text-white shadow-lg">
              <h4 className='text-white mt-3 font-bold'>{items.id}<sup>st</sup></h4>
            </div>
            <div class="pt-3 text-right card">
             
              <h4 class="">{items.name}</h4>
              <p class="">{items.dec}</p>
            </div>
          </div>
          <div class="p-4 card__inner">
           <div className='grid grid-cols-2'>
            <div className='card-inf1'>
                <h5>Due date</h5>
                <p>{items.Duedate}</p>
            </div>
            <div className='card-inf2'>
            <h5 className='text-red-500 font-bold'>Penalty fees</h5>
            <p className='ms-[-29px]'><span className='font-bold'>{items.fees}</span>{items.Penaltyfees1}</p>
            <p className='ms-[-29px]'>{items.Penaltyfees2}</p>
            </div>
           </div>
          </div>
        </div>
      </div>
    })
 }

</div>

           </div>
        </div>
    );
}

export default Services;
