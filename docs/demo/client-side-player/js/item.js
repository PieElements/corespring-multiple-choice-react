var item = {
  "components": [
    {
      "id": "1",
      "component": {
        "name": "corespring-multiple-choice-react",
        "version": "1.0.0"
      },
      "correctResponse" : ["apple", "carrot"],
      "feedback" : {
        "apple" : "$FB_APPLE",
        "banana" : "What are you thinking?",
        "carrot" : "good for your eyes",
        "donut" : "Try not licking your lips"
      },
      "translations" : {
        "default_locale" : "en_US",
        "en_US" : {
          "PROMPT" : "Choose the 2 tastiest things",
          "LABEL_APPLE" : "Apple",
          "LABEL_BANANA" : "Banaa",
          "LABEL_CARROT" : "Carrot",
          "LABEL_DONUT" : "Donut",
          "FB_APPLE" : "Apples are so tasty"
        },
        "es_ES" : {
          "PROMPT" : "Elija las 2 cosas más sabrosas",
          "LABEL_APPLE" : "manzana",
          "LABEL_BANANA" : "plátano",
          "LABEL_CARROT" : "zanahoria",
          "LABEL_DONUT" : "buñuelo",
          "FB_APPLE" : "Las manzanas son tan sabroso"
        }
      },
      "model": {
        "prompt": "Choose the 2 tastiest things",
        "choiceMode": "checkbox",
        "keyMode": "numbers",
        "disabled": false,
        "choices": [
          {
            "label": "Apple",
            "value": "apple"
          },
          {
            "label": "Banana",
            "value": "banana"
          },
          {
            "label": "Carrot",
            "value": "carrot"
          },
          {
            "label": "Donut",
            "value": "donut"
          }
        ]
      }
    }
  ]
};