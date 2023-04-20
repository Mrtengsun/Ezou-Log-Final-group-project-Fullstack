import qrcode from "qrcode";

const QRcode = qrcode;

const generateQR = async (req, res, next) => {
  try {
    const generated = await QRcode.toString(req.body.email);
    // const generated = await QRcode.toString(req.userId);
    console.log(generated);
    res.send(generated);
    next();
    return;
  } catch (error) {
    next(error.message);
  }
};
export default generateQR;
