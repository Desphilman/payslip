const desphilmanIranPaySlip = require("./create-payslip.js");
const fs = require("fs");
const csvtojsonV2 = require("csvtojson");
const config = require("./config.json");
const { exec } = require("child_process");

const { workFolder, testEmail, ccEmails, bccEmails } = config;

console.log(process.argv);

const payslipDate = process.argv[2];
const csvFilePath = `${workFolder}/payslips-${payslipDate}.csv`;
const sendType = process.argv[3];

const isRealSend = sendType === "--send-to-employees";
const isTestSend = sendType === "--send-to-test-email";

console.log({ isRealSend, isTestSend });

csvtojsonV2()
	.fromFile(csvFilePath)
	.then((payslipsArray) => {
		console.log(payslipsArray);

		payslipsArray.forEach((payslip) => {
			const {
				Reference,
				payslipDate,
				Title,
				FirstName,
				LastName,
				Email,
				Item1Description,
				AUDPerDay1,
				Item2Description,
				AUDPerDay2,
				Item3Description,
				AUDPerDay3,
				Item4Description,
				AUDPerDay4,
				Start,
				End,
				Days,
				Item1Sub,
				Item2Sub,
				Item3Sub,
				Item4Sub,
				TotalAUD,
				Rate,
				TotalIRR,
				Message,
			} = payslip;
			const fileName = `payslip-${FirstName}-${LastName}-${payslipDate}.pdf`;
			const fileNamePath = `${workFolder}/${fileName}`;

			const pdfFile = desphilmanIranPaySlip({
				fileName: fileNamePath,
				title: Title,
				fullName: `${FirstName} ${LastName}`,
				refNumber: Reference,
				tableHeadings: [
					"Item",
					"Start",
					"End",
					"days",
					"AUD/day",
					"AUD Subtotal",
				],
				item1: [Item1Description, Start, End, Days, AUDPerDay1, Item1Sub],
				item2: [
					Item2Description,
					Item2Description ? Start : "",
					Item2Description ? End : "",
					Item2Description ? Days : "",
					AUDPerDay2,
					Item2Sub,
				],
				item3: [
					Item3Description,
					Item3Description ? Start : "",
					Item3Description ? End : "",
					Item3Description ? Days : "",
					AUDPerDay3,
					Item3Sub,
				],
				item4: [
					Item4Description,
					Item4Description ? Start : "",
					Item4Description ? End : "",
					Item4Description ? Days : "",
					AUDPerDay4,
					Item4Sub,
				],
				sumItem1: ["", "", "", "", "Total AUD:", TotalAUD],
				sumItem2: [
					"Exchange rate",
					Rate,
					"Rials/AUD",
					"",
					"Total Rials",
					TotalIRR,
				],
				Message,
			});

			if (isTestSend) {
				exec(
					`./email-payslip.sh ${workFolder} ${FirstName} ${LastName} ${testEmail} ${testEmail} ${testEmail} ${fileName}`,
					(error, stdout, stderr) => {
						if (error) {
							console.log(`error: ${error.message}`);
							return;
						}
						if (stderr) {
							console.log(`stderr: ${stderr}`);
							return;
						}
						console.log(`stdout: ${stdout}`);
					}
				);
			} else if (isRealSend) {
				exec(
					`./email-payslip.sh ${workFolder} ${FirstName} ${LastName} ${Email} ${ccEmails} ${bccEmails} ${fileName}`,
					(error, stdout, stderr) => {
						if (error) {
							console.log(`error: ${error.message}`);
							return;
						}
						if (stderr) {
							console.log(`stderr: ${stderr}`);
							return;
						}
						console.log(`stdout: ${stdout}`);
					}
				);
			}
		});
	});
