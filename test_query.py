from lxml import html
import requests

page = requests.get('http://www.lyricsfreak.com/m/maroon+5/animals_21087089.html')

#page = requests.get('http://econpy.pythonanywhere.com/ex/001.html')
tree = html.fromstring(page.content)

music = tree.xpath('//div[@id="content"]/text()')
print(music)

#This will create a list of buyers:
#buyers = tree.xpath('//div[@title="buyer-name"]/text()')
#This will create a list of prices
#prices = tree.xpath('//span[@class="item-price"]/text()')

#print 'Buyers: ', buyers
#print 'Prices: ', prices

with open("Output.txt", "w") as text_file:
    text_file.write("Purchase Amount: %s" % music)