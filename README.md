# PaySlips for Deaphilman.com

This is couple of shellscripts which once run will generate and send payslip pdfs as attachment to an email to employees listed in the script

## pre-requisits

### There is a config.json file in the project, this must be updated with the correct path to a csv file.

### There must be a file with the name <payslips-yyyy-mm-dd.csv> in the workFolder defined in the config.json file and this file must have been generated using the company salary excel worksheet.

an example file name is : payslips-2021-04-09.csv

file must have proper fileds like this:

```
[
  {
    Reference: 'PAYSLIP-0012311',
    payslipDate: '2021-04-09',
    Title: 'Mr',
    FirstName: 'Iman',
    LastName: 'Dezfuly',
    Email: 'Iman.Dezfuly@Desphilman.com',
    Item1Description: 'Desphilman',
    AUDPerDay1: '10.05',
    Item2Description: 'TraceMate',
    AUDPerDay2: '2.5',
    Item3Description: '',
    AUDPerDay3: '',
    Item4Description: '',
    AUDPerDay4: '',
    Start: '2021-03-29',
    End: '2021-04-11',
    Days: '8',
    Item1Sub: '100',
    Item2Sub: '20',
    Item3Sub: '',
    Item4Sub: '',
    TotalAUD: '120',
    Rate: '195000',
    TotalIRR: '23400000'
  }]

```

#### Plz note: no slash at the end of workFolder path

### you must have done ssh-copy-id with finance@desphilman.com for this to work

## Running payslips

This command will Generate payslips:

`.node index.js 2021-04-09`

The following will create pdfs and send them to test emails:

`node index.js 2021-04-09 --send-to-test-email`

and the following will create and send them to the real emails mentioned in the csv file:

`node index.js 2021-04-09 --send-to-employees`
