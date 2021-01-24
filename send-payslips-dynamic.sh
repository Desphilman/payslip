workdir=$1

firstNames=( Hadi Mansour)
lastNames=( Dezfuly Ghamami)
emails=( Iman.Dezfuly@Desphilman.com Iman.Dezfuly@desphilman.com )
#emails=( Hadi.Dezfuly@Desphilman.com Mansour.Ghamami@desphilman.com )
ccemail="Iman.Dezfuly@desphilman.com"

datetime=`date +"%d-%m-%Y"`

echo "PaySlips will be created and sent to thes emails: ${emails[@]}"

read -r -p "Are you sure? [yes/No] " response
if [[ ! "$response" =~ ^([Yy][eE][sS])$ ]]
then
exit 0
fi

for i in "${!firstNames[@]}"; do
firstName="${firstNames[$i]}";
lastName="${lastNames[$i]}";
psemail="${emails[$i]}";

subject="Desphilman payment advise for $firstName $lastName";
read -d '' letterText << EOF
Hello Dear $firstName $lastName

Here is your Desphilman payment advise of $datetime.
Please find your payslip attached to this email.

Regards
Desphilman finance
EOF

echo $letterText;

libreoffice --headless --invisible --norestore --convert-to pdf "$workdir/pay-advise-$firstName-$lastName.rtf";

mv "pay-advise-$firstName-$lastName.pdf" "$workdir/pay-advise-$firstName-$lastName-$datetime.pdf"

financeFolder=PayAdvises
financeFileName="~/$financeFolder/pay-advise-$firstName-$lastName-$datetime.pdf"
scp "$workdir/pay-advise-$firstName-$lastName-$datetime.pdf" "finance@desphilman.com:/home/finance/$financeFolder"

ssh finance@desphilman.com "echo \"$letterText\" | mutt -c $ccemail -s \"$subject\" $psemail -a $financeFileName"
done;


# libreoffice --headless --invisible --norestore --convert-to pdf "$workdir/pay-advise-mansour-ghamami.rtf"

# mv "pay-advise-mansour-ghamami.pdf" "$workdir/pay-advise-mansour-ghamami-$datetime.pdf"

# scp "$workdir/pay-advise-mansour-ghamami-$datetime.pdf" finance@desphilman.com:/home/finance/PayAdvises




# ssh finance@desphilman.com "echo \"Hello Dear Mansour Ghamami. Please find attached your payment advise. Regards, Desphilman finance.\" | mutt -s \"Mansour Ghamami payment advise of $datetime\" iman.dezfuly@desphilman.com -a ~/PayAdvises/pay-advise-mansour-ghamami-$datetime.pdf"