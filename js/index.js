{
  const sections = document.querySelectorAll("section");
  const landingPage = document.querySelector("#landing-page");
  const visitorHomePage = document.querySelector("#visitor-home-page");

  const handleRoute = () => {
    const hash = location.hash;
    sections.forEach((section) => (section.style.display = "none"));
    switch (hash) {
      case "#visitor":
        visitorHomePage.style.display = "block";
        break;
      case "":
        landingPage.style.display = "block";
        break;
      default:
        location.hash = "";
    }
  };

  window.addEventListener("load", handleRoute);
  window.addEventListener("hashchange", handleRoute);
}
