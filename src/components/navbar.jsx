import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">
        Number of counters greater than zero: {totalCounters}
      </span>
    </nav>
  );
};

export default NavBar;
