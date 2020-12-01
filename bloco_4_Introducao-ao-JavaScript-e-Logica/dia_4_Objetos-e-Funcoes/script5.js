let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  Recorrent: 'sim',
};

let info2 = {
  personagem: 'Tio patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'Oúltimo MacPatinhas',
  Recorrent: 'sim'
}

for (let key in info) {
  if (info[key] === info2[key]) {
    console.log ('Ambos recorentes // Atenção para essa útima linha!');
  } else {
  console.log (info[key],'e',info2[key]);
  }
}

