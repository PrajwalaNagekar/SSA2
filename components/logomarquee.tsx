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
        <img src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/02.png" alt="Class edge" style={{ height: 120, margin: "0 40px" }} />
        <img src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/05.png" alt="Google " style={{ height: 120, margin: "0 40px" }} />
        <img src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/06.png" alt="Microsoft Team" style={{ height: 120, margin: "0 40px" }} />
        <img src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/10.webp" alt="Kahoot" style={{ height: 120, margin: "0 40px" }} />
        <img src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/08.webp" alt="Padlet" style={{ height: 120, margin: "0 40px" }} />
        <img src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/09.png" alt="Quizlet" style={{ height: 120, margin: "0 40px" }} />
        <img src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/12.webp" alt="Robotics" style={{ height: 120, margin: "0 40px" }} />
        {/* Add more logos here */}
      </Marquee>
    </div>
  );
}
