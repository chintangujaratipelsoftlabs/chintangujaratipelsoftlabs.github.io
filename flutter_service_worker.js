'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8cb99b49b1877b2efa0c65adbaf59a28",
"index.html": "cd78440f1a5dbb4e2c6eeb84a5b2af06",
"/": "cd78440f1a5dbb4e2c6eeb84a5b2af06",
"firebase-messaging-sw.js": "a14782f6d494303fd700b1e7b7f4e7b0",
"main.dart.js": "1cdfb5d50d8b4e1c9ff24cdefdca6855",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7512ec334f1dc1a319b04a8bb9a568a1",
"assets/AssetManifest.json": "ec72f595c60e80af6967ff055d83e7d9",
"assets/NOTICES": "d2c9a6f98eb3d9f801a28ba9ffa420f3",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/AssetManifest.bin.json": "ac4b89a6079153a95b05b700f10fc8ba",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "eddf741935ad7deb9ccccf8efbc7181c",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/sygicTruck.svg": "242728853b652fa765de8fba7ecd250f",
"assets/packages/map_launcher/assets/icons/naver.svg": "ef3ef5881d4a2beb187dfc87e23b6133",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/copilot.svg": "b412a5f02e8cef01cdb684b03834cc03",
"assets/packages/map_launcher/assets/icons/truckmeister.svg": "416d2d7d2be53cd772bc59b910082a5b",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/tmap.svg": "50c98b143eb16f802a756294ed04b200",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/tomtomgofleet.svg": "5b12dcb09ec0a67934e6586da67a0149",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/kakao.svg": "1c7c75914d64033825ffc0ff2bdbbb58",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/flitsmeister.svg": "44ba265e6077dd5bf98668dc2b8baec1",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "5da3ebc2483670911936150f255c7629",
"assets/fonts/MaterialIcons-Regular.otf": "6259768c11b6e8265fdf9bff2ff69f58",
"assets/assets/select_all.png": "e96c51df5b2ae1d25ffd76fe9c611dff",
"assets/assets/Expanse/foodpending.png": "3aeb53ba75850cf9b411f9cd0b5375a7",
"assets/assets/Expanse/parkingApproved.png": "a281e74dcf6bda8749449b57e9f5b512",
"assets/assets/Expanse/checkIn-reject.png": "04cd18fdd6fa317fc8f678fcdaafd59c",
"assets/assets/Expanse/checkIn-approveTop.png": "51391fd2080853d2410c7de30f81d335",
"assets/assets/Expanse/pin.png": "b6583392d0913924b20b5fe7ccb7c284",
"assets/assets/Expanse/checkIn-icon.png": "228f8b8de7c5a2848bfe8b0005af7a89",
"assets/assets/Expanse/travel.png": "6bbd55e61acbd2e6e95d9a7308e8b012",
"assets/assets/Expanse/signout-approve.png": "7a6a425a94f182a8f3245705edc995b2",
"assets/assets/Expanse/claimIcon.png": "1fec503d4eead2ec1d506461888ccd63",
"assets/assets/Expanse/address.png": "3219632bf7d2f3889a42dc222d1ed26d",
"assets/assets/Expanse/parkingReject.png": "8bba4a3836417956150bf37306a5b67b",
"assets/assets/Expanse/newWindow.png": "950dcbf3e4107887267abf84561bf629",
"assets/assets/Expanse/checkIn-pending.png": "7fd7a19fd0f5a0c80311bfd2f3022dbc",
"assets/assets/Expanse/foodApprovedTop.png": "7a9cddcb42efc5bad5a2251b57e6efcc",
"assets/assets/Expanse/foodReject.png": "3c4e67ba31a335e29860e41dfc6b4a2a",
"assets/assets/Expanse/signInrejected.png": "9243183db0878262d0a5945d8e857d99",
"assets/assets/Expanse/signout-reject.png": "3d9b3932a4578c514826f373688f050e",
"assets/assets/Expanse/parkingPending.png": "000c891f26955a8102aae68bdf1d69e1",
"assets/assets/Expanse/claimexpense.png": "3e445ade3b86387948326ff85efed70e",
"assets/assets/Expanse/history.png": "afde0774be229f6d9ac33f5052997df3",
"assets/assets/Expanse/parking.png": "12591340a7754c41740b4a14d50f2642",
"assets/assets/Expanse/food.png": "88741838890f72cd2ba5456fb6f5263e",
"assets/assets/Expanse/checkOutpending.png": "c304910e2667c810eda5525a1bfaf8df",
"assets/assets/Expanse/checkIn-approve.png": "1b4617fe3de79a8dd400acc1b342b3af",
"assets/assets/Expanse/comment.png": "4b242bee0551b71a3b98c81745677d4b",
"assets/assets/Expanse/signInPending.png": "6435ab023a5d33dbbcaa6a657794d5e1",
"assets/assets/Expanse/scheduled.png": "27161fd78b09765356f7a90b48f1dd3e",
"assets/assets/Expanse/checkOut-icon.png": "8378a3c35fac3cdc8a6471d087e9a9d0",
"assets/assets/Expanse/checkOut-ApprovesTop.png": "87970da635306eba059a4b50ea9a1b12",
"assets/assets/Expanse/signInApprovedTop.png": "249814e1bfc957cb25337ea64ac40663",
"assets/assets/Expanse/checkOut-Approves.png": "b1620f676e2a0a4ee439f0f3002dafe8",
"assets/assets/Expanse/signInApproved.png": "1bf7829ee324c097ba2e768ac6466090",
"assets/assets/Expanse/attachment.png": "f40e59b566e61bf3e2876f8394266b6c",
"assets/assets/Expanse/signout-pending.png": "8fa57b73ad523fa3e03429fc68d6690f",
"assets/assets/Expanse/checkOut-reject.png": "7ea5cda178abeeb10fe7f7457825030c",
"assets/assets/Expanse/signout-approvetop.png": "48fa0678b4cf8edd1e23a5173b7fff2e",
"assets/assets/Expanse/pending.png": "f9fba4b95681a9369c7bd63a8e4c0975",
"assets/assets/calllog/missed.png": "68281bd088d7afb1a4fd1ec92b910439",
"assets/assets/calllog/outgoingunattended.png": "f425f2b4c906b1949e3f8169509f448e",
"assets/assets/calllog/greendot.png": "ec644967a075ff71d07ef20351fc10a8",
"assets/assets/calllog/recording.png": "d91aa04a0d363582e28a6355c76e94df",
"assets/assets/calllog/outgoingattended.png": "27587ba875c143bfada9c1921b5e9053",
"assets/assets/calllog/menu.png": "331dc35ca8b6911011ddf8b9841c541b",
"assets/assets/calllog/orangedot.png": "3f027647c2b25d2ff4dce7611c83b287",
"assets/assets/calllog/incoming_call.png": "38794889dc592b473491c670ca6ddfad",
"assets/assets/calllog/reddot.png": "2cc339e410b4561688d7e0061dabf6f6",
"assets/assets/calllog/outgoing_call.png": "e9607f3c46b11a564bee178953969162",
"assets/assets/fileicons/zip.png": "4669333d943a4e29952c9e139f24c57e",
"assets/assets/fileicons/doc.png": "c010a704f6bb3dd710af87d0aabd4eaf",
"assets/assets/fileicons/tar.png": "b04169fd6d1f41035521e8b89a7873f8",
"assets/assets/fileicons/database.png": "280f69509e9b8e0ae73e6f08aaf33209",
"assets/assets/fileicons/sql.png": "c9d16f24f27952cad4a5671296915b7a",
"assets/assets/fileicons/rar.png": "c377e109a3cb7e19bd52336407d8ad2b",
"assets/assets/fileicons/txt.png": "9fda2cf66fe2f20a079c726537b12184",
"assets/assets/fileicons/rtf.png": "64bc724a4fc9a100947a56760f77b488",
"assets/assets/fileicons/ini.png": "465359a670cc0f137d620fe64a288bbb",
"assets/assets/fileicons/gz.png": "2fb52ea9fdaf1c6fc9151023110d57b1",
"assets/assets/fileicons/xls.png": "249ede39100d93d874f3267e5ab250e1",
"assets/assets/fileicons/excel.png": "87d5d15a90ba625ea70fb20b7bee28b0",
"assets/assets/fileicons/docs.png": "51a088ffa74ca5bd6e025da5396b1002",
"assets/assets/fileicons/pdf.png": "214e1050d023a230be66d908324c1447",
"assets/assets/fileicons/ppt.png": "7505c80351edd111f6350660676eb79f",
"assets/assets/fileicons/odt.png": "151ba17c5f1b10ab6b3c119c13dc5632",
"assets/assets/fileicons/mdb.png": "e1d1238e9d83b000d2c92ab1b69c547a",
"assets/assets/fileicons/ods.png": "8b2e4499e767ea46145ba30ca9c2b432",
"assets/assets/fileicons/odp.png": "f89bd995a7c3e6c7effca1bf86e2029c",
"assets/assets/fileicons/7z.png": "c87570008f79e45103bcbe86b939f459",
"assets/assets/layer.json": "8d71504644e30ad5da9267c4246bbe28",
"assets/assets/collaboration/group.png": "bc362fca8ea8b6c07e0e53c8203b8ff7",
"assets/assets/collaboration/link.png": "aeaa9249c6898b1549147886aec8b407",
"assets/assets/collaboration/contact.png": "8fa3e651ce4942bfa0f80e0ed4b8cccc",
"assets/assets/collaboration/documents.png": "e48e5f3e3ed29dfa41c161439b6f59fa",
"assets/assets/collaboration/video.png": "b099245f55e338279a5854b815d0e2a6",
"assets/assets/collaboration/photos.png": "7408f1d8d74f6923f40cc57dfdd35085",
"assets/assets/sampleprivacypolicy.html": "bf31b44ad634c3dece1e44d7c8bb3790",
"assets/assets/person.svg": "939e35c104aaa8891f69b2a8cfc56c32",
"assets/assets/source.json": "07b69156024f5af59f7f6734f6740d52",
"assets/assets/siteIcon.png": "cd608b61d7bc2a796949607f65f25c42",
"assets/assets/images/intro_6.png": "7f7d365320981df0ff2359719c91edc4",
"assets/assets/images/goup_call_1.png": "901585c10e01c70e198566541a205bd5",
"assets/assets/images/empty-modified.png": "ef9e78994f7e62ad56c5c6537841c709",
"assets/assets/images/intro_7.png": "a80b1fab9e1cc326e6a91d9b2d5ec228",
"assets/assets/images/intro_5.png": "ccc7cf79abd65b78c7cd2a39185d9edd",
"assets/assets/images/intro_4.png": "5a92c56a8a33d708a7a78d9b4a7d2ac8",
"assets/assets/images/KIT19_logo.png": "c413da7c2f27f490c708752d9c65988b",
"assets/assets/images/logobig.png": "b8a2e5a6f17ed3190615ae1472ba003e",
"assets/assets/images/intro_1.png": "3d130331e635f7abfaca9fa176ec5b1c",
"assets/assets/images/intro_3.png": "3301e8d72e3e340a35d97f6945a5e0d0",
"assets/assets/images/intro_2.png": "f026f1a2f89f349b34d6bc67ab008bbe",
"assets/assets/images/logobig512.png": "907f7af183fe686c5ba00d4f39e7720a",
"assets/assets/images/profile.png": "562218a6d486c1b2ecdddfae1c948f87",
"assets/assets/images/group_call_face_small.png": "f623ef52a6ebef3454fb85c38a9eb3c6",
"assets/assets/images/group_call_face_2.png": "3ca7d948e8e4fb01fd615022dfd08220",
"assets/assets/images/group_call_face_3.png": "133c0d1aaa28412652b8747e2b5d8303",
"assets/assets/images/unauth.png": "61569586340fffd090fe747a76a49b99",
"assets/assets/images/calling_face.png": "8cf7eab6fd5f2cb57c1342e2a8e71333",
"assets/assets/images/bg.png": "fdcb639aae7ebd0c9ab382cee184b9f8",
"assets/assets/images/full_image.png": "61c35daf6778c559f8f91a628b940daa",
"assets/assets/arrowdown.png": "80e823a787738086918320a5768ad459",
"assets/assets/siginIcons/quick_checkin.png": "105bf5894d5e6d200ebd901d292d65e2",
"assets/assets/siginIcons/meeting.png": "d0ad34a1c2ecadab7efa0f82b94a5003",
"assets/assets/siginIcons/meeting_edit.png": "cbbe6e278a19b6764f2945590578d6b5",
"assets/assets/siginIcons/add_button.png": "e5f6abe4ceaadb95c02b26915feb5c3f",
"assets/assets/siginIcons/comments.png": "9b8257d6a58bfe6defd15e525706ee19",
"assets/assets/siginIcons/map.png": "d1c8f037921b5ff5e386cc4247c72d29",
"assets/assets/siginIcons/checkout.png": "21f8aafbddc39e1f022f3b904213ae37",
"assets/assets/siginIcons/clock-out.png": "29efb7f45fd63ef5f69c3f11efcf6051",
"assets/assets/siginIcons/clock-in.png": "569a72d63ce49e3d7add966778704fe2",
"assets/assets/siginIcons/location.png": "643e9484f0339083bef83e9101460409",
"assets/assets/siginIcons/phone.png": "5d7e27dacbb9c1fdd42844009150ecde",
"assets/assets/siginIcons/signout.png": "d9092a6843844345d9a6cf0369c7baef",
"assets/assets/siginIcons/signin.png": "4505460fb152de683bd25aae963d8c22",
"assets/assets/siginIcons/teaBreakTop.png": "d6277a83bcc47f1a9acc12a471befce0",
"assets/assets/siginIcons/virtual-meeting.png": "db8acf66211ebda1d61c4d34ec3c8570",
"assets/assets/checkout.png": "0ca844e4d32585a8cf79bef572ef868f",
"assets/assets/tracklocation/track_loc_pin.png": "17f1ce0d37c8979fcae8462c90cc6fd8",
"assets/assets/tracklocation/track_loc_phone.png": "05725cdd91a5c55c573bb1760e6fa1f0",
"assets/assets/tracklocation/track_loc_arrow_up.png": "82304dcb9210dc6f5f8803101c8faed9",
"assets/assets/tracklocation/track_loc_startpoint.png": "aead1e5b1feafb298cfe80ca47d3e82a",
"assets/assets/tracklocation/track_loc_checkout.png": "22e450e12e7dcb508c7d8ad13f1d417a",
"assets/assets/tracklocation/track_loc_punch.png": "ded9886edb8d4882ea19ffc30c8f2380",
"assets/assets/tracklocation/track_loc_car.png": "4819d61978c8324fa65502bb641b9aa8",
"assets/assets/tracklocation/track_loc_activity.png": "400e2d5572081c7746c2ecd29da562c7",
"assets/assets/tracklocation/track_loc_refresh.png": "f0e4eaf602e1f8644078dbbcf1848966",
"assets/assets/tracklocation/track_loc_work.png": "922f8cb42aef5770612451e43e07f9b2",
"assets/assets/tracklocation/track_loc_checkin.png": "b3ff1539b822516adcc552798fb0a34f",
"assets/assets/country_json.json": "776a465fd62ecb3a03ae9d51e0620a87",
"assets/assets/forward.png": "79a24a2371f2c3dd6601dfa5c8775fa5",
"assets/assets/arrowup.png": "99d84edd14f469738c76533e292e0e51",
"assets/assets/icons/ic_date_filter.png": "11e7999896152d011c2bee42b5a25d33",
"assets/assets/icons/cancel-red.png": "77a556124c732077e00ac75755ffcad9",
"assets/assets/icons/add.png": "0439bd54010583f66ba1f41775b775c9",
"assets/assets/icons/email.png": "2cdf02a0b0aca51c6232cb83ac4c71f6",
"assets/assets/icons/mnu_attach.png": "4be3a1e8efa2c12b087db09b046b4293",
"assets/assets/icons/whatsappGreen.png": "50a3a946248d7152566c4707fc94a493",
"assets/assets/icons/watch.png": "a3beab927cea21e8ddd6e233a47c496d",
"assets/assets/icons/notification-bell.png": "60a459f436a0e40af726de3365e3280c",
"assets/assets/icons/rightarrowwhite.png": "8a8f2fef6c74a874521bae33fdfa855f",
"assets/assets/icons/document.png": "0690f09baf56135e66fef54c3f778635",
"assets/assets/icons/editDEtailsIocn.png": "298c22e324a39b762da2ca1af674fafb",
"assets/assets/icons/Icon%2520Back.svg": "0515da7a9c1364be23ffebcfcdc495db",
"assets/assets/icons/oops-error.png": "56ea7e52767cf7a83c20fb61a2f7989e",
"assets/assets/icons/support.png": "03bb9f2afca9825eb4496f7af02e061d",
"assets/assets/icons/mnu_delete.png": "f894cf2d7c67123c4592e5dff8968774",
"assets/assets/icons/telegram.png": "074c87ce7fcc86d9b51df86e51d3ad98",
"assets/assets/icons/voxbay.png": "1e436a7fc9895d8bce4a6f64ad622a60",
"assets/assets/icons/dashboard.png": "742a229588603498bcbb5e71bd0aab64",
"assets/assets/icons/date_filter.png": "38927d0c5a1499181934e214eb738ede",
"assets/assets/icons/Icon%2520Voicemail.svg": "5e8e304f56c5a50a3721e68e40ef90b2",
"assets/assets/icons/radio.png": "94154f36b8cebaff995068e599b4ab32",
"assets/assets/icons/sms.png": "3517aa3417a8db18e3e06e4b5c70f622",
"assets/assets/icons/schedule_call.png": "22f57b3dff669d0aa92eea33f355ea61",
"assets/assets/icons/pin.png": "a84ddf7c93ab3f5b695325196c54dd83",
"assets/assets/icons/followup.png": "641e763cb7435345a947e86619d3874f",
"assets/assets/icons/download.png": "32209fe4b6292811a65b569f6b853610",
"assets/assets/icons/ic_broadcast_closetop.png": "54bb65f5e77d1980dfa2825dc41e4f04",
"assets/assets/icons/sources.png": "c5710c06de20cf86ee7e4aeffd24dbfd",
"assets/assets/icons/import.png": "4ed63205d025bfb3d8aee3475101b0bd",
"assets/assets/icons/mail.png": "b273af0bb104235778c4b4e263397e56",
"assets/assets/icons/Icon%2520Mic.svg": "531f152ac838c9ec44cda68cd7ef5460",
"assets/assets/icons/smiley.png": "822decca122c87408084ff78869a1dd0",
"assets/assets/icons/settings.png": "56868f4ca6d808b93ec685669a7bbc07",
"assets/assets/icons/cancel-icon.png": "df783b5397451313937c48f91593c270",
"assets/assets/icons/ban.png": "32d34383f674f77b18f12cab7b139d95",
"assets/assets/icons/appointment.png": "8e50f768816068a3aca3bed061379e95",
"assets/assets/icons/call-outcome.png": "fa6ef2c76e3fc77c48d9162c00da6eaa",
"assets/assets/icons/ecommerce.png": "9cb2ef9bc617703f39153e901a25f4d9",
"assets/assets/icons/thumbs.png": "a77901ea3e59d3db22f21a1f98ef0455",
"assets/assets/icons/settings2.png": "5ca907b3090370338e287c892c44dc53",
"assets/assets/icons/header-dark.png": "1a92781f1af8fc8351c38017b32fce49",
"assets/assets/icons/timetracker.png": "424365f9d7e57308c24ea6c4a82cdb62",
"assets/assets/icons/country.png": "a6646e4f94b05fe7cf08f456d1282e54",
"assets/assets/icons/email-whatsapp.png": "f98c4c63cf69a4781fdc10654d4f8408",
"assets/assets/icons/3dotshorizontal.png": "507654ebb0ffe0f3fe37ead611ae0ab3",
"assets/assets/icons/label.png": "c9da31037b9065f3fde896178f3eebb4",
"assets/assets/icons/plus-icon.png": "fab6f2110ec44f4643ed0c70f1c42e2b",
"assets/assets/icons/chat_icon.png": "a807881e77ad0c8fe507b1c609fc0cfe",
"assets/assets/icons/comments.png": "9b8257d6a58bfe6defd15e525706ee19",
"assets/assets/icons/map.png": "f5e583a49f89bb962a801f37c413fdd5",
"assets/assets/icons/openmenu.png": "9b6cfe97e7364b06d2b8e605ba1f4b48",
"assets/assets/icons/cancel.png": "c6148735d8ef2c955ab708bf3cdc2ffc",
"assets/assets/icons/date-bg.png": "1d3614d034c0ef38cc8c1d80222a3abf",
"assets/assets/icons/sms-icon.png": "0e0c43565cdbf9a13e7b5041b1bc9614",
"assets/assets/icons/addNotes.png": "4f00228205d23c0a88de82ca54861679",
"assets/assets/icons/whats_app.png": "0688b2ac331cc98c11888187d4a00f9d",
"assets/assets/icons/callLog.png": "cf8413bc6e0861ecbb9c642e489a18f9",
"assets/assets/icons/export.png": "7f8d560fd4d800af4505190151a9610f",
"assets/assets/icons/logout.png": "8927ef367cc7017463d422bef6f57ab0",
"assets/assets/icons/3dotswhite.png": "e8b6fda4647fc0d65c1edbc376ce7f35",
"assets/assets/icons/username.png": "efb94b34c476a5dd72c58a2bb42b184b",
"assets/assets/icons/ic_prohibition.png": "e3ade0c0c797487116058eb0cc45a376",
"assets/assets/icons/tasks.png": "43aee56cece3004ca667f418ab91ad12",
"assets/assets/icons/menulist.png": "247ecc574cf40fa8bb8f5ce210c979ac",
"assets/assets/icons/home.png": "ce246f7ab614273cff1f70993683bf33",
"assets/assets/icons/shop.png": "32893e78b371a4f12c167a2a00ba88e6",
"assets/assets/icons/user.png": "cec4ccb30e41198c7b0a5e117c55eb2b",
"assets/assets/icons/new-enquiry.png": "4915ac676e9819e076418b730d53ac5d",
"assets/assets/icons/reply.png": "b4ebc5a2d13f313b6ca49b658a9324bc",
"assets/assets/icons/no_priviledge.png": "fe4004d68161e93810b10d631c4a79f1",
"assets/assets/icons/congrats-image.png": "9a80689a49ccb033be6818c3126c19fd",
"assets/assets/icons/enquiries.png": "dc79affb209a0d6d908e8a94c3196b4d",
"assets/assets/icons/checkout.png": "21f8aafbddc39e1f022f3b904213ae37",
"assets/assets/icons/megaphone.png": "0b0d6f416e5d6cdc32237fb5443de973",
"assets/assets/icons/user-white.png": "66e6111fa9acbaa79a7824be2220f8d0",
"assets/assets/icons/task.png": "ed0e234ef62e3e8c3e4cf9ff7b3867be",
"assets/assets/icons/contact.png": "fd638e541eed6fa7598c759c08848b05",
"assets/assets/icons/missed_call.png": "7f80171e01fb304e8492fb563f245c27",
"assets/assets/icons/notes.png": "0782337b887850b4e49dfc38a8286a93",
"assets/assets/icons/search.png": "3d63ebb805e4942ba769f9aaffba202c",
"assets/assets/icons/sim.png": "1a046405cb17734fcc544473bdbde835",
"assets/assets/icons/docBlue.png": "636854f6ee65cf70a4bfed864ab10969",
"assets/assets/icons/print.png": "8cab6710e19efd9635d701c3139db1d7",
"assets/assets/icons/Icon%2520User.svg": "d120144d2f2008085242e602ddd4fdc9",
"assets/assets/icons/minus.png": "8d42f8c596953b2978bc549f3e7e83ae",
"assets/assets/icons/ic_broadcast_search.png": "70353c8832aaadc576753c423c229ae7",
"assets/assets/icons/password.png": "2948bba30c4815f538b442de8e4809c3",
"assets/assets/icons/voipIcons.png": "52eb2a6fa777f822b20d25ca7d2b6ebb",
"assets/assets/icons/sendbtn.png": "a952b6173675eb9bdcd99db3e2320192",
"assets/assets/icons/help.png": "f3871f91e3d6c53948fb3f407356e998",
"assets/assets/icons/radio-check.png": "1764c16a35fa0358b710b611c9449416",
"assets/assets/icons/leads.png": "29b30c311ee0017c2807c212036cffc1",
"assets/assets/icons/ic_broadcast_pending.png": "16bd5401dd1fb78c8531b2343eac22bf",
"assets/assets/icons/footer-whiteicon.png": "5b3f0eeb9a2e3111e30068fc022d1b8d",
"assets/assets/icons/invoice.png": "400acac98b471e9c35e04c18cfb4bcff",
"assets/assets/icons/yellowstar.png": "1c5279d30bae89395631845a4d638300",
"assets/assets/icons/minimise.png": "d629da94d1deafbf68dde859a46bdf41",
"assets/assets/icons/pause.png": "9e6324d5b027401247f86b24f724cae5",
"assets/assets/icons/tax.png": "b259701e25ab6de0e2f02527931d86fc",
"assets/assets/icons/Icon%2520Video.svg": "3bd0d47fd680555271aab064cfa10920",
"assets/assets/icons/upload.png": "0c8b7eb0be1165a00de5b713c7772341",
"assets/assets/icons/bodyWhiteicon.png": "be0acada1548717eddb94e6bc0b43554",
"assets/assets/icons/user_place_holder.png": "1488f3932443cab4bf6080e60d2eb807",
"assets/assets/icons/ic_broadcast_cancel.png": "7f0cc625730cfc6606e9b63eb9aacfe1",
"assets/assets/icons/twitter.png": "68715c773f432d72e1d280b283b548dd",
"assets/assets/icons/header-whiteicon.png": "42f4e2bb2de2c9f3fe3f043e2efa0828",
"assets/assets/icons/audio_call.png": "5c37a55f34ce57beece4dc1ffc0c1fac",
"assets/assets/icons/calendar.png": "72a0934edb7fe02e8ded17fb867e7396",
"assets/assets/icons/comment.png": "40b1836d0b3c401430788e751be81767",
"assets/assets/icons/linkedin.png": "a95bd188724a56afe8be0c81267ca69e",
"assets/assets/icons/NotAuthorised.png": "85e5db988574ef095f8b22fcf52ec958",
"assets/assets/icons/money.png": "7e45505146fe798fbe369d5fd28afe9e",
"assets/assets/icons/video_icon.png": "a862c24fcd938995f977c745e4e4acf7",
"assets/assets/icons/video.png": "67da745159f8a6316f7d4986b21d8603",
"assets/assets/icons/docs.png": "66776514c860adcb5d19005bbad68134",
"assets/assets/icons/lifestyle.png": "aebfe947113680400fb03e8cf73fb2e8",
"assets/assets/icons/mobile.png": "9cd9af0b6e4cc0f005d760adeea6f998",
"assets/assets/icons/calender_grey.png": "914228560cb8792b1679ba19af855a54",
"assets/assets/icons/star-black.png": "f88b9aa90cffefd59e8a057e954f53fd",
"assets/assets/icons/ic_broadcast_info.png": "0884034a30f056503f539c5cf3bc2626",
"assets/assets/icons/location.png": "6468562910639741dd25f62123aed72a",
"assets/assets/icons/credit.png": "9f17395df9382e8408fdddc52b0d0b69",
"assets/assets/icons/phone.png": "c1554efb8212b020240eb025041abd1d",
"assets/assets/icons/Icon%2520Volume.svg": "fa204e0d0755dfbbc85e4023c7670c99",
"assets/assets/icons/mnu_edit.png": "a6f3048f5585c2f7990285ee19373d6e",
"assets/assets/icons/audio.png": "2e68d20bb75f83c68a4f7a0abae051e3",
"assets/assets/icons/signout.png": "d9092a6843844345d9a6cf0369c7baef",
"assets/assets/icons/pdf.png": "6c4c3a472131e88f7117fab418a7c89e",
"assets/assets/icons/ic_broadcast_upArrow.png": "8c25526b5c06000f7269719df59fe712",
"assets/assets/icons/lead.png": "60131158bde8bb8a8748bcfabb686f29",
"assets/assets/icons/Icon%2520Close.svg": "51c9b14d4ff9f255e0c261ecbef29271",
"assets/assets/icons/edit.png": "8351fb05e3294390a0dffd50cabc8432",
"assets/assets/icons/checkbox.png": "e35139b77f0994d24d8a69ccfd2eaf62",
"assets/assets/icons/mnu_add.png": "5c0d1681bbc1f1c39b5f84cee2bac7d0",
"assets/assets/icons/trash.png": "3ed72e5a1e72bcbb44d34b8a19b9a510",
"assets/assets/icons/india.png": "35e540b1bda0f7afd96ef09967e2adfa",
"assets/assets/icons/ic_broadcast_import.png": "df7f9b662667cd1dca31d25ce15990a0",
"assets/assets/icons/drawer_icon.png": "9656dc21e6eb972bf0c62ceb5cbf43a6",
"assets/assets/icons/country-time.png": "88d686b7b80f5cc7e86031e8640743e0",
"assets/assets/icons/attachment.png": "9a204454b2d5f14574181a9cb68e10e0",
"assets/assets/icons/incoming_call.png": "5e43e5406ac3edb8317186d93892b66c",
"assets/assets/icons/signin.png": "4505460fb152de683bd25aae963d8c22",
"assets/assets/icons/whatsapp.png": "39aa219bd2cb6f9120f65d67defb95d3",
"assets/assets/icons/google.png": "3fdff700f0f6e77602e5e9022d29ca67",
"assets/assets/icons/voice.png": "221d8252a238b357e5fa62f3556fb482",
"assets/assets/icons/locationicon.png": "6c781944cb9e5b63a97e93536b4f6cb4",
"assets/assets/icons/facebook.png": "74c1939e0b61f4dcb7725f5b11d98c10",
"assets/assets/icons/phone-call.png": "ee82afd996128678ae311995408ed2c8",
"assets/assets/icons/workflow.png": "468cb1ef661d33a4a3447e49bd6b0ab3",
"assets/assets/icons/uploadDoc.png": "0b35c4a4b2fbd59df2365a66fc954e1b",
"assets/assets/icons/chat.png": "70e1065939eb369c5381418b8077958a",
"assets/assets/icons/bodydark.png": "f5e5e2d114db751f4c9779e57667d42c",
"assets/assets/icons/send.png": "74f18a8d7f471fea5a553185f840b767",
"assets/assets/icons/assigned.png": "cc1d67a4b07111d9d0c5f30a89612301",
"assets/assets/icons/Icon%2520Message.svg": "a5021bbbf51f4fe27b8dd23adc320c06",
"assets/assets/icons/snippet.png": "f69d1c2327622fb2e77592e661e31735",
"assets/assets/icons/ic_broadcast_downArrow.png": "8fea6ab9bc300166f661f75ad42ec65c",
"assets/assets/icons/setting.png": "d18463ebee4eb7f069b9319a0a4bcf37",
"assets/assets/icons/images.png": "c12902298f4d683a3d9d417baf49adf0",
"assets/assets/icons/smile.png": "9dc88568adf94d4c2e182b0fc575cc2f",
"assets/assets/icons/Icon%2520Repeat.svg": "28ac737faf1ec9c275aaf81618a1e5ec",
"assets/assets/icons/mobile-app.png": "dc1cd4ee0e1e36bf90467826968f1113",
"assets/assets/icons/outgoing_call.png": "67fa75722ed8c8996b1c9b4c953f66f3",
"assets/assets/icons/downArrow.png": "61e2eedac605164fb1d90109064672f7",
"assets/assets/icons/mobileNo.png": "405041c7205b739cf88205c4e45a8620",
"assets/assets/icons/ic_broadcast_check.png": "88be0295ad16a6d87a04bd5531c40339",
"assets/assets/icons/uploadrecordings.png": "38da8f47c95734c32a1daa61c31d38de",
"assets/assets/icons/appointment_home.png": "2d6f31e5435b3004f85eb22bf19e65d0",
"assets/assets/icons/social.png": "af3ae24423d7fc1eb47cf37203a7c541",
"assets/assets/icons/snooze.png": "962cacb98637a92dccc6d2f3eaa4bc1d",
"assets/assets/icons/copy.png": "26ea164c24a1770d16c0d9865368f5d9",
"assets/assets/icons/companyName.png": "4d12737b5b248f84223b6c21ea6d911c",
"assets/assets/icons/call_end.svg": "4b8c62a3ab8e1299e628fea8647a3b0c",
"assets/assets/icons/blockInfo.png": "3687994e7959086f972f1771dff04383",
"assets/assets/icons/checkboxChecked.png": "95cc98fd9b5d7fac3e4e6e765f7b1466",
"assets/assets/checkin.png": "f51c345a3de7a5ca3aa7adfe2b0e7802",
"assets/assets/symbols/2.0x/marker.png": "5323663bb4a330a00fd013351f558351",
"assets/assets/symbols/3.0x/marker.png": "c1bbe8adb46c987f9b42b8d1446b7717",
"assets/assets/symbols/marker.png": "88267931d8aec28aadd90db351242eed",
"assets/assets/notfound.png": "075b0f963e266c998250898b131d4442",
"assets/assets/archivment.png": "be8eaafa9da2bf75ef34aa20112e6bd7",
"assets/assets/ringtone/calling_ringtone.mp3": "b87f0d332959236fcf1bcbc2779c517e",
"assets/assets/icon/addnew.png": "b5ba0b73d3129206c048b4b10eb97b34",
"assets/assets/icon/download.png": "e7ee9d3a20b11adf9f9fe591647872bb",
"assets/assets/icon/map.png": "63d5b9d6ca0d649e31e7c9a38aa2c2c6",
"assets/assets/icon/cancel.png": "d2a581eccd2fcbaccb76dda52341ab8a",
"assets/assets/icon/search.png": "0562a26dd14c0c72916bac64bdd8d9bb",
"assets/assets/icon/menu.png": "56e584ae7ea045b5ea5c6716cb0b4601",
"assets/assets/icon/upload.png": "70260097b088d7122aad0629f18578e0",
"assets/assets/icon/calendar.png": "7cdd1c8c9c8b5124922573059fe954d9",
"assets/assets/icon/scheduled.png": "8f940644343835d5aa76a8ce3e914f5a",
"assets/assets/icon/delete.png": "2283140cb59919439355b912cd354bfc",
"assets/assets/icon/template.png": "287793702105f3fbf38023402e4c4b09",
"assets/assets/icon/newtab.png": "72452f4409af7193242d93007a03ffa8",
"assets/assets/icon/refresh.png": "d58df8212eff053b299113fcf757179b",
"assets/assets/marketplaceGreen.png": "0b842596e06af413a4071e5bbb7135e3",
"assets/assets/callscreen.gif": "9889e38e8cb60df827a373c47004d8cd",
"assets/assets/checkInIcons/checkinpending.png": "2850b8596b4417699998dc335f858006",
"assets/assets/checkInIcons/checkoutapproved.png": "372e1f01b3742a5e63df18025664d462",
"assets/assets/checkInIcons/checkinnormal.png": "77c6e0d847b33b584c5ef9ab7374b355",
"assets/assets/checkInIcons/checkinapproved.png": "97660a0cfba288130ed8b4200ed4dd47",
"assets/assets/checkInIcons/checkoutnormal.png": "76560a724beaa69f2d724570204dcec7",
"assets/assets/checkInIcons/checkoutpending.png": "fa0391936167cecafa49cc202bda4d78",
"assets/assets/checkInIcons/checkinrejected.png": "c835b068354c1b48f83dee87d87b7fc9",
"assets/assets/checkInIcons/checkoutrejected.png": "78c9772eeb0e8b7bb4079cb2cc175c3c",
"assets/assets/Leave/fullLeave.png": "58b4b9ce1039482a71d0aac8d1c12239",
"assets/assets/Leave/multidays.png": "be31f4b08b00ac5956753578d52fe462",
"assets/assets/Leave/halfLeave.png": "d979a51a813534807c9ed14a25746b78",
"assets/assets/Leave/shortLeave.png": "c48c9b7dcd62607d30035f9b703bd0dc",
"assets/assets/marker.png": "30181284342e8d4234930133ba010ce0",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
