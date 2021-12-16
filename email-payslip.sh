
workdir=$1
firstName=$2
lastName=$3
psemail=$4
ccemail=$5
bccemail=$6
fileName=$7

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

echo "$workdir/$fileName" "finance@desphilman.com:/home/finance/$financeFolder"
scp -P 6222 "$workdir/$fileName" "finance@desphilman.com:/home/finance/$financeFolder"

ssh -p 6222 finance@desphilman.com "echo \"$letterText\" | mutt -c $ccemail -b $bccemail -s \"$subject\" $psemail -a $financeFileName"

echo "payslip from file $fileName sent to $firstName $lastName email $psemail ."


