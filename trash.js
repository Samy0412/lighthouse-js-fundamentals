const smartGarbage = function (trash, bins) {
  switch (trash) {
    case "waste":
      bins.waste += 1;
      break;
    case "recycling":
      bins.recycling += 1;
      break;
    case "compost":
      bins.compsot += 1;
  }
  return bins;
};

smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });
