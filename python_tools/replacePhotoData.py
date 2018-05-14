import urllib2
import json

def replacePhotoData():
	with open('restPhotoData.json', 'r') as restPhotoData:
		restPhotoData_json = json.load(restPhotoData)
		with open('../src/scrapedRestData.json', 'r') as scrapedRestData:
			scrapedRestData_json = json.load(scrapedRestData)
			for index, rest in enumerate(scrapedRestData_json):
				for restPhoto in restPhotoData_json:
					if (restPhoto["rid"] == rest["id"]):
						# update the scrapedRestData with the large bg
						scrapedRestData_json[index]["bg"] = restPhoto["imgURL"]
						scrapedRestData_json[index]["bgType"] = "largeHero"

	with open('../src/scrapedRestData.json', 'w') as f:
		f.write(json.dumps(scrapedRestData_json))
