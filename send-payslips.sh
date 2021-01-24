
# workdir=$1

# datetime=`date +"%d-%m-%Y"`


# libreoffice --headless --invisible --norestore --convert-to pdf "$workdir/pay-advise-hadi-dezfuly.rtf"
# libreoffice --headless --invisible --norestore --convert-to pdf "$workdir/pay-advise-mansour-ghamami.rtf"

# mv "pay-advise-hadi-dezfuly.pdf" "$workdir/pay-advise-hadi-dezfuly-$datetime.pdf"
# mv "pay-advise-mansour-ghamami.pdf" "$workdir/pay-advise-mansour-ghamami-$datetime.pdf"

# scp "$workdir/pay-advise-hadi-dezfuly-$datetime.pdf" finance@desphilman.com:/home/finance/PayAdvises
# scp "$workdir/pay-advise-mansour-ghamami-$datetime.pdf" finance@desphilman.com:/home/finance/PayAdvises



# ssh finance@desphilman.com "echo \"Hello Dear Hadi Dezfuly. Please find attached your payment advise. Regards, Desphilman finance.\" | mutt -s \"Hadi Dezfuly payment advise of $datetime\" hadi.dezfuly@desphilman.com -a ~/PayAdvises/pay-advise-hadi-dezfuly-$datetime.pdf"

# ssh finance@desphilman.com "echo \"Hello Dear Mansour Ghamami. Please find attached your payment advise. Regards, Desphilman finance.\" | mutt -s \"Mansour Ghamami payment advise of $datetime\" mansour.ghamami@desphilman.com -a ~/PayAdvises/pay-advise-mansour-ghamami-$datetime.pdf"