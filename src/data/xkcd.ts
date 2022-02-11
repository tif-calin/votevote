const xkcd: { [color: string]: { hex: string, rgb: number[], hsl: number[] } } = {
  'cloudy blue': {
    hex: '#acc2d9',
    rgb: [172,194,217],
    hsl: [211,37,76]
  },
  'dark pastel green': {
    hex: '#56ae57',
    rgb: [86,174,87],
    hsl: [121,35,51]
  },
  'dust': {
    hex: '#b2996e',
    rgb: [178,153,110],
    hsl: [38,31,56]
  },
  'electric lime': {
    hex: '#a8ff04',
    rgb: [168,255,4],
    hsl: [81,100,51]
  },
  'fresh green': {
    hex: '#69d84f',
    rgb: [105,216,79],
    hsl: [109,64,58]
  },
  'light eggplant': {
    hex: '#894585',
    rgb: [137,69,133],
    hsl: [304,33,40]
  },
  'nasty green': {
    hex: '#70b23f',
    rgb: [112,178,63],
    hsl: [94,48,47]
  },
  'really light blue': {
    hex: '#d4ffff',
    rgb: [212,255,255],
    hsl: [180,100,92]
  },
  'tea': {
    hex: '#65ab7c',
    rgb: [101,171,124],
    hsl: [140,29,53]
  },
  'warm purple': {
    hex: '#952e8f',
    rgb: [149,46,143],
    hsl: [303,53,38]
  },
  'yellowish tan': {
    hex: '#fcfc81',
    rgb: [252,252,129],
    hsl: [60,95,75]
  },
  'cement': {
    hex: '#a5a391',
    rgb: [165,163,145],
    hsl: [54,10,61]
  },
  'dark grass green': {
    hex: '#388004',
    rgb: [56,128,4],
    hsl: [95,94,26]
  },
  'dusty teal': {
    hex: '#4c9085',
    rgb: [76,144,133],
    hsl: [170,31,43]
  },
  'grey teal': {
    hex: '#5e9b8a',
    rgb: [94,155,138],
    hsl: [163,24,49]
  },
  'macaroni and cheese': {
    hex: '#efb435',
    rgb: [239,180,53],
    hsl: [41,85,57]
  },
  'pinkish tan': {
    hex: '#d99b82',
    rgb: [217,155,130],
    hsl: [17,53,68]
  },
  'spruce': {
    hex: '#0a5f38',
    rgb: [10,95,56],
    hsl: [152,81,21]
  },
  'strong blue': {
    hex: '#0c06f7',
    rgb: [12,6,247],
    hsl: [241,95,50]
  },
  'toxic green': {
    hex: '#61de2a',
    rgb: [97,222,42],
    hsl: [102,73,52]
  },
  'windows blue': {
    hex: '#3778bf',
    rgb: [55,120,191],
    hsl: [211,55,48]
  },
  'blue blue': {
    hex: '#2242c7',
    rgb: [34,66,199],
    hsl: [228,71,46]
  },
  'blue with a hint of purple': {
    hex: '#533cc6',
    rgb: [83,60,198],
    hsl: [250,55,51]
  },
  'booger': {
    hex: '#9bb53c',
    rgb: [155,181,60],
    hsl: [73,50,47]
  },
  'bright sea green': {
    hex: '#05ffa6',
    rgb: [5,255,166],
    hsl: [159,100,51]
  },
  'dark green blue': {
    hex: '#1f6357',
    rgb: [31,99,87],
    hsl: [169,52,25]
  },
  'deep turquoise': {
    hex: '#017374',
    rgb: [1,115,116],
    hsl: [181,98,23]
  },
  'green teal': {
    hex: '#0cb577',
    rgb: [12,181,119],
    hsl: [158,88,38]
  },
  'strong pink': {
    hex: '#ff0789',
    rgb: [255,7,137],
    hsl: [329,100,51]
  },
  'bland': {
    hex: '#afa88b',
    rgb: [175,168,139],
    hsl: [48,18,62]
  },
  'deep aqua': {
    hex: '#08787f',
    rgb: [8,120,127],
    hsl: [184,88,26]
  },
  'lavender pink': {
    hex: '#dd85d7',
    rgb: [221,133,215],
    hsl: [304,56,69]
  },
  'light moss green': {
    hex: '#a6c875',
    rgb: [166,200,117],
    hsl: [85,43,62]
  },
  'light seafoam green': {
    hex: '#a7ffb5',
    rgb: [167,255,181],
    hsl: [130,100,83]
  },
  'olive yellow': {
    hex: '#c2b709',
    rgb: [194,183,9],
    hsl: [56,91,40]
  },
  'pig pink': {
    hex: '#e78ea5',
    rgb: [231,142,165],
    hsl: [344,65,73]
  },
  'deep lilac': {
    hex: '#966ebd',
    rgb: [150,110,189],
    hsl: [270,37,59]
  },
  'desert': {
    hex: '#ccad60',
    rgb: [204,173,96],
    hsl: [43,51,59]
  },
  'dusty lavender': {
    hex: '#ac86a8',
    rgb: [172,134,168],
    hsl: [306,19,60]
  },
  'purpley grey': {
    hex: '#947e94',
    rgb: [148,126,148],
    hsl: [300,9,54]
  },
  'purply': {
    hex: '#983fb2',
    rgb: [152,63,178],
    hsl: [286,48,47]
  },
  'candy pink': {
    hex: '#ff63e9',
    rgb: [255,99,233],
    hsl: [308,100,69]
  },
  'light pastel green': {
    hex: '#b2fba5',
    rgb: [178,251,165],
    hsl: [111,91,82]
  },
  'boring green': {
    hex: '#63b365',
    rgb: [99,179,101],
    hsl: [122,34,55]
  },
  'kiwi green': {
    hex: '#8ee53f',
    rgb: [142,229,63],
    hsl: [91,76,57]
  },
  'light grey green': {
    hex: '#b7e1a1',
    rgb: [183,225,161],
    hsl: [99,52,76]
  },
  'orange pink': {
    hex: '#ff6f52',
    rgb: [255,111,82],
    hsl: [10,100,66]
  },
  'tea green': {
    hex: '#bdf8a3',
    rgb: [189,248,163],
    hsl: [102,86,81]
  },
  'very light brown': {
    hex: '#d3b683',
    rgb: [211,182,131],
    hsl: [38,48,67]
  },
  'egg shell': {
    hex: '#fffcc4',
    rgb: [255,252,196],
    hsl: [57,100,88]
  },
  'eggplant purple': {
    hex: '#430541',
    rgb: [67,5,65],
    hsl: [302,86,14]
  },
  'powder pink': {
    hex: '#ffb2d0',
    rgb: [255,178,208],
    hsl: [337,100,85]
  },
  'reddish grey': {
    hex: '#997570',
    rgb: [153,117,112],
    hsl: [7,17,52]
  },
  'baby shit brown': {
    hex: '#ad900d',
    rgb: [173,144,13],
    hsl: [49,86,36]
  },
  'liliac': {
    hex: '#c48efd',
    rgb: [196,142,253],
    hsl: [269,97,77]
  },
  'stormy blue': {
    hex: '#507b9c',
    rgb: [80,123,156],
    hsl: [206,32,46]
  },
  'ugly brown': {
    hex: '#7d7103',
    rgb: [125,113,3],
    hsl: [54,95,25]
  },
  'custard': {
    hex: '#fffd78',
    rgb: [255,253,120],
    hsl: [59,100,74]
  },
  'darkish pink': {
    hex: '#da467d',
    rgb: [218,70,125],
    hsl: [338,67,56]
  },
  'deep brown': {
    hex: '#410200',
    rgb: [65,2,0],
    hsl: [2,100,13]
  },
  'greenish beige': {
    hex: '#c9d179',
    rgb: [201,209,121],
    hsl: [65,49,65]
  },
  'manilla': {
    hex: '#fffa86',
    rgb: [255,250,134],
    hsl: [58,100,76]
  },
  'off blue': {
    hex: '#5684ae',
    rgb: [86,132,174],
    hsl: [209,35,51]
  },
  'battleship grey': {
    hex: '#6b7c85',
    rgb: [107,124,133],
    hsl: [201,11,47]
  },
  'browny green': {
    hex: '#6f6c0a',
    rgb: [111,108,10],
    hsl: [58,83,24]
  },
  'bruise': {
    hex: '#7e4071',
    rgb: [126,64,113],
    hsl: [313,33,37]
  },
  'kelley green': {
    hex: '#009337',
    rgb: [0,147,55],
    hsl: [142,100,29]
  },
  'sickly yellow': {
    hex: '#d0e429',
    rgb: [208,228,41],
    hsl: [66,78,53]
  },
  'sunny yellow': {
    hex: '#fff917',
    rgb: [255,249,23],
    hsl: [58,100,55]
  },
  'azul': {
    hex: '#1d5dec',
    rgb: [29,93,236],
    hsl: [221,84,52]
  },
  'darkgreen': {
    hex: '#054907',
    rgb: [5,73,7],
    hsl: [122,87,15]
  },
  'green/yellow': {
    hex: '#b5ce08',
    rgb: [181,206,8],
    hsl: [68,93,42]
  },
  'lichen': {
    hex: '#8fb67b',
    rgb: [143,182,123],
    hsl: [100,29,60]
  },
  'light light green': {
    hex: '#c8ffb0',
    rgb: [200,255,176],
    hsl: [102,100,85]
  },
  'pale gold': {
    hex: '#fdde6c',
    rgb: [253,222,108],
    hsl: [47,97,71]
  },
  'sun yellow': {
    hex: '#ffdf22',
    rgb: [255,223,34],
    hsl: [51,100,57]
  },
  'tan green': {
    hex: '#a9be70',
    rgb: [169,190,112],
    hsl: [76,38,59]
  },
  'burple': {
    hex: '#6832e3',
    rgb: [104,50,227],
    hsl: [258,76,54]
  },
  'butterscotch': {
    hex: '#fdb147',
    rgb: [253,177,71],
    hsl: [35,98,64]
  },
  'toupe': {
    hex: '#c7ac7d',
    rgb: [199,172,125],
    hsl: [38,40,64]
  },
  'dark cream': {
    hex: '#fff39a',
    rgb: [255,243,154],
    hsl: [53,100,80]
  },
  'indian red': {
    hex: '#850e04',
    rgb: [133,14,4],
    hsl: [5,94,27]
  },
  'light lavendar': {
    hex: '#efc0fe',
    rgb: [239,192,254],
    hsl: [285,97,87]
  },
  'poison green': {
    hex: '#40fd14',
    rgb: [64,253,20],
    hsl: [109,98,54]
  },
  'baby puke green': {
    hex: '#b6c406',
    rgb: [182,196,6],
    hsl: [64,94,40]
  },
  'bright yellow green': {
    hex: '#9dff00',
    rgb: [157,255,0],
    hsl: [83,100,50]
  },
  'charcoal grey': {
    hex: '#3c4142',
    rgb: [60,65,66],
    hsl: [190,5,25]
  },
  'squash': {
    hex: '#f2ab15',
    rgb: [242,171,21],
    hsl: [41,89,52]
  },
  'cinnamon': {
    hex: '#ac4f06',
    rgb: [172,79,6],
    hsl: [26,93,35]
  },
  'light pea green': {
    hex: '#c4fe82',
    rgb: [196,254,130],
    hsl: [88,98,75]
  },
  'radioactive green': {
    hex: '#2cfa1f',
    rgb: [44,250,31],
    hsl: [116,96,55]
  },
  'raw sienna': {
    hex: '#9a6200',
    rgb: [154,98,0],
    hsl: [38,100,30]
  },
  'baby purple': {
    hex: '#ca9bf7',
    rgb: [202,155,247],
    hsl: [271,85,79]
  },
  'cocoa': {
    hex: '#875f42',
    rgb: [135,95,66],
    hsl: [25,34,39]
  },
  'light royal blue': {
    hex: '#3a2efe',
    rgb: [58,46,254],
    hsl: [243,99,59]
  },
  'orangeish': {
    hex: '#fd8d49',
    rgb: [253,141,73],
    hsl: [23,98,64]
  },
  'rust brown': {
    hex: '#8b3103',
    rgb: [139,49,3],
    hsl: [20,96,28]
  },
  'sand brown': {
    hex: '#cba560',
    rgb: [203,165,96],
    hsl: [39,51,59]
  },
  'swamp': {
    hex: '#698339',
    rgb: [105,131,57],
    hsl: [81,39,37]
  },
  'tealish green': {
    hex: '#0cdc73',
    rgb: [12,220,115],
    hsl: [150,90,45]
  },
  'burnt siena': {
    hex: '#b75203',
    rgb: [183,82,3],
    hsl: [26,97,36]
  },
  'camo': {
    hex: '#7f8f4e',
    rgb: [127,143,78],
    hsl: [75,29,43]
  },
  'dusk blue': {
    hex: '#26538d',
    rgb: [38,83,141],
    hsl: [214,58,35]
  },
  'fern': {
    hex: '#63a950',
    rgb: [99,169,80],
    hsl: [107,36,49]
  },
  'old rose': {
    hex: '#c87f89',
    rgb: [200,127,137],
    hsl: [352,40,64]
  },
  'pale light green': {
    hex: '#b1fc99',
    rgb: [177,252,153],
    hsl: [105,94,79]
  },
  'peachy pink': {
    hex: '#ff9a8a',
    rgb: [255,154,138],
    hsl: [8,100,77]
  },
  'rosy pink': {
    hex: '#f6688e',
    rgb: [246,104,142],
    hsl: [344,89,69]
  },
  'light bluish green': {
    hex: '#76fda8',
    rgb: [118,253,168],
    hsl: [142,97,73]
  },
  'light bright green': {
    hex: '#53fe5c',
    rgb: [83,254,92],
    hsl: [123,99,66]
  },
  'light neon green': {
    hex: '#4efd54',
    rgb: [78,253,84],
    hsl: [122,98,65]
  },
  'light seafoam': {
    hex: '#a0febf',
    rgb: [160,254,191],
    hsl: [140,98,81]
  },
  'tiffany blue': {
    hex: '#7bf2da',
    rgb: [123,242,218],
    hsl: [168,82,72]
  },
  'washed out green': {
    hex: '#bcf5a6',
    rgb: [188,245,166],
    hsl: [103,80,81]
  },
  'browny orange': {
    hex: '#ca6b02',
    rgb: [202,107,2],
    hsl: [32,98,40]
  },
  'nice blue': {
    hex: '#107ab0',
    rgb: [16,122,176],
    hsl: [200,83,38]
  },
  'sapphire': {
    hex: '#2138ab',
    rgb: [33,56,171],
    hsl: [230,68,40]
  },
  'greyish teal': {
    hex: '#719f91',
    rgb: [113,159,145],
    hsl: [162,19,53]
  },
  'orangey yellow': {
    hex: '#fdb915',
    rgb: [253,185,21],
    hsl: [42,98,54]
  },
  'parchment': {
    hex: '#fefcaf',
    rgb: [254,252,175],
    hsl: [58,98,84]
  },
  'straw': {
    hex: '#fcf679',
    rgb: [252,246,121],
    hsl: [57,96,73]
  },
  'very dark brown': {
    hex: '#1d0200',
    rgb: [29,2,0],
    hsl: [4,100,6]
  },
  'terracota': {
    hex: '#cb6843',
    rgb: [203,104,67],
    hsl: [16,57,53]
  },
  'ugly blue': {
    hex: '#31668a',
    rgb: [49,102,138],
    hsl: [204,48,37]
  },
  'clear blue': {
    hex: '#247afd',
    rgb: [36,122,253],
    hsl: [216,98,57]
  },
  'creme': {
    hex: '#ffffb6',
    rgb: [255,255,182],
    hsl: [60,100,86]
  },
  'foam green': {
    hex: '#90fda9',
    rgb: [144,253,169],
    hsl: [134,96,78]
  },
  'grey/green': {
    hex: '#86a17d',
    rgb: [134,161,125],
    hsl: [105,16,56]
  },
  'light gold': {
    hex: '#fddc5c',
    rgb: [253,220,92],
    hsl: [48,98,68]
  },
  'seafoam blue': {
    hex: '#78d1b6',
    rgb: [120,209,182],
    hsl: [162,49,65]
  },
  'topaz': {
    hex: '#13bbaf',
    rgb: [19,187,175],
    hsl: [176,82,40]
  },
  'violet pink': {
    hex: '#fb5ffc',
    rgb: [251,95,252],
    hsl: [300,96,68]
  },
  'wintergreen': {
    hex: '#20f986',
    rgb: [32,249,134],
    hsl: [148,95,55]
  },
  'yellow tan': {
    hex: '#ffe36e',
    rgb: [255,227,110],
    hsl: [48,100,72]
  },
  'dark fuchsia': {
    hex: '#9d0759',
    rgb: [157,7,89],
    hsl: [327,91,32]
  },
  'indigo blue': {
    hex: '#3a18b1',
    rgb: [58,24,177],
    hsl: [253,76,39]
  },
  'light yellowish green': {
    hex: '#c2ff89',
    rgb: [194,255,137],
    hsl: [91,100,77]
  },
  'pale magenta': {
    hex: '#d767ad',
    rgb: [215,103,173],
    hsl: [323,58,62]
  },
  'rich purple': {
    hex: '#720058',
    rgb: [114,0,88],
    hsl: [314,100,22]
  },
  'sunflower yellow': {
    hex: '#ffda03',
    rgb: [255,218,3],
    hsl: [51,100,51]
  },
  'green/blue': {
    hex: '#01c08d',
    rgb: [1,192,141],
    hsl: [164,99,38]
  },
  'leather': {
    hex: '#ac7434',
    rgb: [172,116,52],
    hsl: [32,54,44]
  },
  'racing green': {
    hex: '#014600',
    rgb: [1,70,0],
    hsl: [119,100,14]
  },
  'vivid purple': {
    hex: '#9900fa',
    rgb: [153,0,250],
    hsl: [277,100,49]
  },
  'dark royal blue': {
    hex: '#02066f',
    rgb: [2,6,111],
    hsl: [238,96,22]
  },
  'hazel': {
    hex: '#8e7618',
    rgb: [142,118,24],
    hsl: [48,71,33]
  },
  'muted pink': {
    hex: '#d1768f',
    rgb: [209,118,143],
    hsl: [344,50,64]
  },
  'booger green': {
    hex: '#96b403',
    rgb: [150,180,3],
    hsl: [70,97,36]
  },
  'canary': {
    hex: '#fdff63',
    rgb: [253,255,99],
    hsl: [61,100,69]
  },
  'cool grey': {
    hex: '#95a3a6',
    rgb: [149,163,166],
    hsl: [191,9,62]
  },
  'dark taupe': {
    hex: '#7f684e',
    rgb: [127,104,78],
    hsl: [32,24,40]
  },
  'darkish purple': {
    hex: '#751973',
    rgb: [117,25,115],
    hsl: [301,65,28]
  },
  'true green': {
    hex: '#089404',
    rgb: [8,148,4],
    hsl: [118,95,30]
  },
  'coral pink': {
    hex: '#ff6163',
    rgb: [255,97,99],
    hsl: [359,100,69]
  },
  'dark sage': {
    hex: '#598556',
    rgb: [89,133,86],
    hsl: [116,21,43]
  },
  'dark slate blue': {
    hex: '#214761',
    rgb: [33,71,97],
    hsl: [204,49,25]
  },
  'flat blue': {
    hex: '#3c73a8',
    rgb: [60,115,168],
    hsl: [209,47,45]
  },
  'mushroom': {
    hex: '#ba9e88',
    rgb: [186,158,136],
    hsl: [26,27,63]
  },
  'rich blue': {
    hex: '#021bf9',
    rgb: [2,27,249],
    hsl: [234,98,49]
  },
  'dirty purple': {
    hex: '#734a65',
    rgb: [115,74,101],
    hsl: [320,22,37]
  },
  'greenblue': {
    hex: '#23c48b',
    rgb: [35,196,139],
    hsl: [159,70,45]
  },
  'icky green': {
    hex: '#8fae22',
    rgb: [143,174,34],
    hsl: [73,67,41]
  },
  'light khaki': {
    hex: '#e6f2a2',
    rgb: [230,242,162],
    hsl: [69,75,79]
  },
  'warm blue': {
    hex: '#4b57db',
    rgb: [75,87,219],
    hsl: [235,67,58]
  },
  'dark hot pink': {
    hex: '#d90166',
    rgb: [217,1,102],
    hsl: [332,99,43]
  },
  'deep sea blue': {
    hex: '#015482',
    rgb: [1,84,130],
    hsl: [201,98,26]
  },
  'carmine': {
    hex: '#9d0216',
    rgb: [157,2,22],
    hsl: [352,97,31]
  },
  'dark yellow green': {
    hex: '#728f02',
    rgb: [114,143,2],
    hsl: [72,97,28]
  },
  'pale peach': {
    hex: '#ffe5ad',
    rgb: [255,229,173],
    hsl: [41,100,84]
  },
  'plum purple': {
    hex: '#4e0550',
    rgb: [78,5,80],
    hsl: [298,88,17]
  },
  'golden rod': {
    hex: '#f9bc08',
    rgb: [249,188,8],
    hsl: [45,95,50]
  },
  'neon red': {
    hex: '#ff073a',
    rgb: [255,7,58],
    hsl: [348,100,51]
  },
  'old pink': {
    hex: '#c77986',
    rgb: [199,121,134],
    hsl: [350,41,63]
  },
  'very pale blue': {
    hex: '#d6fffe',
    rgb: [214,255,254],
    hsl: [179,100,92]
  },
  'blood orange': {
    hex: '#fe4b03',
    rgb: [254,75,3],
    hsl: [17,99,50]
  },
  'grapefruit': {
    hex: '#fd5956',
    rgb: [253,89,86],
    hsl: [1,98,66]
  },
  'sand yellow': {
    hex: '#fce166',
    rgb: [252,225,102],
    hsl: [49,96,69]
  },
  'clay brown': {
    hex: '#b2713d',
    rgb: [178,113,61],
    hsl: [27,49,47]
  },
  'dark blue grey': {
    hex: '#1f3b4d',
    rgb: [31,59,77],
    hsl: [203,43,21]
  },
  'flat green': {
    hex: '#699d4c',
    rgb: [105,157,76],
    hsl: [99,35,46]
  },
  'light green blue': {
    hex: '#56fca2',
    rgb: [86,252,162],
    hsl: [147,97,66]
  },
  'warm pink': {
    hex: '#fb5581',
    rgb: [251,85,129],
    hsl: [344,95,66]
  },
  'dodger blue': {
    hex: '#3e82fc',
    rgb: [62,130,252],
    hsl: [219,97,62]
  },
  'gross green': {
    hex: '#a0bf16',
    rgb: [160,191,22],
    hsl: [71,79,42]
  },
  'ice': {
    hex: '#d6fffa',
    rgb: [214,255,250],
    hsl: [173,100,92]
  },
  'metallic blue': {
    hex: '#4f738e',
    rgb: [79,115,142],
    hsl: [206,29,43]
  },
  'pale salmon': {
    hex: '#ffb19a',
    rgb: [255,177,154],
    hsl: [14,100,80]
  },
  'sap green': {
    hex: '#5c8b15',
    rgb: [92,139,21],
    hsl: [84,74,31]
  },
  'algae': {
    hex: '#54ac68',
    rgb: [84,172,104],
    hsl: [134,35,50]
  },
  'bluey grey': {
    hex: '#89a0b0',
    rgb: [137,160,176],
    hsl: [205,20,61]
  },
  'greeny grey': {
    hex: '#7ea07a',
    rgb: [126,160,122],
    hsl: [114,17,55]
  },
  'highlighter green': {
    hex: '#1bfc06',
    rgb: [27,252,6],
    hsl: [115,98,51]
  },
  'light light blue': {
    hex: '#cafffb',
    rgb: [202,255,251],
    hsl: [175,100,90]
  },
  'light mint': {
    hex: '#b6ffbb',
    rgb: [182,255,187],
    hsl: [124,100,86]
  },
  'raw umber': {
    hex: '#a75e09',
    rgb: [167,94,9],
    hsl: [32,90,35]
  },
  'vivid blue': {
    hex: '#152eff',
    rgb: [21,46,255],
    hsl: [234,100,54]
  },
  'deep lavender': {
    hex: '#8d5eb7',
    rgb: [141,94,183],
    hsl: [272,38,54]
  },
  'dull teal': {
    hex: '#5f9e8f',
    rgb: [95,158,143],
    hsl: [166,25,50]
  },
  'light greenish blue': {
    hex: '#63f7b4',
    rgb: [99,247,180],
    hsl: [153,90,68]
  },
  'mud green': {
    hex: '#606602',
    rgb: [96,102,2],
    hsl: [64,96,20]
  },
  'pinky': {
    hex: '#fc86aa',
    rgb: [252,134,170],
    hsl: [342,95,76]
  },
  'red wine': {
    hex: '#8c0034',
    rgb: [140,0,52],
    hsl: [338,100,27]
  },
  'shit green': {
    hex: '#758000',
    rgb: [117,128,0],
    hsl: [65,100,25]
  },
  'tan brown': {
    hex: '#ab7e4c',
    rgb: [171,126,76],
    hsl: [32,38,48]
  },
  'darkblue': {
    hex: '#030764',
    rgb: [3,7,100],
    hsl: [238,94,20]
  },
  'rosa': {
    hex: '#fe86a4',
    rgb: [254,134,164],
    hsl: [345,98,76]
  },
  'lipstick': {
    hex: '#d5174e',
    rgb: [213,23,78],
    hsl: [343,81,46]
  },
  'pale mauve': {
    hex: '#fed0fc',
    rgb: [254,208,252],
    hsl: [303,96,91]
  },
  'claret': {
    hex: '#680018',
    rgb: [104,0,24],
    hsl: [346,100,20]
  },
  'dandelion': {
    hex: '#fedf08',
    rgb: [254,223,8],
    hsl: [52,99,51]
  },
  'orangered': {
    hex: '#fe420f',
    rgb: [254,66,15],
    hsl: [13,99,53]
  },
  'poop green': {
    hex: '#6f7c00',
    rgb: [111,124,0],
    hsl: [66,100,24]
  },
  'ruby': {
    hex: '#ca0147',
    rgb: [202,1,71],
    hsl: [339,99,40]
  },
  'dark': {
    hex: '#1b2431',
    rgb: [27,36,49],
    hsl: [215,29,15]
  },
  'greenish turquoise': {
    hex: '#00fbb0',
    rgb: [0,251,176],
    hsl: [162,100,49]
  },
  'pastel red': {
    hex: '#db5856',
    rgb: [219,88,86],
    hsl: [1,65,60]
  },
  'piss yellow': {
    hex: '#ddd618',
    rgb: [221,214,24],
    hsl: [58,80,48]
  },
  'bright cyan': {
    hex: '#41fdfe',
    rgb: [65,253,254],
    hsl: [180,99,63]
  },
  'dark coral': {
    hex: '#cf524e',
    rgb: [207,82,78],
    hsl: [2,57,56]
  },
  'algae green': {
    hex: '#21c36f',
    rgb: [33,195,111],
    hsl: [149,71,45]
  },
  'darkish red': {
    hex: '#a90308',
    rgb: [169,3,8],
    hsl: [358,97,34]
  },
  'reddy brown': {
    hex: '#6e1005',
    rgb: [110,16,5],
    hsl: [6,91,23]
  },
  'blush pink': {
    hex: '#fe828c',
    rgb: [254,130,140],
    hsl: [355,98,75]
  },
  'camouflage green': {
    hex: '#4b6113',
    rgb: [75,97,19],
    hsl: [77,67,23]
  },
  'lawn green': {
    hex: '#4da409',
    rgb: [77,164,9],
    hsl: [94,90,34]
  },
  'putty': {
    hex: '#beae8a',
    rgb: [190,174,138],
    hsl: [42,29,64]
  },
  'vibrant blue': {
    hex: '#0339f8',
    rgb: [3,57,248],
    hsl: [227,98,49]
  },
  'dark sand': {
    hex: '#a88f59',
    rgb: [168,143,89],
    hsl: [41,31,50]
  },
  'purple/blue': {
    hex: '#5d21d0',
    rgb: [93,33,208],
    hsl: [261,73,47]
  },
  'saffron': {
    hex: '#feb209',
    rgb: [254,178,9],
    hsl: [41,99,52]
  },
  'twilight': {
    hex: '#4e518b',
    rgb: [78,81,139],
    hsl: [237,28,43]
  },
  'warm brown': {
    hex: '#964e02',
    rgb: [150,78,2],
    hsl: [31,97,30]
  },
  'bluegrey': {
    hex: '#85a3b2',
    rgb: [133,163,178],
    hsl: [200,23,61]
  },
  'bubble gum pink': {
    hex: '#ff69af',
    rgb: [255,105,175],
    hsl: [332,100,71]
  },
  'duck egg blue': {
    hex: '#c3fbf4',
    rgb: [195,251,244],
    hsl: [173,88,87]
  },
  'greenish cyan': {
    hex: '#2afeb7',
    rgb: [42,254,183],
    hsl: [160,99,58]
  },
  'petrol': {
    hex: '#005f6a',
    rgb: [0,95,106],
    hsl: [186,100,21]
  },
  'royal': {
    hex: '#0c1793',
    rgb: [12,23,147],
    hsl: [235,85,31]
  },
  'butter': {
    hex: '#ffff81',
    rgb: [255,255,129],
    hsl: [60,100,75]
  },
  'dusty orange': {
    hex: '#f0833a',
    rgb: [240,131,58],
    hsl: [24,86,58]
  },
  'off yellow': {
    hex: '#f1f33f',
    rgb: [241,243,63],
    hsl: [61,88,60]
  },
  'pale olive green': {
    hex: '#b1d27b',
    rgb: [177,210,123],
    hsl: [83,49,65]
  },
  'orangish': {
    hex: '#fc824a',
    rgb: [252,130,74],
    hsl: [19,97,64]
  },
  'leaf': {
    hex: '#71aa34',
    rgb: [113,170,52],
    hsl: [89,53,44]
  },
  'light blue grey': {
    hex: '#b7c9e2',
    rgb: [183,201,226],
    hsl: [215,43,80]
  },
  'dried blood': {
    hex: '#4b0101',
    rgb: [75,1,1],
    hsl: [0,97,15]
  },
  'lightish purple': {
    hex: '#a552e6',
    rgb: [165,82,230],
    hsl: [274,75,61]
  },
  'rusty red': {
    hex: '#af2f0d',
    rgb: [175,47,13],
    hsl: [13,86,37]
  },
  'lavender blue': {
    hex: '#8b88f8',
    rgb: [139,136,248],
    hsl: [242,89,75]
  },
  'light grass green': {
    hex: '#9af764',
    rgb: [154,247,100],
    hsl: [98,90,68]
  },
  'light mint green': {
    hex: '#a6fbb2',
    rgb: [166,251,178],
    hsl: [128,91,82]
  },
  'sunflower': {
    hex: '#ffc512',
    rgb: [255,197,18],
    hsl: [45,100,54]
  },
  'velvet': {
    hex: '#750851',
    rgb: [117,8,81],
    hsl: [320,87,25]
  },
  'brick orange': {
    hex: '#c14a09',
    rgb: [193,74,9],
    hsl: [21,91,40]
  },
  'lightish red': {
    hex: '#fe2f4a',
    rgb: [254,47,74],
    hsl: [352,99,59]
  },
  'pure blue': {
    hex: '#0203e2',
    rgb: [2,3,226],
    hsl: [240,98,45]
  },
  'twilight blue': {
    hex: '#0a437a',
    rgb: [10,67,122],
    hsl: [209,85,26]
  },
  'violet red': {
    hex: '#a50055',
    rgb: [165,0,85],
    hsl: [329,100,32]
  },
  'yellowy brown': {
    hex: '#ae8b0c',
    rgb: [174,139,12],
    hsl: [47,87,36]
  },
  'carnation': {
    hex: '#fd798f',
    rgb: [253,121,143],
    hsl: [350,97,73]
  },
  'muddy yellow': {
    hex: '#bfac05',
    rgb: [191,172,5],
    hsl: [54,95,38]
  },
  'dark seafoam green': {
    hex: '#3eaf76',
    rgb: [62,175,118],
    hsl: [150,48,46]
  },
  'deep rose': {
    hex: '#c74767',
    rgb: [199,71,103],
    hsl: [345,53,53]
  },
  'dusty red': {
    hex: '#b9484e',
    rgb: [185,72,78],
    hsl: [357,45,50]
  },
  'grey/blue': {
    hex: '#647d8e',
    rgb: [100,125,142],
    hsl: [204,17,47]
  },
  'lemon lime': {
    hex: '#bffe28',
    rgb: [191,254,40],
    hsl: [78,99,58]
  },
  'purple/pink': {
    hex: '#d725de',
    rgb: [215,37,222],
    hsl: [298,74,51]
  },
  'brown yellow': {
    hex: '#b29705',
    rgb: [178,151,5],
    hsl: [51,95,36]
  },
  'purple brown': {
    hex: '#673a3f',
    rgb: [103,58,63],
    hsl: [353,28,32]
  },
  'wisteria': {
    hex: '#a87dc2',
    rgb: [168,125,194],
    hsl: [277,36,63]
  },
  'banana yellow': {
    hex: '#fafe4b',
    rgb: [250,254,75],
    hsl: [61,99,65]
  },
  'lipstick red': {
    hex: '#c0022f',
    rgb: [192,2,47],
    hsl: [346,98,38]
  },
  'water blue': {
    hex: '#0e87cc',
    rgb: [14,135,204],
    hsl: [202,87,43]
  },
  'brown grey': {
    hex: '#8d8468',
    rgb: [141,132,104],
    hsl: [45,15,48]
  },
  'vibrant purple': {
    hex: '#ad03de',
    rgb: [173,3,222],
    hsl: [287,97,44]
  },
  'baby green': {
    hex: '#8cff9e',
    rgb: [140,255,158],
    hsl: [129,100,77]
  },
  'barf green': {
    hex: '#94ac02',
    rgb: [148,172,2],
    hsl: [68,98,34]
  },
  'eggshell blue': {
    hex: '#c4fff7',
    rgb: [196,255,247],
    hsl: [172,100,88]
  },
  'sandy yellow': {
    hex: '#fdee73',
    rgb: [253,238,115],
    hsl: [53,97,72]
  },
  'cool green': {
    hex: '#33b864',
    rgb: [51,184,100],
    hsl: [142,57,46]
  },
  'pale': {
    hex: '#fff9d0',
    rgb: [255,249,208],
    hsl: [52,100,91]
  },
  'blue/grey': {
    hex: '#758da3',
    rgb: [117,141,163],
    hsl: [209,20,55]
  },
  'hot magenta': {
    hex: '#f504c9',
    rgb: [245,4,201],
    hsl: [311,97,49]
  },
  'greyblue': {
    hex: '#77a1b5',
    rgb: [119,161,181],
    hsl: [199,30,59]
  },
  'purpley': {
    hex: '#8756e4',
    rgb: [135,86,228],
    hsl: [261,72,62]
  },
  'baby shit green': {
    hex: '#889717',
    rgb: [136,151,23],
    hsl: [67,74,34]
  },
  'brownish pink': {
    hex: '#c27e79',
    rgb: [194,126,121],
    hsl: [4,37,62]
  },
  'dark aquamarine': {
    hex: '#017371',
    rgb: [1,115,113],
    hsl: [179,98,23]
  },
  'diarrhea': {
    hex: '#9f8303',
    rgb: [159,131,3],
    hsl: [49,96,32]
  },
  'light mustard': {
    hex: '#f7d560',
    rgb: [247,213,96],
    hsl: [46,90,67]
  },
  'pale sky blue': {
    hex: '#bdf6fe',
    rgb: [189,246,254],
    hsl: [187,97,87]
  },
  'turtle green': {
    hex: '#75b84f',
    rgb: [117,184,79],
    hsl: [98,43,52]
  },
  'bright olive': {
    hex: '#9cbb04',
    rgb: [156,187,4],
    hsl: [70,96,37]
  },
  'dark grey blue': {
    hex: '#29465b',
    rgb: [41,70,91],
    hsl: [205,38,26]
  },
  'greeny brown': {
    hex: '#696006',
    rgb: [105,96,6],
    hsl: [55,89,22]
  },
  'lemon green': {
    hex: '#adf802',
    rgb: [173,248,2],
    hsl: [78,98,49]
  },
  'light periwinkle': {
    hex: '#c1c6fc',
    rgb: [193,198,252],
    hsl: [235,91,87]
  },
  'seaweed green': {
    hex: '#35ad6b',
    rgb: [53,173,107],
    hsl: [147,53,44]
  },
  'sunshine yellow': {
    hex: '#fffd37',
    rgb: [255,253,55],
    hsl: [59,100,61]
  },
  'ugly purple': {
    hex: '#a442a0',
    rgb: [164,66,160],
    hsl: [302,43,45]
  },
  'medium pink': {
    hex: '#f36196',
    rgb: [243,97,150],
    hsl: [338,86,67]
  },
  'puke brown': {
    hex: '#947706',
    rgb: [148,119,6],
    hsl: [48,92,30]
  },
  'very light pink': {
    hex: '#fff4f2',
    rgb: [255,244,242],
    hsl: [9,100,97]
  },
  'viridian': {
    hex: '#1e9167',
    rgb: [30,145,103],
    hsl: [158,66,34]
  },
  'bile': {
    hex: '#b5c306',
    rgb: [181,195,6],
    hsl: [64,94,39]
  },
  'faded yellow': {
    hex: '#feff7f',
    rgb: [254,255,127],
    hsl: [60,100,75]
  },
  'very pale green': {
    hex: '#cffdbc',
    rgb: [207,253,188],
    hsl: [102,94,86]
  },
  'vibrant green': {
    hex: '#0add08',
    rgb: [10,221,8],
    hsl: [119,93,45]
  },
  'bright lime': {
    hex: '#87fd05',
    rgb: [135,253,5],
    hsl: [89,98,51]
  },
  'spearmint': {
    hex: '#1ef876',
    rgb: [30,248,118],
    hsl: [144,94,55]
  },
  'light aquamarine': {
    hex: '#7bfdc7',
    rgb: [123,253,199],
    hsl: [155,97,74]
  },
  'light sage': {
    hex: '#bcecac',
    rgb: [188,236,172],
    hsl: [105,63,80]
  },
  'yellowgreen': {
    hex: '#bbf90f',
    rgb: [187,249,15],
    hsl: [76,95,52]
  },
  'baby poo': {
    hex: '#ab9004',
    rgb: [171,144,4],
    hsl: [50,95,34]
  },
  'dark seafoam': {
    hex: '#1fb57a',
    rgb: [31,181,122],
    hsl: [156,71,42]
  },
  'deep teal': {
    hex: '#00555a',
    rgb: [0,85,90],
    hsl: [183,100,18]
  },
  'heather': {
    hex: '#a484ac',
    rgb: [164,132,172],
    hsl: [288,19,60]
  },
  'rust orange': {
    hex: '#c45508',
    rgb: [196,85,8],
    hsl: [25,92,40]
  },
  'dirty blue': {
    hex: '#3f829d',
    rgb: [63,130,157],
    hsl: [197,43,43]
  },
  'fern green': {
    hex: '#548d44',
    rgb: [84,141,68],
    hsl: [107,35,41]
  },
  'bright lilac': {
    hex: '#c95efb',
    rgb: [201,94,251],
    hsl: [281,95,68]
  },
  'weird green': {
    hex: '#3ae57f',
    rgb: [58,229,127],
    hsl: [144,77,56]
  },
  'peacock blue': {
    hex: '#016795',
    rgb: [1,103,149],
    hsl: [199,99,29]
  },
  'avocado green': {
    hex: '#87a922',
    rgb: [135,169,34],
    hsl: [75,67,40]
  },
  'faded orange': {
    hex: '#f0944d',
    rgb: [240,148,77],
    hsl: [26,84,62]
  },
  'grape purple': {
    hex: '#5d1451',
    rgb: [93,20,81],
    hsl: [310,65,22]
  },
  'hot green': {
    hex: '#25ff29',
    rgb: [37,255,41],
    hsl: [121,100,57]
  },
  'lime yellow': {
    hex: '#d0fe1d',
    rgb: [208,254,29],
    hsl: [72,99,55]
  },
  'mango': {
    hex: '#ffa62b',
    rgb: [255,166,43],
    hsl: [35,100,58]
  },
  'shamrock': {
    hex: '#01b44c',
    rgb: [1,180,76],
    hsl: [145,99,35]
  },
  'bubblegum': {
    hex: '#ff6cb5',
    rgb: [255,108,181],
    hsl: [330,100,71]
  },
  'purplish brown': {
    hex: '#6b4247',
    rgb: [107,66,71],
    hsl: [353,24,34]
  },
  'vomit yellow': {
    hex: '#c7c10c',
    rgb: [199,193,12],
    hsl: [58,89,41]
  },
  'pale cyan': {
    hex: '#b7fffa',
    rgb: [183,255,250],
    hsl: [176,100,86]
  },
  'key lime': {
    hex: '#aeff6e',
    rgb: [174,255,110],
    hsl: [94,100,72]
  },
  'tomato red': {
    hex: '#ec2d01',
    rgb: [236,45,1],
    hsl: [11,99,46]
  },
  'lightgreen': {
    hex: '#76ff7b',
    rgb: [118,255,123],
    hsl: [122,100,73]
  },
  'merlot': {
    hex: '#730039',
    rgb: [115,0,57],
    hsl: [330,100,23]
  },
  'night blue': {
    hex: '#040348',
    rgb: [4,3,72],
    hsl: [241,92,15]
  },
  'purpleish pink': {
    hex: '#df4ec8',
    rgb: [223,78,200],
    hsl: [310,69,59]
  },
  'apple': {
    hex: '#6ecb3c',
    rgb: [110,203,60],
    hsl: [99,58,52]
  },
  'baby poop green': {
    hex: '#8f9805',
    rgb: [143,152,5],
    hsl: [64,94,31]
  },
  'green apple': {
    hex: '#5edc1f',
    rgb: [94,220,31],
    hsl: [100,75,49]
  },
  'heliotrope': {
    hex: '#d94ff5',
    rgb: [217,79,245],
    hsl: [290,89,64]
  },
  'yellow/green': {
    hex: '#c8fd3d',
    rgb: [200,253,61],
    hsl: [77,98,62]
  },
  'almost black': {
    hex: '#070d0d',
    rgb: [7,13,13],
    hsl: [180,30,4]
  },
  'cool blue': {
    hex: '#4984b8',
    rgb: [73,132,184],
    hsl: [208,44,50]
  },
  'leafy green': {
    hex: '#51b73b',
    rgb: [81,183,59],
    hsl: [109,51,47]
  },
  'mustard brown': {
    hex: '#ac7e04',
    rgb: [172,126,4],
    hsl: [44,95,35]
  },
  'dusk': {
    hex: '#4e5481',
    rgb: [78,84,129],
    hsl: [233,25,41]
  },
  'dull brown': {
    hex: '#876e4b',
    rgb: [135,110,75],
    hsl: [35,29,41]
  },
  'frog green': {
    hex: '#58bc08',
    rgb: [88,188,8],
    hsl: [93,92,38]
  },
  'vivid green': {
    hex: '#2fef10',
    rgb: [47,239,16],
    hsl: [112,87,50]
  },
  'bright light green': {
    hex: '#2dfe54',
    rgb: [45,254,84],
    hsl: [131,99,59]
  },
  'fluro green': {
    hex: '#0aff02',
    rgb: [10,255,2],
    hsl: [118,100,50]
  },
  'kiwi': {
    hex: '#9cef43',
    rgb: [156,239,67],
    hsl: [89,84,60]
  },
  'seaweed': {
    hex: '#18d17b',
    rgb: [24,209,123],
    hsl: [152,79,46]
  },
  'navy green': {
    hex: '#35530a',
    rgb: [53,83,10],
    hsl: [85,78,18]
  },
  'ultramarine blue': {
    hex: '#1805db',
    rgb: [24,5,219],
    hsl: [245,96,44]
  },
  'iris': {
    hex: '#6258c4',
    rgb: [98,88,196],
    hsl: [246,48,56]
  },
  'pastel orange': {
    hex: '#ff964f',
    rgb: [255,150,79],
    hsl: [24,100,65]
  },
  'yellowish orange': {
    hex: '#ffab0f',
    rgb: [255,171,15],
    hsl: [39,100,53]
  },
  'perrywinkle': {
    hex: '#8f8ce7',
    rgb: [143,140,231],
    hsl: [242,65,73]
  },
  'tealish': {
    hex: '#24bca8',
    rgb: [36,188,168],
    hsl: [172,68,44]
  },
  'dark plum': {
    hex: '#3f012c',
    rgb: [63,1,44],
    hsl: [318,97,13]
  },
  'pear': {
    hex: '#cbf85f',
    rgb: [203,248,95],
    hsl: [78,92,67]
  },
  'pinkish orange': {
    hex: '#ff724c',
    rgb: [255,114,76],
    hsl: [13,100,65]
  },
  'midnight purple': {
    hex: '#280137',
    rgb: [40,1,55],
    hsl: [283,96,11]
  },
  'light urple': {
    hex: '#b36ff6',
    rgb: [179,111,246],
    hsl: [270,88,70]
  },
  'dark mint': {
    hex: '#48c072',
    rgb: [72,192,114],
    hsl: [141,49,52]
  },
  'greenish tan': {
    hex: '#bccb7a',
    rgb: [188,203,122],
    hsl: [71,44,64]
  },
  'light burgundy': {
    hex: '#a8415b',
    rgb: [168,65,91],
    hsl: [345,44,46]
  },
  'turquoise blue': {
    hex: '#06b1c4',
    rgb: [6,177,196],
    hsl: [186,94,40]
  },
  'ugly pink': {
    hex: '#cd7584',
    rgb: [205,117,132],
    hsl: [350,47,63]
  },
  'sandy': {
    hex: '#f1da7a',
    rgb: [241,218,122],
    hsl: [48,81,71]
  },
  'electric pink': {
    hex: '#ff0490',
    rgb: [255,4,144],
    hsl: [327,100,51]
  },
  'muted purple': {
    hex: '#805b87',
    rgb: [128,91,135],
    hsl: [290,19,44]
  },
  'mid green': {
    hex: '#50a747',
    rgb: [80,167,71],
    hsl: [114,40,47]
  },
  'greyish': {
    hex: '#a8a495',
    rgb: [168,164,149],
    hsl: [47,10,62]
  },
  'neon yellow': {
    hex: '#cfff04',
    rgb: [207,255,4],
    hsl: [71,100,51]
  },
  'banana': {
    hex: '#ffff7e',
    rgb: [255,255,126],
    hsl: [60,100,75]
  },
  'carnation pink': {
    hex: '#ff7fa7',
    rgb: [255,127,167],
    hsl: [341,100,75]
  },
  'tomato': {
    hex: '#ef4026',
    rgb: [239,64,38],
    hsl: [8,86,54]
  },
  'sea': {
    hex: '#3c9992',
    rgb: [60,153,146],
    hsl: [175,44,42]
  },
  'muddy brown': {
    hex: '#886806',
    rgb: [136,104,6],
    hsl: [45,92,28]
  },
  'turquoise green': {
    hex: '#04f489',
    rgb: [4,244,137],
    hsl: [153,97,49]
  },
  'buff': {
    hex: '#fef69e',
    rgb: [254,246,158],
    hsl: [55,98,81]
  },
  'fawn': {
    hex: '#cfaf7b',
    rgb: [207,175,123],
    hsl: [37,47,65]
  },
  'muted blue': {
    hex: '#3b719f',
    rgb: [59,113,159],
    hsl: [208,46,43]
  },
  'pale rose': {
    hex: '#fdc1c5',
    rgb: [253,193,197],
    hsl: [356,94,87]
  },
  'dark mint green': {
    hex: '#20c073',
    rgb: [32,192,115],
    hsl: [151,71,44]
  },
  'amethyst': {
    hex: '#9b5fc0',
    rgb: [155,95,192],
    hsl: [277,43,56]
  },
  'blue/green': {
    hex: '#0f9b8e',
    rgb: [15,155,142],
    hsl: [174,82,33]
  },
  'chestnut': {
    hex: '#742802',
    rgb: [116,40,2],
    hsl: [20,97,23]
  },
  'sick green': {
    hex: '#9db92c',
    rgb: [157,185,44],
    hsl: [72,62,45]
  },
  'pea': {
    hex: '#a4bf20',
    rgb: [164,191,32],
    hsl: [70,71,44]
  },
  'rusty orange': {
    hex: '#cd5909',
    rgb: [205,89,9],
    hsl: [24,92,42]
  },
  'stone': {
    hex: '#ada587',
    rgb: [173,165,135],
    hsl: [47,19,60]
  },
  'rose red': {
    hex: '#be013c',
    rgb: [190,1,60],
    hsl: [341,99,37]
  },
  'pale aqua': {
    hex: '#b8ffeb',
    rgb: [184,255,235],
    hsl: [163,100,86]
  },
  'deep orange': {
    hex: '#dc4d01',
    rgb: [220,77,1],
    hsl: [21,99,43]
  },
  'earth': {
    hex: '#a2653e',
    rgb: [162,101,62],
    hsl: [23,45,44]
  },
  'mossy green': {
    hex: '#638b27',
    rgb: [99,139,39],
    hsl: [84,56,35]
  },
  'grassy green': {
    hex: '#419c03',
    rgb: [65,156,3],
    hsl: [96,96,31]
  },
  'pale lime green': {
    hex: '#b1ff65',
    rgb: [177,255,101],
    hsl: [90,100,70]
  },
  'light grey blue': {
    hex: '#9dbcd4',
    rgb: [157,188,212],
    hsl: [206,39,72]
  },
  'pale grey': {
    hex: '#fdfdfe',
    rgb: [253,253,254],
    hsl: [240,33,99]
  },
  'asparagus': {
    hex: '#77ab56',
    rgb: [119,171,86],
    hsl: [97,34,50]
  },
  'blueberry': {
    hex: '#464196',
    rgb: [70,65,150],
    hsl: [244,40,42]
  },
  'purple red': {
    hex: '#990147',
    rgb: [153,1,71],
    hsl: [332,99,30]
  },
  'pale lime': {
    hex: '#befd73',
    rgb: [190,253,115],
    hsl: [87,97,72]
  },
  'greenish teal': {
    hex: '#32bf84',
    rgb: [50,191,132],
    hsl: [155,59,47]
  },
  'caramel': {
    hex: '#af6f09',
    rgb: [175,111,9],
    hsl: [37,90,36]
  },
  'deep magenta': {
    hex: '#a0025c',
    rgb: [160,2,92],
    hsl: [326,98,32]
  },
  'light peach': {
    hex: '#ffd8b1',
    rgb: [255,216,177],
    hsl: [30,100,85]
  },
  'milk chocolate': {
    hex: '#7f4e1e',
    rgb: [127,78,30],
    hsl: [30,62,31]
  },
  'ocher': {
    hex: '#bf9b0c',
    rgb: [191,155,12],
    hsl: [48,88,40]
  },
  'off green': {
    hex: '#6ba353',
    rgb: [107,163,83],
    hsl: [102,33,48]
  },
  'purply pink': {
    hex: '#f075e6',
    rgb: [240,117,230],
    hsl: [305,80,70]
  },
  'lightblue': {
    hex: '#7bc8f6',
    rgb: [123,200,246],
    hsl: [202,87,72]
  },
  'dusky blue': {
    hex: '#475f94',
    rgb: [71,95,148],
    hsl: [221,35,43]
  },
  'golden': {
    hex: '#f5bf03',
    rgb: [245,191,3],
    hsl: [47,98,49]
  },
  'light beige': {
    hex: '#fffeb6',
    rgb: [255,254,182],
    hsl: [59,100,86]
  },
  'butter yellow': {
    hex: '#fffd74',
    rgb: [255,253,116],
    hsl: [59,100,73]
  },
  'dusky purple': {
    hex: '#895b7b',
    rgb: [137,91,123],
    hsl: [318,20,45]
  },
  'french blue': {
    hex: '#436bad',
    rgb: [67,107,173],
    hsl: [217,44,47]
  },
  'ugly yellow': {
    hex: '#d0c101',
    rgb: [208,193,1],
    hsl: [56,99,41]
  },
  'greeny yellow': {
    hex: '#c6f808',
    rgb: [198,248,8],
    hsl: [73,94,50]
  },
  'orangish red': {
    hex: '#f43605',
    rgb: [244,54,5],
    hsl: [12,96,49]
  },
  'shamrock green': {
    hex: '#02c14d',
    rgb: [2,193,77],
    hsl: [144,98,38]
  },
  'orangish brown': {
    hex: '#b25f03',
    rgb: [178,95,3],
    hsl: [32,97,35]
  },
  'tree green': {
    hex: '#2a7e19',
    rgb: [42,126,25],
    hsl: [110,67,30]
  },
  'deep violet': {
    hex: '#490648',
    rgb: [73,6,72],
    hsl: [301,85,15]
  },
  'gunmetal': {
    hex: '#536267',
    rgb: [83,98,103],
    hsl: [195,11,36]
  },
  'blue/purple': {
    hex: '#5a06ef',
    rgb: [90,6,239],
    hsl: [262,95,48]
  },
  'cherry': {
    hex: '#cf0234',
    rgb: [207,2,52],
    hsl: [345,98,41]
  },
  'sandy brown': {
    hex: '#c4a661',
    rgb: [196,166,97],
    hsl: [42,46,57]
  },
  'warm grey': {
    hex: '#978a84',
    rgb: [151,138,132],
    hsl: [19,8,55]
  },
  'dark indigo': {
    hex: '#1f0954',
    rgb: [31,9,84],
    hsl: [258,81,18]
  },
  'midnight': {
    hex: '#03012d',
    rgb: [3,1,45],
    hsl: [243,96,9]
  },
  'bluey green': {
    hex: '#2bb179',
    rgb: [43,177,121],
    hsl: [155,61,43]
  },
  'grey pink': {
    hex: '#c3909b',
    rgb: [195,144,155],
    hsl: [347,30,66]
  },
  'soft purple': {
    hex: '#a66fb5',
    rgb: [166,111,181],
    hsl: [287,32,57]
  },
  'blood': {
    hex: '#770001',
    rgb: [119,0,1],
    hsl: [359,100,23]
  },
  'brown red': {
    hex: '#922b05',
    rgb: [146,43,5],
    hsl: [16,93,30]
  },
  'medium grey': {
    hex: '#7d7f7c',
    rgb: [125,127,124],
    hsl: [100,1,49]
  },
  'berry': {
    hex: '#990f4b',
    rgb: [153,15,75],
    hsl: [334,82,33]
  },
  'poo': {
    hex: '#8f7303',
    rgb: [143,115,3],
    hsl: [48,96,29]
  },
  'purpley pink': {
    hex: '#c83cb9',
    rgb: [200,60,185],
    hsl: [306,56,51]
  },
  'light salmon': {
    hex: '#fea993',
    rgb: [254,169,147],
    hsl: [12,98,79]
  },
  'snot': {
    hex: '#acbb0d',
    rgb: [172,187,13],
    hsl: [65,87,39]
  },
  'easter purple': {
    hex: '#c071fe',
    rgb: [192,113,254],
    hsl: [274,99,72]
  },
  'light yellow green': {
    hex: '#ccfd7f',
    rgb: [204,253,127],
    hsl: [83,97,75]
  },
  'dark navy blue': {
    hex: '#00022e',
    rgb: [0,2,46],
    hsl: [237,100,9]
  },
  'drab': {
    hex: '#828344',
    rgb: [130,131,68],
    hsl: [61,32,39]
  },
  'light rose': {
    hex: '#ffc5cb',
    rgb: [255,197,203],
    hsl: [354,100,89]
  },
  'rouge': {
    hex: '#ab1239',
    rgb: [171,18,57],
    hsl: [345,81,37]
  },
  'purplish red': {
    hex: '#b0054b',
    rgb: [176,5,75],
    hsl: [335,94,35]
  },
  'slime green': {
    hex: '#99cc04',
    rgb: [153,204,4],
    hsl: [75,96,41]
  },
  'baby poop': {
    hex: '#937c00',
    rgb: [147,124,0],
    hsl: [51,100,29]
  },
  'irish green': {
    hex: '#019529',
    rgb: [1,149,41],
    hsl: [136,99,29]
  },
  'pink/purple': {
    hex: '#ef1de7',
    rgb: [239,29,231],
    hsl: [302,87,53]
  },
  'dark navy': {
    hex: '#000435',
    rgb: [0,4,53],
    hsl: [235,100,10]
  },
  'greeny blue': {
    hex: '#42b395',
    rgb: [66,179,149],
    hsl: [164,46,48]
  },
  'light plum': {
    hex: '#9d5783',
    rgb: [157,87,131],
    hsl: [322,29,48]
  },
  'pinkish grey': {
    hex: '#c8aca9',
    rgb: [200,172,169],
    hsl: [6,22,72]
  },
  'dirty orange': {
    hex: '#c87606',
    rgb: [200,118,6],
    hsl: [35,94,40]
  },
  'rust red': {
    hex: '#aa2704',
    rgb: [170,39,4],
    hsl: [13,95,34]
  },
  'pale lilac': {
    hex: '#e4cbff',
    rgb: [228,203,255],
    hsl: [269,100,90]
  },
  'orangey red': {
    hex: '#fa4224',
    rgb: [250,66,36],
    hsl: [8,96,56]
  },
  'primary blue': {
    hex: '#0804f9',
    rgb: [8,4,249],
    hsl: [241,97,50]
  },
  'kermit green': {
    hex: '#5cb200',
    rgb: [92,178,0],
    hsl: [89,100,35]
  },
  'brownish purple': {
    hex: '#76424e',
    rgb: [118,66,78],
    hsl: [346,28,36]
  },
  'murky green': {
    hex: '#6c7a0e',
    rgb: [108,122,14],
    hsl: [68,79,27]
  },
  'wheat': {
    hex: '#fbdd7e',
    rgb: [251,221,126],
    hsl: [46,94,74]
  },
  'very dark purple': {
    hex: '#2a0134',
    rgb: [42,1,52],
    hsl: [288,96,10]
  },
  'bottle green': {
    hex: '#044a05',
    rgb: [4,74,5],
    hsl: [121,90,15]
  },
  'watermelon': {
    hex: '#fd4659',
    rgb: [253,70,89],
    hsl: [354,98,63]
  },
  'deep sky blue': {
    hex: '#0d75f8',
    rgb: [13,117,248],
    hsl: [213,94,51]
  },
  'fire engine red': {
    hex: '#fe0002',
    rgb: [254,0,2],
    hsl: [0,100,50]
  },
  'yellow ochre': {
    hex: '#cb9d06',
    rgb: [203,157,6],
    hsl: [46,94,41]
  },
  'pumpkin orange': {
    hex: '#fb7d07',
    rgb: [251,125,7],
    hsl: [29,97,51]
  },
  'pale olive': {
    hex: '#b9cc81',
    rgb: [185,204,129],
    hsl: [75,42,65]
  },
  'light lilac': {
    hex: '#edc8ff',
    rgb: [237,200,255],
    hsl: [280,100,89]
  },
  'lightish green': {
    hex: '#61e160',
    rgb: [97,225,96],
    hsl: [120,68,63]
  },
  'carolina blue': {
    hex: '#8ab8fe',
    rgb: [138,184,254],
    hsl: [216,98,77]
  },
  'mulberry': {
    hex: '#920a4e',
    rgb: [146,10,78],
    hsl: [330,87,31]
  },
  'shocking pink': {
    hex: '#fe02a2',
    rgb: [254,2,162],
    hsl: [322,99,50]
  },
  'auburn': {
    hex: '#9a3001',
    rgb: [154,48,1],
    hsl: [18,99,30]
  },
  'bright lime green': {
    hex: '#65fe08',
    rgb: [101,254,8],
    hsl: [97,99,51]
  },
  'celadon': {
    hex: '#befdb7',
    rgb: [190,253,183],
    hsl: [114,95,85]
  },
  'pinkish brown': {
    hex: '#b17261',
    rgb: [177,114,97],
    hsl: [13,34,54]
  },
  'poo brown': {
    hex: '#885f01',
    rgb: [136,95,1],
    hsl: [42,99,27]
  },
  'bright sky blue': {
    hex: '#02ccfe',
    rgb: [2,204,254],
    hsl: [192,99,50]
  },
  'celery': {
    hex: '#c1fd95',
    rgb: [193,253,149],
    hsl: [95,96,79]
  },
  'dirt brown': {
    hex: '#836539',
    rgb: [131,101,57],
    hsl: [36,39,37]
  },
  'strawberry': {
    hex: '#fb2943',
    rgb: [251,41,67],
    hsl: [353,96,57]
  },
  'dark lime': {
    hex: '#84b701',
    rgb: [132,183,1],
    hsl: [77,99,36]
  },
  'copper': {
    hex: '#b66325',
    rgb: [182,99,37],
    hsl: [26,66,43]
  },
  'medium brown': {
    hex: '#7f5112',
    rgb: [127,81,18],
    hsl: [35,75,28]
  },
  'muted green': {
    hex: '#5fa052',
    rgb: [95,160,82],
    hsl: [110,32,47]
  },
  'robin\'s egg': {
    hex: '#6dedfd',
    rgb: [109,237,253],
    hsl: [187,97,71]
  },
  'bright aqua': {
    hex: '#0bf9ea',
    rgb: [11,249,234],
    hsl: [176,95,51]
  },
  'bright lavender': {
    hex: '#c760ff',
    rgb: [199,96,255],
    hsl: [279,100,69]
  },
  'ivory': {
    hex: '#ffffcb',
    rgb: [255,255,203],
    hsl: [60,100,90]
  },
  'very light purple': {
    hex: '#f6cefc',
    rgb: [246,206,252],
    hsl: [292,88,90]
  },
  'light navy': {
    hex: '#155084',
    rgb: [21,80,132],
    hsl: [208,73,30]
  },
  'pink red': {
    hex: '#f5054f',
    rgb: [245,5,79],
    hsl: [342,96,49]
  },
  'olive brown': {
    hex: '#645403',
    rgb: [100,84,3],
    hsl: [50,94,20]
  },
  'poop brown': {
    hex: '#7a5901',
    rgb: [122,89,1],
    hsl: [44,98,24]
  },
  'mustard green': {
    hex: '#a8b504',
    rgb: [168,181,4],
    hsl: [64,96,36]
  },
  'ocean green': {
    hex: '#3d9973',
    rgb: [61,153,115],
    hsl: [155,43,42]
  },
  'very dark blue': {
    hex: '#000133',
    rgb: [0,1,51],
    hsl: [239,100,10]
  },
  'dusty green': {
    hex: '#76a973',
    rgb: [118,169,115],
    hsl: [117,24,56]
  },
  'light navy blue': {
    hex: '#2e5a88',
    rgb: [46,90,136],
    hsl: [211,49,36]
  },
  'minty green': {
    hex: '#0bf77d',
    rgb: [11,247,125],
    hsl: [149,94,51]
  },
  'adobe': {
    hex: '#bd6c48',
    rgb: [189,108,72],
    hsl: [18,47,51]
  },
  'barney': {
    hex: '#ac1db8',
    rgb: [172,29,184],
    hsl: [295,73,42]
  },
  'jade green': {
    hex: '#2baf6a',
    rgb: [43,175,106],
    hsl: [149,61,43]
  },
  'bright light blue': {
    hex: '#26f7fd',
    rgb: [38,247,253],
    hsl: [182,98,57]
  },
  'light lime': {
    hex: '#aefd6c',
    rgb: [174,253,108],
    hsl: [93,97,71]
  },
  'dark khaki': {
    hex: '#9b8f55',
    rgb: [155,143,85],
    hsl: [50,29,47]
  },
  'orange yellow': {
    hex: '#ffad01',
    rgb: [255,173,1],
    hsl: [41,100,50]
  },
  'ocre': {
    hex: '#c69c04',
    rgb: [198,156,4],
    hsl: [47,96,40]
  },
  'maize': {
    hex: '#f4d054',
    rgb: [244,208,84],
    hsl: [47,88,64]
  },
  'faded pink': {
    hex: '#de9dac',
    rgb: [222,157,172],
    hsl: [346,50,74]
  },
  'british racing green': {
    hex: '#05480d',
    rgb: [5,72,13],
    hsl: [127,87,15]
  },
  'sandstone': {
    hex: '#c9ae74',
    rgb: [201,174,116],
    hsl: [41,44,62]
  },
  'mud brown': {
    hex: '#60460f',
    rgb: [96,70,15],
    hsl: [41,73,22]
  },
  'light sea green': {
    hex: '#98f6b0',
    rgb: [152,246,176],
    hsl: [135,84,78]
  },
  'robin egg blue': {
    hex: '#8af1fe',
    rgb: [138,241,254],
    hsl: [187,98,77]
  },
  'aqua marine': {
    hex: '#2ee8bb',
    rgb: [46,232,187],
    hsl: [165,80,55]
  },
  'dark sea green': {
    hex: '#11875d',
    rgb: [17,135,93],
    hsl: [159,78,30]
  },
  'soft pink': {
    hex: '#fdb0c0',
    rgb: [253,176,192],
    hsl: [348,95,84]
  },
  'orangey brown': {
    hex: '#b16002',
    rgb: [177,96,2],
    hsl: [32,98,35]
  },
  'cherry red': {
    hex: '#f7022a',
    rgb: [247,2,42],
    hsl: [350,98,49]
  },
  'burnt yellow': {
    hex: '#d5ab09',
    rgb: [213,171,9],
    hsl: [48,92,44]
  },
  'brownish grey': {
    hex: '#86775f',
    rgb: [134,119,95],
    hsl: [37,17,45]
  },
  'camel': {
    hex: '#c69f59',
    rgb: [198,159,89],
    hsl: [39,49,56]
  },
  'purplish grey': {
    hex: '#7a687f',
    rgb: [122,104,127],
    hsl: [287,10,45]
  },
  'marine': {
    hex: '#042e60',
    rgb: [4,46,96],
    hsl: [213,92,20]
  },
  'greyish pink': {
    hex: '#c88d94',
    rgb: [200,141,148],
    hsl: [353,35,67]
  },
  'pale turquoise': {
    hex: '#a5fbd5',
    rgb: [165,251,213],
    hsl: [153,91,82]
  },
  'pastel yellow': {
    hex: '#fffe71',
    rgb: [255,254,113],
    hsl: [60,100,72]
  },
  'bluey purple': {
    hex: '#6241c7',
    rgb: [98,65,199],
    hsl: [255,54,52]
  },
  'canary yellow': {
    hex: '#fffe40',
    rgb: [255,254,64],
    hsl: [60,100,63]
  },
  'faded red': {
    hex: '#d3494e',
    rgb: [211,73,78],
    hsl: [358,61,56]
  },
  'sepia': {
    hex: '#985e2b',
    rgb: [152,94,43],
    hsl: [28,56,38]
  },
  'coffee': {
    hex: '#a6814c',
    rgb: [166,129,76],
    hsl: [35,37,47]
  },
  'bright magenta': {
    hex: '#ff08e8',
    rgb: [255,8,232],
    hsl: [306,100,52]
  },
  'mocha': {
    hex: '#9d7651',
    rgb: [157,118,81],
    hsl: [29,32,47]
  },
  'ecru': {
    hex: '#feffca',
    rgb: [254,255,202],
    hsl: [61,100,90]
  },
  'purpleish': {
    hex: '#98568d',
    rgb: [152,86,141],
    hsl: [310,28,47]
  },
  'cranberry': {
    hex: '#9e003a',
    rgb: [158,0,58],
    hsl: [338,100,31]
  },
  'darkish green': {
    hex: '#287c37',
    rgb: [40,124,55],
    hsl: [131,51,32]
  },
  'brown orange': {
    hex: '#b96902',
    rgb: [185,105,2],
    hsl: [34,98,37]
  },
  'dusky rose': {
    hex: '#ba6873',
    rgb: [186,104,115],
    hsl: [352,37,57]
  },
  'melon': {
    hex: '#ff7855',
    rgb: [255,120,85],
    hsl: [12,100,67]
  },
  'sickly green': {
    hex: '#94b21c',
    rgb: [148,178,28],
    hsl: [72,73,40]
  },
  'silver': {
    hex: '#c5c9c7',
    rgb: [197,201,199],
    hsl: [150,4,78]
  },
  'purply blue': {
    hex: '#661aee',
    rgb: [102,26,238],
    hsl: [262,86,52]
  },
  'purpleish blue': {
    hex: '#6140ef',
    rgb: [97,64,239],
    hsl: [251,85,59]
  },
  'hospital green': {
    hex: '#9be5aa',
    rgb: [155,229,170],
    hsl: [132,59,75]
  },
  'shit brown': {
    hex: '#7b5804',
    rgb: [123,88,4],
    hsl: [42,94,25]
  },
  'mid blue': {
    hex: '#276ab3',
    rgb: [39,106,179],
    hsl: [211,64,43]
  },
  'amber': {
    hex: '#feb308',
    rgb: [254,179,8],
    hsl: [42,99,51]
  },
  'easter green': {
    hex: '#8cfd7e',
    rgb: [140,253,126],
    hsl: [113,97,74]
  },
  'soft blue': {
    hex: '#6488ea',
    rgb: [100,136,234],
    hsl: [224,76,65]
  },
  'cerulean blue': {
    hex: '#056eee',
    rgb: [5,110,238],
    hsl: [213,96,48]
  },
  'golden brown': {
    hex: '#b27a01',
    rgb: [178,122,1],
    hsl: [41,99,35]
  },
  'bright turquoise': {
    hex: '#0ffef9',
    rgb: [15,254,249],
    hsl: [179,99,53]
  },
  'red pink': {
    hex: '#fa2a55',
    rgb: [250,42,85],
    hsl: [348,95,57]
  },
  'red purple': {
    hex: '#820747',
    rgb: [130,7,71],
    hsl: [329,90,27]
  },
  'greyish brown': {
    hex: '#7a6a4f',
    rgb: [122,106,79],
    hsl: [38,21,39]
  },
  'vermillion': {
    hex: '#f4320c',
    rgb: [244,50,12],
    hsl: [10,91,50]
  },
  'russet': {
    hex: '#a13905',
    rgb: [161,57,5],
    hsl: [20,94,33]
  },
  'steel grey': {
    hex: '#6f828a',
    rgb: [111,130,138],
    hsl: [198,11,49]
  },
  'lighter purple': {
    hex: '#a55af4',
    rgb: [165,90,244],
    hsl: [269,88,65]
  },
  'bright violet': {
    hex: '#ad0afd',
    rgb: [173,10,253],
    hsl: [280,98,52]
  },
  'prussian blue': {
    hex: '#004577',
    rgb: [0,69,119],
    hsl: [205,100,23]
  },
  'slate green': {
    hex: '#658d6d',
    rgb: [101,141,109],
    hsl: [132,17,47]
  },
  'dirty pink': {
    hex: '#ca7b80',
    rgb: [202,123,128],
    hsl: [356,43,64]
  },
  'dark blue green': {
    hex: '#005249',
    rgb: [0,82,73],
    hsl: [173,100,16]
  },
  'pine': {
    hex: '#2b5d34',
    rgb: [43,93,52],
    hsl: [131,37,27]
  },
  'yellowy green': {
    hex: '#bff128',
    rgb: [191,241,40],
    hsl: [75,88,55]
  },
  'dark gold': {
    hex: '#b59410',
    rgb: [181,148,16],
    hsl: [48,84,39]
  },
  'bluish': {
    hex: '#2976bb',
    rgb: [41,118,187],
    hsl: [208,64,45]
  },
  'darkish blue': {
    hex: '#014182',
    rgb: [1,65,130],
    hsl: [210,98,26]
  },
  'dull red': {
    hex: '#bb3f3f',
    rgb: [187,63,63],
    hsl: [0,50,49]
  },
  'pinky red': {
    hex: '#fc2647',
    rgb: [252,38,71],
    hsl: [351,97,57]
  },
  'bronze': {
    hex: '#a87900',
    rgb: [168,121,0],
    hsl: [43,100,33]
  },
  'pale teal': {
    hex: '#82cbb2',
    rgb: [130,203,178],
    hsl: [159,41,65]
  },
  'military green': {
    hex: '#667c3e',
    rgb: [102,124,62],
    hsl: [81,33,36]
  },
  'barbie pink': {
    hex: '#fe46a5',
    rgb: [254,70,165],
    hsl: [329,99,64]
  },
  'bubblegum pink': {
    hex: '#fe83cc',
    rgb: [254,131,204],
    hsl: [324,98,75]
  },
  'pea soup green': {
    hex: '#94a617',
    rgb: [148,166,23],
    hsl: [68,76,37]
  },
  'dark mustard': {
    hex: '#a88905',
    rgb: [168,137,5],
    hsl: [49,94,34]
  },
  'shit': {
    hex: '#7f5f00',
    rgb: [127,95,0],
    hsl: [45,100,25]
  },
  'medium purple': {
    hex: '#9e43a2',
    rgb: [158,67,162],
    hsl: [297,41,45]
  },
  'very dark green': {
    hex: '#062e03',
    rgb: [6,46,3],
    hsl: [116,88,10]
  },
  'dirt': {
    hex: '#8a6e45',
    rgb: [138,110,69],
    hsl: [36,33,41]
  },
  'dusky pink': {
    hex: '#cc7a8b',
    rgb: [204,122,139],
    hsl: [348,45,64]
  },
  'red violet': {
    hex: '#9e0168',
    rgb: [158,1,104],
    hsl: [321,99,31]
  },
  'lemon yellow': {
    hex: '#fdff38',
    rgb: [253,255,56],
    hsl: [61,100,61]
  },
  'pistachio': {
    hex: '#c0fa8b',
    rgb: [192,250,139],
    hsl: [91,92,76]
  },
  'dull yellow': {
    hex: '#eedc5b',
    rgb: [238,220,91],
    hsl: [53,81,65]
  },
  'dark lime green': {
    hex: '#7ebd01',
    rgb: [126,189,1],
    hsl: [80,99,37]
  },
  'denim blue': {
    hex: '#3b5b92',
    rgb: [59,91,146],
    hsl: [218,42,40]
  },
  'teal blue': {
    hex: '#01889f',
    rgb: [1,136,159],
    hsl: [189,99,31]
  },
  'lightish blue': {
    hex: '#3d7afd',
    rgb: [61,122,253],
    hsl: [221,98,62]
  },
  'purpley blue': {
    hex: '#5f34e7',
    rgb: [95,52,231],
    hsl: [254,79,55]
  },
  'light indigo': {
    hex: '#6d5acf',
    rgb: [109,90,207],
    hsl: [250,55,58]
  },
  'swamp green': {
    hex: '#748500',
    rgb: [116,133,0],
    hsl: [68,100,26]
  },
  'brown green': {
    hex: '#706c11',
    rgb: [112,108,17],
    hsl: [57,74,25]
  },
  'dark maroon': {
    hex: '#3c0008',
    rgb: [60,0,8],
    hsl: [352,100,12]
  },
  'hot purple': {
    hex: '#cb00f5',
    rgb: [203,0,245],
    hsl: [290,100,48]
  },
  'dark forest green': {
    hex: '#002d04',
    rgb: [0,45,4],
    hsl: [125,100,9]
  },
  'faded blue': {
    hex: '#658cbb',
    rgb: [101,140,187],
    hsl: [213,39,56]
  },
  'drab green': {
    hex: '#749551',
    rgb: [116,149,81],
    hsl: [89,30,45]
  },
  'light lime green': {
    hex: '#b9ff66',
    rgb: [185,255,102],
    hsl: [87,100,70]
  },
  'snot green': {
    hex: '#9dc100',
    rgb: [157,193,0],
    hsl: [71,100,38]
  },
  'yellowish': {
    hex: '#faee66',
    rgb: [250,238,102],
    hsl: [55,94,69]
  },
  'light blue green': {
    hex: '#7efbb3',
    rgb: [126,251,179],
    hsl: [145,94,74]
  },
  'bordeaux': {
    hex: '#7b002c',
    rgb: [123,0,44],
    hsl: [339,100,24]
  },
  'light mauve': {
    hex: '#c292a1',
    rgb: [194,146,161],
    hsl: [341,28,67]
  },
  'ocean': {
    hex: '#017b92',
    rgb: [1,123,146],
    hsl: [190,99,29]
  },
  'marigold': {
    hex: '#fcc006',
    rgb: [252,192,6],
    hsl: [45,98,51]
  },
  'muddy green': {
    hex: '#657432',
    rgb: [101,116,50],
    hsl: [74,40,33]
  },
  'dull orange': {
    hex: '#d8863b',
    rgb: [216,134,59],
    hsl: [29,67,54]
  },
  'steel': {
    hex: '#738595',
    rgb: [115,133,149],
    hsl: [208,14,52]
  },
  'electric purple': {
    hex: '#aa23ff',
    rgb: [170,35,255],
    hsl: [277,100,57]
  },
  'fluorescent green': {
    hex: '#08ff08',
    rgb: [8,255,8],
    hsl: [120,100,52]
  },
  'yellowish brown': {
    hex: '#9b7a01',
    rgb: [155,122,1],
    hsl: [47,99,31]
  },
  'blush': {
    hex: '#f29e8e',
    rgb: [242,158,142],
    hsl: [10,79,75]
  },
  'soft green': {
    hex: '#6fc276',
    rgb: [111,194,118],
    hsl: [125,40,60]
  },
  'bright orange': {
    hex: '#ff5b00',
    rgb: [255,91,0],
    hsl: [21,100,50]
  },
  'lemon': {
    hex: '#fdff52',
    rgb: [253,255,82],
    hsl: [61,100,66]
  },
  'purple grey': {
    hex: '#866f85',
    rgb: [134,111,133],
    hsl: [303,9,48]
  },
  'acid green': {
    hex: '#8ffe09',
    rgb: [143,254,9],
    hsl: [87,99,52]
  },
  'pale lavender': {
    hex: '#eecffe',
    rgb: [238,207,254],
    hsl: [280,96,90]
  },
  'violet blue': {
    hex: '#510ac9',
    rgb: [81,10,201],
    hsl: [262,91,41]
  },
  'light forest green': {
    hex: '#4f9153',
    rgb: [79,145,83],
    hsl: [124,29,44]
  },
  'burnt red': {
    hex: '#9f2305',
    rgb: [159,35,5],
    hsl: [12,94,32]
  },
  'khaki green': {
    hex: '#728639',
    rgb: [114,134,57],
    hsl: [76,40,37]
  },
  'cerise': {
    hex: '#de0c62',
    rgb: [222,12,98],
    hsl: [335,90,46]
  },
  'faded purple': {
    hex: '#916e99',
    rgb: [145,110,153],
    hsl: [289,17,52]
  },
  'apricot': {
    hex: '#ffb16d',
    rgb: [255,177,109],
    hsl: [28,100,71]
  },
  'dark olive green': {
    hex: '#3c4d03',
    rgb: [60,77,3],
    hsl: [74,93,16]
  },
  'grey brown': {
    hex: '#7f7053',
    rgb: [127,112,83],
    hsl: [40,21,41]
  },
  'green grey': {
    hex: '#77926f',
    rgb: [119,146,111],
    hsl: [106,14,50]
  },
  'true blue': {
    hex: '#010fcc',
    rgb: [1,15,204],
    hsl: [236,99,40]
  },
  'pale violet': {
    hex: '#ceaefa',
    rgb: [206,174,250],
    hsl: [265,88,83]
  },
  'periwinkle blue': {
    hex: '#8f99fb',
    rgb: [143,153,251],
    hsl: [234,93,77]
  },
  'light sky blue': {
    hex: '#c6fcff',
    rgb: [198,252,255],
    hsl: [183,100,89]
  },
  'blurple': {
    hex: '#5539cc',
    rgb: [85,57,204],
    hsl: [251,59,51]
  },
  'green brown': {
    hex: '#544e03',
    rgb: [84,78,3],
    hsl: [56,93,17]
  },
  'bluegreen': {
    hex: '#017a79',
    rgb: [1,122,121],
    hsl: [180,98,24]
  },
  'bright teal': {
    hex: '#01f9c6',
    rgb: [1,249,198],
    hsl: [168,99,49]
  },
  'brownish yellow': {
    hex: '#c9b003',
    rgb: [201,176,3],
    hsl: [52,97,40]
  },
  'pea soup': {
    hex: '#929901',
    rgb: [146,153,1],
    hsl: [63,99,30]
  },
  'forest': {
    hex: '#0b5509',
    rgb: [11,85,9],
    hsl: [118,81,18]
  },
  'barney purple': {
    hex: '#a00498',
    rgb: [160,4,152],
    hsl: [303,95,32]
  },
  'ultramarine': {
    hex: '#2000b1',
    rgb: [32,0,177],
    hsl: [251,100,35]
  },
  'purplish': {
    hex: '#94568c',
    rgb: [148,86,140],
    hsl: [308,26,46]
  },
  'puke yellow': {
    hex: '#c2be0e',
    rgb: [194,190,14],
    hsl: [59,87,41]
  },
  'bluish grey': {
    hex: '#748b97',
    rgb: [116,139,151],
    hsl: [201,14,52]
  },
  'dark periwinkle': {
    hex: '#665fd1',
    rgb: [102,95,209],
    hsl: [244,55,60]
  },
  'dark lilac': {
    hex: '#9c6da5',
    rgb: [156,109,165],
    hsl: [290,24,54]
  },
  'reddish': {
    hex: '#c44240',
    rgb: [196,66,64],
    hsl: [1,53,51]
  },
  'light maroon': {
    hex: '#a24857',
    rgb: [162,72,87],
    hsl: [350,38,46]
  },
  'dusty purple': {
    hex: '#825f87',
    rgb: [130,95,135],
    hsl: [293,17,45]
  },
  'terra cotta': {
    hex: '#c9643b',
    rgb: [201,100,59],
    hsl: [17,57,51]
  },
  'avocado': {
    hex: '#90b134',
    rgb: [144,177,52],
    hsl: [76,55,45]
  },
  'marine blue': {
    hex: '#01386a',
    rgb: [1,56,106],
    hsl: [209,98,21]
  },
  'teal green': {
    hex: '#25a36f',
    rgb: [37,163,111],
    hsl: [155,63,39]
  },
  'slate grey': {
    hex: '#59656d',
    rgb: [89,101,109],
    hsl: [204,10,39]
  },
  'lighter green': {
    hex: '#75fd63',
    rgb: [117,253,99],
    hsl: [113,97,69]
  },
  'electric green': {
    hex: '#21fc0d',
    rgb: [33,252,13],
    hsl: [115,98,52]
  },
  'dusty blue': {
    hex: '#5a86ad',
    rgb: [90,134,173],
    hsl: [208,34,52]
  },
  'golden yellow': {
    hex: '#fec615',
    rgb: [254,198,21],
    hsl: [46,99,54]
  },
  'bright yellow': {
    hex: '#fffd01',
    rgb: [255,253,1],
    hsl: [60,100,50]
  },
  'light lavender': {
    hex: '#dfc5fe',
    rgb: [223,197,254],
    hsl: [267,97,88]
  },
  'umber': {
    hex: '#b26400',
    rgb: [178,100,0],
    hsl: [34,100,35]
  },
  'poop': {
    hex: '#7f5e00',
    rgb: [127,94,0],
    hsl: [44,100,25]
  },
  'dark peach': {
    hex: '#de7e5d',
    rgb: [222,126,93],
    hsl: [15,66,62]
  },
  'jungle green': {
    hex: '#048243',
    rgb: [4,130,67],
    hsl: [150,94,26]
  },
  'eggshell': {
    hex: '#ffffd4',
    rgb: [255,255,212],
    hsl: [60,100,92]
  },
  'denim': {
    hex: '#3b638c',
    rgb: [59,99,140],
    hsl: [210,41,39]
  },
  'yellow brown': {
    hex: '#b79400',
    rgb: [183,148,0],
    hsl: [49,100,36]
  },
  'dull purple': {
    hex: '#84597e',
    rgb: [132,89,126],
    hsl: [308,19,43]
  },
  'chocolate brown': {
    hex: '#411900',
    rgb: [65,25,0],
    hsl: [23,100,13]
  },
  'wine red': {
    hex: '#7b0323',
    rgb: [123,3,35],
    hsl: [344,95,25]
  },
  'neon blue': {
    hex: '#04d9ff',
    rgb: [4,217,255],
    hsl: [189,100,51]
  },
  'dirty green': {
    hex: '#667e2c',
    rgb: [102,126,44],
    hsl: [78,48,33]
  },
  'light tan': {
    hex: '#fbeeac',
    rgb: [251,238,172],
    hsl: [50,91,83]
  },
  'ice blue': {
    hex: '#d7fffe',
    rgb: [215,255,254],
    hsl: [179,100,92]
  },
  'cadet blue': {
    hex: '#4e7496',
    rgb: [78,116,150],
    hsl: [208,32,45]
  },
  'dark mauve': {
    hex: '#874c62',
    rgb: [135,76,98],
    hsl: [338,28,41]
  },
  'very light blue': {
    hex: '#d5ffff',
    rgb: [213,255,255],
    hsl: [180,100,92]
  },
  'grey purple': {
    hex: '#826d8c',
    rgb: [130,109,140],
    hsl: [281,12,49]
  },
  'pastel pink': {
    hex: '#ffbacd',
    rgb: [255,186,205],
    hsl: [343,100,86]
  },
  'very light green': {
    hex: '#d1ffbd',
    rgb: [209,255,189],
    hsl: [102,100,87]
  },
  'dark sky blue': {
    hex: '#448ee4',
    rgb: [68,142,228],
    hsl: [212,75,58]
  },
  'evergreen': {
    hex: '#05472a',
    rgb: [5,71,42],
    hsl: [154,87,15]
  },
  'dull pink': {
    hex: '#d5869d',
    rgb: [213,134,157],
    hsl: [343,48,68]
  },
  'aubergine': {
    hex: '#3d0734',
    rgb: [61,7,52],
    hsl: [310,79,13]
  },
  'mahogany': {
    hex: '#4a0100',
    rgb: [74,1,0],
    hsl: [1,100,15]
  },
  'reddish orange': {
    hex: '#f8481c',
    rgb: [248,72,28],
    hsl: [12,94,54]
  },
  'deep green': {
    hex: '#02590f',
    rgb: [2,89,15],
    hsl: [129,96,18]
  },
  'vomit green': {
    hex: '#89a203',
    rgb: [137,162,3],
    hsl: [69,96,32]
  },
  'purple pink': {
    hex: '#e03fd8',
    rgb: [224,63,216],
    hsl: [303,72,56]
  },
  'dusty pink': {
    hex: '#d58a94',
    rgb: [213,138,148],
    hsl: [352,47,69]
  },
  'faded green': {
    hex: '#7bb274',
    rgb: [123,178,116],
    hsl: [113,29,58]
  },
  'camo green': {
    hex: '#526525',
    rgb: [82,101,37],
    hsl: [78,46,27]
  },
  'pinky purple': {
    hex: '#c94cbe',
    rgb: [201,76,190],
    hsl: [305,54,54]
  },
  'pink purple': {
    hex: '#db4bda',
    rgb: [219,75,218],
    hsl: [300,67,58]
  },
  'brownish red': {
    hex: '#9e3623',
    rgb: [158,54,35],
    hsl: [9,64,38]
  },
  'dark rose': {
    hex: '#b5485d',
    rgb: [181,72,93],
    hsl: [348,43,50]
  },
  'mud': {
    hex: '#735c12',
    rgb: [115,92,18],
    hsl: [46,73,26]
  },
  'brownish': {
    hex: '#9c6d57',
    rgb: [156,109,87],
    hsl: [19,28,48]
  },
  'emerald green': {
    hex: '#028f1e',
    rgb: [2,143,30],
    hsl: [132,97,28]
  },
  'pale brown': {
    hex: '#b1916e',
    rgb: [177,145,110],
    hsl: [31,30,56]
  },
  'dull blue': {
    hex: '#49759c',
    rgb: [73,117,156],
    hsl: [208,36,45]
  },
  'burnt umber': {
    hex: '#a0450e',
    rgb: [160,69,14],
    hsl: [23,84,34]
  },
  'medium green': {
    hex: '#39ad48',
    rgb: [57,173,72],
    hsl: [128,50,45]
  },
  'clay': {
    hex: '#b66a50',
    rgb: [182,106,80],
    hsl: [15,41,51]
  },
  'light aqua': {
    hex: '#8cffdb',
    rgb: [140,255,219],
    hsl: [161,100,77]
  },
  'light olive green': {
    hex: '#a4be5c',
    rgb: [164,190,92],
    hsl: [76,43,55]
  },
  'brownish orange': {
    hex: '#cb7723',
    rgb: [203,119,35],
    hsl: [30,71,47]
  },
  'dark aqua': {
    hex: '#05696b',
    rgb: [5,105,107],
    hsl: [181,91,22]
  },
  'purplish pink': {
    hex: '#ce5dae',
    rgb: [206,93,174],
    hsl: [317,54,59]
  },
  'dark salmon': {
    hex: '#c85a53',
    rgb: [200,90,83],
    hsl: [4,52,55]
  },
  'greenish grey': {
    hex: '#96ae8d',
    rgb: [150,174,141],
    hsl: [104,17,62]
  },
  'jade': {
    hex: '#1fa774',
    rgb: [31,167,116],
    hsl: [158,69,39]
  },
  'ugly green': {
    hex: '#7a9703',
    rgb: [122,151,3],
    hsl: [72,96,30]
  },
  'dark beige': {
    hex: '#ac9362',
    rgb: [172,147,98],
    hsl: [40,31,53]
  },
  'emerald': {
    hex: '#01a049',
    rgb: [1,160,73],
    hsl: [147,99,32]
  },
  'pale red': {
    hex: '#d9544d',
    rgb: [217,84,77],
    hsl: [3,65,58]
  },
  'light magenta': {
    hex: '#fa5ff7',
    rgb: [250,95,247],
    hsl: [301,94,68]
  },
  'sky': {
    hex: '#82cafc',
    rgb: [130,202,252],
    hsl: [205,95,75]
  },
  'light cyan': {
    hex: '#acfffc',
    rgb: [172,255,252],
    hsl: [178,100,84]
  },
  'yellow orange': {
    hex: '#fcb001',
    rgb: [252,176,1],
    hsl: [42,99,50]
  },
  'reddish purple': {
    hex: '#910951',
    rgb: [145,9,81],
    hsl: [328,88,30]
  },
  'reddish pink': {
    hex: '#fe2c54',
    rgb: [254,44,84],
    hsl: [349,99,58]
  },
  'orchid': {
    hex: '#c875c4',
    rgb: [200,117,196],
    hsl: [303,43,62]
  },
  'dirty yellow': {
    hex: '#cdc50a',
    rgb: [205,197,10],
    hsl: [58,91,42]
  },
  'orange red': {
    hex: '#fd411e',
    rgb: [253,65,30],
    hsl: [9,98,55]
  },
  'deep red': {
    hex: '#9a0200',
    rgb: [154,2,0],
    hsl: [1,100,30]
  },
  'orange brown': {
    hex: '#be6400',
    rgb: [190,100,0],
    hsl: [32,100,37]
  },
  'cobalt blue': {
    hex: '#030aa7',
    rgb: [3,10,167],
    hsl: [237,96,33]
  },
  'neon pink': {
    hex: '#fe019a',
    rgb: [254,1,154],
    hsl: [324,99,50]
  },
  'rose pink': {
    hex: '#f7879a',
    rgb: [247,135,154],
    hsl: [350,88,75]
  },
  'greyish purple': {
    hex: '#887191',
    rgb: [136,113,145],
    hsl: [283,13,51]
  },
  'raspberry': {
    hex: '#b00149',
    rgb: [176,1,73],
    hsl: [335,99,35]
  },
  'aqua green': {
    hex: '#12e193',
    rgb: [18,225,147],
    hsl: [157,85,48]
  },
  'salmon pink': {
    hex: '#fe7b7c',
    rgb: [254,123,124],
    hsl: [0,98,74]
  },
  'tangerine': {
    hex: '#ff9408',
    rgb: [255,148,8],
    hsl: [34,100,52]
  },
  'brownish green': {
    hex: '#6a6e09',
    rgb: [106,110,9],
    hsl: [62,85,23]
  },
  'red brown': {
    hex: '#8b2e16',
    rgb: [139,46,22],
    hsl: [12,73,32]
  },
  'greenish brown': {
    hex: '#696112',
    rgb: [105,97,18],
    hsl: [54,71,24]
  },
  'pumpkin': {
    hex: '#e17701',
    rgb: [225,119,1],
    hsl: [32,99,44]
  },
  'pine green': {
    hex: '#0a481e',
    rgb: [10,72,30],
    hsl: [139,76,16]
  },
  'charcoal': {
    hex: '#343837',
    rgb: [52,56,55],
    hsl: [165,4,21]
  },
  'baby pink': {
    hex: '#ffb7ce',
    rgb: [255,183,206],
    hsl: [341,100,86]
  },
  'cornflower': {
    hex: '#6a79f7',
    rgb: [106,121,247],
    hsl: [234,90,69]
  },
  'blue violet': {
    hex: '#5d06e9',
    rgb: [93,6,233],
    hsl: [263,95,47]
  },
  'chocolate': {
    hex: '#3d1c02',
    rgb: [61,28,2],
    hsl: [26,94,12]
  },
  'greyish green': {
    hex: '#82a67d',
    rgb: [130,166,125],
    hsl: [113,19,57]
  },
  'scarlet': {
    hex: '#be0119',
    rgb: [190,1,25],
    hsl: [352,99,37]
  },
  'green yellow': {
    hex: '#c9ff27',
    rgb: [201,255,39],
    hsl: [75,100,58]
  },
  'dark olive': {
    hex: '#373e02',
    rgb: [55,62,2],
    hsl: [67,94,13]
  },
  'sienna': {
    hex: '#a9561e',
    rgb: [169,86,30],
    hsl: [24,70,39]
  },
  'pastel purple': {
    hex: '#caa0ff',
    rgb: [202,160,255],
    hsl: [267,100,81]
  },
  'terracotta': {
    hex: '#ca6641',
    rgb: [202,102,65],
    hsl: [16,56,52]
  },
  'aqua blue': {
    hex: '#02d8e9',
    rgb: [2,216,233],
    hsl: [184,98,46]
  },
  'sage green': {
    hex: '#88b378',
    rgb: [136,179,120],
    hsl: [104,28,59]
  },
  'blood red': {
    hex: '#980002',
    rgb: [152,0,2],
    hsl: [359,100,30]
  },
  'deep pink': {
    hex: '#cb0162',
    rgb: [203,1,98],
    hsl: [331,99,40]
  },
  'grass': {
    hex: '#5cac2d',
    rgb: [92,172,45],
    hsl: [98,59,43]
  },
  'moss': {
    hex: '#769958',
    rgb: [118,153,88],
    hsl: [92,27,47]
  },
  'pastel blue': {
    hex: '#a2bffe',
    rgb: [162,191,254],
    hsl: [221,98,82]
  },
  'bluish green': {
    hex: '#10a674',
    rgb: [16,166,116],
    hsl: [160,82,36]
  },
  'green blue': {
    hex: '#06b48b',
    rgb: [6,180,139],
    hsl: [166,94,36]
  },
  'dark tan': {
    hex: '#af884a',
    rgb: [175,136,74],
    hsl: [37,41,49]
  },
  'greenish blue': {
    hex: '#0b8b87',
    rgb: [11,139,135],
    hsl: [178,85,29]
  },
  'pale orange': {
    hex: '#ffa756',
    rgb: [255,167,86],
    hsl: [29,100,67]
  },
  'vomit': {
    hex: '#a2a415',
    rgb: [162,164,21],
    hsl: [61,77,36]
  },
  'forrest green': {
    hex: '#154406',
    rgb: [21,68,6],
    hsl: [105,84,15]
  },
  'dark lavender': {
    hex: '#856798',
    rgb: [133,103,152],
    hsl: [277,19,50]
  },
  'dark violet': {
    hex: '#34013f',
    rgb: [52,1,63],
    hsl: [289,97,13]
  },
  'purple blue': {
    hex: '#632de9',
    rgb: [99,45,233],
    hsl: [257,81,55]
  },
  'dark cyan': {
    hex: '#0a888a',
    rgb: [10,136,138],
    hsl: [181,86,29]
  },
  'olive drab': {
    hex: '#6f7632',
    rgb: [111,118,50],
    hsl: [66,40,33]
  },
  'pinkish': {
    hex: '#d46a7e',
    rgb: [212,106,126],
    hsl: [349,55,62]
  },
  'cobalt': {
    hex: '#1e488f',
    rgb: [30,72,143],
    hsl: [218,65,34]
  },
  'neon purple': {
    hex: '#bc13fe',
    rgb: [188,19,254],
    hsl: [283,99,54]
  },
  'light turquoise': {
    hex: '#7ef4cc',
    rgb: [126,244,204],
    hsl: [160,84,73]
  },
  'apple green': {
    hex: '#76cd26',
    rgb: [118,205,38],
    hsl: [91,69,48]
  },
  'dull green': {
    hex: '#74a662',
    rgb: [116,166,98],
    hsl: [104,28,52]
  },
  'wine': {
    hex: '#80013f',
    rgb: [128,1,63],
    hsl: [331,98,25]
  },
  'powder blue': {
    hex: '#b1d1fc',
    rgb: [177,209,252],
    hsl: [214,93,84]
  },
  'off white': {
    hex: '#ffffe4',
    rgb: [255,255,228],
    hsl: [60,100,95]
  },
  'electric blue': {
    hex: '#0652ff',
    rgb: [6,82,255],
    hsl: [222,100,51]
  },
  'dark turquoise': {
    hex: '#045c5a',
    rgb: [4,92,90],
    hsl: [179,92,19]
  },
  'blue purple': {
    hex: '#5729ce',
    rgb: [87,41,206],
    hsl: [257,67,48]
  },
  'azure': {
    hex: '#069af3',
    rgb: [6,154,243],
    hsl: [203,95,49]
  },
  'bright red': {
    hex: '#ff000d',
    rgb: [255,0,13],
    hsl: [357,100,50]
  },
  'pinkish red': {
    hex: '#f10c45',
    rgb: [241,12,69],
    hsl: [345,91,50]
  },
  'cornflower blue': {
    hex: '#5170d7',
    rgb: [81,112,215],
    hsl: [226,63,58]
  },
  'light olive': {
    hex: '#acbf69',
    rgb: [172,191,105],
    hsl: [73,40,58]
  },
  'grape': {
    hex: '#6c3461',
    rgb: [108,52,97],
    hsl: [312,35,31]
  },
  'greyish blue': {
    hex: '#5e819d',
    rgb: [94,129,157],
    hsl: [207,25,49]
  },
  'purplish blue': {
    hex: '#601ef9',
    rgb: [96,30,249],
    hsl: [258,95,55]
  },
  'yellowish green': {
    hex: '#b0dd16',
    rgb: [176,221,22],
    hsl: [74,82,48]
  },
  'greenish yellow': {
    hex: '#cdfd02',
    rgb: [205,253,2],
    hsl: [71,98,50]
  },
  'medium blue': {
    hex: '#2c6fbb',
    rgb: [44,111,187],
    hsl: [212,62,45]
  },
  'dusty rose': {
    hex: '#c0737a',
    rgb: [192,115,122],
    hsl: [355,38,60]
  },
  'light violet': {
    hex: '#d6b4fc',
    rgb: [214,180,252],
    hsl: [268,92,85]
  },
  'midnight blue': {
    hex: '#020035',
    rgb: [2,0,53],
    hsl: [242,100,10]
  },
  'bluish purple': {
    hex: '#703be7',
    rgb: [112,59,231],
    hsl: [258,78,57]
  },
  'red orange': {
    hex: '#fd3c06',
    rgb: [253,60,6],
    hsl: [13,98,51]
  },
  'dark magenta': {
    hex: '#960056',
    rgb: [150,0,86],
    hsl: [326,100,29]
  },
  'greenish': {
    hex: '#40a368',
    rgb: [64,163,104],
    hsl: [144,44,45]
  },
  'ocean blue': {
    hex: '#03719c',
    rgb: [3,113,156],
    hsl: [197,96,31]
  },
  'coral': {
    hex: '#fc5a50',
    rgb: [252,90,80],
    hsl: [3,97,65]
  },
  'cream': {
    hex: '#ffffc2',
    rgb: [255,255,194],
    hsl: [60,100,88]
  },
  'reddish brown': {
    hex: '#7f2b0a',
    rgb: [127,43,10],
    hsl: [17,85,27]
  },
  'burnt sienna': {
    hex: '#b04e0f',
    rgb: [176,78,15],
    hsl: [23,84,37]
  },
  'brick': {
    hex: '#a03623',
    rgb: [160,54,35],
    hsl: [9,64,38]
  },
  'sage': {
    hex: '#87ae73',
    rgb: [135,174,115],
    hsl: [100,27,57]
  },
  'grey green': {
    hex: '#789b73',
    rgb: [120,155,115],
    hsl: [113,17,53]
  },
  'white': {
    hex: '#ffffff',
    rgb: [255,255,255],
    hsl: [0,0,100]
  },
  'robin\'s egg blue': {
    hex: '#98eff9',
    rgb: [152,239,249],
    hsl: [186,89,79]
  },
  'moss green': {
    hex: '#658b38',
    rgb: [101,139,56],
    hsl: [87,43,38]
  },
  'steel blue': {
    hex: '#5a7d9a',
    rgb: [90,125,154],
    hsl: [207,26,48]
  },
  'eggplant': {
    hex: '#380835',
    rgb: [56,8,53],
    hsl: [304,75,13]
  },
  'light yellow': {
    hex: '#fffe7a',
    rgb: [255,254,122],
    hsl: [60,100,74]
  },
  'leaf green': {
    hex: '#5ca904',
    rgb: [92,169,4],
    hsl: [88,95,34]
  },
  'light grey': {
    hex: '#d8dcd6',
    rgb: [216,220,214],
    hsl: [100,8,85]
  },
  'puke': {
    hex: '#a5a502',
    rgb: [165,165,2],
    hsl: [60,98,33]
  },
  'pinkish purple': {
    hex: '#d648d7',
    rgb: [214,72,215],
    hsl: [300,64,56]
  },
  'sea blue': {
    hex: '#047495',
    rgb: [4,116,149],
    hsl: [194,95,30]
  },
  'pale purple': {
    hex: '#b790d4',
    rgb: [183,144,212],
    hsl: [274,44,70]
  },
  'slate blue': {
    hex: '#5b7c99',
    rgb: [91,124,153],
    hsl: [208,25,48]
  },
  'blue grey': {
    hex: '#607c8e',
    rgb: [96,124,142],
    hsl: [203,19,47]
  },
  'hunter green': {
    hex: '#0b4008',
    rgb: [11,64,8],
    hsl: [117,78,14]
  },
  'fuchsia': {
    hex: '#ed0dd9',
    rgb: [237,13,217],
    hsl: [305,90,49]
  },
  'crimson': {
    hex: '#8c000f',
    rgb: [140,0,15],
    hsl: [354,100,27]
  },
  'pale yellow': {
    hex: '#ffff84',
    rgb: [255,255,132],
    hsl: [60,100,76]
  },
  'ochre': {
    hex: '#bf9005',
    rgb: [191,144,5],
    hsl: [45,95,38]
  },
  'mustard yellow': {
    hex: '#d2bd0a',
    rgb: [210,189,10],
    hsl: [54,91,43]
  },
  'light red': {
    hex: '#ff474c',
    rgb: [255,71,76],
    hsl: [358,100,64]
  },
  'cerulean': {
    hex: '#0485d1',
    rgb: [4,133,209],
    hsl: [202,96,42]
  },
  'pale pink': {
    hex: '#ffcfdc',
    rgb: [255,207,220],
    hsl: [344,100,91]
  },
  'deep blue': {
    hex: '#040273',
    rgb: [4,2,115],
    hsl: [241,97,23]
  },
  'rust': {
    hex: '#a83c09',
    rgb: [168,60,9],
    hsl: [19,90,35]
  },
  'light teal': {
    hex: '#90e4c1',
    rgb: [144,228,193],
    hsl: [155,61,73]
  },
  'slate': {
    hex: '#516572',
    rgb: [81,101,114],
    hsl: [204,17,38]
  },
  'goldenrod': {
    hex: '#fac205',
    rgb: [250,194,5],
    hsl: [46,96,50]
  },
  'dark yellow': {
    hex: '#d5b60a',
    rgb: [213,182,10],
    hsl: [51,91,44]
  },
  'dark grey': {
    hex: '#363737',
    rgb: [54,55,55],
    hsl: [180,1,21]
  },
  'army green': {
    hex: '#4b5d16',
    rgb: [75,93,22],
    hsl: [75,62,23]
  },
  'grey blue': {
    hex: '#6b8ba4',
    rgb: [107,139,164],
    hsl: [206,24,53]
  },
  'seafoam': {
    hex: '#80f9ad',
    rgb: [128,249,173],
    hsl: [142,91,74]
  },
  'puce': {
    hex: '#a57e52',
    rgb: [165,126,82],
    hsl: [32,34,48]
  },
  'spring green': {
    hex: '#a9f971',
    rgb: [169,249,113],
    hsl: [95,92,71]
  },
  'dark orange': {
    hex: '#c65102',
    rgb: [198,81,2],
    hsl: [24,98,39]
  },
  'sand': {
    hex: '#e2ca76',
    rgb: [226,202,118],
    hsl: [47,65,67]
  },
  'pastel green': {
    hex: '#b0ff9d',
    rgb: [176,255,157],
    hsl: [108,100,81]
  },
  'mint': {
    hex: '#9ffeb0',
    rgb: [159,254,176],
    hsl: [131,98,81]
  },
  'light orange': {
    hex: '#fdaa48',
    rgb: [253,170,72],
    hsl: [32,98,64]
  },
  'bright pink': {
    hex: '#fe01b1',
    rgb: [254,1,177],
    hsl: [318,99,50]
  },
  'chartreuse': {
    hex: '#c1f80a',
    rgb: [193,248,10],
    hsl: [74,94,51]
  },
  'deep purple': {
    hex: '#36013f',
    rgb: [54,1,63],
    hsl: [291,97,13]
  },
  'dark brown': {
    hex: '#341c02',
    rgb: [52,28,2],
    hsl: [31,93,11]
  },
  'taupe': {
    hex: '#b9a281',
    rgb: [185,162,129],
    hsl: [35,29,62]
  },
  'pea green': {
    hex: '#8eab12',
    rgb: [142,171,18],
    hsl: [71,81,37]
  },
  'puke green': {
    hex: '#9aae07',
    rgb: [154,174,7],
    hsl: [67,92,35]
  },
  'kelly green': {
    hex: '#02ab2e',
    rgb: [2,171,46],
    hsl: [136,98,34]
  },
  'seafoam green': {
    hex: '#7af9ab',
    rgb: [122,249,171],
    hsl: [143,91,73]
  },
  'blue green': {
    hex: '#137e6d',
    rgb: [19,126,109],
    hsl: [170,74,28]
  },
  'khaki': {
    hex: '#aaa662',
    rgb: [170,166,98],
    hsl: [57,30,53]
  },
  'burgundy': {
    hex: '#610023',
    rgb: [97,0,35],
    hsl: [338,100,19]
  },
  'dark teal': {
    hex: '#014d4e',
    rgb: [1,77,78],
    hsl: [181,97,15]
  },
  'brick red': {
    hex: '#8f1402',
    rgb: [143,20,2],
    hsl: [8,97,28]
  },
  'royal purple': {
    hex: '#4b006e',
    rgb: [75,0,110],
    hsl: [281,100,22]
  },
  'plum': {
    hex: '#580f41',
    rgb: [88,15,65],
    hsl: [319,71,20]
  },
  'mint green': {
    hex: '#8fff9f',
    rgb: [143,255,159],
    hsl: [129,100,78]
  },
  'gold': {
    hex: '#dbb40c',
    rgb: [219,180,12],
    hsl: [49,90,45]
  },
  'baby blue': {
    hex: '#a2cffe',
    rgb: [162,207,254],
    hsl: [211,98,82]
  },
  'yellow green': {
    hex: '#c0fb2d',
    rgb: [192,251,45],
    hsl: [77,96,58]
  },
  'bright purple': {
    hex: '#be03fd',
    rgb: [190,3,253],
    hsl: [285,98,50]
  },
  'dark red': {
    hex: '#840000',
    rgb: [132,0,0],
    hsl: [0,100,26]
  },
  'pale blue': {
    hex: '#d0fefe',
    rgb: [208,254,254],
    hsl: [180,96,91]
  },
  'grass green': {
    hex: '#3f9b0b',
    rgb: [63,155,11],
    hsl: [98,87,33]
  },
  'navy': {
    hex: '#01153e',
    rgb: [1,21,62],
    hsl: [220,97,12]
  },
  'aquamarine': {
    hex: '#04d8b2',
    rgb: [4,216,178],
    hsl: [169,96,43]
  },
  'burnt orange': {
    hex: '#c04e01',
    rgb: [192,78,1],
    hsl: [24,99,38]
  },
  'neon green': {
    hex: '#0cff0c',
    rgb: [12,255,12],
    hsl: [120,100,52]
  },
  'bright blue': {
    hex: '#0165fc',
    rgb: [1,101,252],
    hsl: [216,99,50]
  },
  'rose': {
    hex: '#cf6275',
    rgb: [207,98,117],
    hsl: [350,53,60]
  },
  'light pink': {
    hex: '#ffd1df',
    rgb: [255,209,223],
    hsl: [342,100,91]
  },
  'mustard': {
    hex: '#ceb301',
    rgb: [206,179,1],
    hsl: [52,99,41]
  },
  'indigo': {
    hex: '#380282',
    rgb: [56,2,130],
    hsl: [265,97,26]
  },
  'lime': {
    hex: '#aaff32',
    rgb: [170,255,50],
    hsl: [85,100,60]
  },
  'sea green': {
    hex: '#53fca1',
    rgb: [83,252,161],
    hsl: [148,97,66]
  },
  'periwinkle': {
    hex: '#8e82fe',
    rgb: [142,130,254],
    hsl: [246,98,75]
  },
  'dark pink': {
    hex: '#cb416b',
    rgb: [203,65,107],
    hsl: [342,57,53]
  },
  'olive green': {
    hex: '#677a04',
    rgb: [103,122,4],
    hsl: [70,94,25]
  },
  'peach': {
    hex: '#ffb07c',
    rgb: [255,176,124],
    hsl: [24,100,74]
  },
  'pale green': {
    hex: '#c7fdb5',
    rgb: [199,253,181],
    hsl: [105,95,85]
  },
  'light brown': {
    hex: '#ad8150',
    rgb: [173,129,80],
    hsl: [32,37,50]
  },
  'hot pink': {
    hex: '#ff028d',
    rgb: [255,2,141],
    hsl: [327,100,50]
  },
  'black': {
    hex: '#000000',
    rgb: [0,0,0],
    hsl: [0,0,0]
  },
  'lilac': {
    hex: '#cea2fd',
    rgb: [206,162,253],
    hsl: [269,96,81]
  },
  'navy blue': {
    hex: '#001146',
    rgb: [0,17,70],
    hsl: [225,100,14]
  },
  'royal blue': {
    hex: '#0504aa',
    rgb: [5,4,170],
    hsl: [240,95,34]
  },
  'beige': {
    hex: '#e6daa6',
    rgb: [230,218,166],
    hsl: [49,56,78]
  },
  'salmon': {
    hex: '#ff796c',
    rgb: [255,121,108],
    hsl: [5,100,71]
  },
  'olive': {
    hex: '#6e750e',
    rgb: [110,117,14],
    hsl: [64,79,26]
  },
  'maroon': {
    hex: '#650021',
    rgb: [101,0,33],
    hsl: [340,100,20]
  },
  'bright green': {
    hex: '#01ff07',
    rgb: [1,255,7],
    hsl: [121,100,50]
  },
  'dark purple': {
    hex: '#35063e',
    rgb: [53,6,62],
    hsl: [290,82,13]
  },
  'mauve': {
    hex: '#ae7181',
    rgb: [174,113,129],
    hsl: [344,27,56]
  },
  'forest green': {
    hex: '#06470c',
    rgb: [6,71,12],
    hsl: [126,84,15]
  },
  'aqua': {
    hex: '#13eac9',
    rgb: [19,234,201],
    hsl: [171,85,50]
  },
  'cyan': {
    hex: '#00ffff',
    rgb: [0,255,255],
    hsl: [180,100,50]
  },
  'tan': {
    hex: '#d1b26f',
    rgb: [209,178,111],
    hsl: [41,52,63]
  },
  'dark blue': {
    hex: '#00035b',
    rgb: [0,3,91],
    hsl: [238,100,18]
  },
  'lavender': {
    hex: '#c79fef',
    rgb: [199,159,239],
    hsl: [270,71,78]
  },
  'turquoise': {
    hex: '#06c2ac',
    rgb: [6,194,172],
    hsl: [173,94,39]
  },
  'dark green': {
    hex: '#033500',
    rgb: [3,53,0],
    hsl: [117,100,10]
  },
  'violet': {
    hex: '#9a0eea',
    rgb: [154,14,234],
    hsl: [278,89,49]
  },
  'light purple': {
    hex: '#bf77f6',
    rgb: [191,119,246],
    hsl: [274,88,72]
  },
  'lime green': {
    hex: '#89fe05',
    rgb: [137,254,5],
    hsl: [88,99,51]
  },
  'grey': {
    hex: '#929591',
    rgb: [146,149,145],
    hsl: [105,2,58]
  },
  'sky blue': {
    hex: '#75bbfd',
    rgb: [117,187,253],
    hsl: [209,97,73]
  },
  'yellow': {
    hex: '#ffff14',
    rgb: [255,255,20],
    hsl: [60,100,54]
  },
  'magenta': {
    hex: '#c20078',
    rgb: [194,0,120],
    hsl: [323,100,38]
  },
  'light green': {
    hex: '#96f97b',
    rgb: [150,249,123],
    hsl: [107,91,73]
  },
  'orange': {
    hex: '#f97306',
    rgb: [249,115,6],
    hsl: [27,95,50]
  },
  'teal': {
    hex: '#029386',
    rgb: [2,147,134],
    hsl: [175,97,29]
  },
  'light blue': {
    hex: '#95d0fc',
    rgb: [149,208,252],
    hsl: [206,94,79]
  },
  'red': {
    hex: '#e50000',
    rgb: [229,0,0],
    hsl: [0,100,45]
  },
  'brown': {
    hex: '#653700',
    rgb: [101,55,0],
    hsl: [33,100,20]
  },
  'pink': {
    hex: '#ff81c0',
    rgb: [255,129,192],
    hsl: [330,100,75]
  },
  'blue': {
    hex: '#0343df',
    rgb: [3,67,223],
    hsl: [223,97,44]
  },
  'green': {
    hex: '#15b01a',
    rgb: [21,176,26],
    hsl: [122,79,39]
  },
  'purple': {
    hex: '#7e1e9c',
    rgb: [126,30,156],
    hsl: [286,68,36]
  }
};

export default xkcd;
