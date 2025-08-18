

import React from 'react';
import './TimelineCard.css';

import { motion } from "framer-motion";


const TimelineSection = () => {
  const events = [
    {
      time: "09:00 AM",
      title: "Registration & Check-in",
      desc: "Welcome breakfast and team formation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      time: "10:30 AM",
      title: "Opening Ceremony",
      desc: "Keynote speakers and challenge reveal",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      time: "12:00 PM",
      title: "Hacking Begins",
      desc: "Let the coding marathon commence!",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6m0 0l-6-6m6 6H8"/>
        </svg>
      )
    },
    {
      time: "06:00 PM",
      title: "Dinner Break",
      desc: "Fuel up for the night shift",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM12 14v6m-6-6v6m12-6v6"/>
        </svg>
      )
    },
    {
      time: "12:00 AM",
      title: "Midnight Snacks",
      desc: "Energy boost for night owls",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 00-6.32 17.94l-1.38 1.38a1 1 0 001.41 1.41l1.38-1.38A10 10 0 1012 2z"/>
        </svg>
      )
    },
    {
      time: "08:00 AM",
      title: "Final Sprint",
      desc: "Last 4 hours to polish your project",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 8 4-16 3 8h4"/>
        </svg>
      )
    },
    {
      time: "12:00 PM",
      title: "Submission Deadline",
      desc: "Time's up! Submit your masterpiece",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4m5-2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h7"/>
        </svg>
      )
    },
    {
      time: "02:00 PM",
      title: "Presentations",
      desc: "Showcase your innovation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h8l4 4v10a2 2 0 01-2 2z"/>
        </svg>
      )
    },
    {
      time: "04:00 PM",
      title: "Awards Ceremony",
      desc: "Celebrate the winners!",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.382V6a2 2 0 012-2h14a2 2 0 012 2v9.382a2 2 0 01-1.553 1.894L15 20l-6 0z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            EVENT TIMELINE
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            24 hours of pure innovation and creativity
          </p>
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className={`flex flex-col sm:flex-row items-center sm:items-start 
    ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} 
    relative`}
>


  

                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'}`}>
                  <div className="parent">
                    <div className="card bg-gray-900/50 border border-purple-500/20 hover:border-pink-500/50">
                      <div className={`corner-ripple ${index % 2 === 0 ? 'left-corner' : 'right-corner'}`}>
                        <span></span>
                      </div>
                      <div className="glass"></div>

                      <div className="content p-6">
                        <div className="icon-wrapper mb-3">
                          <div className="timeline-icon w-8 h-8 sm:w-10 sm:h-10 text-pink-500">{event.icon}</div>
                        </div>
                        <div className="text-lg sm:text-2xl font-bold text-pink-500 mb-2">{event.time}</div>
                        <h3 className="text-base sm:text-xl font-semibold text-white mb-2">{event.title}</h3>
                        <p className="text-sm sm:text-base text-gray-400">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-black animate-pulse"></div>
              </motion.div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;



