// Launch date (21 days from now by default)
export const LAUNCH_DATE = (() => {
  const date = new Date();
  date.setDate(date.getDate() + 21);
  return date;
})();

// Features being built
export const FEATURES = [
  "Hands-on Learning",
  "Tech Bootcamps",
  "Industry Projects",
  "Expert Mentorship",
  "Career Placement",
  "Project Portfolio"
];

// Company info
export const COMPANY = {
  name: "Creafters",
  email: "belbaghazaoui@gmail.com",
  year: new Date().getFullYear()
};

// Social media links
export const SOCIAL_LINKS = {
  twitter: "#",
  linkedin: "#",
  instagram: "#",
  facebook: "#"
};
