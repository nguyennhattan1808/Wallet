// The approved clay artwork is stored as 60 individual image assets.
export const CATEGORY_ICON_GROUPS=[
  {
    "name": "Ăn uống",
    "icons": [
      [
        "clay:food",
        "Ăn uống"
      ],
      [
        "clay:coffee",
        "Cà phê"
      ],
      [
        "clay:groceries",
        "Đi chợ"
      ],
      [
        "clay:restaurant",
        "Nhà hàng"
      ],
      [
        "clay:drink",
        "Đồ uống"
      ],
      [
        "clay:cake",
        "Bánh ngọt"
      ]
    ]
  },
  {
    "name": "Di chuyển",
    "icons": [
      [
        "clay:scooter",
        "Xe máy"
      ],
      [
        "clay:car",
        "Ô tô"
      ],
      [
        "clay:fuel",
        "Xăng xe"
      ],
      [
        "clay:taxi",
        "Taxi"
      ],
      [
        "clay:bus",
        "Xe buýt"
      ],
      [
        "clay:parking",
        "Gửi xe"
      ]
    ]
  },
  {
    "name": "Nhà cửa",
    "icons": [
      [
        "clay:home",
        "Nhà ở"
      ],
      [
        "clay:electricity",
        "Điện"
      ],
      [
        "clay:water",
        "Nước"
      ],
      [
        "clay:wifi",
        "Internet"
      ],
      [
        "clay:phone",
        "Điện thoại"
      ],
      [
        "clay:furniture",
        "Nội thất"
      ]
    ]
  },
  {
    "name": "Mua sắm",
    "icons": [
      [
        "clay:shopping",
        "Mua sắm"
      ],
      [
        "clay:clothes",
        "Quần áo"
      ],
      [
        "clay:shoes",
        "Giày dép"
      ],
      [
        "clay:beauty",
        "Làm đẹp"
      ],
      [
        "clay:jewelry",
        "Trang sức"
      ],
      [
        "clay:electronics",
        "Đồ điện tử"
      ]
    ]
  },
  {
    "name": "Sức khỏe",
    "icons": [
      [
        "clay:health",
        "Khám bệnh"
      ],
      [
        "clay:medicine",
        "Thuốc"
      ],
      [
        "clay:dental",
        "Nha khoa"
      ],
      [
        "clay:insurance",
        "Bảo hiểm"
      ],
      [
        "clay:sport",
        "Thể thao"
      ],
      [
        "clay:care",
        "Chăm sóc"
      ]
    ]
  },
  {
    "name": "Gia đình & học tập",
    "icons": [
      [
        "clay:family",
        "Gia đình"
      ],
      [
        "clay:baby",
        "Em bé"
      ],
      [
        "clay:tuition",
        "Học phí"
      ],
      [
        "clay:books",
        "Sách vở"
      ],
      [
        "clay:money-bag",
        "Túi tiền vàng"
      ],
      [
        "clay:gift",
        "Quà tặng"
      ]
    ]
  },
  {
    "name": "Giải trí & ăn nhẹ",
    "icons": [
      [
        "clay:cinema",
        "Xem phim"
      ],
      [
        "clay:envelope",
        "Phong bì"
      ],
      [
        "clay:gaming",
        "Trò chơi"
      ],
      [
        "clay:travel",
        "Du lịch"
      ],
      [
        "clay:hotel",
        "Khách sạn"
      ],
      [
        "clay:bread",
        "Bánh mì"
      ]
    ]
  },
  {
    "name": "Dịch vụ & phần mềm",
    "icons": [
      [
        "clay:delivery",
        "Giao hàng"
      ],
      [
        "clay:repair",
        "Sửa chữa"
      ],
      [
        "clay:appliances",
        "Đồ gia dụng"
      ],
      [
        "clay:haircut",
        "Cắt tóc"
      ],
      [
        "clay:wedding",
        "Tiệc cưới"
      ],
      [
        "clay:software",
        "Chi phí phần mềm"
      ]
    ]
  },
  {
    "name": "Tài chính",
    "icons": [
      [
        "clay:cash",
        "Tiền mặt"
      ],
      [
        "clay:bank",
        "Ngân hàng"
      ],
      [
        "clay:card",
        "Thẻ tín dụng"
      ],
      [
        "clay:savings",
        "Tiết kiệm"
      ],
      [
        "clay:investment",
        "Đầu tư"
      ],
      [
        "clay:debt",
        "Trả nợ"
      ]
    ]
  },
  {
    "name": "Thu nhập & khác",
    "icons": [
      [
        "clay:salary",
        "Lương"
      ],
      [
        "clay:business",
        "Kinh doanh"
      ],
      [
        "clay:reward",
        "Thưởng"
      ],
      [
        "clay:tax",
        "Thuế phí"
      ],
      [
        "clay:transfer",
        "Chuyển tiền"
      ],
      [
        "clay:other",
        "Khác"
      ]
    ]
  }
];
export const CLAY_ICON_IDS=CATEGORY_ICON_GROUPS.flatMap(g=>g.icons.map(([id])=>id));
const legacy={
 '🍜':'food','🍚':'food','☕':'coffee','🥤':'drink','🛒':'groceries','🛍️':'shopping','🏠':'home','💡':'electricity','📱':'phone','🌐':'wifi','🧹':'appliances','🐾':'money-bag',
 '🛵':'scooter','🚗':'car','🚌':'bus','⛽':'fuel','✈️':'travel','🏨':'hotel','🎬':'cinema','🎮':'gaming','🎵':'envelope','⚽':'sport','📚':'books','🎓':'tuition',
 '🩺':'health','💊':'medicine','🏥':'health','👪':'family','👶':'baby','👕':'clothes','💄':'beauty','🎁':'gift','❤️':'care','🌿':'care','🤝':'software','🧧':'envelope',
 '💼':'salary','🏪':'business','🏆':'reward','💰':'money-bag','🪙':'cash','💵':'cash','🏦':'bank','💳':'card','📈':'investment','🐷':'savings','🧾':'tax','🏷️':'other'
};
// Old backups and categories remain valid. Normalization only changes their presentation.
export const CATEGORY_ICONS=[...CLAY_ICON_IDS,...Object.keys(legacy)];
const defaults={'Ăn uống':'food','Mua sắm':'shopping','Di chuyển':'scooter','Nhà cửa':'home','Nhà ở':'home','Sức khỏe':'health','Gia đình':'family','Giải trí':'cinema','Khác':'other','Lương':'salary','Kinh doanh':'business','Thưởng':'reward','Quà tặng':'gift','Thu khác':'money-bag'};
export function categoryIcon(category){if(CLAY_ICON_IDS.includes(category?.icon))return category.icon;if(legacy[category?.icon])return 'clay:'+legacy[category.icon];return 'clay:'+(defaults[category?.name]||CATEGORY_ICON_GROUPS.flatMap(g=>g.icons).find(([,name])=>name===category?.name)?.[0]?.slice(5)||(category?.type==='income'?'money-bag':'other'));}
export function categoryIconSrc(icon){const id=CLAY_ICON_IDS.includes(icon)?icon:'clay:other';return './icons/clay-v1/'+id.slice(5)+'.webp';}
