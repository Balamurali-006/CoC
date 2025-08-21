

import React from 'react';
import './TimelineCard.css';

import { motion } from "framer-motion";


const TimelineSection = () => {
const events = [
  {
    time: "09:00 AM (26 Sep)",
    title: "Inauguration",
    desc: "Grand opening ceremony at Auditorium to kickstart AI Day & Code O' Clock",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    )
  },
  {
    time: "10:00 - 12:50 PM",
    title: "Tech Talks & Sessions",
    desc: "Tech Talk 1 (10:00-10:40), Break, Tech Talk 2 (11:10-12:00), Tech Talk 3 (12:00-12:50) at Auditorium",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    )
  },
  {
    time: "12:50 - 1:00 PM",
    title: "Vote of Thanks",
    desc: "Closing note for AI Day before hackathon kickoff",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
      </svg>
    )
  },
  {
    time: "1:00 - 1:55 PM",
    title: "Lunch & Assembly",
    desc: "Lunch for Code O' Clock participants followed by assembly in Auditorium",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    )
  },
  {
    time: "1:55 - 3:30 PM",
    title: "Hackathon Launch",
    desc: "Welcome address, rules & regulations, problem statement release, Q&A, and team finalization",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    )
  },
  {
    time: "3:30 - 5:20 PM",
    title: "Hacking Session 1",
    desc: "Teams start brainstorming and initial coding solutions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    )
  },
  {
    time: "5:20 - 7:00 PM",
    title: "Break & Session 2",
    desc: "Tea break (5:20-5:40) followed by continued working session",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    )
  },
  {
    time: "7:00 - 8:45 PM",
    title: "Cultural Evening",
    desc: "Dance program 'Rhythm X' at LBCH (7:00-8:00) followed by dinner (8:00-8:30)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
      </svg>
    )
  },
  {
    time: "8:45 - 10:00 PM",
    title: "Workshop 1",
    desc: "Hands-on workshop at LBCH, then teams return to coding halls",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
      </svg>
    )
  },
  {
    time: "10:00 PM - 12:30 AM",
    title: "Business Model & Fun",
    desc: "Business Model Canvas presentation (10:00-11:30 PM) followed by Fun Activity (11:30 PM-12:30 AM)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
      </svg>
    )
  },
  {
    time: "12:30 - 7:00 AM (27 Sep)",
    title: "Night Coding Sprint",
    desc: "Intensive coding session with Review 2 (2:30-3:30 AM) and continuous development until morning",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
      </svg>
    )
  },
  {
    time: "7:00 - 8:30 AM",
    title: "Breakfast & Workshop 2",
    desc: "Morning meal (7:00-7:45) followed by Pitching Workshop at LBCH (2 members per team required)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h3a1 1 0 011 1v2h4a1 1 0 011 1v4a1 1 0 01-1 1v6h1a2 2 0 012 2v2H5v-2a2 2 0 012-2h1V10a1 1 0 01-1-1V5a1 1 0 011-1h4z"/>
      </svg>
    )
  },
  {
    time: "8:30 - 11:40 AM",
    title: "Final Preparation",
    desc: "Teams prepare for final pitching with 3rd review, refreshments, and acknowledgment letter distribution",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
      </svg>
    )
  },
  {
    time: "11:40 AM - 2:30 PM",
    title: "Final Pitching & Lunch",
    desc: "Teams present final solutions with Q&A (11:40 AM-1:00 PM) followed by lunch break",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16l13-8L7 4z"/>
      </svg>
    )
  },
  {
    time: "2:30 - 7:00 PM",
    title: "Awards & Cultural Finale",
    desc: "Winner announcement & valediction at LBCH (2:30-3:30) followed by closing cultural performances at Auditorium (5:00-7:00)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    )
  }
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



