from bs4 import BeautifulSoup
import urllib2
import json
from restUrls import restUrls
from replacePhotoData import replacePhotoData

def scrapeOT(url):
	print "loading " + url + "..."
	content = urllib2.urlopen(url).read()

	print "parsing with BeautifulSoup..."
	soup = BeautifulSoup(content, 'html.parser')
	print "done parsing."

	# rid
	rid = soup.select("a.favorite-button")[0]["data-rid"] if soup.select("a.favorite-button") else 0

	# restaurant name
	name = soup.select("h1.page-header-title")[0].string if soup.select("h1.page-header-title") else ""

	#cuisines
	cuisines = soup.select(".detail-cuisines .detail-content")[0].string.split(",") if soup.select(".detail-cuisines .detail-content") else ""

	#noiseLevel
	noiseLevel = soup.select(".reviews-overview-scores .row .column")[4].select("p")[0].string if len(soup.select(".reviews-overview-scores .row .column")) >=4 else ""

	#recommendPercent
	recommendPercent = int(soup.select(".review-recommendation")[0].string.split(" ",1)[0].replace("%","")) if soup.select(".review-recommendation") else ""

	#price
	price = soup.select(".detail-price .detail-content")[0].string if soup.select(".detail-price .detail-content") else ""

	#website
	website = soup.select(".detail-website .detail-content")[0].string if soup.select(".detail-website .detail-content") else ""

	#diningStyle
	diningStyle = soup.select(".detail-dining-style .detail-content")[0].string if soup.select(".detail-dining-style .detail-content") else ""

	#address
	address = soup.find(itemprop="streetAddress").get_text(separator=u"<br/>") if soup.find(itemprop="streetAddress") else ""

	#hours
	hours = soup.select(".detail-hours .detail-content")[0].get_text(separator=u"<br/>") if soup.select(".detail-hours .detail-content") else ""

	#description
	description = soup.find(itemprop="description").get_text(separator=u"<br/>") if soup.find(itemprop="description") else ""

	#tags
	tags = []
	tagDivs = soup.select(".featured-tags .tag-buttons > .tag-button")
	for tag in tagDivs:
		tags += [tag.find(text=True)]

	#ratings
	ratingTotal = float(soup.select(".reviews-overall-score h1")[0].string) if soup.select(".reviews-overall-score h1") and len(soup.select(".reviews-overall-score h1")) >= 0 else ""
	ratingFood = float(soup.select(".reviews-overview-scores .row .column")[0].select("p")[0].string) if len(soup.select(".reviews-overview-scores .row .column"))>0 else None
	ratingAmbience = float(soup.select(".reviews-overview-scores .row .column")[1].select("p")[0].string) if len(soup.select(".reviews-overview-scores .row .column"))>1 else None
	ratingService = float(soup.select(".reviews-overview-scores .row .column")[2].select("p")[0].string) if len(soup.select(".reviews-overview-scores .row .column"))>2 else None
	ratingValue = float(soup.select(".reviews-overview-scores .row .column")[3].select("p")[0].string) if len(soup.select(".reviews-overview-scores .row .column"))>3 else None

	#menu
	menuUpdated = soup.select(".rest-menu-updated")[0].string if soup.select(".rest-menu-updated") else ""
	menuPages = []
	menuPageNames = []
	for menuPage in soup.select(".rest-menu-link"):
		menuPages += [{"name": menuPage.string}]
		menuPageNames += [menuPage.string]

	menuItems = []
	sectionGroups = soup.select(".rest-menu-section-group")
	for index, sectionGroup in enumerate(sectionGroups):
		sections = sectionGroup.select(".rest-menu-section")
		menuPage = menuPageNames[index]
		for section in sections:
			menuCategory = section.select(".rest-menu-section-header h5")[0].string if section.select(".rest-menu-section-header h5") else ""
			categoryDesc = section.select(".rest-menu-section-header p")[0].text if section.select(".rest-menu-section-header p") else ""
			menuItemDivs = section.select(".rest-menu-item")
			for menuItem in menuItemDivs:
				menuItemPrice = menuItem.select(".rest-menu-item-price")[0].string if menuItem.select(".rest-menu-item-price") else ""
				menuItemName = menuItem.select(".rest-menu-item-title")[0].string if menuItem.select(".rest-menu-item-title") else ""
				menuItemDescription = menuItem.select(".rest-menu-item-desc")[0].string if menuItem.select(".rest-menu-item-desc") else ""
				menuItems += [{
					"menuPage": menuPage,
					"category": menuCategory,
					"name": menuItemName,
					"description": menuItemDescription,
					"price": menuItemPrice
				}]

	#photos
	profPhoto = soup.select(".profile-header-image")[0].find("img")["src"] if soup.select(".profile-header-image") else None
	photos = []
	photoDivs = soup.select(".photos-gallery-li")
	for photo in photoDivs:
		img = photo.find("img")["src"]
		photos += [{ "img": img }]
	numPhotos = int(soup.select("#photos-gallery .see-more")[0].string.split(" ")[1])+len(photos) if soup.select("#photos-gallery .see-more") else len(photos)

	#reviews
	reviews = []
	reviewDivs = soup.select(".review")
	for review in reviewDivs:
		reviewText = review.select(".review-content")[0].text if review.select(".review-content") else None
		reviewName = review.find(itemprop="name").string if review.find(itemprop="name") else None
		reviewDate = review.select(".review-meta .color-light")[-1].string if review.select(".review-meta .color-light")[-1] else None
		reviewLocation = review.select(".review-meta .color-light")[1].string if review.select(".review-meta .color-light")[1] else None
		reviewRating = int(review.find(itemprop="ratingValue")["content"]) if review.find(itemprop="ratingValue") else None
		reviewVip = True if reviewDivs[0].select(".review-meta-user-icon-vip") else False
		reviews += [{
			"text": reviewText,
			"name": reviewName,
			"date": reviewDate,
			"location": reviewLocation,
			"rating": reviewRating,
			"vip": reviewVip
		}]
	numReviews = soup.find(itemprop="reviewCount").string if soup.find(itemprop="reviewCount") else False

	#export
	rest = [{
		"id": rid,
		"type": "regular",
		"name": name,
		"cuisines": cuisines,
		"bg": "",
		"bgType": "smallHero",
		"noiseLevel": noiseLevel,
		"recommendPercent": recommendPercent,
		"bookedToday": 64,
		"price": price,
		"website": website,
		"diningStyle": diningStyle,
		"address": address,
		"hours": hours,
		"description": description,
		"tags": tags,
		"ratingTotal": ratingTotal,
		"ratingFood": ratingFood,
		"ratingAmbience": ratingAmbience,
		"ratingService": ratingService,
		"ratingValue": ratingValue,
		"menuItems": menuItems,
		"menuPages": menuPages,
		"menuUpdated": menuUpdated,
		"photos": photos,
		"profPhoto": profPhoto,
		"photoCount": numPhotos,
		"reviews": reviews,
		"reviewCount": numReviews
	}]

	return rest

# scrapedRestData = []

# restUrls = restUrls[0:200]

# with open('../src/scrapedRestData.json', 'w') as f:
# 	for restUrl in restUrls:
# 		scrapedRestData += scrapeOT(restUrl)
# 	json.dump(scrapedRestData, f)

# replacePhotoData()

