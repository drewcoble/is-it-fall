export const getSelectedHemisphere = () => {
  return localStorage.getItem("selectedHemisphere") ?? "northern";
};
export const getIsSouthernHemisphere = () =>
  getSelectedHemisphere() === "southern";

export const setSelectedHemisphere = (hemisphere: "northern" | "southern") => {
  return localStorage.setItem("selectedHemisphere", hemisphere);
};
export const setToNorthernHemipshere = () => {
  setSelectedHemisphere("northern");
};
export const setToSouthernHemipshere = () => {
  setSelectedHemisphere("southern");
};
