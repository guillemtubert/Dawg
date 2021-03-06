const dogs = [
    {
      "dogName": "Fuller",
      "email": "fuller@fullermail.com",
      "password": "51bb7958-2192-4e2b-8368-3f3760b27b4b",
      "age": 9,
      "phoneNumber": "(905) 567-3872",
      "breed": "springer",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "otterhound",
        "ageMin": 6,
        "ageMax": 12
      }
    },
    {
      "dogName": "Clay",
      "email": "clay@claymail.com",
      "password": "f80fb75b-6fba-4bd0-9114-659145e85c16",
      "age": 18,
      "phoneNumber": "(870) 411-3479",
      "breed": "ridgeback",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "keeshond",
        "ageMin": 6,
        "ageMax": 6
      }
    },
    {
      "dogName": "Martin",
      "email": "martin@martinmail.com",
      "password": "b83a3304-783c-4996-823e-95dadbef0800",
      "age": 17,
      "phoneNumber": "(892) 566-2340",
      "breed": "basenji",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "chihuahua",
        "ageMin": 19,
        "ageMax": 16
      }
    },
    {
      "dogName": "Park",
      "email": "park@parkmail.com",
      "password": "521a354f-6beb-42b8-9f50-570ee49e12ee",
      "age": 12,
      "phoneNumber": "(849) 484-3212",
      "breed": "cattledog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "schnauzer",
        "ageMin": 12,
        "ageMax": 2
      }
    },
    {
      "dogName": "Camacho",
      "email": "camacho@camachomail.com",
      "password": "2540b9ac-b45f-4744-94f5-ecb22c7d71f0",
      "age": 5,
      "phoneNumber": "(854) 484-2888",
      "breed": "otterhound",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "greyhound",
        "ageMin": 10,
        "ageMax": 10
      }
    },
    {
      "dogName": "Bridgette",
      "email": "bridgette@bridgettemail.com",
      "password": "e53033e1-8435-46fa-a96e-9229572c6573",
      "age": 18,
      "phoneNumber": "(911) 554-3753",
      "breed": "vizsla",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "basenji",
        "ageMin": 3,
        "ageMax": 7
      }
    },
    {
      "dogName": "Vinson",
      "email": "vinson@vinsonmail.com",
      "password": "7d864c7f-e175-422b-8e71-cbbe1c311c35",
      "age": 10,
      "phoneNumber": "(992) 433-3368",
      "breed": "dalmatian",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bichon-frise",
        "ageMin": 14,
        "ageMax": 20
      }
    },
    {
      "dogName": "Earnestine",
      "email": "earnestine@earnestinemail.com",
      "password": "f2ee7076-764e-4a49-8de9-14714a7b95bb",
      "age": 20,
      "phoneNumber": "(817) 444-2014",
      "breed": "spaniel",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bluetick",
        "ageMin": 3,
        "ageMax": 12
      }
    },
    {
      "dogName": "Jessie",
      "email": "jessie@jessiemail.com",
      "password": "8c4d4fbe-b59e-49d4-b292-eb7109800471",
      "age": 20,
      "phoneNumber": "(834) 423-3855",
      "breed": "whippet",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "hound",
        "ageMin": 10,
        "ageMax": 1
      }
    },
    {
      "dogName": "Lavonne",
      "email": "lavonne@lavonnemail.com",
      "password": "dee750ba-15ce-4cbc-85c3-4e06f91d8da0",
      "age": 9,
      "phoneNumber": "(873) 445-2619",
      "breed": "pomeranian",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "pomeranian",
        "ageMin": 17,
        "ageMax": 2
      }
    },
    {
      "dogName": "Francesca",
      "email": "francesca@francescamail.com",
      "password": "9a55693b-16b4-4dae-8e09-a0e5588cbe60",
      "age": 4,
      "phoneNumber": "(888) 482-3642",
      "breed": "havanese",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "malinois",
        "ageMin": 13,
        "ageMax": 2
      }
    },
    {
      "dogName": "Inez",
      "email": "inez@inezmail.com",
      "password": "f5d8edd6-87d7-40d6-948a-b122ee12c652",
      "age": 17,
      "phoneNumber": "(937) 416-2521",
      "breed": "shiba",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "briard",
        "ageMin": 18,
        "ageMax": 7
      }
    },
    {
      "dogName": "Celia",
      "email": "celia@celiamail.com",
      "password": "0c2a27d2-6a73-4a1d-b858-6b2ba5792788",
      "age": 17,
      "phoneNumber": "(996) 546-3186",
      "breed": "wolfhound",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 3,
        "ageMax": 16
      }
    },
    {
      "dogName": "Horton",
      "email": "horton@hortonmail.com",
      "password": "1d720217-0d97-420a-b082-5bd463e49b6a",
      "age": 12,
      "phoneNumber": "(905) 407-3158",
      "breed": "labrador",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "dingo",
        "ageMin": 7,
        "ageMax": 10
      }
    },
    {
      "dogName": "Patel",
      "email": "patel@patelmail.com",
      "password": "bbd26a4b-d49d-41b5-8189-0abb11fd768d",
      "age": 18,
      "phoneNumber": "(825) 489-2584",
      "breed": "doberman",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "great-dane",
        "ageMin": 3,
        "ageMax": 4
      }
    },
    {
      "dogName": "Mcdaniel",
      "email": "mcdaniel@mcdanielmail.com",
      "password": "6c6bbc6f-7f36-4b54-a049-a067ef48852d",
      "age": 7,
      "phoneNumber": "(833) 453-3941",
      "breed": "norwegian-buhund",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "entlebucher",
        "ageMin": 13,
        "ageMax": 13
      }
    },
    {
      "dogName": "Shelby",
      "email": "shelby@shelbymail.com",
      "password": "173fd3e6-6ddd-42be-9e43-643c0be80a5f",
      "age": 3,
      "phoneNumber": "(912) 453-2923",
      "breed": "stbernard",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "rottweiler",
        "ageMin": 12,
        "ageMax": 3
      }
    },
    {
      "dogName": "Bessie",
      "email": "bessie@bessiemail.com",
      "password": "d2137352-7157-409b-9b5e-1974c010676a",
      "age": 4,
      "phoneNumber": "(904) 514-3615",
      "breed": "weimaraner",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "schipperke",
        "ageMin": 14,
        "ageMax": 1
      }
    },
    {
      "dogName": "Lucinda",
      "email": "lucinda@lucindamail.com",
      "password": "a1903a32-6256-4f57-953e-eecf0a601c47",
      "age": 17,
      "phoneNumber": "(973) 421-3145",
      "breed": "spaniel",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "shihtzu",
        "ageMin": 14,
        "ageMax": 20
      }
    },
    {
      "dogName": "Ava",
      "email": "ava@avamail.com",
      "password": "89c4524f-2407-4fe6-aac8-0d6b442fffbc",
      "age": 11,
      "phoneNumber": "(902) 417-3718",
      "breed": "dachshund",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 0,
        "ageMax": 17
      }
    },
    {
      "dogName": "Sarah",
      "email": "sarah@sarahmail.com",
      "password": "e79de39d-986c-4118-987b-d7251f1c3388",
      "age": 16,
      "phoneNumber": "(994) 566-2234",
      "breed": "cockapoo",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "samoyed",
        "ageMin": 18,
        "ageMax": 1
      }
    },
    {
      "dogName": "Vazquez",
      "email": "vazquez@vazquezmail.com",
      "password": "0a2a58c3-0f40-4def-8caa-f779ab7e910b",
      "age": 2,
      "phoneNumber": "(966) 450-3999",
      "breed": "germanshepherd",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "hound",
        "ageMin": 3,
        "ageMax": 5
      }
    },
    {
      "dogName": "Francine",
      "email": "francine@francinemail.com",
      "password": "d3c9604b-0abe-4020-85ae-149b77959843",
      "age": 20,
      "phoneNumber": "(862) 492-3038",
      "breed": "shiba",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 15,
        "ageMax": 18
      }
    },
    {
      "dogName": "Mckenzie",
      "email": "mckenzie@mckenziemail.com",
      "password": "ec533fd6-83b1-4b5d-ac0e-a1ebaad8c847",
      "age": 0,
      "phoneNumber": "(800) 401-2947",
      "breed": "affenpinscher",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "basenji",
        "ageMin": 3,
        "ageMax": 10
      }
    },
    {
      "dogName": "May",
      "email": "may@maymail.com",
      "password": "d07ebe45-b44f-4853-bb0f-74a7623c84a8",
      "age": 20,
      "phoneNumber": "(888) 415-3488",
      "breed": "stbernard",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "stbernard",
        "ageMin": 12,
        "ageMax": 9
      }
    },
    {
      "dogName": "Louise",
      "email": "louise@louisemail.com",
      "password": "c02bb1f7-20f3-4bea-91c5-32e377bb866f",
      "age": 4,
      "phoneNumber": "(915) 503-2272",
      "breed": "akita",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "hound",
        "ageMin": 14,
        "ageMax": 8
      }
    },
    {
      "dogName": "Ladonna",
      "email": "ladonna@ladonnamail.com",
      "password": "1a5d8ea4-bb5d-4f3a-a2d6-4cdb0f6ae6cd",
      "age": 8,
      "phoneNumber": "(905) 549-2084",
      "breed": "cotondetulear",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "schnauzer",
        "ageMin": 11,
        "ageMax": 19
      }
    },
    {
      "dogName": "Miranda",
      "email": "miranda@mirandamail.com",
      "password": "106c8c72-11ab-40eb-8290-27a3a4ab056a",
      "age": 19,
      "phoneNumber": "(899) 483-2006",
      "breed": "basenji",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "dachshund",
        "ageMin": 18,
        "ageMax": 12
      }
    },
    {
      "dogName": "Lee",
      "email": "lee@leemail.com",
      "password": "18d3954d-e849-48bb-8300-bd1efc847b20",
      "age": 1,
      "phoneNumber": "(921) 546-3414",
      "breed": "affenpinscher",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "bernese-mountain",
        "ageMin": 8,
        "ageMax": 16
      }
    },
    {
      "dogName": "Christina",
      "email": "christina@christinamail.com",
      "password": "265b872b-4fa9-4dcd-8485-79a3e0589c0f",
      "age": 15,
      "phoneNumber": "(978) 575-2000",
      "breed": "norwegian-buhund",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "schipperke",
        "ageMin": 19,
        "ageMax": 6
      }
    },
    {
      "dogName": "Katy",
      "email": "katy@katymail.com",
      "password": "2f4194db-7115-468c-ab63-224102ac4d08",
      "age": 19,
      "phoneNumber": "(959) 533-2341",
      "breed": "dalmatian",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "eskimo",
        "ageMin": 17,
        "ageMax": 18
      }
    },
    {
      "dogName": "Mae",
      "email": "mae@maemail.com",
      "password": "90efaf64-c53a-4472-98df-3c6a6da476a9",
      "age": 19,
      "phoneNumber": "(992) 535-3280",
      "breed": "hound",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "pug",
        "ageMin": 14,
        "ageMax": 6
      }
    },
    {
      "dogName": "Mercado",
      "email": "mercado@mercadomail.com",
      "password": "56b8be4b-4e29-40df-817a-6861bebbaa68",
      "age": 8,
      "phoneNumber": "(925) 465-3789",
      "breed": "keeshond",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "terrier",
        "ageMin": 17,
        "ageMax": 18
      }
    },
    {
      "dogName": "Oneal",
      "email": "oneal@onealmail.com",
      "password": "43067190-3652-4d0b-91b9-7063a4247d6a",
      "age": 13,
      "phoneNumber": "(982) 417-3005",
      "breed": "setter",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "coonhound",
        "ageMin": 11,
        "ageMax": 2
      }
    },
    {
      "dogName": "Combs",
      "email": "combs@combsmail.com",
      "password": "dc6a9f6e-5432-4135-8e61-7d6e7a55f159",
      "age": 4,
      "phoneNumber": "(812) 508-2650",
      "breed": "kelpie",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 5,
        "ageMax": 4
      }
    },
    {
      "dogName": "Mccray",
      "email": "mccray@mccraymail.com",
      "password": "b0f56e85-0a14-40ca-937e-2ca9b7d9b9b9",
      "age": 6,
      "phoneNumber": "(909) 460-2604",
      "breed": "puggle",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "komondor",
        "ageMin": 10,
        "ageMax": 2
      }
    },
    {
      "dogName": "Dickerson",
      "email": "dickerson@dickersonmail.com",
      "password": "6ba5cb33-a935-479e-b920-c90561d34d8b",
      "age": 10,
      "phoneNumber": "(852) 437-2499",
      "breed": "mastiff",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "stbernard",
        "ageMin": 0,
        "ageMax": 8
      }
    },
    {
      "dogName": "Armstrong",
      "email": "armstrong@armstrongmail.com",
      "password": "a5e04e00-233f-46d9-b443-22ff53eab7d2",
      "age": 11,
      "phoneNumber": "(940) 500-2560",
      "breed": "malinois",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "pekinese",
        "ageMin": 8,
        "ageMax": 10
      }
    },
    {
      "dogName": "Mcbride",
      "email": "mcbride@mcbridemail.com",
      "password": "cb987aa0-09e4-4283-9404-425be238573f",
      "age": 0,
      "phoneNumber": "(927) 598-2163",
      "breed": "borzoi",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "doberman",
        "ageMin": 10,
        "ageMax": 18
      }
    },
    {
      "dogName": "Flossie",
      "email": "flossie@flossiemail.com",
      "password": "5008599f-7962-4e82-b6ab-0ed34570324f",
      "age": 13,
      "phoneNumber": "(825) 563-3789",
      "breed": "greyhound",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "beagle",
        "ageMin": 16,
        "ageMax": 8
      }
    },
    {
      "dogName": "Valentine",
      "email": "valentine@valentinemail.com",
      "password": "47bb3d22-c8a8-4571-90d9-f12180d2a5eb",
      "age": 0,
      "phoneNumber": "(875) 483-3630",
      "breed": "pug",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "komondor",
        "ageMin": 16,
        "ageMax": 3
      }
    },
    {
      "dogName": "Hartman",
      "email": "hartman@hartmanmail.com",
      "password": "17f38637-6b97-432d-97ef-5321e8ab96b3",
      "age": 4,
      "phoneNumber": "(951) 595-3002",
      "breed": "dhole",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "doberman",
        "ageMin": 3,
        "ageMax": 14
      }
    },
    {
      "dogName": "Gamble",
      "email": "gamble@gamblemail.com",
      "password": "2ac24f09-ba39-463c-8b99-39fc1d6176b1",
      "age": 6,
      "phoneNumber": "(857) 432-2487",
      "breed": "pitbull",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "dhole",
        "ageMin": 19,
        "ageMax": 11
      }
    },
    {
      "dogName": "Peggy",
      "email": "peggy@peggymail.com",
      "password": "038f5c26-17a9-4050-9d94-888aaa3e97fe",
      "age": 0,
      "phoneNumber": "(855) 518-3949",
      "breed": "bichon-frise",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "pyrenees",
        "ageMin": 0,
        "ageMax": 19
      }
    },
    {
      "dogName": "Sharpe",
      "email": "sharpe@sharpemail.com",
      "password": "742a4686-8c8e-4d52-b5f5-e76f39325a20",
      "age": 20,
      "phoneNumber": "(993) 493-3126",
      "breed": "otterhound",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "retriever",
        "ageMin": 12,
        "ageMax": 15
      }
    },
    {
      "dogName": "Kitty",
      "email": "kitty@kittymail.com",
      "password": "54e0942f-1aff-4501-bdbe-56e433a03ccc",
      "age": 7,
      "phoneNumber": "(838) 590-3995",
      "breed": "collie",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "dingo",
        "ageMin": 12,
        "ageMax": 15
      }
    },
    {
      "dogName": "Lora",
      "email": "lora@loramail.com",
      "password": "7a9fee9d-96e9-412e-b5fc-b0a8a64c91e1",
      "age": 18,
      "phoneNumber": "(865) 508-2580",
      "breed": "beagle",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "lhasa",
        "ageMin": 14,
        "ageMax": 20
      }
    },
    {
      "dogName": "Roberson",
      "email": "roberson@robersonmail.com",
      "password": "6950f1b7-d565-41e4-9e12-7455073c84f2",
      "age": 8,
      "phoneNumber": "(837) 445-2053",
      "breed": "australian-shepherd",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "pomeranian",
        "ageMin": 10,
        "ageMax": 18
      }
    },
    {
      "dogName": "Julia",
      "email": "julia@juliamail.com",
      "password": "95504082-f924-4139-a30f-60b924141bbf",
      "age": 9,
      "phoneNumber": "(984) 453-3334",
      "breed": "terrier",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "basenji",
        "ageMin": 13,
        "ageMax": 1
      }
    },
    {
      "dogName": "Baker",
      "email": "baker@bakermail.com",
      "password": "c1fe3a52-c8bb-4fe5-96e8-6f35182b96d7",
      "age": 6,
      "phoneNumber": "(933) 566-2179",
      "breed": "swiss-mountain",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "malamute",
        "ageMin": 2,
        "ageMax": 13
      }
    },
    {
      "dogName": "Pearl",
      "email": "pearl@pearlmail.com",
      "password": "f5d8ebac-1716-48db-8cdb-0d4fc43853ea",
      "age": 11,
      "phoneNumber": "(939) 583-2312",
      "breed": "coonhound",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "pekinese",
        "ageMin": 19,
        "ageMax": 11
      }
    },
    {
      "dogName": "Dillard",
      "email": "dillard@dillardmail.com",
      "password": "49ac4038-de9c-44fb-832e-4931cfd15c75",
      "age": 18,
      "phoneNumber": "(946) 434-2530",
      "breed": "bullterrier",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "havanese",
        "ageMin": 13,
        "ageMax": 19
      }
    },
    {
      "dogName": "Mamie",
      "email": "mamie@mamiemail.com",
      "password": "d12bd0db-4d4e-4aec-8289-cb4b16ac54d8",
      "age": 4,
      "phoneNumber": "(810) 459-2712",
      "breed": "papillon",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "dalmatian",
        "ageMin": 1,
        "ageMax": 10
      }
    },
    {
      "dogName": "Battle",
      "email": "battle@battlemail.com",
      "password": "e807e8c3-139a-4448-a31c-392ea361f358",
      "age": 17,
      "phoneNumber": "(958) 441-3003",
      "breed": "swiss-mountain",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "basenji",
        "ageMin": 9,
        "ageMax": 5
      }
    },
    {
      "dogName": "Lindsey",
      "email": "lindsey@lindseymail.com",
      "password": "6bacd0b9-0436-42fa-98a7-11f8591fae0c",
      "age": 20,
      "phoneNumber": "(981) 558-2175",
      "breed": "retriever",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "chow",
        "ageMin": 19,
        "ageMax": 14
      }
    },
    {
      "dogName": "Duffy",
      "email": "duffy@duffymail.com",
      "password": "cb0480a0-728d-4723-8b13-fc1b15459d6f",
      "age": 12,
      "phoneNumber": "(888) 482-2678",
      "breed": "briard",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "sheepdog",
        "ageMin": 1,
        "ageMax": 17
      }
    },
    {
      "dogName": "Irene",
      "email": "irene@irenemail.com",
      "password": "94dc9563-61a6-4223-9ad6-5ba7eda39d58",
      "age": 7,
      "phoneNumber": "(941) 575-2758",
      "breed": "puggle",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 11,
        "ageMax": 13
      }
    },
    {
      "dogName": "Virginia",
      "email": "virginia@virginiamail.com",
      "password": "3307333c-c880-4c9c-a330-9f32405e5918",
      "age": 8,
      "phoneNumber": "(818) 465-2809",
      "breed": "coonhound",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "entlebucher",
        "ageMin": 2,
        "ageMax": 19
      }
    },
    {
      "dogName": "Lang",
      "email": "lang@langmail.com",
      "password": "d50c484e-16be-4504-85f3-8cbfc1601c90",
      "age": 5,
      "phoneNumber": "(872) 588-2067",
      "breed": "newfoundland",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "pembroke",
        "ageMin": 3,
        "ageMax": 2
      }
    },
    {
      "dogName": "Albert",
      "email": "albert@albertmail.com",
      "password": "d10d7da3-a814-4739-877b-6cdec206fdf6",
      "age": 3,
      "phoneNumber": "(886) 498-3992",
      "breed": "kelpie",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "affenpinscher",
        "ageMin": 7,
        "ageMax": 17
      }
    },
    {
      "dogName": "Vincent",
      "email": "vincent@vincentmail.com",
      "password": "16de966c-d189-45eb-a18e-b383a1563597",
      "age": 20,
      "phoneNumber": "(954) 592-2290",
      "breed": "schipperke",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "pembroke",
        "ageMin": 5,
        "ageMax": 1
      }
    },
    {
      "dogName": "Schneider",
      "email": "schneider@schneidermail.com",
      "password": "37909925-e5f3-42e8-8bef-46618fed6e18",
      "age": 6,
      "phoneNumber": "(846) 546-3106",
      "breed": "coonhound",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "collie",
        "ageMin": 4,
        "ageMax": 3
      }
    },
    {
      "dogName": "Ellison",
      "email": "ellison@ellisonmail.com",
      "password": "34b58c8b-947d-4791-93b7-03b46d991faf",
      "age": 7,
      "phoneNumber": "(989) 514-3283",
      "breed": "retriever",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "wolfhound",
        "ageMin": 17,
        "ageMax": 7
      }
    },
    {
      "dogName": "Valerie",
      "email": "valerie@valeriemail.com",
      "password": "e85f218b-1d9e-4fec-8161-41b986bbecca",
      "age": 10,
      "phoneNumber": "(834) 549-3841",
      "breed": "rottweiler",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "waterdog",
        "ageMin": 17,
        "ageMax": 1
      }
    },
    {
      "dogName": "Cleveland",
      "email": "cleveland@clevelandmail.com",
      "password": "c7532b0a-0144-4660-8e40-1856e72ae606",
      "age": 6,
      "phoneNumber": "(903) 557-3227",
      "breed": "eskimo",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "chow",
        "ageMin": 3,
        "ageMax": 11
      }
    },
    {
      "dogName": "Barbra",
      "email": "barbra@barbramail.com",
      "password": "804c9014-fb5b-4b47-b107-89349273d516",
      "age": 10,
      "phoneNumber": "(940) 576-2977",
      "breed": "vizsla",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "swiss-mountain",
        "ageMin": 0,
        "ageMax": 8
      }
    },
    {
      "dogName": "Laura",
      "email": "laura@lauramail.com",
      "password": "c4b5126c-fb7f-40ec-8cb9-e85e0d596f63",
      "age": 9,
      "phoneNumber": "(995) 542-3197",
      "breed": "akita",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "wolfhound",
        "ageMin": 15,
        "ageMax": 15
      }
    },
    {
      "dogName": "Roxie",
      "email": "roxie@roxiemail.com",
      "password": "4851a960-d27b-46e6-a618-a43f51ddd1cc",
      "age": 14,
      "phoneNumber": "(982) 470-2035",
      "breed": "briard",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "norwegian-elkhound",
        "ageMin": 14,
        "ageMax": 12
      }
    },
    {
      "dogName": "Noble",
      "email": "noble@noblemail.com",
      "password": "3bd65547-1bc4-49be-88ec-b481aa454e05",
      "age": 2,
      "phoneNumber": "(924) 498-2433",
      "breed": "norwegian-buhund",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "schipperke",
        "ageMin": 14,
        "ageMax": 2
      }
    },
    {
      "dogName": "Golden",
      "email": "golden@goldenmail.com",
      "password": "ca15a695-f889-4fc5-b43a-2ca9fc329478",
      "age": 19,
      "phoneNumber": "(954) 508-3703",
      "breed": "affenpinscher",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "samoyed",
        "ageMin": 5,
        "ageMax": 12
      }
    },
    {
      "dogName": "Lydia",
      "email": "lydia@lydiamail.com",
      "password": "927ed496-866a-45f5-b240-ad1df20c8a80",
      "age": 1,
      "phoneNumber": "(958) 591-2734",
      "breed": "pyrenees",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "borzoi",
        "ageMin": 15,
        "ageMax": 20
      }
    },
    {
      "dogName": "Esther",
      "email": "esther@esthermail.com",
      "password": "2d77bd32-9603-4ec7-b205-a9ca796b76e7",
      "age": 1,
      "phoneNumber": "(933) 531-3712",
      "breed": "kuvasz",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "keeshond",
        "ageMin": 0,
        "ageMax": 2
      }
    },
    {
      "dogName": "Stein",
      "email": "stein@steinmail.com",
      "password": "a8e40cb6-ba58-40ff-ae79-f34d0811b2d3",
      "age": 4,
      "phoneNumber": "(933) 585-3356",
      "breed": "entlebucher",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "rottweiler",
        "ageMin": 13,
        "ageMax": 20
      }
    },
    {
      "dogName": "Alicia",
      "email": "alicia@aliciamail.com",
      "password": "6eebd70b-54b9-4fa1-b297-9af686ad91e9",
      "age": 12,
      "phoneNumber": "(889) 532-2476",
      "breed": "bichon-frise",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bluetick",
        "ageMin": 8,
        "ageMax": 19
      }
    },
    {
      "dogName": "Sandy",
      "email": "sandy@sandymail.com",
      "password": "bfea28a5-a3d7-4a02-9344-30dc6c95a2b7",
      "age": 19,
      "phoneNumber": "(800) 420-3564",
      "breed": "chihuahua",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "schipperke",
        "ageMin": 17,
        "ageMax": 4
      }
    },
    {
      "dogName": "Deirdre",
      "email": "deirdre@deirdremail.com",
      "password": "efdc1546-701b-4856-8138-759d5f3e3036",
      "age": 18,
      "phoneNumber": "(912) 464-3584",
      "breed": "havanese",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "briard",
        "ageMin": 19,
        "ageMax": 20
      }
    },
    {
      "dogName": "Krystal",
      "email": "krystal@krystalmail.com",
      "password": "361f9bf9-12c8-4c5e-bfff-e2640389ee69",
      "age": 8,
      "phoneNumber": "(946) 544-3741",
      "breed": "germanshepherd",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "affenpinscher",
        "ageMin": 10,
        "ageMax": 10
      }
    },
    {
      "dogName": "Lizzie",
      "email": "lizzie@lizziemail.com",
      "password": "4a463660-0e42-48f9-a59c-c4e0c5baf758",
      "age": 0,
      "phoneNumber": "(884) 579-2936",
      "breed": "beagle",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "basenji",
        "ageMin": 3,
        "ageMax": 17
      }
    },
    {
      "dogName": "Mooney",
      "email": "mooney@mooneymail.com",
      "password": "59155bc8-19c0-4854-96cc-4a393e8e9f7c",
      "age": 16,
      "phoneNumber": "(839) 570-2211",
      "breed": "dalmatian",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "briard",
        "ageMin": 15,
        "ageMax": 9
      }
    },
    {
      "dogName": "Ruiz",
      "email": "ruiz@ruizmail.com",
      "password": "5e62b525-8669-4af3-ae51-521170de5c02",
      "age": 20,
      "phoneNumber": "(812) 507-2246",
      "breed": "beagle",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "ridgeback",
        "ageMin": 14,
        "ageMax": 13
      }
    },
    {
      "dogName": "Augusta",
      "email": "augusta@augustamail.com",
      "password": "01d75a57-bb0b-4c71-a656-6adea1e5ad27",
      "age": 5,
      "phoneNumber": "(982) 499-2983",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "leonberg",
        "ageMin": 1,
        "ageMax": 14
      }
    },
    {
      "dogName": "Romero",
      "email": "romero@romeromail.com",
      "password": "3738b167-0860-4055-9712-d13326068905",
      "age": 17,
      "phoneNumber": "(898) 543-3692",
      "breed": "lhasa",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "greyhound",
        "ageMin": 2,
        "ageMax": 12
      }
    },
    {
      "dogName": "Rhonda",
      "email": "rhonda@rhondamail.com",
      "password": "5262fc1a-6e93-4f63-a2d3-07de08f29782",
      "age": 12,
      "phoneNumber": "(949) 490-2146",
      "breed": "bichon-frise",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "weimaraner",
        "ageMin": 14,
        "ageMax": 13
      }
    },
    {
      "dogName": "Cannon",
      "email": "cannon@cannonmail.com",
      "password": "11f224d6-4e04-460d-8d27-12b53e13edc8",
      "age": 1,
      "phoneNumber": "(849) 536-2138",
      "breed": "stbernard",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "puggle",
        "ageMin": 15,
        "ageMax": 13
      }
    },
    {
      "dogName": "Gertrude",
      "email": "gertrude@gertrudemail.com",
      "password": "9a4af6d1-8483-45c6-ad02-4d8512f74813",
      "age": 3,
      "phoneNumber": "(863) 551-2846",
      "breed": "doberman",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "pekinese",
        "ageMin": 11,
        "ageMax": 7
      }
    },
    {
      "dogName": "Moon",
      "email": "moon@moonmail.com",
      "password": "b0bc03fe-9ced-4ff4-b818-b9920d224634",
      "age": 0,
      "phoneNumber": "(828) 414-3425",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "cockapoo",
        "ageMin": 8,
        "ageMax": 20
      }
    },
    {
      "dogName": "Snyder",
      "email": "snyder@snydermail.com",
      "password": "e4d87c23-844d-41fd-8fcd-0bf81488065e",
      "age": 10,
      "phoneNumber": "(811) 406-2870",
      "breed": "groenendael",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "newfoundland",
        "ageMin": 12,
        "ageMax": 19
      }
    },
    {
      "dogName": "Tabitha",
      "email": "tabitha@tabithamail.com",
      "password": "673f5a0d-e454-4602-8257-b1c9a6147ad9",
      "age": 14,
      "phoneNumber": "(968) 554-2507",
      "breed": "schipperke",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "cockapoo",
        "ageMin": 0,
        "ageMax": 20
      }
    },
    {
      "dogName": "Randall",
      "email": "randall@randallmail.com",
      "password": "af49df0a-dd53-432f-8d31-f0596ecc642f",
      "age": 16,
      "phoneNumber": "(898) 487-2878",
      "breed": "eskimo",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "setter",
        "ageMin": 0,
        "ageMax": 13
      }
    },
    {
      "dogName": "Meadows",
      "email": "meadows@meadowsmail.com",
      "password": "0c91da38-55f9-47c0-83b7-d7e0a8738dc7",
      "age": 7,
      "phoneNumber": "(808) 512-2226",
      "breed": "entlebucher",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "mexicanhairless",
        "ageMin": 10,
        "ageMax": 17
      }
    },
    {
      "dogName": "Cheri",
      "email": "cheri@cherimail.com",
      "password": "25b6c01f-ab5c-4ea0-a63e-98f5aca48cd0",
      "age": 7,
      "phoneNumber": "(949) 595-3015",
      "breed": "pekinese",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "labrador",
        "ageMin": 6,
        "ageMax": 4
      }
    },
    {
      "dogName": "Keri",
      "email": "keri@kerimail.com",
      "password": "530423a6-c65c-4523-bbf7-163cf085f52e",
      "age": 18,
      "phoneNumber": "(921) 562-3845",
      "breed": "dhole",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bernese-mountain",
        "ageMin": 10,
        "ageMax": 17
      }
    },
    {
      "dogName": "Graham",
      "email": "graham@grahammail.com",
      "password": "4367f0fe-d793-4487-a948-dc9808623cd7",
      "age": 9,
      "phoneNumber": "(903) 589-2175",
      "breed": "pembroke",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "groenendael",
        "ageMin": 2,
        "ageMax": 4
      }
    },
    {
      "dogName": "Christie",
      "email": "christie@christiemail.com",
      "password": "dd1f3cfb-8fd8-4ce4-9900-84c2b0c2f498",
      "age": 18,
      "phoneNumber": "(830) 480-2415",
      "breed": "brabancon",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "basenji",
        "ageMin": 13,
        "ageMax": 7
      }
    },
    {
      "dogName": "Ann",
      "email": "ann@annmail.com",
      "password": "7e930a16-c898-4c98-8027-863baf425b5c",
      "age": 7,
      "phoneNumber": "(991) 489-2953",
      "breed": "cairn",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bouvier",
        "ageMin": 1,
        "ageMax": 17
      }
    },
    {
      "dogName": "Lara",
      "email": "lara@laramail.com",
      "password": "a092574b-3e26-4752-af53-097bb22e44eb",
      "age": 6,
      "phoneNumber": "(824) 546-2028",
      "breed": "terrier",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "pekinese",
        "ageMin": 19,
        "ageMax": 5
      }
    },
    {
      "dogName": "Young",
      "email": "young@youngmail.com",
      "password": "2a3f980f-7119-4e94-b7cc-492b0cb56f51",
      "age": 5,
      "phoneNumber": "(868) 439-2667",
      "breed": "swiss-mountain",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "whippet",
        "ageMin": 4,
        "ageMax": 13
      }
    },
    {
      "dogName": "Annie",
      "email": "annie@anniemail.com",
      "password": "0c8f7b7b-221c-4c97-bc34-94e4e25580ca",
      "age": 2,
      "phoneNumber": "(813) 418-2187",
      "breed": "malinois",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "pinscher",
        "ageMin": 4,
        "ageMax": 18
      }
    },
    {
      "dogName": "Hubbard",
      "email": "hubbard@hubbardmail.com",
      "password": "05015be8-97eb-4b30-8628-627cb4456965",
      "age": 18,
      "phoneNumber": "(890) 574-3903",
      "breed": "setter",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "samoyed",
        "ageMin": 12,
        "ageMax": 3
      }
    },
    {
      "dogName": "Rasmussen",
      "email": "rasmussen@rasmussenmail.com",
      "password": "531b6352-5533-49e7-af29-f6afa4463ce8",
      "age": 6,
      "phoneNumber": "(868) 579-3893",
      "breed": "weimaraner",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "dachshund",
        "ageMin": 15,
        "ageMax": 13
      }
    }
  ]