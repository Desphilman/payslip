const PDFDocument = require("pdfkit");
const fs = require("fs");

function desphilmanIranPaySlip({
	imageName = "./images/desphilman_logo.png",
	fileName = "output.pdf",
	title = "Mr.",
	fullName = "Hadi Dezfuly",
	refNumber = "N/A",
	tableHeadings = ["Item", "Start", "End", "days", "AUD/day", "AUD Subtotal"],
	item1 = ["Desphilman", "2 weeks ago", "today", "8", "10", "80"],
	item2 = ["TraceMate", "", "", "8", "1", "8"],
	item3 = ["Item3", "", "", "", "", ""],
	item4 = ["Item4", "", "", "", "", ""],
	sumItem1 = ["", "", "", "", "Total AUD:", "88"],
	sumItem2 = [
		"Exchange rate",
		"200000",
		"Rials/AUD",
		"",
		"Total Rials",
		"17600000",
	],
	Message = "Desphilman the man of the truth.",
}) {
	const doc = new PDFDocument();
	doc.pipe(fs.createWriteStream(fileName));

	doc.fontSize(10).text("Issue date:", 60, 208);
	doc.text(new Date().toDateString(), 130, 208);

	doc.fontSize(10).text("Ref number:", 60, 224);
	doc.text(refNumber, 130, 224);

	doc
		.fontSize(12)
		.text(
			`Dear ${title} ${fullName}\nThis is to advise as per your software development contract with Desphilman Pty Ltd,\nthe following amount of remuneration was paid to your nominated bank account:`,
			65,
			260
		);

	doc.image(imageName, 210, 04, {
		fit: [170, 170],
		align: "center",
		valign: "center",
	});

	// doc.image("./images/cyrus-the-great.png", 225, 10, {
	// 	fit: [150, 150],
	// 	align: "center",
	// 	valign: "center",
	// });

	// doc.image("./images/novrouz-farvahar-poem.png", 225, 10, {
	// 	fit: [170, 185],
	// 	align: "center",
	// 	valign: "center",
	// });

	doc.fontSize(20).text("Desphilman PTY LTD", 210, 170);

	doc.moveTo(40, 340);
	doc
		.lineWidth(2)
		.lineTo(560, 340)
		.lineTo(560, 490)
		.lineTo(40, 490)
		.lineTo(40, 339.5)
		.stroke();
	doc.moveTo(40, 370).lineTo(560, 370).stroke();
	doc
		.moveTo(40, 490)
		.lineTo(560, 490)
		.lineTo(560, 540)
		.lineTo(40, 540)
		.lineTo(40, 490)
		.stroke();

	doc.moveTo(40, 400).lineTo(560, 400).lineWidth(1).stroke();
	doc.moveTo(40, 430).lineTo(560, 430).lineWidth(1).stroke();
	doc.moveTo(40, 460).lineTo(560, 460).lineWidth(1).stroke();

	doc.moveTo(140, 370).lineTo(140, 490).stroke();
	doc.moveTo(220, 370).lineTo(220, 490).stroke();
	doc.moveTo(300, 370).lineTo(300, 490).stroke();
	doc.moveTo(350, 370).lineTo(350, 490).stroke();
	doc.moveTo(420, 370).lineTo(420, 490).stroke();

	doc.fontSize(12).text(tableHeadings[0], 60, 356);
	doc.fontSize(12).text(tableHeadings[1], 160, 356);
	doc.fontSize(12).text(tableHeadings[2], 240, 356);
	doc.fontSize(12).text(tableHeadings[3], 308, 356);
	doc.fontSize(12).text(tableHeadings[4], 360, 356);
	doc.fontSize(12).text(tableHeadings[5], 440, 356);

	doc.fontSize(12).text(item1[0], 064, 386);
	doc.fontSize(12).text(item1[1], 144, 386);
	doc.fontSize(12).text(item1[2], 224, 386);
	doc.fontSize(12).text(item1[3], 308, 386);
	doc.fontSize(12).text(item1[4], 360, 386);
	doc.fontSize(12).text(item1[5], 430, 386);

	doc.fontSize(12).text(item2[0], 064, 416);
	doc.fontSize(12).text(item2[1], 144, 416);
	doc.fontSize(12).text(item2[2], 224, 416);
	doc.fontSize(12).text(item2[3], 308, 416);
	doc.fontSize(12).text(item2[4], 360, 416);
	doc.fontSize(12).text(item2[5], 430, 416);

	doc.fontSize(12).text(item3[0], 064, 446);
	doc.fontSize(12).text(item3[1], 144, 446);
	doc.fontSize(12).text(item3[2], 224, 446);
	doc.fontSize(12).text(item3[3], 308, 446);
	doc.fontSize(12).text(item3[4], 360, 446);
	doc.fontSize(12).text(item3[5], 430, 446);

	doc.fontSize(12).text(item4[0], 064, 476);
	doc.fontSize(12).text(item4[1], 144, 476);
	doc.fontSize(12).text(item4[2], 224, 476);
	doc.fontSize(12).text(item4[3], 308, 476);
	doc.fontSize(12).text(item4[4], 360, 476);
	doc.fontSize(12).text(item4[5], 430, 476);

	doc.fontSize(13).text(sumItem1[0], 064, 500);
	doc.fontSize(12).text(sumItem1[1], 144, 500);
	doc.fontSize(12).text(sumItem1[2], 224, 500);
	doc.fontSize(12).text(sumItem1[4], 360, 500);
	doc.fontSize(12).text(sumItem1[5], 430, 500);

	doc.fontSize(13).text(sumItem2[0], 064, 520);
	doc.fontSize(12).text(sumItem2[1], 144, 520);
	doc.fontSize(12).text(sumItem2[2], 224 - 30, 520);
	doc.fontSize(12).text(sumItem2[4], 360, 520);
	doc.fontSize(12).text(sumItem2[5], 430, 520);
	// message
	doc.fontSize(12).text(Message, 50, 550);

	doc.fontSize(12).text("Regards,", 40, 660);
	doc.fontSize(12).text("Desphilman finance", 40, 680);

	// Apply some transf9.5orms and render an SVG path with the 'even-odd' fill rule
	doc
		.scale(0.6)
		.translate(470, -380)
		.path("M 250,75 L 323,301 131,161 369,161 177,301 z")
		.fill("red", "even-odd")
		.restore();
	// Finalize PDF file
	doc.end();
}

module.exports = desphilmanIranPaySlip;
