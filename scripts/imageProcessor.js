/*
Minecraft Pixel Art Maker
© gd-codes 2020
https://gd-codes.github.io/mc-pixelart-maker/
*/

/*None of these values should be > 220
The keys also must match the `value`s of checkboxes in the colour table modal
The order of this Map is important !*/
// const colourmap = new Map([
//   ["white", [220, 220, 220]], ["lightgrey", [132, 132, 132]], ["grey", [65, 65, 65]], ["black", [22, 22, 22]], 
//   ["brown", [88, 65, 44]], ["red", [132, 44, 44]], ["orange", [186, 108, 44]], ["yellow", [198, 198, 44]], 
//   ["lime", [108, 176, 22]], ["green", [88, 108, 44]], ["cyan", [66, 108, 132]], ["lightblue", [88, 132, 186]], 
//   ["blue", [44, 66, 152]], ["purple", [108, 55, 152]], ["magenta", [152, 66, 186]], ["pink", [208, 108, 142]], 
//   ["oak", [124, 100, 60]], ["spruce", [112, 74, 42]], ["crimson", [128, 54, 84]], ["warped", [50, 122, 120]], 
//   ["dirt", [130, 94, 66]], ["sand", [212, 200, 140]], ["clay", [140, 144, 158]], ["stone", [96, 96, 96]], 
//   ["deepslate", [86, 86, 86]], ["nether", [96, 0, 0]], ["quartz", [220, 216, 210]], ["expocopper", [116, 92, 84]], 
//   ["oxicopper", [18, 108, 116]], ["foliage", [0, 108, 0]], ["oakleaves", [55, 80, 20]], ["birchleaves", [60, 78, 38]], 
//   ["conifers", [45, 70, 45]], ["lichen", [108, 144, 128]], ["darkcrimson", [80, 20, 25]], 
//   ["darkwarped", [75, 37, 52]], ["crimsonylium", [162, 42, 42]], ["warpwart", [15, 155, 115]], 
//   ["turquoise", [78, 188, 182]], ["steel", [144, 144, 144]], ["brightred", [220, 0, 0]], ["gold", [215, 205, 65]], 
//   ["emerald", [0, 188, 50]], ["lapis", [64, 110, 220]], ["rawiron", [185, 150, 125]], ["calcite", [180, 150, 140]], 
//   ["tuff", [50, 35, 30]], ["dripstone", [65, 42, 30]], ["slime", [108, 152, 48]], ["web", [170, 170, 170]], 
//   ["ice", [138, 138, 220]], ["grass", [125, 160, 75]]
// ]);
// const colourmap = new Map([
//   ["grass", [127, 178, 56]], ["sand", [247, 233, 163]], ["wool", [199, 199, 199]], ["fire", [255, 0, 0]], 
//   ["ice", [	160, 160, 255]], ["metal", [167, 167, 167]], ["plant", [	0, 124, 0]], ["snow", [255, 255, 255]], 
//   ["clay", [164, 168, 184]], ["dirt", [151, 109, 77]], ["stone", [112, 112, 112]], ["water", [64, 64, 255]], 
//   ["wood", [143, 119, 72]], ["quartz", [255, 252, 245]], ["color_orange", [	216, 127, 51]], ["color_magenta", [178, 76, 216]], 
//   ["color_light_blue", [102, 153, 216]], ["yellow", [	229, 229, 51]], ["color_light_green", [127, 204, 25]], ["color_pink", [242, 127, 165]], 
//   ["color_gray", [76, 76, 76]], ["color_light_gray", [153, 153, 153]], ["color_cyan", [76, 127, 153]], ["color_purple", [127, 63, 178]], 
//   ["color_blue", [51, 76, 178]], ["color_brown", [102, 76, 51]], ["color_green", [102, 127, 51]], ["color_red", [153, 51, 51]], 
//   ["color_black", [25, 25, 25]], ["gold", [250, 238, 77]], ["diamond", [92, 219, 213]], ["lapis", [74, 128, 255]], 
//   ["emerald", [0, 217, 58]], ["podzol", [129, 86, 49]], ["nether", [	112, 2, 0]], ["terracotta_white", [209, 177, 161]], 
//   ["terracotta_orange", [159, 82, 36]], ["terracotta_magenta", [149, 87, 108]], ["terracotta_light_blue", [112, 108, 138]], ["terracotta_yellow", [186, 133, 36]], 
//   ["terracotta_light_green", [103, 117, 53]], ["terracotta_pink", [160, 77, 78]], ["terracotta_gray", [57, 41, 35]], ["terracotta_light_gray", [135, 107, 98]], 
//   ["terracotta_cyan", [87, 92, 92]], ["terracotta_purple", [122, 73, 88]], ["terracotta_blue", [76, 62, 92]], ["terracotta_brown", [	76, 50, 35]], 
//   ["terracotta_green", [76, 82, 42]], ["terracotta_red", [142, 60, 46]], ["terracotta_black", [37, 22, 16]], ["crimson_nylium", [189, 48, 49]], 
//   ["crimson_stem", [148, 63, 97]],  ["crimson_hyphae", [92, 25, 29]],  ["warped_nylium", [	22, 126, 134]],  ["warped_stem", [58, 142, 140]], 
//   ["warped_hyphae", [86, 44, 62]],  ["warped_wart_block", [20, 180, 133]],  ["deepslate", [100, 100, 100]],  ["raw_iron", [216, 175, 147]], 
//   ["glow_lichen", [127, 167, 150]]
// ]);

const colourmap = new Map([]);

colors.list.forEach(element => {
  colourmap.set(element.name, element.color);
});


// https://minecraft.fandom.com/wiki/Map_item_format
function lightPixel(rgb) {
  // return [Math.round(255/220*rgb[0]), Math.round(255/220*rgb[1]), Math.round(255/220*rgb[2])];
  return [Math.round(0.86*rgb[0]), Math.round(0.86*rgb[1]), Math.round(0.86*rgb[2])];
}
function darkPixel(rgb) {
  // return [Math.round(180/220*rgb[0]), Math.round(180/220*rgb[1]), Math.round(180/220*rgb[2])];
  return [Math.round(0.71*rgb[0]), Math.round(0.71*rgb[1]), Math.round(0.71*rgb[2])];
}

var colourlist = [];
colors.list.forEach(function(element) {
  colourlist.push(element.name); // Order is important
  colourlist.push(darkPixel(element.color));
  colourlist.push(lightPixel(element.color));
});

var colourtokens = [];
colors.list.forEach(element => {
  colourtokens.push(element.name);
});


function analyseImage(uid, image, area, palette, d3, dither) {
  //Manage the display etc
  var canv = $("#testCanvas")[0];
  var ctx = canv.getContext('2d');
  canv.height = image.height; canv.width = image.width;
  var w = area[0]*128, h = area[1]*128;
  var dispScale;
  switch (Math.max(w, h)) {
    case 128:
    case 256:
      dispScale = 4; break;
    case 384:
      dispScale = 2; break;
    default:
      dispScale = 1;      
  }
  var p = [];
  for (var cn of palette.split(" ")) {
    if (colourmap.get(cn) !== undefined) {
      var rgb = (colourmap.get(cn)); p.push(rgb);
      if (d3) {
        p.push(darkPixel(rgb)); p.push(lightPixel(rgb));
      }
    }
  }
  ctx.drawImage(image, 0, 0, image.width, image.height);
  ctx.clearRect(0,0,canv.width,canv.height);
  canv.height = h; canv.width = w;
  ctx.drawImage(image, 0, 0, w, h);
  var imgData = ctx.getImageData(0,0,w,h);
  var resized_image = canv.toDataURL("image/png");
  ctx.clearRect(0, 0, w, h);
  
  var finalImgData = convertPalette(p, imgData, dither);
  ctx.putImageData(finalImgData, 0, 0);
  var converted_image = canv.toDataURL("image/png");
  ctx.clearRect(0, 0, w, h);
  $("#imageForm_"+uid).data('finalimage', finalImgData);
  
  // Processing done, configure the preview buttons
  $("#viewOrigImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', image.src)
      .height(image.height)
      .width(image.width);
    $('#downloadImageButton').attr('href', image.src);
    $('#downloadImageButton').attr('download', ($('#fnNameInput_'+uid).val() + '-original.png'));
    $("#imageDisplayModal").modal('show');
  });
  $("#viewResizedImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', resized_image)
      .height(h*dispScale)
      .width(w*dispScale);
    $('#downloadImageButton').attr('href', resized_image);
    $('#downloadImageButton').attr('download', ($('#fnNameInput_'+uid).val() + '-resized.png'));
    $("#imageDisplayModal").modal('show');
  });
  $("#viewFinalImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', converted_image)
      .height(h*dispScale)
      .width(w*dispScale);
    $('#downloadImageButton').attr('href', converted_image);
    $('#downloadImageButton').attr('download', ($('#fnNameInput_'+uid).val() + '-converted.png'));
    $("#imageDisplayModal").modal('show');
  })
}

function closestColour(r, g, b, palette) {
  var delta = Infinity;
  var clr, c, d;
  /* Clamping necessary since some values can go beyond range
  due to the dithering algorithm */
  r = Math.min(Math.max(r, 0), 255);
  g = Math.min(Math.max(g, 0), 255);
  b = Math.min(Math.max(b, 0), 255);
  for (c of palette) {
    /*Redmean based weighted formula for colour distance*/
    if (r+c[0] > 256) { 
      d = 2*(r-c[0])*(r-c[0]) + 4*(g-c[1])*(g-c[1]) + 3*(b-c[2])*(b-c[2]);
    } else {
      d = 3*(r-c[0])*(r-c[0]) + 4*(g-c[1])*(g-c[1]) + 2*(b-c[2])*(b-c[2]);
    }
    if (d < delta) {
      delta = d; clr = c;
    }
  }
  return clr;
}

function convertPalette(pal, pixels, dither) {
  //Quantize the image
  var c, dr, dg, db, i, j;
  var data = pixels.data;
  for(i=0; i < data.length; i+=4) {
    c = closestColour(data[i], data[i+1], data[i+2], pal);
    if (dither) { // Apply floyd-steinberg dither
      dr = data[i] - c[0]; dg = data[i+1] - c[1]; db = data[i+2] - c[2];
      if ((i/4 + 1)%pixels.width != 0) { //pixel is not on right edge of image
        j = i + 4; 
        data[j] += 7/16*dr; data[j+1] += 7/16*dg; data[j+2] += 7/16*db;
      }
      if (i/4 < data.length/4 - pixels.width) { //pixel is not on bottom edge of image
        j = i + 4*pixels.width;
        data[j] += 5/16*dr; data[j+1] += 5/16*dg; data[j+2] += 5/16*db;
        if ((i/4 + 1)%pixels.width != 0) { //also not on right edge
          j = i + 4*pixels.width + 4;
          data[j] += 1/16*dr; data[j+1] += 1/16*dg; data[j+2] += 1/16*db;
        }
        if ((i/4)%pixels.width != 0) { //also not on left edge
          j = i + 4*pixels.width - 4;
          data[j] += 3/16*dr; data[j+1] += 3/16*dg; data[j+2] += 3/16*db;
        }
      }
      
    }
    data[i] = c[0]; data[i+1] = c[1]; data[i+2] = c[2]; data[i+3] = 255;
    //No transparent pixels allowed
  }
  return pixels;
}

function makeLogo(images) {
  //Called at the time of writing behaviour pack
  var canv = $("#testCanvas")[0], ctx = canv.getContext('2d');
  var logodata = $("#logoImg")[0];
  canv.width = 128; canv.height = 128;
  if (images == []) {
    ctx.drawImage(logodata, 0, 0, 128, 128);
  } else {
    for (var i=0; i<images.length; i++) {
      ctx.putImageData(images[i], 16*i, 16*i);
    }
    ctx.drawImage(logodata, 88, 88, 32, 32);
  }
  try {
    return canv.toDataURL('image/png');
  } catch (err) {
    return "data:image/png;base64,";
    console.error("Error forming a pack icon", err);
  } 
}

function getPixelAt(x, z, dataobj) {
  // Return RGB of pixel (x,z) from image's continuous (1D) data byte seq
  let i = 4*(dataobj.width*(z) + x);
  return [dataobj.data[i], dataobj.data[i+1], dataobj.data[i+2]];
}

function indexOfArray(a, parent_arr) {
  for (var i=0; i<parent_arr.length; i++) {
    if (a[0]==parent_arr[i][0] && a[1]==parent_arr[i][1] && a[2]==parent_arr[i][2]) {
      return i;
    }
  } //Arrays are in different variables -> normal comparison always false
}
