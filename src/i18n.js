import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbacklng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: {
            COMMUNITIES: "COMMUNITIES",
            "LATEST LAUNCHES": "LATEST LAUNCHES",
            "Follow us on Social Media": "Follow us on Social Media",
            join: "Join Sakanna club",
            joinus: "Join Us",
          },
          nav: {
            "CALL US": "CALL US",
            "SALES & SUPPORT": "SALES & SUPPORT",
            "Contact Us": "Contact Us",
          },
          contactus: {
            "Your name": "Your name",
            "Name is a required field.": "Name is a required field.",
            "Your email": "Your email",
            "Email is a required field.": "Email is a required field.",
            "Email invalid.": "Email invalid.",
            "Your number": "Your number",
            Message: "Message",
            "Message is a required field.": "Message is a required field.",
            "Mail sent successfully.": "Mail sent successfully.",
            opt: "Optional",
            get: "Get In Touch",
            con: "Contact Us",
            locae: "Saudi Arabia - AL Khobar ",
            "locae-b": " Al-Jazirah Building",
            submit: "Submit Now",
          },
          footer: {
            INFORMAITION: "INFORMAITION",
            "Contact Us": "Contact Us",
            "About Us": "About Us",
            "Privacy Policy": "Privacy Policy",
            "Terms of Service": " Terms of Service",
            "follow us": "follow us",
            rights: "© 2022 Sakanna. All rights reserved",
          },
          SearchBar: {
            com: "Community",
            bed: "Bedrooms",
            floor: "Floor",
            type: "Type",
            price: "Price",
            search: "Search Properties",
            reg: "Register Your Interest",
          },
          Comunity: {
            register: "Register Your Interest",
            feel: "FELL THE FRESHNESS ",
            res: "Residence ",
            plan: "Residence Plan ",
            prop: "PROPERTIES",
            types: "Types",
            area: "Area",
            count: "Total Count In Project :",
            bedno: "Bedroom Number :",
            recption: "Reception :",
            gus_to: "Guest Toilet :",
            bed1: "Bedroom 1 :",
            bed2: "Bedroom 2 : ",
            master: "Master Bedroom : ",
            dress: "Dressing room : ",
            master_t: "Master Room Toilet : ",
            kitchen: "Kitchen : ",
            bath: "Bathroom :",
            maid: "Maid Room :",
            maid_t: "Maid Room Toilet : ",
            storage: "Storage :",
            land: "Laundry :",
            // "types": "Types",
            Location: "Location ",
            map: "VIEW ON GOOGLE MAP ",
            resedd: "Residence",
            design: "Design",
            interior: "Interior",
            sar: "SAR",
            Prices: "PRICES",
            "1f": "1st Floor",
            "2f": "2nd Floor",
            "3f": "3rd Floor",
            "4f": "4th Floor",
            "5f": "5th Floor",
            "6f": "6th Floor",
            "7f": "7th Floor",
            "8f": "8th Floor",
            "9f": "9th Floor",
            "10f": "10th Floor",
            "11f": "11th Floor",
            "12f": "12th Floor",
            "13f": "13th Floor",
          },
          Results: {
            chk: "CHECK",
            result: "Results",
          },
          Dashboard: {
            signInWelcome: "Hi, Welcome Back",
            signInTitle: "Sign in to Sakanna",
            signInInstructions: "Enter your details below.",
            loginFormValidEmail: "Email must be a valid email address",
            loginFormRequiredEmail: "Email is required",
            loginFormRequiredPass: "Password is required",
            loginFormEmail: "Email address",
            loginFormPass: "Password",
            loginFormForgetPass: "Forgot password ?",
            loginFormForgetRememberMe: "Remember me",
            loginFormLoginButton: "Login",
            dashboardAppWelcome: "Hi, Welcome back",
            sideBarDashboard: "dashboard",
            sideBarUser: "users",
            sideBarSpecializations: "specializations",
            sideBarTypes: "Types",
            sideBarMedals: "medals",
            sideBarCountries: "countries",
            AccountPopoverLogout: "Logout",
            /*Comunities */
            sideBarComunities: "Comunities",
            ComunitiesPageTitle: "Comunities",
            ComunitiesPageSearchPlaceHolder: "Search Comunities...",
            ComunitiesAddNew: "Add New",
            ComunityDialogArName: "Arabic Name",
            ComunityDialogEnName: "English Name",
            comunityTabeHeadName: "Community name",
            comunityTabeHeadLocation: "Community Location",
            comunityTabeHeadType: "Community Type",
            comunityTabeHeadTypeSettings: "Type Settings",
            comunityTabeHeadAmenitiesSettings: "Amenities Settings",
            comunityTabeHeadFloorsSettings: "Floors Settings",
            comunityTabeHeadInteriorSettings: "Interior Samples Settings",
            ComunityDialogArDescription: "Arabic Description",
            ComunityDialogEnDescription: "English Description",
            ComunityDialogLatitude: "Latitude",
            ComunityDialogLongitude: "Longitude",
            ComunityDialogLocation: "Location in English",
            ComunityDialogLocationAr: "Location in Arabic",
            ComunityDialoglocation_description_Ar:
              "Arabic Location Description",
            ComunityDialoglocation_description_En:
              "English Location Description",
            ComunityDialoglocation_image: "Location Image",
            ComunityDialoType: "Type in English",
            ComunityDialoTypeAr: "Type in Arabic",
            EditButton: "Edit",
            EditComunity: "Edit Comunity",
            Ok: "Ok",
            Cancel: "Cancel",
            UsersPageLabelRowsPerPage: "Rows Per Page",
            SearchBarSearchButton: "Search",
            SearchBarSearchPlaceholder: "Search…",
            villa: "Villa",
            normal: "Normal",
            ComunityDialogComunityDescriptionAr: "Arabic Comunity Description",
            ComunityDialogComunityDescription: "English Comunity Description",
            ComunityDialogLocationDescriptionAr: "Arabic Location Description",
            ComunityDialogLocationDescription: "English Location Description",
            ComunityImage: "Comunity Image",
            uploadComunityImage: " Upload Comunity Image",
            remove: "Remove",
            locationImage: "Location Image",
            uploadLocationImage: " Upload Location Image",
            NewComunity: "Add New Comunity",
            Delete: "Delete",
            DeleteComunityDialogTitle: "Delete Community",
            DeleteComunityDialogMessage:
              "Are you sure you want to delete this Community?",
            comunityTabeHeadCommunityGallery: "Community gallery",
            EditGallery: "Edit Gallery",
            newgalleryImageLabel: "New gallery Images",
            uploadGalleryImage: "Upload Gallery Images",
            GalleryImages: "Gallery images",
            GalleryImageAddedSuccess: "Gallery Images Added successfully",
            comunityTabeHeadCommunityUnits: "Units",
            /* Types */
            TypesPageTitle: "Types",
            TypesPageSearchPlaceHolder: "Search Types...",
            tableHeadTypeName: "Type Name",
            tableHeadTypeCount: "Total Count",
            tableHeadTypeNumOfAvailable: "Number Of available",
            tableHeadTypePrice: "Price",
            tableHeadTypeMaxPrice: "Max Price",
            showMore: "Show More & Edit",
            typeInfo: "Type Information",
            TotalArea: "Total Area",
            area: "Area",
            firstFloorArea: "First Floor Area",
            groundFloorArea: "Ground Floor Area",
            roofFloorArea: "Roof Floor Area",
            outDoorAndTerracesArea: "Outdoor and Terraces Area",
            totalCount: "Total Count Of Type",
            typeDescriptionAr: "Arabic Type Description",
            typeDescription: "English Type Description",
            numberOfBedrooms: "Number Of Bedrooms",
            bedroom1: "First Bedroom Area",
            bedroom2: "Second Bedroom Area",
            bedroom3: "Third Bedroom Area",
            MasterBedroom1: "First Master Bedroom Area",
            MasterBedroom2: "Second Master Bedroom Area",
            MasterBedroom3: "Third Master Bedroom Area",
            MasterRoomToilet: "First Master Room Toilet Area",
            Master_Room_Toilet2: "First Master Room Toilet Area",
            Master_Room_Toilet3: "First Master Room Toilet Area",
            Dinning_room: "Dinning Room Area",
            DressingRoom: "Dressing Room Area",
            Living: "Living Room Area",
            Majles: "Majles Room Area",
            Majles_Toilet: "Majles Toilet Area",
            Office: "Office Room Area",
            Washing_Room: "Washing Room Area",
            bathroom: "Bathroom Area",
            guestToilet: "Guest Toilet Area",
            kitchen: "Kitchen Area",
            laundry: "Laundry Room Area",
            reception: "Reception Room Area",
            storage: "Storage Room Area",
            maidRoom: "Maid Room Area",
            maidRoomToilet: "Maid Room Toilet Area",
            editType: "Edit Type",
            CancelEditType: "Cancel Edit Type",
            TypePlanImage: "Type Plan Image",
            uploadTypePlanImage: "Upload Type Plan Image",
            TypeCardImage: "Type Card Image",
            uploadTypeCardImage: "Upload Type Card Image",
            DeleteTypeDialogTitle: "Delete Type",
            DeleteTypeDialogMessage:
              "Are you sure you want to delete this Type ?",
            Close: "Close",
            saveChanges: "Save changes",
            /* Amenities */
            tableHeadAmenityName: "Amenity Name",
            AmenitiesPageTitle: "Amenities",
            AmenitiesPageSearchPlaceHolder: "Search Amenities...",
            AmenityImage: "Amenity Image",
            AmenityInfo: "Amenity Information",
            uploadAmenityImage: "Upload Amenity Image",
            editAmenity: "Edit Amenity",
            CancelEditAmenity: "Cancel Edit Amenity",
            DeleteAmenityDialogTitle: "Delete Amenity",
            DeleteAmenityDialogMessage:
              "Are you sure you want to delete this Amenity ?",
            /* Floors */
            FloorsPageTitle: "Floors",
            FloorsPageSearchPlaceHolder: "Search For Floor...",
            tableHeadFloorName: "Floor Name",
            tableHeadFloorPercentOfResidential: "Percent Of Residential",
            tableHeadFloorPercentOfAmenties: "Percent Of Amenties",
            tableHeadFloorPercentOfServices: "Percent Of Services",
            FloorInfo: "Floor Information",
            editFloor: "Edit Floor",
            CancelEditFloor: "Cancel Edit Floor",
            carSlots: "Car Slots",
            tableHeadTypenumberOfApartments: "Number Of Apartments",
            tableHeadTypenumberOfPenthouses: "Number Of Penthouses",
            totalOutdoorAreas: "Total Outdoor Areas",
            MasterBedroom: "Master Bedroom Area",
            Lobby: "Lobby",
            Balcony: "Balcony Area",
            Balcony1: "First Balcony Area",
            Balcony2: "Second Balcony Area",
            Balcony3: "Third Balcony Area",
            Open_Kitchen: "Open Kitchen Area",
            Closet: "Closet Area",
            FloorPlanImage: "Floor Plan Image",
            uploadFloorPlanImage: "Upload Floor Plan Image",
            FloorDescription: "Floor English Description",
            FloorDescriptionAr: "Floor Arabic Description ",
            NewFloor: "Add New Floor",
            DeleteFloorDialogTitle: "Delete Floor",
            DeleteFloorDialogMessage:
              "Are you sure you want to delete this Floor ?",
            /* Interior */
            tableHeadInteriorName: "Interior Name",
            InteriotPageTitle: "Interior Samples",
            InteriorPageSearchPlaceHolder: "Search fir interior Sample...",
            NewInterior: "New Interior Sample",
            DeleteInteriorImage: "Are you sure you want to delete this Photo ?",
            yes: "Yes",
            no: "No",
            uploadInteriorImageImage: "Upload interior image",
            InteriorImageLabel: "Interior images",
            newInteriorImageLabel: "New Interior images",
            DeleteInteriorDialogTitle: "Delete Interior Samples",
            DeleteInteriorDialogMessage:
              "Are you sure you want to delete this Interior samples ?",
            EditInteriot: "Edit Interior Samples",
            showgesAndEdit: "Show images & Edit",
            InteriorImageAddedSuccess: "Interior Samples Added successfully",
            Ok: "Ok",
            /* log out */
            logout: "Logout",
            admin: "Admin",
            /* Contact */
            sideBarContacts: "Contacts",
            tableHeadUserName: "Username",
            tableHeadEmail: "Email",
            tableHeadPhone: "Phone Number",
            tableHeadContatType: "Contact Type",
            tableHeadMessage: "Message",
            contactMessage: "Contact Message",
            contactRegisterInterestMessage: "Register Interest Message",
            contactJoinClubMessage: "Join Club Message",
            ContactsPageSearchPlaceHolder: "Search For Contact...",
            tableHeadUnitNumber: "Unit Number",
            /* Units */
            appartmentNumber: "Appartment Number",
            appartmentPrice: "Appartment Price",

            availability: "Availability",
            UnitsPageTitle: "Units",
            unitsPageSearchPlaceHolder: "Search unit...",
            available: "Available",
            notavailable: "Not available",
            DeleteUnitDialogTitle: "Delete Unit",
            DeleteUnitDialogMessage:
              "Are you sure you want to delete this unit ?",
            NewUnit: "Add New Unit",
            edit: "Edit",
            EditUnit: "Edit Unit",
          },
        },
      },
      ar: {
        translation: {
          home: {
            COMMUNITIES: "مجتماعاتنا",
            "LATEST LAUNCHES": "أحدث مشاريعنا",
            "Follow us on Social Media": "تابعنا على مواقع التواصل الاجتماعي ",
          },
          nav: {
            "CALL US": "اتصل بنا ",
            "SALES & SUPPORT": "دعم المبيعات",
            "Contact Us": "راسلنا",
          },
          contactus: {
            "Your name": "اسمك",
            "Name is a required field.": "الاسم مطلوب",
            "Your email": "بريدك الإلكتروني",
            "Email is a required field.": "البريد الإلكتروني مطلوب",
            "Email invalid.": "بريد اللكتروني غير صالح",
            "Your number": "رقم هاتفك",
            Message: "رسالتك",
            "Message is a required field.": "الرسالة مطلوبة",
            "Mail sent successfully.": "تم ارسال الرسالة بنجاح .",
            get: "لمتابعة جديدنا",
            con: "تواصل معنا",
            opt: "اختياري",
            submit: "ارسل الرسالة",
            locae: " المملكة العربية السعودية - الخبر",
            "locae-b": "  بناء الجزيرة ",
          },
          footer: {
            INFORMAITION: "معلومات",
            "Contact Us": "تواصل معنا",
            "About Us": "عن سكنا",
            "Privacy Policy": "سياسة الخصوصية",
            "Terms of Service": " شروط الخدمة",
            "follow us": "تابعنا",
            rights: " سكنا العقارية ٢٠٢٢ جميع الحقوق محفوظة © ",
          },
          SearchBar: {
            com: "المجمع",
            bed: "عدد الغرف",
            price: "السعر",
            search: "ابحث",
            reg: "سجل اهتمامك",
          },
          Comunity: {
            feel: "تمتع بالهواءالمنعش ",
            res: "مجمع ",
            plan: "مخطط المجمع  ",
            types: "العقارات",
            prop: "نمط ",
            area: "المساحة",
            count: "عدد الشقق في المشروع:",
            bedno: "عدد غرف النوم:",
            recption: "الاستقبال :",
            gus_to: "تواليت الضيوف:",
            bed1: "غرفة نوم 1 :",
            bed2: "غرفة نوم 2 : ",
            master: "غرفة نوم رئيسية : ",
            dress: "غرفة الملابس : ",
            master_t: "تواليت الغرفة الرئيسية ",
            kitchen: "المطبخ : ",
            bath: "الحمام :",
            maid: "غرفة الخدم :",
            maid_t: "تواليت غرفة الخدم : ",
            storage: "التخزين :",
            land: "غرفة الغسيل  :",
            Location: "الموقع ",
            map: "عرض على خريطة جوجل",
            resedd: "مجمع",
            design: "التصميم",
            interior: "الداخلي",
            sar: "ريال سعودي",
            Prices: "الأسعار",
          },
          Results: {
            chk: "اختر",
            result: "نتائج البحث",
          },
          Dashboard: {
            signInWelcome: "مرحبأً، أهلاً بعودتك",
            signInTitle: "تسجيل الدخول الى سكنا",
            signInInstructions: "يرجى ادخال بيانات اعتمادك.",
            loginFormValidEmail: "يجب ادخال صيغة بريد الكتروني صحيحة",
            loginFormRequiredEmail: "يرجى ادخال البريد الكتروني",
            loginFormRequiredPass: "يرجى ادخال كلمة المرور",
            loginFormEmail: "البريد الالكتروني",
            loginFormPass: "كلمة المرور",
            loginFormForgetPass: "هل نسيت كلمة المرور ؟",
            loginFormForgetRememberMe: "تذكرني",
            loginFormLoginButton: "تسجيل الدخول",
            dashboardAppWelcome: "أهلاً بك",
            sideBarDashboard: "لوحة التحكم",
            sideBarUser: "المستخدمين",
            sideBarSpecializations: "الاختصاصات",
            sideBarTypes: "الأنماط",
            sideBarMedals: "الميداليات",
            sideBarCountries: "الدول",
            AccountPopoverLogout: "تسجيل الخروج",
            /*Comunities */
            sideBarComunities: "المجتمعات",
            ComunitiesPageTitle: "المجتمعات",
            ComunitiesPageSearchPlaceHolder: "ابحث عن مجتمع...",
            ComunitiesAddNew: "إضافة جديد",
            comunityTabeHeadName: "اسم المجتمع",
            comunityTabeHeadLocation: "موقع المجتمع",
            comunityTabeHeadType: "نوع المجتمع",
            comunityTabeHeadTypeSettings: "اعدادات النمط",
            comunityTabeHeadAmenitiesSettings: "اعدادات وسائل الراحة",
            comunityTabeHeadFloorsSettings: "اعدادات الطوابق",
            comunityTabeHeadInteriorSettings: "اعدادات التصاميم الداخلية",
            ComunityDialogArName: "الاسم العربي",
            ComunityDialogEnName: "الاسم الاجنبي",
            ComunityDialogArDescription: "الوصف العربي",
            ComunityDialogEnDescription: "الوصف الاجنبي",
            ComunityDialogLatitude: "خط العرض",
            ComunityDialogLongitude: "خط الطول",
            ComunityDialogLocation: "الموقع بالاجنبي",
            ComunityDialogLocationAr: "الموقع بالعربي",
            ComunityDialoglocation_description_Ar: "الوصف العربي للموقع",
            ComunityDialoglocation_description_En: "الوصف الاجنبي للموقع",
            ComunityDialoglocation_image: "صورة الموقع",
            ComunityDialoType: "النوع بالاجنبي",
            ComunityDialoTypeAr: "النوع بالعربي",
            EditButton: "تعديل",
            EditComunity: "تعديل المجتمع",
            Ok: "تأكيد",
            Cancel: "إلغاء",
            UsersPageLabelRowsPerPage: "عدد الاسطر في الصفحة",
            SearchBarSearchButton: "بحث",
            SearchBarSearchPlaceholder: "ابحث هنا ...",
            villa: "فيلا",
            normal: "شقة عادية",
            ComunityDialogComunityDescriptionAr: "الوصف العربي المجتمع",
            ComunityDialogComunityDescription: "الوصف الأجنبي المجتمع",
            ComunityDialogLocationDescriptionAr: "الوصف العربي الموقع",
            ComunityDialogLocationDescription: "الوصف الأجنبي الموقع",
            ComunityImage: "صورة المجتمع",
            uploadComunityImage: "أضف صورة المجتمع",
            remove: "حذف",
            locationImage: "صورة موقع المجتمع",
            uploadLocationImage: "أضف صورة موقع المجتمع",
            NewComunity: "إضافة مجتمع جديد",
            Delete: "حذف",
            DeleteComunityDialogTitle: "حذف المجتمع",
            DeleteComunityDialogMessage: "هل أنت متأكد من حذف المجتمع ؟",
            comunityTabeHeadCommunityGallery: "معرض صور المجتمع",
            EditGallery: "تعديل معرض الصور ",
            newgalleryImageLabel: "صور المعرض الجديدة",
            uploadGalleryImage: "ارفع صور المعرض",
            GalleryImages: " صور المعرض",
            GalleryImageAddedSuccess: "تم إضافة صور المعرض بنجاح",
            comunityTabeHeadCommunityUnits: "الوحدات السكنية",

            /* Types */
            TypesPageTitle: "الأنماط",
            TypesPageSearchPlaceHolder: "ابحث عن نمط...",
            tableHeadTypeName: "اسم النمط",
            tableHeadTypeCount: "العدد الكلي",
            tableHeadTypeNumOfAvailable: "العدد المتاح",
            tableHeadTypePrice: "السعر",
            tableHeadTypeMaxPrice: "أعلا سعر",
            showMore: "إظهار المزيد وتعديل",
            typeInfo: "تفاصيل النمط",
            TotalArea: "المساحة الكلية",
            area: "المساحة",
            firstFloorArea: "مساحة الطابق الأول",
            groundFloorArea: "مساحة الطابق الأرضي",
            roofFloorArea: "مساحة السطح ",
            outDoorAndTerracesArea: "مساحة الردهات والشرفات الخارجية",
            totalCount: "العدد الكلي من النمط",
            typeDescriptionAr: "الوصف العربي للنمط",
            typeDescription: "الوصف الانكليزي للنمط",
            numberOfBedrooms: "عدد غرف النوم",
            bedroom1: "مساحة غرفة النوم الأولى",
            bedroom2: "مساحة غرفة النوم الثانية",
            bedroom3: "مساحة غرفة النوم الثالثة",
            MasterBedroom1: "مساحة غرفة النوم الرئيسية الأولى",
            MasterBedroom2: "مساحة غرفة النوم الرئيسية الثانية",
            MasterBedroom3: "مساحة غرفة النوم الرئيسية الثالثة",
            MasterRoomToilet: "مساحة مرحاض الغرفة الرئيسية الأولى",
            Master_Room_Toilet2: " مساحة مرحاض الغرفة الرئيسية الثانية",
            Master_Room_Toilet3: "مساحة مرحاض الغرفة الرئيسية الثالثة",
            Dinning_room: "مساحة غرفة الطعام",
            DressingRoom: " مساحة غرفة الملابس",
            Living: "مساحة غرفة المعيشة",
            Majles: "مساحة غرفة الجلوس",
            Majles_Toilet: "مساحة مرحاض غرفة الجلوس",
            Office: "مساحة المكتب",
            Washing_Room: "مساحة غرفة الاغتسال",
            bathroom: "مساحة غرفة الاستحمام ",
            guestToilet: "مساح مرحاض الضيوف",
            kitchen: "مساحة المطبخ",
            laundry: "مساحة غرفة غسيل الملابس",
            reception: "مساحة غرفة الاستقبال",
            storage: "مساحة المخزن",
            maidRoom: "مساحة غرفة المستخدم",
            maidRoomToilet: "مساحة مرحاض غرفة المستخدم",
            editType: "تعديل النمط",
            CancelEditType: "إلغاء تعديل النمط",
            TypePlanImage: "صورة مخطط النمط",
            uploadTypePlanImage: "ارفع صورة مخطط النمط",
            TypeCardImage: "صورة بطاقة النمط",
            uploadTypeCardImage: "ارفع صورة بطاقة النمط",
            DeleteTypeDialogTitle: "حذف النمط",
            DeleteTypeDialogMessage: "هل أنت متأكد من حذف النمط ؟",
            Close: "إغلاق",
            saveChanges: "حفظ التعديلات",
            /* Amenities */
            tableHeadAmenityName: "اسم وسيلة الراحة",
            AmenitiesPageTitle: "وسائل الراحة",
            AmenitiesPageSearchPlaceHolder: "ابحث عن وسيلة راحة...",
            AmenityImage: "صورة وسيلة الراحة",
            AmenityInfo: "معلومات وسيلة الراحة",
            uploadAmenityImage: "ارفع صورة وسيلة الراحة",
            editAmenity: "تعديل وسيلة الراحة",
            CancelEditAmenity: "إلغاء تعديل وسيلة الراحة",
            DeleteAmenityDialogTitle: "حذف وسيلة الراحة",
            DeleteAmenityDialogMessage: "هل أنت متأكد من حذف وسيلة الراحة ؟ ",
            /* Floors */
            FloorsPageTitle: "الطوابق",
            FloorsPageSearchPlaceHolder: "ابحث عن طابق...",
            tableHeadFloorName: "اسم الطابق",
            tableHeadFloorPercentOfResidential: "النسبة المئوية للسكان",
            tableHeadFloorPercentOfAmenties: "النسبة المئوية لوسائل الراحة",
            tableHeadFloorPercentOfServices: "النسبة المئوية للخدمات",
            FloorInfo: "معلومات الطابق",
            editFloor: "تعديل الطابق",
            CancelEditFloor: "إلغاء تعديل الطابق",
            carSlots: "مصف السيارات",
            tableHeadTypenumberOfApartments: "عدد الشقق",
            tableHeadTypenumberOfPenthouses: "عدد Penthouses",
            totalOutdoorAreas: "إجمالي المساحات الخارجية",
            MasterBedroom: "مساحة غرفة النوم الرئيسية",
            Lobby: "البهو",
            Balcony: "مساحة الشرفة",
            Balcony1: "مساحة الشرفة الأولى",
            Balcony2: "مساحة الشرفة الثانية",
            Balcony3: "مساحة الشرفة الثالثة",
            Open_Kitchen: "مساحة المطبخ المفتوح",
            Closet: "مساحة الخزانة",
            FloorPlanImage: "صورة مخطط الطابق",
            uploadFloorPlanImage: "ارفع صورة مخطط الطابق",
            FloorDescription: "الوصف الانكليزي للطابق",
            FloorDescriptionAr: "الوصف العربي للطابق ",
            NewFloor: "إضافة طابق جديد",
            DeleteFloorDialogTitle: "حذف طابق",
            DeleteFloorDialogMessage: "هل أنت متأكد من حذف هذا الطابق ؟ ",
            /* Interior */
            tableHeadInteriorName: "الاسم",
            InteriotPageTitle: "التصاميم الداخلية",
            InteriorPageSearchPlaceHolder: "ابحث عن تصميم...",
            NewInterior: "إضافة تصميم داخلي جديد",
            DeleteInteriorImage: "هل انت متأكد من حذف هذه الصورة ؟",
            yes: "نعم",
            no: "لا",
            uploadInteriorImageImage: "ارفع صورة تصميم داخلي",
            InteriorImageLabel: "صور التصميم الداخلي",
            newInteriorImageLabel: "صور التصميم الداخلي الجديدة",
            EditInteriot: "تعديل نماذج التصميم الداخلي",
            DeleteInteriorDialogTitle: "حذف نموذج التصميم الداخلي",
            DeleteInteriorDialogMessage:
              "هل أنت متأكد من حذف نموذج التصميم الداخلي ؟ ",
            showgesAndEdit: "عرض الصور والتعديل",
            InteriorImageAddedSuccess: "تم إضافة نماذج التصميم الداخلي بنجاح !",
            Ok: "حسنا",
            /* Account popOver */
            logout: "تسجيل الخروج",
            admin: "مدير النظام",
            /* Contacts */
            sideBarContacts: "رسائل التواصل",
            tableHeadUserName: "اسم المستخدم",
            tableHeadEmail: "البريد الألكتروني",
            tableHeadPhone: "رقم الجوال",
            tableHeadContatType: "نوع التواصل",
            tableHeadMessage: "الرسالة",
            contactMessage: "رسالة تواصل",
            contactRegisterInterestMessage: "رسالة تسجيل اهتمام",
            contactJoinClubMessage: "رسالة انضمام للنادي",
            ContactsPageSearchPlaceHolder: "ابحث عن رسالة تواصل",
            tableHeadUnitNumber: "رقم الشقة",
            /* Units */
            appartmentNumber: "رقم الشقة",
            appartmentPrice: "سعر الشقة",
            availability: "التوفر",
            UnitsPageTitle: "الوحدات السكنية",
            unitsPageSearchPlaceHolder: "ابحث عن وحدة سكنية....",
            available: "متاحة",
            notavailable: "غير متاحة",
            DeleteUnitDialogTitle: "حذف الوحدة السكنية",
            DeleteUnitDialogMessage: "هل أنت متأكد من حذف هذه الوحدة السكنية؟ ",
            NewUnit: "إضافة وحدة سكنية جديدة",
            edit: "تعديل",
            EditUnit: "تعديل الوحدة السكنية",
          },
        },
      },
    },
  });

export default i18n;
/* 
   
   {t("Comunity.sar")} 
   
   const { t } = useTranslation();
   
   
   */
