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
                    "name": "Heading",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Description",
                    "alias": "description",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                },
                {
                    "name": "Contact Number",
                    "alias": "contactNumber",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Email",
                    "alias": "email",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Working Days Detail",
                    "alias": "workingDaysDetail",
                    "propretyType": {},
                    "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
                }
            ],
            "renderInGrid": "1",
            "frontView": ""
        }
    },
    {
        "name": "Multiple Link Section",
        "alias": "multipleLinkSection",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-anchor color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Add Link",
                    "alias": "addLink",
                    "propretyType": {},
                    "dataType": "8d39ede6-f728-46b6-9729-8b6ed7e485de"
                },
                {
                    "name": "linkimage",
                    "alias": "linkimage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
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
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
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
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
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
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
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
        "name": "Text with Single Large Image",
        "alias": "textWithSingleLargeImage",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-pictures-alt-2 color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Large Image",
                    "alias": "largeImage",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5",
                    "description": "635 × 291"
                },
                {
                    "name": "Large Image Alt",
                    "alias": "largeImageAlt",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Large Image Caption",
                    "alias": "largeImageCaption",
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
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
                },
                {
                    "name": "Large Image Alt",
                    "alias": "largeImageAlt",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Large Image Caption",
                    "alias": "largeImageCaption",
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
        "icon": "icon-settings-alt",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Multiple Link",
                    "alias": "multipleLink",
                    "propretyType": {},
                    "dataType": "8d39ede6-f728-46b6-9729-8b6ed7e485de"
                },
                {
                    "name": "Image Upload",
                    "alias": "imageUpload",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
                }
            ],
            "frontView": ""
        }
    }
]