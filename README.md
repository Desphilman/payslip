# PaySlips for Deaphilman.com

This is couple of shellscripts which once run will generate and send payslip pdfs as attachment to an email to employees listed in the script

## pre-requisits

you need to setup ssh key-exchange based login between your shell and finance@desphilman.com. (otherwise you will have to enter password a number of times)
you also need an RTF file containing payslip wich is named in this format:

`payslip-Firstname-Lastname.rtf`

For more safety and to ensure accidental payslips woun't be issued, the actual emails are also commented out, so you will need to uncomment line 6 of send-payslips-dynamic.sh for payslips to be sent to real peoples emails.

## Running payslips

This command will send payslips:

`./send-payslips-dynamic.sh ~/Documents/Desphilman/PayAdvise`

the first part is path to shell script (change it according to your folder structure) and second one is a folder containing your payadvise files with the above mentioned name format.

## do not use send-payslip.sh

This file is old and is commented out intentionally. Please use the dynamic file instead.

## Confirmation is done with complete word "yes"

You must type "yes" on confirmation to go ahead, anything else ( including "y") will exit without doing anything.
