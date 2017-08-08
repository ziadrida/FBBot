var mongoUtil = require( './mongoUtil.js' );

var db;
module.exports =
{
getCatArabic: function() {
  var cats = [
    {"category_name":"Accessories (General)","category_name_ar":"إكسسورات عامة"},
    {"category_name":"Adapters","category_name_ar":"وصلات"},
    {"category_name":"All Audio/Video","category_name_ar":"مرئى وصوتى"},
    {"category_name":"Auto Parts","category_name_ar":"قطع سيارات"},
    {"category_name":"Battery","category_name_ar":"بطاريات"},
    {"category_name":"Belts and Wallets","category_name_ar":"احزمة و محافط"},
    {"category_name":"Bicycles (including delivery tricycles), not motorized.","category_name_ar":"دراجات عادية ذات عجلتين ودراجات أخرى ، بدون محرّكات"},
    {"category_name":"Binoculars/Telescopes","category_name_ar":"منظار"},
    {"category_name":"Books","category_name_ar":"كتاب"},
    {"category_name":"Bracelett","category_name_ar":"حليّ، سوار"},
    {"category_name":"Brooms and brushes","category_name_ar":"مكانس وفراجين"},
    {"category_name":"Cables/Adapters","category_name_ar":"كوابل"},
    {"category_name":"Camera Digital","category_name_ar":"كاميرا رقمية"},
    {"category_name":"Camera for documents","category_name_ar":"كاميرا للوثائق"},
    {"category_name":"Camera Lens","category_name_ar":"عدسة كاميرا"},
    {"category_name":"Capacitor (Fixed)","category_name_ar":"مكثفــات ثابتــة"},
    {"category_name":"Carpets","category_name_ar":"سجاد"},
    {"category_name":"Carrying Case","category_name_ar":"حقيبة"},
    {"category_name":"Charger","category_name_ar":"شاحن"},
    {"category_name":"Cleaning Agents/Detergents","category_name_ar":"منظفات"},
    {"category_name":"Clothing","category_name_ar":"ملابس"},
    {"category_name":"Clothing accessories  Leather gloves, mittens and mitts)","category_name_ar":"ـ لوازم ألبسة و  القفازات الجلدية"},
    {"category_name":"Clothing Dresses or Suits","category_name_ar":"ملابس السهرات والبدلات"},
    {"category_name":"Computer Card","category_name_ar":"ـ أجزاء ولوازم للآلات والأجهزة الداخلة فى الكميوتر"},
    {"category_name":"Computer Case No power Supply","category_name_ar":"صندوق كمبيوتر بدون مغذي للكهرباء"},
    {"category_name":"Computer Case With power Supply","category_name_ar":"صندوق كمبيوتر مع مغذي للكهرباء"},
    {"category_name":"Computer Fan","category_name_ar":"مروحة كمبيوتر"},
    {"category_name":"Computer Parts","category_name_ar":"قطع كمبيوتر"},
    {"category_name":"Computer Replacement Parts","category_name_ar":"قطع  غيار كمبيوتر"},
    {"category_name":"converters (Static)","category_name_ar":"مغيرات كهربية ساكنة"},
    {"category_name":"cosmetics or toilet preparations","category_name_ar":"مواد التجميل أو محضرات التطرية"},
    {"category_name":"Cover","category_name_ar":"كفر"},
    {"category_name":"CPU/Processor","category_name_ar":"ـ أجزاء ولوازم للآلات والأجهزة الداخلة فى الكميوتر"},
    {"category_name":"Dental Care","category_name_ar":"العناية بالأسنان"},
    {"category_name":"Drilling, threading or tapping tools","category_name_ar":"ـ أدوات ثـقب ولولبة"},
    {"category_name":"Electric Applieances","category_name_ar":"الأجهزة الكهربائية"},
    {"category_name":"Electric Scooter","category_name_ar":"سكوتركهربائى"},
    {"category_name":"Electronic calculators","category_name_ar":"ـ آلات حاسبة الكترونيـــة قـــادرة على العمل بـــدون مصدر خارجى للطاقة الكهربائية"},
    {"category_name":"Exercise equipment for general physical exercise, gymnastics or athletics","category_name_ar":"أصناف ومعدات للرياضة البدنية والجمباز وألعاب القوى"},
    {"category_name":"FAN","category_name_ar":"مروحة"},
    {"category_name":"Fats and oils and their fractions, of fish, other than liver oils","category_name_ar":"ـ دهون وزيوت وجزيئاتها ، من اسماك عدا زيت الكبد"},
    {"category_name":"Fertilizers","category_name_ar":"اسمدة"},
    {"category_name":"Flash Drive/ SD Card","category_name_ar":"محرك فلاش / بطاقة الذاكرة"},
    {"category_name":"Food/Chocolate/Candy","category_name_ar":"الغذاء / الشوكولاته / كاندي"},
    {"category_name":"Food/Chocolate/Candy US Made","category_name_ar":"الغذاء / الشوكولاته / كاندي الولايات المتحدة صنع"},
    {"category_name":"Game Pad","category_name_ar":"ذراع العاب"},
    {"category_name":"Game PC or Console","category_name_ar":"لعبة / اكس بوكس ​​بلاي ستيشن PC"},
    {"category_name":"Glass Wear","category_name_ar":"قطع زجاجية"},
    {"category_name":"Gloves (fabric)","category_name_ar":"قفازات من قماش"},
    {"category_name":"Graphics Card","category_name_ar":"ـ أجزاء ولوازم للآلات والأجهزة الداخلة فى الكميوتر"},
    {"category_name":"Hair Preparations (Shampoo etc)","category_name_ar":"مستحضرات العناية بالشعر ."},
    {"category_name":"Hair-removing appliances","category_name_ar":"ـ أجهزة إزالة الشعر"},
    {"category_name":"HardDrives External","category_name_ar":"أقراص صلبة خارجية"},
    {"category_name":"HardDrives Internal","category_name_ar":"أقراص صلبة داخلية"},
    {"category_name":"Hats","category_name_ar":"قبعات"},
    {"category_name":"Headphones & earphones, w or w/o microphone","category_name_ar":"ســــماعات رأس وســــماعات أذن وســـماعات ، وإن كانـــت متحدة بمذياع للصوت"},
    {"category_name":"Headset","category_name_ar":"سماعة راس"},
    {"category_name":"Health and Personal Care","category_name_ar":"إعتناء صحى"},
    {"category_name":"Health and Personal Care (Liquids)","category_name_ar":"إعتناء صحى - سائل"},
    {"category_name":"Helmet Motor Cycle","category_name_ar":"خوذة دراجة نارية"},
    {"category_name":"Helmet Sports Leisure","category_name_ar":"خوذة الرياضة وترفيه"},
    {"category_name":"Jewelry - Not Real","category_name_ar":"مجوهرات تقليدية"},
    {"category_name":"Joystick","category_name_ar":"عصا التحكم"},
    {"category_name":"Keyboard/Mouse","category_name_ar":"لوحة المفاتيح / الماوس"},
    {"category_name":"kitchenware and Tableware","category_name_ar":"أدوات مائدة ومطبخ"},
    {"category_name":"Knee pads","category_name_ar":"واقيات الركب"},
    {"category_name":"leather clothes","category_name_ar":"ملابس جلدية"},
    {"category_name":"Lighting or visual signalling equipment","category_name_ar":"ـ أجهزة إنارة أو إشارة مرئية"},
    {"category_name":"Machine-tools for working stone, ceramics, concrete, asbestos-cement , glass","category_name_ar":"عدد آلية لشغل الحجر أو الخزف أو الخرسانة أو خليط الحرير االصخرى"},
    {"category_name":"Magazines","category_name_ar":"مجلات"},
    {"category_name":"Medical Apparatus 9022","category_name_ar":"أجهزة طبية"},
    {"category_name":"Memory","category_name_ar":"ذاكرة"},
    {"category_name":"microphone and one or more loudspeakers","category_name_ar":"أطقم مؤلفة من مذياع صوت  ميكرفون  وواحد أو أكثر من مكبرات الصوت"},
    {"category_name":"Microscope","category_name_ar":"مجهر"},
    {"category_name":"Mobile Accessory","category_name_ar":"ملحقات الهاتف النقال"},
    {"category_name":"Mobile Phone","category_name_ar":"الهاتف المحمول"},
    {"category_name":"Monitor","category_name_ar":"شاشة كمبيوتر"},
    {"category_name":"Motherboard","category_name_ar":"ـ أجزاء ولوازم للآلات والأجهزة الداخلة فى الكميوتر"},
    {"category_name":"Mouse Pad","category_name_ar":"ماوس باد"},
    {"category_name":"Mouse/Keyboard","category_name_ar":"الماوس / لوحة المفاتيح"},
    {"category_name":"Musical Instruments","category_name_ar":"أدوات الموسيقى"},
    {"category_name":"Neck Tie","category_name_ar":"اربطة عنق"},
    {"category_name":"Network Router/Adapter","category_name_ar":"اجهزة للاتصالات في شبكة سلكية او لاسلكية"},
    {"category_name":"Notebook","category_name_ar":"لابتوب"},
    {"category_name":"Office Equipment","category_name_ar":"معدات مكتب "},
    {"category_name":"Office or school supplies","category_name_ar":"قرطاسية"},
    {"category_name":"Pasta (Other - not stuffed)","category_name_ar":"معكرونة غير محشية"},
    {"category_name":"Pasta (Stuffed), whether or not cooked or otherwise prepared","category_name_ar":"معكرونة محشية"},
    {"category_name":"PCs","category_name_ar":"أجهزة الكمبيوتر"},
    {"category_name":"Perfume","category_name_ar":"عطر"},
    {"category_name":"Perfume - US Made","category_name_ar":"عطر"},
    {"category_name":"Playstation","category_name_ar":"بلاي ستيشن"},
    {"category_name":"Production inputs","category_name_ar":"مدخلات انتا"},
    {"category_name":"Power Suppy","category_name_ar":"مغذي كهرباء"},
    {"category_name":"Printer","category_name_ar":"طابعة"},
    {"category_name":"Projectors","category_name_ar":"عارض ضوئي"},
    {"category_name":"Protein concentrates and textured protein substances, other","category_name_ar":"مركزات بروتين ومواد بروتينية"},
    {"category_name":"Rangefinders","category_name_ar":"ـ مقاييس الأبعاد"},
    {"category_name":"Real Jewelry","category_name_ar":"مجوهرات ذهب وفضة وألماس"},
    {"category_name":"Scanner","category_name_ar":"ماسح ضوئى"},
    {"category_name":"Seeds (for planting)","category_name_ar":"حبوب للزراعة"},
    {"category_name":"Shampoos","category_name_ar":"شامبو"},
    {"category_name":"Shoes","category_name_ar":"أحذية"},
    {"category_name":"Software","category_name_ar":"برمجيات"},
    {"category_name":"Sound recording or reproducing apparatus .","category_name_ar":"اجهزة تسجيل أو اذاعة الصوت"},
    {"category_name":"Spare Parts","category_name_ar":"قطع غيار"},
    {"category_name":"Speaker","category_name_ar":"سماعات"},
    {"category_name":"Sporting Goods","category_name_ar":"السلع الرياضية"},
    {"category_name":"Sunglasses","category_name_ar":"ـ نظارات شمسية"},
    {"category_name":"Tablet","category_name_ar":"لوح رقمي"},
    {"category_name":"Tools","category_name_ar":"عدد يدويّة"},
    {"category_name":"ToothBrush","category_name_ar":"فرشاة الأسنان"},
    {"category_name":"Toys","category_name_ar":"ألعاب"},
    {"category_name":"Trays, dishes, plates, cups and the like","category_name_ar":"ـ صواني وأطباق وأكواب وما يماثلها"},
    {"category_name":"TV","category_name_ar":"شاشة تلفاز"},
    {"category_name":"US Made Cosmetics","category_name_ar":"منتجات الأمريكية مكياج|عناية شخصية"},
    {"category_name":"US Made Products","category_name_ar":"منتجات الأمريكية"},
    {"category_name":"Vitamins","category_name_ar":"فيتامين"},
    {"category_name":"Watch (Mechanical display only)","category_name_ar":"ساعة غير إلكترونية"},
    {"category_name":"Watch/Sports watches/wearable gear","category_name_ar":"ساعة / ساعات الرياضة / يمكن ارتداؤها والعتاد"}
  ]
  return cats;
},

getCategories: function () {
var cats = [
  {
 "category_name":"Accessories (General)",
 "category_name_ar":"???????? ????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0.09,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Adapters",
 "category_name_ar":"?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0.09,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"All Audio/Video",
 "category_name_ar":"???? ?????",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0.09,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Auto Parts",
 "category_name_ar":"??? ??????",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Battery",
 "category_name_ar":"???????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.12,
 "margin_aqaba": 0.15,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Belts and Wallets",
 "category_name_ar":"????? ? ?????",
 "customs": 0.25,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Bicycles (including delivery tricycles), not motorized.",
 "category_name_ar":"?????? ????? ??? ?????? ??????? ???? ? ???? ???????",
 "customs": 0.25,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 8
 },
 {
 "category_name":"Binoculars/Telescopes",
 "category_name_ar":"?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Books",
 "category_name_ar":"????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Bracelett",
 "category_name_ar":"????? ????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Brooms and brushes",
 "category_name_ar":"????? ???????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Cables/Adapters",
 "category_name_ar":"?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Camera Digital",
 "category_name_ar":"?????? ?????",
 "customs": 0,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Camera for documents",
 "category_name_ar":"?????? ???????",
 "customs": 0.15,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Camera Lens",
 "category_name_ar":"???? ??????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Capacitor (Fixed)",
 "category_name_ar":"???????? ???????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Carpets",
 "category_name_ar":"????",
 "customs": 0.25,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Carrying Case",
 "category_name_ar":"?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 4
 },
 {
 "category_name":"Charger",
 "category_name_ar":"????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Cleaning Agents/Detergents",
 "category_name_ar":"??????",
 "customs": 0.12,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Clothing",
 "category_name_ar":"?????",
 "customs": 0.25,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 1.18,
 "min_side_length": 1
 },
 {
 "category_name":"Clothing accessories  Leather gloves, mittens and mitts)",
 "category_name_ar":"? ????? ????? ?  ???????? ???????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 1.35,
 "min_side_length": 1
 },
 {
 "category_name":"Clothing Dresses or Suits",
 "category_name_ar":"????? ??????? ????????",
 "customs": 0.25,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 1.35,
 "min_side_length": 1
 },
 {
 "category_name":"Computer Card",
 "category_name_ar":"? ????? ?????? ?????? ???????? ??????? ?? ????????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Computer Case No power Supply",
 "category_name_ar":"????? ??????? ???? ???? ????????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 10
 },
 {
 "category_name":"Computer Case With power Supply",
 "category_name_ar":"????? ??????? ?? ???? ????????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 10
 },
 {
 "category_name":"Computer Fan",
 "category_name_ar":"????? ???????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Computer Parts",
 "category_name_ar":"??? ???????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Computer Replacement Parts",
 "category_name_ar":"???  ???? ???????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"converters (Static)",
 "category_name_ar":"?????? ?????? ?????",
 "customs": 0.25,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"cosmetics or toilet preparations",
 "category_name_ar":"???? ??????? ?? ?????? ???????",
 "customs": 0.12,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.16,
 "margin_aqaba": 0.16,
 "special_tax": 0.05,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Cover",
 "category_name_ar":"???",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 1.37,
 "min_side_length": 1
 },
 {
 "category_name":"CPU/Processor",
 "category_name_ar":"? ????? ?????? ?????? ???????? ??????? ?? ????????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 3
 },
 {
 "category_name":"Dental Care",
 "category_name_ar":"??????? ????????",
 "customs": 0.12,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Drilling, threading or tapping tools",
 "category_name_ar":"? ????? ???? ??????",
 "customs": 0.15,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Electric Applieances",
 "category_name_ar":"??????? ??????????",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Electric Scooter",
 "category_name_ar":"????????????",
 "customs": 0,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Electronic calculators",
 "category_name_ar":"? ???? ????? ???????????? ???????? ??? ????? ??????? ???? ????? ?????? ??????????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Exercise equipment for general physical exercise, gymnastics or athletics",
 "category_name_ar":"????? ?????? ??????? ??????? ???????? ?????? ?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"FAN",
 "category_name_ar":"?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Fats and oils and their fractions, of fish, other than liver oils",
 "category_name_ar":"? ???? ????? ????????? ? ?? ????? ??? ??? ?????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Fertilizers",
 "category_name_ar":"?????",
 "customs": 0.15,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Flash Drive/ SD Card",
 "category_name_ar":"???? ???? / ????? ???????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Food/Chocolate/Candy",
 "category_name_ar":"?????? / ?????????? / ?????",
 "customs": 0.25,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Food/Chocolate/Candy US Made",
 "category_name_ar":"?????? / ?????????? / ????? ???????? ??????? ???",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Game Pad",
 "category_name_ar":"???? ?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Game PC or Console",
 "category_name_ar":"???? / ??? ???? ?????? ????? PC",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Glass Wear",
 "category_name_ar":"??? ??????",
 "customs": 0.25,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Gloves (fabric)",
 "category_name_ar":"?????? ?? ????",
 "customs": 0.25,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Graphics Card",
 "category_name_ar":"? ????? ?????? ?????? ???????? ??????? ?? ????????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Hair Preparations (Shampoo etc)",
 "category_name_ar":"???????? ??????? ?????? .",
 "customs": 0.12,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.12,
 "margin_aqaba": 0.12,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Hair-removing appliances",
 "category_name_ar":"? ????? ????? ?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"HardDrives External",
 "category_name_ar":"????? ???? ??????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"HardDrives Internal",
 "category_name_ar":"????? ???? ??????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Hats",
 "category_name_ar":"?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Headphones & earphones, w or w/o microphone",
 "category_name_ar":"?????????? ??? ??????????? ??? ?????????? ? ??? ??????? ????? ?????? ?????",
 "customs": 0.25,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Headset",
 "category_name_ar":"????? ???",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Health and Personal Care",
 "category_name_ar":"?????? ???",
 "customs": 0.12,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.16,
 "margin_aqaba": 0.16,
 "special_tax": 0.05,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Health and Personal Care (Liquids)",
 "category_name_ar":"?????? ??? - ????",
 "customs": 0.12,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.16,
 "margin_aqaba": 0.16,
 "special_tax": 0.05,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Helmet Motor Cycle",
 "category_name_ar":"???? ????? ?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Helmet Sports Leisure",
 "category_name_ar":"???? ??????? ??????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Jewelry - Not Real",
 "category_name_ar":"??????? ???????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Joystick",
 "category_name_ar":"??? ??????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 3
 },
 {
 "category_name":"Keyboard/Mouse",
 "category_name_ar":"???? ???????? / ??????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 4
 },
 {
 "category_name":"kitchenware and Tableware",
 "category_name_ar":"????? ????? ?????",
 "customs": 0.12,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Knee pads",
 "category_name_ar":"?????? ?????",
 "customs": 0.15,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"leather clothes",
 "category_name_ar":"????? ?????",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0.08,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 1.37,
 "min_side_length": 1
 },
 {
 "category_name":"Lighting or visual signalling equipment",
 "category_name_ar":"? ????? ????? ?? ????? ?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Machine-tools for working stone, ceramics, concrete, asbestos-cement , glass",
 "category_name_ar":"??? ???? ???? ????? ?? ????? ?? ???????? ?? ???? ?????? ??????? (?????????) ???????? ?? ???? ?????? ???????? ???????? ?? ???? ?????? ??? ??????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Magazines",
 "category_name_ar":"?????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Medical Apparatus 9022",
 "category_name_ar":"????? ????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Memory",
 "category_name_ar":"?????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"microphone and one or more loudspeakers",
 "category_name_ar":"???? ????? ?? ????? ??? \"??????? \"????? ?? ???? ?? ?????? ?????",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 5
 },
 {
 "category_name":"Microscope",
 "category_name_ar":"????",
 "customs": 0.15,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Mobile Accessory",
 "category_name_ar":"?????? ?????? ??????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Mobile Phone",
 "category_name_ar":"?????? ???????",
 "customs": 0,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Monitor",
 "category_name_ar":"???? ???????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 7
 },
 {
 "category_name":"Motherboard",
 "category_name_ar":"? ????? ?????? ?????? ???????? ??????? ?? ????????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 3
 },
 {
 "category_name":"Mouse Pad",
 "category_name_ar":"???? ???",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Mouse/Keyboard",
 "category_name_ar":"?????? / ???? ????????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 3
 },
 {
 "category_name":"Musical Instruments",
 "category_name_ar":"????? ????????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0.05,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Neck Tie",
 "category_name_ar":"????? ???",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Network Router/Adapter",
 "category_name_ar":"????? ????????? ?? ???? ????? ?? ???????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Notebook",
 "category_name_ar":"??????",
 "customs": 0,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0.09,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 4
 },
 {
 "category_name":"Office Equipment",
 "category_name_ar":"????? ????  ",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Office or school supplies",
 "category_name_ar":"???????",
 "customs": 0.12,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Pasta (Other - not stuffed)",
 "category_name_ar":"??????? ??? ?????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Pasta (Stuffed), whether or not cooked or otherwise prepared",
 "category_name_ar":"??????? ?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"PCs",
 "category_name_ar":"????? ?????????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Perfume",
 "category_name_ar":"???",
 "customs": 0.12,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.16,
 "margin_aqaba": 0.12,
 "special_tax": 0.05,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Perfume - US Made",
 "category_name_ar":"???",
 "customs": 0,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0.05,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Playstation",
 "category_name_ar":"???? ?????",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Production inputs",
 "category_name_ar":"مدخلات انتاج",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Power Suppy",
 "category_name_ar":"???? ??????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Printer",
 "category_name_ar":"?????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Projectors",
 "category_name_ar":"???? ????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Protein concentrates and textured protein substances, other",
 "category_name_ar":"?????? ?????? ????? ????????",
 "customs": 0.15,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Rangefinders",
 "category_name_ar":"? ?????? ???????",
 "customs": 0.15,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Real Jewelry",
 "category_name_ar":"??????? ??? ???? ??????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Scanner",
 "category_name_ar":"???? ????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Seeds (for planting)",
 "category_name_ar":"???? ???????",
 "customs": 0.15,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Shampoos",
 "category_name_ar":"?????",
 "customs": 0.12,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Shoes",
 "category_name_ar":"?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 1.37,
 "min_side_length": 1
 },
 {
 "category_name":"Software",
 "category_name_ar":"???????",
 "customs": 0,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Sound recording or reproducing apparatus .",
 "category_name_ar":"????? ????? ?? ????? ?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Spare Parts",
 "category_name_ar":"??? ????",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Speaker",
 "category_name_ar":"??????",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 5
 },
 {
 "category_name":"Sporting Goods",
 "category_name_ar":"????? ????????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Sunglasses",
 "category_name_ar":"? ?????? ?????",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Tablet",
 "category_name_ar":"??? ????",
 "customs": 0,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Tools",
 "category_name_ar":"??? ??????",
 "customs": 0.15,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"ToothBrush",
 "category_name_ar":"????? ???????",
 "customs": 0.12,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Toys",
 "category_name_ar":"?????",
 "customs": 0.35,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Trays, dishes, plates, cups and the like",
 "category_name_ar":"? ????? ?????? ?????? ??? ???????",
 "customs": 0.25,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"TV",
 "category_name_ar":"???? ?????",
 "customs": 0.25,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"US Made Cosmetics",
 "category_name_ar":"?????? ????????? ?????|????? ?????",
 "customs": 0,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.16,
 "margin_aqaba": 0.16,
 "special_tax": 0.05,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"US Made Products",
 "category_name_ar":"?????? ?????????",
 "customs": 0,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.1,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Vitamins",
 "category_name_ar":"???????",
 "customs": 0.15,
 "tax_aqaba": 0,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Watch (Mechanical display only)",
 "category_name_ar":"???? ??? ?????????",
 "customs": 0.15,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.09,
 "margin_aqaba": 0.1,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 },
 {
 "category_name":"Watch/Sports watches/wearable gear",
 "category_name_ar":"???? / ????? ??????? / ???? ???????? ???????",
 "customs": 0.35,
 "tax_aqaba": 0.07,
 "tax_amm": 0.16,
 "margin_amm": 0.08,
 "margin_aqaba": 0.09,
 "special_tax": 0,
 "us_tax": 0,
 "cap_aqaba": 999,
 "cap_amm": 999,
 "min_side_length": 1
 }
]

return cats;
},

insertAllCats: function() {
  console.log("=======> in insertAllCats");
  var allCats = categories.getCategories();
console.log("allCats Count:",allCats.length);
  MongoClient.connect(mongodbUrl, function(err, db) {
    //assert.equal(null, err);

    insertCats(db, function() {
      db.close();
      return 1;
    });
  }); // connect


  // insertDocument copied example fromhttps://docs.mongodb.com/getting-started/node/insert/
  var insertCats = function(db, callback) {
    for(var i = 0; i < allCats.length; i++) {


    console.log(allCats[i]);

        db.collection('categories').insertOne(allCats[i], function(err, result) {
          //assert.equal(err, null);
          console.log("Inserted a category into the categories collection.");

        });
      }

    callback();
  }; // insertCats
},

insertAllCatsArabic: function() {
  console.log("=======> in insertAllCatsArabic");
  var allCats = categories.getCatArabic();
console.log("allCats Count:",allCats.length);
  MongoClient.connect(mongodbUrl, function(err, db) {
    //assert.equal(null, err);

    insertCats(db, function() {
      db.close();
      return 1;
    });
  }); // connect


  // insertDocument copied example fromhttps://docs.mongodb.com/getting-started/node/insert/
  var insertCats = function(db, callback) {
    for(var i = 0; i < allCats.length; i++) {


    console.log(allCats[i]);

        db.collection('categories_arabic').insertOne(allCats[i], function(err, result) {
          //assert.equal(err, null);
          console.log("Inserted a category into the categories collection.");

        });
      }

    callback();
  }; // insertAllCatsArabic
},

updateCatArabicName: function() {
  console.log("===================> in updateCatArabicName:")
  var docs;
  var allCat = categories.getCatArabic();
  var cat_name;
    var cat_ar ;
    var i;
    MongoClient.connect(mongodbUrl, function(err, db) {
      //assert.equal(null, err);
      // Create a collection we want to drop later
      var collection = db.collection('categories');
      for ( i=0; i < allCat.length; i++) {
          console.log("********* update:",allCat[i].category_name);
           cat_name = allCat[i].category_name;
           cat_ar = allCat[i].category_name_ar;
     console.log("*** update english cat:",cat_name);
      // Peform a simple find and return all the documents
      collection.findAndModify({
        "category_name": cat_name
      }, [
        ['_id', 'asc']
      ], {
        $set: {
          "category_name_ar": cat_ar
        }
      }, {}, function(err, docs) {
        if (err) {
          console.log(" +++++==== updateCatArabicName findAndModify NOT FOUND! ")
        } else {
          console.log("&&&&&&&& __updateCatArabicName_____findAndModify __docs found and updated:", docs);
        }

      });
        } // for
          db.close();
        }); // connect

}, // end updateCatArabicName

findCategory: function(findVal,callback) {

    console.log("=========+++++++++++++++===========> in findCategory:", findVal)
    var docs;

        // Create a collection we want to drop later
        var db = mongoUtil.getDb(function(myDb) {
        //  console.log("*** after getDB *** myDb:",myDb);
          //  console.log("*** after getDB *** db:",db);
          if (typeof db != 'undefined' && db ) {
            console.log("*** got connection db");
          } else if (typeof myDb != 'undefined' && myDb ) {
              console.log("*** got connection myDb");
              db=myDb;
          } else {
            console.log("*** ERROR*** no connection");

              return callback(docs);
          }

function cleanupCat(cat) {

    cat = cat.replace(/  /, " "); // two spaces to one
    cat = cat.replace(/Categories/i,"");
    cat = cat.replace(/Products/i,"");
    cat = cat.replace(/ , /, " ");
    cat = cat.replace(/,/, " ");
    cat = cat.replace(/ies$/i, "");
    cat = cat.replace(/ & /, " ");
    cat = cat.replace(/&/, " ");
      cat = cat.replace(/  /, " "); // two spaces to one
    cat = cat.replace(/ /, "|"); // space to or
    cat = cat.replace(/es$/i, "");
    cat = cat.replace(/s$/i, "");
    console.log("Search cat:",cat);
    return cat;
}

        //  db = mongoUtil.getDb();
        var collection = db.collection('categories');

      findExp = [] ;//{category_name:{$regex:'t'}},

      // remove ies from work endings

      //searchCat = findVal+'|comp';
      if (findVal instanceof Array) {
         // build find expression for array
         for (var j =0 ; j<findVal.length  ; j++){
              searchCat = cleanupCat(findVal[j]);
              if (searchCat.length > 0 ) {
              console.log("Search Val:",searchCat);
              findExp.push( {category_name:{$regex:searchCat, $options:"i"}});
            }

         }
         console.log("------- findVal is an array findExp:",findExp);
       }  else {
          searchCat = cleanupCat(findVal[j]);
          if (searchCat.length > 0 ) {
          console.log("Search Val:",searchCat);
           findExp.push( {category_name:{$regex:searchCat,$options:"i"}});
            console.log("--------- findVal not an array findExp:",findExp);
          }
       }

        /* find({
    $or: [
        {title:{$regex:'aa'}},
        {title:{$regex:'t'}},
        {title:{$not:/wel/}}
    ]
})*/
      searchCat = findVal;

        // Peform a simple find and return all the documents
        // {"category_name": {$regex: ".*abc.", $options:"i"}}
        //{"category_name" :{'$regex' : 'watch', '$options' : 'i'}}
      //  collection.find({"category_name": {$regex: searchCat, $options:"i"}}).limit(10).toArray().then(function(docs) {
      collection.find({
            $or: findExp
          }).limit(10).toArray().then(function(docs) {

          console.log("_______ docs:", docs);

          if (docs && docs.length > 0) {
          //  console.log("*** cats found:", docs);
            //    assert.equal(null, err);
          //  db.close();
          console.log("# of categories matched:",docs.length);

            callback(docs);

          } else if (docs && docs.length == 0) { // no match for findVal
            // how about creating an entry for it and let someone or figure a way later set the message? great idea!
          console.log("******* no categories found")
          } // else if
        });
   });



} // findCategory

};
