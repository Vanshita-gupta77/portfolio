import React from "react";
import { profile } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" name="about" className="section-shell">
      <div>
        <p className="section-kicker">About</p>

        <div className="glass-panel mt-8 w-full rounded-3xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
