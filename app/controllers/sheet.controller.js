const entry = require('../models/entry.model');
const mail = require('../controllers/mail.controller')
const registrationTemplate = require('../templates/mail.template')
const moment = require("moment")

exports.create = function (req, res) {
	var newEntry = new entry(req.body);
	newEntry.save()
		.then((doc) => {
			fromDate = new Date(moment().day("Sunday").week(doc.weekNumber));
			toDate = new Date(moment().day("Saturday").week(doc.weekNumber))
			approvedUrl = "http://localhost:4200?approved=true"
			disApprovedUrl = "http://localhost:4200?approved=false"
			var mailOptions = {
				from: '"Miracle\'s Hubble Team" <vbasavaraje@miraclesoft.com>', // sender address
				to: "vbasavaraje@miraclesoft.com", // receiver
				subject: 'Action Required - Approval for weekly Timesheet',
				html: registrationTemplate.registrationSheet(doc.userId, approvedUrl,disApprovedUrl,moment(toDate).format("DD MMM\'YY"), moment(fromDate).format("DD MMM\'YY"))// html body
			};
			mail.send(mailOptions)
				.then((info) => {
					console.log(info);
				}).catch((error) => {
					console.log("Error : ", error);
				})
			res.status(200).send(doc)
		})
		.catch((err) => {
			console.log("err", err)
			res.sendStatus(400);
		})
}

exports.get = function (req, res) {
	entry.find({userId:req.params.id})
		.then((docs) => {
			res.status(200).send(docs)
		})
		.catch((err) => {
			res.sendStatus(500)
		})
}

exports.update = function (req, res) {
	res.send(req)
}

exports.delete = function (req, res) {
	res.send(req)
}

exports.submit = function (req, res) {
	url = "http://localhost:4200?token="
	var mailOptions = {
		from: '"Miracle\'s Hubble Team" <vbasavaraje@miraclesoft.com>', // sender address
		to: [doc.email], // receiver
		subject: 'Approval required for weekly Timesheet',
		html: registrationTemplate.registrationSheet(doc.firstname, url)// html body
	};
	mail.send(mailOptions)
		.then((info) => {
			console.log(info);
		}).catch((error) => {
			console.log("Error : ", error);
		})


}