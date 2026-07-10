"use client";

import { motion } from "framer-motion";
import { NodejsIcon } from "@/components/icons";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mb-8" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-400 dark:hover:border-emerald-500 transition-colors"
              >
                <span className="text-2xl">{skill.icon === "nodejs" ? <NodejsIcon size={24} /> : skill.icon}</span>
                <span className="font-medium text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
