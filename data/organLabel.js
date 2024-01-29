const organLabel = [
  {
    "type": "visceral",
    "points": "350.62 381.35 290.91 391.14 233.48 390.63",
    "transform": "translate(163 392.97)",
    "label": "内脏 Visceral"
  },
  {
    "type": "pituitary",
    "points": "445.8,100.7 501.2,95.7 512.2,95.7",
    "transform": "translate(516.06 100.45)",
    "label": "Pituitary 垂体"
  },
  {
    "type": "spinal-cord-c1",
    "points": "448.2,141.7 502.9,164.9 515,164.9",
    "transform": "translate(516.76 169.82)",
    "label": "Spinal cord (cervical c-1) 脊髓（颈椎 C1 段）"
  },
  {
    "type": "limbic-cortex",
    "points": "135.8,37.8 155.1,37.8 254.1,63",
    "transform": "translate(20 40)",
    "label": "边缘皮层 Limbic cortex"
  },
  {
    "type": "temporal-cortex",
    "points": "224.2,115.2 156.3,136.7 134.4,136.7",
    "transform": "translate(7 140)",
    "label": "颞叶皮层 Temporal cortex"
  },
  {
    "type": "medulla",
    "points": "252.6,132.8 158.5,168.5 139.1,168.5",
    "transform": "translate(70 170)",
    "label": "延髓 Medulla"
  },
  {
    "type": "basal-forebrain",
    "points": "233.6,88 156.3,95.6 135.8,95.6",
    "transform": "translate(8 98)",
    "label": "基底前脑 Basal Forebrain"
  },
  {
    "type": "amygdala",
    "points": "471.2,96.3 500,60.6 512.2,60.6",
    "transform": "translate(516.06 63.92)",
    "label": "Amygdala 杏仁核"
  },
  {
    "type": "frontal-cortex-BA9",
    "points": "463.5 51.8 494.73 23.83 512.16 23.83",
    "transform": "translate(516.06 26.56)",
    "label": "Cortex / Frontal Cortex (BA9) 皮质/前额皮质(Brodmann区域9)"
  },
  {
    "type": "cerebellar-hemisphere",
    "points": "512.2,115.9 500,115.9 472.9,117.2",
    "transform": "translate(515.6 119.39)",
    "label": "Cerebellum / Cerebellar Hemisphere 小脑半球"
  },
  {
    "type": "hippocampus",
    "points": "469.2,98 501.3,79.4 512.2,79.4",
    "transform": "translate(516.06 83.38)",
    "label": "Hippocampus 海马体"
  },
  {
    "type": "hypothalamus",
    "points": "448.2,86.7 500.4,41.7 512.8,41.5",
    "transform": "translate(516.06 45)",
    "label": "Hypothalamus 下丘脑"
  },
  {
    "type": "liver",
    "points": "317.92 350.75 251.17 327.58 233.48 327.58",
    "transform": "translate(178 331.7)",
    "label": "肝脏 Liver"
  },
  {
    "type": "kidney",
    "points": "329.84 361.51 290.34 349.06 233.48 348.43",
    "transform": "translate(180 352.12)",
    "label": "肾 Kidney"
  },
  {
    "type": "blood",
    "points": "383.59 545.91 431.15 543.94 473.12 544.26",
    "transform": "translate(476.27 546.89)",
    "label": "Blood 血液"
  },
  {
    "type": "prostate",
    "points": "362.51 448.98 431.36 498.2 473.89 498.42",
    "transform": "translate(476.27 501.8)",
    "label": "Prostate 前列腺"
  },
  {
    "type": "parietal-cortex",
    "points": "250.5,51.8 155.6,23.8 135.8,23.8",
    "transform": "translate(15 26)",
    "label": "顶叶皮层 Parietal cortex"
  },
  {
    "type": "midbrain",
    "points": "233.1,105.2 155.9,114.5 134.4,114.5",
    "transform": "translate(65 118)",
    "label": "中脑 Midbrain"
  },
  {
    "type": "dermis",
    "points": "341.3 445.16 266.37 491.3 233.48 491.3",
    "transform": "translate(167 495.08)",
    "label": "真皮 Dermis"
  },
  {
    "type": "uterus",
    "points": "343.17 434.75 266.88 471.4 233.48 471.4",
    "transform": "translate(170 474.66)",
    "label": "子宫 Uterus"
  },
  {
    "type": "pons",
    "points": "450.2,116.8 501.6,142.4 512.9,142.4",
    "transform": "translate(515 147)",
    "label": "Pons 脑桥"
  },
  {
    "type": "ovary",
    "points": "330.48 425.53 266.12 451.6 233.48 451.6",
    "transform": "translate(173 454.24)",
    "label": "卵巢 Ovary"
  },
  {
    "type": "heart",
    "points": "376.61 301.44 449.12 296.55 472.67 295.74",
    "transform": "translate(476.27 298.93)",
    "label": "Heart 心脏"
  },
  {
    "type": "thymus",
    "points": "352.3,269 431,257 460,257 471,257",
    "transform": "translate(476.27 260)",
    "label": "Thymus 胸腺"
  },
  {
    "type": "occipital-cortex",
    "points": "135.8,51.8 155.2,51.8 285.4,74.7",
    "transform": "translate(20 56)",
    "label": "枕皮层 Occipital cortex"
  },
  {
    "type": "spleen",
    "points": "392.21 344.46 432.25 386.25 472.2 386.46",
    "transform": "translate(476.27 389.1)",
    "label": "Spleen 脾脏"
  },
  {
    "type": "lung",
    "points": "311.95 278.35 261.01 247.82 233.48 247.82",
    "transform": "translate(190 250.01)",
    "label": " 肺 Lung"
  },
  {
    "type": "thalamus",
    "points": "247.5,89.4 156.3,65.8 135.8,65.8",
    "transform": "translate(60 70)",
    "label": "丘脑 Thalamus"
  },
  {
    "type": "breast-mammary",
    "points": "304.36 307.18 252.79 266.03 233.59 266.03",
    "transform": "translate(100 270.43)",
    "label": "乳腺 Breast - Mammary"
  },
  {
    "type": "epidermis",
    "points": "319.13 606.31 266.47 574.04 233.48 574.04",
    "transform": "translate(150 576.77)",
    "label": "表皮 Epidermis"
  },
  {
    "type": "pancreas",
    "points": "348.34 338.3 251.17 287.68 233.48 287.68",
    "transform": "translate(153 290.86)",
    "label": "Pancreas 胰腺"
  },
  {
    "type": "cartilage",
    "points": "471.9,581.3 432.2,581.3 394.4,589.5",
    "transform": "translate(476.27 584.97)",
    "label": "Cartilage 软骨"
  },
  {
    "type": "femoralhead",
    "points": "",
    "transform": "translate(476.27 450)",
    "label": "Femoralhead 股骨头"
  },
  {
    "type": "large-intestine",
    "points": "",
    "transform": "translate(125 415)",
    "label": "大肠 Large Intestine"
  }
]
