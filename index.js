import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/health", async (req, res) => {
  res.send({ msg: "damn" });
});

app.post("/", async (req, res) => {
  return res.json({
    status: "successful",
    error: false,
    data: {
      route: req.body,
      optimization: [{ lat: "8132u8213ssd.123m1.1", lng: "jajn831.13.31" }],
    },
  });
});

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
