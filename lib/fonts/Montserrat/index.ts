import { Montserrat } from "next/font/google";

const font = Montserrat({
  display: "swap",
  preload: true,
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
export default font;
