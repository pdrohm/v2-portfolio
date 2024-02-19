import React from "react";
import { navLinks } from "../../../config";
import Button from "../../Button/Button";
import { animated, useTrail } from "react-spring";

const Navbar = () => {
  const items = [
    ...navLinks,
    { url: "button", index: navLinks.length + 1, name: "CV" },
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0 },
    delay: (index) => index * 200,
  });

  return (
    <nav className="hidden md:flex md:items-center md:justify-center">
      {trail.map((props, index) => (
        <animated.div key={items[index].url} style={props}>
          {items[index].url === "button" ? (
            <Button title={items[index].name} />
          ) : (
            <a
              href={items[index].url}
              className="rounded-md px-4 py-2 font-mono text-sm text-lightest-slate hover:text-green"
            >
              <span className="text-green">{items[index].index}.</span>
              <span className="ml-1">{items[index].name}</span>
            </a>
          )}
        </animated.div>
      ))}
    </nav>
  );
};

export default Navbar;
