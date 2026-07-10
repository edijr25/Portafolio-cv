"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "@/data/profile";

function TimelineItem({ item, icon: Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950 z-10" />
      <div className="absolute left-[5px] top-4 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800 last:hidden" />

      <div className="flex items-start gap-3 mb-1">
        <Icon size={18} className="text-emerald-500 mt-0.5 shrink-0" />
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-zinc-500">
            {item.institution || item.company}
          </p>
          <p className="text-xs text-zinc-400 mb-2">{item.period}</p>
          {item.description && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Experiencia y Educación</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Briefcase size={18} className="text-emerald-500" />
                Experiencia
              </h3>
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} icon={Briefcase} index={i} />
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-emerald-500" />
                Educación
              </h3>
              {education.map((item, i) => (
                <TimelineItem
                  key={i}
                  item={item}
                  icon={GraduationCap}
                  index={i}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
