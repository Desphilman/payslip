
workdir=$1
firstName=$2
lastName=$3
psemail=$4
ccemail=$5
fileName=$6

datetime=`date +"%d-%m-%Y"`

subject="Desphilman payment advise for $firstName $lastName";

read -d '' letterText << EOF
Hello Dear $firstName $lastName

Here is your Desphilman payment advise of $datetime.
Please find your payslip attached to this email.

Regards
Desphilman finance
EOF

echo $letterText;


financeFolder=PayAdvises
financeFileName="~/$financeFolder/$fileName"
scp "$workdir/$fileName" "finance@desphilman.com:/home/finance/$financeFolder"

ssh finance@desphilman.com "echo \"$letterText\" | mutt -c $ccemail -s \"$subject\" $psemail -a $financeFileName"

echo "payslip from file $fileName sent to $firstName $lastName email $psemail ."


