import QRCode from "qrcode";

// const QRcode = QRCode;

const QR = QRCode.toString("data._id", { type: "terminal" }, (err, id) => {
  console.log(id);
});

const generateQR = async (req, res, next) => {
  try {
    const generated = await User.findById();
    // const generated = await QRcode.toString(req.userId);
    console.log(generated, "here");
    // res.send(generated);
    next();
    return;
  } catch (error) {
    next(error.message);
  }
};

export default generateQR;
