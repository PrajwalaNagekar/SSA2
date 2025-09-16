import React from "react";
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
  { name: "Copy of NCERT Book List", link: "/book-list.webp" },
  { name: "Copy of Trust Certificate", link: "https://drive.google.com/file/d/11J4z2esZVO4kvu3mfqCA6vRaJGt-pt9O/view" },
  { name: "Copy of Sanitary & Water Health Certificate", link: "https://drive.google.com/file/d/17h5ekW5HtcMNNc4bnrAApfn7Spgis6gs/view" },
  { name: "Copy of Teaching & Non-Teaching Staff Details", link: "/Teaching-Non-Teaching-Staff-Details-.pdf" },
  { name: "Copy of School Infrastructure Details", link: "https://drive.google.com/file/d/1YodTD8HIC-M2zcU-qUKAe-BIaPSFutKy/view" },
  { name: "Copy of DEO Certificate (District)", link: "https://drive.google.com/file/d/1YodTD8HIC-M2zcU-qUKAe-BIaPSFutKy/view" },
  { name: "Copy of Fire Safety Certificate", link: "https://drive.google.com/file/d/1-sIBg5QTckGQD-IJEPWcBBGwWMLV8lUK/view" },
  { name: "Copy of Sample Transfer Certificate", link: "https://drive.google.com/file/d/1YegKPZcvMFYyuRzKatEeCBsJb_hQkzz9/view" },
  { name: "Final Report-OASIS 5.0 CBSE", link: "/Final-Report-_-OASIS-5.0-CBSE-compressed.pdf" }
];

const studentTypes = ["Day Scholar", "Day Boarder", "Hosteller"];
const grades = [
  "Nursery", "KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4",
  "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"
];

const ResponsiveSchoolUI = () => (
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

    {/* Right side: Both videos stacked on top, form below */}
    <Box sx={{ flex: 3, display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Video container: stack two iframes */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
        {/* <Box sx={{ width: "100%", height: "260px", mb: 2 }}>
          <iframe
            width="100%"
            height="100%"
            style={{ borderRadius: "20px" }}
            src="https://www.youtube.com/embed/kQ5HnKPW_Y8"
            title="School Promo"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Box> */}
        <Box sx={{
  width: '100%',         // Container takes full width
  maxWidth: '480px',     // Optional max width for large screens
  height: '180px',       // Fixed height, or use percentage for responsiveness
  position: 'relative',
}}>
  <iframe
    width="100%"
    height="100%"
    style={{ borderRadius: "20px" }}
    src="/SRI-SRI-ACADEMY_5.mp4"
    title="Video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</Box>

      </Box>
      <Paper sx={{
        p: 3,
        borderRadius: 3,
        background: "#322478",
        color: "#fff",
        maxWidth: 420,
        mx: { xs: "auto", md: 0 },
        flexShrink: 0
      }}>
        <Typography sx={{ mb: 1 }} variant="body2" color="#ccccee">
          Admission Open Now
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Apply for Session 2025-26
        </Typography>
        <Box
          component="form"
          sx={{
            display: "grid",
            gap: 2
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField variant="filled" size="small" fullWidth placeholder="First Name"
              InputProps={{ style: { background: "#23234A", color: "#fff" } }} />
            <TextField variant="filled" size="small" fullWidth placeholder="Phone"
              InputProps={{ style: { background: "#23234A", color: "#fff" } }} />
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField variant="filled" size="small" fullWidth placeholder="Email"
              InputProps={{ style: { background: "#23234A", color: "#fff" } }} />
            <TextField variant="filled" size="small" fullWidth placeholder="City"
              InputProps={{ style: { background: "#23234A", color: "#fff" } }} />
          </Box>
          <TextField select variant="filled" size="small" fullWidth value="" defaultValue="" displayEmpty
            InputProps={{ style: { background: "#23234A", color: "#fff" } }}>
            <MenuItem value="" disabled>- Select Student Type -</MenuItem>
            {studentTypes.map(type => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </TextField>
          <TextField select variant="filled" size="small" fullWidth value="" defaultValue="" displayEmpty
            InputProps={{ style: { background: "#23234A", color: "#fff" } }}>
            <MenuItem value="" disabled>- Please Select Grade Applying For -</MenuItem>
            {grades.map(grade => (
              <MenuItem key={grade} value={grade}>{grade}</MenuItem>
            ))}
          </TextField>
          <Button
            sx={{
              mt: 2,
              background: "#e754ba",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: 99,
              py: 1.2,
              boxShadow: "none",
              ":hover": { background: "#d143a0" }
            }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  </Box>
);

export default ResponsiveSchoolUI;
