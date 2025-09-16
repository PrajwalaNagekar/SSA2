import Marquee from "react-fast-marquee";

export default function LogoMarquee() {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: "0 16px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Marquee gradient={false} speed={30} pauseOnHover={true} style={{ width: "100%" }}>
        <img src="/02.png" alt="Class edge" style={{ height: 120, margin: "0 40px" }} />
        <img src="/05.png" alt="Google " style={{ height: 120, margin: "0 40px" }} />
        <img src="/06.png" alt="Microsoft Team" style={{ height: 120, margin: "0 40px" }} />
        <img src="/10.webp" alt="Kahoot" style={{ height: 120, margin: "0 40px" }} />
        <img src="/08.webp" alt="Padlet" style={{ height: 120, margin: "0 40px" }} />
        <img src="/09.png" alt="Quizlet" style={{ height: 120, margin: "0 40px" }} />
        <img src="/12.webp" alt="Robotics" style={{ height: 120, margin: "0 40px" }} />
        {/* Add more logos here */}
      </Marquee>
    </div>
  );
}
