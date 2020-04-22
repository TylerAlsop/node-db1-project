const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()

/////// This handles the route http://localhost:5000/accounts ///////


/////////////// GET ///////////////

router.get("/", async (req, res, next) => {
	try {
        // SQL Command: SELECT * FROM "accounts"
        const accounts = await db.select("*").from("accounts")
		res.json(accounts)
	} catch (err) {
		next(err)
	}
})

// GET accounts by ID //

router.get("/:id", async (req, res, next) => {
    try {
        // SQL Command: SELECT * FROM "accounts" WHERE "id" = ':id'
        const accountById = await db("accounts").from("accounts").where("id", req.params.id)
        res.json(accountById)
    } catch (err) {
        next(err)
    }
})

/////////////// POST ///////////////

router.post("/", async (req, res, next) => {
    try {
        const payload = {
            name: req.body.name,
            budget: req.body.budget
        }
        // SQL Command: INSERT INTO "messages" ("title", "contents") VALUES (?, ?)
        const [id] = await db("accounts").insert(payload)
        const newAccount = await db("accounts").where("id", id).first()
        res.json(newAccount)
    } catch (err) {
        next(err)
    }
})



module.exports = router