import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

//
const testimonials = [
  {
    quote:
      "I had the pleasure of working with Anushka Wijesinghe on the 'Stock Management & Billing System' project for Super Sales Grocery Store, where they exhibited outstanding leadership. They adeptly coordinated the team's efforts, ensuring seamless communication and alignment with project goals. Their strategic thinking and problem-solving skills were instrumental in overcoming critical challenges, leading to a successful project outcome that improved inventory accuracy and billing efficiency.",
    author: "R.M. Nuwan Hirantha Rathnayaka",
    role: "Assistant Program Manager cum Lecturer, Esoft Metro Campus-Gampaha",
  },
  {
    quote:
      "I had the pleasure of working with Anushka Wijesinghe during the IEEEXtreme 19.0 Programming Competition, where he was a key member of the team I led. He demonstrated strong technical ability, a sharp problem-solving mindset, and remained composed under pressure. His contributions were consistent and valuable throughout both the preparation phase and the competition itself. What stood out most was his proactive attitude and collaborative spirit. Anushka actively participated in discussions, shared meaningful insights, and supported his teammates whenever needed. It was a great experience working with him, and I am confident that his dedication and passion will continue to drive his success. I highly recommend him to any team seeking a motivated and capable individual.",
    author: "Lochithya Hettiarachchi",
    role: "CodeStorm, Team Lead, IEEEXreme 19.0",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-foreground"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};