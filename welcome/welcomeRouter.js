const express = require("express")

const router = express.Router()


/////// This handles the route http://localhost:5000 ///////

router.get("/", async (req, res, next) => {
	try {
		res.json({
			message: "Welcome to my node-db1-project API",
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router