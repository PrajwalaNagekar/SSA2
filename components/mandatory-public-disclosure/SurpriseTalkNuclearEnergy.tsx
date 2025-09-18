"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import DownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const files = [
  { name: "Copy of Day Boarding Fee Structure", link: "https://drive.google.com/file/d/1HJFM5mhgucxjTOwBxZ9ZKgRcc0zXHl34/view" },
  { name: "Copy of School Management Committee", link: "https://drive.google.com/file/d/1Wrhj35REYijeZGrpEo3Rq35ni5XHwsmr/view" },
  { name: "Copy of Affiliation Certificate", link: "https://drive.google.com/file/d/17dGaY4u5EWNUEeieLsJd0a0wxSzZW8Br/view" },
  { name: "Copy of Building Safety Certificate", link: "https://drive.google.com/file/d/1EXYQpDEXnGgOL3uTOGnaTkZuUzJ8EcNO/view" },
  { name: "Copy of Parent Teacher Association", link: "/Parent-Teacher-Association.pdf" },
  { name: "Copy of NOC", link: "https://drive.google.com/file/d/19IVMGb9TcpMmspsW7HulIcWqbro5D_-A/view" },
  { name: "Copy of NCERT Book List", link: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/book-list.webp" },
  { name: "Copy of Trust Certificate", link: "https://drive.google.com/file/d/11J4z2esZVO4kvu3mfqCA6vRaJGt-pt9O/view" },
  { name: "Copy of Sanitary & Water Health Certificate", link: "https://drive.google.com/file/d/17h5ekW5HtcMNNc4bnrAApfn7Spgis6gs/view" },
  { name: "Copy of Teaching & Non-Teaching Staff Details", link: "/Teaching-Non-Teaching-Staff-Details-.pdf" },
  { name: "Copy of School Infrastructure Details", link: "https://drive.google.com/file/d/1YodTD8HIC-M2zcU-qUKAe-BIaPSFutKy/view" },
  { name: "Copy of DEO Certificate (District)", link: "https://drive.google.com/file/d/1YodTD8HIC-M2zcU-qUKAe-BIaPSFutKy/view" },
  { name: "Copy of Fire Safety Certificate", link: "https://drive.google.com/file/d/1-sIBg5QTckGQD-IJEPWcBBGwWMLV8lUK/view" },
  { name: "Copy of Sample Transfer Certificate", link: "https://drive.google.com/file/d/1YegKPZcvMFYyuRzKatEeCBsJb_hQkzz9/view" },
  { name: "Final Report-OASIS 5.0 CBSE", link: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Final-Report-_-OASIS-5.0-CBSE-compressed.pdf" }
];

const ResponsiveSchoolUI = () => {
  const [form, setForm] = useState({
    firstName: "",
    phone: "",
    email: "",
    city: "",
    studentType: "",
    grade: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    emailjs
      .sendForm(
        "service_4ka4gnl",
        "template_furdhya",
        formRef.current,
        "dnzJzlC0-8YrVVEqV"
      )
      .then(
        () => {
          alert("Application sent successfully!");
          setForm({
            firstName: "",
            phone: "",
            email: "",
            city: "",
            studentType: "",
            grade: "",
          });
        },
        () => {
          alert("Error sending application.");
        }
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: { xs: 1, md: 4 },
        gap: 4,
        maxWidth: "1200px",
        mx: "auto",
        minHeight: "100vh",
        background: "#fff"
      }}
    >
      {/* Left file list */}
      <Box sx={{ flex: 2, height: "100%" }}>
        <Paper
          elevation={1}
          sx={{
            p: 2,
            mb: 2,
            background: "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {files.map((file, idx) => (
            <Box
              key={file.name}
              sx={{
                display: "flex",
                alignItems: "center",
                py: 1,
                borderBottom: idx === files.length - 1 ? "none" : "1px solid #eee"
              }}
            >
              <a
                href={file.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#333", width: "100%" }}
              >
                <DownloadIcon style={{ color: "#e754ba", marginRight: "16px" }} />
                <Typography variant="body1">{file.name}</Typography>
              </a>
            </Box>
          ))}
        </Paper>
      </Box>
      {/* Right side: Video and form */}
      <Box sx={{ flex: 3, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Video section */}
        <Box sx={{
          width: '100%',
          maxWidth: '480px',
          height: '180px',
          position: 'relative',
          mb: 3,
        }}>
          <iframe
            width="100%"
            height="100%"
            style={{ borderRadius: "20px" }}
            src="https://res.cloudinary.com/dsxpuytdw/video/upload/v1758028914/VID-20250916-WA0007_t9ujoo.mp4"
            title="Video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Box>
        {/* Form section */}
      <form
  ref={formRef}
  style={{
    background: "#322478",
    color: "#fff",
    borderRadius: "16px",
    padding: "24px",
    maxWidth: "560px",
     display: "grid",
    gap: "16px"
  }}
  onSubmit={handleSubmit}
>
  <div style={{ display: "flex", gap: "8px" }}>
    <input
      name="firstName"
      type="text"
      value={form.firstName}
      onChange={handleInputChange}
      required
      placeholder="First Name"
      style={{ flex: 1, background: "#19213B", borderRadius: "8px", padding: "12px", color: "#fff", outline: "none", border: "none" }}
    />
    <input
      name="phone"
      type="text"
      value={form.phone}
      onChange={handleInputChange}
      required
      placeholder="Phone"
      style={{ flex: 1, background: "#19213B", borderRadius: "8px", padding: "12px", color: "#fff", outline: "none", border: "none" }}
    />
  </div>
  <div style={{ display: "flex", gap: "8px" }}>
    <input
      name="email"
      type="email"
      value={form.email}
      onChange={handleInputChange}
      required
      placeholder="Email"
      style={{ flex: 1, background: "#19213B", borderRadius: "8px", padding: "12px", color: "#fff", outline: "none", border: "none" }}
    />
    <input
      name="city"
      type="text"
      value={form.city}
      onChange={handleInputChange}
      required
      placeholder="City"
      style={{ flex: 1, background: "#19213B", borderRadius: "8px", padding: "12px", color: "#fff", outline: "none", border: "none" }}
    />
  </div>
  <div className="space-y-3 md:space-y-4">
                <select
                  name="studentType"
                  value={form.studentType}
                  onChange={handleInputChange}
                  className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] text-white 
                                focus:ring-2 focus:ring-pink-400 border-none outline-none text-sm font-serif"
                  required
                >
                  <option value="">Select Student Type</option>
                  <option value="boarding">Boarding</option>
                  <option value="dayboarding">Day Boarding</option>
                </select>
                <select
                  name="grade"
                  value={form.grade}
                  onChange={handleInputChange}
                  className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] text-white 
                                focus:ring-2 focus:ring-pink-400 border-none outline-none text-sm font-serif"
                  required
                >
                  <option value="">Select Grade Applying For</option>
                  <option value="playgroup">Play Group</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg">KG</option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                  <option value="grade4">Grade 4</option>
                  <option value="grade5">Grade 5</option>
                  <option value="grade6">Grade 6</option>
                  <option value="grade7">Grade 7</option>
                  <option value="grade8">Grade 8</option>
                  <option value="grade9">Grade 9</option>
                  <option value="grade10">Grade 10</option>
                  <option value="grade11">Grade 11</option>
                  <option value="grade12">Grade 12</option>
                </select>
              </div>
  <button
    type="submit"
    style={{
      marginTop: "16px",
      background: "#f96bb2",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "1rem",
      borderRadius: "99px",
      padding: "12px 0",
      border: "none",
      transition: "background 0.2s",
      cursor: "pointer"
    }}
  >
    Submit
  </button>
</form>

      </Box>
    </Box>
  );
};

export default ResponsiveSchoolUI;
