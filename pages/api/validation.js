export default function validation (req, res) {
    res.json({ success: req.body.input.endsWith(process.env.VALIDATION_KEY) });
}