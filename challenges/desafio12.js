db.voos.find({ "aeroportoDestino.pais": { $in: ["ARGENTINA", "BRASIL", "CHILE"] } }).count();
