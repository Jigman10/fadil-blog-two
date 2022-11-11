const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h1> Fadil Blog</h1>
      <div className="nav-links">
        <a href="/">Home</a>

        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px"
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
