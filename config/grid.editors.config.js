[
    {
        "name": "Rich text editor",
        "alias": "rte",
        "view": "rte",
        "icon": "icon-article"
    },
    {
        "name": "Image",
        "alias": "media",
        "view": "media",
        "icon": "icon-picture"
    },
    {
        "name": "Macro",
        "alias": "macro",
        "view": "macro",
        "icon": "icon-settings-alt"
    },
    {
        "name": "Embed",
        "alias": "embed",
        "view": "embed",
        "icon": "icon-movie-alt"
    },
    {
        "name": "Headline",
        "alias": "headline",
        "view": "textstring",
        "icon": "icon-coin",
        "config": {
            "style": "font-size: 36px; line-height: 45px; font-weight: bold",
            "markup": "<h1>#value#</h1>"
        }
    },
    {
        "name": "Quote",
        "alias": "quote",
        "view": "textstring",
        "icon": "icon-quote",
        "config": {
            "style": "border-left: 3px solid #ccc; padding: 10px; color: #ccc; font-family: serif; font-style: italic; font-size: 18px",
            "markup": "<blockquote>#value#</blockquote>"
        }
    },
    {
        "name": "Text Editor",
        "alias": "textEditor",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-layout color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Text",
                    "alias": "text",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                }
            ],
            "renderInGrid": "1",
            "frontView": ""
        }
    },
    {
        "name": "Inset Image",
        "alias": "insetImageSection",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-umb-media color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Image",
                    "alias": "image",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5",
                    "description": "308 × 249"
                },
                {
                    "name": "Image Alt",
                    "alias": "imageAlt",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Image Caption",
                    "alias": "imageCaption",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Text",
                    "alias": "text",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                }
            ],
            "renderInGrid": "1",
            "frontView": "",
            "min": 1,
            "max": 5,
            "expiration": 120
        }
    },
    {
        "name": "Accordion",
        "alias": "accordion",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-right-double-arrow color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Add New Accordion",
                    "alias": "addNewAccordion",
                    "propretyType": {},
                    "dataType": "862fcc48-503c-49e4-b04f-a12366c4b853"
                }
            ],
            "renderInGrid": "1",
            "frontView": "",
            "min": 0,
            "max": 1,
            "expiration": 120
        }
    },
    {
        "name": "Accordion Contact",
        "alias": "accordionContact",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-old-phone color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Accordion Contact",
                    "alias": "accordionContact",
                    "propretyType": {},
                    "dataType": "17f7bebc-53d1-4c40-afc8-c23c26fce67b"
                }
            ],
            "renderInGrid": "1",
            "frontView": ""
        }
    },
    {
        "name": "Body Text",
        "alias": "bodyText",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-notepad color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Body Text",
                    "alias": "bodyText",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 5,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Bullet point style",
        "alias": "bulletPointStyle",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-bulleted-list color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Text Editor",
                    "alias": "textEditor",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 5,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Two Column Text Area",
        "alias": "twoColumnTextArea",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-columns color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Right Text",
                    "alias": "rightText",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                },
                {
                    "name": "Left Text",
                    "alias": "leftText",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 5,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Pull-out Quote",
        "alias": "pullOutQuote",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-quote color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Quote Text",
                    "alias": "quoteText",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                },
                {
                    "name": "Author Name",
                    "alias": "authorName",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 5,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Small Image with Caption",
        "alias": "smallImageWithCaption",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-umb-media color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Small Image",
                    "alias": "smallImage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5",
                    "description": "390 × 248"
                },
                {
                    "name": "Small Image Alt",
                    "alias": "smallImageAlt",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Small Image Caption",
                    "alias": "smallImageCaption",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 5,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Two Column Image with Caption",
        "alias": "twoColumnImageWithCaption",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-umb-media color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Left Image",
                    "alias": "leftImage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5",
                    "description": "308 × 248"
                },
                {
                    "name": "Left Image Alt",
                    "alias": "leftImageAlt",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Left Image Caption",
                    "alias": "leftImageCaption",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Right Image",
                    "alias": "rightImage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5",
                    "description": "308 × 248"
                },
                {
                    "name": "Right Image Alt",
                    "alias": "rightImageAlt",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Right Image Caption",
                    "alias": "rightImageCaption",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 10,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Trustee Accordion",
        "alias": "trusteeAccordion",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-temperatrure-alt color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Trustees Accordion",
                    "alias": "trusteesAccordion",
                    "propretyType": {},
                    "dataType": "8776422d-7756-4138-959f-b0132742e057"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 10,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Text with Double Image",
        "alias": "textWithDoubleImage",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-pictures-alt color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Left Image",
                    "alias": "leftImage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5",
                    "description": "308 × 249"
                },
                {
                    "name": "Left Image Alt",
                    "alias": "leftImageAlt",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Right Image",
                    "alias": "rightImage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5",
                    "description": "308 × 249"
                },
                {
                    "name": "Right Image Alt",
                    "alias": "rightImageAlt",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Text",
                    "alias": "text",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 5,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Single Large Image",
        "alias": "singleLargeImage",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-umb-media color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Large Image",
                    "alias": "largeImage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5",
                    "description": "960 × 436 with side nav width 635 × 290"
                },
                {
                    "name": "Mobile Image",
                    "alias": "mobileImage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5",
                    "description": "(optional)"
                },
                {
                    "name": "Image Caption",
                    "alias": "largeImageCaption",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Image Alt",
                    "alias": "largeImageAlt",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 5,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Multiple link File Upload",
        "alias": "multipleLinkFileUpload",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-cloud-upload color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Multiple Link And Files Upload",
                    "alias": "multipleLinkAndFilesUpload",
                    "propretyType": {},
                    "dataType": "e9d9723e-b8de-4276-8656-21068ecbef37"
                }
            ],
            "frontView": "",
            "renderInGrid": "1"
        }
    },
    {
        "name": "Video Section",
        "alias": "videoSection",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-video color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Video Embedded Code",
                    "alias": "videoEmbeddedCode",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Video Caption",
                    "alias": "videoCaption",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                }
            ],
            "renderInGrid": "1",
            "min": 0,
            "max": 20,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Two Column Table",
        "alias": "twoColumnTable",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-grid color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Main Heading",
                    "alias": "mainHeading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Two Column text",
                    "alias": "twoColumnText",
                    "propretyType": {},
                    "dataType": "e4e64b4a-5e25-4484-837c-bd52b84672ae"
                },
                {
                    "name": "Show Line Styling",
                    "alias": "isTableLines",
                    "propretyType": {},
                    "dataType": "92897bc6-a5f3-4ffe-ae27-f2e7e33dda49"
                }
            ],
            "renderInGrid": "1",
            "min": 1,
            "max": 5,
            "expiration": 120,
            "frontView": ""
        }
    },
    {
        "name": "Sign-up form",
        "alias": "signUpForm",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-settings-alt",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Heading and intro text",
                    "alias": "headingAndIntroText",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                },
                {
                    "name": "Form heading",
                    "alias": "formHeading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                }
            ],
            "renderInGrid": "1",
            "frontView": ""
        }
    }
]