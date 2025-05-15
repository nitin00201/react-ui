"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const themeColors = [
  { id: 1, name: "Sunset", color: "#FF5E5B" },
  { id: 2, name: "Ocean", color: "#3FB8AF" },
  { id: 3, name: "Lavender", color: "#B084CC" },
  { id: 4, name: "Lime", color: "#C1FF72" },
];

const swatchVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  selected: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
};

export default function ThemePicker() {
  const [selectedTheme, setSelectedTheme] = useState(themeColors[0]);

  return (
    <motion.div initial="initial" animate="animate" className="w-full">
      <Card className="w-full max-w-md mx-auto overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-lg font-semibold text-center">Pick a Theme</h2>

          <motion.div
            className="flex justify-center gap-4"
            initial="initial"
            animate="animate"
          >
            {themeColors.map((theme) => (
              <motion.button
                key={theme.id}
                className={cn(
                  "w-12 h-12 rounded-full border-2",
                  selectedTheme.id === theme.id
                    ? "border-ring ring-2 ring-offset-2 ring-ring"
                    : "border-muted"
                )}
                style={{ backgroundColor: theme.color }}
                variants={swatchVariants}
                animate={selectedTheme.id === theme.id ? "selected" : "animate"}
                onClick={() => setSelectedTheme(theme)}
                aria-label={`Select ${theme.name} theme`}
              />
            ))}
          </motion.div>

          <div className="text-center text-muted-foreground">
            Selected: <strong>{selectedTheme.name}</strong>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
