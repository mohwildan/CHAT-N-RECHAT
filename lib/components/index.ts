import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "600",
    borderRadius: "6px",
  },
  variants: {
    solid: {
      bg: "rgba(74, 114, 255, 1)",
      color: "#fff",
      p: "1rem 2.5rem",
      _hover: {
        bg: "rgba(74, 114, 255, 0.8)",
      },
    },
    outline: {
      bg: "rgba(74, 114, 255, 0.05)",
      color: "rgba(74, 114, 255, 1)",
      p: "1rem 2.5rem",
      _hover: {
        bg: "rgba(74, 114, 255, 0.1)",
      },
    },
  },
};

export const Heading: ComponentStyleConfig = {
  baseStyle: {
    color: "#0C1B4D",
  },
  variants: {
    badge: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: "0.1em",
    },
    "section-title": {
      fontSize: 28,
      lineHeight: "42px",
      fontWeight: 400,
    },
    subtitle: {
      fontWeight: 400,
      fontSize: 18,
    },
  },
};

export const Text: ComponentStyleConfig = {
  baseStyle: {
    color: "rgba(12, 27, 77, 0.6)",
  },
  variants: {
    "section-description": {
      fontSize: 16,
      lineHeight: "26px",
      fontWeight: 400,
    },
  },
};
