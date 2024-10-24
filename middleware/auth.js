const jwt = require("jsonwebtoken")
const SuperAdmin = require("../models/superAdmin")
const SchoolAdmin = require("../models/adminSchool")
const Teacher = require("../models/teacher")
const Student = require("../models/student")
const Parent = require("../models/parent")


const superAdminAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await SuperAdmin.findOne({ _id: decoded._id })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()

    } catch (e) {
        res.status(401).send({ error: "Please authenticate." })
    }

}

const schoolAdminAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await SchoolAdmin.findOne({ _id: decoded._id })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()

    } catch (e) {
        res.status(401).send({ error: "Please authenticate." })
    }

}

const teacherAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await Teacher.findOne({ _id: decoded._id })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()

    } catch (e) {
        res.status(401).send({ error: "Please authenticate." })
    }

}

const studentAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await Student.findOne({ _id: decoded._id })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()

    } catch (e) {
        res.status(401).send({ error: "Please authenticate." })
    }

}

const parentAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await Parent.findOne({ _id: decoded._id })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()

    } catch (e) {
        res.status(401).send({ error: "Please authenticate." })
    }

}
module.exports={
    superAdminAuth,
    schoolAdminAuth,
    teacherAuth,
    studentAuth,
    parentAuth
}