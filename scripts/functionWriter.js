/*
Minecraft Pixel Art Maker
© gd-codes 2020
https://gd-codes.github.io/mc-pixelart-maker/
*/

//Do NOT change these values. The names in `blocks` are ordered to match `colourlist` of `imageProcessor.js`.
// const blocks = ["grass_block","dirt","stone","dried_kelp_block","oak_planks","diorite","pumpkin",
//       "magenta_concrete","light_blue_concrete","yellow_concrete","lime_concrete","birch_planks","pink_concrete","gray_concrete","light_gray_concrete",
//       "cyan_concrete","purple_concrete","blue_concrete","dark_oak_planks","green_concrete","red_concrete","black_concrete","cobweb",
//       "gold_block","diamond_block","lapis_block","emerald_block","spruce_planks","netherrack", 
//       "white_terracotta","orange_terracotta","magenta_terracotta","light_blue_terracotta","redstone_block","yellow_terracotta",
//       "warped_hyphae 0","crimson_nylium 0","warped_wart_block 0","diamond_block 0","iron_block 0","redstone_block 0",
//       "gold_block 0","emerald_block 0","lapis_block 0","raw_iron_block 0","calcite 0","tuff 0","dripstone_block 0",
//       "slime 0","web 0","blue_ice 0","grass 0"];

var blocks = [];

colors.list.forEach(element => {
  blocks.push(element.material);
});

function findYMap(imgdata, maxY) {
  var Ymap = [], x, z, column, c, type, lastY, min;
  for (x=0; x<imgdata.width; x++) {
    column = [0]; min=0;
    for (z=0; z<imgdata.height; z++) {
      c = indexOfArray(getPixelAt(x,z,imgdata), colourlist);
      type = c % 3;
      // type 0 if it is in base colours, 1 if darker, 2 if brighter shade
      //Block must be at same height; lower; higher; than the one N of it
      lastY = column[column.length - 1];
      switch (type) {
        case 0: 
          column.push(lastY);
          break;
        case 1:
          column.push(lastY - 2);
          if (lastY-2 < min) {
            min = lastY-2;
          }
          break;
        case 2:
          column.push(lastY + 2);
          break;
      }
    }
    //Bring everything within 0 and height limit
    column = column.map(a => (a - min) % maxY);
    Ymap.push(column);
  }
  return Ymap;
}

function writeCommands(name, imobj, palette, extrainfo, keep, linkpos) {
  var zone_origins=[], x0, z0, i, fnlist=[], yMap, ymax=1;
  //Divide image area into 64x128 zones for individual functions (8164 pixels per zone)
  for (z0=0; z0<imobj.height; z0+=128) {
    for (x0=0; x0<imobj.width; x0+=64) {
      zone_origins.push([x0,z0]);
    }
  } 
  if (extrainfo > 1) {
    ymax = extrainfo;             //If extended, extrainfo contains the max height
    yMap = findYMap(imobj, ymax); // Get the (y) heights if it is a 3D arrangement
  }
  for (i=0; i<zone_origins.length; i++) {
    var fun="", x, y, z, xloop, zloop, pix, code, replMode;
    x0 = zone_origins[i][0]; z0 = zone_origins[i][1];
    fun += "say Running commands ".concat((i+1), "/", zone_origins.length, 
            " of function group ", name, " (x=", x0, "-", x0+63, ", z=",
            z0, "-", z0+127, ")\nsay Common coords : ", linkpos,
            " | Do not destroy : ", keep, " | Colours : ", palette.length, 
            " | Height : ", ymax, "\n");
    /* If positions are linked, coordinates for each zone have same origin (image's top left)
    Else iterate from (0,0) each time - user will have to shift by x=64/z=128 for each zone*/
    xloop = (linkpos)? x0 : 0;
    zloop = (linkpos)? z0 : 0;
    replMode = (keep)? " keep\n" : "\n";
    if (!keep) { //Replace any existing blocks with air
      for (var j=0; j<=ymax; j++) {
        fun+="fill ~".concat(xloop, " ~", j, " ~", zloop, " ~", xloop+63, 
                             " ~", j, " ~", zloop+127, " air replace\n");
      }
    }
    for (x=xloop; x < xloop+64; x++) {
      for (z=zloop; z < zloop+128; z++) {
        pix = (linkpos)? getPixelAt(x,z,imobj) : getPixelAt(x+x0,z+z0,imobj);
        code = blocks[Math.floor(indexOfArray(pix, colourlist) / 3)];
        y = (extrainfo <= 1)? 0 : ((linkpos)? yMap[x][z] : yMap[x+x0][z+z0]);
        switch (code) {
          //   // Anomalies - some blocks must be loaded as structures
          // case "azalea_leaves":
          //   fun += ((keep)?`execute @p ~ ~ ~ detect ~${x} ~${y} ~${z} air -1 `:"") + 
          //     `structure load mapart:azalea_leaves ~${x} ~${y} ~${z}\n`;
          //   break;
          case "glow_lichen":
            fun += `setblock ~${x} ~${y-1} ~${z} structure_block[mode=load]{name:"mapart:glow_lichen",posX:0,posY:0,posZ:0,rotation:"NONE",mirror:"NONE",mode:"LOAD"} replace\n`;
            fun += `setblock ~${x} ~${y-2} ~${z} redstone_block replace\n`;
            fun += `setblock ~${x} ~${y-2} ~${z} air replace\n`;
            // fun += ((keep)?`execute @p ~ ~ ~ detect ~${x} ~${y-1} ~${z} air -1 `:"") + 
            // fun += ((keep)?`execute if block ~${x} ~${y-1} ~${z} air run `:"") + 
            //   // `structure load mapart:glow_lichen ~${x} ~${y-1} ~${z}\n`;
            //   `setblock ~${x} ~${y} ~${z} structure_block[mode=load]{name:"mapart:glow_lichen",posX:0,posY:0,posZ:0,rotation:"NONE",mirror:"NONE",mode:"LOAD"} replace\n`;
            //   fun += `setblock ~${x} ~${y-1} ~${z} redstone_block replace\n`;
            //   fun += `setblock ~${x} ~${y-1} ~${z} air replace\n`;
            break;
          default : // Normal case, direct placement for most of the blocks
            fun += `setblock ~${x} ~${y} ~${z} ${code}${replMode}`;
        }
      }
    }
    if (!linkpos && i<zone_origins.length-1) { //If not linked and there are more zones,
      var nextzone = zone_origins[i+1];        //Shift the user to the origin for next zone
      //Marker block
      // fun += "structure load mapart:glowstone ~".concat(nextzone[0]-x0, " ~-1 ~", nextzone[1]-z0, "\n");
      // fun += `setblock ~ ~ ~ structure_block[mode=load]{name:"mapart:glowstone",posX:${nextzone[0]-x0},posY:-1,posZ:${nextzone[1]-z0},rotation:"NONE",mirror:"NONE",mode:"LOAD"} replace\n`;
      // fun += "setblock ~ ~-1 ~ redstone_block replace\n";
      // fun += "setblock ~ ~-1 ~ air replace\n";
      fun += `setblock ~${nextzone[0]-x0} ~-1 ~${nextzone[1]-z0} glowstone replace\n`;
      fun += "teleport @p ~".concat(nextzone[0]-x0, " ~ ~", nextzone[1]-z0, "\n")
    }
    fun = fun.replace(/~0/gm, "~");
    fnlist.push(fun); //New function for each zone
  }
  return fnlist;
}
