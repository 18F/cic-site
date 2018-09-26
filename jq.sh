cat fedramp-data.json| jq '.data.Providers[] | select(.Designation == "Compliant" ) | {name: .Cloud_Service_Provider_Package, url: (split(.Cloud_Service_Provider_Package, " ") | join("-"))  company: .Cloud_Service_Provider_Name, impact_level: .Impact_Level, service_level: (.Service_Model| join(",")), category: ""}' > compliant2.json


cat compliant-cat-small.json | jq '. | group_by(.category)'