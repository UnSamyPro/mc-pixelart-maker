/*
Minecraft Pixel Art Maker
© gd-codes 2020
https://gd-codes.github.io/mc-pixelart-maker/
*/
const icons = {
  square : "<svg width=\"1.0em\" height=\"1.0em\" viewBox=\"0 0 16 16\" class=\"bi bi-square-fill\" "+
      "fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" style=\"border: 1px solid black; border-radius: 15%;\">"+
      "<path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z\"/></svg>",
  square_noborder : "<svg width=\"1.0em\" height=\"1.0em\" viewBox=\"0 0 16 16\" class=\"bi bi-square-fill\" "+
      "fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">"+
      "<path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z\"/></svg>",
  questionmark : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-question-circle\" > <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/><path d=\"M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z\"/></svg>",
  infosquare : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`
};

var colors = {
  "list": [
      {
          "name": "grass",
          "material": "grass_block",
          "color": [127, 178, 56],
          "description": "Grass Block, Slime Block"
      },
      {
          "name": "sand",
          "material": "birch_planks",
          "color": [247, 233, 163],
          "description": "Sand, Birch (Planks, Log (vertical), Stripped Log, Wood, Stripped Wood, Sign, Pressure Plate, Trapdoor, Stairs, Slab, Fence Gate, Fence, Door), Sandstone (All variants, all slabs, all stairs, all walls), Glowstone, End Stone, End Stone Bricks (slab, stairs, wall), Bone Block, Turtle Egg, Scaffolding, Candle"
      },
      {
          "name": "wool",
          "material": "cobweb",
          "color": [199, 199, 199],
          "description": "Cobweb, Mushroom Stem, Bed (head), White Candle"
      },
      {
          "name": "fire",
          "material": "redstone_block",
          "color": [255, 0, 0],
          "description": "Lava, TNT, Fire, Redstone Block"
      },
      {
          "name": "ice",
          "material": "ice",
          "color": [160, 160, 255],
          "description": "Ice, Frosted Ice, Packed Ice, Blue Ice"
      },
      {
          "name": "metal",
          "material": "iron_block",
          "color": [167, 167, 167],
          "description": "Block of Iron, Iron Door, Brewing Stand, Heavy Weighted Pressure Plate, Iron Trapdoor, Lantern, Anvil (all damage levels), Grindstone, Soul Fire Lantern, Lodestone"
      },
      {
          "name": "plant",
          "material": "oak_leaves",
          "color": [0, 124, 0],
          "description": "Sapling, Flowers, Wheat, Sugar Cane, Pumpkin Stem, Melon Stem, Lily Pad, Cocoa, Carrots, Potatoes, Beetroots, Sweet Berry Bush, Grass, Fern, Vines, Leaves, Cactus, Bamboo, Cave Vines, Spore Blossom, (Flowering) Azalea, Dripleaf (big and small)"
      },
      {
          "name": "snow",
          "material": "snow_block",
          "color": [255, 255, 255],
          "description": "Snow, Snow Block, White (Bed (foot), Wool, Stained Glass, Carpet, Shulker Box, Glazed Terracotta, Concrete, Concrete Powder), Powder Snow"
      },
      {
          "name": "clay",
          "material": "clay",
          "color": [164, 168, 184],
          "description": "Clay, Infested Block (not including infested Deepslate)"
      },
      {
          "name": "dirt",
          "material": "dirt",
          "color": [151, 109, 77],
          "description": "Dirt, Coarse Dirt, Farmland, Dirt Path, Granite (slab, stairs, wall), Polished Granite (slab, stairs), Jungle (Planks, Log (vertical), Stripped Log, Wood, Stripped Wood, Sign, Pressure Plate, Trapdoor, Stairs, Slab, Fence Gate, Fence, Door), Jukebox, Brown Mushroom Block, Rooted Dirt, Hanging Roots"
      },
      {
          "name": "stone",
          "material": "stone",
          "color": [112, 112, 112],
          "description": "Stone (slab, stairs), Andesite (slab, stairs, wall), Polished Andesite (slab, stairs), Cobblestone (slab, stairs, wall), Bedrock, Gold Ore, Iron Ore, Coal Ore, Lapis Lazuli Ore, Dispenser, Mossy Cobblestone (slab, stairs, wall), Spawner, Diamond Ore, Furnace, Stone Pressure Plate, Redstone Ore, Stone Bricks (all variants, all slabs, all stairs, all walls), Emerald Ore, Ender Chest, Dropper, Smooth Stone (slab), Observer, Smoker, Blast Furnace, Stonecutter, Sticky Piston, Piston, Piston Head, Gravel, Acacia Log (side), Cauldron (including cauldrons with water, lava, or powdered snow), Hopper, Copper Ore"
      },
      {
          "name": "water",
          "material": "water",
          "color": [64, 64, 255],
          "description": "Kelp, Seagrass, Water, Bubble Column"
      },
      {
          "name": "wood",
          "material": "oak_planks",
          "color": [143, 119, 72],
          "description": "Oak (Planks, Log (vertical), Stripped Log, Wood, Stripped Wood, Sign, Door, Pressure Plate, Fence, Trapdoor, Fence Gate, Slab, Stairs), Note Block, Bookshelf, Chest, Crafting Table, Trapped Chest, Daylight Detector, Loom, Barrel, Cartography Table, Fletching Table, Lectern, Smithing Table, Composter, Bamboo Sapling, Dead Bush, Petrified Oak Slab, Beehive, Banners (all colors, when not as markers)"
      },
      {
          "name": "quartz",
          "material": "diorite",
          "color": [255, 252, 245],
          "description": "Diorite (stairs, slab, wall), Polished Diorite (stairs, slab), Birch Log (side), Quartz Block (all variants, all slabs, all stairs), Sea Lantern, Target"
      },
      {
          "name": "color_orange",
          "material": "orange_concrete",
          "color": [216, 127, 51],
          "description": "Acacia (Planks, Log (vertical), Stripped Log, Stripped Wood, Sign, Trapdoor, Slab, Stairs, Pressure Plate, Fence Gate, Fence, Door), Red Sand, Orange (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Pumpkin, Carved Pumpkin, Jack o'Lantern, Terracotta, Red Sandstone (all variants, all stairs, all slabs, all walls), Honey Block, Honeycomb Block, Block of Copper (including all cut, waxed, stair, and slab variants), Lightning Rod, Block of Raw Copper"
      },
      {
          "name": "color_magenta",
          "material": "magenta_concrete",
          "color": [178, 76, 216],
          "description": "Magenta (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Purpur (all variants, slab, stairs)"
      },
      {
          "name": "color_light_blue",
          "material": "light_blue_concrete",
          "color": [102, 153, 216],
          "description": "Light Blue (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Soul Fire"
      },
      {
          "name": "yellow",
          "material": "yellow_concrete",
          "color": [229, 229, 51],
          "description": "Sponge, Wet Sponge, Yellow (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Hay Bale, Horn Coral (Coral Block, Coral, Coral Fan), Bee Nest"
      },
      {
          "name": "color_light_green",
          "material": "lime_concrete",
          "color": [127, 204, 25],
          "description": "Lime (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Melon"
      },
      {
          "name": "color_pink",
          "material": "pink_concrete",
          "color": [242, 127, 165],
          "description": "Pink (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Brain Coral (Coral Block, Coral, Coral Fan)"
      },
              {
          "name": "color_gray",
          "material": "gray_concrete",
          "color": [76, 76, 76],
          "description": "Acacia Wood, Gray (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Dead Coral (Coral Block, Coral, Coral Fan), Tinted Glass"
      },
      {
          "name": "color_light_gray",
          "material": "light_gray_concrete",
          "color": [153, 153, 153],
          "description": "Light Gray (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Banner, Glazed Terracotta, Concrete, Concrete Powder, Candle), Structure Block, Jigsaw Block"
      },
      {
          "name": "color_cyan",
          "material": "cyan_concrete",
          "color": [76, 127, 153],
          "description": "Cyan (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Prismarine (slab, stairs, wall), Warped (Roots, Fungus), Twisting Vines, Nether Sprouts, Sculk Sensor"
      },
      {
          "name": "color_purple",
          "material": "purple_concrete",
          "color": [127, 63, 178],
          "description": "Shulker Box, Purple (Wool, Carpet, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Mycelium, Chorus Plant, Chorus Flower, Repeating Command Block, Bubble Coral (Coral Block, Coral, Coral Fan), Amethyst Block, Budding Amethyst, Amethyst Cluster, Amethyst Bud (all sizes),"
      },
      {
          "name": "color_blue",
          "material": "blue_concrete",
          "color": [	51, 76, 178],
          "description": "Blue (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Tube Coral (Coral Block, Coral, Coral Fan)"
      },
      {
          "name": "color_brown",
          "material": "brown_concrete",
          "color": [102, 76, 51],
          "description": "Dark Oak (Planks, Log, Stripped Log, Wood, Stripped Wood, Sign, Pressure Plate, Trapdoor, Stairs, Slab, Fence Gate, Fence, Door), Spruce Log (side), Brown (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Soul Sand, Command Block, Brown Mushroom, Soul Soil"
      },
      {
          "name": "color_green",
          "material": "green_concrete",
          "color": [102, 127, 51],
          "description": "Green (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), End Portal Frame, Chain Command Block, Sea Pickle, Moss Carpet, Moss Block, Dried Kelp Block"
      },
      {
          "name": "color_red",
          "material": "red_concrete",
          "color": [153, 51, 51],
          "description": "Red (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Bricks (slab, stairs, wall), Red Mushroom Block, Nether Wart, Enchanting Table, Nether Wart Block, Fire Coral (Coral Block, Coral, Coral Fan), Red Mushroom, Shroomlight"
      },
      {
          "name": "color_black",
          "material": "black_concrete",
          "color": [25, 25, 25],
          "description": "Black (Wool, Carpet, Shulker Box, Bed (foot), Stained Glass, Glazed Terracotta, Concrete, Concrete Powder, Candle), Obsidian, End Portal, Dragon Egg, Coal Block, End Gateway, Basalt, Polished Basalt, Smooth Basalt, Block of Netherite, Ancient Debris, Crying Obsidian, Respawn Anchor, Blackstone (all variants, all stairs, all slabs, all walls), Gilded Blackstone"
      },
      {
          "name": "gold",
          "material": "gold_block",
          "color": [250, 238, 77],
          "description": "Block of Gold, Light Weighted Pressure Plate, Bell, Block of Raw Gold"
      },
      {
          "name": "diamond",
          "material": "diamond_block",
          "color": [92, 219, 213],
          "description": "Block of Diamond, Beacon, Prismarine Bricks (slab, stairs), Dark Prismarine (slab, stairs), Conduit"
      },
      {
          "name": "lapis",
          "material": "lapis_block",
          "color": [74, 128, 255],
          "description": "Block of Lapis Lazuli"
      },
      {
          "name": "emerald",
          "material": "emerald_block",
          "color": [0, 217, 58],
          "description": "Block of Emerald"
      },
      {
          "name": "podzol",
          "material": "spruce_planks",
          "color": [129, 86, 49],
          "description": "Podzol, Spruce (Planks, Log (vertical), Stripped Log, Wood, Stripped Wood, Sign, Pressure Plate, Trapdoor, Stairs, Slab, Fence Gate, Fence, Door), Oak Log (side), Jungle Log (side), Campfire, Soul Campfire"
      },
      {
          "name": "nether",
          "material": "netherrack",
          "color": [112, 2, 0],
          "description": "Netherrack, Nether Bricks (fence, slab, stairs, wall, chiseled, cracked), Nether Gold Ore, Nether Quartz Ore, Magma Block, Red Nether Bricks (slab, stairs, wall), Crimson (Roots, Fungus), Weeping Vines"
      },
      {
          "name": "terracotta_white",
          "material": "white_terracotta",
          "color": [209, 177, 161],
          "description": "White Terracotta, Calcite"
      },
      {
          "name": "terracotta_orange",
          "material": "orange_terracotta",
          "color": [159, 82, 36],
          "description": "Orange Terracotta"
      },
      {
          "name": "terracotta_magenta",
          "material": "magenta_terracotta",
          "color": [149, 87, 108],
          "description": "Magenta Terracotta"
      },
      {
          "name": "terracotta_light_blue",
          "material": "light_blue_terracotta",
          "color": [112, 108, 138],
          "description": "Light Blue Terracotta"
      },
      {
          "name": "terracotta_yellow",
          "material": "yellow_terracotta",
          "color": [186, 133, 36],
          "description": "Yellow Terracotta"
      },
      {
          "name": "terracotta_light_green",
          "material": "lime_terracotta",
          "color": [103, 117, 53],
          "description": "Lime Terracotta"
      },
      {
          "name": "terracotta_pink",
          "material": "pink_terracotta",
          "color": [160, 77, 78],
          "description": "Pink Terracotta"
      },
      {
          "name": "terracotta_gray",
          "material": "gray_terracotta",
          "color": [57, 41, 35],
          "description": "Gray Terracotta, Tuff"
      },
      {
          "name": "terracotta_light_gray",
          "material": "light_gray_terracotta",
          "color": [135, 107, 98],
          "description": "Light Gray Terracotta, Exposed Copper (including all cut, waxed, stair, and slab variants)"
      },
      {
          "name": "terracotta_cyan",
          "material": "cyan_terracotta",
          "color": [87, 92, 92],
          "description": "Cyan Terracotta"
      },
      {
          "name": "terracotta_purple",
          "material": "purple_terracotta",
          "color": [122, 73, 88],
          "description": "Purple (Terracotta, Shulker Box)"
      },
      {
          "name": "terracotta_blue",
          "material": "blue_terracotta",
          "color": [76, 62, 92],
          "description": "Blue Terracotta"
      },
      {
          "name": "terracotta_brown",
          "material": "brown_terracotta",
          "color": [76, 50, 35],
          "description": "Brown Terracotta, Pointed Dripstone, Dripstone Block"
      },
      {
          "name": "terracotta_green",
          "material": "green_terracotta",
          "color": [76, 82, 42],
          "description": "Green Terracotta"
      },
      {
          "name": "terracotta_red",
          "material": "red_terracotta",
          "color": [142, 60, 46],
          "description": "Red Terracotta"
      },
      {
          "name": "terracotta_black",
          "material": "black_terracotta",
          "color": [37, 22, 16],
          "description": "Black Terracotta"
      },
      {
          "name": "crimson_nylium",
          "material": "crimson_nylium",
          "color": [189, 48, 49],
          "description": "Crimson Nylium"
      },
      {
          "name": "crimson_stem",
          "material": "crimson_stem",
          "color": [148, 63, 97],
          "description": "Crimson (Fence, Fence Gate, Planks, Pressure Plate, Sign, Slab, Stairs, Stem, Stripped Stem, Trapdoor, Door)"
      },
      {
          "name": "crimson_hyphae",
          "material": "crimson_hyphae",
          "color": [92, 25, 29],
          "description": "Crimson (Hyphae, Stripped Hyphae)"
      },
      {
          "name": "warped_nylium",
          "material": "warped_nylium",
          "color": [22, 126, 134],
          "description": "Warped Nylium, Oxidized Copper (including all cut, waxed, stair, and slab variants)"
      },
      {
          "name": "warped_stem",
          "material": "warped_stem",
          "color": [58, 142, 140],
          "description": "Warped (Fence, Fence Gate, Planks, Pressure Plate, Sign, Slab, Stairs, Stem, Stripped Stem, Trapdoor, Door), Weathered Copper (including all cut, waxed, stair, and slab variants)"
      },
      {
          "name": "warped_hyphae",
          "material": "warped_hyphae",
          "color": [86, 44, 62],
          "description": "Warped (Hyphae, Stripped Hyphae)"
      },
      {
          "name": "warped_wart_block",
          "material": "warped_wart_block",
          "color": [20, 180, 133],
          "description": "Warped Wart Block"
      },
      {
          "name": "deepslate",
          "material": "deepslate",
          "color": [100, 100, 100],
          "description": "Deepslate (Gold Ore, Iron Ore, Coal Ore, Lapis Ore, Diamond Ore, Redstone Ore, Emerald Ore, Copper Ore), Deepslate (all variants, all stairs, all slabs, and all walls), Infested Deepslate"
      },
              {
          "name": "raw_iron",
          "material": "raw_iron_block",
          "color": [216, 175, 147],
          "description": "Block of Raw Iron"
      },
      {
          "name": "glow_lichen",
          "material": "glow_lichen",
          "color": [127, 167, 150],
          "description": "Glow Lichen"
      }
  ]
};

// $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback', function(data) {
//   colors = JSON.parse(data);
// });

// TODO - here
// const default_palette = "white lightgrey grey black brown red orange yellow lime green cyan "+
//    "lightblue blue purple magenta pink oak spruce crimson warped dirt sand clay stone deepslate nether quartz expocopper "+
//    "oxicopper foliage birchleaves conifers lichen darkcrimson darkwarped crimsonylium warpwart turquoise steel "+
//    "brightred gold emerald lapis rawiron calcite tuff dripstone slime web ice";
// const default_palette = "grass sand wool fire ice metal plant snow clay dirt stone water wood quartz color_orange color_magenta color_light_blue yellow color_light_green color_pink color_gray color_light_gray color_cyan color_purple color_blue color_brown color_green color_red color_black gold diamond lapis emerald podzol nether terracotta_white terracotta_orange terracotta_magenta terracotta_light_blue terracotta_yellow terracotta_light_green terracotta_pink terracotta_gray terracotta_light_gray terracotta_cyan terracotta_purple terracotta_blue terracotta_brown terracotta_green terracotta_red terracotta_black crimson_nylium crimson_stem crimson_hyphae warped_nylium warped_stem warped_hyphae warped_wart_block deepslate raw_iron glow_lichen";

var default_palette = ""

colors.list.forEach(element => {
  default_palette += element.name + " ";
});


const structures = {
  azalea_leaves:"H4sIAAAAAAAA/z2OsQ7CMAxEr0qBNP0AvoMJibkzYmJFphgpok2qxDD063GActItZ7+zHdCgzn5mA6C4WtzAchAvnjOKGqyvQ+wf2X2nZop5gf4yWGUh4R+xmWhgEf4gDu6U4sSpVFrYm9fV0DOqvYXTPGugJ1FLejIs6iONjO3oA/eJ7nKgWevoon7pUwZtR0LnAsYAtDu8AQyon5fPAAAA",
  glowstone:"H4sIAAAAAAAA/22NwQrCMBBEJ03VpsWTX+K1Z88eva9llWCblOyC4NdrwCiUDixzmDezLeBQi3+xBZDPFHdoOKhXz4Ish+11jMND2kw42DlKKf1ksREl5W9jyZgFY1aYaoXZzTSyKufXVYP6TBPjMPnAQ6Kb9vcxPkVjYJRw/w/Jp89edyKlCyfxMQDdEW8kGpIA+wAAAA==",
  glow_lichen:"H4sIAAAAAAAA/22PTW/CMAyG39J068eZH8J1Z84TJ64oLaZEhLiKXVXi1y/Z1k1CWLL89byW3QINjLgHlQCyF8k3OTaoKahTR4JsDd56z8NN2kw0KCeWVfRnJSpRq/SreGaKJ6ZIzPtkPanS99oa5tPeCdu7CzREe9GPgfvekygHQov2EHmimK9KLFlRGI0z1eiWtDN6Hkc6o7pYL6lZCc96XZEqcEzVOjQL/cs387Sm5sxL+Cnw4qDR83LybrhSSL90e6v2SFEcB6Db4QsBTLCIUwEAAA=="
};


/* Check for events
1. Ask user to confirm before closing the tab
2. Bind all UI elements to appropriate callbacks when DOM is loaded
3. Lazy-load carousel images after page loads */

window.addEventListener('beforeunload', function (event) {
  if (Number($("body").data("confirm-page-unload"))) {
    event.preventDefault();
    event.returnValue = '';
    return '';
  }
});


$(document).ready(function() {
  //Bind buttons and links to their actions
  console.log("Minecraft Pixel Art Maker - Document Ready !");
  $("input.custom-file-input").on('change', function(event){
    fileInputHandler(this, event.target.files[0]);
    $("body").data("confirm-page-unload", "1");
  }); 
  $("input[type='reset']").closest('form').on('reset', function() {
    resetImgHandler(this);
  }); 
  $("div[id^='3dOption']").on('click', function() {
    displayPaletteOptions(this);
  });
  $("button[id^='materialChooseBtn']").on('click', function() {
    configureColourModal(this);
  });
  $("form[id^='imageForm']").submit(function(event){
    submitImgFormHandler(this, event);
  });
  $("span[id^='deleteBtn']").click( function() { 
    deleteImgForm(this); 
  });
  $("button[id^='imgEditBtn']").click(function() {
    editImgForm(this);
  });
  $("#addNewImgBtn").click(newImageUpload);
  
  $("#writePackBtn").click(function(event) {
    startCreateBhvPack(event);
    $("body").data("confirm-page-unload", "1");
  });
  $("#resetAddonDiv").click(function(event) {
    clearBehaviourPack();
  });
  
  /*Colour Palette modalview and related UI*/
  $(".colour-insert").each(function (index, elem) {
    let h = $(elem).html();
    $(elem).html("<span style=\"color:"+$(elem).data('colour')+";\">"+icons.square+"</span>"+h);
  });
  $(".add-questionmark").each(function (index, elem) {
    let h = $(elem).html();
    $(elem).html(h+icons.questionmark);
  });
  
  //Bind Colour table modal's selection controls
  $("#clrSelBtn_All").click(function() { $("input[name='clrSelect']").prop('checked', true); });
  $("#clrSelBtn_None").click(function() { $("input[name='clrSelect']").prop('checked', false); });
  $("#clrSelBtn_Inv").click(function() {  
    $("input[name='clrSelect']").each(function(index, elem) {
      $(elem).prop('checked', !$(elem).prop('checked'));
    });
  });
  $("#clrSelBtn_Dye").click(function() {
    $("input[name='clrSelect']").each(function(index, elem) {
      $(elem).prop('checked', ((index < 16)? true : false));
    });
  });
  $("#clrSelBtn_NB").click(function() { 
    $("input[name='clrSelect']").eq(30).prop('checked', false);
    $("input[name='clrSelect']").eq(31).prop('checked', false);
  });
  
  //Initial setup
  $("#resetImageFormBtn_000001").click();
  
  $("#materialOptsDisplay_000001").data("selected", default_palette);
  refreshColourDisplay("000001");
  
  $('[data-toggle="tooltip"]').tooltip();

  // Prevent links in PWA window opening in browser
  const isPWA = window.matchMedia('(display-mode: standalone)');
  if (isPWA.matches) {
    $('a.alert-link[target="_blank"]').removeAttr('target');
  }
  
});



$(window).on('load', function() {
  for (var i=1; i<=5; i++) {
    $("div#cari"+i+" > img").attr('src', "images/d"+i+".png");
  }
  $("#demoCarousel").carousel({interval: 2000});
});



/* Begin Callback definitions */

function fileInputHandler(elem, file) {
  /*Image is stored as data: URI in the input's HTML data-imagecontent
  attribute till retrieved later */
  $(elem).next('.custom-file-label').html(file.name);
  var reader = new FileReader();
  reader.onload = function(loadevent){
    $(elem).data('imagecontent', loadevent.target.result);
  }
  reader.onerror = function(e){
    alert("Error\n\nThere was a problem loading this image.");
  }
  reader.readAsDataURL(file);
}


function resetImgHandler(elem) {
  var uid = $(elem).attr('id').slice(-6);
  setTimeout(function() {
    $("#ditherSwitch_"+uid).prop("checked", true);
    $("#mapSize11_"+uid).prop("checked", true);
    $("#materialOptsDisplay_"+uid).data("selected", default_palette);
    refreshColourDisplay(uid);
    $("#3dSwitch_"+uid).prop('checked', false);
    $("#extraHeightOption_"+uid).collapse('hide');
    $("input#heightInput_"+uid).attr("required", false);
  });
}


function displayPaletteOptions(elem) {
  //Display the correct extra options
  var uid = $(elem).attr('id').slice(-6);
  if ($("#3dSwitch_"+uid).prop('checked')) {
    $("#extraHeightOption_"+uid).collapse('show');
    $("input#heightInput_"+uid).attr("required", true);
  } else {
    $("#extraHeightOption_"+uid).collapse('hide');
    $("input#heightInput_"+uid).attr("required", false);
  }
}


function configureColourModal(elem) {
  var uid = $(elem).attr('id').slice(-6);
  var sel = $("#materialOptsDisplay_"+uid).data("selected");
  $("input[name='clrSelect']").each(function(index, chekbox) {
    $(chekbox).prop('checked', (sel.includes($(chekbox).attr('value'))));
  });
  $("#saveColoursBtn").off('click');
  $("#saveColoursBtn").click(function() {
    var clrset = [];
    $("input[name='clrSelect']").each(function(index, chekbox2) {
      console.log($(chekbox2).attr('value'));
      if ($(chekbox2).prop('checked')) {
        clrset.push($(chekbox2).attr('value'));
      }
    });
    console.log(clrset);
    $("#materialOptsDisplay_"+uid).data("selected", clrset.join(" "));
    refreshColourDisplay(uid);
  });
  $("#colourTableModal").modal('show');
}


function refreshColourDisplay(uid) {
  //colourmap is defined in imageProcessor.js
  var htmlc = [];
  for (var c of $("#materialOptsDisplay_"+uid).data("selected").split(" ")) {
    if (colourmap.get(c)!==undefined) {
      htmlc.push("<span style=\"color:rgb(" + colourmap.get(c).toString() + "); padding: 2px;\">"+
               icons.square_noborder +"</span>");
    } else {
      continue;
    }
  }
  var content = htmlc.join("");
  if (content.search(/\w/i) < 0) {
    content = "<i class=\"text-muted\">By default, all colours will be used</i>";
    $("#materialOptsDisplay_"+uid).data("selected", default_palette);
  } 
  $("#materialOptsDisplay_"+uid).html(content);
}


function submitImgFormHandler(elem, event) {
  /*Client side validation, 
  disable fields to prevent changes as some data is retrieved again later,
  then process the image (analyseImage of imageProcessor.js)*/
  event.preventDefault();
  var uid = $(elem).attr('id').slice(-6);
  var name = $("#fnNameInput_"+uid).val();
  for (var x of $("input[id^=fnName]")) {
    var otherid = $(x).attr('id').slice(-6);
    if ((otherid!=uid) && 
        ($(x).val().toUpperCase() == name.toUpperCase()) && 
        ($(x)[0].hasAttribute("disabled"))) {
      alert("Error \n\nYou have already used the function name \""+name+
           "\" for another image.\nPlease enter a new unique name !");
      return;
    }
  }
  $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
  var area = $("input[name='mapsizeopt_"+uid+"']:checked").val();
  area = [Number(area[0]), Number(area[2])];
  var palette = $("#materialOptsDisplay_"+uid).data("selected");
  var d3 = Boolean($("#3dSwitch_"+uid+":checked").length > 0);
  var dither = Boolean($("#ditherSwitch_"+uid+":checked").length > 0);
  var image = new Image();
  image.onload = function() {
    var analysis = analyseImage(uid, image, area, palette, d3, dither);
    if (!analysis) {
      $("form#imageForm_"+uid+" :input").prop('disabled', true);
      $("form#imageForm_"+uid+" :radio").prop('disabled', true);
      $("form#imageForm_"+uid+" :checkbox").prop('disabled', true);
      $("form#imageForm_"+uid+" :file").prop('disabled', true);
      $("#formActionsPreSubmit_"+uid).addClass("d-none");
      $("#formActionsPreSubmit_"+uid).removeClass("d-flex");
      $("#formActionsPostSubmit_"+uid).addClass("d-flex");
      $("#formActionsPostSubmit_"+uid).removeClass("d-none");
      $("#navbarList li[id='link_"+uid+"'] a").html(
        name + `<span id="deleteBtn_${uid}" class="delete-X"> &nbsp; &times;</span>`
      );
      $("#deleteBtn_"+uid).click( function(event){deleteImgForm(this);} );
      
      deleteSurvivalGuide(uid, true);
      
    } else {
      alert("Error\n\nAn unknown error occurred while processing");
      console.error("Error processing image "+uid);
    }
    $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
  }
  image.onerror = function() {
    alert("Error\n\nThere was a problem reading the uploaded image !");
    $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
  }
  image.src = $("#imgInput_"+uid).data('imagecontent');
}


function deleteImgForm(elem) {
  var uid = $(elem).attr('id').slice(-6);
  var name = $("#fnNameInput_"+uid).val();
  if (! name) {name = "this image form";}
  var verify = confirm("Delete "+name+" : \nAre you sure ?");
  if (verify) {
    $("#link_"+uid).remove();
    $("#tabPane_"+uid).remove();
    console.info("Removed image form ", uid);
    deleteSurvivalGuide(uid);
    $("#navbarList a.nav-link").first().click();
  }
}


function editImgForm(elem) {
  var uid = $(elem).attr('id').slice(-6);
  $("form#imageForm_"+uid+" :input").prop('disabled', false);
  $("form#imageForm_"+uid+" :radio").prop('disabled', false);
  $("form#imageForm_"+uid+" :checkbox").prop('disabled', false);
  $("form#imageForm_"+uid+" :file").prop('disabled', false);
  $("#formActionsPreSubmit_"+uid).removeClass("d-none");
  $("#formActionsPreSubmit_"+uid).addClass("d-flex");
  $("#formActionsPostSubmit_"+uid).removeClass("d-flex");
  $("#formActionsPostSubmit_"+uid).addClass("d-none");
  $("#viewOrigImgBtn_"+uid).off('click');
  $("#viewResizedImgBtn_"+uid).off('click');
  $("#viewFinalImgBtn_"+uid).off('click');
  $("#imageForm_"+uid).removeData('finalimage');
  //console.info("Re-enabled editing of image "+uid);
}


function uuidv4() {
  // https://stackoverflow.com/a/2117523
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

// TODO - here pack creation
function startCreateBhvPack(event) {
  event.preventDefault();
  var f, processed=[];
  for (f of $("form[id^='imageForm']")) {
    if ($(f).data('finalimage')!=undefined) {
      processed.push({uid: $(f).attr('id').slice(-6),
                      name: $("#fnNameInput_"+$(f).attr('id').slice(-6)).val(),
                      pic: $(f).data('finalimage')});
    } 
  }
  var l = $("form[id^='imageForm']").length - processed.length;
  if (l > 0) {
    let w = confirm("Warning\n\n"+l+" of the image forms have not been processed."+
                    "These will not be included in the pack - Continue anyway ?");
    if (!w) {return;}
  }
  $("#spinnerModal").addClass('d-block');
  $("#spinnerModal").removeClass('d-none');
  
  writeBhvPack(processed, [uuidv4(), uuidv4()]);
}



function writeBhvPack(images, uuids) {
  var pack = new JSZip();

  var pack_name = $("#bpackNameInput").val(); // NAME = FOLDER
  console.log(pack_name);
  // description: $("#bpackDescInput").val(),


  var pack_mcmeta = JSON.stringify({
    "pack": {
      "pack_format": 8,
      "description": "Created with https://gd-codes.github.io/mc-pixelart-maker, on " + new Date().toDateString()
    }
  }, null, 2);
  pack.file('pack.mcmeta', pack_mcmeta);


  var icon;
  if (images.length>4) {
    icon = makeLogo(images.reverse().slice(-4).map(x => x.pic));
  } else if (images.length==0) {
    icon = makeLogo([]);
  } else {
    icon = makeLogo(images.reverse().map(x => x.pic));
  }
  pack.file('pack_icon.png', icon.split(',')[1], {base64:true});


  var data = pack.folder("data");
  var mapart = data.folder("mapart");


  var keep = Boolean($("#keepBlocks:checked").length > 0);
  var link = Boolean($("#useLinkedPos:checked").length > 0);
  var fnfolder = mapart.folder('functions');
  for (let o of images) {
    let palette = $("#materialOptsDisplay_"+o.uid).data("selected").split(" ");
    let extrainfo = ($("#3dSwitch_"+o.uid+":checked").length > 0)? $("#heightInput_"+o.uid).val() : 0;
    let fnlist = writeCommands(o.name, o.pic, palette, extrainfo, keep, link);
    for (let f=0; f<fnlist.length; f++) {
      fnfolder.file(o.name+"/"+(f+1)+".mcfunction", fnlist[f]);
    }
  }


  const strfolder = mapart.folder('structures');

  // $.get("http://127.0.0.1:8080/test_datapack/structures/mapart/azalea_leaves.nbt", function(data, status){
  //   strfolder.file("azalea_leaves.nbt", data);
  // });
  // $.get("http://127.0.0.1:8080/test_datapack/structures/mapart/glow_lichen.nbt", function(data, status){
  //   strfolder.file("glow_lichen.nbt", data);
  // });
  // $.get("http://127.0.0.1:8080/test_datapack/structures/mapart/glowstone.nbt", function(data, status){
  //   strfolder.file("glowstone.nbt", data);
  // });

  strfolder.file("azalea_leaves.nbt", structures.azalea_leaves, {base64:true});
  strfolder.file("glow_lichen.nbt", structures.glow_lichen, {base64:true});
  strfolder.file("glowstone.nbt", structures.glowstone, {base64:true});

  
  
  pack.generateAsync({type:"blob"})
  .then(function(blob) {
      setSaveAsZip(blob, pack_name);
      $("#spinnerModal").addClass('d-none');
      $("#spinnerModal").removeClass('d-block');
  }, function (err) {
      alert("Uh oh\nSomething went wrong !");
      console.error("Unexpected error creating blob : \n", err);
      $("#spinnerModal").addClass('d-none');
      $("#spinnerModal").removeClass('d-block');
  });
  pack.generateAsync({type:"base64"})
    .then(function(uri) {
    uri = "data:application/zip;base64," + uri;
      $("#altDownloadPack").click(function(event) {
        event.preventDefault();
        saveAs(uri, `${pack_name}.zip`);
      })
    }, function(err) {
      alert("Uh oh\nSomething went wrong !");
      console.error("Unexpected error creating Data URL : \n", err);
  });
}



function setSaveAsZip(blob, name) {
  $("#packActionsPreProcess").addClass('d-none');
  $("#packActionsPostProcess").removeClass('d-none');
  $("#downloadPackBtn").click(function() {
    saveAs(blob, `${name}.zip`);
  });
}

function clearBehaviourPack() {
  $("#packActionsPostProcess").addClass('d-none');
  $("#packActionsPreProcess").removeClass('d-none');
  $("#downloadPackBtn").off("click");
  $("#altDownloadPack").off("click");
  $("#packForm")[0].reset();
}


function addSurvGuideGenerator(uid) {
  let fname = $("#fnNameInput_"+uid).val();
  let big = $("input[name='mapsizeopt_"+uid+"']:checked").val();
  big = Number(big[0]) * Number(big[2]); // Additional warning for large picures
  if (big > 6) {
    $("#guideTabsContainer").append(`<div class="tab-pane fade show" id="guideTab_${uid}">
<div class="row mb-2"><div class="col-md-4"></div><div class="col-md-4 btn btn-outline-info btn-block" 
id="genGuideBtn_${uid}">View Map Guide for ${fname}</div><div class="col-md-4"></div></div>
<div class="alert alert-danger mx-auto p-2 mt-3 mb-0"><p class="text-center mb-0"><strong class="text-dark">Warning &nbsp; </strong>
Generating the detailed guide for such a large image may possibly cause lag/performance issues. Proceed with caution.
</p></div></div>`);
  } else {
    $("#guideTabsContainer").append(`<div class="tab-pane fade show" id="guideTab_${uid}">
<div class="row mb-2"><div class="col-md-4"></div><div class="col-md-4 btn btn-outline-info btn-block" 
id="genGuideBtn_${uid}">View Map Guide for ${fname}</div><div class="col-md-4"></div></div></div>`);
  }
  
  $("#guideTabList").append(`<li class="nav-item" id="guidelink_${uid}"><a class="nav-link" data-toggle="tab" 
      href="#guideTab_${uid}">${fname} <span id="deleteGuide_${uid}" class="delete-X"> &nbsp; &times;</span></a></li>`);
  
  $("#deleteGuide_"+uid).click( function(){deleteSurvivalGuide(uid);} );
  
  $("#genGuideBtn_"+uid).click(function() { 
    $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
    setTimeout( function() {
      createSurvivalGuide(uid); // Defined in `dynamichtml.js`
      $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
    }); // Timeout to let "processing.." modal become visible; page appears to freeze otherwise
  });
  $("#guidelink_"+uid+" a").click();
}


function deleteSurvivalGuide(uid, readd=false) {
  $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
  setTimeout( function() {
    $("#guideTab_"+uid).remove();
    $("#guidelink_"+uid).remove();
    $("#guideTabList a.nav-link").first().click();
    $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
    if (readd) {
      addSurvGuideGenerator(uid);
    }
  });
}