//var MongoClient = require( 'mongodb' ).MongoClient;

var logger;

module.exports = {

  log: function() {
    console.log("====> in log");
  },

  getDb: function(callback) {
    console.log("====> in getDb");

    if (!_db) {
      connectToDB(function(err) {
          callback(err);
        }
      }
      else {
        console.log("====>  getDb - already connected");
      }
      return _db;
    }
  };


  "recipient": {
    "id": "1798468836837848"
  },
  "message": {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "list",
        "top_element_style": "compact",
        "elements": [{
          "title": "Computer Card",
          "subtitle": "ـ أجزاء ولوازم للآلات والأجهزة الداخلة فى الكميوتر",
          "buttons": [{
            "title": "Select أختار",
            "type": "postback",
            "payload": "Computer Card"
          }]
        }, {
          "title": "Computer Case No power Supply",
          "subtitle": "صندوق كمبيوتر بدون مغذي للكهرباء",
          "buttons": [{
            "title": "Select أختار",
            "type": "postback",
            "payload": "Computer Case No power Supply"
          }]
        }, {
          "title": "Computer Case With power Supply",
          "subtitle": "صندوق كمبيوتر مع مغذي للكهرباء",
          "buttons": [{
            "title": "Select أختار",
            "type": "postback",
            "payload": "Computer Case With power Supply"
          }]
        }, {
          "title": "Computer Fan",
          "subtitle": "مروحة كمبيوتر",
          "buttons": [{
            "title": "Select أختار",
            "type": "postback",
            "payload": "Computer Fan"
          }]
        }, {
          "title": "Computer Parts",
          "subtitle": "قطع كمبيوتر",
          "buttons": [{
            "title": "Select أختار",
            "type": "postback",
            "payload": "Computer Parts"
          }]
        }, {
          "title": "Computer Replacement Parts",
          "subtitle": "قطع  غيار كمبيوتر",
          "buttons": [{
            "title": "Select أختار",
            "type": "postback",
            "payload": "Computer Replacement Parts"
          }]
        }],
        "buttons": [{
          "title": "View More",
          "type": "postback",
          "payload": "View"
        }]
      }
    }
  }
}


[{
  "ASIN": ["B01B72W1VA"],
  "ParentASIN": ["B01DLKRLAW"],
  "DetailPageURL": ["https://www.amazon.com/Corsair-Bronze-Certified-Modular-CP-9020103-NA/dp/B01B72W1VA?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01B72W1VA"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/Corsair-Bronze-Certified-Modular-CP-9020103-NA/dp/tech-data/B01B72W1VA?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B01B72W1VA&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B01B72W1VA&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B01B72W1VA&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B01B72W1VA?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B01B72W1VA?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B01B72W1VA?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Personal Computers"],
    "Brand": ["Corsair"],
    "Color": ["Black"],
    "EAN": ["8805191364731"],
    "EANList": [{
      "EANListElement": ["8805191364731", "0843591058124"]
    }],
    "Feature": ["80 PLUS Bronze certified: High efficiency operation for less excess heat and lower operating costs", "Thermally Controlled Fan: Silent operation at low and medium loads", "Semi -Modular: Make your builds and upgrades easy, with clean, great-looking results", "Five year warranty: Your guarantee of reliable operation that will last across several system builds"],
    "HardwarePlatform": ["CONSUMER_ELECTRONICS"],
    "ItemDimensions": [{
      "Height": [{
        "_": "338",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "590",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "495",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "550",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["Corsair"],
    "LegalDisclaimer": ["User responsible for return shipping, only refund available."],
    "ListPrice": [{
      "Amount": ["6999"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$69.99"]
    }],
    "Manufacturer": ["Corsair"],
    "ManufacturerPartsWarrantyDescription": ["Manufacturers Limited Warranty:5 Year"],
    "Model": ["CP-9020103-NA"],
    "MPN": ["CP-9020103-NA"],
    "NumberOfItems": ["1"],
    "PackageDimensions": [{
      "Height": [{
        "_": "380",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "1060",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "495",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "730",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["CP-9020103-NA"],
    "ProductGroup": ["Personal Computer"],
    "ProductTypeName": ["SYSTEM_POWER_DEVICE"],
    "Publisher": ["Corsair"],
    "Size": ["650 Watt"],
    "Studio": ["Corsair"],
    "Title": ["Corsair CX Series 650 Watt 80 Plus Bronze Certified Modular Power Supply (CP-9020103-NA)"],
    "UPC": ["843591058124"],
    "UPCList": [{
      "UPCListElement": ["843591058124", "842024131397"]
    }]
  }],
  "OfferSummary": [{
    "LowestNewPrice": [{
      "Amount": ["6159"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$61.59"]
    }],
    "TotalNew": ["37"],
    "TotalUsed": ["0"],
    "TotalCollectible": ["0"],
    "TotalRefurbished": ["0"]
  }],
  "Offers": [{
    "TotalOffers": ["1"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B01B72W1VA?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["K04GAMVyzXLDHpi2hbzcepRr%2B3HjzRVz3dlwQaeAhWOmb%2BzSWOo2gs2PEOdx6ak5kaHlU%2Bbl1fgrS1lCu6ijHKjqHByTwQAeVfec92OSoS7VdWCAthQFvg%3D%3D"],
        "Price": [{
          "Amount": ["6159"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$61.59"]
        }],
        "AmountSaved": [{
          "Amount": ["840"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$8.40"]
        }],
        "PercentageSaved": ["12"],
        "Availability": ["Usually ships in 24 hours"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["0"],
          "MaximumHours": ["0"]
        }],
        "IsEligibleForSuperSaverShipping": ["1"],
        "IsEligibleForPrime": ["1"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["1161760"],
      "Name": ["Power Supplies"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["193870011"],
          "Name": ["Computer Components"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["541966"],
              "Name": ["Computers & Accessories"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["493964"],
                  "Name": ["Categories"],
                  "IsCategoryRoot": ["1"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["172282"],
                      "Name": ["Electronics"]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
}]


[{
  "ASIN": ["B01B72W1VA"],
  "ParentASIN": ["B01DLKRLAW"],
  "DetailPageURL": ["https://www.amazon.com/Corsair-Bronze-Certified-Modular-CP-9020103-NA/dp/B01B72W1VA?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01B72W1VA"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/Corsair-Bronze-Certified-Modular-CP-9020103-NA/dp/tech-data/B01B72W1VA?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B01B72W1VA&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B01B72W1VA&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B01B72W1VA&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B01B72W1VA?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B01B72W1VA?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B01B72W1VA?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Personal Computers"],
    "Brand": ["Corsair"],
    "Color": ["Black"],
    "EAN": ["8805191364731"],
    "EANList": [{
      "EANListElement": ["8805191364731", "0843591058124"]
    }],
    "Feature": ["80 PLUS Bronze certified: High efficiency operation for less excess heat and lower operating costs", "Thermally Controlled Fan: Silent operation at low and medium loads", "Semi -Modular: Make your builds and upgrades easy, with clean, great-looking results", "Five year warranty: Your guarantee of reliable operation that will last across several system builds"],
    "HardwarePlatform": ["CONSUMER_ELECTRONICS"],
    "ItemDimensions": [{
      "Height": [{
        "_": "338",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "590",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "495",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "550",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["Corsair"],
    "LegalDisclaimer": ["User responsible for return shipping, only refund available."],
    "ListPrice": [{
      "Amount": ["6999"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$69.99"]
    }],
    "Manufacturer": ["Corsair"],
    "ManufacturerPartsWarrantyDescription": ["Manufacturers Limited Warranty:5 Year"],
    "Model": ["CP-9020103-NA"],
    "MPN": ["CP-9020103-NA"],
    "NumberOfItems": ["1"],
    "PackageDimensions": [{
      "Height": [{
        "_": "380",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "1060",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "495",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "730",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["CP-9020103-NA"],
    "ProductGroup": ["Personal Computer"],
    "ProductTypeName": ["SYSTEM_POWER_DEVICE"],
    "Publisher": ["Corsair"],
    "Size": ["650 Watt"],
    "Studio": ["Corsair"],
    "Title": ["Corsair CX Series 650 Watt 80 Plus Bronze Certified Modular Power Supply (CP-9020103-NA)"],
    "UPC": ["843591058124"],
    "UPCList": [{
      "UPCListElement": ["843591058124", "842024131397"]
    }]
  }],
  "OfferSummary": [{
    "LowestNewPrice": [{
      "Amount": ["6159"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$61.59"]
    }],
    "TotalNew": ["36"],
    "TotalUsed": ["0"],
    "TotalCollectible": ["0"],
    "TotalRefurbished": ["0"]
  }],
  "Offers": [{
    "TotalOffers": ["1"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B01B72W1VA?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01B72W1VA"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["ojCAj82MuFkXIpxe63gWzScXMVj2r3HDvpqq3WMgjbAmUmWrYrW%2BfdBxM37HhzqqOD7%2FPPTH2oaX15e61VfgSxze8YFPl%2FDIpXCBrYd7iFobLQ9orewQew%3D%3D"],
        "Price": [{
          "Amount": ["6159"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$61.59"]
        }],
        "AmountSaved": [{
          "Amount": ["840"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$8.40"]
        }],
        "PercentageSaved": ["12"],
        "Availability": ["Usually ships in 24 hours"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["0"],
          "MaximumHours": ["0"]
        }],
        "IsEligibleForSuperSaverShipping": ["1"],
        "IsEligibleForPrime": ["1"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["1161760"],
      "Name": ["Power Supplies"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["193870011"],
          "Name": ["Computer Components"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["541966"],
              "Name": ["Computers & Accessories"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["493964"],
                  "Name": ["Categories"],
                  "IsCategoryRoot": ["1"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["172282"],
                      "Name": ["Electronics"]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
}]



Resulting Message from Amazon
2017 - 08 - 08 T23: 12: 28.806874 + 00: 00 app[web .1]: [{
  "ASIN": ["B00BIFNTMC"],
  "DetailPageURL": ["https://www.amazon.com/Anker-Wireless-Vertical-Ergonomic-Optical/dp/B00BIFNTMC?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00BIFNTMC"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/Anker-Wireless-Vertical-Ergonomic-Optical/dp/tech-data/B00BIFNTMC?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00BIFNTMC"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B00BIFNTMC&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00BIFNTMC"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B00BIFNTMC&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00BIFNTMC"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B00BIFNTMC&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00BIFNTMC"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B00BIFNTMC?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00BIFNTMC"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B00BIFNTMC?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00BIFNTMC"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B00BIFNTMC?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00BIFNTMC"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Personal Computers"],
    "Brand": ["Anker"],
    "Color": ["Black"],
    "EAN": ["8536692579774"],
    "EANList": [{
      "EANListElement": ["8536692579774", "8480610774386", "8510052879773", "0848061079456", "0848061077438"]
    }],
    "Feature": ["Scientific ergonomic design encourages healthy neutral \"handshake\" wrist and arm positions for smoother movement and less overall strain.", "800 / 1200 / 1600 DPI Resolution Optical Tracking Technology provides more sensitivity than standard optical mice for smooth and precise tracking on a wide range of surfaces.", "Added next/previous buttons provide convenience when webpage browsing; the superior choice for internet surfers, gamers and people who work at length at the computer.", "Enters power saving mode (power is cut off completely) after 8 minutes idle, press right or left button for it to wake. Right handed mouse. Dimensions :115 x 58 x 87 mm. & Weight: 95g", "Package includes: 1 Anker Wireless Vertical Ergonomic Optical Mouse (2 AAA batteries not included), 1 2.4G USB receiver (in the bottom of the mouse), 1 instruction manual. 18-month hassle-free warranty."],
    "ItemDimensions": [{
      "Height": [{
        "_": "315",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "398",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "21",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "323",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["Anker"],
    "ListPrice": [{
      "Amount": ["4999"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$49.99"]
    }],
    "Manufacturer": ["Anker"],
    "Model": ["AK-98ANWVM-UBA"],
    "MPN": ["AK-98ANWVM-UBA-0007"],
    "PackageDimensions": [{
      "Height": [{
        "_": "394",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "1024",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "49",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "677",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["AK-98ANWVM-UBA-0007"],
    "Platform": ["Mac OS X", "Windows Vista"],
    "ProductGroup": ["Personal Computer"],
    "ProductTypeName": ["COMPUTER_INPUT_DEVICE"],
    "Publisher": ["Anker"],
    "Studio": ["Anker"],
    "Title": ["Anker 2.4G Wireless Vertical Ergonomic Optical Mouse, 800 / 1200 /1600DPI, 5 Buttons - Black"],
    "UPC": ["848061077438"],
    "UPCList": [{
      "UPCListElement": ["848061077438", "848061079456"]
    }]
  }],
  "OfferSummary": [{
    "LowestNewPrice": [{
      "Amount": ["1999"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$19.99"]
    }],
    "TotalNew": ["1"],
    "TotalUsed": ["0"],
    "TotalCollectible": ["0"],
    "TotalRefurbished": ["0"]
  }],
  "Offers": [{
    "TotalOffers": ["1"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B00BIFNTMC?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00BIFNTMC"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["ovfPmaPWaDOitWre%2BPtNQ4oJfukD3uo2JsLz0qh%2F4bPJTsntX9EbBu1BW33ZZvQdui6B%2BjbdgBMHFJDh6t%2Fn6QwzRMA6V%2BlkbUEeAIblLhywgte4CyvIC1zg%2BXIDdZDyR8vXYhzJse07zeP7r2NT%2Fw%3D%3D"],
        "Price": [{
          "Amount": ["4999"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$49.99"]
        }],
        "SalePrice": [{
          "Amount": ["1999"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$19.99"]
        }],
        "AmountSaved": [{
          "Amount": ["3000"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$30.00"]
        }],
        "PercentageSaved": ["60"],
        "Availability": ["Usually ships in 24 hours"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["0"],
          "MaximumHours": ["0"]
        }],
        "IsEligibleForSuperSaverShipping": ["1"],
        "IsEligibleForPrime": ["1"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["11036491"],
      "Name": ["Mice"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["11548956011"],
          "Name": ["Keyboards, Mice & Accessories"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["172456"],
              "Name": ["Computer Accessories & Peripherals"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["541966"],
                  "Name": ["Computers & Accessories"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["493964"],
                      "Name": ["Categories"],
                      "IsCategoryRoot": ["1"],
                      "Ancestors": [{
                        "BrowseNode": [{
                          "BrowseNodeId": ["172282"],
                          "Name": ["Electronics"]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      "BrowseNodeId": ["13900871"],
      "Name": ["Computers Features"],
      "Children": [{
        "BrowseNode": [{
          "BrowseNodeId": ["51548011"],
          "Name": ["Featured Categories"]
        }]
      }],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["172282"],
          "Name": ["Electronics"]
        }]
      }]
    }]
  }]
}]


[{
  "ASIN": ["B01ES349CY"],
  "DetailPageURL": ["https://www.amazon.com/Retinol-Cream-Moisturizer-Face-Night/dp/B01ES349CY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01ES349CY"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/Retinol-Cream-Moisturizer-Face-Night/dp/tech-data/B01ES349CY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01ES349CY"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B01ES349CY&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01ES349CY"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B01ES349CY&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01ES349CY"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B01ES349CY&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01ES349CY"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B01ES349CY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01ES349CY"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B01ES349CY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01ES349CY"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B01ES349CY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01ES349CY"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Misc."],
    "Brand": ["LilyAna Naturals"],
    "EAN": ["0701698184019"],
    "EANList": [{
      "EANListElement": ["0701698184019"]
    }],
    "Feature": ["Worried about Retin - A drying out your facial skin? Our advanced, anti aging formula is designed for daily use with maximum prescription strength effectiveness without flaking,peeling or dry skin. Loaded with the best ingredients such as Hyaluronic Acid, Vitamin E, Green Tea, Shae Butter and Jojoba Oil. For men and women and all skin types.", "- You'll see results! Our premium, high potency lotion will produce visible changes with fine lines. Fade sun damage, spots, scars and stretch marks. Improve uneven tone, skin texture and overall appearance. Repair, improve and restore life back into your skin revealing your true beauty.", "- No oily residue left behind. Our creme quickly absorbs without a heavy or sticky feel. Gentle enough for sensitive skin and to use around your eye area helping with dark circles, milia and under eye bags. Use on hands and neck for firming and crepe skin.", "- Works great for blemish prone areas. Won't clog pores, cause breakouts, blackheads, pimples or irritate. Helps with uneven skin tone, fade scars and dark spots and even stretch marks.", "- Light, pleasant smell. Contains no artificial fragrances added and no parabens. Gluten free and not tested on animals."],
    "IsAdultProduct": ["0"],
    "ItemDimensions": [{
      "Height": [{
        "_": "350",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "350",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "11",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "175",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["LilyAna Naturals"],
    "ListPrice": [{
      "Amount": ["1899"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$18.99"]
    }],
    "Manufacturer": ["LilyAna Naturals"],
    "MPN": ["LORI-2.5"],
    "PackageDimensions": [{
      "Height": [{
        "_": "181",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "429",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "15",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "181",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["LORI-2.5"],
    "ProductGroup": ["Beauty"],
    "ProductTypeName": ["BEAUTY"],
    "Publisher": ["LilyAna Naturals"],
    "Studio": ["LilyAna Naturals"],
    "Title": ["Retinol Cream Moisturizer for Face and Eyes, Use Day and Night - for Anti Aging, Acne, Wrinkles - made with Natural and Organic Ingredients - 1.7 OZ"],
    "UPC": ["701698184019"],
    "UPCList": [{
      "UPCListElement": ["701698184019"]
    }]
  }],
  "OfferSummary": [{
    "LowestNewPrice": [{
      "Amount": ["1899"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$18.99"]
    }],
    "TotalNew": ["2"],
    "TotalUsed": ["0"],
    "TotalCollectible": ["0"],
    "TotalRefurbished": ["0"]
  }],
  "Offers": [{
    "TotalOffers": ["1"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B01ES349CY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01ES349CY"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["oVNXED1zx1X%2Fot4wXKKfgreGttWKCYodH8MeJ%2FFuCjPb4sjFNWYsd46jBTSX38PkgDiIATJ0Gq3xM%2FBngijZZ3ySkMvjI26fqtZNrBVzAqFJ4tDUDdPoPpHQaHQHwJLI1Ujjs%2B6qfE%2B1HMGYTEG9KuW8Wg%2BvuDdB"],
        "Price": [{
          "Amount": ["1899"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$18.99"]
        }],
        "SalePrice": [{
          "Amount": ["1899"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$18.99"]
        }],
        "Availability": ["Usually ships in 24 hours"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["0"],
          "MaximumHours": ["0"]
        }],
        "IsEligibleForSuperSaverShipping": ["1"],
        "IsEligibleForPrime": ["1"]
      }]
    }]
  }]
}]


[{
  "ASIN": ["B01N0B4UKV"],
  "DetailPageURL": ["https://www.amazon.com/Kitchen-Shear-Kitchens-Stainless-Steel/dp/B01N0B4UKV?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01N0B4UKV"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/Kitchen-Shear-Kitchens-Stainless-Steel/dp/tech-data/B01N0B4UKV?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01N0B4UKV"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B01N0B4UKV&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01N0B4UKV"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B01N0B4UKV&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01N0B4UKV"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B01N0B4UKV&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01N0B4UKV"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B01N0B4UKV?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01N0B4UKV"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B01N0B4UKV?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01N0B4UKV"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B01N0B4UKV?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01N0B4UKV"]
    }]
  }],
  "ItemAttributes": [{
    "Brand": ["Bianco Brothers"],
    "Color": ["Stainless Steel"],
    "EAN": ["0650348694517"],
    "EANList": [{
      "EANListElement": ["0650348694517"]
    }],
    "Feature": ["Kitchen Shear, Utility Shear", "Hand Finished for Extremely Fine Edges Used By Professionals", "Made in USA 440 Stainless Steel", "Using American Machinery, Components, Compounds and Craftsmanship"],
    "Label": ["Bianco Brothers Instruments"],
    "ListPrice": [{
      "Amount": ["1299"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$12.99"]
    }],
    "Manufacturer": ["Bianco Brothers Instruments"],
    "Model": ["BB Kitchen shear"],
    "MPN": ["Kitchens Best"],
    "PackageQuantity": ["1"],
    "PartNumber": ["Kitchens Best"],
    "ProductGroup": ["Kitchen"],
    "ProductTypeName": ["KITCHEN"],
    "Publisher": ["Bianco Brothers Instruments"],
    "Studio": ["Bianco Brothers Instruments"],
    "Title": ["Kitchen Shear, Kitchens Best Stainless Steel Made in USA"],
    "UPC": ["650348694517"],
    "UPCList": [{
      "UPCListElement": ["650348694517"]
    }]
  }],
  "OfferSummary": [{
    "LowestNewPrice": [{
      "Amount": ["1299"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$12.99"]
    }],
    "TotalNew": ["1"],
    "TotalUsed": ["0"],
    "TotalCollectible": ["0"],
    "TotalRefurbished": ["0"]
  }],
  "Offers": [{
    "TotalOffers": ["1"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B01N0B4UKV?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01N0B4UKV"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["tlB4wi%2BrgZbPAJ%2FCoxF8E0lu6JMGQ%2BNKWdj%2B8PAIPpLLRK4OEBQ0IYLoFlKRYkcTp0o9VAQsaHIyCDwt5y0%2B%2Bst6YFyzBeinuzfWgNJscwrTwtYp44rF5Fp3%2Fu5BYgcPpznLHeAd1HJMRDAqydm93cqUpHpRO%2BnW"],
        "Price": [{
          "Amount": ["1299"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$12.99"]
        }],
        "SalePrice": [{
          "Amount": ["1299"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$12.99"]
        }],
        "Availability": ["Usually ships in 2-3 business days"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["48"],
          "MaximumHours": ["72"]
        }],
        "IsEligibleForSuperSaverShipping": ["0"],
        "IsEligibleForPrime": ["0"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["289860"],
      "Name": ["Shears"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["289851"],
          "Name": ["Cutlery & Knife Accessories"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["284507"],
              "Name": ["Kitchen & Dining"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["1063498"],
                  "Name": ["Categories"],
                  "IsCategoryRoot": ["1"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["1055398"],
                      "Name": ["Home & Kitchen"]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
}]


[{
  "ASIN": ["B003IP8BC8"],
  "ParentASIN": ["B074K46D93"],
  "DetailPageURL": ["https://www.amazon.com/Vitafusion-Prenatal-Gummy-Vitamins-Packaging/dp/B003IP8BC8?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B003IP8BC8"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/Vitafusion-Prenatal-Gummy-Vitamins-Packaging/dp/tech-data/B003IP8BC8?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B003IP8BC8&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B003IP8BC8&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B003IP8BC8&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B003IP8BC8?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B003IP8BC8?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B003IP8BC8?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Health and Beauty"],
    "Brand": ["Vitafusion"],
    "CatalogNumberList": [{
      "CatalogNumberListElement": ["NI-079"]
    }],
    "Feature": ["242 mg of Vitamin C", "As much Vitamin C as 10 tangerines", "Supports immune health*", "Great tasting gummies with natural orange flavor", "Assorted Flavors, flavors may vary"],
    "IsAdultProduct": ["0"],
    "IsAutographed": ["0"],
    "IsMemorabilia": ["0"],
    "ItemDimensions": [{
      "Height": [{
        "_": "562",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "306",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "0.8",
        "$": {
          "Units": "pounds"
        }
      }],
      "Width": [{
        "_": "306",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["Vitafusion"],
    "LegalDisclaimer": ["Actual product packaging and materials may contain more and/or different information than that shown on our Web site. We recommend that you do not solely rely on the information presented and that you always read labels, warnings, and directions before using or consuming a product. Content on this site is for reference purposes and is not intended to substitute for advice given by a physician, pharmacist, or other licensed health-care professional. You should not use this information as self-diagnosis or for treating a health problem or disease. Contact your health-care provider immediately if you suspect that you have a medical problem. Information and statements regarding dietary supplements have not been evaluated by the Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent any disease or health condition. ABC Wholesale assumes no liability for inaccuracies or misstatements about products."],
    "ListPrice": [{
      "Amount": ["1200"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$12.00"]
    }],
    "Manufacturer": ["Vitafusion"],
    "Model": ["BX-1001950"],
    "MPN": ["19505"],
    "NumberOfItems": ["1"],
    "PackageDimensions": [{
      "Height": [{
        "_": "209",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "551",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "75",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "291",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["19505"],
    "ProductGroup": ["Health and Beauty"],
    "ProductTypeName": ["HEALTH_PERSONAL_CARE"],
    "PublicationDate": ["2010-09-03"],
    "Publisher": ["Vitafusion"],
    "Size": ["90"],
    "Studio": ["Vitafusion"],
    "Title": ["Vitafusion Prenatal, Gummy Vitamins, 90 Count (Packaging May Vary)"],
    "UPC": ["027917019505"],
    "UPCList": [{
      "UPCListElement": ["027917019505"]
    }]
  }],
  "OfferSummary": [{
    "LowestNewPrice": [{
      "Amount": ["922"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$9.22"]
    }],
    "TotalNew": ["39"],
    "TotalUsed": ["0"],
    "TotalCollectible": ["0"],
    "TotalRefurbished": ["0"]
  }],
  "Offers": [{
    "TotalOffers": ["1"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B003IP8BC8?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["16eAofc8HET6n5OirvXak97D9BPg7XcaWM6YjsimKhr3FQlwHPuKBrLjbSSU46a8CpqYPfx50UWfM0zDbn0t1vw8p%2F5%2Fq%2Fsk5YgJjaUrvsF977siMU%2BYtdMbNAh%2FNLmERWYLipFILR6I7KCbQEtYegrxV5ZK393J"],
        "Price": [{
          "Amount": ["922"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$9.22"]
        }],
        "AmountSaved": [{
          "Amount": ["278"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$2.78"]
        }],
        "PercentageSaved": ["23"],
        "Availability": ["Usually ships in 3-4 business days"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["72"],
          "MaximumHours": ["96"]
        }],
        "IsEligibleForSuperSaverShipping": ["0"],
        "IsEligibleForPrime": ["0"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["6936725011"],
      "Name": ["Prenatal Vitamins"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["6936686011"],
          "Name": ["Multi & Prenatal Vitamins"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["3764441"],
              "Name": ["Vitamins & Dietary Supplements"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["3760931"],
                  "Name": ["Products"],
                  "IsCategoryRoot": ["1"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["3760901"],
                      "Name": ["Health & Household"]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
}]

[{
  "ASIN": ["B003IP8BC8"],
  "ParentASIN": ["B074K46D93"],
  "DetailPageURL": ["https://www.amazon.com/Vitafusion-Prenatal-Gummy-Vitamins-Packaging/dp/B003IP8BC8?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B003IP8BC8"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/Vitafusion-Prenatal-Gummy-Vitamins-Packaging/dp/tech-data/B003IP8BC8?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B003IP8BC8&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B003IP8BC8&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B003IP8BC8&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B003IP8BC8?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B003IP8BC8?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B003IP8BC8?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B003IP8BC8"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Health and Beauty"],
    "Brand": ["Vitafusion"],
    "CatalogNumberList": [{
      "CatalogNumberListElement": ["NI-079"]
    }],
    "Feature": ["242 mg of Vitamin C", "As much Vitamin C as 10 tangerines", "Supports immune health*", "Great tasting gummies with natural orange flavor", "Assorted Flavors, flavors may vary"],
    "IsAdultProduct": ["0"],
    "IsAutographed": ["0"],
    "IsMemorabilia": ["0"],
    "ItemDimensions": [{
      "Height": [{
        "_": "562",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "306",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "0.8",
        "$": {
          "Units": "pounds"
        }
      }],
      "Width": [{
        "_": "306",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["Vitafusion"],
    "LegalDisclaimer": ["Actual product packaging and materials may contain more and/or different information than that shown on our Web site. We recommend that you do not solely rely on the information presented and that you always read labels, warnings, and directions before using or consuming a product. Content on this site is for reference purposes and is not intended to substitute for advice given by a physician, pharmacist, or other licensed health-care professional. You should not use this information as self-diagnosis or for treating a health problem or disease. Contact your health-care provider immediately if you suspect that you have a medical problem. Information and statements regarding dietary supplements have not been evaluated by the Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent any disease or health condition. ABC Wholesale assumes no liability for inaccuracies or misstatements about products."],
    "ListPrice": [{
      "Amount": ["1200"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$12.00"]
    }],
    "Manufacturer": ["Vitafusion"],
    "Model": ["BX-1001950"],
    "MPN": ["19505"],
    "NumberOfItems": ["1"],
    "PackageDimensions": [{
      "Height": [{
        "_": "209",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "551",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "75",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "291",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["19505"],
    "ProductGroup": ["Health and Beauty"],
    "ProductTypeName": ["HEALTH_PERSONAL_CARE"],
    "PublicationDate": ["2010-09-03"],
    "Publisher": ["Vitafusion"],
    "Size": ["90"],
    "Studio": ["Vitafusion"],
    "Title": ["Vitafusion Prenatal, Gummy Vitamins, 90 Count (Packaging May Vary)"],
    "UPC": ["027917019505"],
    "UPCList": [{
      "UPCListElement": ["027917019505"]
    }]
  }]
}]


[{
  "ASIN": ["B01IH292RY"],
  "ParentASIN": ["B01IH2929W"],
  "DetailPageURL": ["https://www.amazon.com/Winter-HiCool-Thermal-Cycling-Driving/dp/B01IH292RY?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01IH292RY"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/Winter-HiCool-Thermal-Cycling-Driving/dp/tech-data/B01IH292RY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01IH292RY"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B01IH292RY&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01IH292RY"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B01IH292RY&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01IH292RY"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B01IH292RY&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01IH292RY"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B01IH292RY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01IH292RY"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B01IH292RY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01IH292RY"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B01IH292RY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01IH292RY"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Misc."],
    "Brand": ["HiCool"],
    "Color": ["Black"],
    "Department": ["womens"],
    "EAN": ["0744960567028"],
    "EANList": [{
      "EANListElement": ["0744960567028"]
    }],
    "Feature": ["Sensitive touch screen: thumb and forefinger part covered with shock, could use a mobile phone when wearing this gloves.", "Pattern of antiskid: there is much antiskid glue in palm, effectively prevent the occurring in the process of vibration and catch out.", "Mill wool lycra fabric: soft, warm and comfortable, elegant appearance design, the warning signs outside of the hand can increase the driving safety at night.", "Wrist is a new technology and materials: elastic contraction will not fall off and convenient to wear and removal.", "Package include: 1 set of full finger gloves with one year warranty, enjoy friendly customer service, be sure the item \"Sold by Encore Direct\" ."],
    "IsAutographed": ["0"],
    "IsMemorabilia": ["0"],
    "ItemDimensions": [{
      "Height": [{
        "_": "150",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "850",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "4",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "400",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["HiCool"],
    "ListPrice": [{
      "Amount": ["999"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$9.99"]
    }],
    "Manufacturer": ["HiCool"],
    "MPN": ["HiCool"],
    "PackageDimensions": [{
      "Height": [{
        "_": "150",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "900",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "4",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "450",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["HiCool"],
    "ProductGroup": ["Sports"],
    "ProductTypeName": ["SPORTING_GOODS"],
    "Publisher": ["HiCool"],
    "Size": ["Small"],
    "Studio": ["HiCool"],
    "Title": ["Winter Gloves, HiCool Touch Screen Gloves Thermal Cycling Gloves Driving Gloves for Men and Women (Black, Small)"],
    "UPC": ["744960567028"],
    "UPCList": [{
      "UPCListElement": ["744960567028"]
    }]
  }],
  "OfferSummary": [{
    "LowestNewPrice": [{
      "Amount": ["999"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$9.99"]
    }],
    "TotalNew": ["1"],
    "TotalUsed": ["0"],
    "TotalCollectible": ["0"],
    "TotalRefurbished": ["0"]
  }],
  "Offers": [{
    "TotalOffers": ["1"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B01IH292RY?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01IH292RY"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["ggJOPl0HLMmpozVg1Dqu4WwD6xDvYXXsO1LpWzA8KvqME9VDysVyOiGN%2BUFYVYh95giizBDH6EGZuXoplvDESWU3Z6oCuFB42UMGAg5pK3rMNTvQHkwgqW8B%2BSrsVZfKHsaLorr5pXmVYpwQ1PqpwijQVMeqszqt"],
        "Price": [{
          "Amount": ["999"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$9.99"]
        }],
        "Availability": ["Usually ships in 24 hours"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["0"],
          "MaximumHours": ["0"]
        }],
        "IsEligibleForSuperSaverShipping": ["1"],
        "IsEligibleForPrime": ["1"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["2614624011"],
      "Name": ["Gloves"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["9590740011"],
          "Name": ["Accessories"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["2419362011"],
              "Name": ["Women"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["2371056011"],
                  "Name": ["Clothing"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["3416071"],
                      "Name": ["Running"],
                      "Ancestors": [{
                        "BrowseNode": [{
                          "BrowseNodeId": ["3407731"],
                          "Name": ["Exercise & Fitness"],
                          "Ancestors": [{
                            "BrowseNode": [{
                              "BrowseNodeId": ["10971181011"],
                              "Name": ["Sports & Fitness"],
                              "Ancestors": [{
                                "BrowseNode": [{
                                  "BrowseNodeId": ["3375301"],
                                  "Name": ["Categories"],
                                  "IsCategoryRoot": ["1"],
                                  "Ancestors": [{
                                    "BrowseNode": [{
                                      "BrowseNodeId": ["3375251"],
                                      "Name": ["Sports & Outdoors"]
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      "BrowseNodeId": ["11444150011"],
      "Name": ["Accessories"],
      "Children": [{
        "BrowseNode": [{
          "BrowseNodeId": ["2474961011"],
          "Name": ["Balaclavas"]
        }, {
          "BrowseNodeId": ["11444151011"],
          "Name": ["Belts"]
        }, {
          "BrowseNodeId": ["11444158011"],
          "Name": ["Hats & Caps"]
        }, {
          "BrowseNodeId": ["15494462011"],
          "Name": ["Sport Watches"]
        }, {
          "BrowseNodeId": ["11444167011"],
          "Name": ["Sunglasses"]
        }, {
          "BrowseNodeId": ["11444168011"],
          "Name": ["Sweat Headbands & Wristbands"]
        }]
      }],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["11444119011"],
          "Name": ["Women"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["11444071011"],
              "Name": ["Clothing"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["10971181011"],
                  "Name": ["Sports & Fitness"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["3375301"],
                      "Name": ["Categories"],
                      "IsCategoryRoot": ["1"],
                      "Ancestors": [{
                        "BrowseNode": [{
                          "BrowseNodeId": ["3375251"],
                          "Name": ["Sports & Outdoors"]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      "BrowseNodeId": ["11130423011"],
      "Name": ["Sports & Fitness Features"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["3375251"],
          "Name": ["Sports & Outdoors"]
        }]
      }]
    }]
  }]
}]

{
  "recipient": {
    "id": "1636276406383043"
  },
  "message": {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "list",
        "top_element_style": "compact",
        "elements": [{
          "title": "Shoes/0.35/0.16/0/35.54",
          "subtitle": "أحذية",
          "buttons": [{
            "title": "Select إختر",
            "type": "postback",
            "payload": {
              "action": "getPricing",
              "item": {
                "title": "this item",
                "price": 100,
                "category_name": "Shoes",
                "weight": 3
              }
            }
          }]
        }, {
          "title": "Clothing accessories  Leather gloves, mittens and mitts/0.35/0.16/0/12.29",
          "subtitle": "ـ لوازم ألبسة و  القفازات الجلدية",
          "buttons": [{
            "title": "Select إختر",
            "type": "postback",
            "payload": {
              "action": "getPricing",
              "item": {
                "title": "this item",
                "price": 100,
                "category_name": "Clothing accessories  Leather gloves, mittens and mitts",
                "weight": 3
              }
            }
          }]
        }, {
          "title": "Clothing/0.25/0.16/0/10.71",
          "subtitle": "ملابس",
          "buttons": [{
            "title": "Select إختر",
            "type": "postback",
            "payload": {
              "action": "getPricing",
              "item": {
                "title": "this item",
                "price": 100,
                "category_name": "Clothing",
                "weight": 3
              }
            }
          }]
        }, {
          "title": "Real Jewelry/0/0.16/0/10.42",
          "subtitle": "مجوهرات ذهب وفضة وألماس",
          "buttons": [{
            "title": "Select إختر",
            "type": "postback",
            "payload": {
              "action": "getPricing",
              "item": {
                "title": "this item",
                "price": 100,
                "category_name": "Real Jewelry",
                "weight": 3
              }
            }
          }]
        }],
        "buttons": [{
          "title": "View More",
          "type": "postback",
          "payload": "View"
        }]
      }
    }
  }
}



[{
  "ASIN": ["B00023433U"],
  "ParentASIN": ["B073R52Y2H"],
  "DetailPageURL": ["https://www.amazon.com/TRENDnet-1000Mbps-2000Mbps-Full-Duplex-TEG-PCITXR/dp/B00023433U?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00023433U"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/TRENDnet-1000Mbps-2000Mbps-Full-Duplex-TEG-PCITXR/dp/tech-data/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B00023433U&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B00023433U&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B00023433U&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Personal Computers"],
    "Brand": ["TRENDnet"],
    "CatalogNumberList": [{
      "CatalogNumberListElement": ["C67654", "EP5173981", "TEGPCITXR", "99041H", "TRE-TEG-PCITXR", "IGC67654", "575072", "TEG-PCITXR", "710931501438", "11.1", "46340K", "ASC859221AIN02"]
    }],
    "Color": ["Gigabit"],
    "EAN": ["5147841700203"],
    "EANList": [{
      "EANListElement": ["5147841700203", "0047335495378", "0521375292659", "0001910737284", "5052181005140", "7487485803518", "0710931501704", "5554442392216", "6213759714669", "0898029720197", "0840356763392", "0731215065811", "7044447844271", "0172302742312", "0792933353536", "0071090215360", "7109315014382", "5399998119326", "0013039119346", "0777786326722", "5554442338528", "0031111132960", "0956260089227", "0012300852944", "0060090916186", "0611101601425", "0710931501438", "7123290478403", "0731215274831", "0635145507420", "0191120014517", "0523161033620", "0168141527432", "5024123784642", "4054318510139", "0803982810205", "7487485912036", "5399998010807", "5554442237876", "0710931951431", "7487485654622", "0021111185912", "0069060085631", "0012303907078", "0151903613917", "5596692064826", "5024123733732", "0763615996853", "7744771064337", "0132017934914", "5053313882936", "0071030579422", "0069285676911"]
    }],
    "Feature": ["Support 32-Bit PCI Local Bus Master high-speed operation of Rev. 2.3 specification", "1 x 10/100/1000Mbps Auto Negotiation and Auto MDI-X Gigabit Port", "Built-in FIFO (8K/64K) buffers reduce overhead of memory transfers", "Supports Full-Duplex Mode Doubles Network Data Rate to 20/200/2000Mbp", "Supports IEEE 802.1Q VLAN Tagging (Windows 2000 and above only)"],
    "HardwarePlatform": ["CONSUMER_ELECTRONICS"],
    "IsAutographed": ["0"],
    "IsMemorabilia": ["0"],
    "ItemDimensions": [{
      "Height": [{
        "_": "230",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "470",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "35",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "60",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["TRENDnet"],
    "Languages": [{
      "Language": [{
        "Name": ["English"],
        "Type": ["Original Language"]
      }]
    }],
    "LegalDisclaimer": ["Please be advise you must be a computer electrition to install this item"],
    "ListPrice": [{
      "Amount": ["1999"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$19.99"]
    }],
    "Manufacturer": ["TRENDnet"],
    "ManufacturerPartsWarrantyDescription": ["Manufacturers Limited Warranty:5 Year"],
    "Model": ["TEG-PCITXR"],
    "MPN": ["TEG-PCITXR"],
    "NumberOfItems": ["1"],
    "OperatingSystem": ["Windows 2000"],
    "PackageDimensions": [{
      "Height": [{
        "_": "130",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "740",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "35",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "530",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["TEG-PCITXR"],
    "Platform": ["Windows"],
    "ProductGroup": ["CE"],
    "ProductTypeName": ["NETWORKING_DEVICE"],
    "Publisher": ["TRENDnet"],
    "Size": ["PCI"],
    "Studio": ["TRENDnet"],
    "Title": ["TRENDnet 32-bit 10/100/1000Mbps Copper Gigabit PCI Adapter, Up to 2000Mbps Speed in Full-Duplex, Built-in FIFO (8K/64K) Buffers, TEG-PCITXR"],
    "UPC": ["172302742312"],
    "UPCList": [{
      "UPCListElement": ["172302742312", "710931501704", "013039119346", "777786326722", "047335495378", "191120014517", "151903613917", "956260089227", "060090916186", "071030579422", "069285676911", "132017934914", "523161033620", "012303907078", "071090215360", "731215274831", "611101601425", "803982810205", "763615996853", "710931501438", "840356763392", "001910737284", "635145507420", "521375292659", "710931951431", "731215065811", "792933353536", "898029720197", "012300852944", "168141527432", "031111132960", "021111185912", "069060085631"]
    }],
    "Warranty": ["5 year"]
  }],
  "OfferSummary": [{
    "LowestNewPrice": [{
      "Amount": ["616"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$6.16"]
    }],
    "LowestUsedPrice": [{
      "Amount": ["649"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$6.49"]
    }],
    "TotalNew": ["31"],
    "TotalUsed": ["5"],
    "TotalCollectible": ["0"],
    "TotalRefurbished": ["0"]
  }],
  "Offers": [{
    "TotalOffers": ["2"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["zDuisMAmxry8QAplmjgaIrR1RzygaEToNHM6FnU3o1YgnItqH93cOIJIpHJ9fuyvUp9q9uUhyJ4OTWXBqMoCLh5XLFrM%2BoGbfvcdnyvnB4mQ8KV8KPdEjRwciv%2FFpA8lhAk8MTmV6anyI1quqAAVhQ%3D%3D"],
        "Price": [{
          "Amount": ["616"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$6.16"]
        }],
        "AmountSaved": [{
          "Amount": ["1383"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$13.83"]
        }],
        "PercentageSaved": ["69"],
        "Availability": ["Usually ships in 1-2 business days"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["24"],
          "MaximumHours": ["48"]
        }],
        "IsEligibleForSuperSaverShipping": ["0"],
        "IsEligibleForPrime": ["0"]
      }]
    }, {
      "OfferAttributes": [{
        "Condition": ["Used"]
      }],
      "OfferListing": [{
        "OfferListingId": ["zDuisMAmxry8QAplmjgaIrR1RzygaETo1bYwYIv4U0rIntVwX%2BETkzDk55TW4PhjIAqgyXwg304ows5MIlzsxDX4FQY8Gl4hQIDAqmcOe4%2FnnOcMDiGCOGxQbRNUdhOglVXUAvJmfw8ZiCrdsrDRKg%3D%3D"],
        "Price": [{
          "Amount": ["649"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$6.49"]
        }],
        "AmountSaved": [{
          "Amount": ["1350"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$13.50"]
        }],
        "PercentageSaved": ["68"],
        "Availability": ["Usually ships in 1-2 business days"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["24"],
          "MaximumHours": ["48"]
        }],
        "IsEligibleForSuperSaverShipping": ["0"],
        "IsEligibleForPrime": ["0"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["13983791"],
      "Name": ["USB Network Adapters"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["490499011"],
          "Name": ["Network Adapters"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["172504"],
              "Name": ["Networking Products"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["541966"],
                  "Name": ["Computers & Accessories"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["493964"],
                      "Name": ["Categories"],
                      "IsCategoryRoot": ["1"],
                      "Ancestors": [{
                        "BrowseNode": [{
                          "BrowseNodeId": ["172282"],
                          "Name": ["Electronics"]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      "BrowseNodeId": ["13900871"],
      "Name": ["Computers Features"],
      "Children": [{
        "BrowseNode": [{
          "BrowseNodeId": ["51548011"],
          "Name": ["Featured Categories"]
        }]
      }],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["172282"],
          "Name": ["Electronics"]
        }]
      }]
    }, {
      "BrowseNodeId": ["6115405011"],
      "Name": ["Electronics"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["194046011"],
          "Name": ["Products"],
          "IsCategoryRoot": ["1"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["194045011"]
            }]
          }]
        }]
      }]
    }]
  }]
}]



[{
  "ASIN": ["B00023433U"],
  "ParentASIN": ["B073R52Y2H"],
  "DetailPageURL": ["https://www.amazon.com/TRENDnet-1000Mbps-2000Mbps-Full-Duplex-TEG-PCITXR/dp/B00023433U?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00023433U"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/TRENDnet-1000Mbps-2000Mbps-Full-Duplex-TEG-PCITXR/dp/tech-data/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B00023433U&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B00023433U&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B00023433U&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Personal Computers"],
    "Brand": ["TRENDnet"],
    "CatalogNumberList": [{
      "CatalogNumberListElement": ["C67654", "EP5173981", "TEGPCITXR", "99041H", "TRE-TEG-PCITXR", "IGC67654", "575072", "TEG-PCITXR", "710931501438", "11.1", "46340K", "ASC859221AIN02"]
    }],
    "Color": ["Gigabit"],
    "EAN": ["5147841700203"],
    "EANList": [{
      "EANListElement": ["5147841700203", "0047335495378", "0521375292659", "0001910737284", "5052181005140", "7487485803518", "0710931501704", "5554442392216", "6213759714669", "0898029720197", "0840356763392", "0731215065811", "7044447844271", "0172302742312", "0792933353536", "0071090215360", "7109315014382", "5399998119326", "0013039119346", "0777786326722", "5554442338528", "0031111132960", "0956260089227", "0012300852944", "0060090916186", "0611101601425", "0710931501438", "7123290478403", "0731215274831", "0635145507420", "0191120014517", "0523161033620", "0168141527432", "5024123784642", "4054318510139", "0803982810205", "7487485912036", "5399998010807", "5554442237876", "0710931951431", "7487485654622", "0021111185912", "0069060085631", "0012303907078", "0151903613917", "5596692064826", "5024123733732", "0763615996853", "7744771064337", "0132017934914", "5053313882936", "0071030579422", "0069285676911"]
    }],
    "Feature": ["Support 32-Bit PCI Local Bus Master high-speed operation of Rev. 2.3 specification", "1 x 10/100/1000Mbps Auto Negotiation and Auto MDI-X Gigabit Port", "Built-in FIFO (8K/64K) buffers reduce overhead of memory transfers", "Supports Full-Duplex Mode Doubles Network Data Rate to 20/200/2000Mbp", "Supports IEEE 802.1Q VLAN Tagging (Windows 2000 and above only)"],
    "HardwarePlatform": ["CONSUMER_ELECTRONICS"],
    "IsAutographed": ["0"],
    "IsMemorabilia": ["0"],
    "ItemDimensions": [{
      "Height": [{
        "_": "230",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "470",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "35",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "60",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["TRENDnet"],
    "Languages": [{
      "Language": [{
        "Name": ["English"],
        "Type": ["Original Language"]
      }]
    }],
    "LegalDisclaimer": ["Please be advise you must be a computer electrition to install this item"],
    "ListPrice": [{
      "Amount": ["1999"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$19.99"]
    }],
    "Manufacturer": ["TRENDnet"],
    "ManufacturerPartsWarrantyDescription": ["Manufacturers Limited Warranty:5 Year"],
    "Model": ["TEG-PCITXR"],
    "MPN": ["TEG-PCITXR"],
    "NumberOfItems": ["1"],
    "OperatingSystem": ["Windows 2000"],
    "PackageDimensions": [{
      "Height": [{
        "_": "130",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "740",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "35",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "530",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["TEG-PCITXR"],
    "Platform": ["Windows"],
    "ProductGroup": ["CE"],
    "ProductTypeName": ["NETWORKING_DEVICE"],
    "Publisher": ["TRENDnet"],
    "Size": ["PCI"],
    "Studio": ["TRENDnet"],
    "Title": ["TRENDnet 32-bit 10/100/1000Mbps Copper Gigabit PCI Adapter, Up to 2000Mbps Speed in Full-Duplex, Built-in FIFO (8K/64K) Buffers, TEG-PCITXR"],
    "UPC": ["172302742312"],
    "UPCList": [{
      "UPCListElement": ["172302742312", "710931501704", "013039119346", "777786326722", "047335495378", "191120014517", "151903613917", "956260089227", "060090916186", "071030579422", "069285676911", "132017934914", "523161033620", "012303907078", "071090215360", "731215274831", "611101601425", "803982810205", "763615996853", "710931501438", "840356763392", "001910737284", "635145507420", "521375292659", "710931951431", "731215065811", "792933353536", "898029720197", "012300852944", "168141527432", "031111132960", "021111185912", "069060085631"]
    }],
    "Warranty": ["5 year"]
  }],
  "Offers": [{
    "TotalOffers": ["2"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["kRJOOHxPMDE7%2B8yztZ2xi1iTXdSH6rVNw0%2BWqmo05w3aCOi7DVPaXzHBsSXgHrJ3c8Acsbs1Lv695kk16AOO09iqw2mt7guZrxi9WX7aM%2B3poyvdgSBD8o2Dp%2FwdwA1Y3bJsgeCXChn89GBMB6fsJA%3D%3D"],
        "Price": [{
          "Amount": ["616"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$6.16"]
        }],
        "AmountSaved": [{
          "Amount": ["1383"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$13.83"]
        }],
        "PercentageSaved": ["69"],
        "Availability": ["Usually ships in 1-2 business days"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["24"],
          "MaximumHours": ["48"]
        }],
        "IsEligibleForSuperSaverShipping": ["0"],
        "IsEligibleForPrime": ["0"]
      }]
    }, {
      "OfferAttributes": [{
        "Condition": ["Used"]
      }],
      "OfferListing": [{
        "OfferListingId": ["kRJOOHxPMDE7%2B8yztZ2xi1iTXdSH6rVND8Da8I2XfZx%2Bk3ix%2Bi1kgPsIB1FOOLy5FzjnKlbiWpur3Mwjh4M3hc5DgIfpcvOCvmqDd0yIlFqx3bpAvM2yh0TsZJieHPBfo9QG%2BOwjkdqkWNIetoLhpg%3D%3D"],
        "Price": [{
          "Amount": ["649"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$6.49"]
        }],
        "AmountSaved": [{
          "Amount": ["1350"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$13.50"]
        }],
        "PercentageSaved": ["68"],
        "Availability": ["Usually ships in 1-2 business days"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["24"],
          "MaximumHours": ["48"]
        }],
        "IsEligibleForSuperSaverShipping": ["0"],
        "IsEligibleForPrime": ["0"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["13983791"],
      "Name": ["USB Network Adapters"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["490499011"],
          "Name": ["Network Adapters"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["172504"],
              "Name": ["Networking Products"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["541966"],
                  "Name": ["Computers & Accessories"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["493964"],
                      "Name": ["Categories"],
                      "IsCategoryRoot": ["1"],
                      "Ancestors": [{
                        "BrowseNode": [{
                          "BrowseNodeId": ["172282"],
                          "Name": ["Electronics"]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      "BrowseNodeId": ["13900871"],
      "Name": ["Computers Features"],
      "Children": [{
        "BrowseNode": [{
          "BrowseNodeId": ["51548011"],
          "Name": ["Featured Categories"]
        }]
      }],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["172282"],
          "Name": ["Electronics"]
        }]
      }]
    }, {
      "BrowseNodeId": ["6115405011"],
      "Name": ["Electronics"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["194046011"],
          "Name": ["Products"],
          "IsCategoryRoot": ["1"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["194045011"]
            }]
          }]
        }]
      }]
    }]
  }]
}]


[{
  "ASIN": ["B00023433U"],
  "ParentASIN": ["B073R52Y2H"],
  "DetailPageURL": ["https://www.amazon.com/TRENDnet-1000Mbps-2000Mbps-Full-Duplex-TEG-PCITXR/dp/B00023433U?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00023433U"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/TRENDnet-1000Mbps-2000Mbps-Full-Duplex-TEG-PCITXR/dp/tech-data/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B00023433U&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B00023433U&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B00023433U&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Personal Computers"],
    "Brand": ["TRENDnet"],
    "CatalogNumberList": [{
      "CatalogNumberListElement": ["C67654", "EP5173981", "TEGPCITXR", "99041H", "TRE-TEG-PCITXR", "IGC67654", "575072", "TEG-PCITXR", "710931501438", "11.1", "46340K", "ASC859221AIN02"]
    }],
    "Color": ["Gigabit"],
    "EAN": ["5147841700203"],
    "EANList": [{
      "EANListElement": ["5147841700203", "0047335495378", "0521375292659", "0001910737284", "5052181005140", "7487485803518", "0710931501704", "5554442392216", "6213759714669", "0898029720197", "0840356763392", "0731215065811", "7044447844271", "0172302742312", "0792933353536", "0071090215360", "7109315014382", "5399998119326", "0013039119346", "0777786326722", "5554442338528", "0031111132960", "0956260089227", "0012300852944", "0060090916186", "0611101601425", "0710931501438", "7123290478403", "0731215274831", "0635145507420", "0191120014517", "0523161033620", "0168141527432", "5024123784642", "4054318510139", "0803982810205", "7487485912036", "5399998010807", "5554442237876", "0710931951431", "7487485654622", "0021111185912", "0069060085631", "0012303907078", "0151903613917", "5596692064826", "5024123733732", "0763615996853", "7744771064337", "0132017934914", "5053313882936", "0071030579422", "0069285676911"]
    }],
    "Feature": ["Support 32-Bit PCI Local Bus Master high-speed operation of Rev. 2.3 specification", "1 x 10/100/1000Mbps Auto Negotiation and Auto MDI-X Gigabit Port", "Built-in FIFO (8K/64K) buffers reduce overhead of memory transfers", "Supports Full-Duplex Mode Doubles Network Data Rate to 20/200/2000Mbp", "Supports IEEE 802.1Q VLAN Tagging (Windows 2000 and above only)"],
    "HardwarePlatform": ["CONSUMER_ELECTRONICS"],
    "IsAutographed": ["0"],
    "IsMemorabilia": ["0"],
    "ItemDimensions": [{
      "Height": [{
        "_": "230",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "470",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "35",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "60",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["TRENDnet"],
    "Languages": [{
      "Language": [{
        "Name": ["English"],
        "Type": ["Original Language"]
      }]
    }],
    "LegalDisclaimer": ["Please be advise you must be a computer electrition to install this item"],
    "ListPrice": [{
      "Amount": ["1999"],
      "CurrencFormattedPriceyCode": ["USD"],
      "FormattedPrice": ["$19.99"]
    }],
    "Manufacturer": ["TRENDnet"],
    "ManufacturerPartsWarrantyDescription": ["Manufacturers Limited Warranty:5 Year"],
    "Model": ["TEG-PCITXR"],
    "MPN": ["TEG-PCITXR"],
    "NumberOfIFormattedPricetems": ["1"],
    "OperatingSystem": ["Windows 2000"],
    "PackageDimensions": [{
      "Height": [{
        "_": "130",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "740",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "35",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "530",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["TEG-PCITXR"],
    "Platform": ["Windows"],
    "ProductGroup": ["CE"],
    "ProductTypeName": ["NETWORKING_DEVICE"],
    "Publisher": ["TRENDnet"],
    "Size": ["PCI"],
    "Studio": ["TRENDnet"],
    "Title": ["TRENDnet 32-bit 10/100/1000Mbps Copper Gigabit PCI Adapter, Up to 2000Mbps Speed in Full-Duplex, Built-in FIFO (8K/64K) Buffers, TEG-PCITXR"],
    "UPC": ["172302742312"],
    "UPCList": [{
      "UPCListElement": ["172302742312", "710931501704", "013039119346", "777786326722", "047335495378", "191120014517", "151903613917", "956260089227", "060090916186", "071030579422", "069285676911", "132017934914", "523161033620", "012303907078", "071090215360", "731215274831", "611101601425", "803982810205", "763615996853", "710931501438", "840356763392", "001910737284", "635145507420", "521375292659", "710931951431", "731215065811", "792933353536", "898029720197", "012300852944", "168141527432", "031111132960", "021111185912", "069060085631"]
    }],
    "Warranty": ["5 year"]
  }],
  "Offers": [{
    "TotalOffers": ["1"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B00023433U?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B00023433U"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["iHPgotAr9y9JYBHBOYnLRvrxM4DJbRlXGXnRYQBR95B%2FMMpuqtlUZD2Y65%2BimO%2FLR5eUOTXyWD%2F4pJztDw%2BZuJrTeSmh5H%2Bb80asBZXXbhQ%3D"],
        "Price": [{
          "Amount": ["1300"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$13.00"]
        }],
        "AmountSaved": [{
          "Amount": ["699"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$6.99"]
        }],
        "PercentageSaved": ["35"],
        "Availability": ["Usually ships in 24 hours"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["0"],
          "MaximumHours": ["0"]
        }],
        "IsEligibleForSuperSaverShipping": ["1"],
        "IsEligibleForPrime": ["1"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["13983791"],
      "Name": ["USB Network Adapters"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["490499011"],
          "Name": ["Network Adapters"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["172504"],
              "Name": ["Networking Products"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["541966"],
                  "Name": ["Computers & Accessories"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["493964"],
                      "Name": ["Categories"],
                      "IsCategoryRoot": ["1"],
                      "Ancestors": [{
                        "BrowseNode": [{
                          "BrowseNodeId": ["172282"],
                          "Name": ["Electronics"]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      "BrowseNodeId": ["13900871"],
      "Name": ["Computers Features"],
      "Children": [{
        "BrowseNode": [{
          "BrowseNodeId": ["51548011"],
          "Name": ["Featured Categories"]
        }]
      }],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["172282"],
          "Name": ["Electronics"]
        }]
      }]
    }, {
      "BrowseNodeId": ["6115405011"],
      "Name": ["Electronics"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["194046011"],
          "Name": ["Products"],
          "IsCategoryRoot": ["1"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["194045011"]
            }]
          }]
        }]
      }]
    }]
  }]
}]


[{
  "ASIN": ["B071G29939"],
  "ParentASIN": ["B06Y3KFJZT"],
  "DetailPageURL": ["https://www.amazon.com/ANEWISH-Adapter-802-11ac-Wireless-10-6-10-12-4/dp/B071G29939?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B071G29939"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/ANEWISH-Adapter-802-11ac-Wireless-10-6-10-12-4/dp/tech-data/B071G29939?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B071G29939&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B071G29939&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B071G29939&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B071G29939?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B071G29939?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B071G29939?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Electronics"],
    "Brand": ["ANEWISH"],
    "Color": ["600M-3dBi"],
    "Feature": ["★ Newest wifi technology: 802.11ac, the latest & most powerful Wi-Fi technology - 3 times faster than wireless N speeds. Ideal for gaming online and seamless HD video streaming", "★ Ultra-fast speed: Up to 600Mbps Wi-Fi speeds on 5.8GHz (433Mbps) and 2.4GHz (150Mbps) bands, work with any wifi routers", "★ 3dBi external antenna: Detachable 3dBi omni-directional dual band antenna for increased speed, coverage, stability and better connections to more Wi-Fi devices", "★ Compatibility: No drivers required for Windows 10, Just plug and play! Compatible with Windows 10/8.1/8/7/XP/Vista, Mac OS X 10.6-10.12.4 Driver link: https://goo.gl/MjxijV", "★ Warranty and After-sale Support: We provide 2 years refund or replacement, lifetime technical support. Sending email to postmaster@xciptv.com if any questions"],
    "Label": ["ANEWISH"],
    "ListPrice": [{
      "Amount": ["3599"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$35.99"]
    }],
    "Manufacturer": ["ANEWISH"],
    "Model": ["600M-3dbi"],
    "OperatingSystem": ["Windows XP"],
    "PackageDimensions": [{
      "Height": [{
        "_": "75",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "587",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Width": [{
        "_": "450",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "ProductGroup": ["Wireless"],
    "ProductTypeName": ["NETWORKING_DEVICE"],
    "Publisher": ["ANEWISH"],
    "Studio": ["ANEWISH"],
    "Title": ["ANEWISH Wifi Adapter 600Mbps 802.11ac 3dBi Dual Band (5.8G / 2.4G ) Network Card Wireless Adapter for PC Desktop Laptop, Support Windows 10/8.1/8/7/XP/Vista, Mac OS X 10.6-10.12.4"]
  }],
  "Offers": [{
    "TotalOffers": ["2"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B071G29939?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["%2B0hnyDrbJ2%2FRXSXmV5g8sM%2FOOQ0UqSkgdRzJgxVo1unmEH5fdirCUk4YSAvmnu0XuPrk1C3%2FyhydRyDa1aUcAxF59a3EjUn8SFd1HjMmcWRJn3R8qUOsbLne14rZ3BKN7u46dm8VHJZaNOEl2rQhtW4Eyf2M0yQr"],
        "Price": [{
          "Amount": ["3599"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$35.99"]
        }],
        "SalePrice": [{
          "Amount": ["1499"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$14.99"]
        }],
        "AmountSaved": [{
          "Amount": ["2100"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$21.00"]
        }],
        "PercentageSaved": ["58"],
        "Availability": ["Usually ships in 24 hours"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["0"],
          "MaximumHours": ["0"]
        }],
        "IsEligibleForSuperSaverShipping": ["1"],
        "IsEligibleForPrime": ["1"]
      }]
    }, {
      "OfferAttributes": [{
        "Condition": ["Used"]
      }],
      "OfferListing": [{
        "OfferListingId": ["%2B0hnyDrbJ2%2FRXSXmV5g8sM%2FOOQ0UqSkgdRzJgxVo1unmEH5fdirCUk4YSAvmnu0XuPrk1C3%2FyhwgbcWWbCTNEQdZi%2B356xGVcckPl0EgFqqd1TFnoCvdL2Jf%2BHyViM3UIBjn75gVYOafOhic3huVoOEx%2Fz7b0PZ%2B"],
        "Price": [{
          "Amount": ["999"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$9.99"]
        }],
        "AmountSaved": [{
          "Amount": ["2600"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$26.00"]
        }],
        "PercentageSaved": ["72"],
        "Availability": ["Usually ships in 1-2 business days"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["24"],
          "MaximumHours": ["48"]
        }],
        "IsEligibleForSuperSaverShipping": ["0"],
        "IsEligibleForPrime": ["0"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["3015425011"],
      "Name": ["Serial Port Cards"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["3012291011"],
          "Name": ["I/O Port Cards"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["193870011"],
              "Name": ["Computer Components"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["541966"],
                  "Name": ["Computers & Accessories"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["493964"],
                      "Name": ["Categories"],
                      "IsCategoryRoot": ["1"],
                      "Ancestors": [{
                        "BrowseNode": [{
                          "BrowseNodeId": ["172282"],
                          "Name": ["Electronics"]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
}]
2017 - 08 - 11 T10: 44: 36.980394 + 00: 00 app[web .1]: [{
  "ASIN": ["B071G29939"],
  "ParentASIN": ["B06Y3KFJZT"],
  "DetailPageURL": ["https://www.amazon.com/ANEWISH-Adapter-802-11ac-Wireless-10-6-10-12-4/dp/B071G29939?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B071G29939"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/ANEWISH-Adapter-802-11ac-Wireless-10-6-10-12-4/dp/tech-data/B071G29939?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B071G29939&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B071G29939&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B071G29939&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B071G29939?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B071G29939?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B071G29939?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Electronics"],
    "Brand": ["ANEWISH"],
    "Color": ["600M-3dBi"],
    "Feature": ["★ Newest wifi technology: 802.11ac, the latest & most powerful Wi-Fi technology - 3 times faster than wireless N speeds. Ideal for gaming online and seamless HD video streaming", "★ Ultra-fast speed: Up to 600Mbps Wi-Fi speeds on 5.8GHz (433Mbps) and 2.4GHz (150Mbps) bands, work with any wifi routers", "★ 3dBi external antenna: Detachable 3dBi omni-directional dual band antenna for increased speed, coverage, stability and better connections to more Wi-Fi devices", "★ Compatibility: No drivers required for Windows 10, Just plug and play! Compatible with Windows 10/8.1/8/7/XP/Vista, Mac OS X 10.6-10.12.4 Driver link: https://goo.gl/MjxijV", "★ Warranty and After-sale Support: We provide 2 years refund or replacement, lifetime technical support. Sending email to postmaster@xciptv.com if any questions"],
    "Label": ["ANEWISH"],
    "ListPrice": [{
      "Amount": ["3599"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$35.99"]
    }],
    "Manufacturer": ["ANEWISH"],
    "Model": ["600M-3dbi"],
    "OperatingSystem": ["Windows XP"],
    "PackageDimensions": [{
      "Height": [{
        "_": "75",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "587",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Width": [{
        "_": "450",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "ProductGroup": ["Wireless"],
    "ProductTypeName": ["NETWORKING_DEVICE"],
    "Publisher": ["ANEWISH"],
    "Studio": ["ANEWISH"],
    "Title": ["ANEWISH Wifi Adapter 600Mbps 802.11ac 3dBi Dual Band (5.8G / 2.4G ) Network Card Wireless Adapter for PC Desktop Laptop, Support Windows 10/8.1/8/7/XP/Vista, Mac OS X 10.6-10.12.4"]
  }],
  "Offers": [{
    "TotalOffers": ["2"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B071G29939?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B071G29939"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["%2B0hnyDrbJ2%2FRXSXmV5g8sM%2FOOQ0UqSkgdRzJgxVo1unmEH5fdirCUk4YSAvmnu0XuPrk1C3%2FyhydRyDa1aUcAxF59a3EjUn8SFd1HjMmcWRJn3R8qUOsbLne14rZ3BKN7u46dm8VHJZaNOEl2rQhtW4Eyf2M0yQr"],
        "Price": [{
          "Amount": ["3599"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$35.99"]
        }],
        "SalePrice": [{
          "Amount": ["1499"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$14.99"]
        }],
        "AmountSaved": [{
          "Amount": ["2100"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$21.00"]
        }],
        "PercentageSaved": ["58"],
        "Availability": ["Usually ships in 24 hours"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["0"],
          "MaximumHours": ["0"]
        }],
        "IsEligibleForSuperSaverShipping": ["1"],
        "IsEligibleForPrime": ["1"]
      }]
    }, {
      "OfferAttributes": [{
        "Condition": ["Used"]
      }],
      "OfferListing": [{
        "OfferListingId": ["%2B0hnyDrbJ2%2FRXSXmV5g8sM%2FOOQ0UqSkgdRzJgxVo1unmEH5fdirCUk4YSAvmnu0XuPrk1C3%2FyhwgbcWWbCTNEQdZi%2B356xGVcckPl0EgFqqd1TFnoCvdL2Jf%2BHyViM3UIBjn75gVYOafOhic3huVoOEx%2Fz7b0PZ%2B"],
        "Price": [{
          "Amount": ["999"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$9.99"]
        }],
        "AmountSaved": [{
          "Amount": ["2600"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$26.00"]
        }],
        "PercentageSaved": ["72"],
        "Availability": ["Usually ships in 1-2 business days"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["24"],
          "MaximumHours": ["48"]
        }],
        "IsEligibleForSuperSaverShipping": ["0"],
        "IsEligibleForPrime": ["0"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["3015425011"],
      "Name": ["Serial Port Cards"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["3012291011"],
          "Name": ["I/O Port Cards"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["193870011"],
              "Name": ["Computer Components"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["541966"],
                  "Name": ["Computers & Accessories"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["493964"],
                      "Name": ["Categories"],
                      "IsCategoryRoot": ["1"],
                      "Ancestors": [{
                        "BrowseNode": [{
                          "BrowseNodeId": ["172282"],
                          "Name": ["Electronics"]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
}]


[{
  "ASIN": ["B004AQV4GE"],
  "ParentASIN": ["B071X9VWX5"],
  "DetailPageURL": ["https://www.amazon.com/Womens-Season-Cross-Training-Stealth/dp/B004AQV4GE?psc=1&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004AQV4GE"],
  "ItemLinks": [{
    "ItemLink": [{
      "Description": ["Technical Details"],
      "URL": ["https://www.amazon.com/Womens-Season-Cross-Training-Stealth/dp/tech-data/B004AQV4GE?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B004AQV4GE"]
    }, {
      "Description": ["Add To Baby Registry"],
      "URL": ["https://www.amazon.com/gp/registry/baby/add-item.html?asin.0=B004AQV4GE&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B004AQV4GE"]
    }, {
      "Description": ["Add To Wedding Registry"],
      "URL": ["https://www.amazon.com/gp/registry/wedding/add-item.html?asin.0=B004AQV4GE&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B004AQV4GE"]
    }, {
      "Description": ["Add To Wishlist"],
      "URL": ["https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B004AQV4GE&SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B004AQV4GE"]
    }, {
      "Description": ["Tell A Friend"],
      "URL": ["https://www.amazon.com/gp/pdp/taf/B004AQV4GE?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B004AQV4GE"]
    }, {
      "Description": ["All Customer Reviews"],
      "URL": ["https://www.amazon.com/review/product/B004AQV4GE?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B004AQV4GE"]
    }, {
      "Description": ["All Offers"],
      "URL": ["https://www.amazon.com/gp/offer-listing/B004AQV4GE?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B004AQV4GE"]
    }]
  }],
  "ItemAttributes": [{
    "Binding": ["Shoes"],
    "Brand": ["NIKE"],
    "ClothingSize": ["8.5 B(M) US"],
    "Color": ["Black/White/Stealth/Cool Grey"],
    "Department": ["womens"],
    "EAN": ["0675911912492"],
    "EANList": [{
      "EANListElement": ["0675911912492"]
    }],
    "Feature": ["Internal strap delivers support for multidirectional movement", "Dual-density foam midsole enhances comfort and durability", "Engineered mesh upper provides zonal support and breathability", "Cushioned, molded collar offers a locked-down fit", "Rubber outsole pods provide grip and durability"],
    "ItemDimensions": [{
      "Height": [{
        "_": "500",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "1600",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "75",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "700",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "Label": ["NIKE"],
    "ListPrice": [{
      "Amount": ["7500"],
      "CurrencyCode": ["USD"],
      "FormattedPrice": ["$75.00"]
    }],
    "Manufacturer": ["NIKE"],
    "Model": ["852449-001"],
    "MPN": ["852449-001"],
    "PackageDimensions": [{
      "Height": [{
        "_": "450",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Length": [{
        "_": "1310",
        "$": {
          "Units": "hundredths-inches"
        }
      }],
      "Weight": [{
        "_": "135",
        "$": {
          "Units": "hundredths-pounds"
        }
      }],
      "Width": [{
        "_": "810",
        "$": {
          "Units": "hundredths-inches"
        }
      }]
    }],
    "PackageQuantity": ["1"],
    "PartNumber": ["852449-001"],
    "ProductGroup": ["Shoes"],
    "ProductTypeName": ["SHOES"],
    "Publisher": ["NIKE"],
    "Size": ["8.5 B(M) US"],
    "Studio": ["NIKE"],
    "Title": ["Nike Women's In-Season TR 6 Cross Training Shoe, Black/White/Stealth/Cool Grey, 8.5 B(M) US"],
    "UPC": ["675911912492"],
    "UPCList": [{
      "UPCListElement": ["675911912492"]
    }]
  }],
  "Offers": [{
    "TotalOffers": ["1"],
    "TotalOfferPages": ["1"],
    "MoreOffersUrl": ["https://www.amazon.com/gp/offer-listing/B004AQV4GE?SubscriptionId=AKIAIN3EIRW3VGI3UT2Q&tag=tech1&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B004AQV4GE"],
    "Offer": [{
      "OfferAttributes": [{
        "Condition": ["New"]
      }],
      "OfferListing": [{
        "OfferListingId": ["1mLtIDEvwi95nUEgkDt%2BvH4%2FNDD64WJHd3IrB3At33q9pzNxEC1klTC9txM9AeCdQM8K6IOVUXuYBHxCZsvApukW07se1i89I9pRdWu7VN0v%2FCzTviTygp2tx2KgbMJguaCuGKLWy8kq8dGFu%2BUzcw%3D%3D"],
        "Price": [{
          "Amount": ["5988"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$59.88"]
        }],
        "AmountSaved": [{
          "Amount": ["1512"],
          "CurrencyCode": ["USD"],
          "FormattedPrice": ["$15.12"]
        }],
        "PercentageSaved": ["20"],
        "Availability": ["Usually ships in 24 hours"],
        "AvailabilityAttributes": [{
          "AvailabilityType": ["now"],
          "MinimumHours": ["24"],
          "MaximumHours": ["24"]
        }],
        "IsEligibleForSuperSaverShipping": ["0"],
        "IsEligibleForPrime": ["0"]
      }]
    }]
  }],
  "BrowseNodes": [{
    "BrowseNode": [{
      "BrowseNodeId": ["679351011"],
      "Name": ["Fitness & Cross-Training"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["6127771011"],
          "Name": ["Athletic"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["679337011"],
              "Name": ["Shoes"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["7147440011"],
                  "Name": ["Women"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["7141124011"],
                      "Name": ["Departments"],
                      "IsCategoryRoot": ["1"],
                      "Ancestors": [{
                        "BrowseNode": [{
                          "BrowseNodeId": ["7141123011"],
                          "Name": ["Clothing, Shoes & Jewelry"]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      "BrowseNodeId": ["7581668011"],
      "Name": ["Shops"],
      "Children": [{
        "BrowseNode": [{
          "BrowseNodeId": ["11300394011"],
          "Name": ["Contemporary & Designer"]
        }, {
          "BrowseNodeId": ["7581674011"],
          "Name": ["Juniors"]
        }, {
          "BrowseNodeId": ["7581675011"],
          "Name": ["Maternity"]
        }, {
          "BrowseNodeId": ["7581676011"],
          "Name": ["Petite"]
        }, {
          "BrowseNodeId": ["7581677011"],
          "Name": ["Plus-Size"]
        }, {
          "BrowseNodeId": ["7581679011"],
          "Name": ["Uniforms, Work & Safety"]
        }]
      }],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["7147440011"],
          "Name": ["Women"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["7141124011"],
              "Name": ["Departments"],
              "IsCategoryRoot": ["1"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["7141123011"],
                  "Name": ["Clothing, Shoes & Jewelry"]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      "BrowseNodeId": ["679271011"],
      "Name": ["Fitness & Cross-Training"],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["6127770011"],
          "Name": ["Athletic"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["679255011"],
              "Name": ["Shoes"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["7147441011"],
                  "Name": ["Men"],
                  "Ancestors": [{
                    "BrowseNode": [{
                      "BrowseNodeId": ["7141124011"],
                      "Name": ["Departments"],
                      "IsCategoryRoot": ["1"],
                      "Ancestors": [{
                        "BrowseNode": [{
                          "BrowseNodeId": ["7141123011"],
                          "Name": ["Clothing, Shoes & Jewelry"]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      "BrowseNodeId": ["7581669011"],
      "Name": ["Shops"],
      "Children": [{
        "BrowseNode": [{
          "BrowseNodeId": ["11307730011"],
          "Name": ["Contemporary & Designer"]
        }, {
          "BrowseNodeId": ["7581681011"],
          "Name": ["Big & Tall"]
        }, {
          "BrowseNodeId": ["7581682011"],
          "Name": ["Uniforms, Work & Safety"]
        }, {
          "BrowseNodeId": ["9564525011"],
          "Name": ["Surf, Skate & Street"]
        }]
      }],
      "Ancestors": [{
        "BrowseNode": [{
          "BrowseNodeId": ["7147441011"],
          "Name": ["Men"],
          "Ancestors": [{
            "BrowseNode": [{
              "BrowseNodeId": ["7141124011"],
              "Name": ["Departments"],
              "IsCategoryRoot": ["1"],
              "Ancestors": [{
                "BrowseNode": [{
                  "BrowseNodeId": ["7141123011"],
                  "Name": ["Clothing, Shoes & Jewelry"]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
}]



{
  "recipient": {
    "id": "1636276406383043"
  },
  "message": {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "button",
        "text": "Amman Express 3-5 days:45.09",
        "buttons": [{
          "type": "postback",
          "title": "Price Details تفاصيل السعر",
          "payload": {
            "action": "priceDetails",
            "quotationObject": {
              "quotationNumber": 0,
              "quotationDate": "2017-08-13T18:31:32.291Z",
              "item": {
                "category": "Tools, hand tools,cutting machines",
                "title": "Universal Nutrition Animal Cuts 42 packs/New\\n",
                "price": 36.27,
                "shipping": -1,
                "chargableWeight": 0.57,
                "MPN": "230123",
                "height": 4.13,
                "length": 5.59,
                "weight": 0.66,
                "width": 4.13,
                "category_info": {
                  "_id": "5986249758375200114454cf",
                  "category_name": "Tools, hand tools,cutting machines",
                  "category_name_ar": "عدد يدويّة",
                  "customs": 0.15,
                  "tax_aqaba": 0,
                  "tax_amm": 0.16,
                  "margin_amm": 0.09,
                  "margin_aqaba": 0.1,
                  "special_tax": 0,
                  "us_tax": 0,
                  "cap_aqaba": 999,
                  "cap_amm": 999,
                  "min_side_length": 1,
                  "keywords": "hand-tools, power-tools, machinary drill tools screwdriver pliers hammer Cutter saw Die-Cut Machines,Die-Cutting & Embossing,Scrapbooking & Stamping,Arts, Crafts & Sewing",
                  "score": 11.152173913043478
                }
              },
              "priceJD": {
                "ammanExpress": "45.09",
                "ammanStandard": 0,
                "aqabaExpress": 0,
                "aqabaStandard": 0
              },
              "pricingDetils": "Pricing Details",
              "notes": "Notes:/local shipping cost not included in pricechargableWeight/packageDimensions:0.57KG/5.59x4.13x4.13inch\\n price in USD:36.27\\n"
            }
          }
        }, {
          "type": "postback",
          "title": "prices from:45.09",
          "payload": {
            "action": "morePrices",
            "quotationObject": {
              "quotationNumber": 0,
              "quotationDate": "2017-08-13T18:31:32.291Z",
              "item": {
                "category": "Tools, hand tools,cutting machines",
                "title": "Universal Nutrition Animal Cuts 42 packs/New\\n",
                "price": 36.27,
                "shipping": -1,
                "chargableWeight": 0.57,
                "MPN": "230123",
                "height": 4.13,
                "length": 5.59,
                "weight": 0.66,
                "width": 4.13,
                "category_info": {
                  "_id": "5986249758375200114454cf",
                  "category_name": "Tools, hand tools,cutting machines",
                  "category_name_ar": "عدد يدويّة",
                  "customs": 0.15,
                  "tax_aqaba": 0,
                  "tax_amm": 0.16,
                  "margin_amm": 0.09,
                  "margin_aqaba": 0.1,
                  "special_tax": 0,
                  "us_tax": 0,
                  "cap_aqaba": 999,
                  "cap_amm": 999,
                  "min_side_length": 1,
                  "keywords": "hand-tools, power-tools, machinary drill tools screwdriver pliers hammer Cutter saw Die-Cut Machines,Die-Cutting & Embossing,Scrapbooking & Stamping,Arts, Crafts & Sewing",
                  "score": 11.152173913043478
                }
              },
              "priceJD": {
                "ammanExpress": "45.09",
                "ammanStandard": 0,
                "aqabaExpress": 0,
                "aqabaStandard": 0
              },
              "pricingDetils": "Pricing Details",
              "notes": "Notes:/local shipping cost not included in pricechargableWeight/packageDimensions:0.57KG/5.59x4.13x4.13inch\\n price in USD:36.27\\n"
            }
          }
        }]
      }
    }
  }
}

{
  "recipient": {
    "id": "1636276406383043"
  },
  "message": {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "button",
        "text": "Amman Express 3-5 days:52.04",
        "buttons": [{
          "type": "postback",
          "title": "Price Details تفاصيل السعر",
          "payload": "{\\"
          action\\ ":\\"
          getPrDet\\ ",\\"
          quotation\\ ":{\\"
          quotationNumber\\ ":0,\\"
          quotationDate\\ ":\\"
          2017 - 08 - 13 T22: 23: 21.994 Z\\ ",\\"
          item\\ ":{\\"
          category\\ ":\\"
          Tableware,
          kitchenware,
          household articles and toiletries\\ ",\\"
          title\\ ":\\"
          Universal Nutrition Animal Cuts 42 packs / New\\\\ n\\ ",\\"
          price\\ ":36.27,\\"
          shipping\\ ":-1,\\"
          chargableWeight\\ ":0.57,\\"
          MPN\\ ":\\"
          230123\\ ",\\"
          height\\ ":4.13,\\"
          length\\ ":5.59,\\"
          weight\\ ":0.66,\\"
          width\\ ":4.13,\\"
          category_info\\ ":{\\"
          _id\\ ":\\"\\
          ",\\"
          category_name\\ ":\\"
          Tableware,
          kitchenware,
          household articles and toiletries\\ ",\\"
          category_name_ar\\ ":\\"
          أدوات مائدة ومطبخ وأوانى منزلية أخر وأدوات للنظافة والعناية بالصحة\\ ",\\"
          customs\\ ":0.35,\\"
          tax_aqaba\\ ":0,\\"
          tax_amm\\ ":0.16,\\"
          margin_amm\\ ":0.09,\\"
          margin_aqaba\\ ":0.1,\\"
          special_tax\\ ":0,\\"
          us_tax\\ ":0,\\"
          cap_aqaba\\ ":999,\\"
          cap_amm\\ ":999,\\"
          min_side_length\\ ":1,\\"
          keywords\\ ":\\"
          trays dishes cups Tableware,
          kitchenware,
          household toilet dinner china chinet plastic forks cups Home & Kitchen,
          Plates,
          Disposable Plates,
          Bowls,
          Cutlery,
          Paper & Plastic,
          Household Supplies\\ ",\\"
          score\\ ":\\"
          11.13\\ "}},\\"
          price\\ ":{\\"
          amm_exp\\ ":\\"
          52.04\\ ",\\"
          amm_std\\ ":0,\\"
          aq_exp\\ ":0,\\"
          aq_std\\ ":0},\\"
          notes\\ ":\\"
          Notes: /local shipping cost not included in pricechargableWeight/packageDimensions: 0.57 KG / 5.59 x4 .13 x4 .13 inch\\\\ n price in USD: 36.27\\\\ n\\ "}}"
        }, {
          "type": "postback",
          "title": "prices from:52.04",
          "payload": "{ \\"
          action\\ " : \\"
          morePrices\\ ",\\"
          quote_obj\\ " :[object Object]}"
        }]
      }
    }
  }
}

var uri = util.format('http%s://%s%s',
  (useSSL ? 's' : ''), apiBase, path || '/'); // if then else and use path or '/'

"  \nوزن الشحن: <وزن>.  وزن الشحن قد يكون أعلى من وزن القطعة"++
"\n تفاصيل السعر فى ما يلى:" +
"\n  السعر من المصدر:<سعر>$  يتضمن الشحن داخل بلد المصدر وقيمته  <شحن>$" +
"\n الصنف: <صنف>" +
"\n الجمرك فى عمان <عمان جمرك> وضريبة  المبيعات فى عمان  <عمان مبيعات>" +
"\n الجمرك فى العقبة <عقبة جمرك> وضريبة  المبيعات فى العقبة <عقبة مبيعات>" +
"\n السعر يشمل سعر القطعة + الشحن + الجمرك + الضريبة + كل المصاريف " +
"\nالكفالة فى بلد المصدر. للكفالة المحلية الإختيارية أضف %15.0" +
" .نضمن الوصول وغير مكسور إن شاء الله  - سعر القطعة  شامل ومضمون ان لا يتغير - نضمن أفضل الأسعار 	" +


{
  "fbid": "1636276406383043",
  "context": {},
  "fbprofile": {
    "first_name": "Ziad",
    "last_name": "Rida",
    "gender": "male",
    "locale": "en_US",
    "timezone": 3,
    "id": "1636276406383043"
  },
  "newUser": false,
  "userObj": [{
    "_id": "598aba1f5eca3f001180fc47",
    "userId": "1636276406383043",
    "first_name": "Ziad",
    "last_name": "Rida",
    "locale": "ar_US",
    "gender": "male",
    "timezone": 3,
    "role": "user",
    "dateCreated": "2017-08-09T07:30:39.481Z"
  }]
}
