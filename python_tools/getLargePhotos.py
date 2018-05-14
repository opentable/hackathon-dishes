import urllib2
import json
from rids import rids

def getLargePhoto(url, ridsLoop):
	content = urllib2.urlopen(url).read()
	content = json.loads(content)
	restPhotos = []

	for rid in ridsLoop:
		# if profile photo exists
		if content["venues"][rid]:
			origWidth = content["venues"][rid]["resource.size.width"] if "resource.size.width" in content["venues"][rid] else 0
			origHeight = content["venues"][rid]["resource.size.height"] if "resource.size.height" in content["venues"][rid] else 0
			# print str(origWidth) + " , " + str(origHeight)
			if (origWidth >= 1280 and origHeight >= 720):
				# print "LARGE ENOUGH!"
				photoType = content["venues"][rid]["score.label"]
				if content["venues"][rid]["resource.thumbnails"][8]:
					imgURL = content["venues"][rid]["resource.thumbnails"][8]["uri"]
				else:
					imgURL = content["venues"][rid]["resource.original"]
				# largeImageCount = largeImageCount + 1
				restPhotos += [{
					"rid": rid,
					"imgURL": imgURL
				}]
	return restPhotos

with open('restPhotoData.json', 'w') as f:
	url = "http://photos.otenv.com/v2/photos/venues/profile?rids="
	i = 0
	ridCount = len(rids)
	restPhotos = []

	while (i < ridCount):
		print "looping over 100.."
		ridsLoop = rids[i:i+100]
		ridsLoop = map(str, ridsLoop)
		# convert rid numbers to strings
		ridList = ",".join(ridsLoop)
		combinedUrl = url + ridList
		restPhotos += getLargePhoto(combinedUrl, ridsLoop)
		i = i + 100

	print len(restPhotos)
	json.dump(restPhotos, f)

# # iterate to find [i] where label = "wide-huge"
# content2["venues"]["103693"]["resource.thumbnails"][8]

# imgURl = content2["venues"]["103693"]["resource.thumbnails"][8]["uri"]